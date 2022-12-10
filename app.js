
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
    // Declare variables
    var filter1 = "";
    var filter2 = "";
    var filter3 = "";
    var filter4 = "";

    var input, filter, i, txtValue, divmain;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
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
        if (txtValue.toUpperCase().indexOf(filter1) > -1 && txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue.toUpperCase().indexOf(filter3) > -1 && txtValue.toUpperCase().indexOf(filter4) > -1) {
          div[i].style.display = "";
        } else {
          div[i].style.display = "none";
        }
      }
    }
  }
  
