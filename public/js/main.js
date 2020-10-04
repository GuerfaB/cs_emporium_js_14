// Début Bouton nuit/jour 
// Element Navbar
let titre0 = document.getElementsByClassName("titre text-uppercase text-dark")[0]
let titre1 = document.getElementsByClassName("titre text-uppercase text-dark")[1]
let titre2 = document.getElementsByClassName("titre text-uppercase text-dark")[2]
let titre3 = document.getElementsByClassName("titre text-uppercase text-dark")[3]
let titre4 = document.getElementsByClassName("titre text-uppercase text-dark")[4]
let titre5 = document.getElementsByClassName("titre text-uppercase text-dark")[5]
let btnToggler = document.getElementById("toggle")

// Element cards
let recent = document.getElementById("recent")
let titreCards0 = document.getElementById("cards1")
let titreCards1 = document.getElementById("cards2")
let titreCards2 = document.getElementById("cards3")
let titreCards3 = document.getElementById("cards4")
let titreCards4 = document.getElementById("cards5")
let titreCards5 = document.getElementById("cards6")
let titreCards6 = document.getElementById("cards7")
let titreCards7 = document.getElementById("cards8")
let titreCards8 = document.getElementById("cards9")
let body = document.getElementsByTagName("body")[0]
let btnBlack = document.getElementById("black")
let btnWhite = document.getElementById("white")
const navbar = document.getElementById("navbar")
console.log(navbar);

// Element Carousel
let hot = document.getElementById("hot")
let a = document.getElementById("a")
let b = document.getElementById("b")
let c = document.getElementById("c")
let d = document.getElementById("d")
let z = document.getElementById("z")
let f = document.getElementById("f")
let g = document.getElementById("g")
let h = document.getElementById("h")
let i = document.getElementById("i")
let j = document.getElementById("j")
let k = document.getElementById("k")
let l = document.getElementById("l")
let m = document.getElementById("m")
let n = document.getElementById("n")
let o = document.getElementById("o")
let p = document.getElementById("p")
let h1 = document.getElementById("h1")

const Nuit = (e) =>{
    e.preventDefault()
    body.setAttribute("class", "bg-dark")
    navbar.setAttribute ("class", "navbar navbar-expand-lg navbar-light bg-dark pb-4")
    titre0.setAttribute("class", "titre text-uppercase text-white")
    titre1.setAttribute("class", "titre text-uppercase text-white")
    titre2.setAttribute("class", "titre text-uppercase text-white")
    titre3.setAttribute("class", "titre text-uppercase text-white")
    titre4.setAttribute("class", "titre text-uppercase text-white")
    titre5.setAttribute("class", "titre text-uppercase text-white")
    titreCards0.setAttribute("class","text-capitalize mt-4 text-white")
    titreCards1.setAttribute("class","text-capitalize mt-4 text-white")
    titreCards2.setAttribute("class","text-capitalize mt-4 text-white")
    titreCards3.setAttribute("class","text-capitalize mt-4 text-white")
    titreCards4.setAttribute("class","text-capitalize mt-4 text-white")
    titreCards5.setAttribute("class","text-capitalize mt-4 text-white")
    titreCards6.setAttribute("class","text-capitalize mt-4 text-white")
    titreCards7.setAttribute("class","text-capitalize mt-4 text-white")
    titreCards8.setAttribute("class","text-capitalize mt-4 text-white")
    a.style.color = "white"
    b.style.color = "white"
    c.style.color = "white"
    d.style.color = "white"
    z.style.color = "white"
    f.style.color = "white"
    g.style.color = "white"
    h.style.color = "white"
    i.style.color = "white"
    j.style.color = "white"
    k.style.color = "white"
    l.style.color = "white"
    m.style.color = "white"
    n.style.color = "white"
    o.style.color = "white"
    p.style.color = "white"
    h1.setAttribute("class", "text-white")
    emporiumTitre.style.color = "white"
    recent.style.color ="white"
    hot.style.color ="white"
    btnToggler.style.backgroundColor = "white"
}
btnBlack.addEventListener("click", Nuit)

const Jour = (e) =>{
  e.preventDefault()
  body.setAttribute("class", " ")
  navbar.setAttribute ("class", "navbar navbar-expand-lg navbar-light bg-white pb-4")
  titre0.setAttribute("class", "titre text-uppercase text-dark")
  titre1.setAttribute("class", "titre text-uppercase text-dark")
  titre2.setAttribute("class", "titre text-uppercase text-dark")
  titre3.setAttribute("class", "titre text-uppercase text-dark")
  titre4.setAttribute("class", "titre text-uppercase text-dark")
  titre5.setAttribute("class", "titre text-uppercase text-dark")
  titreCards0.setAttribute("class","text-capitalize mt-4 text-dark")
  titreCards1.setAttribute("class","text-capitalize mt-4 text-dark")
  titreCards2.setAttribute("class","text-capitalize mt-4 text-dark")
  titreCards3.setAttribute("class","text-capitalize mt-4 text-dark")
  titreCards4.setAttribute("class","text-capitalize mt-4 text-dark")
  titreCards5.setAttribute("class","text-capitalize mt-4 text-dark")
  titreCards6.setAttribute("class","text-capitalize mt-4 text-dark")
  titreCards7.setAttribute("class","text-capitalize mt-4 text-dark")
  titreCards8.setAttribute("class","text-capitalize mt-4 text-dark")
  a.style.color = "black"
  b.style.color = "black"
  c.style.color = "black"
  d.style.color = "black"
  z.style.color = "black"
  f.style.color = "black"
  g.style.color = "black"
  h.style.color = "black"
  i.style.color = "black"
  j.style.color = "black"
  k.style.color = "black"
  l.style.color = "black"
  m.style.color = "black"
  n.style.color = "black"
  o.style.color = "black"
  p.style.color = "black"
  h1.setAttribute("class", "text-dark")
  emporiumTitre.style.color = "black"
  recent.style.color ="black"
    hot.style.color ="black"
}
btnWhite.addEventListener("click", Jour)

// Fin bouton Nuit/Jour

// Début Bouton connection
let btnConnexion = document.getElementById("connexion")
let formulaire = document.getElementById("formulaire")
let section2 = document.getElementById("section2")
let section3 = document.getElementById("section3")
let section5 = document.getElementById("section5")
let section6 = document.getElementById("section6")
const Ouvrir = (e) => {
  e.preventDefault()
  formulaire.setAttribute("class","formulaire container")
  formulaire.style.position = "fixed"
  formulaire.style.zIndex = "1"
  navbar.style.filter = "sepia(100%)"
  section2.style.filter = "sepia(100%)"
  section3.style.filter = "sepia(100%)"
  section5.style.filter = "sepia(100%)"
  section6.style.filter = "sepia(100%)"
  
  
}
btnConnexion.addEventListener("click", Ouvrir)
// Début Bouton connection

// Début Bouton Fermer 
let btnFermer = document.getElementById("fermer")

const Fermer = (e) => {
  e.preventDefault()
  formulaire.setAttribute("class","formulaire d-none")
  formulaire.style.position = ""
  formulaire.style.zIndex = "0"
  navbar.style.filter = "sepia(0%)"
  section2.style.filter = "sepia(0%)"
  section3.style.filter = "sepia(0%)"
  section5.style.filter = "sepia(0%)"
  section6.style.filter = "sepia(0%)"
  

}
btnFermer.addEventListener("click", Fermer)


// Fin Bouton Fermer 

// Début Bouton Register & Sign Up
let btnRegister = document.getElementById("register")
let btnSignUp = document.getElementById("sign")
let part1 = document.getElementById("part1")
// Element Part2
let row1 = document.getElementById("row1")
let input1 = document.getElementById("input1")
let row2 = document.getElementById("row2")
let btn1 = document.getElementById("btn1")
// Element Part1
let input2 = document.getElementById("input2")
let input3 = document.getElementById("input3")
let btn2 = document.getElementById("btn2")
let hr1 = document.getElementById("hr1")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")

const Register = () => {
  // part2
  row1.setAttribute("class", "row d-flex")
  input1.setAttribute("class", "mt-3")
  row2.setAttribute("class", "row d-flex mt-3 mb-5")
  btn1.setAttribute("class", "bg-info ")
  // part1
  input2.setAttribute("class", "d-none")
  input3.setAttribute("class", "mt-3 d-none")
  btn2.setAttribute("class", "bg-info border-0 mt-3 mr-auto d-none")
  hr1.setAttribute("class", "mt-4 mb-4 d-none")
  btn3.setAttribute("class", "bg-danger d-none")
  btn4.setAttribute("class", "bg-primary mt-2 d-none mb-5")
  part1.setAttribute("class", "col-6 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-start")
}
btnRegister.addEventListener("click", Register)

const SignUp = () => {
  // part2
  row1.setAttribute("class", "row d-none mb-5")
  input1.setAttribute("class", "mt-3 d-none")
  row2.setAttribute("class", "row d-none mt-3 mb-5")
  btn1.setAttribute("class", "bg-info d-none")
  // part1
  input2.setAttribute("class", "")
  input3.setAttribute("class", "mt-3")
  btn2.setAttribute("class", "bg-info border-0 mt-3 mr-auto")
  hr1.setAttribute("class", "mt-4 mb-4")
  btn3.setAttribute("class", "bg-danger")
  btn4.setAttribute("class", "bg-primary mt-2 mb-5")
  part1.setAttribute("class", "col-6 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column")
}
btnSignUp.addEventListener("click", SignUp)
// Fin Bouton Register & Sign Up

// Début carousel
const controls = document.querySelector(".controls")
const container =document.querySelector(".thumbnail-container");
const allBox = container.children;
const containerWidth = container.offsetWidth;
const margin = 30;
var items = 0;
var totalItems = 0;
var jumpSlideWidth = 0;

// item setup per slide

responsive = [
  {breakPoint:{width:0,item:1}}, // if width greater than 0 (1 will item show)
  {breakPoint:{width:768,item:2}}, // if width greater than 768px (2 will item show)
  {breakPoint:{width:992,item:4}} // if width greater than 992px (4 will item show)

]

function load(){
  for (let i = 0; i < responsive.length; i++){
    if (window.innerWidth>responsive[i].breakPoint.width){
      items = responsive[i].breakPoint.item
      
    }
    
    
  }
  start()
}
function start(){
    var totalItemsWidth = 0
  for(let i = 0;i<allBox.length;i++){
    // width and margin setup of items
    allBox[i].style.width = (containerWidth/items)-margin + "px";
    allBox[i].style.margin = (margin/2) + "px"
    totalItemsWidth+=containerWidth/items;
    totalItems++;
  }
  // thumbnail-container width set up
  container.style.width = totalItemsWidth + "px";
  // slides controls number set up
  const allSlides = Math.ceil(totalItems/items);
  const ul = document.createElement("ul");
  ul.style.display = "block"
  ul.style.textAlign = "center"
  ul.style.padding = "0"
  ul.style.margin = "0"
  ul.style.listStyle = "none"
      for (let i = 1; i <=allSlides; i++) {
        const li = document.createElement("li");
            li.id=i;
            li.style.height ="25px";
            li.style.width ="25px";
            li.style.borderRadius ="50%"
            li.style.margin ="4px"
            li.style.marginTop ="70px"
            li.style.border = "solid #6C757D 2px"
            li.style.display = "inline-block"
            li.style.lineHeight = "33px"
            li.style.cursor = "pointer"
            li.setAttribute("onclick", "controlSlides(this)");
            ul.appendChild(li);
            if (i==1) {
              li.className="active";
              
            }
        
        
      }
      controls.appendChild(ul);

}
    // when click on numbers slide to next slide
function controlSlides(ele){
      // select controls children 'ul' element
      const ul = controls.children;
      // select ul children 'li' elements
      const li =ul[0].children
      
      var active;
      
      for (let i = 0; i < li.length; i++){
          if (li[i].className=="active"){
              // find who is now active
              active=i;
              // remove active class from all 'li' elements
              li[i].className = " ";
          }
        
      }
      // add active class to current slide
      ele.className = "active";
      var numb = (ele.id-1)-active;
        jumpSlideWidth = jumpSlideWidth+(containerWidth*numb);
      container.style.marginLeft =-jumpSlideWidth + "px";

}
window.onload = load();
// Fin carousel

// Début Navbar
var emporiumTitre = document.getElementById("emporium")
var emporiumTitre2 = document.getElementById("emporium2")
window.addEventListener('scroll', () => {
  if (window.scrollY >= 170) {
    navbar.style.position = "fixed"
    navbar.style.top = "0"
    navbar.style.width ="100%"
    navbar.style.zIndex ="1"
    emporiumTitre.setAttribute("class", "text-lowercase mb-5 d-none")
    navbar.style.paddingBottom ="25px"
    emporiumTitre2.setAttribute("class", "d-flex px-0")
    


    
  }
  else{
    navbar.style.position = "static"
    emporiumTitre.setAttribute("class", "text-lowercase mb-5")
    navbar.style.paddingBottom ="0px"
    emporiumTitre2.setAttribute("class", "d-none px-0")
  }

})
// Fin Navbar



