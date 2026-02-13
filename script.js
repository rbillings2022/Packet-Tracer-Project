//Storing Id and class sidebar and toggle-btn into a variable to use.
const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')
const button = document.getElementById('dropdown-btn')

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