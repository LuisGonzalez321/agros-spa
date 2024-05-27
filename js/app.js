import { gsap } from "gsap";

// Asegúrate de que GSAP y ScrollTrigger están cargados
gsap.registerPlugin(ScrollTrigger);

// Selecciona el contenedor de la imagen
let imageContainer = document.querySelector('.image-container');
let container = document.querySelector('.container');
