//Create a class constructor for Product that will hold their values
class Product {
  constructor (image, name, hold, shine, scent, rating, stars, price){
  this.image = image;
  this.name = name;
  this.hold = hold;
  this.shine = shine;
  this.scent = scent;
  this.rating = rating;
  this.stars = stars;
  this.price = price;
  }
}

//Create an array for the products
var prodArray = [];
prodArray[0] = new Product(
  "<div class='peakprod'><a href='productarcadian.html'><img src='./images/arcadian.jpg'></a></div>",
  "Arcadian Matte Paste",
  "Firm",
  "Matte",
  "Citrus and Wood",
  "5",
  "<img src = 'images/5stars.jpg'>",
  "30");
prodArray[1] = new Product(
  "<div class='peakprod'><a href='productflagship.html'><img src='./images/flagship.jpg'></a></div>",
  "Flagship Dead Sea Clay",
  "Firm",
  "Matte",
  "Floral Spice",
  "3",
  "<img src = 'images/3stars.jpg'>",
  "30");
prodArray[2] = new Product(
  "<div class='peakprod'><a href='productshearrevival.html'><img src='./images/shearrevival.jpg'></a></div>",
  "Shear Revival American Gardens",
  "Firm",
  "Matte",
  "Orange and Oak",
  "5",
  "<img src = 'images/5stars.jpg'>",
  "30");
prodArray[3] = new Product(
  "<div class='peakprod'><a href='productgrimgrease.html'><img src='./images/grimgreasegreen.jpg'></a></div>",
  "Grim Grease Medium",
  "Medium",
  "Low",
  "Cologne",
  "5",
  "<img src = 'images/5stars.jpg'>",
  "25");
prodArray[4] = new Product(
  "<div class='peakprod'><a href='productlockharts.html'><img src='./images/lockharts.jpg'></a></div>",
  "Lockhart's Gonzo Grease",
  "Heavy",
  "High",
  "Spicy",
  "4",
  "<img src = 'images/4stars.jpg'>",
  "25");
prodArray[5] = new Product(
  "<div class='peakprod'><a href='productreuzel.html'><img src='./images/reuzelmatte.jpg'></a></div>",
  "Reuzel Matte Pomade",
  "Medium",
  "Low",
  "Chocolate Mint",
  "3",
  "<img src = 'images/3stars.jpg'>",
  "20");
prodArray[6] = new Product(
  "<div class='peakprod'><a href='productarcadianstyling.html'><img src='./images/arcadianstyling.jpg'></a></div>",
  "Arcadian Styling Pomade",
  "Medium",
  "High",
  "Fresh Citrus",
  "2",
  "<img src = 'images/2stars.jpg'>",
  "25");
prodArray[7] = new Product(
  "<div class='peakprod'><a href='productdapperboy.html'><img src='./images/dapperboy.jpg'></a></div>",
  "Dapper Boy Pomade",
  "Medium",
  "High",
  "Tobacco Vanilla",
  "2",
  "<img src = 'images/2stars.jpg'>",
  "15");
prodArray[8] = new Product(
  "<div class='peakprod'><a href='productgrimgreasematte.html'><img src='./images/grimgreasematte.jpg'></a></div>",
  "Grim Grease Matte Cream",
  "Heavy",
  "Matte",
  "Summer Blend",
  "4",
  "<img src = 'images/4stars.jpg'>",
  "25");
prodArray[9] = new Product(
  "<div class='peakprod'><a href='productreuzelgreen.html'><img src='./images/reuzelgreen.jpg'></a></div>",
  "Reuzel Green Pomade",
  "Medium",
  "High",
  "Green Apples",
  "1",
  "<img src = 'images/1stars.jpg'>",
  "10");

//<-------------------------Start JS for results page------------------------->

//Sort products by price, low to high
function sortPriceLowHighFunction(){
  prodArray.sort(function (low, high){return low.price - high.price});
  displayProds();
}

//Sort products by price, high to low
function sortPriceHighLowFunction(){
  prodArray.sort(function (a, b){return b.price - a.price});
  displayProds();
}

//Sort products by rating, low to high
function sortRatingLowHighFunction(){
  prodArray.sort(function (low, high){return low.rating - high.rating});
  displayProds();
}

//Sort products by rating, high to low
function sortRatingHighLowFunction(){
  prodArray.sort(function (low, high){return high.rating - low.rating});
  displayProds();
}

//Show all products
function showAll(){
  var result = document.querySelector(".sortResult");
  for (let i = 0; i < prodArray.length; i++){
    result.innerHTML +=
     prodArray[i].image + "<b>" + prodArray[i].name + "</b>" + " $" + prodArray[i].price + "<br>" + prodArray[i].stars + "<br><br>"
  }
}

//A display of products to allow the sort functions to sort the products
function displayProds(){
    var result = document.querySelector(".sortResult");
    result.innerHTML =
      prodArray[0].image + "<b>" + prodArray[0].name + "</b>" + " $" + prodArray[0].price + "<br>" + prodArray[0].stars + "<br><br>" +
      prodArray[1].image + "<b>" + prodArray[1].name + "</b>" + " $" + prodArray[1].price + "<br>" + prodArray[1].stars + "<br><br>" +
      prodArray[2].image + "<b>" + prodArray[2].name + "</b>" + " $" + prodArray[2].price + "<br>" + prodArray[2].stars + "<br><br>" +
      prodArray[3].image + "<b>" + prodArray[3].name + "</b>" + " $" + prodArray[3].price + "<br>" + prodArray[3].stars + "<br><br>" +
      prodArray[4].image + "<b>" + prodArray[4].name + "</b>" + " $" + prodArray[4].price + "<br>" + prodArray[4].stars + "<br><br>" +
      prodArray[5].image + "<b>" + prodArray[5].name + "</b>" + " $" + prodArray[5].price + "<br>" + prodArray[5].stars + "<br><br>" +
      prodArray[6].image + "<b>" + prodArray[6].name + "</b>" + " $" + prodArray[6].price + "<br>" + prodArray[6].stars + "<br><br>" +
      prodArray[7].image + "<b>" + prodArray[7].name + "</b>" + " $" + prodArray[7].price + "<br>" + prodArray[7].stars + "<br><br>" +
      prodArray[8].image + "<b>" + prodArray[8].name + "</b>" + " $" + prodArray[8].price + "<br>" + prodArray[8].stars + "<br><br>" +
      prodArray[9].image + "<b>" + prodArray[9].name + "</b>" + " $" + prodArray[9].price + "<br>" + prodArray[9].stars + "<br><br>"
}

//<-------------------------End JS for search page------------------------->

//<-------------------------Start JS for individual products page------------------------->
function indivProdDesc(){
  var prodPage = document.querySelector(".productintro").getAttribute("value");
  var description = document.getElementById("proddescription");

  if (prodPage == "arcprod") {
    description.innerHTML =
      "<b>Hold: </b>" + prodArray[0].hold + "<br>" +
      "<b>Shine: </b>" + prodArray[0].shine + "<br>" +
      "<b>Scent: </b>" + prodArray[0].scent + "<br>" +
      "<b>Rating: </b>" + prodArray[0].stars + "<br><br>";
  }
  else if(prodPage == "flagprod") {
    description.innerHTML =
      "<b>Hold: </b>" + prodArray[1].hold + "<br>" +
      "<b>Shine: </b>" + prodArray[1].shine + "<br>" +
      "<b>Scent: </b>" + prodArray[1].scent + "<br>" +
      "<b>Rating: </b>" + prodArray[1].stars + "<br><br>";
  }
  else if(prodPage == "shearprod") {
    description.innerHTML =
      "<b>Hold: </b>" + prodArray[2].hold + "<br>" +
      "<b>Shine: </b>" + prodArray[2].shine + "<br>" +
      "<b>Scent: </b>" + prodArray[2].scent + "<br>" +
      "<b>Rating: </b>" + prodArray[2].stars + "<br><br>";
  }
  else if(prodPage == "gggprod") {
    description.innerHTML =
      "<b>Hold: </b>" + prodArray[3].hold + "<br>" +
      "<b>Shine: </b>" + prodArray[3].shine + "<br>" +
      "<b>Scent: </b>" + prodArray[3].scent + "<br>" +
      "<b>Rating: </b>" + prodArray[3].stars + "<br><br>";
  }
  else if(prodPage == "lockprod") {
    description.innerHTML =
      "<b>Hold: </b>" + prodArray[4].hold + "<br>" +
      "<b>Shine: </b>" + prodArray[4].shine + "<br>" +
      "<b>Scent: </b>" + prodArray[4].scent + "<br>" +
      "<b>Rating: </b>" + prodArray[4].stars + "<br><br>";
  }
  else if(prodPage == "reuzprod") {
    description.innerHTML =
      "<b>Hold: </b>" + prodArray[5].hold + "<br>" +
      "<b>Shine: </b>" + prodArray[5].shine + "<br>" +
      "<b>Scent: </b>" + prodArray[5].scent + "<br>" +
      "<b>Rating: </b>" + prodArray[5].stars + "<br><br>";
  }
  else if(prodPage == "arcstylingprod") {
    description.innerHTML =
      "<b>Hold: </b>" + prodArray[6].hold + "<br>" +
      "<b>Shine: </b>" + prodArray[6].shine + "<br>" +
      "<b>Scent: </b>" + prodArray[6].scent + "<br>" +
      "<b>Rating: </b>" + prodArray[6].stars + "<br><br>";
  }
  else if(prodPage == "dapperboyprod") {
    description.innerHTML =
      "<b>Hold: </b>" + prodArray[7].hold + "<br>" +
      "<b>Shine: </b>" + prodArray[7].shine + "<br>" +
      "<b>Scent: </b>" + prodArray[7].scent + "<br>" +
      "<b>Rating: </b>" + prodArray[7].stars + "<br><br>";
  }
  else if(prodPage == "grimgreasematteprod") {
    description.innerHTML =
      "<b>Hold: </b>" + prodArray[8].hold + "<br>" +
      "<b>Shine: </b>" + prodArray[8].shine + "<br>" +
      "<b>Scent: </b>" + prodArray[8].scent + "<br>" +
      "<b>Rating: </b>" + prodArray[8].stars + "<br><br>";
  }
  else if(prodPage == "reuzelgreenprod") {
    description.innerHTML =
      "<b>Hold: </b>" + prodArray[9].hold + "<br>" +
      "<b>Shine: </b>" + prodArray[9].shine + "<br>" +
      "<b>Scent: </b>" + prodArray[9].scent + "<br>" +
      "<b>Rating: </b>" + prodArray[9].stars + "<br><br>";
  }
}
//<-------------------------End JS for individual products page------------------------->
