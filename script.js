document.addEventListener("DOMContentLoaded", () => {

  /* ===== GALERIA MODAL ===== */
  const galleryItems = document.querySelectorAll(".gallery__item");
  const modal = document.getElementById("galleryModal");
  const modalContent = document.getElementById("galleryContent");
  const closeBtn = document.querySelector(".gallery-modal__close");

  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      const type = item.dataset.type;
      const src = item.dataset.src;

      if (!src) return;

      modalContent.innerHTML = "";

      if (type === "image") {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Imagem ampliada";
        modalContent.appendChild(img);
      }

      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  function closeModal() {
    modal.classList.remove("active");
    modalContent.innerHTML = "";
    document.body.style.overflow = "";
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  modal.addEventListener("click", e => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

  /* ===== MENU MOBILE ===== */
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      mobileNav.classList.toggle("active");
    });

    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("active");
      });
    });
  }

  /* ===== FORMULÁRIO WHATSAPP ===== */
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();

      const name = document.getElementById("name")?.value || "";
      const email = document.getElementById("email")?.value || "";
      const phone = document.getElementById("phone")?.value || "";
      const message = document.getElementById("message")?.value || "";

      const whatsappMessage = encodeURIComponent(
        `Olá! Meu nome é ${name}.\n\nE-mail: ${email}\nTelefone: ${phone}\n\nMensagem: ${message}`
      );

      window.open(
        `https://wa.me/5534999515032?text=${whatsappMessage}`,
        "_blank"
      );
    });
  }

  /* ===== SCROLL SUAVE ===== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  /* ===== HEADER SHADOW ===== */
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (!header) return;
    header.style.boxShadow =
      window.scrollY > 100
        ? "0 2px 10px rgba(0,0,0,0.1)"
        : "none";
  });

});

