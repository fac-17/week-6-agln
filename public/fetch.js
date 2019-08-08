const domRequest = (url) => {
  // let userInput = encodeURIComponent(input);
  //Clean the input and prevent script injections
  fetch(url)
  .then(res => res.json())
  .then(json => resToFrontEnd(input, json))
}

let submit = document.querySelector('#submit__button');
submit.addEventListener('click', (e) => {
  let name = document.querySelector('#membername').value;
  let listOfCategories = document.querySelectorAll('.radioButton');
  console.log(listOfCategories);
let selected = [];
listOfCategories.forEach(element => {
if (element.checked === true) {
  selected.push(element.value);
};
});


  const url = `/query?=${name}&${selected[0]}&${selected[1]}&${selected[2]}`;
  console.log(url);
  domRequest(url);
})

const resToFrontEnd = (input, json) => {
  //Removes old data

  //Case if results are NULL

  // Case populating the dom


}
