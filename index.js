class Mortgage {
  constructor(mortgageDetails) {
    this.principal = mortgageDetails.principal;
    this.interest = mortgageDetails.interest;
    this.years = mortgageDetails.years;
    this.calculateRate();
  }
  calculateRate() {
    if (!isNaN(this.principal) || !isNaN(this.interest) || !isNaN(this.years)) {
      document.querySelector("#monthlyRate").innerText = "invalid input";
    }
    let n = this.years * 12;
    let p = this.principal;
    let i = this.interest/12/100;
    let numerator = p*(i*Math.pow((1+i),n));
    let denominator = Math.pow((1+i),n)-1;
    this.monthlyRate = ((numerator/denominator).toFixed(2));
  }
  processInput(e) {
    let elementId = e.target.id;
    let value = e.target.value.replace(/\,|\$|\%/gi,"");
    if (this.validateInput(elementId,Number(value))) { 
      this[elementId] = e.target.value 
      this.calculateRate();
      document.querySelector("#monthlyRate").innerText = this.monthlyRate;
      this.updateImage();
    }
  }
  updateImage() {
    let imgElement = document.querySelector("#mtgImg");
    let i = this.interest;
    let imgNum;
    if      (i<= 3)           { imgNum = 1; }
    else if (i > 3 && i <= 4) { imgNum = 2; }
    else if (i > 4 && i <= 5) { imgNum = 3; }
    else if (i > 5 && i <= 6) { imgNum = 4; }
    else                      { imgNum = 5; }
    imgElement.src = `assets/mtg0${imgNum}.png`;
  }
  validateInput(elementId,value) {
    if (isNaN(value)) { 
      document.querySelector(`#${elementId}`).className = "invalid";
      return false;
    }
    else {
      document.querySelector(`#${elementId}`).className = "";
      return true;
    }
  }
}

const loadListener = window.addEventListener('load',()=>{
    document.querySelector("#principal").focus();
    const myMortgage = new Mortgage({name:"Buddy",principal:200000,interest:0.05,years:30});
    inputListener = document.querySelector("#mainForm").addEventListener('input',(e)=>{
      myMortgage.processInput(e);
    })
})

// 🏡 Task 3: Function
/* Create a function called `mortgageCalculator` that combines all of the steps from task 1 and 2 and returns a sentence "{Name}, your monthly rate is ${monthlyRate}"

If your name is `Oscar` mortgageCalculator() should return "Oscar, your monthly rate is 1073.64"
*/


function mortgageCalculator() {
    let cName = window.prompt("Your name:");
    let cPrincipal = window.prompt("mortgage principal amount ($):");
    let cInterest = window.prompt("mortgage interest rate (%)\n instructions: enter 5% as 5, not 0.05:")
    let cYears = window.prompt("mortgage term (years)");
    let consoleMortgage = new Mortgage({principal:cPrincipal,interest:cInterest,years:cYears})
    console.log("console:" + consoleMortgage.monthlyRate); 
}

// 🏡 Task 5: Conditionals
/* Add another paramter to your function called credit score. This parameter will be a number between 0 and 800 (a credit score).

Then, add control flow within your function such that IF creditScore is above 740, interest rate drops by 0.5%, if credit score is below 660, interest rate increases by 0.5% and if credit score is anywhere between 660 and 740 interest rate doesn't change.
*/




// 🏡 Task 6: Loops
/* Write a new function called variableInterestRate. This function should be the same as mortgageCalculator, except it should console.log the monthly payment for 10 different interest rates at 0.5% increments plus or minus 2% from the inputted interest rate. Complete these calculations using a for loop.

For example, variableInterestRate(200000, 0.04, 30) should console.log:

"{Name}, with an interest rate of 0.02, your monthly rate is $739"
"{Name}, with an interest rate of 0.025, your monthly rate is $790"
"{Name}, with an interest rate of 0.03, your monthly rate is $843"
"{Name}, with an interest rate of 0.035, your monthly rate is $898"
"{Name}, with an interest rate of 0.04, your monthly rate is $955"
"{Name}, with an interest rate of 0.045, your monthly rate is $1013"
"{Name}, with an interest rate of 0.05, your monthly rate is $1074"
"{Name}, with an interest rate of 0.055, your monthly rate is $1136"
"{Name}, with an interest rate of 0.06, your monthly rate is $1199"
*/




// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/* Attempt any of the stretch goals below once you have finished the work above. Remember as always, these may require additional research beyond what you learned today */

/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing */


/* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford */


/* 🏡 Explore using `window.prompt()` to allow a user to input parameters in the browser */


/* 🏡  Refactor your `variableInterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!) */
