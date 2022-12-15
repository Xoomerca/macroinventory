//autocomplete

const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 

let names = [
  "Sistema de inventario",
  "catalogo web de productos",
  "curso de excel",
  "curso personalizado de ingles",
  "clases de quimica",
  "diseño y asesoria en excel",
  "generador de catalogos en pdf",
  "programacion web",
  "programacion sql",
  "programacion c#",
];
//Sort names in ascending order
let sortedNames = names.sort();

//reference
let input = document.getElementById("myInput");

/*Execute function on keyup
input.addEventListener("keyup", (e) => {
  //loop through above array
  //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
  removeElements();
  for (let i of sortedNames) {

    i = removeAccents(i);
    i = i.toLowerCase();

    var pal = i.split(" ");

    let mistring = input.value.toLowerCase();
    mistring = removeAccents(mistring)
    //convert input to lowercase and compare with each string

    if (
      i.startsWith(mistring) && input.value != ""
    ) {
      //create li element
      let listItem = document.createElement("li");
      //One common class name
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames('" + i + "')");
      //Display matched part in bold
      let word = "<b>" + i.substr(0, input.value.length) + "</b>";
      word += i.substr(input.value.length);
      //display the value in array
      listItem.innerHTML = word;
      document.querySelector(".list").appendChild(listItem);
    }
  }
});
*/


function displayNames(value) {
  input.value = value;
  myFunction();
  removeElements();
}
function removeElements() {
  //clear all the item
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}

  
  
  
  function showPreview(event){
    if(event.target.files.length > 0){
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById("file-ip-1-preview");
      preview.src = src;
      preview.style.display = "block";
    }
  }
  
  // live search
  function myFunction() {

    removeElements();
    // Declare variables
    var filter1 = "";
    var filter2 = "";
    var filter3 = "";
    var filter4 = "";

    var input, filter, i, txtValue, divmain;
    input = document.getElementById("myInput");
    filter = input.value.toLowerCase();
    filter = removeAccents(filter);

    /*if(filter === ""){      
      return;
    }
    */

    var filterU = filter.split(" ");
    filter1 = filterU[0];
  
    if(filterU[1] !== undefined)
    {
    filter2 = filterU[1];
    }
  
    if(filterU[2] !== undefined)
    {
    filter3 = filterU[2];
    }
  
    if(filterU[3] !== undefined)
    {
    filter4 = filterU[3];
    }
  
    divmain = document.getElementById("mydiv");
    div = divmain.getElementsByTagName("div");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < div.length; i++) 
    {
      h3 = div[i].getElementsByTagName("h3")[0];
      if (h3) {
        txtValue = h3.textContent || h3.innerText;
        txtValue = txtValue.toLowerCase();
        txtValue = removeAccents(txtValue);
        if (txtValue.indexOf(filter1) > -1 && txtValue.indexOf(filter2) > -1 && txtValue.indexOf(filter3) > -1 && txtValue.indexOf(filter4) > -1) {
          div[i].style.display = "";

          
      //create li element
      let listItem = document.createElement("li");
      //One common class name
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames('" + txtValue + "')");

      //Display matched part in bold
      /*
      let word = "<b>" + txtValue.substr(0, input.value.length) + "</b>";
      word += txtValue.substr(input.value.length);
      //display the value in array
      */
     let word = txtValue
      listItem.innerHTML = word;
      document.querySelector(".list").appendChild(listItem);

      if(filter === ""){      
        removeElements();
      }


        } else {
          div[i].style.display = "none";
        }
      }
    }
  }

  function clearInput(){
    let entrada = document.getElementById("myInput");
    entrada.value="";
    myFunction();
    entrada.focus();
    removeElements();
  }



  
