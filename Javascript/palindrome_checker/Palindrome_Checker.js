function palindrome(str) {
    // removed the non alphabetic characters and spaces by using String.replaceAll method with regex and converted to lowercase for simplicity
    let filteredStr = str
      .replaceAll(/\W|\s|_/g, '')
      .toLowerCase()
  
    // reversed the filtered string for comparison using for loop
    let reversedStr = '';
    for (let i = filteredStr.length - 1; i >= 0; i--) {
      reversedStr += filteredStr[i]
    }
    
    // if str is palindrome return true else false
    return filteredStr === reversedStr ? true : false;
  }