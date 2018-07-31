// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }

  // Returns the letters in the content.
  // For example:
  //   new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
  let theLetters = [];
  for (let i = 0; i < this.content.length; i++) {
    if (this.content.charAt(i).match(/[a-zA-Z]/)) { //eliminate duplication of .charAt[i]
      theLetters.push(this.content.charAt(i));
    }
  }
  return theLetters.join("");
}

  this.palindrome = function palindrome() {
    return this.processedContent() === reverse(this.processedContent());
  }
}

let myphrase = new Phrase("Racecar")

console.log(myphrase.content);
console.log(myphrase.palindrome());
console.log(myphrase.processedContent());

function translatedphrase(content, translation){
  this.content = content;
  this.translation = translation;
  this.processedContent = function processedContent() {
    return this.translation.toLowerCase();
  }
}

//tranlatedphrase inherits palindrom from phrase
translatedphrase.prototype = new Phrase;

let magicphrase = new translatedphrase("düsi", "racecar")
console.log(magicphrase.palindrome());
