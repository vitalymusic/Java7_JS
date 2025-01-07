// Komentāri
// Datu tipi

// Number,integer
let pirmaisCipars = 100;
//var otraisCipars = 120;


// float,double
let dailskaitlis = 2.67;

// string

let vards1 = "Jānis";
let vards2 = 'Pēteris';
let vards3 = `Jānis`;

// boolean 

let boolean1 = true;
let boolean2 = false;

// masīvs   

let masivs = [1, "Teksts", false, 2.67, [1, 2, 3]];

// objekts
let maja = {
    istabas:4,
    stavs:2,
    krasas:["balta","sarkana","zila"],
    adrese:"Brīvības iela 22",
    atveries:function(){
        alert("Atvērt durvis");
    }
}


// datu izvade

console.log(pirmaisCipars*pirmaisCipars);
document.write(vards1,vards2,vards3);

console.log(masivs);   


document.write(maja.adrese);
document.write(maja.istabas);
document.write(maja.krasas[2]);

let attels = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png";


// maja.atveries();

console.log(maja);
