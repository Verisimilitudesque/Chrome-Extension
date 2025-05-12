import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-database.js"

const firebaseConfig = {
    databaseURL: process.env.DATABASE_URL
}
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

console.log(firebaseConfig.databaseURL)

// Extension variables & arrays
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const clearBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")

// Renders leads to the unordered list
function render(leads) {
    // 1. Loop through the myLeads array and create an li for each item
    // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
    // 3. Render the listItems inside the unordered list using ulEl.innerHTML
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        //listItems += "<li><a href=' " + myLeads[i] + " ' target='blank'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target='blank' href='${leads[i]}' >
                    ${leads[i]}
                </a>
            </li>
            `
        
    }
    ulEl.innerHTML = listItems
}

// Saves leads from input field to myLeads array and localStorage
inputBtn.addEventListener("click", function() {

    console.log(inputEl.value)
    inputEl.value = "" // Clear the input field after adding

})




// Delete all leads when clear button is double clicked
clearBtn.addEventListener( "dblclick", function() { 

    // Render the updated list
    render(myLeads)

})

