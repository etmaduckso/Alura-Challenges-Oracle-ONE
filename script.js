function criptografar() {
    let texto = document.getElementById("text").value;
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("text").value = textoCriptografado;
}

function descriptografar() {
    let texto = document.getElementById("text").value;
    let textoDescriptografado = texto
        .replace(/ufat/g, "u")
        .replace(/ober/g, "o")
        .replace(/ai/g, "a")
        .replace(/imes/g, "i")
        .replace(/enter/g, "e");
    document.getElementById("text").value = textoDescriptografado;
}

function copiarTexto() {
    let texto = document.getElementById("text");
    texto.select();
    texto.setSelectionRange(0, 99999); // Para dispositivos móveis
    document.execCommand("copy");
    alert("Texto copiado: " + texto.value);
}
