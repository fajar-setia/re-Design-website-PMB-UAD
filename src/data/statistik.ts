export interface Pendaftar {
  id: string;
  nama: string;
  email: string;
  prodiPilihan1: string;
  prodiPilihan2: string;
  jurusan: string;
  tanggalDaftar: string;
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

export function simpanPendaftar(data: Omit<Pendaftar, "id" | "tanggalDaftar" | "tahap1" | "tahap2" | "tahap3">) {
  const list = getPendaftar();
  const entry: Pendaftar = {
    ...data,
    id: `REG-${String(list.length + 1).padStart(4, "0")}`,
    tanggalDaftar: new Date().toISOString(),
    tahap1: true,
    tahap2: true,
    tahap3: true,
  };
  list.push(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  return entry;
}
