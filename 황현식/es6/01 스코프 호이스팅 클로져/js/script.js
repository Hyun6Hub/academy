
function fn(){
  const a = 1
  if(a === 1) {
    const a = 2
  } 
  console.log(a);//var 2, let 1
}


fn()//1
