// if


// Salīdzināšanas operatori un loģiskie operatori

// document.write( "5"!=5 );
// document.write( 1<0 && 3>1 && 5>3);
// document.write( 1>0 || 3>10 || "10"==10);



// if(prompt("Cik jums gadu")>24){
//     // izpilda ja true
//     document.write( "Atļauts" );
// }else{
//     document.write( "Aizliegts" );
// }

// Laika prognozes kalkulators

let vejaAtrums=3,gaisaTemp = 15,nokrisni = true ;

// saulains laiks un karsti
if(vejaAtrums <5 && gaisaTemp >20 && !nokrisni){
    document.write("saulains laiks un karsti")
}else if(vejaAtrums <5 && gaisaTemp >20 && nokrisni){
    document.write("Silts bet lietains laiks")
}else if(vejaAtrums >5 && vejaAtrums <=10 && gaisaTemp <-10 && gaisaTemp >-20 && nokrisni){
    document.write("Augsts laiks un būs sniegs")
}




let diena = 4;

// Switch Caslete
let rezultats;
switch(diena){
    case 1: rezultats = "Pirmdiena";break;
    case 2: rezultats = "Otrdiena";break;
    case 3: rezultats = "Trešdiena";break;
    case 4: rezultats = "Ceturtdinea";break;
    case 5: rezultats = "Piektdiena";break;
    default:  rezultats = "Cita diena";break;
}

document.write(rezultats);


// Ternārais operators ?
let produkti = 5;

document.write(`Kopā produktu skaits ir 
    ${produkti>3?"Daudz":"Maz"}`);


    




