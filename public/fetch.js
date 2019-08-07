const fetch = (input) => {
  const input = encodeURIComponent(input);
  //Clean the input and prevent script injections
  const url = `/query?=${input}`;
  fetch(url)
  .then(res => res.json())
  .then(json => resToFrontEnd(input, json))
}

const resToFrontEnd = (input, json) => {
  //Removes old data

  //Case if results are NULL

  // Case populating the dom


}
