//-- GENERADOR TORTURA ESTANDAR -->

const TORTURAS_LIST = [
    'escuchar regueton',
    'explicar memes a tus padres',
    'darle la razón',
    'darle todos tus ahorros',
    'dar descargas electricas',
];

const PERSONAS_LIST = [
    'tu suegra',
    'un payaso siniestro',
    'tu ex',
    'Tu vecino(a)',
    'un politico corrupto (por defecto de derechas)',
];

const TOOLS_LIST = [
    'un martillo',
    'unas tijeras oxidadas',
    'polvos picapica',
    'un trozo de hielo',
    'pinzas para ropa',
];

const PARTS_LIST = [
    'la parte baja de la espalda 🍑',
    'tus partes nobles',
    'los ojos',
    'la planta de los pies',
    'los pezones',
];

const TIME_LIST = [
    '5 minutos',
    'una hora',
    'toda la noche',
    '24 horas',
    'toda una vida',
];

const getIsPersona = () => {
    const index = Math.floor(Math.random() * PERSONAS_LIST.length);
    return PERSONAS_LIST[index];
};

const getTools = () => {
    const index = Math.floor(Math.random() * TOOLS_LIST.length);
    return TOOLS_LIST[index];
};

const getPart = () => {
    const index = Math.floor(Math.random() * PARTS_LIST.length);
    return PARTS_LIST[index];
};

const getTime = () => {
    const index = Math.floor(Math.random() * TIME_LIST.length);
    return TIME_LIST[index];
};

const getTortura = () => {
    const index = Math.floor(Math.random() * TORTURAS_LIST.length);
    return TORTURAS_LIST[index];
};

const torturar = () => {
    const IsPersona = getIsPersona();
    const Tolls = getTools();
    const part = getPart();
    const time = getTime();
    const tortura = getTortura();

    return `Te torturará ${IsPersona} con ${Tolls} en ${part} durante ${time} obligándote a ${tortura}`;
};


function mostrarTortura() {
    const texto = torturar();
    document.getElementById("excusa").textContent = texto;
}



// -- GENERADOR TORTURAS PAREJAS  --


const ACTION_LIST = ['pellizcará', 'morderá', 'lamerá', 'frotará', 'hurgará'];
const BODYPART_LIST = ['la oreja', 'los pezones', 'la planta de los pies', 'la ingle', 'el cuello'];
const WHAT_LIST = ['una pluma', 'una pinza de ropa', 'un hielo', 'una cucharilla fria', 'un palillo de dientes'];
const PTIME_LIST = ['2', '3', '4', '5', '10'];



const getRandomAction = () => {
    const index = Math.floor(Math.random() * ACTION_LIST.length);
    return ACTION_LIST[index];
}

const getRandomBodypart = () => {

    const index = Math.floor(Math.random() * BODYPART_LIST.length);
    return BODYPART_LIST[index];
}

const getRandomWhat = () => {
    const index = Math.floor(Math.random() * WHAT_LIST.length);
    return WHAT_LIST[index];
}

const getRandomTime = () => {
    const index = Math.floor(Math.random() * PTIME_LIST.length);
    return PTIME_LIST[index];
}



const parejaTortura = () => {
    const action = getRandomAction();
    const bodypart = getRandomBodypart();
    const what = getRandomWhat();
    const ptime = getRandomTime();


    return `Quien ha dado click ${action} ${bodypart} de su pareja con ${what} durante ${ptime} minutos`;
};

function mostrarPtortura() {
    const texto = parejaTortura();
    document.getElementById("excusa").textContent = texto;
}

window.addEventListener('click', () => {
    const audio = document.getElementById('musicaFondo');
    if (audio && audio.paused) {
        audio.play();
    }
});



window.addEventListener('click', () => {
    const audio = document.getElementById('musicaFondo');
    if (audio.paused) {
        audio.play();
    }
});


//  ABOUT


function alternarFicha(imagen) {
    
    const srcActual = imagen.src;

   
    if (srcActual.includes("_1.png")) {
        
        imagen.src = srcActual.replace("_1.png", "_2.png");
    } else if (srcActual.includes("_2.png")) {
       
        imagen.src = srcActual.replace("_2.png", "_1.png");
    }
}



const todasLasFichas = document.querySelectorAll('.ficha-interactiva');


todasLasFichas.forEach(ficha => {
    
    ficha.addEventListener('click', function() {
        
        alternarFicha(ficha);
    });
});