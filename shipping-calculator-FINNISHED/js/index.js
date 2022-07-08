// Get Reference Variables to the input and label elements
const calculateButton = document.querySelector("label");
const rateCalculator = document.querySelector('form')
const shippingWeight = document.querySelector("input");
const shippingRateDisplay = document.querySelector(".rate");
const warning = document.querySelector(".warning");
const rateDisplay = document.querySelector('.rate')
const shippingRate = 11.75;
 

//  Event
rateCalculator.addEventListener("submit", function (e) {
  // prevent the default behaviour of the form.  
  e.preventDefault()
  // remove white space from the input by using the string trim() method
  let userInput = Number(shippingWeight.value.trim());
 
  if(isNaN(userInput)){
    warning.classList.remove('hide')
    warning.querySelector('span').textContent = "a numeric weight is required "
  }else{
      warning.classList.add('hide');   
     rateDisplay.textContent = `$${(userInput*shippingRate).toFixed(2)}`
  }
   
 
   shippingWeight.addEventListener('input', function(e){
    warning.classList.add('hide')
  })
  shippingWeight.addEventListener('focus', function(e){
    warning.classList.add('hide')
    e.target.value=""
  })
})