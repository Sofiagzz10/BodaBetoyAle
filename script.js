const NosCas = document.getElementById('NosCas');
const caroyadri = document.getElementById('caroyadri');
const fecha = document.getElementById('fecha');
const cya = document.getElementById('cya')
const linea = document.getElementById('linea')
const imagen = document.querySelector('.imagen-oculta');
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const cont5 = document.getElementById("cont5");
const rel = document.getElementById("misa");
const even = document.getElementById("evento");
const conf = document.getElementById("sec4");
const lin = document.getElementById('lin1');
const nom = document.getElementById('h11');
const tienes = document.getElementById("tienes");
const conff = document.getElementById("conf");
const input = document.querySelector(".number-input");
const asis =document.getElementById("asis");
const yes = document.querySelector(".yes-no-input");
const boton2 =document.getElementById("boton2");
const foto1 =document.getElementById("imagenconf")
const cod = document.getElementById("cod")
const formal = document.getElementById("formal")
const vest = document.getElementById("vest")
const lvert = document.getElementById("lvert")
const regalos = document.getElementById("reglos")
const regg = document.querySelector(".sobre")
const liv = document.querySelector(".regalos2")
const parr = document.getElementById("ninos")
const nues = document.getElementById("Nues")
const countd = document.querySelector(".countdown")
const foto10 = document.getElementById("foto10")
const foto2 = document.getElementById("foto2")
const foto3 = document.getElementById("foto3")
const foto4 = document.getElementById("foto4")
const footer = document.querySelector(".footer")
const regalos3 = document.querySelector(".regalos3")
const cont66 = document.querySelector('.cont66');


NosCas.style.opacity = '0';
caroyadri.style.opacity = '0';
fecha.style.opacity = '0';
cya.style.opacity = '0';
linea.style.opacity = '0';

function aparecerlogo(){
    cya.style.transition = 'opacity 1s ease-in, transform 1s ease-in';
    cya.style.opacity = '1';
    cya.style.transform = 'translateX(0)'

}
function aparecerlinea(){
    linea.style.transition = 'opacity 1s ease-in, transform 1s ease-in';
    linea.style.opacity = '1';
    linea.style.transform = 'translateX(0)'

}
function aparecerNosCas() {
    NosCas.style.transition = 'opacity 1s ease-in, transform 1s ease-in';
    NosCas.style.opacity = '1';
    NosCas.style.transform = 'translateX(0)';
}
function aparecerCaroyAdri() {
    caroyadri.style.transition = 'opacity 1s ease-in, transform 1s ease-in';
    caroyadri.style.opacity = '1';
    caroyadri.style.transform = 'translateX(0)';
}
function aparecerFecha() {
    fecha.style.transition = 'opacity 1s ease-in, transform 1s ease-in';
    fecha.style.opacity = '1';
    fecha.style.transform = 'translateX(0)';
}

setTimeout(aparecerlogo, 200)
setTimeout(aparecerlinea,500)
setTimeout(aparecerNosCas, 800); // Retraso para la animación de izquierda
setTimeout(aparecerCaroyAdri, 1000); // Retraso para la animación de caroyadri
setTimeout(aparecerFecha, 1200)

/*const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelector('.slide-in');
const appearOptions ={
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(entries,appearOnScroll){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    }
    else{
      entry.target.classList.add('appear')
      appearOnScroll.unobserve(entry.target);
    }
  });
},appearOptions);

faders.forEach(fader =>{
  appearOnScroll.observe(fader);
});

sliders.forEach(slider =>{
  appearOnScroll.observe(slider);
});
*/

const animatedElements = document.querySelectorAll('.animate-on-scroll');
animatedElements.forEach(el => intersectionObserver.observe(el));

const intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      intersectionObserver.unobserve(entry.target); // Deja de observar el elemento después de activar la animación
    }
  });
}, {
  root: null, // El observador observa el viewport por defecto
  rootMargin: "0px", // No se aplica ningún margen al viewport
  threshold: 0.3, // Cuando al menos la mitad del elemento es visible, se activa la animación
});
intersectionObserver.observe(cont66);
// Agrega los elementos al observador
intersectionObserver.observe(div1);
intersectionObserver.observe(div2);
intersectionObserver.observe(rel);
intersectionObserver.observe(even);
intersectionObserver.observe(conf);
intersectionObserver.observe(lin);
intersectionObserver.observe(nom);
intersectionObserver.observe(tienes);
intersectionObserver.observe(conff);
intersectionObserver.observe(input);
intersectionObserver.observe(asis);
intersectionObserver.observe(yes);
intersectionObserver.observe(boton2);
intersectionObserver.observe(foto1)
intersectionObserver.observe(cod);
intersectionObserver.observe(formal);
intersectionObserver.observe(vest);
intersectionObserver.observe(lvert);
intersectionObserver.observe(regalos);
intersectionObserver.observe(regg)
intersectionObserver.observe(liv);
intersectionObserver.observe(regalos3);
intersectionObserver.observe(parr);
intersectionObserver.observe(nues);
intersectionObserver.observe(countd);
intersectionObserver.observe(foto10);
intersectionObserver.observe(foto3);
intersectionObserver.observe(foto2);
intersectionObserver.observe(foto4);
intersectionObserver.observe(footer);



//boton de menos y mas 

const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const quantityInput = document.getElementById('quantity');

decrementButton.addEventListener('click', () => {
  const currentValue = parseInt(quantityInput.value);
  if (currentValue > 0) {
    quantityInput.value = currentValue - 1;
  }
});

incrementButton.addEventListener('click', () => {
  const currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
});

const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const choiceInput = document.getElementById("choice");

yesButton.addEventListener("click", () => {
  yesButton.classList.add("active");
  noButton.classList.remove("active");
  choiceInput.value = "yes";
});

noButton.addEventListener("click", () => {
  noButton.classList.add("active");
  yesButton.classList.remove("active");
  choiceInput.value = "no";
});

// Establece la fecha de destino (puede ser una fecha futura)
const countdownDate = new Date('2024-10-04T19:00:00').getTime();

// Actualiza el contador cada segundo
const countdown = setInterval(function() {
const now = new Date().getTime();
const distance = countdownDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById('days').innerText = days < 10 ? '0' + days : days;
document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;

if (distance <= 0) {
  clearInterval(countdown); // Detiene el contador cuando llega a cero
  document.getElementById('days').innerText = '00';
  document.getElementById('hours').innerText = '00';
  document.getElementById('minutes').innerText = '00';
  document.getElementById('seconds').innerText = '00';
}
}, 1000);
