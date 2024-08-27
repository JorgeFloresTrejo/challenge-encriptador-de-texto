let botonEncriptar = document.querySelector('.boton_encriptar');
let botonDesencriptar = document.querySelector('.boton_desencriptar');
let muneco = document.querySelector('.contenedor_muñeco');
let contenedorResultado = document.querySelector('.contenedor_info');
let textoResultado = document.querySelector('.texto_resultado');

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    let cajaTexto = recuperarTexto();
    textoResultado.textContent = encriptarTexto(cajaTexto);
    document.querySelector('.contenedor_boton_copiar').classList.remove('ocultar');
}

function desencriptar(){
    ocultarAdelante();
    let cajaTexto = recuperarTexto();
    textoResultado.textContent = desencriptarTexto(cajaTexto);
    document.querySelector('.contenedor_boton_copiar').classList.remove('ocultar');
}

function recuperarTexto(){
    let cajaTexto = document.querySelector('.seccion1_caja_texto');
    return cajaTexto.value;
}

function ocultarAdelante(){
    muneco.classList.add('ocultar'); 
    contenedorResultado.classList.add("ocultar")
}

// Función para encriptar
function encriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

};

// Función para desencriptar
function desencriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

};

// Boton para copiar el texto
const btnCopiar = document.querySelector('.contenedor_boton_copiar'); 
    btnCopiar.addEventListener("click", copiar = () => {
    let contenido = document.querySelector(".texto_resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
});