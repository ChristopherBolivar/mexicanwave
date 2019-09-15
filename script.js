function wave(a){
    console.log(a)
    let count = 0;
    let narr =[]
    a.split("").forEach(b => {
        // console.log(b)
      if(a.indexOf(b) === count){
          console.log(true)
      }
    })
  }
  wave("hello")
