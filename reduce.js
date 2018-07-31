let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let words = ["live", "liver", "Randy", "fucking Mariann!", "leave me alone"]

  console.log(numbers.reduce((total, n) => {
    return total += n;
  }, 0))


function imperativeSum(numbers){
  let sum = 0;
  numbers.forEach(function(numbers){
    sum += numbers;
  })
  return sum;
}

//console.log(imperativeSum(numbers));


function imperativeLengths(wordslist){
  let lengthdict = {} //initialize empty object
  wordslist.forEach(function(word) {
    lengthdict[word] = word.length;
  })
  return lengthdict
}

//console.log(imperativeLengths(words));
//console.log(words.reduce((dictlength, n) => {return dictlength[n] = n.length }, {}))

function product(numbers){
  let product = 1;
  numbers.forEach(function(number){
    product *= number
  })
  return product;
}

function functionalproduct(numbers){
  return numbers.reduce((product, number) => {
    product *= number;
    return product;
  }, 1)
}

console.log(functionalproduct(numbers));
console.log(product(numbers));
