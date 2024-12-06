(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('sticky-top shadow');
        } else {
            $('.nav-bar').removeClass('sticky-top shadow');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0});
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    $(".new").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true
    });

    $(".phoneNew").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true
    });

    $('.x').click(function() {
        $('.popup-bg').css('display', 'none');
      });
      // next button
    $(".next-btn").click(function() {
        $(this).closest('.owl-carousel').owlCarousel('next'); 
      });
      
    $('.accept-cookie').click(function(){
        $('.cookie-notification').css('display' , 'none');
    });

    $('#popup').click(function() {
        $('#popup-lg').fadeIn();
    })
    
    
})(jQuery);


// Slide Tab
const tabs = document.querySelectorAll('.tab_btn');
const all_content = document.querySelectorAll('.content');

tabs.forEach((tab, index)=> {
    tab.addEventListener('click', ()=>{
        tabs.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');

    all_content.forEach(content=>{content.classList.remove('active')});
    all_content[index].classList.add('active');
    })
})

const teamTabs = document.querySelectorAll('.tab_btn');
const teamContents = document.querySelectorAll('.teamContent');

teamTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        teamTabs.forEach(tab => { tab.classList.remove('team_btn') });
        tab.classList.add('team_btn');

        teamContents.forEach(content => { content.classList.remove('active') });
        teamContents[index].classList.add('active');
    });
});

const eventTab = document.querySelectorAll('.event_btn');
const eventContent = document.querySelectorAll('.event-content');

eventTab.forEach((tab, index)=> {
    tab.addEventListener('click', ()=>{
        eventTab.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');

        eventContent.forEach(content=>{content.classList.remove('active')});
        eventContent[index].classList.add('active');
    })
})



// CopyRights Auto Year
document.getElementById("year").innerHTML = new Date().getFullYear();

// Contact Form Validation

$(document).ready(function () {
    $("#form").validate({
      rules: {
        fname: {
          required: true,
          number:false,
          minlength: 2
        },
        lname: {
          required: true,
          minlength: 2
        },
        phone: {
          required: true,
          digits: true,
          minlength: 10,
          maxlength: 10
        },
        email: {
          required: true,
          email: true
        },
        message: {
          required: true,
          minlength: 10
        }
      },
      messages: {
        fname: {
          required: "Please enter your first name",
          minlength: "First name must be at least 2 characters long"
        },
        lname: {
          required: "Please enter your last name",
          minlength: "Last name must be at least 2 characters long"
        },
        phone: {
          required: "Please enter your phone number",
          digits: "Please enter a valid phone number",
          minlength: "Phone number must be exactly 10 digits",
          maxlength: "Phone number must be exactly 10 digits"
        },
        email: {
          required: "Please enter your email address",
          email: "Please enter a valid email address"
        },
        message: {
          required: "Please enter a message",
          minlength: "Message must be at least 10 characters long"
        }
      },
      errorElement: "div",
      errorPlacement: function (error, element) {
        error.addClass("text-danger mt-1");
        error.insertAfter(element);
      },
      highlight: function (element) {
        $(element).addClass("is-invalid");
      },
      unhighlight: function (element) {
        $(element).removeClass("is-invalid");
      }
    });
  });


  $(document).ready(function() {
    $('.teamDetails').hide(); // Initially hide all .teamDetails sections

    $('.teamSlideBtn').find('.teamSlide img').css("border-radius", "50%");

    $('.teamSlideBtn').click(function(event) {
        event.preventDefault();

        // Toggle the .teamDetails inside the clicked .teamSlideBtn
        $(this).find('.teamDetails').slideToggle(function() {
            // Target the specific .teamSlide inside the clicked .teamSlideBtn
            if ($(this).is(":visible")) {
                $(this).closest('.teamSlideBtn').find('.teamSlide img').css("border-radius", "10px");
            } else {
                $(this).closest('.teamSlideBtn').find('.teamSlide img').css("border-radius", "50%");
            }
        });
    });
});


let carousel = document.querySelector('.hero-carousel');
let items = document.querySelectorAll('.hero-carousel .item');
let countItem = items.length;
let active = 1;
let other_1 = null;
let other_2 = null;

next.onclick = ()=> {
    active = active + 1 >= countItem ? 0 : active + 1;
    other_1 = active - 1 < 0 ? countItem -1 : active - 1;
    other_2 = active + 1 >= countItem ? 0 : active +1;
    changeSlider();
}

prev.onclick = ()=> {
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    other_1 = active + 1 >= countItem ? 0 : active + 1;
    other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
    changeSlider();
}

const changeSlider = ()=> {
    let itemOldActive = document.querySelector('.hero-carousel .item.active');
    if(itemOldActive) itemOldActive.classList.remove('active')

    let itemOldOther_1 = document.querySelector('.hero-carousel .item.other_1');
    if(itemOldOther_1) itemOldOther_1.classList.remove('other_1');

    let itemOldOther_2 = document.querySelector('.hero-carousel .item.other_2');
    if(itemOldOther_2) itemOldOther_2.classList.remove('other_2');

    items.forEach(e => {
        e.querySelector('.image img').style.animation  = 'none';
        e.querySelector('.image figcaption').style.animation  = 'none';
        void e.offsetWidth;
        e.querySelector('.image img').style.animation = '';
        e.querySelector('.image figcaption').style.animation = '';
    })

    items[active].classList.add('active');
    items[other_1].classList.add('other_1');
    items[other_2].classList.add('other_2');

    clearInterval(autoplay);
    autoplay = setInterval(() => {
        next.click();
    }, 5000);
}

let autoplay = setInterval(() => {
    next.click();
}, 5000);










 
  




