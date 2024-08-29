let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: black;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#e70646;">Soy estudiante de Front-end en el curso de Tecnolochicapro</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
