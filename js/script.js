// ORDER BUTTONS

const buttons = document.querySelectorAll(".order-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        alert("Thank you for choosing McDonald's!");

    });

});

// MENU DROPDOWN

const menuBtn = document.getElementById("menu-btn");
const dropdown = document.getElementById("dropdown-menu");

if(menuBtn && dropdown){

    menuBtn.addEventListener("click", function(e){

        e.preventDefault();

        dropdown.classList.toggle("show-menu");

    });

    document.addEventListener("click", function(e){

        if(
            !menuBtn.contains(e.target) &&
            !dropdown.contains(e.target)
        ){
            dropdown.classList.remove("show-menu");
        }

    });

}