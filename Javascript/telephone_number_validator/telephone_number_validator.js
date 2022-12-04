function telephoneCheck(str) {
    // using regex to validate telephone number
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})(\s|-)?(\d{3})(\s|-)?(\d{4})$/;
    return regex.test(str) ? true : false
}
  