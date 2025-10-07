gsap.registerPlugin(ScrollTrigger);
let speed = 100;

/* ========== SCENE ASLI KAMU (tidak diubah) ========== */
let scene1 = gsap.timeline();
ScrollTrigger.create({
  animation: scene1,
  trigger: ".scrollElement",
  start: "top top",
  end: "45% 100%",
  scrub: 3,
});

scene1.to("#h1-1", { y: 3 * speed, x: 1 * speed, scale: 0.9 }, 0);
scene1.to("#h1-2", { y: 2.6 * speed, x: -0.6 * speed }, 0);
scene1.to("#h1-3", { y: 1.7 * speed, x: 1.2 * speed }, 0.03);
scene1.to("#h1-4", { y: 3 * speed, x: 1 * speed }, 0.03);
scene1.to("#h1-5", { y: 2 * speed, x: 1 * speed }, 0.03);
scene1.to("#h1-6", { y: 2.3 * speed, x: -2.5 * speed }, 0);
scene1.to("#h1-7", { y: 5 * speed, x: 1.6 * speed }, 0);
scene1.to("#h1-8", { y: 3.5 * speed, x: 0.2 * speed }, 0);
scene1.to("#h1-9", { y: 3.5 * speed, x: -0.2 * speed }, 0);
scene1.to("#info", { y: 8 * speed }, 0);

/* ---------- TEKS UCAPAN ---------- */
gsap.to("#textScroll1", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".scrollElement",
    start: "top top",
    end: "20% 100%",
    scrub: true,
  },
});
gsap.to("#textScroll1", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".scrollElement",
    start: "25% top",
    end: "35% 100%",
    scrub: true,
  },
});
gsap.to("#textScroll2", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".scrollElement",
    start: "35% top",
    end: "55% 100%",
    scrub: true,
  },
});
gsap.to("#textScroll2", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".scrollElement",
    start: "80% top",
    end: "bottom 100%",
    scrub: true,
  },
});

/* ---------- MUSIK MANUAL ---------- */
const song = document.getElementOfId
const song = document.getElementById("song");
const playBtn = document.getElementById("playSong");

let playing = false;
playBtn.addEventListener("click", () => {
  if (!playing) {
    song.play();
    playBtn.innerText = "⏸️ Pause Musik";
    playing = true;
  } else {
    song.pause();
    playBtn.innerText = "🎶 Putar Musik";
    playing = false;
  }
});

/* ---------- FULLSCREEN ---------- */
let fullscreen;
let fsEnter = document.getElementById("fullscr");
fsEnter.addEventListener("click", function (e) {
  e.preventDefault();
  if (!fullscreen) {
    fullscreen = true;
    document.documentElement.requestFullscreen();
    fsEnter.innerHTML = "Exit Fullscreen";
  } else {
    fullscreen = false;
    document.exitFullscreen();
    fsEnter.innerHTML = "Go Fullscreen";
  }
});

/* Reset scroll */
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
