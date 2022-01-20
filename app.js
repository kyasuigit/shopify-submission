const form = document.querySelector("#item-form");
const warehouseform = document.querySelector("#warehouse-form");
const itemName = document.querySelector(".name");
const itemCount = document.querySelector(".amount");
const ul = document.querySelector("#inventory-list");
const warehouselist = document.querySelector(".warehouse-list");
const warehouseName = document.querySelector(".warehouse-name");
const currentWarehouse = document.querySelector(".initial-warehouse");
selectItem = document.querySelector(".initial-item");

function createItem() {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = itemName.value;

  const span2 = document.createElement("span");
  span2.textContent = itemCount.value;

  const editButton = document.createElement("button");
  editButton.textContent = "edit";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "remove";

  const selectButton = document.createElement("button");
  selectButton.textContent = "select";

  divider = document.createTextNode(" - ");

  li.appendChild(span);
  li.appendChild(divider);
  li.appendChild(span2);
  li.appendChild(editButton);
  li.appendChild(deleteButton);
  li.appendChild(selectButton);
  return li;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const li = createItem();

  if (itemName.value === "") alert("Input an item name!");
  else ul.appendChild(li);
});

ul.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const button = event.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if (button.textContent === "remove") {
      ul.removeChild(li);
    } else if (button.textContent === "edit") {
      const itemName = li.firstElementChild;
      const nameInput = document.createElement("input");

      nameInput.value = itemName.textContent;
      li.insertBefore(nameInput, itemName);

      li.removeChild(itemName);

      button.textContent = "save";
    } else if (button.textContent === "save") {
      const itemName = li.firstElementChild;
      const span = document.createElement("span");
      span.textContent = itemName.value;
      li.insertBefore(span, itemName);

      li.removeChild(itemName);
      button.textContent = "edit";
    } else if (button.textContent === "select") {
      selectItem = li;
    }
  }
});

function createWarehouse() {
  const span = document.createElement("p");
  span.textContent = warehouseName.value;
  const warehouse = document.createElement("div");
  const itemList = document.createElement("ul");
  const addButton = document.createElement("button");
  addButton.textContent = "Add Selected Item to Warehouse";

  warehouse.appendChild(span);
  warehouse.appendChild(addButton);
  warehouse.appendChild(itemList);
  warehouselist.appendChild(warehouse);
}

warehouseform.addEventListener("submit", (event) => {
  event.preventDefault();
  const li = createWarehouse();
});

warehouselist.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const button = event.target;
    const listItem = button.parentNode;
    const wh = listItem.parentNode;

    const p = selectItem.textContent.split("-")[0] + ", ";
    wh.append(p);
  }
});
