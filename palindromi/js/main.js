/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma


 */


let parola = prompt('Inserisci una parola');

parola = palindroma(parola);


function palindroma(parolaIns){

    let myArray = parolaIns.split('');
    console.log(myArray);

    let verifica = '';

    for( let i = myArray.length - 1; i >= 0; i--){

        verifica += myArray[i];
        console.log(verifica);

    }

    if(verifica == parola){
        alert('la parola è palindroma');
    }else {
        alert('la parola non è palindroma');
    }


}

