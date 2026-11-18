// Convert Characters at Odd Indexes to Uppercase

//input - hello

//output - hElLo

let word = "hello";
let newWord ="";

for(let i=0; i<word.length; i++){
    if(i%2!==0){
        newWord += word[i].toUpperCase();
    } else {
        newWord += word[i];
    }

}
console.log(newWord);