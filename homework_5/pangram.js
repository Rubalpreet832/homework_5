function pangrams(s) {

    const exp = /[a-z]/gi; 
 
    if (s.includes(exp)) {
      return 'pangram';
    } else {
      return 'not pangram';
    } 
    
 }