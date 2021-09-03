// Copy email to user's clipboard
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }


//Hamburger menu
const menu = document.querySelector('#hamb_menu');
const menu_items = document.querySelector('.buttons');

const mobileMenu = () =>{
  menu.classList.toggle('is_active');
  menu_items.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);
