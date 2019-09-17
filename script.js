const wave = (a) => {
    var narr =[]
    var word = ""
    var it = 0

// a.split("").forEach((letter, i) => {
    
//     if(letter === " " || letter === ""){
//         a.split("").splice(i,i)
//     }
//     console.log(a,letter,i)
// })



var aCopy = a.split("")


 const pushThis = (str) => {
 a.split("").map((letter,i)=>{
   
//    console.log(a.split("").indexOf(letter, i) , i)
   if(aCopy.indexOf(letter, i) === it){
    word += letter.toUpperCase()
   }else{
     word += letter.toLowerCase()
 }
 if(i === aCopy.length - 1){
    it++
   }
 })
 
 narr.push(word)
 word = ""
 }

 aCopy.forEach(a=>{
     pushThis(a)
 })
console.log(narr)
}

  wave(" hello")
