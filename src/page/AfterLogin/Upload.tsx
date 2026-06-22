import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  UploadCloud,
  FileCheck,
  AlertCircle,
  FileText,
  Users,
  CreditCard,
  Clock,
  ChevronRight,
  Eye,
  Trash2,
  CheckCircle2,
  XCircle,
  RefreshCw,
  ArrowLeft,
  ShieldCheck,
  AlertTriangle,
  FileImage,
} from "lucide-react";

/* ============================================================
   TIPE PENDAFTAR (sama dengan statistik.ts)
   ============================================================ */
interface Pendaftar {
  id: string;
  noPendaftaran: string;
  nama: string;
  email: string;
  jalur: string;
  tahunAkademik: string;
  gelombang: string;
  tahap: string;
  prodiPilihan1: string;
  prodiPilihan2: string;
  jurusan: string;
  tanggalDaftar: string;
  daftar: boolean;
  tahap1: boolean;
  tahap2: boolean;
  tahap3: boolean;
}

const STORAGE_KEY_PENDAFTAR = "statistik_pendaftar";
const STORAGE_KEY_BERKAS = "pmb_berkas_upload";

/* ============================================================
   AMBIL / UPDATE PENDAFTAR DARI LOCALSTORAGE
   ============================================================ */
function getPendaftar(): Pendaftar[] {
  const stored = localStorage.getItem(STORAGE_KEY_PENDAFTAR);
  if (stored) {
    try {
      return JSON.parse(stored) as Pendaftar[];
    } catch {
      return [];
    }
  }
  return [];
}

function updateTahap1Pendaftar(noPendaftaran: string, value: boolean) {
  const list = getPendaftar();
  const updated = list.map((p) =>
    p.noPendaftaran === noPendaftaran ? { ...p, tahap1: value } : p
  );
  localStorage.setItem(STORAGE_KEY_PENDAFTAR, JSON.stringify(updated));
  return updated;
}

/* ============================================================
   TIPE BERKAS
   ============================================================ */
interface BerkasUpload {
  id: string;
  nama: string;
  deskripsi: string;
  format: string[];
  maxSize: number;
  icon: string;
  wajib: boolean;
  status: "belum" | "terupload" | "terverifikasi" | "ditolak";
  fileName: string | null;
  fileSize: number | null;
  fileType: string | null;
  alasanTolak: string | null;
  uploadedAt: string | null;
}

const defaultBerkasList: BerkasUpload[] = [
  {
    id: "foto",
    nama: "Pas Foto 3x4",
    deskripsi: "Formal, latar merah atau biru, maksimal 500KB",
    format: ["image/jpeg", "image/png", "image/jpg"],
    maxSize: 500 * 1024,
    icon: "image",
    wajib: true,
    status: "belum",
    fileName: null,
    fileSize: null,
    fileType: null,
    alasanTolak: null,
    uploadedAt: null,
  },
  {
    id: "ijazah",
    nama: "Ijazah / SKL",
    deskripsi: "Scan asli/legalisir, format PDF, maksimal 2MB",
    format: ["application/pdf"],
    maxSize: 2 * 1024 * 1024,
    icon: "file-text",
    wajib: true,
    status: "belum",
    fileName: null,
    fileSize: null,
    fileType: null,
    alasanTolak: null,
    uploadedAt: null,
  },
  {
    id: "kk",
    nama: "Kartu Keluarga",
    deskripsi: "Scan lengkap semua anggota, format PDF/JPG, maksimal 1MB",
    format: ["application/pdf", "image/jpeg", "image/png", "image/jpg"],
    maxSize: 1 * 1024 * 1024,
    icon: "users",
    wajib: true,
    status: "belum",
    fileName: null,
    fileSize: null,
    fileType: null,
    alasanTolak: null,
    uploadedAt: null,
  },
  {
    id: "ktp",
    nama: "KTP / Kartu Pelajar",
    deskripsi: "Scan depan-belakang, format PDF/JPG, maksimal 1MB",
    format: ["application/pdf", "image/jpeg", "image/png", "image/jpg"],
    maxSize: 1 * 1024 * 1024,
    icon: "credit-card",
    wajib: true,
    status: "belum",
    fileName: null,
    fileSize: null,
    fileType: null,
    alasanTolak: null,
    uploadedAt: null,
  },
  {
    id: "bukti-bayar",
    nama: "Bukti Pembayaran",
    deskripsi: "Screenshot transfer atau kwitansi, maksimal 1MB",
    format: ["image/jpeg", "image/png", "image/jpg", "application/pdf"],
    maxSize: 1 * 1024 * 1024,
    icon: "file-check",
    wajib: true,
    status: "belum",
    fileName: null,
    fileSize: null,
    fileType: null,
    alasanTolak: null,
    uploadedAt: null,
  },
];

/* ============================================================
   AMBIL / SIMPAN BERKAS KE LOCALSTORAGE
   ============================================================ */
function getBerkasDariStorage(): BerkasUpload[] {
  const stored = localStorage.getItem(STORAGE_KEY_BERKAS);
  if (stored) {
    try {
      return JSON.parse(stored) as BerkasUpload[];
    } catch {
      return defaultBerkasList.map((b) => ({ ...b }));
    }
  }
  return defaultBerkasList.map((b) => ({ ...b }));
}

function simpanBerkasKeStorage(list: BerkasUpload[]) {
  localStorage.setItem(STORAGE_KEY_BERKAS, JSON.stringify(list));
}

/* ============================================================
   HELPER
   ============================================================ */
function formatBytes(bytes: number | null): string {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

function formatTanggal(isoString: string | null): string {
  if (!isoString) return "—";
  const tgl = new Date(isoString);
  return tgl.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function hitungSisaHari(batas: string): number {
  const sekarang = new Date();
  const batasDate = new Date(batas);
  const diff = batasDate.getTime() - sekarang.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function IconBerkas({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "image": return <FileImage className={className} />;
    case "file-text": return <FileText className={className} />;
    case "users": return <Users className={className} />;
    case "credit-card": return <CreditCard className={className} />;
    case "file-check": return <FileCheck className={className} />;
    default: return <FileText className={className} />;
  }
}

/* ============================================================
   COMPONENT: Upload Berkas PMB UAD
   ============================================================ */
export default function Upload() {
  const navigate = useNavigate();

  const [pendaftarList, setPendaftarList] = useState<Pendaftar[]>([]);
  const [berkasList, setBerkasList] = useState<BerkasUpload[]>([]);
  const [riwayat, setRiwayat] = useState<{ id: number; waktu: string; pesan: string; tipe: string }[]>([]);

  const [dragOverId, setDragOverId] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /* ── Load data dari localStorage saat mount ── */
  useEffect(() => {
    const pendaftar = getPendaftar();
    setPendaftarList(pendaftar);

    const berkas = getBerkasDariStorage();
    setBerkasList(berkas);

    const submittedFlag = localStorage.getItem("pmb_berkas_submitted");
    if (submittedFlag === "true") setSubmitted(true);

    // Load riwayat dari storage
    const storedRiwayat = localStorage.getItem("pmb_riwayat");
    if (storedRiwayat) {
      try {
        setRiwayat(JSON.parse(storedRiwayat));
      } catch { /* ignore */ }
    }
  }, []);

  /* ── Ambil pendaftar terakhir (yang sedang aktif) ── */
  const pendaftar = pendaftarList.length > 0 ? pendaftarList[pendaftarList.length - 1] : null;
  const sudahIsiFormulir = pendaftar !== null;

  /* ── Hitung progress ── */
  const totalWajib = berkasList.filter((b) => b.wajib).length;
  const sudahUpload = berkasList.filter(
    (b) => b.status === "terupload" || b.status === "terverifikasi"
  ).length;
  const progressPercent = totalWajib > 0 ? Math.round((sudahUpload / totalWajib) * 100) : 0;
  const semuaWajibTerupload = sudahUpload === totalWajib && totalWajib > 0;

  /* ── Batas upload ── */
  const batasUpload = pendaftar
    ? new Date(new Date(pendaftar.tanggalDaftar).getTime() + 30 * 24 * 60 * 60 * 1000)
    : null;
  const sisaHari = batasUpload ? hitungSisaHari(batasUpload.toISOString()) : 0;

  /* ── Toast ── */
  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  /* ── Tambah & simpan riwayat ── */
  const addRiwayat = (pesan: string, tipe: string = "info") => {
    const now = new Date();
    const jam = now.getHours().toString().padStart(2, "0");
    const menit = now.getMinutes().toString().padStart(2, "0");
    const newItem = {
      id: Date.now(),
      waktu: `${jam}:${menit}`,
      pesan,
      tipe,
    };
    const updated = [newItem, ...riwayat];
    setRiwayat(updated);
    localStorage.setItem("pmb_riwayat", JSON.stringify(updated));
  };

  /* ── Handle file upload ── */
  const handleFile = (berkasId: string, file: File) => {
    const berkas = berkasList.find((b) => b.id === berkasId);
    if (!berkas) return;

    const fileTypeNormalized = file.type;
    const isFormatValid = berkas.format.some((fmt) => {
      if (fmt === "image/jpg" && fileTypeNormalized === "image/jpeg") return true;
      return fmt === fileTypeNormalized;
    });

    if (!isFormatValid) {
      showToast(
        `Format tidak didukung. Gunakan: ${berkas.format
          .map((f) => f.split("/")[1].toUpperCase().replace("JPEG", "JPG"))
          .filter((v, i, a) => a.indexOf(v) === i)
          .join(", ")}`,
        "error"
      );
      return;
    }

    if (file.size > berkas.maxSize) {
      showToast(`Ukuran file melebihi batas ${formatBytes(berkas.maxSize)}`, "error");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target?.result as string;

      const updated = berkasList.map((b) =>
        b.id === berkasId
          ? {
              ...b,
              status: "terupload" as const,
              fileName: file.name,
              fileSize: file.size,
              fileType: file.type,
              uploadedAt: new Date().toISOString(),
              alasanTolak: null,
            }
          : b
      );

      setBerkasList(updated);
      simpanBerkasKeStorage(updated);
      localStorage.setItem(`pmb_preview_${berkasId}`, base64);

      showToast(`✅ "${berkas.nama}" berhasil diupload`);
      addRiwayat(`Berkas "${berkas.nama}" berhasil diupload`, "success");
    };
    reader.readAsDataURL(file);
  };

  /* ── Drag & Drop ── */
  const onDragOver = (e: React.DragEvent, id: string) => {
    e.preventDefault();
    setDragOverId(id);
  };
  const onDragLeave = () => setDragOverId(null);
  const onDrop = (e: React.DragEvent, id: string) => {
    e.preventDefault();
    setDragOverId(null);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(id, file);
  };

  /* ── Input file ── */
  const onFileInput = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const file = e.target.files?.[0];
    if (file) handleFile(id, file);
    e.target.value = "";
  };

  /* ── Hapus berkas ── */
  const hapusBerkas = (id: string) => {
    const berkas = berkasList.find((b) => b.id === id);
    if (!berkas) return;

    const updated = berkasList.map((b) =>
      b.id === id
        ? {
            ...b,
            status: "belum" as const,
            fileName: null,
            fileSize: null,
            fileType: null,
            uploadedAt: null,
            alasanTolak: null,
          }
        : b
    );

    setBerkasList(updated);
    simpanBerkasKeStorage(updated);
    localStorage.removeItem(`pmb_preview_${id}`);

    showToast(`🗑️ "${berkas.nama}" dihapus`);
    addRiwayat(`Berkas "${berkas.nama}" dihapus`, "warning");
  };

  /* ── Simulasi verifikasi admin ── */
  const simulasiVerifikasi = (id: string) => {
    const berkas = berkasList.find((b) => b.id === id);
    if (!berkas) return;

    const sukses = Math.random() > 0.3;
    const updated = berkasList.map((b) =>
      b.id === id
        ? {
            ...b,
            status: sukses ? ("terverifikasi" as const) : ("ditolak" as const),
            alasanTolak: sukses
              ? null
              : "Dokumen tidak terbaca / blur. Silakan scan ulang dengan resolusi lebih tinggi.",
          }
        : b
    );

    setBerkasList(updated);
    simpanBerkasKeStorage(updated);

    showToast(
      sukses ? `✅ "${berkas.nama}" terverifikasi admin` : `❌ "${berkas.nama}" ditolak admin`,
      sukses ? "success" : "error"
    );
    addRiwayat(
      `Berkas "${berkas.nama}" ${sukses ? "terverifikasi" : "ditolak"} admin`,
      sukses ? "success" : "error"
    );
  };

  /* ═══════════════════════════════════════════════════════════
     KIRIM SEMUA BERKAS + UPDATE TAHAP1 DI DASHBOARD
     ═══════════════════════════════════════════════════════════ */
  const kirimSemuaBerkas = () => {
    if (!semuaWajibTerupload) {
      showToast("Lengkapi semua berkas wajib terlebih dahulu!", "error");
      return;
    }
    if (!pendaftar) return;

    setIsSubmitting(true);
    setTimeout(() => {
      // 1. Update flag submitted
      setIsSubmitting(false);
      setSubmitted(true);
      localStorage.setItem("pmb_berkas_submitted", "true");

      // 2. UPDATE TAHAP1 DI LOCALSTORAGE PENDAFTAR (kunci utama!)
      updateTahap1Pendaftar(pendaftar.noPendaftaran, true);

      // 3. Update state lokal
      setPendaftarList((prev) =>
        prev.map((p) =>
          p.noPendaftaran === pendaftar.noPendaftaran ? { ...p, tahap1: true } : p
        )
      );

      showToast("🎉 Berkas dikirim! Tahap Verifikasi telah aktif di Dashboard.");
      addRiwayat("Semua berkas dikirim untuk verifikasi admin. Tahap1 diperbarui.", "success");
    }, 1500);
  };

  /* ── Reset demo ── */
  const resetDemo = () => {
    if (!pendaftar) return;

    localStorage.removeItem(STORAGE_KEY_BERKAS);
    localStorage.removeItem("pmb_berkas_submitted");
    localStorage.removeItem("pmb_riwayat");
    berkasList.forEach((b) => localStorage.removeItem(`pmb_preview_${b.id}`));

    // Reset tahap1 juga
    updateTahap1Pendaftar(pendaftar.noPendaftaran, false);
    setPendaftarList((prev) =>
      prev.map((p) =>
        p.noPendaftaran === pendaftar.noPendaftaran ? { ...p, tahap1: false } : p
      )
    );

    setBerkasList(defaultBerkasList.map((b) => ({ ...b })));
    setSubmitted(false);
    setRiwayat([]);
    showToast("Demo direset. Silakan upload ulang.", "success");
  };

  /* ── Status config ── */
  const statusConfig = {
    belum: { border: "border-dashed border-slate-300", bg: "bg-slate-50/50" },
    terupload: { border: "border-solid border-blue-300", bg: "bg-blue-50/30" },
    terverifikasi: { border: "border-solid border-green-300", bg: "bg-green-50/30" },
    ditolak: { border: "border-solid border-red-300", bg: "bg-red-50/30" },
  };

  /* ============================================================
     RENDER
     ============================================================ */
  return (
    <main className="min-h-screen bg-[#f8f9fa] px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* TOAST */}
        {toast && (
          <div className={`fixed top-6 right-6 z-50 flex items-center gap-3 rounded-2xl px-6 py-4 shadow-xl transition-all ${
            toast.type === "error" ? "bg-red-600 text-white" : "bg-[#003366] text-white"
          }`}>
            {toast.type === "error" ? <AlertCircle className="h-5 w-5" /> : <CheckCircle2 className="h-5 w-5" />}
            <span className="font-semibold text-sm">{toast.message}</span>
          </div>
        )}

        {/* BREADCRUMB */}
        <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <button onClick={() => navigate("/dashboard")} className="flex items-center gap-1 hover:text-[#003366] transition-colors font-medium">
            <ArrowLeft className="h-4 w-4" /> Dashboard
          </button>
          <ChevronRight className="h-4 w-4" />
          <span className="font-semibold text-[#003366]">Upload Berkas</span>
        </div>

        {/* ═══════════════════════════════════════════════════════
            KONDISI A: BELUM ISI FORMULIR → EMPTY STATE
            ═══════════════════════════════════════════════════════ */}
        {!sudahIsiFormulir && (
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(0,51,102,0.05)]">
            <div className="flex items-center gap-4 bg-[#003366] p-6">
              <div className="rounded-2xl bg-white/10 p-3 backdrop-blur-sm">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white">DATA PENDAFTARAN</h2>
                <p className="text-sm text-blue-200">Universitas Ahmad Dahlan</p>
              </div>
            </div>

            <div className="flex flex-col items-center px-6 py-16 text-center md:px-20">
              <div className="relative mb-8">
                <div className="absolute inset-0 scale-150 rounded-full bg-blue-50 blur-2xl opacity-60" />
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-slate-100 bg-white shadow-sm">
                  <svg className="h-12 w-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  <div className="absolute -bottom-1 -right-1 rounded-full border-4 border-white bg-yellow-400 p-1.5">
                    <svg className="h-4 w-4 text-[#6c5000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mx-auto mb-10 max-w-xl">
                <h3 className="mb-3 text-3xl font-bold text-[#003366]">Belum ada data pendaftaran</h3>
                <p className="leading-relaxed text-slate-600">
                  Silakan mengisi formulir pendaftaran terlebih dahulu untuk memulai perjalanan akademik Anda di Universitas Ahmad Dahlan.
                </p>
              </div>

              <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                <button onClick={() => navigate("/getin")} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-10 py-4 font-bold text-[#003366] shadow-lg shadow-yellow-200/50 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  ISI FORMULIR SEKARANG
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 py-4 font-bold text-slate-700 transition-all duration-300 hover:border-[#003366] hover:text-[#003366]">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  Panduan Pendaftaran
                </button>
              </div>
            </div>

            <div className="border-t border-slate-100 bg-slate-50 p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3 text-slate-500">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  <span className="text-sm font-medium">Butuh bantuan? Hubungi WhatsApp Admission kami.</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-[#003366]">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  0811-2345-6789
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════════════════════
            KONDISI B: SUDAH ISI FORMULIR → UPLOAD CENTER
            ═══════════════════════════════════════════════════════ */}
        {sudahIsiFormulir && pendaftar && (
          <>
            {/* Header Identitas */}
            <section className="mb-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(0,51,102,0.05)]">
              <div className="bg-[#003366] px-6 py-5 sm:px-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                      <ShieldCheck className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-white sm:text-2xl">Upload Berkas Pendaftaran</h1>
                      <p className="text-sm text-blue-200">#{pendaftar.noPendaftaran} — {pendaftar.jalur}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-[#003366]">
                      <Clock className="h-4 w-4" />
                      Tahap: Upload Berkas
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-6 py-5 sm:px-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-2xl bg-slate-50 px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Nama Lengkap</p>
                    <p className="mt-1 font-bold text-[#003366]">{pendaftar.nama}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Program Studi 1</p>
                    <p className="mt-1 font-bold text-[#003366]">{pendaftar.prodiPilihan1}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Gelombang</p>
                    <p className="mt-1 font-bold text-[#003366]">{pendaftar.gelombang}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Batas Upload</p>
                    <p className="mt-1 font-bold text-red-600">
                      {batasUpload ? batasUpload.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }) : "—"}
                      {sisaHari > 0 ? ` (${sisaHari} hari lagi)` : " (Melewati batas!)"}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Progress Bar */}
            <section className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-[#003366]">Progress Upload Berkas</h2>
                  <p className="text-sm text-slate-500">{sudahUpload} dari {totalWajib} berkas wajib telah diupload</p>
                </div>
                <span className="text-2xl font-extrabold text-[#003366]">{progressPercent}%</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
                <div className="h-full rounded-full bg-[#003366] transition-all duration-700 ease-out" style={{ width: `${progressPercent}%` }} />
              </div>
              <div className="mt-3 flex items-center gap-2 text-sm">
                {semuaWajibTerupload ? (
                  <span className="inline-flex items-center gap-1.5 font-semibold text-green-600">
                    <CheckCircle2 className="h-4 w-4" /> Semua berkas wajib sudah terupload. Siap dikirim!
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 font-semibold text-amber-600">
                    <AlertCircle className="h-4 w-4" /> Lengkapi semua berkas wajib untuk melanjutkan.
                  </span>
                )}
              </div>
            </section>

            {/* Main Grid */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* LEFT: Daftar Berkas */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#003366]">
                    <UploadCloud className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#003366]">Daftar Berkas</h2>
                    <p className="text-sm text-slate-500">Upload semua berkas persyaratan di bawah ini</p>
                  </div>
                </div>

                <div className="space-y-5">
                  {berkasList.map((berkas) => {
                    const config = statusConfig[berkas.status];
                    const isDragOver = dragOverId === berkas.id;
                    const previewBase64 = localStorage.getItem(`pmb_preview_${berkas.id}`);
                    const isImage = berkas.fileType?.startsWith("image/") ?? false;

                    return (
                      <div
                        key={berkas.id}
                        className={`overflow-hidden rounded-3xl border-2 bg-white shadow-sm transition-all duration-300 ${
                          isDragOver ? "border-[#003366] bg-blue-50/50 scale-[1.01]" : config.border
                        } ${config.bg}`}
                        onDragOver={(e) => onDragOver(e, berkas.id)}
                        onDragLeave={onDragLeave}
                        onDrop={(e) => onDrop(e, berkas.id)}
                      >
                        <div className="flex items-start justify-between px-6 pt-6 sm:px-8">
                          <div className="flex items-center gap-4">
                            <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                              berkas.status === "belum" ? "bg-slate-100" : berkas.status === "terupload" ? "bg-blue-100" : berkas.status === "terverifikasi" ? "bg-green-100" : "bg-red-100"
                            }`}>
                              <IconBerkas name={berkas.icon} className={`h-7 w-7 ${
                                berkas.status === "belum" ? "text-slate-400" : berkas.status === "terupload" ? "text-blue-600" : berkas.status === "terverifikasi" ? "text-green-600" : "text-red-600"
                              }`} />
                            </div>
                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <h3 className="font-bold text-[#003366]">{berkas.nama}</h3>
                                {berkas.wajib && (
                                  <span className="rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-600">Wajib</span>
                                )}
                                {berkas.status === "terupload" && (
                                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700"><Clock className="h-3 w-3" /> Menunggu Verifikasi</span>
                                )}
                                {berkas.status === "terverifikasi" && (
                                  <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700"><CheckCircle2 className="h-3 w-3" /> Terverifikasi</span>
                                )}
                                {berkas.status === "ditolak" && (
                                  <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700"><XCircle className="h-3 w-3" /> Perlu Perbaikan</span>
                                )}
                              </div>
                              <p className="mt-0.5 text-sm text-slate-500">{berkas.deskripsi}</p>
                            </div>
                          </div>
                        </div>

                        <div className="px-6 pb-6 pt-4 sm:px-8">
                          {berkas.status === "belum" || berkas.status === "ditolak" ? (
                            <div>
                              {berkas.status === "ditolak" && berkas.alasanTolak && (
                                <div className="mb-4 flex items-start gap-3 rounded-2xl bg-red-50 p-4 border border-red-200">
                                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                                  <div>
                                    <p className="text-sm font-bold text-red-700">Alasan Penolakan:</p>
                                    <p className="text-sm text-red-600">{berkas.alasanTolak}</p>
                                  </div>
                                </div>
                              )}
                              <label className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-10 transition-all hover:border-[#003366] hover:bg-blue-50/30 ${
                                isDragOver ? "border-[#003366] bg-blue-50/50" : "border-slate-300"
                              }`}>
                                <UploadCloud className="mb-3 h-10 w-10 text-slate-400" />
                                <p className="text-sm font-semibold text-slate-600">Klik atau drag & drop file di sini</p>
                                <p className="mt-1 text-xs text-slate-400">
                                  Maks {formatBytes(berkas.maxSize)} · {berkas.format.map((f) => f.split("/")[1].toUpperCase().replace("JPEG", "JPG")).filter((v, i, a) => a.indexOf(v) === i).join(", ")}
                                </p>
                                <input type="file" className="hidden" accept={berkas.format.join(",")} onChange={(e) => onFileInput(e, berkas.id)} />
                              </label>
                            </div>
                          ) : (
                            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4">
                              <div className="flex items-center gap-4">
                                {previewBase64 && isImage ? (
                                  <div className="h-16 w-16 overflow-hidden rounded-xl border border-slate-200">
                                    <img src={previewBase64} alt={berkas.nama} className="h-full w-full object-cover" />
                                  </div>
                                ) : (
                                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-100">
                                    <FileText className="h-8 w-8 text-slate-400" />
                                  </div>
                                )}
                                <div>
                                  <p className="font-semibold text-[#003366] text-sm">{berkas.fileName}</p>
                                  <p className="text-xs text-slate-500">{formatBytes(berkas.fileSize)} · {formatTanggal(berkas.uploadedAt)}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                {previewBase64 && isImage && (
                                  <button
                                    onClick={() => { const win = window.open(); if (win) win.document.write(`<img src="${previewBase64}" style="max-width:100%" />`); }}
                                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:border-[#003366] hover:text-[#003366] transition"
                                    title="Lihat Preview"
                                  >
                                    <Eye className="h-4 w-4" />
                                  </button>
                                )}
                                <button onClick={() => hapusBerkas(berkas.id)} className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:border-red-300 hover:bg-red-50 hover:text-red-600 transition" title="Hapus">
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Tombol Aksi */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <button
                    onClick={kirimSemuaBerkas}
                    disabled={!semuaWajibTerupload || isSubmitting || submitted}
                    className={`inline-flex items-center justify-center gap-2 rounded-2xl px-10 py-4 font-bold shadow-lg transition-all duration-300 ${
                      semuaWajibTerupload && !submitted
                        ? "bg-[#003366] text-white shadow-blue-900/20 hover:-translate-y-0.5 hover:bg-blue-800 active:scale-95"
                        : submitted
                        ? "bg-green-600 text-white cursor-default"
                        : "cursor-not-allowed bg-slate-200 text-slate-400"
                    }`}
                  >
                    {isSubmitting ? <><RefreshCw className="h-5 w-5 animate-spin" /> Mengirim...</> : submitted ? <><CheckCircle2 className="h-5 w-5" /> Berkas Terkirim</> : <><UploadCloud className="h-5 w-5" /> Kirim Semua Berkas</>}
                  </button>

                  <button onClick={() => navigate("/dashboard")} className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 font-bold text-slate-600 transition-all hover:border-[#003366] hover:text-[#003366]">
                    <ArrowLeft className="h-5 w-5" /> Kembali ke Dashboard
                  </button>
                </div>

                {/* Simulasi Admin */}
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-amber-700">🎓 Demo Skripsi — Simulasi Verifikasi Admin</p>
                  <p className="mb-3 text-sm text-amber-800">Klik tombol di bawah untuk mensimulasikan proses verifikasi berkas oleh admin.</p>
                  <div className="flex flex-wrap gap-2">
                    {berkasList.filter((b) => b.status === "terupload").map((b) => (
                      <button key={b.id} onClick={() => simulasiVerifikasi(b.id)} className="rounded-xl bg-amber-200 px-4 py-2 text-xs font-bold text-amber-800 hover:bg-amber-300 transition">
                        Verifikasi: {b.nama}
                      </button>
                    ))}
                    {berkasList.filter((b) => b.status === "terupload").length === 0 && (
                      <p className="text-sm text-amber-600 italic">Upload berkas terlebih dahulu untuk simulasi verifikasi.</p>
                    )}
                  </div>
                </div>

                <button onClick={resetDemo} className="text-xs text-slate-400 hover:text-slate-600 underline">Reset Demo (hapus semua data berkas & reset tahap1)</button>
              </div>

              {/* RIGHT: Sidebar */}
              <div className="space-y-6">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-[#003366]"><Clock className="h-5 w-5" /> Riwayat Aktivitas</h3>
                  <div className="space-y-4 max-h-80 overflow-y-auto">
                    {riwayat.length === 0 ? (
                      <p className="text-center text-sm text-slate-400">Belum ada aktivitas</p>
                    ) : (
                      riwayat.map((r) => (
                        <div key={r.id} className="flex gap-3">
                          <div className={`mt-1 h-2 w-2 shrink-0 rounded-full ${r.tipe === "success" ? "bg-green-500" : r.tipe === "error" ? "bg-red-500" : r.tipe === "warning" ? "bg-amber-500" : "bg-blue-500"}`} />
                          <div>
                            <p className="text-sm text-slate-700">{r.pesan}</p>
                            <p className="text-xs text-slate-400">{r.waktu}</p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-lg font-bold text-[#003366]">📋 Panduan Upload</h3>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex gap-2"><span className="font-bold text-[#003366]">1.</span> Pastikan scan dokumen terbaca jelas dan tidak blur.</li>
                    <li className="flex gap-2"><span className="font-bold text-[#003366]">2.</span> File PDF lebih disarankan untuk dokumen resmi.</li>
                    <li className="flex gap-2"><span className="font-bold text-[#003366]">3.</span> Ukuran maksimal per file adalah 2MB.</li>
                    <li className="flex gap-2"><span className="font-bold text-[#003366]">4.</span> Semua berkas wajib diupload sebelum batas waktu.</li>
                    <li className="flex gap-2"><span className="font-bold text-[#003366]">5.</span> Setelah dikirim, berkas akan diverifikasi 1-3 hari kerja.</li>
                  </ul>
                </div>

                <div className="rounded-3xl bg-[#003366] p-6 text-white">
                  <h3 className="mb-2 text-lg font-bold">Butuh Bantuan?</h3>
                  <p className="mb-4 text-sm text-blue-200">Hubungi helpdesk PMB UAD jika mengalami kendala teknis saat upload berkas.</p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2"><span>📞</span><span className="font-semibold">0811-2345-6789</span></p>
                    <p className="flex items-center gap-2"><span>✉️</span><span className="font-semibold">pmb@uad.ac.id</span></p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}