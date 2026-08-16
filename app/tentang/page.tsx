import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  {
    src: "/images/cafe-1.png",
    alt: "Tampak depan COFFEE J' FIVE SINGKI'",
    title: "Selamat Datang",
    description:
      "Suasana depan COFFEE J' FIVE SINGKI' yang hangat dan nyaman untuk menikmati waktu bersama.",
  },
  {
    src: "/images/cafe-2.png",
    alt: "Suasana indoor COFFEE J' FIVE SINGKI'",
    title: "Suasana Indoor",
    description:
      "Area indoor dengan suasana hangat, pencahayaan lembut, dan tempat yang nyaman untuk berkumpul.",
  },
  {
    src: "/images/cafe-3.png",
    alt: "Area outdoor dengan pemandangan sawah",
    title: "Outdoor & Sawah",
    description:
      "Nikmati makanan dan minuman sambil menikmati suasana outdoor yang nyaman dengan pemandangan sawah.",
  },
  {
    src: "/images/cafe-4.png",
    alt: "Area lantai dua outdoor COFFEE J' FIVE SINGKI'",
    title: "Lantai Dua Outdoor",
    description:
      "Area lantai dua yang sepenuhnya outdoor dengan suasana terbuka dan pemandangan alam yang indah.",
  },
];

export default function TentangPage() {
  return (
    <main className="min-h-screen bg-[#f4eee4] text-[#3d3027]">
      {/* ================= HERO ================= */}
      <section className="border-b border-[#ded3c3] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* TEKS */}
            <div>
              <p className="mb-4 text-sm font-semibold tracking-[0.35em] text-[#8a6748]">
                TENTANG KAMI
              </p>

              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Tempat untuk menikmati rasa, cerita, dan kebersamaan.
              </h1>

              <div className="mt-8 space-y-5 text-base leading-8 text-[#62584f] md:text-lg">
                <p>
                  COFFEE J&apos; FIVE SINGKI&apos; hadir sebagai tempat
                  sederhana yang ingin memberikan pengalaman nyaman bagi setiap
                  orang yang datang.
                </p>

                <p>
                  Kami percaya bahwa secangkir kopi bukan hanya tentang rasa.
                  Kopi juga bisa menjadi teman untuk berbincang, berbagi cerita,
                  menikmati waktu, dan menciptakan kenangan bersama orang-orang
                  terdekat.
                </p>

                <p>
                  Dengan perpaduan suasana indoor yang hangat, area outdoor yang
                  nyaman, serta pemandangan alam dan sawah di sekitar cafe, kami
                  ingin setiap kunjungan menjadi pengalaman yang menyenangkan.
                </p>
              </div>

              <Link
                href="/"
                className="mt-8 inline-flex items-center rounded-full bg-[#3d3027] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5b493d]"
              >
                ← Kembali ke Beranda
              </Link>
            </div>

            {/* FOTO UTAMA */}
            <div className="relative h-[350px] overflow-hidden rounded-[2rem] shadow-xl md:h-[500px]">
              <Image
                src="/images/cafe-1.png"
                alt="Tampak depan COFFEE J' FIVE SINGKI'"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CERITA ================= */}
      <section className="border-b border-[#ded3c3] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold tracking-[0.35em] text-[#8a6748]">
            CERITA KAMI
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Lebih dari sekadar tempat menikmati kopi.
          </h2>

          <p className="mt-7 text-base leading-8 text-[#62584f] md:text-lg">
            Kami ingin menciptakan ruang yang dapat dinikmati oleh siapa saja.
            Tempat untuk berkumpul bersama keluarga, berbincang dengan teman,
            menikmati makanan favorit, atau sekadar duduk santai menikmati
            suasana.
          </p>
        </div>
      </section>

      {/* ================= GALERI ================= */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          {/* JUDUL */}
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold tracking-[0.35em] text-[#8a6748]">
              GALERI SUASANA
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Setiap sudut memiliki ceritanya sendiri.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#62584f] md:text-lg">
              Dari suasana hangat di dalam cafe hingga area outdoor dengan
              pemandangan sawah, temukan berbagai sudut COFFEE J&apos; FIVE
              SINGKI&apos;.
            </p>
          </div>

          {/* GRID FOTO */}
          <div className="grid gap-6 md:grid-cols-2">
            {galleryImages.map((image) => (
              <article
                key={image.src}
                className="overflow-hidden rounded-[2rem] bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* FOTO */}
                <div className="relative h-72 w-full overflow-hidden md:h-80">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                {/* INFORMASI */}
                <div className="p-7">
                  <h3 className="text-2xl font-bold text-[#3d3027]">
                    {image.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#62584f]">
                    {image.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PENUTUP ================= */}
      <section className="bg-[#3d3027] px-6 py-20 text-center text-[#f4eee4] md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-semibold tracking-[0.35em] text-[#d5ae7b]">
            SAMPAI JUMPA
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Mari ciptakan cerita bersama kami.
          </h2>

          <p className="mt-6 leading-8 text-[#ded3c3] md:text-lg">
            Nikmati kopi, makanan, suasana, dan waktu berharga bersama
            orang-orang terdekat di COFFEE J&apos; FIVE SINGKI&apos;.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-[#f4eee4] px-7 py-3 font-semibold text-[#3d3027] transition hover:bg-white"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </main>
  );
}