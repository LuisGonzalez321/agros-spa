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

const scrollContainer = document.querySelector('.scroll');

/* Add the  html tags to s*/
// <div className="image-container w-[600%] h-full absolute top-0 left-0 ">
//   <img className="h-full " id="img-horizontal" src="./assets/img/FondoHorizontal.jpg" alt="Horizontal Image"/>
// </div>



gsap.to("#img-horizontal", {
  x: () => -(document.querySelector("#img-horizontal").scrollWidth - window.innerWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: ".scroll",
    // start: "top",
    // end: "bottom",
    scrub: true,
    pin: true,
  }
});


// Animacion para tooltip
const generateTooltip = (classNameDiv, classNameButton) => {
  $(document).ready(function () {
    const $button = $(classNameButton);
    const $tooltip = $(classNameDiv);

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
