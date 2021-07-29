const isPangram = (string) => 
     new Set(string.toLowerCase().match(/[a-z]/g)).size === 26;

console.log(isPangram("abcdefghijklmnopqrstuvwxyz"));  //true
console.log(isPangram("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")); //false
