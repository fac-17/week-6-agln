const domRequest = (input) => {
  let name = document.querySelector('#membername').value;
  let cat1 = document.querySelector('#wise').value;
  let cat2 = document.querySelector('#brave').value;
  let cat3 = document.querySelector('#magical').value;
  console.log(`/query?=${name}&${cat1}&${cat2}&${cat3}`);

  let userInput = encodeURIComponent(input);
  //Clean the input and prevent script injections
  const url = `/query?=${name}&${cat1}&${cat2}&${cat3}`;
  fetch(url)
  .then(res => res.json())
  .then(json => resToFrontEnd(input, json))
}

let submit = document.querySelector('.form__submit');
submit.addEventListener('click', (e) => {
  domRequest(input.value)
})

const resToFrontEnd = (input, json) => {
  //Removes old data

  //Case if results are NULL

  // Case populating the dom


}
