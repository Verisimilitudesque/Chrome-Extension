// Extension variables
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    // 1. Loop through the myLeads array and create an li for each item
    // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
    // 3. Render the listItems inside the unordered list using ulEl.innerHTML
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        //listItems += "<li><a href=' " + myLeads[i] + " ' target='blank'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target='blank' href='${myLeads[i]}' >
                    ${myLeads[i]}
                </a>
            </li>
            `
        
    }
    ulEl.innerHTML = listItems
}
