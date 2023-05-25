// const declaration
const textoIngresado = document.querySelector("#texto");
const textoResultado = document.querySelector("#textoResultado");
const textoNoencontrado = document.querySelector("#no_encontrado");
const ingresaTexto = document.querySelector("#ingresa_texto");

const encriptBtn = document.querySelector("#encri");
const desencriptBtn = document.querySelector("#desencri");
const copyBtn = document.querySelector("#copy");

const muñecoImg = document.querySelector("#muñeco");

function encript (){
    let texto = textoIngresado.value.toLowerCase();
    let textoEncriptado = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");

    textoResultado.value = textoEncriptado;

    document.getElementById("texto").value = '';
}

function desencript (){
    let textoEncriptado = textoIngresado.value.toLowerCase();
    let texto = textoEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

    textoResultado.value = texto;

    document.getElementById("texto").value = '';
    
}

function copy () {
    let textoEncriptado = textoResultado.value;
    navigator.clipboard.writeText(textoEncriptado);
}

function hide(element) {
    element.style.display = "none";
}

function show(element) {
    element.style.display = "block";
}

encriptBtn.addEventListener("click", function () {
    hide(muñecoImg);
    hide(ingresaTexto);
    hide(textoNoencontrado);
    show(copyBtn);
    show(textoResultado);
    encript();
})

desencriptBtn.addEventListener("click", function () {
    hide(muñecoImg);
    hide(ingresaTexto);
    hide(textoNoencontrado);
    show(copyBtn);
    show(textoResultado);
    desencript();
})

copyBtn.addEventListener("click", function () {
    copy();
})