const ExpenseInput = document.getElementById("expenseInput");
const AmountInput = document.getElementById("amountInput");
const addButton = document.getElementById("addButton");
const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");

let expenses = [];

addButton.addEventListener("click", function (e) {
  e.preventDefault();
  const expense = ExpenseInput.value.trim();
  const amount = parseFloat(AmountInput.value);

  if (expense && !isNaN(amount)) {
    expenses.push({ expense, amount });
    ExpenseInput.value = "";
    AmountInput.value = "";
    updateExpenseList();
    save();
  }
});

ExpenseInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    addButton.click();
  }
});

updateExpenseList=()=> {
  expenseList.innerHTML = "";
  let sum = 0;

  expenses.forEach((item)=> {
    const li = document.createElement("li");
    li.textContent = `${item.expense}: $${item.amount.toFixed(2)}`;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    item.id=expenses.indexOf(item);
    deleteButton.addEventListener("click", () => deleteExpense(item.id));
    li.appendChild(deleteButton);
    expenseList.appendChild(li);
    sum += item.amount;
  });

  totalAmount.textContent = `Total: $${sum.toFixed(2)}`;
}

deleteExpense=(index)=> {
    expenses.splice(index, 1);
    updateExpenseList();
    save();
}

save=()=> {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

load=()=> {
  const saved = localStorage.getItem("expenses");
  if (saved) {
    expenses = JSON.parse(saved);
  } else {
    expenses = [];
  }
  updateExpenseList();
}

window.onload = () => {
  load();
};