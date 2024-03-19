//TABS
const tabsBtns = document.querySelectorAll(".tabs__nav button");
const tabsItems = document.querySelectorAll(".tabs__items");


//Ф-я скрывает табы и убирает актив у кнопки
function hideTabs() {
   tabsItems.forEach(item => item.classList.add("hide"));
   tabsBtns.forEach(item => item.classList.remove("active"));
}

//Ф-я показывает переданный номер таба и делает соответствующую ему кнопку активной
function showTab(index) {
   tabsItems [index].classList.remove("hide");
   tabsBtns[index].classList.add("active");
}
hideTabs();
showTab(0);


tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
   hideTabs();
   showTab(index);
}));

//ANCHORS
const anchors = document.querySelectorAll(".header__nav a");

anchors.forEach(anc => {
   anc.addEventListener("click", function(event){
      event.preventDefault();

      const id = anc.getAttribute("href");
      const elem = document.querySelector(id);

      window.scroll({
         top: elem.offsetTop -60,
         behavior: 'smooth'
      });
   });
});

const wel = document.querySelectorAll(".link-primary");

wel.forEach(wel => {
   wel.addEventListener("click", function(event){
      event.preventDefault();

      const id = wel.getAttribute("href");
      const elem = document.querySelector(id);

      window.scroll({
         top: elem.offsetTop -60,
         behavior: 'smooth'
      });
   });
});