(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  refs.modal.addEventListener("click", (e) => {
    // Закрывает при клике на фон
    if (e.target === refs.modal) {
      toggleModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    // Закрывает при Esc
    if (e.key === "Escape" && !refs.modal.classList.contains("is-hidden")) {
      toggleModal();
    }
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();
