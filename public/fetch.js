let responseOutput = [];

let submit = document.querySelector("#submit__button");
submit.addEventListener("click", e => {
  let name = document.querySelector("#membername").value;
  let listOfCategories = document.querySelectorAll(".radioButton");
  let selected = [];
  listOfCategories.forEach(element => {
    if (element.checked === true) {
      selected.push(element.value);
    }
  });

  const url = `/query?=${name}&${selected[0]}&${selected[1]}&${selected[2]}`;
  domRequest(url);
});

const domRequest = url => {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      responseOutput = JSON.parse(xhr.responseText);
      console.log(responseOutput[0].glan_name);

      responseOutput.forEach((e, i)=> {
        if(e.warrior_name === name) {
          alert(e.glan_name);
        }
      })
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};

let getGlan = document.getElementById("getGlan");
getGlan.onclick = function() {
  domRequest("/getGlan");
};
