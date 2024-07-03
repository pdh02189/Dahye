$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	//console.log(scroll);
	if (scroll >= 50) {
		//console.log('a');
		$("header").addClass("on");
		$(".pageup").addClass("on");
	} else {
		//console.log('a');
		$("header").removeClass("on");
		$(".pageup").removeClass("on");
	}
});

$(document).ready(function(){
    $(".pageup, .logo").on("click",function(){
        $('html, body').animate({
            scrollTop : 0
        },400)
        return false;
    });

    const header = $('header').height();
    const visual = $('.visual').height();
    const aboutme = $('.aboutme').height();
    const skills = $('.skills').height();
    const certificate = $('.certificate').height();
    const projects = $('.projects').height();
    console.log(visual - header);

    $(".btn_aboutme, .btn_more, .aboutme .comm_tit_img").on("click",function(){
        $('html, body').animate({
            scrollTop : visual - header
        },400)
        return false;
    });

    $(".btn_skills, .skills .comm_tit_img").on("click",function(){
        $('html, body').animate({
            scrollTop : (visual + aboutme) - header
        },400)
        return false;
    });

    $(".btn_certificate, .certificate .comm_tit_img").on("click",function(){
        $('html, body').animate({
            scrollTop : (visual + aboutme + skills) - header
        },400)
        return false;
    });

    $(".btn_projects, .projects .comm_tit_img").on("click",function(){
        $('html, body').animate({
            scrollTop : (visual + aboutme + skills + certificate) - header
        },400)
        return false;
    });

    $(".btn_career, .career .comm_tit_img").on("click",function(){
        $('html, body').animate({
            scrollTop : (visual + aboutme + skills + certificate + projects) - header
        },400)
        return false;
    });
});