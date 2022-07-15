let text = "";

function copy (){
    text = document.getElementById("finalText");
    text.select();
    text.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado para área de transferência.");
}