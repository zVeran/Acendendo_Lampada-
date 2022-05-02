let $ligar = document.getElementById("ligar");
let $desligar = document.getElementById("desligar");
let $lampada = document.getElementById("lamp"); 



// Ligando a lâmpada

$ligar.addEventListener("click",LigarLamp);

function LigarLamp(){
    $lampada.src="imagens/lamp_acesa.jpg";
}

// desligando a lâmpada


$desligar.addEventListener("click",desligarlamp);

function desligarlamp(){
    $lampada.src="imagens/lamp_apg.jpg";
}

// Quebrando a lâmpada

$lampada.addEventListener("mouseover",quebrarLamp);

function quebrarLamp(){
    $lampada.src="imagens/lamp_quebrada.jpg";
}