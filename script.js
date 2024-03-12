function verificarTexto(texto){

    for (letra = 0; letra < texto.length; letra++){
        let caractere = texto.charAt(letra);

        if((caractere < 'a' || caractere > 'z')&& caractere !== ' ') {
            alert("O texto contém letras maiúsculas e/ou caracteres especiais. Por favor, insira apenas apenas letras minúsculas e sem acento.");
            return false;         
        }
    }    
    return true;
}

function botaoCodificar(){
    let textoValido = verificarTexto(document.getElementById("inserir-texto").value);

    if(!textoValido){
        return;
    }

    let mensagemCodificada = codificarTexto(document.getElementById("inserir-texto").value);
    exibirResultado(mensagemCodificada);
}

function codificarTexto(textoEntrada){
    let mensagemCodificada = textoEntrada;

    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]       
    ];

    for (let i = 0; i < matrizCodigo.length; i++){
        if(mensagemCodificada.includes(matrizCodigo[i][0])){
            mensagemCodificada = mensagemCodificada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return mensagemCodificada;
}

function botaoDescodificar(){
    let textoValido = verificarTexto(document.getElementById("inserir-texto").value);

    if(!textoValido){
        return;
    }

    let mensagemDescodificada = descodificarTexto(document.getElementById("inserir-texto").value);
    exibirResultado(mensagemDescodificada);

}

function descodificarTexto(textoEntrada){
    let mensagemDescodificada = textoEntrada;

    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]       
    ];

    for (let i = 0; i < matrizCodigo.length; i++){
        if(mensagemDescodificada.includes(matrizCodigo[i][0])){
            mensagemDescodificada = mensagemDescodificada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return mensagemDescodificada;
}

function exibirResultado(mensagem){
    document.getElementById("mensagem-nenhum-resultado").style.display = "none";
    document.getElementById("exibir-resultado").style.display = "block";
    document.getElementById("mensagem-final").innerHTML = mensagem;

}

function copiarResultado(){
    navigator.clipboard.writeText(document.getElementById('mensagem-final').textContent).then(() => {
        alert("Texto copiado para área de trasferência.")
    })
}
  