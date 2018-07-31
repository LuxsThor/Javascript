// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Returns true for a palindrome, false otherwise.
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}

function phrase(content) {
  this.content = content;
  this.palin = function palindrome() {
    let lowercasestuff = this.content.toLowerCase();
    return (reverse(lowercasestuff) === lowercasestuff);};
  this.louder = this.content.toUpperCase();
  }

  function Person(first, last, age, eyecolor) {
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.eyeColor = eyecolor;
      this.name = function namecreation() {return this.firstName + " " + this.lastName;};

  }

  let jo = new Person("John", "Dryer", "30", "blue");
  let check = new phrase("Racecar")

  console.log(check.palin());
  console.log(jo.name());
