document.addEventListener('DOMContentLoaded', function() {
  tippy('[data-tooltip]', {
    content(reference) {
      return reference.getAttribute('data-tooltip');
    },
    allowHTML: true,
    theme: 'tomato'
  });
});


gsap.registerPlugin(ScrollTrigger);

const spans = document.querySelectorAll('.reveal span');

spans.forEach((span, index) => {
  gsap.fromTo(span,
    {
      x: 100,
      opacity: 0
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      delay: index * 0.5,
      scrollTrigger: {
        trigger: span,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
});


// Animacion de Fade In
const fadeIn = (element, delay = 0, duration = 1) => {
  gsap.fromTo(element,
    {
      opacity: 0
    },
    {
      opacity: 1,
      duration: duration,
      delay: delay,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    }
  );
}

document.querySelectorAll('.fade')
  .forEach((element, index) => fadeIn(element, index * 0.5));

///////////////////////////////////////////
// Animacion de text reveal para parrafos
///////////////////////////////////////////
function createScrollAnimation(windowSelector, lineSelector, revealSelector) {
  let $window = $(windowSelector);
  let $p = $(revealSelector);
  let $lines, threshold;

  function handler() {
    const scrollTop = $window.scrollTop() + threshold;
    $lines?.each(function () {
      if ($(this).offset().top < scrollTop) $(this).addClass("visible");
      else $(this).removeClass("visible");
    });
  }

  function reline() {
    $lines = $(lineSelector);
    handler();
  }

  const thresholder = () => threshold = ($window.height() * 5) / 6;

  $p.on("afterlining", reline);
  $window.scroll(handler);
  $window.resize(thresholder);

  thresholder();
}

// Uso de la función
createScrollAnimation(window, '.line', '.p-reveal');
createScrollAnimation(window, '.line', '.p-reveal-beige');
///////////////////////////////////////////
// Animacion para popup de imagenes ///////
///////////////////////////////////////////
$(document).ready(function() {
  const $popup = $('#popup');
  const $openPopupButton = $('#open-popup');
  const $closePopupButton = $('#close-popup, #close-popup-button');

  $openPopupButton.on('click', function() {
    $popup.removeClass('hidden');
    gsap.to($popup, { duration: 0.3, opacity: 1 });
  });

  $closePopupButton.on('click', function() {
    gsap.to($popup, { duration: 0.3, opacity: 0, onComplete: function() {
        $popup.addClass('hidden');
      }});
  });
});


///////////////////////////////////////////
// Animacion para los movimientos de izquierda a derecha
///////////////////////////////////////////
// Animación de desplazamiento para la sección de imagen

const moveElement = (orientation, className) => {
  gsap.fromTo(className, {
    x: orientation,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: className,
      start: 'top 70%',
      toggleActions: 'play none none none'
    }
  });
};

moveElement(-100, '.img-agros');
moveElement(100, '.text-agros');
moveElement(-100, '.img-agros-footer');
moveElement(100, '.text-agros-footer');

//Animación de desplazamiento scroll horizontal para la sección de imagen

let sections = gsap.utils.toArray(".scroll .panel");

let totalWidth = sections.reduce((total, section) => total + section.offsetWidth, 0);

let scrollTween = gsap.to(sections, {
  x: () => -(sections.reduce((total, section) => total + section.offsetWidth, 0) - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: ".scroll",
    start: "top top",
    end: () => `+=${totalWidth - window.innerWidth}`,
    pin: true,
    scrub: 2,
  }
});




//realiza animacion que muestre un efecto de fadeIn cuando se hace scroll con esta clase 'fade-scroll'
const fadeScroll = (className, opacity = 0, duration = 1) => {
  gsap.fromTo(className, {
    opacity: opacity
  }, {
    opacity: 1,
    duration: duration,
    scrollTrigger: {
      trigger: className,
      containerAnimation: scrollTween,
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  });
}

fadeScroll('.fade-scroll');
fadeScroll('.fade-scroll-2');
fadeScroll('.fade-scroll-3');
fadeScroll('.fade-scroll-4');
fadeScroll('.fade-scroll-5');



// Animacion para tooltip
const generateTooltip = (classNameDiv, classNameButton) => {
  $(document).ready(function () {
    const $button = $(classNameButton);
    const $tooltip = $(classNameDiv);
    $tooltip.css('opacity', 0);

    $button.on('mouseenter', function (event) {
      gsap.to($tooltip, {
        duration: 0.3,
        autoAlpha: 1,
        display: 'block'
      });
    });

    $button.on('mouseleave', function () {
      gsap.to($tooltip, {
        duration: 0.3,
        autoAlpha: 0,
      });
    });
  });
}
generateTooltip('#tooltip', '#tooltip-button');
generateTooltip('#tooltip-2', '#tooltip-button-2');
generateTooltip('#tooltip-3', '#tooltip-button-3');


//tooltip for scroll




// Animacion para el boton de scroll
//efecto de que al hacer scroll se muestre el texto de abajo hacia arriba
const scrollButton = document.querySelector('.scroll-button');
gsap.fromTo(scrollButton, {
  y: 100,
  opacity: 0
}, {
  y: 0,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: scrollButton,
    start: 'top 80%',
    toggleActions: 'play none none none'
  }
});
