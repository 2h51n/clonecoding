// main.js
document.addEventListener("DOMContentLoaded", function () {
  const modalWrap = document.getElementById("modal-wrap");
  const modalClose = document.getElementById("modal-close");

  setTimeout(() => {
    modalWrap.style.display = "flex";
  }, 2000);

  modalClose.addEventListener("click", () => {
    modalWrap.style.display = "none";
  });

  const topBtn = document.getElementById("top-btn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });

  topBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const chatBtn = document.getElementById("chat-btn");
  chatBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // 채팅 기능 추가 (예: 채팅 창 열기)
    alert("채팅 기능이 준비 중입니다.");
  });
});