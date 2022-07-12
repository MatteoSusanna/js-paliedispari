/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma


 */


let parola = prompt('Inserisci una parola');


parola = palindroma(parola);


if(verifica = 'palindroma'){
    alert('la parola è palindroma');
}else {
    alert('la parola non è palindroma');
}




function palindroma (parolaIns){

    let myArray = parolaIns.split('');
    console.log(myArray);

    myArray.reverse();
    console.log(myArray);


    let verifica = '';

    for( let i = myArray.length; i > 0; i--){

        if(myArray[i] == parolaIns[i]){
            verifica = "palindroma";
        }else{
            verifica = "nopalindroma";
        }

    }

    return verifica;






/*
    let pali = '';

    if(myArray.reverse == parola.split){
        pali = "palindroma";
    }else{
        pali = "nopalindroma";
    }


    return pali;

*/
}

