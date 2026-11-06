/* =========================================================
   USMAN HVAC TECH — site interactions
   ========================================================= */
(function () {
  "use strict";

  var WHATSAPP_NUMBER = "2348154779262";

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Sticky header ---------- */
  var header = document.getElementById("siteHeader");
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 40) header.classList.add("is-stuck");
    else header.classList.remove("is-stuck");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile navigation ---------- */
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");

  function closeNav() {
    if (!navToggle || !mainNav) return;
    navToggle.classList.remove("is-open");
    mainNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  }

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var open = mainNav.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    Array.prototype.forEach.call(mainNav.querySelectorAll("a"), function (link) {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 860) closeNav();
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealSelectors = [
    ".section-head",
    ".section-head-row",
    ".service-card",
    ".split-media",
    ".split-body",
    ".process-step",
    ".project-card",
    ".quote-intro",
    ".quote-form",
    ".contact-card",
    ".map-card",
    ".stats-grid"
  ];

  var revealEls = document.querySelectorAll(revealSelectors.join(","));
  Array.prototype.forEach.call(revealEls, function (el) {
    el.setAttribute("data-reveal", "");
  });

  var reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduceMotion && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var siblings = el.parentElement
            ? Array.prototype.indexOf.call(el.parentElement.children, el)
            : 0;
          el.style.transitionDelay = Math.min(siblings, 4) * 70 + "ms";
          el.classList.add("is-visible");
          observer.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    Array.prototype.forEach.call(revealEls, function (el) {
      observer.observe(el);
    });
  } else {
    Array.prototype.forEach.call(revealEls, function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---------- 3D Coverflow Testimonial Carousel ---------- */
  var coverflow = document.getElementById("heroCoverflow");
  var cards = Array.from(document.querySelectorAll(".coverflow-card"));
  
  if (coverflow && cards.length > 0) {
    // Exactly 5 positions for the 5 cards so all are visible
    var positions = [
      "pos-center",
      "pos-right-1",
      "pos-right-2",
      "pos-left-2",
      "pos-left-1"
    ];
    var currentIndex = 0;
    var autoScrollInterval;

    function updateCarousel() {
      cards.forEach(function (card, i) {
        var posIndex = (i - currentIndex + cards.length) % cards.length;
        var posClass = positions[posIndex] || "pos-center";
        
        card.className = "coverflow-card";
        card.classList.add(posClass);
      });
    }

    function startAutoScroll() {
      if (reduceMotion) return;
      autoScrollInterval = setInterval(function () {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
      }, 4000);
    }

    function stopAutoScroll() {
      clearInterval(autoScrollInterval);
    }

    updateCarousel();
    startAutoScroll();

    coverflow.addEventListener("mouseenter", stopAutoScroll);
    coverflow.addEventListener("mouseleave", startAutoScroll);

    cards.forEach(function (card, i) {
      card.addEventListener("click", function () {
        currentIndex = i;
        updateCarousel();
        stopAutoScroll();
        startAutoScroll();
      });
    });

    var prevBtn = document.getElementById("carouselPrev");
    var nextBtn = document.getElementById("carouselNext");

    if (prevBtn) {
      prevBtn.addEventListener("click", function (e) {
        e.preventDefault();
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
        stopAutoScroll();
        startAutoScroll();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", function (e) {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
        stopAutoScroll();
        startAutoScroll();
      });
    }
  }

  /* ---------- Project filtering ---------- */
  var filterBar = document.getElementById("projectFilters");
  var projectGrid = document.getElementById("projectGrid");

  if (filterBar && projectGrid) {
    var projectCards = projectGrid.querySelectorAll(".project-card");

    filterBar.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter");
      if (!btn) return;

      var filter = btn.getAttribute("data-filter") || "all";

      Array.prototype.forEach.call(
        filterBar.querySelectorAll(".filter"),
        function (b) {
          var active = b === btn;
          b.classList.toggle("is-active", active);
          b.setAttribute("aria-selected", active ? "true" : "false");
        }
      );

      Array.prototype.forEach.call(projectCards, function (card) {
        var category = card.getAttribute("data-category") || "";
        var show = filter === "all" || category === filter;
        card.classList.toggle("is-hidden", !show);
        if (show) {
          card.classList.add("is-visible");
        }
      });
    });
  }

  /* ---------- Quote form ---------- */
  var form = document.getElementById("quoteForm");
  var note = document.getElementById("formNote");

  function setNote(message, type) {
    if (!note) return;
    note.textContent = message || "";
    note.classList.remove("is-success", "is-error");
    if (type) note.classList.add(type);
  }

  function markError(input, isError) {
    if (!input) return;
    var field = input.closest(".field");
    if (field) field.classList.toggle("has-error", !!isError);
  }

  if (form) {
    var nameEl = document.getElementById("qName");
    var phoneEl = document.getElementById("qPhone");
    var serviceEl = document.getElementById("qService");
    var locationEl = document.getElementById("qLocation");
    var detailsEl = document.getElementById("qDetails");

    [nameEl, phoneEl, serviceEl, locationEl].forEach(function (el) {
      if (!el) return;
      el.addEventListener("input", function () {
        markError(el, false);
        setNote("", null);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = nameEl ? nameEl.value.trim() : "";
      var phone = phoneEl ? phoneEl.value.trim() : "";
      var service = serviceEl ? serviceEl.value.trim() : "";
      var location = locationEl ? locationEl.value.trim() : "";
      var details = detailsEl ? detailsEl.value.trim() : "";

      var ok = true;

      if (!name) { markError(nameEl, true); ok = false; }
      if (!phone) { markError(phoneEl, true); ok = false; }
      if (!service) { markError(serviceEl, true); ok = false; }
      if (!location) { markError(locationEl, true); ok = false; }

      if (!ok) {
        setNote("Please fill in the highlighted fields.", "is-error");
        return;
      }

      var lines = [
        "New quote request — USMAN HVAC TECH",
        "",
        "Name: " + name,
        "Phone: " + phone,
        "Service: " + service,
        "Location: " + location
      ];
      if (details) {
        lines.push("Details: " + details);
      }

      // Use official api.whatsapp.com for better compatibility
      var url =
        "https://api.whatsapp.com/send?phone=" +
        WHATSAPP_NUMBER +
        "&text=" +
        encodeURIComponent(lines.join("\n"));

      setNote("Opening WhatsApp with your request…", "is-success");

      var win = window.open(url, "_blank", "noopener");
      if (!win) {
        window.location.href = url;
      }

      form.reset();
    });
  }
})();