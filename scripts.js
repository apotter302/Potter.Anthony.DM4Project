function openModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = "flex";
    modal.classList.add("show");
  }
  
  function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.classList.remove("show");
    setTimeout(function () {
      modal.style.display = "none";
    }, 300);
  }