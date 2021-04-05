(function ($) {
  $(document).ready(function () {
    $(".js-nav-burger").click(function () {
      $(this).toggleClass("header__coll--clicked");
      $(".header__coll--nav").slideToggle();
      $(".header__coll--nav").toggleClass("header__coll--show");
    });

    $(".js-menu-burger").click(function () {
      $(this).toggleClass("header__coll--clicked");
      $(".header__coll--menu").slideToggle();
      $(".header__coll--menu").toggleClass("header__coll--show");
    });

    //slider
    $(".products-carousel").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
    $(".testimonials-carousel").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      speed: 500,
      fade: true,
      cssEase: "linear",
    });

    //tabs
    $(".js-home-nav").on(
      "click",
      ".home-nav__block:not(.home-nav__block--active)",
      function () {
        $(this)
          .addClass("home-nav__block--active")
          .siblings()
          .removeClass("home-nav__block--active");
        $(".home__tab")
          .removeClass("home__tab--show")
          .eq($(this).index())
          .addClass("home__tab--show");
      }
    );

    //accordion
    $(".js-questions-accordion .questions__ask").click(function () {
      $(".questions__answer").not($(this).next()).slideUp();
      $(this).next().slideToggle();
      $(this).find(".questions__svg").toggleClass("questions__svg--active");
    });

    //anchor links
    function animateScroll(e) {
      let href = $(this).attr("href");

      $("html, body").animate(
        {
          scrollTop: $(href).offset().top,
        },
        {
          duration: 370,
          easing: "linear",
        }
      );
      return false;
    }

    $(".nav__link").on("click", animateScroll);
    $(".section__scroll").on("click", animateScroll);
    $(".logo").on("click", animateScroll);
    $(".footer-logo").on("click", animateScroll);

    let n = document.getElementById("card-count").innerText;
    let p = 0;
    const trash = document.getElementById("card-remove");

    $(".product__btn").click(function ({ target }) {
      addToCard(target);
    });

    $(".card-remove").click(function ({ target }) {
      clearCard(target);
    });

    //cart
    function addToCard(e) {
      p = e.children[1].innerText;
      p++;
      e.children[0].style.display = "none";
      e.children[1].style.display = "inline-block";
      e.children[1].innerHTML = p;

      n++;
      document.getElementById("card-count").innerHTML = n;

      if (n > 0) {
        trash.style.visibility = "visible";
      }
    }

    function clearCard() {
      document.getElementById("card-count").innerHTML = 0;
      p = 0;
      n = 0;
      const bougth = document.getElementsByClassName("product__tirer-bougth");
      const tirer = document.getElementsByClassName("product__tirer");
      for (let b of bougth) {
        b.style.display = "none";
        b.innerHTML = "";
      }
      for (let t of tirer) {
        t.style.display = "inline-block";
      }
      trash.style.visibility = "hidden";
    }

    //modal
    $(".js-login-btn").click(function () {
      $(this).parent().find(".modal").addClass("show");
      $("html, body").addClass("fix");
    });

    $(".modal-close").click(function () {
      $(this).parents(".modal").removeClass("show");
      $("html, body").addClass("removeClass");
    });

    $(document).mouseup(function (e) {
      var container = $(".modal-body");
      eventClass = e.target.className;
      if (!eventClass || !eventClass.includes(".modal-body")) {
        if (container.has(e.target).length === 0) {
          $(".modal").removeClass("show");
        }
      }
    });
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $(".header").addClass("header--scroll").fadeIn("fast");
      $(".login-form").addClass("login-form--scroll");
    } else {
      $(".header").removeClass("header--scroll").fadeIn("fast");
      $(".login-form").removeClass("login-form--scroll");
    }

    let wt = $(window).scrollTop();
    let wh = $(window).height();
    let et = $("#contact").offset().top;
    let eh = $("#contact").outerHeight();
    let dh = $(document).height();
    if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
      $(".section__aside-reverse").addClass("section__aside-reverse--animate");
    } else {
      $(".section__aside-reverse").removeClass(
        "section__aside-reverse--animate"
      );
    }
  });
})(jQuery);
