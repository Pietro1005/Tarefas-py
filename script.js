const taskBtn = document.querySelector("#taskBtn")
const taskList = document.querySelector("#taskList")
const taskInput = document.querySelector("#taskInput")

taskBtn.addEventListener("click", function(){
    const li = document.createElement("li");
    const taskinputValue = taskInput.value;
        if (taskinputValue === ""){
            return
    }
    const spam = document.createElement("spam");
    spam.textContent = taskinputValue;
    const button = document.createElement("button");
    button.textContent = "Excluir";
    }

    li.appendChild(spam)
    li.appendChild(button)

    taskList.appendChild(li)
})