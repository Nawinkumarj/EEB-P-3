(function ($) {
  ("use strict");

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner(0);

  // Fixed Navbar
  $(window).scroll(function () {
    if ($(window).width() < 992) {
      if ($(this).scrollTop() > 55) {
        $(".fixed-top").addClass("shadow");
      } else {
        $(".fixed-top").removeClass("shadow");
      }
    } else {
      if ($(this).scrollTop() > 55) {
        $(".fixed-top").addClass("shadow").css("top", -55);
      } else {
        $(".fixed-top").removeClass("shadow").css("top", 0);
      }
    }
  });
 


  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Testimonial carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 2000,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  });

  // vegetable carousel
  $(".vegetable-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  //accrodion
  if ($(".alefox-accrodion").length) {
    var accrodionGrp = $(".alefox-accrodion");
    accrodionGrp.each(function () {
      var accrodionName = $(this).data("grp-name");
      var Self = $(this);
      var accordion = Self.find(".accrodion");
      Self.addClass(accrodionName);
      Self.find(".accrodion .accrodion-content").hide();
      Self.find(".accrodion.active").find(".accrodion-content").show();
      accordion.each(function () {
        $(this)
          .find(".accrodion-title")
          .on("click", function () {
            if ($(this).parent().hasClass("active") === false) {
              $(".alefox-accrodion." + accrodionName)
                .find(".accrodion")
                .removeClass("active");
              $(".alefox-accrodion." + accrodionName)
                .find(".accrodion")
                .find(".accrodion-content")
                .slideUp();
              $(this).parent().addClass("active");
              $(this).parent().find(".accrodion-content").slideDown();
            }
          });
      });
    });
  }
   $(function () {
     $(".dial").knob();
   });
  // Modal Video
  $(document).ready(function () {
    var $videoSrc;
    $(".btn-play").click(function () {
      $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);

    $("#videoModal").on("shown.bs.modal", function (e) {
      $("#video").attr(
        "src",
        $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
      );
    });

    $("#videoModal").on("hide.bs.modal", function (e) {
      $("#video").attr("src", $videoSrc);
    });
  });

  // Product Quantity
  $(".quantity button").on("click", function () {
    var button = $(this);
    var oldValue = button.parent().parent().find("input").val();
    if (button.hasClass("btn-plus")) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    button.parent().parent().find("input").val(newVal);
  });

  // ChatBot
  $(".chatBtn").click(function () {
    $(".chatContainer").fadeIn();
    $(".chatBtn").fadeOut();
  });

  $(".closeBtn").click(function () {
    $(".chatContainer").fadeOut();
    $(".chatBtn").fadeIn();
  });

  function appendMessage(sender, text) {
    let messageDiv = `<div class='message ${sender}'><p>${text}</p></div>`;
    $(".chatBox").append(messageDiv);
    $(".chatBox").scrollTop($(".chatBox")[0].scrollHeight);
  }

  function botResponse(message) {
    const response = {
      hi: "Hello! How can I assist you?",
      hello: "Hi there! What can I do for you?",
      "how are you": "I'm just a bot, but I'm doing great! How about you?",
      bye: "Goodbye! Have a great day!",
      thanks: "You're welcome!",
    };

    let lowerCaseMessage = message.toLowerCase();
    let reply =
      response[lowerCaseMessage] || "I'm not sure how to respond to that.";

    setTimeout(() => {
      appendMessage("bot", reply);
    }, 500);
  }

  function sendMessage() {
    let message = $("#userInput").val().trim();
    if (message === "") return;

    appendMessage("user", message);
    $("#userInput").val("");

    botResponse(message);
  }

  $("#sendBtn").click(sendMessage);

  $("#userInput").keypress(function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  // Prodcut Categories
  let fruits = [
    { name: "Grapes", category: "Fruits", price: 4.99, type: "Fresh" },
    { name: "Apples", category: "Fruits", price: 3.99, type: "Organic" },
    { name: "Oranges", category: "Fruits", price: 2.99, type: "Sales" },
    { name: "Strawberries", category: "Fruits", price: 5.99, type: "Discount" },
    { name: "Bananas", category: "Fruits", price: 1.99, type: "Expired" },
    { name: "Bananas", category: "Fruits", price: 1.99, type: "Expired" },
    { name: "Bananas", category: "Fruits", price: 1.99, type: "Expired" },
];

function renderFruits(filteredFruits) {
    let container = $(".productPage");
    container.empty();
    
    filteredFruits.forEach(fruit => {
        container.append(`
            <div class="col-md-6 col-lg-6 col-xl-4">
                <div class="rounded position-relative fruite-item">
                    <div class="fruite-img">
                        <img src="img/fruite-item-5.jpg" class="img-fluid w-100 rounded-top" alt="">
                    </div>
                    <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">${fruit.category}</div>
                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                        <h4>${fruit.name}</h4>
                        <p>Fresh and organic ${fruit.name}</p>
                        <div class="d-flex justify-content-between flex-lg-wrap">
                            <p class="text-dark fs-5 fw-bold mb-0">$${fruit.price} / kg</p>
                            <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        `);
    });
}
// form validation/

$(document).ready(function () {
  // Initialize the form validation
  $("#contact-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
        email: true,
      },
      address: {
        required: true,
        minlength: 5,
      },
      phone: {
        required: true,
        minlength: 10,
        digits: true,
      },
      service: {
        required: true,
      },
    },
    messages: {
      name: {
        required: "*Please enter your name",
        minlength: "*Your name must be at least 3 characters long",
      },
      email: {
        required: "*Please enter your email",
        email: "*Please enter a valid email address",
      },
      address: {
        required: "*Please enter your address",
        minlength: "*Your address must be at least 5 characters long",
      },
      phone: {
        required: "*Please enter your phone number",
        minlength: "*Your phone number must be at least 10 digits long",
        digits: "*Please enter a valid phone number",
      },
      service: {
        required: "*Please select a service",
      },
    },
    errorPlacement: function (error, element) {
      var label = element
        .closest(".form-one__control")
        .find("label.error-label");
      label.text(error.text()); 
      label.addClass("error-label");
      element.addClass("error");
    },
    success: function (label, element) {
      // When valid, remove error label and highlight the input as valid
      label.text("");
      label.removeClass("error-label");
      $(element).removeClass("error");
    },
    errorClass: "error-message", 
    validClass: "valid-field",
    submitHandler: function (form) {
      // Handle form submission, can be customized as needed
      form.submit();
    },
  });
});

  
  
$("#search-icon-1").click(function () {
    let keyword = $(".form-control").val().toLowerCase();
    let filtered = fruits.filter(f => f.name.toLowerCase().includes(keyword));
    renderFruits(filtered);
});

$("#fruits").change(function () {
    let value = $(this).val();
    let sortedFruits = [...fruits];
    if (value === "saab") sortedFruits.sort((a, b) => a.name.localeCompare(b.name));
    else if (value === "opel") sortedFruits = sortedFruits.filter(f => f.type === "Organic");
    else if (value === "audi") sortedFruits = sortedFruits.filter(f => f.type === "Fantastic");
    renderFruits(sortedFruits);
});

$("input[name='Categories-1']").change(function () {
    let value = $("input[name='Categories-1']:checked").next("label").text().trim();
    let filtered = fruits.filter(f => f.type === value);
    renderFruits(filtered);
});

$(".pagination a").click(function (e) {
    e.preventDefault();
    $(".pagination a").removeClass("active");
    $(this).addClass("active");
    let page = $(this).text();
    console.log("Fetching page: ", page);
});

renderFruits(fruits);

  // Tilt Animation for Cards
  $(".featurs-item").on("mousemove", function (e) {
    const item = $(this)[0];
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 3;
    const centerY = rect.height / 3;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((centerX - x) / centerX) * 10;

    item.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  $(".featurs-item").on("mouseleave", function () {
    $(this).css("transform", "rotateX(0deg) rotateY(0deg)");
  });

  
})(jQuery);

