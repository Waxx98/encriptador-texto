const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function encriptarTexto(stringEncriptado){
    let matrizEncriptar = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();
    for (let i = 0; i < matrizEncriptar.length; i++) {
        if(stringEncriptado.includes(matrizEncriptar[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizEncriptar[i][0], matrizEncriptar[i][1]);
        }
    }
    return stringEncriptado;
}

function desencriptarTexto(stringEncriptado){
    let matrizDesencriptar = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    stringEncriptado = stringEncriptado.toLowerCase();
    for (let i = 0; i < matrizDesencriptar.length; i++) {
        if(stringEncriptado.includes(matrizDesencriptar[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizDesencriptar[i][0], matrizDesencriptar[i][1]);
        }
    }
    return stringEncriptado;
}

function btnEncriptar(){
    let textoEncriptado = encriptarTexto(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    document.querySelector(".copiar").style.display = "flex";
    document.querySelector(".contenido-parrafo").style.display = "none";
    document.querySelector(".contenido-parrafo-2").style.display = "none";
}

function btnDesencriptar(){
    let textoEncriptado = desencriptarTexto(textArea.value);
    mensaje.value = textoEncriptado;
}

function btnCopiar(){
    mensaje.select();
    document.execCommand("copy");
    mensaje.value = "";
}
