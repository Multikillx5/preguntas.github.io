const pregunta = document.getElementById("pregunta");
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const music = document.getElementById("music");
const queen = document.getElementById("queen");
const correct = document.getElementById("correct");
const incorrect = document.getElementById("incorrect");
const victorias = document.getElementById("numero-victorias");
const botones = document.getElementsByTagName("button");

// PUNTAJE Y PROMEDIO FINAL

const divFinal = document.getElementById("div-final");
const promedio = document.getElementById("contenedor-promedio");
const imgPromedio = document.getElementById("img-promedio");
const imagenFinal = document.getElementById("imagen-final");
const porcentaje = document.getElementById("porcentaje");
const correctas = document.getElementById("correctas");
const incorrectas = document.getElementById("incorrectas");
const lista = document.getElementById("lista");
const FRASE = document.getElementById("frase");
const BTN_REINICIO = document.getElementById("btn-reinicio");

let nivel = 1;
let contadorCorrectas = 0;
let contadorIncorrectas = 0;
let promedioFinal = 0;

// SECCION OBJETOS

const preguntas = {
    pregunta1:{
        pregunta:"¿Cuál es el principal componente del aire que respiramos?",
        correcta: "El hidrógeno",
        incorrecta1: "El argón",
        incorrecta2: "El dióxido de carbono",
        incorrecta3: "El oxígeno"
    },
    pregunta2:{
        pregunta:"¿Cuál es la capital de Brasil?",
        correcta: "Brasilia",
        incorrecta1: "Río de Janeiro",
        incorrecta2: "Sao Paulo",
        incorrecta3: "Itapema"
    },
    pregunta3:{
        pregunta:"¿Cuál es el planeta más grande del sistema solar?",
        correcta: "Júpiter",
        incorrecta1: "Marte",
        incorrecta2: "Mercurio",
        incorrecta3: "Saturno"
    },
    pregunta4:{
        pregunta:"¿Quién escribió la obra literaria Don Quijote de la Mancha?",
        correcta: "Miguel de Cervantes",
        incorrecta1: "William Shakespeare",
        incorrecta2: "Gabriel García Márquez",
        incorrecta3: "Jorge Luis Borges"
    },
    pregunta5:{
        pregunta:"¿Cuál es el río más largo del mundo?",
        correcta: "El río Amazonas",
        incorrecta1: "El río Nilo",
        incorrecta2: "El río Mississippi",
        incorrecta3: "El río Yangtsé"
    },
    pregunta6:{
        pregunta:"¿Cuál es el símbolo químico del agua?",
        correcta: "H2O",
        incorrecta1: "Ag",
        incorrecta2: "O2",
        incorrecta3: "HCl"
    },
    pregunta7:{
        pregunta:"¿Cuál es la montaña más alta del mundo?",
        correcta: "El Monte Everest",
        incorrecta1: "El Monte Kilimanjaro",
        incorrecta2: "El Monte McKinley",
        incorrecta3: "El Monte Blanc"
    },
    pregunta8:{
        pregunta:"¿Cuál es la capital de Italia?",
        correcta: "Roma",
        incorrecta1: "Madrid",
        incorrecta2: "París",
        incorrecta3: "Berlín"
    },
    pregunta9:{
        pregunta:"¿Qué científico desarrolló la teoría de la relatividad?",
        correcta: "Albert Einstein",
        incorrecta1: "Isaac Newton",
        incorrecta2: "Galileo Galilei",
        incorrecta3: "Charles Darwin"
    },
    preguntaFinal:{
        pregunta:"¿Cuál es el elemento más abundante en la corteza terrestre?",
        correcta: "Oxígeno",
        incorrecta1: "Carbono",
        incorrecta2: "Hierro",
        incorrecta3: "Oro"
    },
};

// FIN SECCION OBJETOS

//SECCION FUNCIONES

function asignarValoresRandom(){

    const numeros = [1, 2, 3];
    let numeroRandom = Math.round(Math.random() * numeros.length) + 1;
    boton1.value = numeroRandom;

    do{

        numeroRandom = Math.round(Math.random() * numeros.length) + 1;
        boton2.value = numeroRandom;

    } while (boton1.value === boton2.value)

    do{

        numeroRandom = Math.round(Math.random() * numeros.length) + 1;
        boton3.value = numeroRandom;

    } while (boton1.value === boton3.value || boton2.value === boton3.value)

    do{

        numeroRandom = Math.round(Math.random() * numeros.length) + 1;
        boton4.value = numeroRandom;

    } while (boton1.value === boton4.value || boton2.value === boton4.value || boton3.value === boton4.value)
}

function asignarRespuestas(idBoton, valorBoton){
    let valorBotonEntero = parseInt(valorBoton);
    switch (idBoton){
        case "boton1":
            switch (valorBotonEntero){
                case 1:
                    switch (nivel){
                        case 1:
                        boton1.textContent = preguntas.pregunta1.incorrecta1;
                        break;
                        case 2:
                        boton1.textContent = preguntas.pregunta2.incorrecta1;
                        break;
                        case 3:
                        boton1.textContent = preguntas.pregunta3.incorrecta1;
                        break;
                        case 4:
                        boton1.textContent = preguntas.pregunta4.incorrecta1;
                        break;
                        case 5:
                        boton1.textContent = preguntas.pregunta5.incorrecta1;
                        break;
                        case 6:
                        boton1.textContent = preguntas.pregunta6.incorrecta1;
                        break;
                        case 7:
                        boton1.textContent = preguntas.pregunta7.incorrecta1;
                        break;
                        case 8:
                        boton1.textContent = preguntas.pregunta8.incorrecta1;
                        break;
                        case 9:
                        boton1.textContent = preguntas.pregunta9.incorrecta1;
                        break;
                        case 10:
                        boton1.textContent = preguntas.preguntaFinal.incorrecta1;
                        break;
                    }
                break;
                case 2:
                    switch (nivel){
                        case 1:
                        boton1.textContent = preguntas.pregunta1.incorrecta2;
                        break;
                        case 2:
                        boton1.textContent = preguntas.pregunta2.incorrecta2;
                        break;
                        case 3:
                        boton1.textContent = preguntas.pregunta3.incorrecta2;
                        break;
                        case 4:
                        boton1.textContent = preguntas.pregunta4.incorrecta2;
                        break;
                        case 5:
                        boton1.textContent = preguntas.pregunta5.incorrecta2;
                        break;
                        case 6:
                        boton1.textContent = preguntas.pregunta6.incorrecta2;
                        break;
                        case 7:
                        boton1.textContent = preguntas.pregunta7.incorrecta2;
                        break;
                        case 8:
                        boton1.textContent = preguntas.pregunta8.incorrecta2;
                        break;
                        case 9:
                        boton1.textContent = preguntas.pregunta9.incorrecta2;
                        break;
                        case 10:
                        boton1.textContent = preguntas.preguntaFinal.incorrecta2;
                        break;
                    }
                break;
                case 3:
                    switch (nivel){
                        case 1:
                        boton1.textContent = preguntas.pregunta1.incorrecta3;
                        break;
                        case 2:
                        boton1.textContent = preguntas.pregunta2.incorrecta3;
                        break;
                        case 3:
                        boton1.textContent = preguntas.pregunta3.incorrecta3;
                        break;
                        case 4:
                        boton1.textContent = preguntas.pregunta4.incorrecta3;
                        break;
                        case 5:
                        boton1.textContent = preguntas.pregunta5.incorrecta3;
                        break;
                        case 6:
                        boton1.textContent = preguntas.pregunta6.incorrecta3;
                        break;
                        case 7:
                        boton1.textContent = preguntas.pregunta7.incorrecta3;
                        break;
                        case 8:
                        boton1.textContent = preguntas.pregunta8.incorrecta3;
                        break;
                        case 9:
                        boton1.textContent = preguntas.pregunta9.incorrecta3;
                        break;
                        case 10:
                        boton1.textContent = preguntas.preguntaFinal.incorrecta3;
                        break;
                    }
                break;
                case 4:
                    switch (nivel){
                        case 1:
                        boton1.textContent = preguntas.pregunta1.correcta;
                        break;
                        case 2:
                        boton1.textContent = preguntas.pregunta2.correcta;
                        break;
                        case 3:
                        boton1.textContent = preguntas.pregunta3.correcta;
                        break;
                        case 4:
                        boton1.textContent = preguntas.pregunta4.correcta;
                        break;
                        case 5:
                        boton1.textContent = preguntas.pregunta5.correcta;
                        break;
                        case 6:
                        boton1.textContent = preguntas.pregunta6.correcta;
                        break;
                        case 7:
                        boton1.textContent = preguntas.pregunta7.correcta;
                        break;
                        case 8:
                        boton1.textContent = preguntas.pregunta8.correcta;
                        break;
                        case 9:
                        boton1.textContent = preguntas.pregunta9.correcta;
                        break;
                        case 10:
                        boton1.textContent = preguntas.preguntaFinal.correcta;
                        break;
                    }
                break
            }
            break
        case "boton2":
            switch (valorBotonEntero){
                case 1:
                    switch (nivel){
                        case 1:
                        boton2.textContent = preguntas.pregunta1.incorrecta1;
                        break;
                        case 2:
                        boton2.textContent = preguntas.pregunta2.incorrecta1;
                        break;
                        case 3:
                        boton2.textContent = preguntas.pregunta3.incorrecta1;
                        break;
                        case 4:
                        boton2.textContent = preguntas.pregunta4.incorrecta1;
                        break;
                        case 5:
                        boton2.textContent = preguntas.pregunta5.incorrecta1;
                        break;
                        case 6:
                        boton2.textContent = preguntas.pregunta6.incorrecta1;
                        break;
                        case 7:
                        boton2.textContent = preguntas.pregunta7.incorrecta1;
                        break;
                        case 8:
                        boton2.textContent = preguntas.pregunta8.incorrecta1;
                        break;
                        case 9:
                        boton2.textContent = preguntas.pregunta9.incorrecta1;
                        break;
                        case 10:
                        boton2.textContent = preguntas.preguntaFinal.incorrecta1;
                        break;
                    }
                break
                case 2:
                    switch (nivel){
                        case 1:
                        boton2.textContent = preguntas.pregunta1.incorrecta2;
                        break;
                        case 2:
                        boton2.textContent = preguntas.pregunta2.incorrecta2;
                        break;
                        case 3:
                        boton2.textContent = preguntas.pregunta3.incorrecta2;
                        break;
                        case 4:
                        boton2.textContent = preguntas.pregunta4.incorrecta2;
                        break;
                        case 5:
                        boton2.textContent = preguntas.pregunta5.incorrecta2;
                        break;
                        case 6:
                        boton2.textContent = preguntas.pregunta6.incorrecta2;
                        break;
                        case 7:
                        boton2.textContent = preguntas.pregunta7.incorrecta2;
                        break;
                        case 8:
                        boton2.textContent = preguntas.pregunta8.incorrecta2;
                        break;
                        case 9:
                        boton2.textContent = preguntas.pregunta9.incorrecta2;
                        break;
                        case 10:
                        boton2.textContent = preguntas.preguntaFinal.incorrecta2;
                        break;
                    }
                break;
                case 3:
                    switch (nivel){
                        case 1:
                        boton2.textContent = preguntas.pregunta1.incorrecta3;
                        break;
                        case 2:
                        boton2.textContent = preguntas.pregunta2.incorrecta3;
                        break;
                        case 3:
                        boton2.textContent = preguntas.pregunta3.incorrecta3;
                        break;
                        case 4:
                        boton2.textContent = preguntas.pregunta4.incorrecta3;
                        break;
                        case 5:
                        boton2.textContent = preguntas.pregunta5.incorrecta3;
                        break;
                        case 6:
                        boton2.textContent = preguntas.pregunta6.incorrecta3;
                        break;
                        case 7:
                        boton2.textContent = preguntas.pregunta7.incorrecta3;
                        break;
                        case 8:
                        boton2.textContent = preguntas.pregunta8.incorrecta3;
                        break;
                        case 9:
                        boton2.textContent = preguntas.pregunta9.incorrecta3;
                        break;
                        case 10:
                        boton2.textContent = preguntas.preguntaFinal.incorrecta3;
                        break;
                    }
                break;
                case 4:
                    switch (nivel){
                        case 1:
                        boton2.textContent = preguntas.pregunta1.correcta;
                        break;
                        case 2:
                        boton2.textContent = preguntas.pregunta2.correcta;
                        break;
                        case 3:
                        boton2.textContent = preguntas.pregunta3.correcta;
                        break;
                        case 4:
                        boton2.textContent = preguntas.pregunta4.correcta;
                        break;
                        case 5:
                        boton2.textContent = preguntas.pregunta5.correcta;
                        break;
                        case 6:
                        boton2.textContent = preguntas.pregunta6.correcta;
                        break;
                        case 7:
                        boton2.textContent = preguntas.pregunta7.correcta;
                        break;
                        case 8:
                        boton2.textContent = preguntas.pregunta8.correcta;
                        break;
                        case 9:
                        boton2.textContent = preguntas.pregunta9.correcta;
                        break;
                        case 10:
                        boton2.textContent = preguntas.preguntaFinal.correcta;
                        break;
                    }
                break
            }
        break;       
        case "boton3":
            switch (valorBotonEntero){
                case 1:
                    switch (nivel){
                        case 1:
                        boton3.textContent = preguntas.pregunta1.incorrecta1;
                        break;
                        case 2:
                        boton3.textContent = preguntas.pregunta2.incorrecta1;
                        break;
                        case 3:
                        boton3.textContent = preguntas.pregunta3.incorrecta1;
                        break;
                        case 4:
                        boton3.textContent = preguntas.pregunta4.incorrecta1;
                        break;
                        case 5:
                        boton3.textContent = preguntas.pregunta5.incorrecta1;
                        break;
                        case 6:
                        boton3.textContent = preguntas.pregunta6.incorrecta1;
                        break;
                        case 7:
                        boton3.textContent = preguntas.pregunta7.incorrecta1;
                        break;
                        case 8:
                        boton3.textContent = preguntas.pregunta8.incorrecta1;
                        break;
                        case 9:
                        boton3.textContent = preguntas.pregunta9.incorrecta1;
                        break;
                        case 10:
                        boton3.textContent = preguntas.preguntaFinal.incorrecta1;
                        break;
                    }
                break
                case 2:
                    switch (nivel){
                        case 1:
                        boton3.textContent = preguntas.pregunta1.incorrecta2;
                        break;
                        case 2:
                        boton3.textContent = preguntas.pregunta2.incorrecta2;
                        break;
                        case 3:
                        boton3.textContent = preguntas.pregunta3.incorrecta2;
                        break;
                        case 4:
                        boton3.textContent = preguntas.pregunta4.incorrecta2;
                        break;
                        case 5:
                        boton3.textContent = preguntas.pregunta5.incorrecta2;
                        break;
                        case 6:
                        boton3.textContent = preguntas.pregunta6.incorrecta2;
                        break;
                        case 7:
                        boton3.textContent = preguntas.pregunta7.incorrecta2;
                        break;
                        case 8:
                        boton3.textContent = preguntas.pregunta8.incorrecta2;
                        break;
                        case 9:
                        boton3.textContent = preguntas.pregunta9.incorrecta2;
                        break;
                        case 10:
                        boton3.textContent = preguntas.preguntaFinal.incorrecta2;
                        break;
                    }
                break;
                case 3:
                    switch (nivel){
                        case 1:
                        boton3.textContent = preguntas.pregunta1.incorrecta3;
                        break;
                        case 2:
                        boton3.textContent = preguntas.pregunta2.incorrecta3;
                        break;
                        case 3:
                        boton3.textContent = preguntas.pregunta3.incorrecta3;
                        break;
                        case 4:
                        boton3.textContent = preguntas.pregunta4.incorrecta3;
                        break;
                        case 5:
                        boton3.textContent = preguntas.pregunta5.incorrecta3;
                        break;
                        case 6:
                        boton3.textContent = preguntas.pregunta6.incorrecta3;
                        break;
                        case 7:
                        boton3.textContent = preguntas.pregunta7.incorrecta3;
                        break;
                        case 8:
                        boton3.textContent = preguntas.pregunta8.incorrecta3;
                        break;
                        case 9:
                        boton3.textContent = preguntas.pregunta9.incorrecta3;
                        break;
                        case 10:
                        boton3.textContent = preguntas.preguntaFinal.incorrecta3;
                        break;
                    }
                break;
                case 4:
                    switch (nivel){
                        case 1:
                        boton3.textContent = preguntas.pregunta1.correcta;
                        break;
                        case 2:
                        boton3.textContent = preguntas.pregunta2.correcta;
                        break;
                        case 3:
                        boton3.textContent = preguntas.pregunta3.correcta;
                        break;
                        case 4:
                        boton3.textContent = preguntas.pregunta4.correcta;
                        break;
                        case 5:
                        boton3.textContent = preguntas.pregunta5.correcta;
                        break;
                        case 6:
                        boton3.textContent = preguntas.pregunta6.correcta;
                        break;
                        case 7:
                        boton3.textContent = preguntas.pregunta7.correcta;
                        break;
                        case 8:
                        boton3.textContent = preguntas.pregunta8.correcta;
                        break;
                        case 9:
                        boton3.textContent = preguntas.pregunta9.correcta;
                        break;
                        case 10:
                        boton3.textContent = preguntas.preguntaFinal.correcta;
                        break;
                    }
                break;
            }
        break;       
        case "boton4":
            switch (valorBotonEntero){
                case 1:
                    switch (nivel){
                        case 1:
                        boton4.textContent = preguntas.pregunta1.incorrecta1;
                        break;
                        case 2:
                        boton4.textContent = preguntas.pregunta2.incorrecta1;
                        break;
                        case 3:
                        boton4.textContent = preguntas.pregunta3.incorrecta1;
                        break;
                        case 4:
                        boton4.textContent = preguntas.pregunta4.incorrecta1;
                        break;
                        case 5:
                        boton4.textContent = preguntas.pregunta5.incorrecta1;
                        break;
                        case 6:
                        boton4.textContent = preguntas.pregunta6.incorrecta1;
                        break;
                        case 7:
                        boton4.textContent = preguntas.pregunta7.incorrecta1;
                        break;
                        case 8:
                        boton4.textContent = preguntas.pregunta8.incorrecta1;
                        break;
                        case 9:
                        boton4.textContent = preguntas.pregunta9.incorrecta1;
                        break;
                        case 10:
                        boton4.textContent = preguntas.preguntaFinal.incorrecta1;
                        break;
                    }
                break;
                case 2:
                    switch (nivel){
                        case 1:
                        boton4.textContent = preguntas.pregunta1.incorrecta2;
                        break;
                        case 2:
                        boton4.textContent = preguntas.pregunta2.incorrecta2;
                        break;
                        case 3:
                        boton4.textContent = preguntas.pregunta3.incorrecta2;
                        break;
                        case 4:
                        boton4.textContent = preguntas.pregunta4.incorrecta2;
                        break;
                        case 5:
                        boton4.textContent = preguntas.pregunta5.incorrecta2;
                        break;
                        case 6:
                        boton4.textContent = preguntas.pregunta6.incorrecta2;
                        break;
                        case 7:
                        boton4.textContent = preguntas.pregunta7.incorrecta2;
                        break;
                        case 8:
                        boton4.textContent = preguntas.pregunta8.incorrecta2;
                        break;
                        case 9:
                        boton4.textContent = preguntas.pregunta9.incorrecta2;
                        break;
                        case 10:
                        boton4.textContent = preguntas.preguntaFinal.incorrecta2;
                        break;
                    }
                break;
                case 3:
                    switch (nivel){
                        case 1:
                        boton4.textContent = preguntas.pregunta1.incorrecta3;
                        break;
                        case 2:
                        boton4.textContent = preguntas.pregunta2.incorrecta3;
                        break;
                        case 3:
                        boton4.textContent = preguntas.pregunta3.incorrecta3;
                        break;
                        case 4:
                        boton4.textContent = preguntas.pregunta4.incorrecta3;
                        break;
                        case 5:
                        boton4.textContent = preguntas.pregunta5.incorrecta3;
                        break;
                        case 6:
                        boton4.textContent = preguntas.pregunta6.incorrecta3;
                        break;
                        case 7:
                        boton4.textContent = preguntas.pregunta7.incorrecta3;
                        break;
                        case 8:
                        boton4.textContent = preguntas.pregunta8.incorrecta3;
                        break;
                        case 9:
                        boton4.textContent = preguntas.pregunta9.incorrecta3;
                        break;
                        case 10:
                        boton4.textContent = preguntas.preguntaFinal.incorrecta3;
                        break;
                    }
                break;
                case 4:
                    switch (nivel){
                        case 1:
                        boton4.textContent = preguntas.pregunta1.correcta;
                        break;
                        case 2:
                        boton4.textContent = preguntas.pregunta2.correcta;
                        break;
                        case 3:
                        boton4.textContent = preguntas.pregunta3.correcta;
                        break;
                        case 4:
                        boton4.textContent = preguntas.pregunta4.correcta;
                        break;
                        case 5:
                        boton4.textContent = preguntas.pregunta5.correcta;
                        break;
                        case 6:
                        boton4.textContent = preguntas.pregunta6.correcta;
                        break;
                        case 7:
                        boton4.textContent = preguntas.pregunta7.correcta;
                        break;
                        case 8:
                        boton4.textContent = preguntas.pregunta8.correcta;
                        break;
                        case 9:
                        boton4.textContent = preguntas.pregunta9.correcta;
                        break;
                        case 10:
                        boton4.textContent = preguntas.preguntaFinal.correcta;
                        break;
                    }
                break;
            }
        break;       
    }
}

function verificacionRespuesta(idBoton, valorBoton){
    
    let valorBotonEntero = parseInt(valorBoton);

    if (idBoton === "boton1"){

        if (valorBotonEntero === 4){

            boton1.style.backgroundColor = "green";
            correct.play();
            contadorCorrectas += 1;
            setTimeout(() => {
                nivel += 1;
                inicio();
              }, "3000");

        } else {
            boton1.style.backgroundColor = "red";
            incorrect.play();
            contadorIncorrectas += 1;
            setTimeout(() => {
                nivel += 1;
                inicio();
              }, "3000");
        }

    } else if (idBoton === "boton2"){
        if (valorBotonEntero === 4){
            boton2.style.backgroundColor = "green";
            correct.play();
            contadorCorrectas += 1;
            setTimeout(() => {
                nivel += 1;
                inicio();
              }, "3000");
        } else {
            boton2.style.backgroundColor = "red";
            incorrect.play();
            contadorIncorrectas += 1;
            setTimeout(() => {
                nivel += 1;
                inicio();
              }, "3000");
        }
    } else if (idBoton === "boton3"){
        if (valorBotonEntero === 4){
            boton3.style.backgroundColor = "green";
            correct.play();
            contadorCorrectas += 1;
            setTimeout(() => {
                nivel += 1;
                inicio();
              }, "3000");
        } else {
            boton3.style.backgroundColor = "red";
            incorrect.play();
            contadorIncorrectas += 1;
            setTimeout(() => {
                nivel += 1;
                inicio();
              }, "3000");
        }
    } else if (idBoton === "boton4"){
        if (valorBotonEntero === 4){
            boton4.style.backgroundColor = "green";
            correct.play();
            contadorCorrectas += 1;
            setTimeout(() => {
                nivel += 1;
                inicio();
              }, "3000");
        } else {
            boton4.style.backgroundColor = "red";
            incorrect.play();
            contadorIncorrectas += 1;
            setTimeout(() => {
                nivel += 1;
                inicio();
              }, "3000");
        }
    }
}

function inicio(){

    queen.pause();
    music.play();
    lista.style.display = "none"
    BTN_REINICIO.style.display = "none";
    divFinal.style.display = "none";
    divFinal.style.height = "1vh";
    promedio.style.display = "none";
    imgPromedio.style.display = "none";
    pregunta.style.display = "block";
    boton1.style.display = "block";
    boton2.style.display = "block";
    boton3.style.display = "block";
    boton4.style.display = "block";
    boton1.style.backgroundColor = "#1d2770";
    boton2.style.backgroundColor = "#1d2770";
    boton3.style.backgroundColor = "#1d2770";
    boton4.style.backgroundColor = "#1d2770";
    asignarValoresRandom();
    asignarRespuestas(boton1.id, boton1.value);
    asignarRespuestas(boton2.id, boton2.value);
    asignarRespuestas(boton3.id, boton3.value);
    asignarRespuestas(boton4.id, boton4.value);

    switch (nivel) {
        case 1:
        pregunta.textContent = preguntas.pregunta1.pregunta;
        break;
        case 2:
        pregunta.textContent = preguntas.pregunta2.pregunta;
        break;
        case 3:
        pregunta.textContent = preguntas.pregunta3.pregunta;
        break;
        case 4:
        pregunta.textContent = preguntas.pregunta4.pregunta;
        break;
        case 5:
        pregunta.textContent = preguntas.pregunta5.pregunta;
        break;
        case 6:
        pregunta.textContent = preguntas.pregunta6.pregunta;
        break;
        case 7:
        pregunta.textContent = preguntas.pregunta7.pregunta;
        break;
        case 8:
        pregunta.textContent = preguntas.pregunta8.pregunta;
        break;
        case 9:
        pregunta.textContent = preguntas.pregunta9.pregunta;
        break;
        case 10:
        pregunta.textContent = preguntas.preguntaFinal.pregunta;
        break;
        case 11:
        pantallaFinal();
        break;
    }
}

function bloquearBotones(){
    boton1.disabled = true;
    boton2.disabled = true;
    boton3.disabled = true;
    boton4.disabled = true;
    setTimeout(() => {
        boton1.disabled = false;
        boton2.disabled = false;
        boton3.disabled = false;
        boton4.disabled = false;
    }, "3000");
}

function calcPromedio(a){
    
    promedioFinal = Math.round((a * 100) / 10);

}

function pantallaFinal(){
    
    calcPromedio(contadorCorrectas);
    music.pause();
    queen.play();

    boton1.style.display = "none";
    boton2.style.display = "none";
    boton3.style.display = "none";
    boton4.style.display = "none";
    pregunta.style.display = "none";

    porcentaje.textContent = promedioFinal + "%";
    correctas.textContent = contadorCorrectas;
    incorrectas.textContent = contadorIncorrectas;

    lista.style.display = "block";
    divFinal.style.display = "block"
    divFinal.style.height = "100vh";
    promedio.style.display = "block";
    imgPromedio.style.display = "block";


    switch (promedioFinal){
        case 100:
            imagenFinal.src = "img/chad.png";
            FRASE.textContent = "EXCELENTE";
            break;
        case 90:
            imagenFinal.src = "img/para.png";
            FRASE.textContent = "PARAAAA";
            break;
        case 80:
            imagenFinal.src = "img/para.png";
            FRASE.textContent = "PARAAAA";
            break;
        case 70:
            imagenFinal.src = "img/dolar.png";
            FRASE.textContent = "1 Dólar";
            break;
        case 60:
            imagenFinal.src = "img/dolar.png";
            FRASE.textContent = "1 Dólar";
            break;
        case 50:
            imagenFinal.src = "img/dolar.png";
            FRASE.textContent = "1 Dólar";
            break;
        case 40:
            imagenFinal.src = "img/snickers.png";
            FRASE.textContent = "Comete un Snickers";
        case 30:
            imagenFinal.src = "img/snickers.png";
            FRASE.textContent = "Comete un Snickers";
            break;
        case 20:
            imagenFinal.src = "img/carta.jpg";
            FRASE.textContent = "Coloco una carta boca abajo";
            break;
        case 10:
            imagenFinal.src = "img/carta.jpg";
            FRASE.textContent = "Coloco una carta boca abajo";
            break;
        case 0:
            imagenFinal.src = "img/carta.jpg";
            FRASE.textContent = "Coloco una carta boca abajo";
        break;
    }

    setTimeout(()=>{
        BTN_REINICIO.style.display = "block";
    }, "3000");
}

// FIN SECCION FUNCIONES

inicio();

boton1.addEventListener("click", () =>{
    verificacionRespuesta(boton1.id, boton1.value);
    bloquearBotones();
});

boton2.addEventListener("click", () =>{
    verificacionRespuesta(boton2.id, boton2.value);
    bloquearBotones();
});

boton3.addEventListener("click", () =>{
    verificacionRespuesta(boton3.id, boton3.value);
    bloquearBotones();
});

boton4.addEventListener("click", () =>{
    verificacionRespuesta(boton4.id, boton4.value);
    bloquearBotones();
});

BTN_REINICIO.addEventListener("click", ()=>{
    window.location.href = "index.html";
})