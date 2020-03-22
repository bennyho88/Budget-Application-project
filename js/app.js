

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

function eventListeners() {

  const budgetForm = document.getElementById('budget-form');
  const expenseForm = document.getElementById('expense-form');
  const expenseList = document.getElementById('expense-list');

  // new instance of UI CLASS

  const ui = new UI();

  // budget form submit

  budgetForm.addEventListener('submit', function(event) {

    event.preventDefault();
  })


  // expense form submit

  expenseForm.addEventListener('submit', function(event) {

    event.preventDefault();
  })


  // expense click

  expenseList.addEventListener('click', function(event) {


  })

}

document.addEventListener('DOMContentLoaded', function() {
  eventListeners();
})


/*
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

  expenseForm.addEventListener('submit', function(event) {

    event.preventDefault();

    const expenseText = expenseInput.value;
    const amountInputExpense = amountInput.value;
    const budget = budgetAmount.textContent;



    if(expenseText === '' || amountInputExpense === '') {
      expenseFeedback.classList.add('showItem');
      expenseFeedback.textContent = `values cannot be empty or negative`;

      setTimeout(() => {
        expenseFeedback.classList.remove('showItem');
      }, 4000);
    } else {

      const expense = new Expense(expenseText, amountInputExpense);


      expense.clearFields(expenseInput, amountInput);
      expense.addExpense(expenseList,  expense, expenseAmount);
      expense.calculation(expense,budget, balance);

    
    }
  });

  expenseList.addEventListener('click', function(event) {

    event.preventDefault();

    console.log(event.target.parentElement.parentElement.parentElement.parentElement);

    if(event.target.parentElement.classList.contains('delete-icon')) {

      expenseList.removeChild(event.target.parentElement.parentElement.parentElement.parentElement);
    }

    // data needs to be added
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


// expense constructor

function Expense(title, amount) {

  this.title = title;
  this.amount = amount;
}

Expense.prototype.clearFields = function(expenseInput, amountInput) {

  expenseInput.value = '';
  amountInput.value = '';
}

Expense.prototype.addExpense = function(element, expense, expenseAmount) {

  const div = document.createElement('div');
  div.classList.add('expense');
  div.innerHTML = `
  <div class="expense-item d-flex justify-content-between align-items-baseline">

         <h6 class="expense-title mb-0 text-uppercase list-item">- ${expense.title}</h6>
         <h5 class="expense-amount mb-0 list-item">${expense.amount}</h5>

         <div class="expense-icons list-item">

          <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
           <i class="fas fa-edit"></i>
          </a>
          <a href="#" class="delete-icon" data-id="${expense.id}">
           <i class="fas fa-trash"></i>
          </a>
         </div>
        </div>
  `
  
  expenseAmount.textContent = expense.amount

  element.appendChild(div);

 
}

// delete Expense
Expense.prototype.deleteExpense = function() {

}

Expense.prototype.calculation = function(expense, budget, balance) {

  const totalBalance = budget - expense.amount;
  console.log(totalBalance);

  balance.textContent = totalBalance;


}


// dom event listener

document.addEventListener('DOMContentLoaded', function() {

  eventListener();
})
*/