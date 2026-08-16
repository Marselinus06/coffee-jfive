"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#2B2118] text-[#F5EFE6]">
      {/* ==================================================
          NAVBAR
      ================================================== */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-5 md:px-12">
        {/* LOGO */}
        <div>
          <h1 className="text-lg font-bold leading-tight tracking-wide md:text-xl">
            COFFEE J&apos; FIVE
          </h1>

          <p className="mt-1 text-[10px] tracking-[0.25em] text-[#C8A27A] md:text-xs">
            SINGKI&apos;
          </p>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden items-center gap-8 text-sm md:flex">
          <Link
            href="#home"
            className="transition hover:text-[#C8A27A]"
          >
            Home
          </Link>

          <Link
            href="#tentang"
            className="transition hover:text-[#C8A27A]"
          >
            Tentang
          </Link>

          <Link
            href="/menu"
            className="transition hover:text-[#C8A27A]"
          >
            Menu
          </Link>

          <Link
            href="#lokasi"
            className="transition hover:text-[#C8A27A]"
          >
            Lokasi
          </Link>
        </div>

        {/* HAMBURGER MOBILE */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C8A27A] text-xl text-[#F5EFE6] transition hover:bg-[#C8A27A] hover:text-[#2B2118] md:hidden"
          aria-label="Buka menu navigasi"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* MENU MOBILE */}
        {isMenuOpen && (
          <div className="absolute left-6 right-6 top-full mt-2 rounded-2xl bg-[#F5EFE6] p-4 text-[#2B2118] shadow-xl md:hidden">
            <div className="flex flex-col gap-2">
              <Link
                href="#home"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 transition hover:bg-[#E5D8C8]"
              >
                Home
              </Link>

              <Link
                href="/tentang"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 transition hover:bg-[#E5D8C8]"
              >
                Tentang
              </Link>

              <Link
                href="/menu"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 transition hover:bg-[#E5D8C8]"
              >
                Menu
              </Link>

              <Link
                href="#lokasi"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 transition hover:bg-[#E5D8C8]"
              >
                Lokasi
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* ==================================================
          HERO
      ================================================== */}
      <section
        id="home"
        className="flex min-h-[calc(100svh-80px)] flex-col items-center justify-center px-5 text-center md:px-6"
      >
        <p className="mb-4 text-sm tracking-[0.3em] text-[#C8A27A]">
          WELCOME TO
        </p>

        <h2 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          COFFEE J&apos; FIVE
          <br />
          <span className="text-[#C8A27A]">
            SINGKI&apos;
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-sm leading-7 text-[#E5D8C8] sm:text-base md:text-lg">
          Hangatkan cerita, nikmati setiap rasa dalam suasana yang nyaman,
          sederhana, dan penuh kebersamaan.
        </p>

        {/* TOMBOL HERO */}
        <div className="mt-8 flex w-full max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <Link
            href="/menu"
            className="rounded-full bg-[#C8A27A] px-7 py-3 font-semibold text-[#2B2118] transition hover:bg-[#E5D8C8]"
          >
            Lihat Menu
          </Link>

          <Link
            href="#lokasi"
            className="rounded-full border border-[#C8A27A] px-7 py-3 font-semibold text-[#F5EFE6] transition hover:bg-[#C8A27A] hover:text-[#2B2118]"
          >
            Kunjungi Kami
          </Link>
        </div>
      </section>

      {/* ==================================================
          TENTANG KAMI
      ================================================== */}
      <section
        id="tentang"
        className="bg-[#F5EFE6] px-6 py-24 text-[#2B2118] md:px-12"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-[#9A704B]">
            TENTANG KAMI
          </p>

          <h2 className="text-3xl font-bold leading-tight md:text-5xl">
            Tempat untuk menikmati rasa,
            <br />
            cerita, dan kebersamaan.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-[#5A4636] md:text-lg">
            COFFEE J&apos; FIVE SINGKI&apos; adalah tempat sederhana yang
            menghadirkan beragam pilihan makanan dan minuman untuk dinikmati
            bersama keluarga, teman, dan orang-orang terdekat.
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#5A4636] md:text-lg">
            Dengan suasana yang nyaman dan hangat, kami ingin setiap kunjungan
            menjadi bagian dari cerita dan kebersamaan yang menyenangkan.
          </p>

          {/* TOMBOL LIHAT LEBIH LANJUT */}
          <div className="mt-10">
            <Link
              href="/tentang"
              className="inline-flex items-center justify-center rounded-full bg-[#2B2118] px-8 py-4 text-sm font-semibold text-[#F5EFE6] transition duration-300 hover:-translate-y-1 hover:bg-[#5A4636] hover:shadow-lg"
            >
              Lihat Lebih Lanjut
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================
          MENU FAVORIT
      ================================================== */}
      <section
        id="menu"
        className="bg-[#E5D8C8] px-6 py-24 text-[#2B2118] md:px-12"
      >
        <div className="mx-auto max-w-6xl">
          {/* JUDUL */}
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-[#9A704B]">
              MENU FAVORIT
            </p>

            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Pilihan favorit
              <br />
              dari kami untuk Anda.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#5A4636]">
              Nikmati beberapa pilihan favorit dari COFFEE J&apos; FIVE
              SINGKI&apos;. Untuk melihat seluruh pilihan makanan dan minuman
              kami, buka halaman menu lengkap.
            </p>
          </div>

          {/* KARTU MENU */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* CARD 1 */}
            <div className="overflow-hidden rounded-2xl bg-[#FFF8F0] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <img
                src="/images/kopi-susu-singki.png"
                alt="Kopi Susu Singki'"
                className="h-64 w-full rounded-xl object-cover"
              />

              <h3 className="mt-5 text-xl font-bold">
                Kopi Susu Singki&apos;
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#5A4636]">
                Perpaduan kopi pilihan dengan susu lembut dan rasa manis yang
                pas untuk menemani hari Anda.
              </p>

              <p className="mt-5 text-lg font-bold text-[#9A704B]">
                Rp 15.000
              </p>
            </div>

            {/* CARD 2 */}
            <div className="overflow-hidden rounded-2xl bg-[#FFF8F0] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <img
                src="/images/nasi-goreng-spesial.png"
                alt="Nasi Goreng Spesial"
                className="h-64 w-full rounded-xl object-cover"
              />

              <h3 className="mt-5 text-xl font-bold">
                Nasi Goreng Spesial
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#5A4636]">
                Nasi goreng hangat dengan bumbu khas untuk menemani waktu makan
                Anda bersama orang-orang terdekat.
              </p>

              <p className="mt-5 text-lg font-bold text-[#9A704B]">
                Rp 25.000
              </p>
            </div>

            {/* CARD 3 */}
            <div className="overflow-hidden rounded-2xl bg-[#FFF8F0] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <img
                src="/images/mie-singki.png"
                alt="Mie Singki'"
                className="h-64 w-full rounded-xl object-cover"
              />

              <h3 className="mt-5 text-xl font-bold">
                Mie Singki&apos;
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#5A4636]">
                Mie dengan cita rasa gurih dan hangat, cocok untuk dinikmati
                bersama sambil berbagi cerita.
              </p>

              <p className="mt-5 text-lg font-bold text-[#9A704B]">
                Rp 22.000
              </p>
            </div>
          </div>

          {/* TOMBOL MENU */}
          <div className="mt-10 text-center">
            <Link
              href="/menu"
              className="inline-block rounded-full bg-[#2B2118] px-7 py-3 font-semibold text-[#F5EFE6] transition hover:bg-[#5A4636]"
            >
              Lihat Semua Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================
          LOKASI
      ================================================== */}
      <section
        id="lokasi"
        className="bg-[#F5EFE6] px-6 py-20 text-[#2B2118] md:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* INFORMASI LOKASI */}
            <div>
              <p className="text-sm font-semibold tracking-[0.3em] text-[#A9704B]">
                LOKASI KAMI
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                Temukan kami
                <br />
                di Singki&apos;
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#5A4636]">
                Kami menunggu kedatangan Anda di COFFEE J&apos; FIVE SINGKI&apos;.
                Nikmati makanan, minuman, dan suasana hangat bersama keluarga,
                teman, dan orang-orang terdekat.
              </p>
            </div>

            {/* KARTU LOKASI */}
            <div className="overflow-hidden rounded-3xl bg-[#2B2118] p-3 shadow-lg">
              <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl bg-[#E5D8C8] p-8 text-center md:min-h-[400px]">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#2B2118] text-2xl">
                  📍
                </div>

                <p className="text-sm font-semibold tracking-[0.25em] text-[#A9704B]">
                  KUNJUNGI KAMI
                </p>

                <h3 className="mt-3 text-2xl font-bold text-[#2B2118]">
                  COFFEE J&apos; FIVE SINGKI&apos;
                </h3>

                <p className="mt-3 max-w-sm leading-6 text-[#5A4636]">
                  Klik tombol di bawah untuk melihat lokasi kami
                  langsung melalui Google Maps.
                </p>

                <a
                  href="https://maps.app.goo.gl/QpUURfKrAK5fJtej7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 rounded-full border border-[#2B2118] px-6 py-3 font-semibold text-[#2B2118] transition hover:bg-[#2B2118] hover:text-[#F5EFE6]"
                >
                  Lihat Lokasi →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          FOOTER
      ================================================== */}
      <footer className="bg-[#2B2118] px-6 py-12 text-[#F5EFE6]">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-3">
            {/* BRAND */}
            <div>
              <h2 className="text-xl font-bold tracking-wide">
                COFFEE J&apos; FIVE
              </h2>

              <p className="mt-1 text-xs tracking-[0.25em] text-[#C8A27A]">
                SINGKI&apos;
              </p>

              <p className="mt-5 max-w-sm text-sm leading-6 text-[#E5D8C8]">
                Hangatkan cerita, nikmati setiap rasa dalam suasana yang
                nyaman, sederhana, dan penuh kebersamaan.
              </p>
            </div>

            {/* NAVIGASI */}
            <div>
              <h3 className="font-semibold text-[#C8A27A]">
                Navigasi
              </h3>

              <div className="mt-4 flex flex-col gap-3 text-sm">
                <Link
                  href="#home"
                  className="transition hover:text-[#C8A27A]"
                >
                  Home
                </Link>

                <Link
                  href="#tentang"
                  className="transition hover:text-[#C8A27A]"
                >
                  Tentang Kami
                </Link>

                <Link
                  href="/menu"
                  className="transition hover:text-[#C8A27A]"
                >
                  Menu
                </Link>

                <Link
                  href="#lokasi"
                  className="transition hover:text-[#C8A27A]"
                >
                  Lokasi
                </Link>
              </div>
            </div>

            {/* KUNJUNGI KAMI */}
            <div>
              <h3 className="font-semibold text-[#C8A27A]">
                Kunjungi Kami
              </h3>

              <div className="mt-4 space-y-3 text-sm text-[#E5D8C8]">
                <p>
                  📍 Singki&apos;, Angkola Timur
                </p>

                <p>
                  🕘 Setiap Hari, 09.00 - 22.00 WIB
                </p>

                <a
                  href="https://maps.app.goo.gl/QpUURfKrAK5fJtej7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block pt-2 font-semibold text-[#F5EFE6] transition hover:text-[#C8A27A]"
                >
                  Buka Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* GARIS PEMISAH */}
          <div className="my-10 border-t border-[#5A4636]" />

          {/* COPYRIGHT */}
          <div className="flex flex-col gap-3 text-center text-xs text-[#C8A27A] md:flex-row md:items-center md:justify-between md:text-left">
            <p>
              © 2026 COFFEE J&apos; FIVE SINGKI&apos;. All rights reserved.
            </p>

            <p>
              Hangatkan cerita, nikmati setiap rasa.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}