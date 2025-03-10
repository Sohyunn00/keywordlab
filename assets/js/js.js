"use strict";

//fullpage
const myFullpage = new fullpage("#fullpage", {
  navigation: true,
  responsiveWidth: 1279, //1279이상일때 부터 적용하도록

  afterLoad: function (origin, destination, direction) {
    //afterLoad 풀페이지화면이 전환되고 나서 실행
    //인덱스 번호로 이벤트 넣기

    if (destination.index === 1) {
      //index가 1일때 show를 추가한다.
      $(".marketer").addClass("show");
      $(".btn-bottom-wrap").addClass("on"); //상단 이동 버튼
    } else if (destination.index > 0) {
    } else {
      $(".btn-bottom-wrap").removeClass("on");
    }

    if (destination.index === 2) {
      $(".services").addClass("show");
    }
    if (destination.index === 3) {
      $(".history").addClass("show");
    }
    if (destination.index === 4) {
      $(".advertise").addClass("show");
    }
    if (destination.index === 5) {
      $(".news").addClass("show");
    }
    if (destination.index === 6) {
      $(".bottom_visual").addClass("show");
    }
  },
});

//상단이동버튼
$(".top_btn").click(function () {
  myFullpage.moveTo(1);
});
//1279이하 상단 이동버튼 이벤트
const scrollingTop = document.querySelector(".fixed_btn_wrap");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollingTop.classList.add("on");
  } else {
    scrollingTop.classList.remove("on");
  }
});

// 햄버거 메뉴 🍅🍅🍅
$(function () {
  // gnb 호버하면 submenu 내려오기
  $(".gnb")
    .on("mouseenter", function () {
      $(this).addClass("on");
      $(".submenu").addClass("on");
    })
    .on("mouseleave", function () {
      $(this).removeClass("on");
      $(".submenu").removeClass("on");
    });

  // 햄버거 버튼 클릭하면 슬라이드메뉴 보이기
  $(".slide_btn").on("click", function () {
    if ($(".slide_btn span").is(".on")) {
      $("body").removeClass("on");
      $(".slide_btn span").removeClass("on");
      $(".slide_menu").removeClass("on");
    } else {
      $("body").addClass("on");
      $(".slide_btn span").addClass("on");
      $(".slide_menu").addClass("on");
    }
  });

  // 슬라이드 메뉴 창에서 바깥 화면 클릭 시 메뉴 들어가기
  $(".dimmed").on("click", function () {
    if ($(".slide_btn span").is(".on")) {
      $("body").removeClass("on");
      $(".slide_btn span").removeClass("on");
      $(".slide_menu").removeClass("on");
    }
  });

  $(".nav").on("click", function (e) {
    e.preventDefault();
    // 클릭된 요소를 제외하고 열려있는 메뉴가 있다면 접어주기
    $(".nav").not(this).removeClass("on").next().slideUp();

    // 클릭된 메뉴 토글
    $(this).toggleClass("on").next().slideToggle();
  });

  // 메인비주얼 🍅🍅🍅
  //도형 움직임
  $(".main_visual .img div").each(function (i, el) {
    //공통클래스로 반복문 돌리기
    $(el).mousemove(function (e) {
      w = $(this).width(); //넓이값
      h = $(this).height(); //높이값
      xVal = e.offsetX - w / 2; //중심값잡아주기
      yVal = e.offsetY - h / 2; //중심값잡아주기
      //offset으로 선택한 요소의 좌표를 가져옴

      gsap.to($(this).find("img"), {
        rotateX: -xVal / 10,
        rotateY: yVal / 20,
      });
    });
  });

  // 섹션 2 🍅🍅🍅
  $(".menu_tab > a").mouseover(function () {
    const thisNum = $(this).index();
    //버튼 순서를 데이터값으로 선언하여

    $(".on_icon").css({
      top: "calc((100%/4)* " + thisNum + ")",
      //css에 top을 계산하여 표현
    });
  });

  $(".menu_tab > a").on("click", function (e) {
    e.preventDefault();

    // 모든 탭의 글자색 초기화 & 모든 서비스 요소에서 'on' 클래스 제거
    $(".right .page").removeClass("on");

    // 현재 클릭한 탭의 인덱스 가져오기 (1부터 시작)
    const index = $(this).index() + 1;

    // 해당 서비스만 'on' 클래스 추가 & 클릭한 탭의 글자색 변경
    $(".right .service" + index).addClass("on");
  });
});

// 섹션 3 🍅🍅🍅
$(".left .year_tab button").click(function () {
  let tabName = $(this).data("tabslide"); // data-tabslide 값 가져오기

  $(this).addClass("on").siblings().removeClass("on"); // 버튼 활성화

  $(".right .tab_con").removeClass("on"); // 모든 탭 콘텐츠 숨김
  $(tabName).addClass("on"); // 클릭한 탭 콘텐츠 보이기

  // //모바일 탭 접기
  // if ($(window).width() < 767) {
  //   $(".btn-wrap").slideUp();
  // }
});

//tab 슬라이드
const swiper = new Swiper("#slide1 .swiper", {
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
  spaceBetween: 15,
});

const swiper2 = new Swiper("#slide2 .swiper", {
  navigation: {
    nextEl: ".next2",
    prevEl: ".prev2",
  },
  spaceBetween: 15,
});

const swiper3 = new Swiper("#slide3 .swiper", {
  navigation: {
    nextEl: ".next3",
    prevEl: ".prev3",
  },
  spaceBetween: 15,
});

const swiper4 = new Swiper("#slide4 .swiper", {
  navigation: {
    nextEl: ".next4",
    prevEl: ".prev4",
  },
  spaceBetween: 15,
});

const swiper5 = new Swiper("#slide5 .swiper", {
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
  spaceBetween: 15,
});

// 섹션 5 🍅🍅🍅
const swiper6 = new Swiper(".news .news_slide", {
  slidesPerView: 2,
  spaceBetween: 22,
  navigation: {
    nextEl: ".news .next",
    prevEl: ".news .prev",
  },
  pagination: {
    el: ".news .swiper-pagination",
    type: "progressbar",
  },
  //swiper 반응형 작업할때 breakpints를 사용하여 슬라이드보여지는 갯수를 설정
  breakpoints: {
    768: {
      slidesPerView: 3, //브라우저가 768보다 클 때
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 4, //브라우저가 1024보다 클 때
      spaceBetween: 50,
    },
  },
});

// 섹션 6 🍅🍅🍅
//마우스커스텀
const customCursor = document.querySelector(".mouse");

gsap.set(".mouse", { scale: 0 });
document.addEventListener("mousemove", (e) => {
  gsap.to(customCursor, {
    x: e.clientX,
    y: e.clientY,
    //마우스 따라다니도록 하기
  });
});

const hoverElements = document.querySelectorAll(".bottom_visual a");

$(".bottom_visual .con").hover(
  function () {
    gsap.to(customCursor, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
    });
  },
  function () {
    gsap.to(customCursor, {
      opacity: 0,
      scale: 0,
      duration: 0.3,
    });
  }
);
