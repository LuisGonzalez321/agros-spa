import { gsap } from "gsap";

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

document.querySelectorAll('.fade').forEach((element, index) => {
  fadeIn(element, index * 0.5);
});

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


///////////////////////////////////////////
// Animacion para los movimientos de izquierda a derecha
///////////////////////////////////////////
// Animación de desplazamiento para la sección de imagen

gsap.fromTo('.img-agros', {
  x: -100,
  opacity: 0
}, {
  x: 0,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: '.img-agros',
    start: 'top 80%',
    toggleActions: 'play none none none'
  }
});

// Animación de desplazamiento para la sección de texto de derecha a izquierda
gsap.fromTo('.text-agros', {
  x: 100,
  opacity: 0
}, {
  x: 0,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: '.text-agros',
    start: 'top 80%',
    toggleActions: 'play none none none'
  }
});
