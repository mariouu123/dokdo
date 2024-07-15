$(function () {
    // 풀페이지
    var myFullpage = new fullpage('#fullpage', {
        verticalCentered: true,
        anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5', 'anchor6', 'anchor7', 'anchor8'],
        menu: '#menu',
        showActiveTooltip: true,
        scrollOverflow: true, //스크롤허용
        scrollingSpeed: 1000, //스크롤 속도
        navigation: true, // 네비게이션 사용
        navigationPosition: 'left', //네비게이션 위치
        navigationTooltips: ['메인', '관람안내', '전시안내', '독도자료실', '포토앨범', '공지사항', '오시는길', '마지막'], //네비게이션 호버 시 설명
        responsiveWidth: 1320, //반응형 너비지정 900px일 때 스크롤 생김.
        afterResponsive: function (isResponsive) {

        }
    });

    // $('.more').click(function(){
    //     $('#section5').addClass('fp-auto-height');
    //     $('#section5').css('height','1200px');
    // });

    // 사이드 메뉴 이동
    $('.nav1 li a').click(function () {
        $('input[id="menuicon"]').attr("checked", false);
    });


    //숨긴 메뉴 보이기(헤더 스크롤)
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.header_scroll').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta 
        if (Math.abs(lastScrollTop - st) <= delta) return;

        // If they scrolled down and are past the navbar, add class .nav-up. 
        // This is necessary so you never see what is "behind" the navbar. 
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down 
            $('.header_scroll').addClass('nav-up');
        } else {
            // Scroll Up 
            if (st + $(window).height() < $(document).height()) {
                $('.header_scroll').removeClass('nav-up');
            }
        }

        lastScrollTop = st;
    }

    // 슬라이드1
    var swiper = new Swiper(".mySwiper1", {
        direction: "vertical",
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        loop: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
        direction: "vertical",
        spaceBetween: 10,
        slidesPerView: 1,
        speed: 1500,
        loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".mySwiper2 .swiper-button-next",
            prevEl: ".mySwiper2 .swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });


    // 슬라이드2
    var swiper = new Swiper(".mySwiper", {
        speed: 2500,
        spaceBetween: 30,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".mySwiper .swiper-button-next",
            prevEl: ".mySwiper .swiper-button-prev",
        },
        pagination: {
            el: ".mySwiper .swiper-pagination",
            clickable: true,
        },
    });

    // 예약하기 버튼 페이드
    $(function () {
        $('.reservation_cloud a h2').mouseenter(function () {
            $('.reservation_cloud a img').stop().fadeIn();
        });
        $('.reservation_cloud a h2').mouseleave(function () {
            $('.reservation_cloud a img').stop().fadeOut();
        });
    });

    // 캘린더

    //팝업
    $(".reservation_cloud a h2").click(function () {
        $(".calendar_box").show();
        return false;
    })
    $(".close").click(function () {
        $(".calendar_box").hide();
    })
    /* 일반함수 */
    const label = document.querySelector('.label');
    const options = document.querySelectorAll('.optionItem');
    // 클릭한 옵션의 텍스트를 라벨 안에 넣음
    const handleSelect = function (item) {
        label.innerHTML = item.textContent;
        label.parentNode.classList.remove('active');
    }
    // 옵션 클릭시 클릭한 옵션을 넘김
    options.forEach(function (option) {
        option.addEventListener('click', function () { handleSelect(option) })
    })
    // 라벨을 클릭시 옵션 목록이 열림/닫힘
    label.addEventListener('click', function () {
        if (label.parentNode.classList.contains('active')) {
            label.parentNode.classList.remove('active');
        } else {
            label.parentNode.classList.add('active');
        }
    });

    // 전시안내 슬라이드
    var swiper = new Swiper(".ex_s1", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".ex_s2", {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        spaceBetween: 10,
        navigation: {
            nextEl: ".ex_s2 .swiper-button-next",
            prevEl: ".ex_s2 .swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });

    // 포토앨범 슬라이드
    var swiper = new Swiper('.flowslide_inner ', {
        slidesPerView: 1,//보여지는 갤러리 수
        spaceBetween: 60,//갤러리 사이 간격
        speed: 6000,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 0,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복

        breakpoints: {
            // 화면의 넓이가 320px 이상일 때
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // 화면의 넓이가 640px 이상일 때
            900: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    });

    $('.flowslide .swiper-slide').on('mouseover', function () {
        swiper.autoplay.stop();
    });
    $('.flowslide .swiper-slide').on('mouseout', function () {
        swiper.autoplay.start();
    });

    // 공지사항 more 스크롤
    $('.more').click(function () {
        // $('.noticebox').css('overflow-y', 'scroll');
        $('.noticebox').css('height', 'auto');
        $('.more').hide();
    });

    // 오시는길 슬라이드
    $('.map_btn').click(function () {
        $('.text_box').toggleClass('on');
        $('.m_btn2').toggleClass('on2')

    });

    // 타이핑
    const content = '"경상북도 울릉읍 독도리 1-96"';
    const text = document.querySelector(".ftext");
    let i = 0;

    function typing() {
        let txt = content[i++];
        text.innerHTML += txt === "\n" ? "<br/>" : txt;
        if (i > content.length) {
            text.textContent = "";
            i = 0;
        }
    }
    setInterval(typing, 200)
});