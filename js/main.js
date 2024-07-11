// 페이지의 모든 HTML 요소가 로드되면 실행.
document.addEventListener("DOMContentLoaded", function () {
  
  // 모달 창을 감싸는 요소와 모달을 닫는 버튼을 가져옴.
  const modalWrap = document.getElementById("modal-wrap");
  const modalClose = document.getElementById("modal-close");

  // 페이지가 로드된 후 2초 뒤에 모달 창을 표시.
  setTimeout(() => {
    modalWrap.style.display = "flex";
  }, 2000);

  // 모달을 닫는 버튼에 클릭 이벤트를 추가.
  modalClose.addEventListener("click", () => {
    modalWrap.style.display = "none";
  });

  // 페이지 상단으로 이동하는 버튼을 가져옴.
  const topBtn = document.getElementById("top-btn");

  // 페이지를 스크롤할 때마다 실행.
  window.addEventListener("scroll", () => {
    // 스크롤이 300px 이상이면 페이지 상단으로 이동하는 버튼을 표시.
    if (window.scrollY > 300) {
      topBtn.style.display = "block";
    } else {
      // 그렇지 않으면 버튼을 숨김.
      topBtn.style.display = "none";
    }
  });

  // 페이지 상단으로 이동하는 버튼에 클릭 이벤트를 추가.
  topBtn.addEventListener("click", (e) => {
    // 기본 동작을 취소하여 페이지가 부드럽게 상단으로 이동하도록 함.
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // 채팅 버튼을 가져와서 클릭 이벤트를 추가.
  const chatBtn = document.getElementById("chat-btn");
  chatBtn.addEventListener("click", (e) => {
    // 기본 동작을 취소하고 채팅 기능이 준비 중임을 알리는 경고창을 띄움.
    e.preventDefault();
    alert("채팅 기능이 준비 중입니다.");
  });
});
