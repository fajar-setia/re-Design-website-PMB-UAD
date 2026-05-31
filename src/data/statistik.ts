export interface Pendaftar {
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

const STORAGE_KEY = "statistik_pendaftar";

export function getPendaftar(): Pendaftar[] {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (stored) {
    try {
      return JSON.parse(stored) as Pendaftar[];
    } catch {
      return [];
    }
  }

  return [];
}

export function simpanPendaftar(
  data: Omit<
    Pendaftar,
    "id" | "noPendaftaran" | "tanggalDaftar" | "daftar" | "tahap1" | "tahap2" | "tahap3"
  >
) {
  const list = getPendaftar();

  const noUrut = list.length + 1;

  const entry: Pendaftar = {
    ...data,

    noPendaftaran: String(Math.floor(1000000000 + Math.random() * 9000000000)),

    id: `REG-${String(noUrut).padStart(4, "0")}`,

    tanggalDaftar: new Date().toISOString(),

    // semua tahap awalnya belum selesai
    daftar: false,
    tahap1: false,
    tahap2: false,
    tahap3: false,
  };

  list.push(entry);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));

  return entry;
}
