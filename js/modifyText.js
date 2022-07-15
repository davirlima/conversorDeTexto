let initialText = "";

function upperCase (){
    initialText = document.getElementById('initialText').value.toUpperCase();

    document.getElementById('finalText').innerHTML = initialText;
}

function lowerCase (){
    initialText = document.getElementById('initialText').value.toLowerCase();
    
    document.getElementById('finalText').innerHTML = initialText;
}

function beginUpperCase (){
    initialText = document.getElementById('initialText').value.toLowerCase();                

    const arrayText = initialText.split(' ');
    
    const firstLetterText = [];

    for (let i = 0; i < arrayText.length; i++) {
        if(arrayText[i] == ""){
            arrayText.splice(i, 1);
        }
        firstLetterText[i] = [arrayText[i][0].toUpperCase() + arrayText[i].substr(1)];
    }
    
    const finalText = firstLetterText.join(' ');

    document.getElementById('finalText').innerHTML = finalText;
}

function interleaved (){
    initialText = document.getElementById('initialText').value;                

    const arrayText = initialText.split(' ');

    const upperLetter = [];
    const lowerLetter = [];
    const word = [];

    for (let i = 0; i < arrayText.length; i++) {
        if(arrayText[i] == ""){
            arrayText.splice(i, 1);
        }
        word[i] = "";
        for (let j = 0; j < arrayText[i].length; j++){
            if(j%2 == 0){
                upperLetter[(j/2)] = arrayText[i][j].toUpperCase();
                word[i] += upperLetter[(j/2)];
            }else{
                lowerLetter[(((j+1)/2)-1)] = arrayText[i][j].toLowerCase();
                word[i] += lowerLetter[((j+1)/2)-1];
            }
        }
    }

    const finalText = word.join(' ');

    document.getElementById('finalText').innerHTML = finalText;
}