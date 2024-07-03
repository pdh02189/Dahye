$(document).ready(function(){
    // 미디어 쿼리 조건
    const mediaQuery = window.matchMedia('(min-width: 1000px)');

    // 스크롤 이벤트 핸들러
    function handleScroll() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $("header").addClass("on");
            $(".pageup").addClass("on");
        } else {
            $("header").removeClass("on");
            $(".pageup").removeClass("on");
        }
    }

    // 미디어 쿼리 조건에 따라 클래스 추가/제거 함수
    function handleMediaQueryChange(event) {
        const $header = $('header');
        if (event.matches) {
            // 1000px 이상에서는 스크롤 이벤트만 영향을 미침
            handleScroll();
        } else {
            // 1000px 미만에서는 header에 무조건 'on' 클래스 추가
            $header.addClass('on');
        }
    }

    // 페이지 로드 시 미디어 쿼리 조건 체크
    handleMediaQueryChange(mediaQuery);

    // 미디어 쿼리 조건이 변경될 때마다 함수 실행
    mediaQuery.addListener(handleMediaQueryChange);

    // 스크롤 이벤트 처리
    $(window).scroll(function() {
        if (mediaQuery.matches) {
            handleScroll();
        }
    });

    // 페이지 업 버튼과 로고 클릭 시 맨 위로 스크롤
    $(".pageup, .logo").on("click", function() {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    $(".pageup, .logo").on("click",function(){
        $('html, body').animate({
            scrollTop : 0
        },400)
        return false;
    });

    function getHeights() {
        return {
            header: $('header').height(),
            visual: $('.visual').height(),
            aboutme: $('.aboutme').height(),
            skills: $('.skills').height(),
            certificate: $('.certificate').height(),
            projects: $('.projects').height()
        };
    }

    function scrollToSection(offset) {
        $('html, body').animate({
            scrollTop: offset
        }, 400);
        return false;
    }

    $(".btn_aboutme, .btn_more, .aboutme .comm_tit_img").on("click", function() {
        const heights = getHeights();
        return scrollToSection(heights.visual - heights.header);
    });

    $(".btn_skills, .skills .comm_tit_img").on("click", function() {
        const heights = getHeights();
        return scrollToSection(heights.visual + heights.aboutme - heights.header);
    });

    $(".btn_certificate, .certificate .comm_tit_img").on("click", function() {
        const heights = getHeights();
        return scrollToSection(heights.visual + heights.aboutme + heights.skills - heights.header);
    });

    $(".btn_projects, .projects .comm_tit_img").on("click", function() {
        const heights = getHeights();
        return scrollToSection(heights.visual + heights.aboutme + heights.skills + heights.certificate - heights.header);
    });

    $(".btn_career, .career .comm_tit_img").on("click", function() {
        const heights = getHeights();
        return scrollToSection(heights.visual + heights.aboutme + heights.skills + heights.certificate + heights.projects - heights.header);
    });

    // 모바일 메뉴
    $(".mobile_menu").on("click", function(){
        $(".mobile_gnb").toggleClass("on");
    });
});
