/*

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

1. fai inserire il numero da 1 a 5 dall'utente                                
2. creiamo una funziona che generi un numero da 1 a 5 per il pc               
3. sommiamo i numeri usciti sia dall'utente che dal pc                        
4. creiamo un'altra funziona controllando se la somma sia pari o dispari      
5. se è pari vince utente se dispari pc

*/ 
let sceltaPariDispari = prompt('Scegli pari o dispari');
let numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
let randomPC = numeroRandPc(1, 5);
let sommaNum = randomPC + numeroUtente;


alert ('numero del pc è ' + randomPC)
//console.log('somma ' + sommaNum);

let scelta = pariDispari(sommaNum);
//console.log('pari dispari ' + sommaPariDispari);

if(sceltaPariDispari == scelta){
    alert('la somma è pari, hai vinto!!');
}else{
    alert ('La somma è dispari, hai perso!!');
}





/*Funzione numero random*/ 
function numeroRandPc (min, max){

    let numeroPC = Math.floor(Math.random() * (max - min + 1)) + min;

    return numeroPC;
}


/*Funzione pari dispari*/
function pariDispari (numero){

    let ric = 'pari';

    if(numero % 2 == 0){
        ric = 'pari';
    }else{
        ric ='dispari';
    }

    return ric;

}