// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector(".quantity input");
  const subTotalElement = product.querySelector(".subtotal span");
  let total = priceElement.innerHTML * quantityElement.value;
  subTotalElement.innerHTML = total;
  return total;
}

function calculateAll() {
  const products = document.querySelectorAll('.product');
  const productsArr = [...products];
  let totalSum = 0;
  productsArr.forEach(element =>{
    totalSum += updateSubtotal(element);
  })
  const totalElement = document.querySelector("#total-value span");
  totalElement.innerHTML = totalSum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.target;
  const itemsElements = document.querySelectorAll(".product");
  const itemsArr = [...itemsElements];
  itemsArr.forEach(item =>{
    if(item.contains(target)){
      item.remove()
    }
  })
}

// ITERATION 5

function createProduct() {
  const createElementName = document.querySelector('.create-product input[type="text"]')
  const createElementPrice = document.querySelector('.create-product input[type="number"]')
  itemFrom(createElementName.value, createElementPrice.value)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll(".btn-remove");
  removeBtns.forEach(btn => {
    btn.addEventListener('click', (e) =>{
      removeProduct(e)
    })
  })

  const createBtn = document.querySelector("#create");
  createBtn.addEventListener('click', createProduct)

  //... your code goes here
});


function itemFrom(name, price) {
  const cart = document.querySelector("#cart tbody")
  const tr = document.createElement('tr');
  tr.className = "product"
  let tableRowClasses = ["name", "price", "quantity", "subtotal", "action"]
  for(let i = 0; i < 5; i++){
    const td = document.createElement('td')
    td.className = tableRowClasses[i]
    if(tableRowClasses[i] === "name"){
      const span = document.createElement("span")
      span.innerHTML = name
      td.append(span)
      tr.append(td);
    }
    else if(tableRowClasses[i] === "price"){
      td.innerHTML = "$"
      const span = document.createElement("span")
      span.innerHTML = price
      td.append(span)
      tr.append(td);
    }
    else if(tableRowClasses[i] === "quantity"){
      const input = document.createElement("input")
      input.type = "number"
      input.value = 0
      input.min = 0
      input.placeholder="Quantity"
      td.append(input)
      tr.append(td);
    }
    else if(tableRowClasses[i] === "subtotal"){
      td.innerHTML = "$"
      const span = document.createElement("span")
      span.innerHTML = 0
      td.append(span)
      tr.append(td);
    }
    else if(tableRowClasses[i] === "action"){
      const button = document.createElement("button")
      button.className = "btn btn-remove"
      button.innerHTML = "Remove"
      button.addEventListener('click', (e) =>{
        removeProduct(e)
      })
      td.append(button)
      tr.append(td);
    }
  }
  cart.append(tr);
}