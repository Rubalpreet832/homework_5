var input = process.argv.slice(2)
console.log(input);
let landowner=input[0];
console.log(landowner);

     if(landowner.slice(0,4) == 'Lord' || landowner.slice(0,4) == 'lord' || landowner.slice(0,4) == 'Lady' || landowner.slice(0,4) == 'lady')
      {
        console.log(landowner.slice(0,4));
         console.log( landowner + 'is a landowner');
       }
       else 
       {
        console.log(landowner.slice(0,4));
        console.log(landowner + 'is not a landowner');
       }












