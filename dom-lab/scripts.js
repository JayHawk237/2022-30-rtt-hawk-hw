
let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = "<h1>SEI Rock!</h1>";

mainEl.classList.add("flex-ctr");

let topMenuEl = document.querySelector("#top-menu");

topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.classList.add("flex-around");

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];


let aEl;


for(let count = 0; count < menuLinks.length; count++) {

    aEl = document.createElement("a");

 
    aEl.setAttribute("href", menuLinks[count].href);

    aEl.textContent = menuLinks[count].text;
    topMenuEl.append(aEl);
}