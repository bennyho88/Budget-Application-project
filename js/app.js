
/*
class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }
}
*/

// event listener

function eventListener() {

  const budgetFeedback = document.querySelector(".budget-feedback");
  const expenseFeedback = document.querySelector(".expense-feedback");
  const budgetForm = document.getElementById("budget-form");
  const budgetInput = document.getElementById("budget-input");
  const budgetAmount = document.getElementById("budget-amount");
  const expenseAmount = document.getElementById("expense-amount");
  const balance = document.getElementById("balance");
  const balanceAmount = document.getElementById("balance-amount");
  const expenseForm = document.getElementById("expense-form");
  const expenseInput = document.getElementById("expense-input");
  const amountInput = document.getElementById("amount-input");
  const expenseList = document.getElementById("expense-list");
  const itemList = [];
  const itemID = 0;


  budgetForm.addEventListener('submit', function(event) {

    event.preventDefault();
   
    const budgetValue = budgetInput.value;

    if(budgetValue === '') {
      budgetFeedback.classList.add('showItem');
      budgetFeedback.textContent = `value cannot be empty or negative`;
      
      setTimeout(() => {
        budgetFeedback.classList.remove('showItem');
      }, 4000);
    } else {

      const budget = new Budget(budgetValue);

      budget.addBudget(budgetValue, budgetAmount, balance);
      budget.clearFields(budgetInput);

    }
  })
}

// ui constructor

function UI() {

}

// budget constructor

function Budget(budget) {

  this.budget = budget;
}

Budget.prototype.clearFields = function(budgetInput) {

  budgetInput.value = '';
}

Budget.prototype.addBudget = function(budgetValue, budgetAmount, balance) {

  budgetAmount.textContent = budgetValue;
  balance.textContent = budgetValue;
}

// dom event listener

document.addEventListener('DOMContentLoaded', function() {

  eventListener();
})
