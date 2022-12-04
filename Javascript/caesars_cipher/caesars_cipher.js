function rot13(str) {
    // string var to store ciphered text
    let cipheredText = '';
  
    // for loop on every char of string
    for (let i = 0; i < str.length; i++) {
      // if alphabetic char and less than 65-'A'
      if (/\w/.test(str[i]) && str.charCodeAt(i) - 13 < 65) {
        cipheredText += String.fromCharCode(str.charCodeAt(i) - 13 + 26)
        // else if alphabetic char and not not less than 65-'A'
      } else if (/\w/.test(str[i]) && str.charCodeAt(i) - 13 >= 65) {
        cipheredText += String.fromCharCode(str.charCodeAt(i) - 13)
        // else if non alphabetic char don't cipher
      } else {
        cipheredText += str[i];
      }
    }
    return cipheredText;
}
