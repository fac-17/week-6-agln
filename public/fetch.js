let responseOutput = [];

let submit = document.querySelector("#submit__button");
submit.addEventListener("click", e => {
  let name = document.querySelector("#membername").value;
  let listOfCategories = document.querySelectorAll(".radioButton");
  console.log(listOfCategories);
  let selected = [];
  listOfCategories.forEach(element => {
    if (element.checked === true) {
      selected.push(element.value);
    }
  });

  const url = `/query?=${name}&${selected[0]}&${selected[1]}&${selected[2]}`;
  console.log(url);
  domRequest(url);
});

const domRequest = url => {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      responseOutput = JSON.parse(xhr.responseText);
      resToFrontEnd(responseOutput);
      console.log(responseOutput);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};

const resToFrontEnd = json => {
  //Removes old data
  //Case if results are NULL
  // Case populating the dom
};
