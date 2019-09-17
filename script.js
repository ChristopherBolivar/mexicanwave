function wave(a){
    var narr =[]
    var word = ""
    var it = 0

//     //looping thru passed argument
//     a.split("").forEach(b => {
//     //passing the argument to the function pushThis
//      pushThis(a.toString().replace(/,/g,""))
     
//      })
     
//     function pushThis (str){  
//     //looping thru passed argument
//      str.split("").forEach(c =>{
//         // logging index of each character
//          console.log(str.indexOf(c), c)
//          //conditionals matching index to counter iterarator
//         if((str.indexOf(c)) === it){
//             word += c.toUpperCase()
//         }else{
//           word += c.toLowerCase()
//         }
      
//      })

//      it++ //increasing iterator each time function is called
//      narr.push(word) //pushing word to new array
//      word = "" //clearing word variable
// }   
    
   
 a.split("").map((letter,i)=>{
   let aCopy = a.split("")
   
//    console.log(a.split("").indexOf(letter, i) , i)
   if(i === aCopy.length - 1){
    it++
   }
   if(aCopy.indexOf(letter, i) === it){
    word += letter.toUpperCase()
   }else{
     word += letter.toLowerCase()
 }
 
   console.log(it , aCopy.indexOf(letter, i))
 })

narr.push(word)
console.log(narr)
}

  wave("hello")
