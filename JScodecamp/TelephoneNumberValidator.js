function telephoneCheck(str) {
    const validPhoneNumberPattern = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
      return validPhoneNumberPattern.test(str);
  }
  
  telephoneCheck("555-555-5555");