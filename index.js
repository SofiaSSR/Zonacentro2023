function encriptarTexto() {
    const texto = document.getElementById("inputTexto").value;
    const clave = parseInt(document.getElementById("inputClave").value);
    let textoEncriptado = "";

    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);

        // Verifica si el carácter es una letra mayúscula
        if (65 <= charCode && charCode <= 90) {
            charCode = ((charCode - 65 + clave) % 26) + 65;
        }
        // Verifica si el carácter es una letra minúscula
        else if (97 <= charCode && charCode <= 122) {
            charCode = ((charCode - 97 + clave) % 26) + 97;
        }

        textoEncriptado += String.fromCharCode(charCode);
    }

    document.getElementById("textoEncriptado").textContent = textoEncriptado;
}

// Función para desencriptar el texto
function desencriptarTexto() {
    const textoEncriptado = document.getElementById("textoEncriptado").textContent;
    const clave = parseInt(document.getElementById("inputClave").value);
    let textoDesencriptado = "";

    for (let i = 0; i < textoEncriptado.length; i++) {
        let charCode = textoEncriptado.charCodeAt(i);

        // Verifica si el carácter es una letra mayúscula
        if (65 <= charCode && charCode <= 90) {
            charCode = ((charCode - 65 - clave + 26) % 26) + 65;
        }
        // Verifica si el carácter es una letra minúscula
        else if (97 <= charCode && charCode <= 122) {
            charCode = ((charCode - 97 - clave + 26) % 26) + 97;
        }

        textoDesencriptado += String.fromCharCode(charCode);
    }

    document.getElementById("inputTexto").value = textoDesencriptado;
}