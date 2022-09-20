const questions = [
    [   {letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",},
        {letter: "b", answer: "bingo", status: 0, question:"CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",},
        {letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé",},
        {letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",},
        {letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",},
        {letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",},
        {letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",},
        {letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento",},
        {letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano",},
        {letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",},
        {letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria",},
        {letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo",},
        {letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",},
        {letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia",},
        {letter: "ñ", answer: "señal", status: 0,  question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",},
        {letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",},
        {letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",},
        {letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",},
        {letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
        {letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático",},
        {letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",},
        {letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",},
        {letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",},
        {letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",},
        {letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",},
        {letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",},
        {letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",}
    ],
    [   {letter: "a", answer: "aceite", status: 0, question: "CON LA A. Líquido graso de color verde amarillento que se obtiene prensando las aceitunas.",},
        {letter: "b", answer: "buzon", status: 0, question: "CON LA B. Abertura por donde se echan las cartas por el correo.",},
        {letter: "c", answer: "chandal", status: 0, question: "CON LA C. Ropa deportiva que consta de un pantalón y una chaqueta o jersey amplios.",},
        {letter: "d", answer: "devoto", status: 0, question: "CON LA D. Dedicado con fervor a obras de piedad y religión.",},
        {letter: "e", answer: "entera", status: 0, question: "CON LA E. Se dice de la leche que conserva toda la grasa y sustancias nutritivas.",},
        {letter: "f", answer: "forestal", status: 0, question: "CON LA F. Perteneciente o relativo a los bosques y a los aprovechamientos de leñas o pastos.",},
        {letter: "g", answer: "george lucas", status: 0, question: "CON LA G. Creador de Star Wars.",},
        {letter: "h", answer: "hombrera", status: 0, question: "CON LA H. Adorno especial de los vestidos en la parte correspondiente a los hombros.",},
        {letter: "i", answer: "intuir", status: 0, question: "CON LA I. Percibir íntima e instantáneamente una idea o verdad tal como si se la tuviera a la vista.",},
        {letter: "j", answer: "jornada", status: 0, question: "CON LA J. Tiempo de duración del trabajo diario.",},
        {letter: "k", answer: "kilometro", status: 0, question: "CON LA K. Medida de longitud que equivale a 1000 metros.",},
        {letter: "l", answer: "linguistica", status: 0, question: "CON LA L. Estudio científico del orígen, la evolución y estructura del lenguaje.",},
        {letter: "m", answer: "menor", status: 0, question: "CON LA M. Se dice de una persona que no ha alcanzado la mayoría de edad.",},
        {letter: "n", answer: "ninfa", status: 0, question: "CON LA N. Cada una de las fabulosas deidades de las aguas, bosques o selva.",},
        {letter: "ñ", answer: "ñoqui", status: 0, question: "CON LA Ñ. Tipo de pasta italiana, elaborada con patata, harina y queso de ricota.",},
        {letter: "o", answer: "oscar", status: 0, question: "CON LA O. Nombre con el que es conocido popularmente, el Premio de la Academia de Artes y Ciencias Cinematográficas.",},
        {letter: "p", answer: "prioridad", status: 0, question: "CON LA P. Ventaja o preferencia que una persona o cosa tiene sobre otra.",},
        {letter: "q", answer: "branquia", status: 0, question: "CONTIENE LA Q. Órgano respiratorio de los peces formado por láminas o filamentos.",},
        {letter: "r", answer: "ron", status: 0, question: "CON LA R. Nombre del mejor amigo de Harry Potter.",},
        {letter: "s", answer: "samba", status: 0, question: "CON LA S. Danza popular brasileña de influencia africana cantada de compás binario.",},
        {letter: "t", answer: "tarzan", status: 0, question: "CON LA T. Película de Disney, en la que el personaje principal es criado por gorilas.",},
        {letter: "u", answer: "usurpar", status: 0, question: "CON LA U. Atribuirse y usar un título o cargo ajeno como si fuera propio.",},
        {letter: "v", answer: "vivienda", status: 0, question: "CON LA V. Lugar cerrado o cubierto construido para ser habitado por personas.",},
        {letter: "w", answer: "waterpolo", status: 0, question: "CON LA W. Deporte de pelota que se juega en la piscina y en el que se enfrentan dos equipos.",},
        {letter: "x", answer: "oxford", status: 0, question: "CONTIENE LA X. Ciudad inglesa cuya universidad compite cada año en una popular regata contra la universidad de Cambridge.",},
        {letter: "y", answer: "ymca", status: 0, question: "CON LA Y. Reconocida cancion de Village People, lanzada en 1978.",},
        {letter: "z", answer: "zapatilla", status: 0, question: "CON LA Z. Calzado ligero y cómodo, con o sin talón, de tela o cuero fino y suela plana de grosor variable, que se usa dentro de casa.",}
    ],
    [   {letter: "a", answer: "agenda", status: 0, question: "CON LA A. Libro o cuaderno en el que se apunta para no olvidarlo aquello que se ha de hacer.",},
        {letter: "b", answer: "beatles", status: 0, question: "CON LA B. Reconocida banda de rock britanica, durante los años 60'.",},
        {letter: "c", answer: "caracol", status: 0, question: "CON LA C. Animal que se mueve lentamente.",},
        {letter: "d", answer: "dormir", status: 0, question: "CON LA D. Estar de reposo que consiste en la inacción o suspensión de los sentidos y de todo movimiento voluntarios.",},
        {letter: "e", answer: "eleven", status: 0, question: "CON LA E. Nombre del personaje protagonista de Stranger Things.",},
        {letter: "f", answer: "finn", status: 0, question: "CON LA F. Nombre del personaje principal de la serie animada Hora de Aventura.",},
        {letter: "g", answer: "gato", status: 0, question: "CON LA G. Felino.",},
        {letter: "h", answer: "harry potter", status: 0, question: "CON LA H. Reconocida franquicia de J.K.Rowling.",},
        {letter: "i", answer: "inapetencia", status: 0, question: "CON LA I. Falta de gana de comer.",},
        {letter: "j", answer: "jardineria", status: 0, question: "CON LA J. Arte y oficio del jardinero.",},
        {letter: "k", answer: "kiwi", status: 0, question: "CON LA K. Fruto de forma ovoide, de tamaño variable y recubierto de una piel fina de color marrón, ligeramente vellosa.",},
        {letter: "l", answer: "lobera", status: 0, question: "CON LA L. Guarida de lobos.",},
        {letter: "m", answer: "mentira", status: 0, question: "CON LA M. Afirmación que una persona hace consciente de que no es verdad.",},
        {letter: "n", answer: "nativo", status: 0, question: "CON LA N. Se aplica al que ha nacido en el lugar de que se trata.",},
        {letter: "ñ", answer: "ñandu", status: 0, question: "CON LA Ñ. Ave corredora similar al avestruz, pero de menor tamaño, habita en las llanuras de América del Sur.",},
        {letter: "o", answer: "organo", status: 0, question: "CON LA O. Parte del animal o vegetal que ejerce una función.",},
        {letter: "p", answer: "perro", status: 0, question: "CON LA P. El mejor amigo del hombre.",},
        {letter: "q", answer: "arquero", status: 0, question: "CONTIENE LA Q. Soldado que dispara flechas con un arco.",},
        {letter: "r", answer: "rafaga", status: 0, question: "CON LA R. Viento fuerte, resentido y de corta duración.",},
        {letter: "s", answer: "simple", status: 0, question: "CON LA S. Se aplica a lo que no tiene complicación.",},
        {letter: "t", answer: "trece", status: 0, question: "CON LA T. Número cardinal equivalente a 10 + 3.",},
        {letter: "u", answer: "uderzo", status: 0, question: "CON LA U. Apellido del dibujante y guionista francés autor de la serie Asterix.",},
        {letter: "v", answer: "verde", status: 0, question: "CON LA V. Se aplica el color perfectamente al de la hierba fresca o la esmeralda.",},
        {letter: "w", answer: "wifi", status: 0, question: "CON LA W. Tecnología que permite conectar diferentes equipos informaticos a través de una red inalámbrica de banda ancha.",},
        {letter: "x", answer: "fenix", status: 0, question: "CONTIENE LA X. Ave fabulosa, semejante a un águila, que renacía de sus propias cenizas.",},
        {letter: "y", answer: "moncayo", status: 0, question: "CONTIENE LA Y. Nombre de la montaña más alta del sistema ibérico.",},
        {letter: "z", answer: "zoodiacal", status: 0, question: "CON LA Z. Perteneciente o relativo al zoodíaco.",}
    ]
  ];

const pasapalabraGame = document.querySelector(".pasapalabra");
const startButton = document.querySelector(".message__button");
const gameRules = document.querySelector(".pasapalabra__rules");
const userActions = document.querySelector(".game__actions");
const exitButton = document.querySelector("#exit-button");
const wordToGuess = document.querySelector("#word-to-guess");
const playerInput = document.querySelector(".actions__input");
//const actionButtons = document.querySelector(".actions__buttons")
const actionPasapalabra = document.querySelector(".buttons__pasapalabra");
const actionReply = document.querySelector(".buttons__user-answer");
//const lettersCircle = document.querySelectorAll(`.game__letterCircle`);
const finishingGame = document.querySelector(".pasapalabra__scoring");
const statusNotPlayed = 0;
const statusPasapalabra = 1;
const statusCorrect = 2;
const statusIncorrect = 3;

let playTheGame = false;
let correctAnswer = 0;
let wrongAnswer = 0;
  
const rulesBox = () => {
    gameRules.style.display = "flex"
    startButton.addEventListener("click", event => {
        if(event.target.matches("button")) {
            gameRules.style.display = "none";
            userActions.style.display = "flex";
            exitButton.style.display = "flex";
            playTheGame = true;
        }
    })
};

const selectingQuestions = (array) => {
    const selectedArray = Math.floor(Math.random() * 3);
    const arrayToPlay = array[selectedArray];
    return arrayToPlay;
}

//

const abcQuestions = (array) => {
    let i = 0;
    let showQuestion = array[i].question;
    wordToGuess.textContent = showQuestion;

    actionPasapalabra.addEventListener("click", event => {
        if(event.target.matches("button")) {
            
            const { letter } = array[i];
            document.getElementById(`${letter}`).style.background = "#F8D6A3";
            array[i].status = 1;
            playerInput.value = "";
            
            console.log(i, letter)

            if(i >= 26){
                i = 0;
            } else {
                i++
            }

            while((array[i].status === statusCorrect || array[i].status === statusIncorrect) && isPasapalabra(array)){
                i++;
                if(i > 26) {
                    i = 0;
                }
            }
            
            if(array[i].status === statusNotPlayed || array[i].status === statusPasapalabra){
                showQuestion = array[i].question;
                wordToGuess.textContent = showQuestion;
            } 
        }
    })
    
    actionReply.addEventListener("click", event => {
        if(event.target.matches("button")) {      
            
            const { letter } = array[i];
            const verifyInputValue = playerInput.value.toLowerCase();
            if(verifyInputValue === array[i].answer){
                document.getElementById(`${letter}`).style.background = "#D7EDBC";
                array[i].status = 2;
                correctAnswer++
            } else {
                document.getElementById(`${letter}`).style.background = "#F89090";
                array[i].status = 3;
                wrongAnswer++
            }
            playerInput.value = "";
        
            console.log(i, letter)
            if(i >= 26){
                i = 0;
            } else {
                i++
            }

            while((array[i].status === statusCorrect || array[i].status === statusIncorrect) && isPasapalabra(array)){
                i++;
                if(i > 26) {
                    i = 0;
                }
            }

            if(array[i].status === statusNotPlayed || array[i].status === statusPasapalabra){
                showQuestion = array[i].question;
                wordToGuess.textContent = showQuestion;
            } 

            if(!isPasapalabra(array) && array[i].status !== statusNotPlayed) {
                //Mostrar de chau
                alert("GANASTE! ANDA A DORMIR!")
            } 
        }
    })
}

//Despues de la Z i vale mas que el array y no continua

const checkIfWin = (array) => {
    if(array.some(item => item.status === 1)) abcQuestions(array);
}

const isPasapalabra = (array) => {
    return array.some(item => item.status === 1);
}

const hasTime = true;
const finishGameMessage = () => {
    if(hasTime && !isPasapalabra){
        userActions.style.display = "none";
        exitButton.style.display = "none";
        finishGameMessage.style.display = "flex";
    } else if (!hasTime) {

    }
}

//Main function
const alphabeticalGame = () => {
    rulesBox();
    const arrayToPlay = selectingQuestions(questions);
    abcQuestions(arrayToPlay);

};
alphabeticalGame();

