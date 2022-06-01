const nums = [1,2,3,4,5];
let numberoutput = nums.map((elem)=>{
    return elem*elem
})
console.log(numberoutput);
// to uppercase 

const names = ["alice","bob","charlie","danielle"];
let capt= names.map((elem)=>{
    return elem[0].toUpperCase() + elem.slice(1);
})

console.log(capt);
// wrap every element in the p tag 
const poke = ["bulb","char","squir"];

const paragraph = poke.map((elem)=>{
    return `<p> ${elem}</p>`
})
console.log(paragraph)