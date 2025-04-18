/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyRate = 35; 
let totalCost = 0;  
let dayCounter = 0; 
let daysSelected = [];
const dayButtons = document.querySelectorAll('.blue-hover'); 
const clearButton = document.querySelector('.fake-button'); 
const halfDayButton = document.querySelector('#half'); 
const fullDayButton = document.querySelector('#full'); 
const costDisplay = document.querySelector('#calculated-cost'); 




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!



dayButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        if (!button.classList.contains('clicked')) {
            button.classList.add('clicked'); 
            dayCounter++; 
            daysSelected.push(button.textContent);
        }
        else {
            button.classList.remove('clicked');
            dayCounter--; 
            daysSelected = daysSelected.filter(day => day !== button.textContent); 
        }

        recalculateCost(); 
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.




clearButton.addEventListener('click', () => {
    dayButtons.forEach(button => {
        button.classList.remove('clicked'); 
    });
    dayCounter = 0; 
    daysSelected = []; 
    recalculateCost(); 
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayButton.addEventListener('click', () => {
    dailyRate = 20; 
    halfDayButton.classList.add('clicked'); 
    fullDayButton.classList.remove('clicked'); 
    recalculateCost(); 
});






// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayButton.addEventListener('click', () => {
    dailyRate = 35; 
    fullDayButton.classList.add('clicked'); 
    halfDayButton.classList.remove('clicked'); 
    recalculateCost(); 
});



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


function recalculateCost() {
    totalCost = dayCounter * dailyRate; 
    costDisplay.innerHTML = `${totalCost.toFixed(2)}`; 
}