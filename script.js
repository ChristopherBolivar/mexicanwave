const wave = (a) => {
    var narr =[]
    var word = ""
    var it = 0
    var aCopy = a.split("")

var filtered = aCopy.filter(w =>{
  if(w != " "){
    return w
  }
})
console.log(filtered)

 const pushThis = (str) => {
 filtered.map((letter,i)=>{
   
//    console.log(a.split("").indexOf(letter, i) , i)
   if(filtered.indexOf(letter, i) === it){
    word += letter.toUpperCase()
   }else{
     word += letter.toLowerCase()
 }
 if(i === filtered.length - 1){
    it++
   }
 })
 
 narr.push(word)
 word = ""
 }

 filtered.forEach(a=>{
     pushThis(a)
 })
return narr

}

  wave(" hello")
