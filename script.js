const input = document.querySelector(".input");
const button = document.querySelector(".button");
const list = document.querySelector(".list");
const filterOption = document.querySelector(".filter");

button.addEventListener("click", addTarefa);
list.addEventListener("click", checkDelete);
filterOption.addEventListener("click", filterF);

function addTarefa(event) {
  event.preventDefault();
  //cria div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //cria li e liga na div criada
  const newItem = document.createElement("li");
  newItem.innerText = input.value;
  newItem.classList.add("item");
  todoDiv.appendChild(newItem);
  //cria botao chek
  const checkButton = document.createElement("button");
  checkButton.innerHTML = '<i class="fas fa-check"></i>';
  checkButton.classList.add("check-btn");
  todoDiv.appendChild(checkButton);
  //cria botao de lixeira
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //liga a div com todos os elementos criados na lista
  list.appendChild(todoDiv);
  input.value = "";
}

function checkDelete(event) {
  //selecionar o elemento da div que for clicado
  const item = event.target;
  //seleciona se o elemento primeiro elemento clicado se for o botao delete
  if (item.classList[0] === "trash-btn") {
    const task = item.parentElement; //seleciona o pai do botão que nesse caso é a div
    task.classList.add("fall"); //adiciona classe para fazer animação
    task.addEventListener("transitionend", function () {
      task.remove(); //executa o remove apenas depois de completar a animação
    });
  }

  //faz o mesmo se for o botão de check
  if (item.classList[0] === "check-btn") {
    const task = item.parentElement;
    task.classList.toggle("completed"); //adiciona a classe completada ao na div da lista que foi marcada
  }
}

function filterF(event) {
  const task = list.childNodes; //seleciona todos os filhos da lista
  task.forEach(function (item) {
    // para cada um dos filhos da lista e todos os elementos selecionados
    switch (event.target.value) {
      case "all":
        item.style.display = "flex";
        break;
      case "completed":
        if (item.classList.contains("completed")) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!item.classList.contains("completed")) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
        break;
    }
  });
}
