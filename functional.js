let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];


function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(element.toLowerCase().split(/\s+/).join("-"));
  });
  return urls;
}


function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}

let urlified = functionalUrls(states);

function generateURLS(elements) {
  return `www.example.com/${elements}`
}

function functionalgenerateURL(elements){
  return elements.map(element =>  generateURLS(element));
}

let singlewordstates = states.filter(state => state.split(/\s+/).length === 1);

console.log(urlified);
console.log(functionalgenerateURL(urlified));
console.log(singlewordstates);
