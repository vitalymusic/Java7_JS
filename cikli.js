// Cikli (loops)

// don't repeat yourself

// while
// nosacījums = x<10;


let x=100;
// while(x<=10){
//     // Darbība
//     // document.write(`<a href="">Hipersaite${x+1}</a>`);
//     // x++;
// }

do{
    // Neatkarīgi no nosacījuma izpilda darbību vismaz vienu reizi
    document.write(`<a href="">Hipersaite${x++}</a>`);
}
while(x<=10);

let url = "https://placehold.co/400";


// for(let j = 100;j>0;j--){
//     document.write(`<img src="img${j}.jpg">`);

// }

for(let i = 0;i<5;i++){
    document.write(`<div>`);
        for(let k = 0;k<3;k++){
            document.write(`<img src="${url}" style="margin:10px">`);
        }
    document.write(`</div>`);

}

