//Skapar en array med random food i form av olika strängar.
const food = [
    "Makaronpudding",
    "Kyckling och currysås",
    "Falafelrulle",
    "Yakiniku med ris",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ];
  //Hämtar en knapp
  let randomBtn = document.querySelector("#btn-random");
  
  //Skapa en function
  function getRandomFood() {
    //Skapar en random lista utifrån arrayens längd
    let randomFood = Math.floor(Math.random() * food.length);
  
    //Ser till att en maträtt skrivs ut på sidan med id ="generate-random-food"
    document.getElementById("generate-random-food").innerHTML = food[randomFood];
  }
  //genom addEventListener berättar vi att när man klickar på knappen så körs funktionen getRandomFood.
  randomBtn.addEventListener("click", getRandomFood);
