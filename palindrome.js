function reverse(string) {
  let intoarray = string.split("");
  let reversearray = intoarray.reverse();
  let backtostring = reversearray.join("");
  return backtostring;
}

function palindrome(string){
  if (reverse(string).toLowerCase === string.toLowerCase){
    return "is palindrom"
  }
  else{
    return "is not a palindrome"
  }
}

function emailparts(email){
  let parts = email.split("@");
  let username = parts[0];
  let domain = parts[1];
  return `The username is ${username} and the domain is ${domain}`;
}
