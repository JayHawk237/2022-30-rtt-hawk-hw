
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  
  const mainEl = document.querySelector(`main`)
  
  mainEl.style.backgroundColor = "var(--main-bg)"
  
  mainEl.innerHTML = "<h1>SEI Rocks!</h1>"
  
  mainEl.classList.add(`flex-ctr`)
  
  const topMenuEl = document.querySelector(`#top-menu`)
  
  topMenuEl.style.height = `100%`
  
  topMenuEl.style.backgroundColor = `var(--top-menu-bg)`
  
  topMenuEl.classList.add(`flex-around`)
  
  let i = 0
  for (let link of menuLinks){
      let href =menuLinks[i].href
      let text =menuLinks[i].text 
      link = document.createElement(`a`)
      link.setAttribute(`href`, href)
      link.textContent = text
      topMenuEl.append(link)
    
      i++
  }
  
 
  
  const subMenuEl = document.querySelector(`#sub-menu`)
  
  subMenuEl.style.height = `100%`
  
  subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`
  
  subMenuEl.classList.add(`flex-around`)
  
  subMenuEl.style.position = `absolute`
  
  subMenuEl.style.top = `0`
  
  const topMenuLinks = topMenuEl.querySelectorAll(`a`)
  
  let showingSubMenu = false
  
 
  document.querySelector(`header`)
  
  topMenuEl.addEventListener(`click`, (evt)=>{
    evt.preventDefault()
    if (evt.target.tagName !== `A`){
      return
    } else {
     
    }
    if (evt.className ===`active`){
      evt.classList.remove(`active`)
      showingSubMenu = false
      subMenuEl.style.top = `0`
      return
    }
    topMenuEl.classList.remove(`active`)
    evt.target.classList.add(`active`)
    for (let i = 0; i < menuLinks.length; i++){
      if (evt.target.menuLinks[i] == true){
        showingSubMenu = true
      }else{
        showingSubMenu = false
      }
    }
  
  })
  
  console.log(topMenuLinks)

  let abc = []
  for (let i = 0; i < menuLinks.length; i++){
    
    if('subLinks' in menuLinks[i]){
     abc.push(menuLinks[i].text)
    }
 
    }
    console.log(abc)  

    
    let abc = []
    let text1;
    for (let i = 0; i < menuLinks.length; i++){
      if('subLinks' in menuLinks[i]){
       abc.push(menuLinks[i].text)
      }
      
    text1 = evt.target.innerHTML;
    showingSubMenu = false
    for(let i=0; i<abc.length; i++){
        if(text1===abc[i]){
          showingSubMenu = true
          console.log("showingSubMenu is " + showingSubMenu + " for " + text1)
        } 
      }

 
 function buildSubMenu(arrayOfClickedAElement){  // why we need the array here
    if(showingSubMenu === true) {
      subMenuEl.style.top = `100%`
    } else {
      subMenuEl.style.top = `0`
    } 
   
    console.log(subMenuEl);

   
  }; 
  console.log(subMenuEl);

