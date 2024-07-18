// 페이지의 모든 HTML 요소가 로드되면 실행.
document.addEventListener("DOMContentLoaded", function () {
  const modalWrap = document.getElementById("modal-wrap");
  const modalClose = document.getElementById("modal-close");
  const topBtn = document.getElementById("top-btn");
  const chatBtn = document.getElementById("chat-btn");

  // 페이지가 로드된 후 1초(1000밀리초) 뒤에 모달 창을 표시.
  setTimeout(() => {
    modalWrap.style.display = "flex";
  }, 1000);

  // 모달을 닫는 버튼에 클릭 이벤트를 추가.
  modalClose.addEventListener("click", () => {
    modalWrap.style.display = "none";
  });

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
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // 채팅 버튼에 클릭 이벤트를 추가.
  chatBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // 현재 화면 너비를 기준으로 모바일인지 데스크탑인지 판단.
    if (window.innerWidth < 768) {
      // 모바일 화면에서는 팝업 창이나 모달 창을 통해 채팅 기능 제공.
      alert("모바일에서는 팝업으로 채팅 기능을 제공합니다.");
      // 모바일에서 팝업 창 또는 모달 창을 열 수 있는 코드 추가.
    } else {
      // 데스크탑 화면에서는 채팅창을 오른쪽 하단 고정으로 제공할 수 있음.
      alert("데스크탑에서는 오른쪽 하단에 채팅창을 표시합니다.");
      // 데스크탑에서 채팅창을 표시할 수 있는 코드 추가.
    }
  });

  // sale_copy 스와이퍼 적용
  var swiperOptions = {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    direction: "horizontal",
    containerModifierClass: "swiper-container-",
    wrapperClass: "swiper-wrapper",
    slideClass: "swiper-slide",
  };
  var saleCopySwiper = new Swiper(".sale_copy", swiperOptions);

  // 메인 이미지 갤러리 스와이퍼 적용
  var mainSwiperOptions = {
    loop: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      360: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  };

  // 각 섹션에 스와이퍼 적용
  document.querySelectorAll(".image-gallery").forEach((gallery) => {
    new Swiper(gallery, mainSwiperOptions);
  });
});
