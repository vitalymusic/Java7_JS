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




// Operātori

// +,-,*,/,%,++,--,+=,-=,*=,/=,**

// Salīdzināšanas operātori
// ==,!=,>,<,>=,<=,===,!==

// Loģiskie operātori
// &&,|| 


let result = 23*34;

let sk1 = 34.45,sk2 = 56.78;
result = sk1+sk2;
//result = result*10;
result *=10;
result++;
++result;

+result; //unārais pluss


result = 10.445345345.toFixed(2);


// result = +prompt("Ievadi pirmo skaitli") * +prompt("Ievadi otru skaitli");
result = Math.round(sk1);

result = Math.trunc(Math.random()*100);

result = Math.PI.toFixed(2);

document.write("<h1>");
document.write(result);
document.write("</h1>");


// Teksta virkņu metodes


// Konkatenācija 
let diena = "Trešdiena";


document.write("Šodien ir: " + diena + "!");

let html = "<a href='"+diena+".html'>"+ diena + "</a>";
 html = `<a href="${diena}.html">${diena}</a>`;

let img = `<img src="${attels}" width="200">`;

let dienas = ["Pirmdiena","Otrdiena","Trešdiena"];

let table = "<table>";
table += "<tr>";
table += "<td>dati</td>";
table += "</tr>";
table += "</table>";


table = `
<table border="1" width="100%">
    <tr>
        <td>${dienas[0]}</td>
        <td>${dienas[1]}</td>
        <td>${dienas[2]}</td>
    </tr>    
</table>    
`;



let teksts = `The Math.PI static data property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159.  Math.PI`;



let textResult = teksts.charAt(1);
 textResult = teksts[2];
 textResult = teksts.slice(5,-5);
 textResult = teksts.slice(0,-5);
 textResult = teksts.split("");
 textResult = teksts.split("i");
 textResult = teksts.toUpperCase();
 textResult = teksts.trim();
 textResult = teksts.replace("Math.PI","Matemātiskais PI");   
 textResult = teksts.replaceAll(" ","::::");   
    // teksts.match();


textResult = teksts.length;

 






document.write("<br>"+textResult);
console.log(textResult);

// document.write(html);
// document.write(img);
// document.write(table);










