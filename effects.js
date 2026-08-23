/* ============================================
   effects.js
   Particle background + confetti + shake FX
   Loaded before script.js — exposes:
   fxConfetti(), fxShake(element)

   Performance notes :
   - Phones/tablets get a light budget : fewer
     particles, no O(n²) linking lines, 30fps.
   - The rAF loop skips frames until the target
     interval elapses and pauses when hidden.
   ============================================ */

(function () {
  "use strict";

  var canvas = document.getElementById("fx-canvas");
  if (!canvas) return;

  var ctx = canvas.getContext("2d");

  // Match the color tokens in master.css
  var COLORS = ["#22d3ee", "#b366ff", "#eaf2ff", "#2dd4a7"];

  var reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Lighter budget on small / touch devices
  var lowPower =
    window.matchMedia("(max-width: 768px)").matches ||
    window.matchMedia("(pointer: coarse)").matches;

  var MAX_PARTICLES = lowPower ? 34 : 70;
  var LINK_DISTANCE = 130;
  var FRAME_INTERVAL = 1000 / (lowPower ? 30 : 60);
  var CONFETTI_COUNT = lowPower ? 70 : 140;

  var particles = [];
  var confettiPieces = [];

  var lastFrameTime = 0;
  var rafId = null;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = [];
    var density = lowPower ? 30000 : 18000;
    var count = Math.min(MAX_PARTICLES, Math.floor((canvas.width * canvas.height) / density));

    for (var i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.6,
        c: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }
  }

  function drawParticles() {
    var linkDistSq = LINK_DISTANCE * LINK_DISTANCE;

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];

      p.x += p.vx;
      p.y += p.vy;

      // Wrap around the screen edges
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c;
      ctx.globalAlpha = 0.55;
      ctx.fill();

      // Connect nearby particles with faint lines
      // (desktop only — this O(n²) pass is too costly for phones)
      if (!lowPower) {
        for (var j = i + 1; j < particles.length; j++) {
          var q = particles[j];
          var dx = p.x - q.x;
          var dy = p.y - q.y;
          var dist = dx * dx + dy * dy;

          if (dist < linkDistSq) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = p.c;
            ctx.globalAlpha = 0.08 * (1 - dist / linkDistSq);
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    }
    ctx.globalAlpha = 1;
  }

  function drawConfetti() {
    for (var i = confettiPieces.length - 1; i >= 0; i--) {
      var piece = confettiPieces[i];

      piece.vy += 0.12; // gravity
      piece.x += piece.vx;
      piece.y += piece.vy;
      piece.rot += piece.spin;
      piece.life -= 1;

      if (piece.life <= 0 || piece.y > canvas.height + 20) {
        confettiPieces.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.translate(piece.x, piece.y);
      ctx.rotate(piece.rot);
      ctx.globalAlpha = Math.min(1, piece.life / 40);
      ctx.fillStyle = piece.c;
      ctx.fillRect(-piece.w / 2, -piece.h / 2, piece.w, piece.h);
      ctx.restore();
    }
    ctx.globalAlpha = 1;
  }

  function frame(now) {
    rafId = requestAnimationFrame(frame);

    // Skip work entirely while the tab/app is not visible
    if (document.hidden) return;

    // Frame-rate gate : halves the cost on phones (30fps),
    // keeps full smoothness on desktop (60fps)
    if (now - lastFrameTime < FRAME_INTERVAL) return;
    lastFrameTime = now;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawParticles();
    drawConfetti();
  }

  function startLoop() {
    if (rafId === null && !reduceMotion) {
      lastFrameTime = 0;
      rafId = requestAnimationFrame(frame);
    }
  }

  function stopLoop() {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  // ---------- Public helpers used by script.js ----------

  window.fxConfetti = function () {
    if (reduceMotion) return;

    var centerX = canvas.width / 2;

    for (var i = 0; i < CONFETTI_COUNT; i++) {
      confettiPieces.push({
        x: centerX + (Math.random() - 0.5) * 120,
        y: canvas.height * 0.25 + (Math.random() - 0.5) * 60,
        vx: (Math.random() - 0.5) * 9,
        vy: Math.random() * -7 - 2,
        w: Math.random() * 8 + 4,
        h: Math.random() * 5 + 3,
        rot: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * 0.25,
        life: 130 + Math.random() * 60,
        c: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }
  };

  window.fxShake = function (element) {
    if (!element || reduceMotion) return;

    element.classList.remove("fx-shake");

    // Force a reflow so the animation can restart
    void element.offsetWidth;

    element.classList.add("fx-shake");

    element.addEventListener(
      "animationend",
      function () {
        element.classList.remove("fx-shake");
      },
      { once: true }
    );
  };

  // ---------- Boot ----------

  resizeCanvas();
  createParticles();

  // Debounced resize : mobile browsers fire resize while scrolling
  // (URL bar show/hide) — recreating particles on every tick is waste
  var resizeTimer = null;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      resizeCanvas();
      createParticles();
    }, 150);
  });

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      stopLoop();
    } else {
      startLoop();
    }
  });

  if (reduceMotion) {
    // Static single frame — no animation loop
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawParticles();
  } else {
    startLoop();
  }
})();
