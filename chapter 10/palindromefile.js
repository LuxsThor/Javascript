#!/usr/local/bin/node

let fs = require("fs");
let Phrase = require("mhartl-palindrome");
let palindromestxt = "C:\Users\Lucas\Documents\Udacity Full Stack\Java Script\chapter 10\palindromes.txt"
let file = new File(palindromestxt);

let text = fs.readFileSync("phrases.txt", "utf-8");

palindromeslist.open("w");

text.split("\n").forEach(function(line) {
  let phrase = new Phrase(line);
  if (phrase.palindrome()) {
    console.log("palindrome detected:", line);
    file.writeln(line);
  }
});

file.close();

let palindromeslist = "C:\Users\Lucas\Documents\Udacity Full Stack\Java Script\chapter 10\palindromes.txt"
