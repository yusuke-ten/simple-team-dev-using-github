function sampleFunction(array, keyword) {
  return array.filter((value) => value === keyword)[0];
}

const result = sampleFunction(["john", "bob", "alice"], "bob");

console.log(result);
