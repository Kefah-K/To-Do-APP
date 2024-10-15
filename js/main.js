// First: we shold creat variables for input and button
//copy the id of the input
const inputBox = document.getElementById("input-box");
//copy the ul list id
const tasks = document.getElementById("tasks");

// Second: add click function(addTask) to the button in html page
function addTask(){
    if(inputBox.value == ''){    //checking the input box not empty
        alert("You must write something !...")
    }
    else{
        let li = document.createElement("li"); //creat li element and store it in li variable
        li.innerHTML = inputBox.value; //add what we write in the input box to li
        tasks.appendChild(li); //the new li will displayed under the container tasks(ul)
        let deletSpan = document.createElement("span"); //create span tag
        deletSpan.innerHTML = "\u00d7" ;
        deletSpan.classList.add("delet-btn") //the span will containe a trash icon
        li.appendChild(deletSpan); //display the span

        let editSpan = document.createElement("span");
        editSpan.innerHTML ="\u270E" ;
        editSpan.classList.add("edit-btn")
        li.appendChild(editSpan);
    }
    inputBox.value = "" ; //to make the input empty after add the new (li) task
    save(); //to callthe saved data and save the updated content into the broser
}

// Third: add function for click the task
tasks.addEventListener("click" , function(c){ //click on the container ul
    if(c.target.tagName === "LI"){ //if we clicked on li
        c.target.classList.toggle("checked");//it will add the li with checked class name 
                                            //and if it alread there it will remove checked because it is toggle
        save(); //call the saved data                                   
    } 
    else if(c.target.classList.contains("delet-btn")){ //if we clicked on the span
        c.target.parentElement.remove(); //it will delet the parent element (li)
        save();
    }
    else if(c.target.classList.contains("edit-btn")) { // edit task if the edit button is clicked
        editTask = c.target.parentElement; // set the task to be edited
        inputBox.value = editTask.firstChild.textContent; // populate the input box with the task text
        c.target.parentElement.remove();
    }

} , false );


// The end: For local storage
function save(){ // to stor the hole ul container
    localStorage.setItem("data", tasks.innerHTML); // we store it with the name data
}

 //display it whenever we open the broser again
function showData(){
    tasks.innerHTML = localStorage.getItem("data");
}
showData(); //call the function to display the storaged data