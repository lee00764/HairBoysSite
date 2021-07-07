//<-------------Start function to calculate totals for products-------------->
// Calculate the total of each product on their individual product page.
function calcTotal(quantity){
  var totalValue = document.querySelector('#totalValue');
  var price = document.querySelector('#price').getAttribute('value');
  var total = quantity * price;

  //Return the value to the HTML span
  totalValue.innerHTML = total;
}
//<-------------End function to calculate totals for products-------------->


//<-------------Start function for search bar-------------->
function searchfilter() {
    var userinput = document.getElementById('searchbar').value
    userinput = userinput.toLowerCase();
    var word = document.getElementsByClassName('menuprod');

    for (i = 0; i < word.length; i++) {
        if (!word[i].innerHTML.toLowerCase().includes(userinput)) {
            word[i].style.display="none";
        }
        else {
            word[i].style.display="list-item";
        }
    }
}
//<-------------End function for search bar-------------->
