function palindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, '');
  str = str.toLowerCase();
  for(let i = 0; i < str.length / 2; i++)
  {
    if(str[i] != str[str.length - 1 - i]) return false;
  }
  return true;
}

palindrome("A man, a plan, a canal. Panama");