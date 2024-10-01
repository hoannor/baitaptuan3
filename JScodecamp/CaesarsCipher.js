function rot13(str) {
  let reCode = '';
  for(let i = 0; i < str.length; i++)
  {
    let code = str[i].charCodeAt(0);
    if(code >= 65 && code <= 90)
    {
      code = (code - 13);
      if(code <  65)
        code = code + 26;
      reCode = reCode + String.fromCharCode(code);
      continue;
    }
    if(code >= 97 && code <= 122)
    {
       if(code <  97)
        code = code + 26;
      reCode = reCode + String.fromCharCode(code);
       continue;
    }
    reCode = reCode + str[i];
  }
  console.log(reCode);
  return reCode;
}

rot13("SERR PBQR PNZC");