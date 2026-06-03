import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";
import {
  BiEnvelopeOpen,
  BiHomeHeart,
  BiInfoCircle,
  BiImages,
  BiCalendarHeart,
  BiCalendar,
  BiMap,
} from "react-icons/bi";

// ------------------------------------------------------------
// 8. GALERI – MOMEN KHITANAN
// ------------------------------------------------------------
const CoralGallery = () => {
  const galleryImages = [
    {
      id: 1,
      url: "/images/foto1.jpg",
      alt: "Galeri Khitanan 1",
      bg: "bg-[#fff4df]",
      msg: "Momen bahagia putra kami menjelang acara khitanan.",
    },
    {
      id: 2,
      url: "/images/foto2.jpg",
      alt: "Galeri Khitanan 2",
      bg: "bg-[#f8ead8]",
      msg: "Senyum kecil yang menjadi kebahagiaan keluarga.",
    },
    {
      id: 3,
      url: "/images/foto3.jpg",
      alt: "Galeri Khitanan 3",
      bg: "bg-[#f4dfbd]",
      msg: "Doa dan harapan terbaik untuk tumbuh menjadi anak sholeh.",
    },
    {
      id: 4,
      url: "/images/foto (2).jpeg",
      alt: "Galeri Khitanan 4",
      bg: "bg-[#fff8ef]",
      msg: "Kenangan indah bersama keluarga tercinta.",
    },
    {
      id: 5,
      url: "/images/foto (4).jpeg",
      alt: "Galeri Khitanan 5",
      bg: "bg-[#f2e2cb]",
      msg: "Semoga menjadi anak yang sehat, kuat, dan berakhlak mulia.",
    },
    {
      id: 6,
      url: "/images/foto-1.jpeg",
      alt: "Galeri Khitanan 6",
      bg: "bg-[#fff4df]",
      msg: "Kebersamaan keluarga dalam rasa syukur dan bahagia.",
    },
    {
      id: 7,
      url: "/images/foto-2.jpeg",
      alt: "Galeri Khitanan 7",
      bg: "bg-[#f8ead8]",
      msg: "Momen kecil yang insyaAllah menjadi kenangan berharga.",
    },
    {
      id: 8,
      url: "/images/foto-4.JPG",
      alt: "Galeri Khitanan 8",
      bg: "bg-[#fff8ef]",
      msg: "Terima kasih atas doa dan kehadiran Bapak/Ibu/Saudara/i.",
    },
  ];

  return (
    <section
      id="gallery"
      className="relative py-20 bg-gradient-to-b from-[#fff8ef] via-[#f6e7d8] to-[#f1dfc8] overflow-hidden"
    >
      {/* Dekorasi background lembut */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/images/asset_top_botanical_header_transparent.png"
          alt=""
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] max-w-none opacity-18"
        />

        <img
          src="/images/asset_bottom_left_balloons_transparent.png"
          alt=""
          className="absolute -bottom-24 -left-20 w-[300px] opacity-25"
        />

        <img
          src="/images/asset_bottom_right_lantern_transparent.png"
          alt=""
          className="absolute -bottom-24 -right-20 w-[300px] opacity-25"
        />
      </div>

      <div className="max-w-6xl mx-auto px-5 text-center relative z-20">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.45 }}
          className="mx-auto w-20 h-20 rounded-full bg-[#fffdf7]/85 border border-[#e7c88d]/70 shadow-xl flex items-center justify-center"
        >
          <BiImages className="text-5xl text-[#b8793d] drop-shadow-lg" />
        </motion.div>

        <h2 className="text-5xl md:text-6xl font-bold text-[#7b4925] mt-4 mb-3 font-satisfy drop-shadow-sm">
          Galeri Momen
        </h2>

        <p className="text-[#6b5545] text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Beberapa potret kebahagiaan putra kami dan keluarga dalam menyambut
          acara khitanan.
        </p>

        {/* Grid responsif */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((img) => (
            <motion.div
              key={img.id}
              whileHover={{ y: -10, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`${img.bg} rounded-[2rem] p-4 shadow-xl border border-[#ead2a6] backdrop-blur-sm cursor-pointer transition-all`}
              onClick={() =>
                Swal.fire({
                  icon: "info",
                  title: "Galeri Khitanan",
                  text: img.msg,
                  confirmButtonColor: "#b8793d",
                  background: "#fff8ef",
                  iconColor: "#b8793d",
                  timer: 2600,
                  showConfirmButton: false,
                })
              }
            >
              <div className="relative overflow-hidden rounded-2xl border-4 border-white shadow-lg bg-white/60">
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent px-3 py-3 text-white text-sm font-semibold">
                  Momen {img.id}
                </div>
              </div>

              <p className="mt-3 text-[#7b4925] font-medium text-sm italic">
                ✨ klik untuk melihat cerita
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-sm text-[#7b4925] mt-12 bg-[#fffdf7]/85 inline-block px-8 py-3 rounded-full shadow-md border border-[#ead2a6]"
        >
          Semoga menjadi kenangan indah bagi keluarga kami 🤎
        </motion.p>
      </div>
    </section>
  );
};

// ------------------------------------------------------------
// 9. COUNTDOWN
// ------------------------------------------------------------
const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = new Date(targetDate) - new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-wrap justify-center gap-2 my-8">
      {Object.entries(timeLeft).map(([unit, value], index) => (
        <motion.div
          key={unit}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1, type: "spring" }}
          whileHover={{ y: -5, scale: 1.1 }}
          className="bg-white/60 backdrop-blur-md shadow-xl border-2 border-pink-200 rounded-2xl p-3 w-20 flex flex-col items-center cursor-pointer"
        >
          <span className="text-[#1e3d42] font-bold text-2xl">{value}</span>
          <span className="text-[#e74694] font-bold text-xs uppercase tracking-wider">
            {unit}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

// ------------------------------------------------------------
// 10. MAIN APP
// ------------------------------------------------------------
export default function App() {
  const [isOpened, setIsOpened] = useState(false);
const [activeSection, setActiveSection] = useState("hero");
const [guestName, setGuestName] = useState("Bunda/Ayah/Teman Istimewa");
const audioRef = useRef(null);

useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const to = params.get("to");
  if (to) setGuestName(to);

  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = "auto";
  };
}, []);

const handleOpenInvite = () => {
  setIsOpened(true);
  setActiveSection("doa");

  if (audioRef.current) {
    audioRef.current.play().catch((e) => console.log("Audio play failed:", e));
  }
};

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: "spring", bounce: 0.4 },
    },
  };

  return (
    <div className="font-quicksand text-[#1f2937] relative overflow-x-hidden bg-[#fef9fc] min-h-screen selection:bg-pink-300 selection:text-white">
      <audio ref={audioRef} src="audio/huwannur.mp3" loop />

      {/* NAVBAR - KHITANAN SINGLE PAGE */}
<nav
  className={`fixed bottom-4 left-3 right-3 z-50 rounded-full py-2.5 px-4 shadow-2xl backdrop-blur-xl bg-[#7b4925]/90 border border-[#e7c88d]/70 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-[520px] transition-all duration-500 ${
    isOpened
      ? "translate-y-0 opacity-100"
      : "translate-y-20 opacity-0 pointer-events-none"
  }`}
>
  <div className="flex justify-around items-center text-[#fff4df]">
    <motion.button
      type="button"
      whileHover={{ scale: 1.18, y: -5 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setActiveSection("hero")}
      className={`flex flex-col items-center gap-0.5 text-[10px] font-semibold ${
        activeSection === "hero" ? "text-[#ffe1a8]" : "text-[#fff4df]"
      }`}
    >
      <BiEnvelopeOpen className="text-2xl drop-shadow-lg" />
      <span>Opening</span>
    </motion.button>

    <motion.button
      type="button"
      whileHover={{ scale: 1.18, y: -5 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setActiveSection("doa")}
      className={`flex flex-col items-center gap-0.5 text-[10px] font-semibold ${
        activeSection === "doa" ? "text-[#ffe1a8]" : "text-[#fff4df]"
      }`}
    >
      <BiInfoCircle className="text-2xl drop-shadow-lg" />
      <span>Doa</span>
    </motion.button>

    <motion.button
      type="button"
      whileHover={{ scale: 1.18, y: -5 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setActiveSection("greeting")}
      className={`flex flex-col items-center gap-0.5 text-[10px] font-semibold ${
        activeSection === "greeting" ? "text-[#ffe1a8]" : "text-[#fff4df]"
      }`}
    >
      <BiHomeHeart className="text-2xl drop-shadow-lg" />
      <span>Greeting</span>
    </motion.button>

    <motion.button
      type="button"
      whileHover={{ scale: 1.18, y: -5 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setActiveSection("timeline")}
      className={`flex flex-col items-center gap-0.5 text-[10px] font-semibold ${
        activeSection === "timeline" ? "text-[#ffe1a8]" : "text-[#fff4df]"
      }`}
    >
      <BiCalendarHeart className="text-2xl drop-shadow-lg" />
      <span>Timeline</span>
    </motion.button>

    <motion.button
      type="button"
      whileHover={{ scale: 1.18, y: -5 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setActiveSection("gallery")}
      className={`flex flex-col items-center gap-0.5 text-[10px] font-semibold ${
        activeSection === "gallery" ? "text-[#ffe1a8]" : "text-[#fff4df]"
      }`}
    >
      <BiImages className="text-2xl drop-shadow-lg" />
      <span>Gallery</span>
    </motion.button>
  </div>
</nav>

<AnimatePresence mode="wait">

      {/* HERO SECTION - KHITANAN PORTRAIT FINAL COMPACT */}
{activeSection === "hero" && (
  <motion.div
    key="hero"
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.98 }}
    transition={{ duration: 0.35 }}
  >
    {/* HERO SECTION - KHITANAN PORTRAIT FINAL COMPACT */}
<section
  id="hero"
  className="relative w-full h-[100dvh] flex justify-center overflow-hidden bg-[#f4e4d3] p-0"
>
  {/* CANVAS UNDANGAN */}
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, type: "spring", bounce: 0.18 }}
    className="relative w-full max-w-[430px] h-[100dvh] bg-[#f4e4d3] overflow-hidden shadow-2xl"
  >
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#f3dfcc] via-[#fff4e8] to-[#f4e1cd]" />

    {/* Dekorasi atas utama */}
    <img
      src="/images/asset_top_botanical_header_transparent.png"
      alt=""
      className="absolute -top-2 left-1/2 -translate-x-1/2 w-[470px] max-w-none z-10 pointer-events-none"
    />

    {/* Panel putih arch */}
    <div className="absolute left-1/2 top-[88px] -translate-x-1/2 w-[325px] h-[650px] bg-[#fffdf6]/95 rounded-t-[180px] rounded-b-[24px] z-20 shadow-[0_20px_50px_rgba(117,76,38,0.16)] border border-[#e8c98b]/70 overflow-hidden">
      {/* Hiasan lembut dalam panel */}
      <img
        src="/images/asset_top_botanical_header_transparent.png"
        alt=""
        className="absolute -top-[58px] left-1/2 -translate-x-1/2 w-[360px] max-w-none opacity-15 pointer-events-none"
      />

      {/* Foto anak */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.25, type: "spring", bounce: 0.35 }}
        className="relative z-30 mx-auto mt-[58px] w-[105px] h-[105px] rounded-full bg-gradient-to-br from-[#e8c77d] to-[#9b642d] p-[3px] shadow-xl"
      >
        <div className="w-full h-full rounded-full bg-white p-[4px]">
          <img
            src="/images/azkal-cover.jpg"
            alt="Foto Anak Khitanan"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </motion.div>

      {/* Ornament kecil */}
      <div className="relative z-30 mt-[16px] flex items-center justify-center gap-3 text-[#d2a45f]">
        <span className="w-12 h-[1px] bg-[#d2a45f]" />
        <span className="text-[10px]">✦</span>
        <span className="w-12 h-[1px] bg-[#d2a45f]" />
      </div>

      {/* Judul */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="relative z-30 text-center mt-4"
      >
        <p className="font-satisfy text-[#7b4925] text-[34px] leading-none">
          Khitanan
        </p>

        <h1 className="font-satisfy text-[#6f3f1d] text-[25px] leading-[0.95] mt-1 drop-shadow-sm">
          Azkal Qolyubi Hasan
        </h1>
      </motion.div>

      {/* Garis divider */}
      <div className="relative z-30 flex items-center justify-center gap-2 mt-5 text-[#d2a45f]">
        <span className="w-16 h-[1px] bg-[#d2a45f]" />
        <span className="text-[10px]">◇</span>
        <span className="w-16 h-[1px] bg-[#d2a45f]" />
      </div>

      {/* Teks undangan */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        className="relative z-30 text-center mt-6 px-7 text-[#25201d] text-[14px] leading-[1.75] font-medium"
      >
        <p>Tanpa Mengurangi Rasa Hormat,</p>
        <p>Kami Mengundang Bapak/Ibu/Saudara/i</p>
        <p>untuk Hadir di Acara Khitanan</p>
        <p>Putra Kami.</p>
      </motion.div>

      {/* Kepada */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="relative z-30 text-center mt-5"
      >
        <p className="text-[#25201d] text-[18px] mb-3">Kepada</p>

        <p className="mx-auto max-w-[82%] text-[#8b572a] font-bold text-[12px] bg-white/90 rounded-full px-4 py-1.5 shadow-sm truncate">
          {guestName}
        </p>
      </motion.div>

      {/* Tombol */}
      <AnimatePresence>
        {!isOpened && (
          <motion.button
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0px 14px 28px rgba(181, 116, 54, 0.32)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpenInvite}
            className="relative z-30 mx-auto mt-6 flex items-center justify-center gap-2 bg-[#d99b5d] text-white font-semibold rounded-full shadow-xl border border-white/70 w-[210px] py-3 text-[15px]"
          >
            <BiEnvelopeOpen className="text-[1em]" />
            Buka Undangan
          </motion.button>
        )}
      </AnimatePresence>
    </div>

    {/* Dekorasi bawah kiri - ditukar & dinaikkan */}
{/* Dekorasi bawah kiri - final touch */}
<img
  src="/images/asset_bottom_right_lantern_transparent.png"
  alt=""
  className="absolute bottom-[-15px] left-[-15px] w-[182px] z-30 pointer-events-none"
/>

{/* Dekorasi bawah kanan - final touch */}
<img
  src="/images/asset_bottom_left_balloons_transparent.png"
  alt=""
  className="absolute bottom-[-20px] right-[-25px] w-[182px] z-30 pointer-events-none"
/>

    </motion.div>
  </section>
</motion.div>
)}

{/* DOA / AYAT SECTION - KHITANAN */}
{activeSection === "doa" && (
  <motion.div
    key="doa"
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.98 }}
    transition={{ duration: 0.35 }}
    className="h-screen overflow-y-auto"
  >
    {/* DOA / AYAT SECTION - KHITANAN */}
    <section
      id="doa"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fff8ef] px-5 pt-16 pb-32"
    >
  {/* Background lembut */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-[#fff8ef] via-[#fffdf8] to-[#f4e3cf]" />

    <img
      src="/images/asset_top_botanical_header_transparent.png"
      alt=""
      className="absolute -top-24 left-1/2 -translate-x-1/2 w-[620px] max-w-none opacity-18"
    />

    <img
      src="/images/asset_bottom_left_balloons_transparent.png"
      alt=""
      className="absolute -bottom-24 -left-20 w-[280px] opacity-25"
    />

    <img
      src="/images/asset_bottom_right_lantern_transparent.png"
      alt=""
      className="absolute -bottom-24 -right-20 w-[280px] opacity-25"
    />
  </div>

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={fadeUp}
    className="relative z-20 w-full max-w-2xl mx-auto text-center"
  >
    <div className="bg-[#fffdf7]/88 backdrop-blur-md rounded-[2.5rem] shadow-2xl border border-[#e7c88d]/60 px-6 py-10 md:px-10 md:py-12">
      {/* Ornamen kecil */}
      <div className="flex items-center justify-center gap-3 mb-7 text-[#d2a45f]">
        <span className="w-16 h-[1px] bg-[#d2a45f]" />
        <span className="text-xl">۞</span>
        <span className="w-16 h-[1px] bg-[#d2a45f]" />
      </div>

      <h2 className="font-satisfy text-[#7b4925] text-4xl md:text-5xl mb-7">
        Doa & Harapan
      </h2>

      {/* Ayat Arab */}
      <p
        dir="rtl"
        className="text-[#3b2a1f] text-2xl md:text-3xl leading-[2.2] font-serif mb-8"
      >
        ثُمَّ أَوْحَيْنَا إِلَيْكَ أَنِ اتَّبِعْ مِلَّةَ إِبْرَاهِيمَ
        حَنِيفًا ۖ وَمَا كَانَ مِنَ الْمُشْرِكِينَ
      </p>

      {/* Arti */}
      <p className="text-[#4d4036] text-base md:text-lg leading-relaxed mb-7">
        Kemudian Kami wahyukan kepadamu, “Ikutilah agama Ibrahim yang lurus,
        dan dia bukanlah termasuk orang-orang musyrik.”
      </p>

      <p className="text-[#8b572a] font-bold mb-8">
        — QS. An-Nahl Ayat 123 —
      </p>

      <div className="mx-auto w-24 h-[1px] bg-[#d2a45f]/70 mb-8" />

      {/* Doa khitanan */}
      <p className="text-[#4d4036] text-base md:text-lg leading-relaxed">
        Semoga Allah SWT menjadikan putra kami anak yang sholeh, sehat,
        berbakti kepada kedua orang tua, taat dalam beribadah, serta tumbuh
        menjadi pribadi yang kuat iman, baik akhlak, dan bermanfaat bagi
        agama, keluarga, dan sesama.
      </p>
        </div>
  </motion.div>
</section>
</motion.div>
)}
      

      {/* HOME SECTION - KHITANAN INTRO */}
{activeSection === "greeting" && (
  <motion.div
    key="greeting"
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.98 }}
    transition={{ duration: 0.35 }}
    className="h-screen overflow-y-auto"
  >
    {/* GREETING SECTION - KHITANAN INTRO */}
    <section
  id="greeting"
  className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#f6e7d8] via-[#fff8ef] to-[#f1dfc8] px-4 pt-16 pb-32"
>
  {/* Dekorasi background lembut */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <img
      src="/images/asset_top_botanical_header_transparent.png"
      alt=""
      className="absolute -top-20 left-1/2 -translate-x-1/2 w-[680px] max-w-none opacity-25"
    />

    <img
      src="/images/asset_bottom_left_balloons_transparent.png"
      alt=""
      className="absolute -bottom-24 -left-20 w-[300px] opacity-30"
    />

    <img
      src="/images/asset_bottom_right_lantern_transparent.png"
      alt=""
      className="absolute -bottom-24 -right-20 w-[300px] opacity-30"
    />
  </div>

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={fadeUp}
    className="max-w-3xl mx-auto text-center relative z-20"
  >
    {/* Card pembuka */}
    <div className="bg-[#fffdf7]/85 backdrop-blur-md rounded-[2.5rem] shadow-2xl border border-[#e7c88d]/60 px-6 py-10 md:px-10 md:py-12">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", bounce: 0.35 }}
        className="mx-auto mb-5 w-16 h-16 rounded-full bg-[#f4dfbd] flex items-center justify-center shadow-lg border border-[#d9ad65]/50"
      >
        <span className="text-3xl">☪️</span>
      </motion.div>

      <h2 className="text-4xl md:text-5xl text-[#7b4925] font-bold mb-6 font-satisfy">
        Assalamualaikum
      </h2>

      <p className="text-base md:text-lg text-[#4d4036] leading-relaxed">
        Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
        menyelenggarakan acara khitanan putra kami. Tanpa mengurangi rasa
        hormat, kami mengundang{" "}
        <span className="font-extrabold text-[#8b572a]">{guestName}</span>{" "}
        untuk hadir dan memberikan doa restu pada acara khitanan:
      </p>

      {/* Foto anak utama */}
      <div className="my-10 flex justify-center">
        <motion.div
          whileHover={{ scale: 1.06 }}
          className="relative group cursor-pointer"
        >
          <div className="w-44 h-44 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-[#e8c77d] to-[#9b642d] p-[5px] shadow-2xl">
            <div className="w-full h-full rounded-full bg-white p-[5px]">
              <img
                src="/images/foto1.jpg"
                alt="Foto Anak Khitanan"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-4 py-1.5 rounded-full shadow-md font-bold text-[#8b572a] text-sm border border-[#ead2a6]">
            Putra Kami
          </div>
        </motion.div>
      </div>

      {/* Nama anak */}
      <p className="text-xl md:text-2xl text-[#8b572a] mb-2">
        Acara Khitanan
      </p>

      <h2 className="text-5xl md:text-7xl font-bold text-[#6f3f1d] drop-shadow-sm mb-5 font-satisfy leading-none">
        Afzal Qolqy Hasan
      </h2>

      <div className="flex items-center justify-center gap-3 my-6 text-[#d4a45f]">
        <span className="w-20 h-[1px] bg-[#d4a45f]" />
        <span className="text-sm">◇</span>
        <span className="w-20 h-[1px] bg-[#d4a45f]" />
      </div>

      <p className="text-lg md:text-xl text-[#6b5545] mt-4 mb-3">
        Putra dari
      </p>

      <motion.p
  whileHover={{ scale: 1.03 }}
  className="text-xl md:text-2xl font-semibold text-[#7b4925] bg-[#fff4df]/80 inline-block px-6 py-3 rounded-full backdrop-blur-sm shadow-sm border border-[#ead2a6]"
>
  Bapak ... & Ibu ...
</motion.p>
</div>
  </motion.div>
</section>
</motion.div>
)}

      {/* INFO SECTION - DETAIL ACARA KHITANAN */}
{activeSection === "timeline" && (
  <motion.div
    key="timeline"
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.98 }}
    transition={{ duration: 0.35 }}
    className="h-screen overflow-y-auto"
  >
    {/* TIMELINE SECTION - DETAIL ACARA KHITANAN */}
<section
  id="timeline"
  className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#f6e7d8] via-[#fff8ef] to-[#f1dfc8] px-4 pt-12 pb-32"
>
  {/* Dekorasi background lembut */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <img
      src="/images/asset_top_botanical_header_transparent.png"
      alt=""
      className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] max-w-none opacity-20"
    />

    <img
      src="/images/asset_bottom_left_balloons_transparent.png"
      alt=""
      className="absolute -bottom-24 -left-20 w-[300px] opacity-25"
    />

    <img
      src="/images/asset_bottom_right_lantern_transparent.png"
      alt=""
      className="absolute -bottom-24 -right-20 w-[300px] opacity-25"
    />
  </div>

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    className="max-w-6xl mx-auto px-5 relative z-10"
  >
    <div className="text-center mb-14">
      <motion.div
        animate={{ rotate: [0, 8, -8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="mx-auto w-20 h-20 rounded-full bg-[#fffdf7]/85 border border-[#e7c88d]/70 shadow-xl flex items-center justify-center"
      >
        <BiCalendarHeart className="text-5xl text-[#b8793d] drop-shadow" />
      </motion.div>

      <h2 className="text-5xl md:text-6xl font-bold text-[#7b4925] mt-4 font-satisfy">
        Detail Acara
      </h2>

      <p className="mt-4 text-[#6b5545] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i untuk
        hadir dalam rangkaian acara khitanan putra kami.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Card Sunat */}
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        className="rounded-[2.5rem] p-7 md:p-8 border border-[#ead2a6] bg-[#fffdf7]/85 backdrop-blur-md shadow-xl transition-all"
      >
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-[#f4dfbd] border border-[#d9ad65]/60 shadow-md flex items-center justify-center">
            <BiCalendar className="text-4xl text-[#b8793d]" />
          </div>
        </div>

        <h3 className="text-3xl md:text-4xl font-satisfy text-[#7b4925] text-center mb-6">
          Pelaksanaan Khitan
        </h3>

        <div className="space-y-4 text-[#4d4036] text-base md:text-lg">
          <p className="flex flex-col gap-2">
            <span className="font-bold bg-[#fff4df] text-[#8b572a] px-4 py-2 rounded-full inline-block shadow-sm border border-[#ead2a6] w-fit">
              📅 Hari & Tanggal
            </span>
            <span className="pl-1">
              Sabtu, 20 Juni 2026
            </span>
          </p>

          <p className="flex flex-col gap-2">
            <span className="font-bold bg-[#fff4df] text-[#8b572a] px-4 py-2 rounded-full inline-block shadow-sm border border-[#ead2a6] w-fit">
              ⏰ Waktu
            </span>
            <span className="pl-1">
              Menyesuaikan jadwal pelaksanaan khitan
            </span>
          </p>
        </div>
      </motion.div>

      {/* Card Syukuran */}
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        className="rounded-[2.5rem] p-7 md:p-8 border border-[#ead2a6] bg-[#fffdf7]/85 backdrop-blur-md shadow-xl transition-all"
      >
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-[#f4dfbd] border border-[#d9ad65]/60 shadow-md flex items-center justify-center">
            <BiMap className="text-4xl text-[#b8793d]" />
          </div>
        </div>

        <h3 className="text-3xl md:text-4xl font-satisfy text-[#7b4925] text-center mb-6">
          Tasyakuran Khitanan
        </h3>

        <div className="space-y-4 text-[#4d4036] text-base md:text-lg">
          <p className="flex flex-col gap-2">
            <span className="font-bold bg-[#fff4df] text-[#8b572a] px-4 py-2 rounded-full inline-block shadow-sm border border-[#ead2a6] w-fit">
              📅 Hari & Tanggal
            </span>
            <span className="pl-1">
              Minggu, 5 Juli 2026
            </span>
          </p>

          <p className="flex flex-col gap-2">
            <span className="font-bold bg-[#fff4df] text-[#8b572a] px-4 py-2 rounded-full inline-block shadow-sm border border-[#ead2a6] w-fit">
              ⏰ Waktu
            </span>
            <span className="pl-1">
              11.00 WIB - Selesai
            </span>
          </p>

          <p className="flex flex-col gap-2">
            <span className="font-bold bg-[#fff4df] text-[#8b572a] px-4 py-2 rounded-full inline-block shadow-sm border border-[#ead2a6] w-fit">
              📍 Lokasi
            </span>
            <span className="pl-1 leading-relaxed">
              Jl. Masjid Nurul Yaqin No.216, Cinangka, Kec. Sawangan,
              Kota Depok, Jawa Barat 16516
            </span>
          </p>

          <span className="bg-[#fff4df]/80 block mt-4 p-3 rounded-2xl text-sm md:text-base shadow-sm font-medium border border-[#ead2a6]">
            ✨ Dirumah Cinangka
          </span>
        </div>
      </motion.div>
        </div>
  </motion.div>
</section>
</motion.div>
)}

      

      {/* CORAL GALLERY SECTION */}
      {activeSection === "gallery" && (
  <motion.div
    key="gallery"
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.98 }}
    transition={{ duration: 0.35 }}
    className="h-screen overflow-y-auto"
  >
    <CoralGallery />
  </motion.div>
)}
</AnimatePresence>

    </div>
  );
}