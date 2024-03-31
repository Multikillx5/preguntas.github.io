const pregunta = document.getElementById("pregunta");
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const stePregunta = document.getElementById("ste-pregunta");
const music = document.getElementById("music");
const correct = document.getElementById("correct");
const incorrect = document.getElementById("incorrect");

music.play();

let contadorVictorias = 0;

const pregunta1 = [
    {
    pregunta: "¿Cuál es el principal componente del aire que respiramos?",
    res1: "El argón",
    res2: "El dióxido de carbono",
    res3: "El oxígeno",
    res4: "El hidrógeno",
    id: 4
}
]


pregunta.textContent = pregunta1[0].pregunta;
boton1.textContent = pregunta1[0].res1;
boton2.textContent = pregunta1[0].res2;
boton3.textContent = pregunta1[0].res3;
boton4.textContent = pregunta1[0].res4;

/* 
function asignar(pregunta1) {
    const numeros = [1, 2, 3, 4];
    let numerosColocados = []

    for (let i = 0; i < 4; i++) {
        let random = Math.floor(Math.random() * 3) + 1
        boton1.value = random;
        let comprobar = true
        
        do{

            let random = Math.floor(Math.random() * 3) + 1

        } while(boton1.value !== random)
    }
}


asignar()

 */





//RESPUESTA CORRECTA

res3.addEventListener("click", function(){
    
    if (preguntas[0].id === parseInt(res3.value)) {

        res3.style.backgroundColor = "green";
        res2.style.backgroundColor = "red";
        res1.style.backgroundColor = "red";
        res4.style.backgroundColor = "red";

        stePregunta.style.display = "block";
        correct.play();

    } else {
        res1.style.backgroundColor = "red";
        res2.style.backgroundColor = "red";
        res4.style.backgroundColor = "red"; 

        stePregunta.style.display = "block";
        incorrect.play();
    }
});

// RESPUESTAS INCORRECTAS

res1.addEventListener("click", function(){

    if (preguntas[0].id === parseInt(res1.value)) {
        res3.style.backgroundColor = "green";
        res2.style.backgroundColor = "red";
        res1.style.backgroundColor = "red";
        res4.style.backgroundColor = "red";

        stePregunta.style.display = "block";
        correct.play();
    } else {
        res1.style.backgroundColor = "red";
        res2.style.backgroundColor = "red";
        res3.style.backgroundColor = "green";
        res4.style.backgroundColor = "red";

        stePregunta.style.display = "block";
        incorrect.play();
    }
});

res2.addEventListener("click", function(){

    if (preguntas[0].id === parseInt(res2.value)) {
        res3.style.backgroundColor = "red";
        res2.style.backgroundColor = "green";
        res1.style.backgroundColor = "red";
        res4.style.backgroundColor = "red";

        stePregunta.style.display = "block";
        correct.play();
    } else {
        res1.style.backgroundColor = "red";
        res2.style.backgroundColor = "red";
        res3.style.backgroundColor = "green";
        res4.style.backgroundColor = "red";

        stePregunta.style.display = "block";
        incorrect.play();
    }
});

res4.addEventListener("click", function(){

    if (preguntas[0].id === parseInt(res4.value)) {
        res3.style.backgroundColor = "red";
        res2.style.backgroundColor = "red";
        res1.style.backgroundColor = "red";
        res4.style.backgroundColor = "green";

        stePregunta.style.display = "block";
        correct.play();
    } else {
        res1.style.backgroundColor = "red";
        res2.style.backgroundColor = "red";
        res3.style.backgroundColor = "green";
        res4.style.backgroundColor = "red";

        stePregunta.style.display = "block";
        incorrect.play();
    }
});

//BOTON SIGUIENTE PREGUNTA

stePregunta.addEventListener("click", function(){
    stePregunta.style.display = "none";
    res1.style.backgroundColor = "#1d2770";
    res2.style.backgroundColor = "#1d2770";
    res3.style.backgroundColor = "#1d2770";
    res4.style.backgroundColor = "#1d2770";
})