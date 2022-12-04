function convertToRoman(num) {
    // created an obj of roman numeral conversion for easy referencing
    const convTable = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    }
    
    // created a for loop to scan through the conversion obj and pass the value to the romanNum var to return later
    let romanNum = '';
    for (let i in convTable) {
      while (num >= convTable[i]) {
        romanNum += i
        num -= convTable[i]
      }
    }
    return romanNum;
  }