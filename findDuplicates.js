//Finding duplicates in Array 


const numbers=[10, 20, 10, 30, 20, 40, 10];
const duplicates=[];

for(let i=0; i<numbers.length; i++){
    for(let j=i+1; j<numbers.length; j++){
        if(numbers[i]===numbers[j] && !duplicates.includes(numbers[i])) {
            duplicates.push(numbers[i]);
     
        }
    }
}
console.log("Duplicates: " + duplicates);
        