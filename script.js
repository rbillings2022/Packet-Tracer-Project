//Storing Id and class sidebar and toggle-btn into a variable to use.
const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')
const button = document.getElementById('dropdown-btn')
const addDropdownBtn = document.getElementById("add-dropdown");
const sidebarList = document.querySelector("#sidebar ul");

let dropdownCount = 1;

addDropdownBtn.addEventListener("click", () => {
    createDropdown();
});

//Creates New dropdown Menus
function createDropdown() {

    dropdownCount++;

    const li = document.createElement("li");

    li.innerHTML = `
        <button onclick="toggleSubMenu(this)" class="dropdown-btn">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M423.5-823.5Q400-847 400-880t23.5-56.5Q447-960 480-960t56.5 23.5Q560-913 560-880t-23.5 
            56.5Q513-800 480-800t-56.5-23.5ZM360-200v-480q-60-5-122-15t-118-25l20-80q78 21 166 30.5t174 9.5q86 0 174-9.5T820-800l20 80q-56 15-118 25t-122 15v480h-80v-240h-80v240h-80ZM291.5-11.5Q280-23 280-40t11.5-28.5Q303-80 320-80t28.5 11.5Q360-57 360-40t-11.5 28.5Q337 0 320 0t-28.5-11.5Zm160 0Q440-23 440-40t11.5-28.5Q463-80 480-80t28.5 11.5Q520-57 520-40t-11.5 28.5Q497 0 480 0t-28.5-11.5Zm160 0Q600-23 600-40t11.5-28.5Q623-80 640-80t28.5 11.5Q680-57 680-40t-11.5 28.5Q657 0 640 0t-28.5-11.5Z"/></svg>
            <span class="menu-title">Device ${dropdownCount}</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                <path d="M480-360 280-560h400L480-360Z"/>
            </svg>
        </button>

        <ul class="sub-menu">
            <div>
                <li><a href="#">Submenu 1</a></li>
            </div>
        </ul>
    `;

    // Insert before the + button (last child)
    sidebarList.insertBefore(li, sidebarList.lastElementChild);
}
document.addEventListener("dblclick", function (e) {
    if (e.target.classList.contains("menu-title")) {
        makeEditable(e.target);
    }
});

//Able to edit the names of newly added
function makeEditable(span) {
    const currentText = span.textContent;

    const input = document.createElement("input");
    input.type = "text";
    input.value = currentText;
    input.classList.add("edit-input");

    span.replaceWith(input);
    input.focus();
    input.select();

    // Save on Enter
    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            saveEdit(input);
        }
    });

    // Save on click outside
    input.addEventListener("blur", function () {
        saveEdit(input);
    });
}

function saveEdit(input) {
    const newSpan = document.createElement("span");
    newSpan.classList.add("menu-title");
    newSpan.textContent = input.value.trim() || "Untitled Menu";

    input.replaceWith(newSpan);
}


function toggleSidebar(){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')

    //This is now all the HTML elements that are now opened.
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul=>{
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    })
}
function toggleSubMenu(button){
    const subMenu = button.nextElementSibling;
    //Once in the button you go to the submenu to show the closed list Elements.
    //The show class was defined in the CSS code
    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')

    //If the sidebar classlist contains the CLOSE class
    if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close')
        toggleButton.classList.toggle('rotate')
    }
}