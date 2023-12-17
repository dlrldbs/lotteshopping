const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

ScrollTrigger.matchMedia({
    // large
    "(min-width: 1025px)": function() {
//마우스
document.addEventListener('mousemove', (e) => {
    const customCursor = document.querySelector('.cursor');
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
});

//intro
const introTl = gsap.timeline()
gsap.set('.sc-visual .group-visual .img-wrap',{scale:2})
gsap.set('.sc-visual .group-title .title-wrap',{opacity:0})
introTl
.to('.sc-visual .group-visual .img-wrap',{
  scale:'1',
  duration:1.5,
  delay:1
},'a')
.to('.sc-visual .group-title .title-wrap',{
    yPercent:0,
    opacity:1,
  },'b')

//visual
gsap.to('.sc-visual .group-title .title-wrap',{
    scrollTrigger:{
        trigger:".sc-visual",
        start:"0% 10%", 
        end:"100% 0%",
        scrub:0,
    },
    yPercent:-100,
    ease:'none',
})

const newsSlide = new Swiper('.sc-news .swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    touchRatio: 0,
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.btn.prev').addEventListener('click', function () {
        document.querySelector('.sc-news').scrollIntoView({ behavior: 'smooth' });
    });

    document.querySelector('.btn.next').addEventListener('click', function () {
        document.querySelector('.sc-news').scrollIntoView({ behavior: 'smooth', block: 'end' });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const scNews = document.querySelector('.sc-news');
    const prevButton = document.querySelector('.btn.prev');
    const nextButton = document.querySelector('.btn.next');

    function hideButtons() {
        prevButton.style.display = 'none';
        nextButton.style.display = 'none';
    }

    function showButtons() {
        prevButton.style.display = 'block';
        nextButton.style.display = 'block';
    }

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const newsTopPosition = scNews.offsetTop;
        const newsBottomPosition = newsTopPosition + scNews.offsetHeight;

        if (scrollPosition > newsTopPosition + scNews.offsetHeight * 0.2 && scrollPosition + window.innerHeight < newsBottomPosition - scNews.offsetHeight * 0.2) {
            showButtons();
        } else {
            hideButtons();
        }
    });

    hideButtons();
});

gsap.to('.sc-news .sticky-wrap .swiper-wrapper',{
    scrollTrigger:{
        trigger:".sc-news",
        start:"0% 0%", 
        end:"100% 100%",
        scrub:1,
        invalidateOnRefresh: true,
    },
    ease:'none',
    xPercent:-100,
    x:function(){
        return window.innerWidth
    }
})

const magazineListSlide = new Swiper('.list-swiper', {
    loop:true,
    slidesPerView: 3,
    initialSlide: 1,
    spaceBetween: 20,
});
const magazineBgSlide = new Swiper('.bg-swiper', {
    loop:true,
    parallax:true,
    touchRatio:0
});

magazineListSlide.on('slideChange',function(){
    magazineBgSlide.slideToLoop(this.realIndex-1)
})

gsap.set('.sc-art .left-list',{yPercent:10})
const LeftArt = gsap.to('.sc-art .left-list',{
    scrollTrigger:{
        trigger:".sc-art",
        start:"0% 0%", 
        end:"100% 100%",
        scrub:1,
    },
    yPercent:-100
})

gsap.set('.sc-art .right-list',{yPercent:-100})
const RightArt = gsap.to('.sc-art .right-list',{
    scrollTrigger:{
        trigger:".sc-art",
        start:"0% 0%", 
        end:"100% 100%",
        scrub:1,
    },
    yPercent:100
})

gsap.set('.sc-art .group-art.culture .left-list',{yPercent:200})
const LeftArtCulture = gsap.to('.sc-art .group-art.culture .left-list',{
    scrollTrigger:{
        trigger:".sc-art",
        start:"0% 0%", 
        end:"100% 100%",
        scrub:1,
    },
    yPercent:-200
})

gsap.set('.sc-art .group-art.culture .right-list',{yPercent:-200})
const RightArtCulture = gsap.to('.sc-art .group-art.culture .right-list',{
    scrollTrigger:{
        trigger:".sc-art",
        start:"0% 0%", 
        end:"100% 100%",
        scrub:1,
    },
    yPercent:200
})

gsap.set('.sc-magazine',{backgroundColor:'#fff'})
gsap.to('.sc-magazine',{
    scrollTrigger:{
        trigger:".sc-magazine",
        start:"0% 100%", 
        end:"100% 100%",   
    },
    backgroundColor: "#000",
    duration: 1
})

gsap.to('.sc-life',{
    scrollTrigger:{
        trigger:".sc-life",
        start:"100% 100%", 
        end:"100% 100%",
        scrub:1
    },
    backgroundColor: "#000",
    duration: 1
})

document.addEventListener('DOMContentLoaded', function () {
    const scVisual = document.querySelector('.sc-visual');
    const toTopLink = document.querySelector('.totop');
    const header = document.querySelector('header');
    const scMagazine = document.querySelector('.sc-magazine');
    const scInsta = document.querySelector('.sc-insta');

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const visualSectionTop = scVisual.offsetTop;
        const visualSectionHeight = scVisual.offsetHeight;

        if (scrollPosition >= visualSectionTop && scrollPosition <= visualSectionTop + visualSectionHeight) {
            toTopLink.style.visibility = 'hidden';
        } else {
            toTopLink.style.visibility = 'visible';
        }

        if (scrollPosition <= header.offsetHeight) {
            toTopLink.style.visibility = 'hidden';
        }

        const magazineSectionTop = scMagazine.offsetTop;
        const magazineSectionHeight = scMagazine.offsetHeight;

        const instaSectionTop = scInsta.offsetTop;
        const instaSectionHeight = scInsta.offsetHeight;

        if (scrollPosition >= magazineSectionTop && scrollPosition <= magazineSectionTop + magazineSectionHeight) {
            toTopLink.style.backgroundColor = '#fff';
            toTopLink.style.color = '#000';
            toTopLink.querySelector('svg').style.filter = 'invert(1)';
        } else if (scrollPosition >= instaSectionTop && scrollPosition <= instaSectionTop + instaSectionHeight) {
            toTopLink.style.backgroundColor = '#fff';
            toTopLink.style.color = '#000';
            toTopLink.querySelector('svg').style.filter = 'invert(1)';
        } else {
            toTopLink.style.backgroundColor = '#000';
            toTopLink.style.color = '#fff';
            toTopLink.querySelector('svg').style.filter = 'invert(0)';
        }
    });

    toTopLink.style.visibility = 'hidden';
});

// if (window.innerWidth <= 1024) {
//     LeftArt.pause();
//     RightArt.pause();
// } else {
//     LeftArt.play();
//     RightArt.play();
// }

// window.addEventListener('resize', function() {
//     if (window.innerWidth <= 1024) {
//         LeftArt.pause();
//         RightArt.pause();
//     } else {
//         LeftArt.play();
//         RightArt.play();
//     }
// });


$('.gnb-item').hover(function() {
    menu = $(this).data('menu');
    menuH = $(menu).outerHeight();
    $('.sub-menu').css('height',menuH);
    $(menu).addClass('on');
}, function() {
    $('.sub-menu').removeClass('on');
    $(menu).removeClass('on');
    $('.sub-menu').css('height',0);
});


// $(function(){
//     $('.mobile-nav').click(function(e){
//         e.preventDefault();

//         if ($(this).hasClass('on')) {
//             $('.mobile-nav').removeClass('on').siblings('.mobile-sub').slideUp()
//         } else {
//             $('.mobile-nav').removeClass('on').siblings('.mobile-sub').slideUp()
//             $(this).addClass('on').siblings('.mobile-sub').slideDown()
//         }

//     })
// })

// $('.hamburger-menu').click(function(e){
//     e.preventDefault();
//     $('.menu').addClass('on')
//   })

//   $('.close').click(function(){
//     $('.menu').removeClass('on')

//   })

$(document).ready(function () {
    var cursor = $(".cursor");

    $(".sc-news .swiper-slide a").mouseenter(function() {
        cursor.css({
            "width": "100px",
            "height": "100px",
        });
        cursor.html("<div class='more-text'>More</div>");
    });

    $(".sc-news .swiper-slide a").mouseleave(function() {
        cursor.css({
            "width": "20px",
            "height": "20px",
        });
        $(".more-text").remove();
    });

    $(".sc-news .btn").mouseenter(function() {
        cursor.css({
            "width": "40px",
            "height": "40px",
            "background":"red",
            "opacity":"1"
        });
    });

    $(".sc-news .btn").mouseleave(function() {
        cursor.css({
            "width": "20px",
            "height": "20px",
        });
    });

    $(".sc-keyword .container .content .right-col .keyword-list .keyword-item .hash").mouseenter(function() {
        cursor.css({
            "width": "40px",
            "height": "40px",
            "background":"green",
            "opacity":"1"
        });
    });

    $(".sc-keyword .container .content .right-col .keyword-list .keyword-item .hash").mouseleave(function() {
        cursor.css({
            "width": "20px",
            "height": "20px",
        });
    });

    $(".sc-art .container .indicator .indicator-list .indicator-item a").mouseenter(function() {
        cursor.css({
            "width": "40px",
            "height": "40px",
            "background":"red",
            "opacity":"1"
        });
    });

    $(".sc-art .container .indicator .indicator-list .indicator-item a").mouseleave(function() {
        cursor.css({
            "width": "20px",
            "height": "20px",
        });
    });

    $(".art-item a").mouseenter(function() {
        cursor.css({
            "width": "100px",
            "height": "100px",
        });
        cursor.html("<div class='more-text'>More</div>");
    });

    $(".art-item a").mouseleave(function() {
        cursor.css({
            "width": "20px",
            "height": "20px",
        });
        $(".more-text").remove();
    });

    $(".sc-life .container .life-list .life-item a").mouseenter(function() {
        cursor.css({
            "width": "100px",
            "height": "100px",
        });
        cursor.html("<div class='more-text'>More</div>");
    });

    $(".sc-life .container .life-list .life-item a").mouseleave(function() {
        cursor.css({
            "width": "20px",
            "height": "20px",
        });
        $(".more-text").remove();
    });

    $(".sc-magazine .magazine-cover .swiper-slide [class^='magazine']").mouseenter(function() {
        cursor.css({
            "width": "100px",
            "height": "100px",
        });
        cursor.html("<div class='more-text'>More</div>");
    });
    
    $(".sc-magazine .magazine-cover .swiper-slide [class^='magazine']").mouseleave(function() {
        cursor.css({
            "width": "20px",
            "height": "20px",
        });
        $(".more-text").remove();
    });

    $(".sc-insta .group-insta .marquee .insta-list .insta-item a").mouseenter(function() {
        cursor.css({
            "width": "100px",
            "height": "100px",
        });
        cursor.html("<div class='more-text'>More</div>");
    });

    $(".sc-insta .group-insta .marquee .insta-list .insta-item a").mouseleave(function() {
        cursor.css({
            "width": "20px",
            "height": "20px",
        });
        $(".more-text").remove();
    });
});

gsap.set('[data-scroll-opacityY]',{opacity:0,y:30,})
ScrollTrigger.batch("[data-scroll-opacityY]", {
    start: "0 90%",
    end: "100% 0%",
    onEnter: batch => {
        gsap.to(batch,{
            opacity:1,
            y:0
        })
    },
});

gsap.set('[data-scroll-opacityX]',{opacity:0,x:100,})
ScrollTrigger.batch("[data-scroll-opacityX]", {
    start: "0 90%",
    end: "100% 0%",
    onEnter: batch => {
        gsap.to(batch,{
            opacity:1,
            x:0,
        })
    },
});
},
// medium
"(min-width: 768px) and (max-width: 1024px)": function() {
    $(function(){
        $('.mobile-nav').click(function(e){
            e.preventDefault();
    
            if ($(this).hasClass('on')) {
                $('.mobile-nav').removeClass('on').siblings('.mobile-sub').slideUp()
            } else {
                $('.mobile-nav').removeClass('on').siblings('.mobile-sub').slideUp()
                $(this).addClass('on').siblings('.mobile-sub').slideDown()
            }
    
        })
    })
    
    $('.hamburger-menu').click(function(e){
        e.preventDefault();
        $('.menu').addClass('on')
      })
    
      $('.close').click(function(){
        $('.menu').removeClass('on')
    
      })

      const newsSlide = new Swiper('.sc-news .swiper', {
        slidesPerView: 1,
    });
},
// small
"(max-width: 767px)": function() {

    $(function(){
        $('.mobile-nav').click(function(e){
            e.preventDefault();
    
            if ($(this).hasClass('on')) {
                $('.mobile-nav').removeClass('on').siblings('.mobile-sub').slideUp()
            } else {
                $('.mobile-nav').removeClass('on').siblings('.mobile-sub').slideUp()
                $(this).addClass('on').siblings('.mobile-sub').slideDown()
            }
    
        })
    })
    
    $('.hamburger-menu').click(function(e){
        e.preventDefault();
        $('.menu').addClass('on')
      })
    
      $('.close').click(function(){
        $('.menu').removeClass('on')
      })

    const newsSlide = new Swiper('.sc-news .swiper', {
        slidesPerView: 1,
    });
  },
// all
    "all": function() {
        gsap.to('.sc-news h3 .title-line .line-wrap .word-wrap .parent .child',{
            x:'0%',
            ease:'none',
            opacity:'1',
            duration:'1',
            scrollTrigger:{
                trigger:'.sc-news',
                start:'top 100%',
                end:'0% 100%'
            }
        })
        
        gsap.to('.sc-art .container .group-title h3 p .parent .child',{
            x:'0%',
            ease:'none',
            opacity:'1',
            duration:'1',
            scrollTrigger:{
                trigger:'.sc-art ',
                start:'top 100%',
                end:'0% 100%'
            }
        });

        gsap.to('.sc-life .container .group-title h3 .title-wrap .parent .child',{
            x:'0%',
            ease:'none',
            opacity:'1',
            duration:'.5',
            scrollTrigger:{
                trigger:'.sc-life',
                start:'top 100%',
                end:'0% 100%'
            }
        })

        gsap.to('.sc-magazine .magazine-wrap .head-wrap h3 .parent .child',{
            x:'0%',
            ease:'none',
            opacity:'1',
            duration:'.8',
            scrollTrigger:{
                trigger:'.sc-magazine',
                start:'top 100%',
                end:'0% 100%'
            }
        })
        
        $('.sc-art .indicator .indicator-list .indicator-item a').click(function(e){
            e.preventDefault();
        
            tabName= $(this).data('art');
        
            $(this).addClass('on');
            $('.sc-art .indicator .indicator-list .indicator-item a').not(this).removeClass('on');
            $(tabName).addClass('on').siblings().removeClass('on');
        })
        
        $('.sc-art .indicator .indicator-list .indicator-item #placebtn').click(function(e){
            e.preventDefault();
        
            $('.sc-art .bg1').css({
                'transform': 'translateX(0%)',
                'transition': 'transform 0.3s ease'
            });
        
            $('.sc-art .bg2').css({
                'transform': 'translateX(0%)',
                'transition': 'transform 0.3s ease'
            });
        
            $('.sc-art .indicator .indicator-desc-wrap .indicator-item').css({
                'transform': 'translateY(0%)',
                'transition': 'transform 0.3s ease'
            });
        
            $('.sc-art .container .group-title h3:nth-child(1)').css({
                'opacity': '1',
                'transition': 'transform 0.3s ease'
            });
        
            $('.sc-art .container .group-title h3:nth-child(2)').css({
                'opacity': '0',
                'transition': 'transform 0.3s ease'
            });
        
            $('.sc-art .container .group-title h3:nth-child(3)').css({
                'transition': 'transform 0.3s ease',
                'opacity': '0'
            });
        });
        $('.sc-art .indicator .indicator-list .indicator-item #eatbtn').click(function(e){
            e.preventDefault();
        
            $('.sc-art .bg1').css({
                'transform': 'translateX(100%)',
                'transition': 'transform 0.3s ease'
            });
        
            $('.sc-art .bg2').css({
                'transform': 'translateX(0%)',
                'transition': 'transform 0.3s ease'
            });
        
            $('.sc-art .container .group-title h3:nth-child(1)').css({
                'opacity': '0',
                'transition': 'transform 0.3s ease'
            });
        
            $('.sc-art .container .group-title h3:nth-child(2)').css({
                'opacity': '1',
                'transition': 'transform 0.3s ease'
            });
        
            $('.sc-art .container .group-title h3:nth-child(3)').css({
                'transition': 'transform 0.3s ease',
                'opacity': '0'
            });
        });
        $('.sc-art .indicator .indicator-list .indicator-item #culturebtn').click(function(e){
            e.preventDefault();
        
            $('.sc-art .bg2').css({
                'transform': 'translateX(100%)',
                'transition': 'transform 0.3s ease'
            });
        
            $('.sc-art .indicator .indicator-desc-wrap .indicator-item').css({
                'transform': 'translateY(-200%)',
                'transition': 'transform 0.3s ease'
            });
        
            $('.sc-art .container .group-title h3:nth-child(1)').css({
                'opacity': '0',
                'transition': 'transform 0.3s ease'
            });
        
            $('.sc-art .container .group-title h3:nth-child(2)').css({
                'opacity': '0',
                'transition': 'transform 0.3s ease'
            });
        
            $('.sc-art .container .group-title h3:nth-child(3)').css({
                'transition': 'transform 0.3s ease',
                'opacity': '1'
            });
        });
    }
});

// ScrollTrigger.matchMedia({
//     // large
//     "(min-width: 1025px)": function() {
  
//     },
//     // medium
//     "(min-width: 768px) and (max-width: 1024px)": function() {
    
//     },
//     // small
//     "(max-width: 767px)": function() {
          
//     },
//     // all
//     "all": function() {
      
//     }
//   });