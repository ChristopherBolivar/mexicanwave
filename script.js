function wave(a){
    var narr =[]
    let rarr =[]
    var word = ""
    var count = 0
    var it = 0
    function pushThis (str){  
     str.split("").forEach(c =>{
        if(str.indexOf(c) != it){
            word += c
        }else {
          word += c.toUpperCase()
        }
        if(str.indexOf(str[count]) === (a.length -1) ){
            count++
        }
     })

     it++
     rarr.push(word)
     word = ""
}   
    a.split("").forEach(b => {
        pushThis(a.toString().replace(/,/g,""))
     })
    console.log(rarr)
    
  }
  wave("hello")
