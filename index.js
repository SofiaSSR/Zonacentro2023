// index.js

// Función para calcular el inverso multiplicativo mod 26
function inversoMultiplicativo(a) {
    for (let x = 1; x < 26; x++) {
        if ((a * x) % 26 === 1) {
            return x;
        }
    }
    return -1;
}

// Función para encriptar el texto usando un cifrado afín
function encriptarTexto() {
    const texto = document.getElementById("inputTexto").value;
    let claveA = parseInt(document.getElementById("inputClaveA").value);
    let claveB = parseInt(document.getElementById("inputClaveB").value);
    let textoEncriptado = "";

    // Validar que claveA tenga un inverso multiplicativo mod 26
    const inversoA = inversoMultiplicativo(claveA);
    if (inversoA === -1) {
        alert("La clave A no tiene un inverso multiplicativo mod 26 válido.");
        return;
    }

    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);

        if (65 <= charCode && charCode <= 90) { // Letras mayúsculas
            charCode = ((claveA * (charCode - 65) + claveB) % 26) + 65;
        } else if (97 <= charCode && charCode <= 122) { // Letras minúsculas
            charCode = ((claveA * (charCode - 97) + claveB) % 26) + 97;
        }

        textoEncriptado += String.fromCharCode(charCode);
    }

    document.getElementById("textoEncriptado").textContent = textoEncriptado;
}

// Función para desencriptar el texto usando un cifrado afín
function desencriptarTexto() {
    const textoEncriptado = document.getElementById("inputTexto").value;
    let claveA = parseInt(document.getElementById("inputClaveA").value);
    let claveB = parseInt(document.getElementById("inputClaveB").value);
    let textoDesencriptado = "";

    // Validar que claveA tenga un inverso multiplicativo mod 26
    const inversoA = inversoMultiplicativo(claveA);
    if (inversoA === -1) {
        alert("La clave A no tiene un inverso multiplicativo mod 26 válido.");
        return;
    }

    // Calcular el inverso multiplicativo de claveA mod 26
    for (let i = 0; i < textoEncriptado.length; i++) {
        let charCode = textoEncriptado.charCodeAt(i);

        if (65 <= charCode && charCode <= 90) { // Letras mayúsculas
            charCode = (((charCode - 65 - claveB) * inversoA) % 26 + 26) % 26 + 65;
        } else if (97 <= charCode && charCode <= 122) { // Letras minúsculas
            charCode = (((charCode - 97 - claveB) * inversoA) % 26 + 26) % 26 + 97;
        }

        textoDesencriptado += String.fromCharCode(charCode);
    }

    document.getElementById("textoEncriptado").textContent = textoDesencriptado;
}
