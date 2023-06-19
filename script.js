let suggestions = [
    // "Channel",
    // "CodingLab",
    // "CodingNepal",
    // "YouTube",
    // "YouTuber",
    // "YouTube Channel",
    // "Blogger",
    // "Bollywood",
    // "Vlogger",
    // "Vechiles",
    // "Facebook",
   
    
"A2300",
"A2300 Family Pack",
// "A2300 SmartPrep Kitchen System",
// "A2300 SmartPrep Kitchen System",
// "A2500",
// "A3300",
// "A3500",
// "A3500 Entertaining Bundle",
// "A3500 Gourmet SmartPrep Kitchen System",
// "A3500 Gourmet SmartPrep Kitchen System (White)",
// "A3500 with Stainless Steel Container",
// "Ascent® Series A2300 Super Bundle",

];

// getting all required elements
const searchInput = document.querySelector(".searchInput");
const input = searchInput.querySelector("input");
const resultBox = searchInput.querySelector(".resultBox");
const icon = searchInput.querySelector(".icon");
let linkTag = searchInput.querySelector("a");
let webLink;

// if user press any key and release
input.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = '<li>'+ data +'</li>';
        });
        searchInput.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = resultBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {

            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchInput.classList.remove("active"); //hide autocomplete box
    }
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
        searchInput.classList.remove("active");
    }else{
        listData = list.join('');
        resultBox.innerHTML = listData;
    }
    resultBox.innerHTML = listData;
}


function removeSuggestions(){
    searchInput.classList("");
}
////////////////////////////////////////////Price range//////////////////////////////




 
 




///////////////////////////dropdowns///////////////////////////////////////////////

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

  
select.addEventListener('click', () => {
  select.classList.toggle('select-clicked');
  caret.classList.toggle('caret-rotate');
  menu.classList.toggle('menu-open');
});

options.forEach(option => {
  option.addEventListener('click', () => {
      selected.innerText = option.innerText;
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
    
      options.forEach(option => {
        option.classList.remove('active');
        });
          option.classList.add('active');
  });
});
});






