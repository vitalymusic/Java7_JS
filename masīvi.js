let arr1 = [];



arr1.push("str");
arr1.push(123);
arr1.push(true);
arr1.push([1,2,3]);
arr1.push({user:"Janis",mail:"user@inbox.lv"});

console.log(arr1);

arr1.pop();

arr2 = [1,2,3,4,15,20]
arr2.sort();


// skaitļu sakārtošana
arr2.sort(function(a,b){
    return a-b;
});

console.log(arr2);


let result1 = arr1.filter(function(item){
    if(item=="str"){
        return item;
    }
});

 result1 = arr2.find(function(item){
    if(item>10) return item;
 })

 result1 = arr2.filter(function(item){
    if(item>10) return item;
 })


 for(item of arr2){
    document.write(`<h1>${item}</h1>`);
 }

 arr2.map(function(item,i,arr){
    document.write(`<p>${i} ${item} ${arr}</p>`);
 })

let sum = 0;
 arr2.forEach(function(item){
    sum+=item;
 })

 console.log(sum);






console.log(result1);
// shift()  unshift()


