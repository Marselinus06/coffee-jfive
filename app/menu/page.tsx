"use client";

import { useState } from "react";
import Link from "next/link";

type MenuItem = {
  nama: string;
  harga: string;
  gambar: string;
  kategori: "makanan" | "minuman";
};

const makanan: MenuItem[] = [
  {
    nama: "Nasi Ikan Mas Crispy",
    harga: "Rp 16.000",
    gambar: "/images/nasi-goreng-spesial.png",
    kategori: "makanan",
  },
  {
    nama: "Bakso J'Five",
    harga: "Rp 13.000",
    gambar: "/images/nasi-goreng-spesial.png",
    kategori: "makanan",
  },
  {
    nama: "Nasi Ayam Panggang",
    harga: "Rp 13.000",
    gambar: "/images/nasi-goreng-spesial.png",
    kategori: "makanan",
  },
  {
    nama: "Nasi Ayam Goreng",
    harga: "Rp 13.000",
    gambar: "/images/nasi-goreng-spesial.png",
    kategori: "makanan",
  },
  {
    nama: "Nasi Goreng",
    harga: "Rp 13.000",
    gambar: "/images/nasi-goreng-spesial.png",
    kategori: "makanan",
  },
  {
    nama: "Mie Panggang J'Five",
    harga: "Rp 15.000",
    gambar: "/images/mie-singki.png",
    kategori: "makanan",
  },
  {
    nama: "Mie Kering",
    harga: "Rp 14.000",
    gambar: "/images/mie-singki.png",
    kategori: "makanan",
  },
  {
    nama: "Mie Goreng",
    harga: "Rp 13.000",
    gambar: "/images/mie-singki.png",
    kategori: "makanan",
  },
  {
    nama: "Mie Kuah",
    harga: "Rp 13.000",
    gambar: "/images/mie-singki.png",
    kategori: "makanan",
  },
  {
    nama: "Mie Telur",
    harga: "Rp 8.000",
    gambar: "/images/mie-singki.png",
    kategori: "makanan",
  },
  {
    nama: "Dimsum J'Five",
    harga: "Rp 10.000",
    gambar: "/images/mie-singki.png",
    kategori: "makanan",
  },
  {
    nama: "Piscok J'Five",
    harga: "Rp 8.000",
    gambar: "/images/mie-singki.png",
    kategori: "makanan",
  },
  {
    nama: "Banana Stick",
    harga: "Rp 6.000",
    gambar: "/images/mie-singki.png",
    kategori: "makanan",
  },
  {
    nama: "Cassava Stick",
    harga: "Rp 6.000",
    gambar: "/images/mie-singki.png",
    kategori: "makanan",
  },
  {
    nama: "Nasi Putih",
    harga: "Rp 5.000",
    gambar: "/images/nasi-goreng-spesial.png",
    kategori: "makanan",
  },
];

const minuman: MenuItem[] = [
  {
    nama: "Soda Gembira",
    harga: "Rp 12.000",
    gambar: "/images/kopi-susu-singki.png",
    kategori: "minuman",
  },
  {
    nama: "Jus Tamarela",
    harga: "Rp 10.000",
    gambar: "/images/kopi-susu-singki.png",
    kategori: "minuman",
  },
  {
    nama: "Jus Alpokat",
    harga: "Rp 10.000",
    gambar: "/images/kopi-susu-singki.png",
    kategori: "minuman",
  },
];

export default function MenuPage() {
  const [kategoriAktif, setKategoriAktif] =
    useState<"makanan" | "minuman">("makanan");

  const menuYangDitampilkan =
    kategoriAktif === "makanan" ? makanan : minuman;

  return (
    <main className="min-h-screen bg-[#F5EFE6] text-[#2B2118]">

      {/* ==================================================
          NAVBAR
      ================================================== */}
      <nav className="flex items-center justify-between bg-[#2B2118] px-6 py-5 text-[#F5EFE6] md:px-12">

        <div>
          <h1 className="text-lg font-bold leading-tight tracking-wide md:text-xl">
            COFFEE J&apos; FIVE
          </h1>

          <p className="mt-1 text-[10px] tracking-[0.25em] text-[#C8A27A] md:text-xs">
            SINGKI&apos;
          </p>
        </div>

        <Link
          href="/"
          className="rounded-full border border-[#C8A27A] px-5 py-2 text-sm font-semibold transition hover:bg-[#C8A27A] hover:text-[#2B2118]"
        >
          ← Kembali ke Beranda
        </Link>

      </nav>


      {/* ==================================================
          HEADER
      ================================================== */}
      <section className="bg-[#2B2118] px-6 py-20 text-center text-[#F5EFE6] md:px-12 md:py-28">

        <p className="text-sm font-semibold tracking-[0.3em] text-[#C8A27A]">
          COFFEE J&apos; FIVE SINGKI&apos;
        </p>

        <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
          Semua Menu Kami
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#E5D8C8] md:text-lg">
          Temukan berbagai pilihan makanan dan minuman untuk menemani
          waktu santai dan kebersamaan Anda.
        </p>

      </section>


      {/* ==================================================
          TAB KATEGORI
      ================================================== */}
      <section className="sticky top-0 z-40 border-b border-[#E5D8C8] bg-[#F5EFE6]/95 px-4 py-4 backdrop-blur">

        <div className="mx-auto flex max-w-md justify-center gap-3">

          {/* MAKANAN */}
          <button
            type="button"
            onClick={() => setKategoriAktif("makanan")}
            className={`rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 ${
              kategoriAktif === "makanan"
                ? "bg-[#2B2118] text-[#F5EFE6] shadow-md"
                : "border border-[#9A704B] bg-transparent text-[#5A4636] hover:bg-[#E5D8C8]"
            }`}
          >
            Makanan
          </button>


          {/* MINUMAN */}
          <button
            type="button"
            onClick={() => setKategoriAktif("minuman")}
            className={`rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 ${
              kategoriAktif === "minuman"
                ? "bg-[#2B2118] text-[#F5EFE6] shadow-md"
                : "border border-[#9A704B] bg-transparent text-[#5A4636] hover:bg-[#E5D8C8]"
            }`}
          >
            Minuman
          </button>

        </div>
      </section>


      {/* ==================================================
          MENU CONTENT
      ================================================== */}
      <section className="px-6 py-16 md:px-12 md:py-24">

        <div className="mx-auto max-w-6xl">

          {/* JUDUL KATEGORI */}
          <div className="text-center">

            <p className="text-sm font-semibold tracking-[0.3em] text-[#9A704B]">
              {kategoriAktif === "makanan" ? "FOOD" : "DRINKS"}
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              {kategoriAktif === "makanan"
                ? "Pilihan Makanan"
                : "Pilihan Minuman"}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#5A4636]">
              {kategoriAktif === "makanan"
                ? "Berbagai pilihan makanan untuk menemani waktu makan dan kebersamaan Anda."
                : "Pilihan minuman segar untuk menemani waktu santai Anda."}
            </p>

          </div>


          {/* ==================================================
              GRID MENU
          ================================================== */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {menuYangDitampilkan.map((menu) => (

              <article
                key={menu.nama}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* FOTO */}
                <div className="relative h-60 w-full overflow-hidden bg-[#C8A27A]">

                  <img
                    src={menu.gambar}
                    alt={menu.nama}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* LABEL */}
                  <div className="absolute left-4 top-4 rounded-full bg-[#2B2118]/90 px-4 py-2 text-xs font-semibold text-[#F5EFE6]">
                    {kategoriAktif === "makanan"
                      ? "MAKANAN"
                      : "MINUMAN"}
                  </div>

                </div>


                {/* INFORMASI MENU */}
                <div className="p-5">

                  <h3 className="text-xl font-bold">
                    {menu.nama}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#6B5543]">
                    Pilihan {kategoriAktif === "makanan"
                      ? "makanan"
                      : "minuman"} COFFEE J&apos; FIVE SINGKI&apos;.
                  </p>

                  <div className="mt-5 flex items-center justify-between">

                    <p className="text-lg font-bold text-[#9A704B]">
                      {menu.harga}
                    </p>

                    <span className="text-xl text-[#C8A27A]">
                      →
                    </span>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>


      {/* ==================================================
          CTA
      ================================================== */}
      <section className="px-6 pb-16 md:px-12 md:pb-24">

        <div className="mx-auto max-w-4xl rounded-3xl bg-[#2B2118] p-8 text-center text-[#F5EFE6] md:p-14">

          <p className="text-sm font-semibold tracking-[0.3em] text-[#C8A27A]">
            COFFEE J&apos; FIVE SINGKI&apos;
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Temukan Menu Favoritmu
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#E5D8C8]">
            Nikmati makanan dan minuman bersama keluarga, teman,
            dan orang-orang terdekat.
          </p>

          <Link
            href="/"
            className="mt-8 inline-block rounded-full bg-[#C8A27A] px-7 py-3 font-semibold text-[#2B2118] transition hover:bg-[#E5D8C8]"
          >
            ← Kembali ke Beranda
          </Link>

        </div>
      </section>


      {/* ==================================================
          FOOTER
      ================================================== */}
      <footer className="bg-[#2B2118] px-6 py-10 text-center text-[#F5EFE6]">

        <h2 className="font-bold tracking-wide">
          COFFEE J&apos; FIVE
        </h2>

        <p className="mt-2 text-xs tracking-[0.2em] text-[#C8A27A]">
          SINGKI&apos;
        </p>

        <p className="mt-4 text-sm text-[#E5D8C8]">
          Hangatkan cerita, nikmati setiap rasa.
        </p>

      </footer>

    </main>
  );
}