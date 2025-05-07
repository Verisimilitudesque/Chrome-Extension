// Extension variables & arrays
let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const clearBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

//Truthy falsy check for leadsFromLocalStorage
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

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
    // Get the value from the input field
    // Push it to myLeads array
    // Call renderLeads() to display the updated list
    myLeads.push(inputEl.value)
    inputEl.value = "" // Clear the input field after adding
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) // Save to localStorage)
    render(myLeads)

})


// Saves lead from the current tab to myLeads array and localStorage
tabBtn.addEventListener("click", function() {
    // Grab the current tab URL using the Chrome Tabs API
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          // Get the current tab URL and push it to myLeads array
            myLeads.push(tabs[0].url)
            localStorage.setItem("myLeads", JSON.stringify(myLeads)) // Save to localStorage)
            render(myLeads)
    })
})

// Delete all leads when clear button is double clicked
clearBtn.addEventListener( "dblclick", function() { 

    // Clear the myLeads array
    myLeads = []
    // Clear the localStorage
    localStorage.clear()
    // Render the updated list
    render(myLeads)

})

