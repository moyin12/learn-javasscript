const displayEl = document.getElementById("display")


  fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
  
        displayEl.innerHTML = data.fact;
      });