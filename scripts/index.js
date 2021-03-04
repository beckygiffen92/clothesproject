const discountList = document.querySelector('#discount-list')
//variables for nav bar logged in or out
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const loggedInOrOut = document.querySelectorAll('.both-in-out');

const setUpNavbar = (user) => {
  if (user){
    //if there is a user (is logged in) maked each logged in link display
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');  //hiding loggedout links when user is loggedin
    loggedInOrOut.forEach(item=> item.style.display = 'block');
  }
  else {
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block'); 
    loggedInOrOut.forEach(item=> item.style.display = 'block');
  }
}

const setUpMembersDisc =(data) =>{        //putting data inside the array
  //setting up if the user is logged in the discountlist array has length, then we can see it; 
  if (data.length){
  let html = '';
  data.forEach(doc =>{          //foreach document in the discountlist
    const discount = doc.data();    //going through the array vv creating an li with h2 and p for each store and discountcode
    const li = `

      <li>  
      <h2>${discount.store}</h2>
      <p>${discount.discountcode}</p>
      </li>
    `;             //`` output data inside curly strings
    html += li;
  })

  discountList.innerHTML = html;
}else {       //this message appears if user clicjs discount codes but not logged in
  discountList.innerHTML = '<h5 class="center-align">Oops! Only members can see these discount codes! Log in or Sign up</h5>'
}}
// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
  
  });
 
  // working with materliaze to use select menu on indexpage
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
  });
      
  // outfit generate section

  let workTopTrousers = "Blouse";
  let workBottomTrousers = "Trousers";
  let workTopSkirt = "Dress";

  let friendTopTrousers ="Jumper";
  let friendBottomTrousers="Jeans";
  let sportTopTrousers = "T-shirt";



  let userOutfitTop =['wooljumper','blouse','shirt','blazer','tshirt'];
  let userOutfitBottom =['jeans','culottes','widelegs','midiskirt','maxiskirt'];

  let userSelectionTopOne = userOutfitTop[1];
  let userSelectionBottomOne = userOutfitBottom[1];

  let userSelectionTopTwo = userOutfitTop[2];
  let userSelectionBottomTwo = userOutfitBottom[2];

  let finalSelectionOne = userSelectionTopOne + userSelectionBottomOne;
  let finalSelectionTwo = userSelectionTopTwo + userSelectionBottomTwo;

  // function generateOutfit(){
  //  console.log('pressed');
  // document.getElementById('outfitOne').innerHTML = finalSelection;
  // }

  
    

    
    // get references to select list and display text box
    var userSelectedStyle = document.getElementById('selectStyle');
    var userSelectedOccasion = document.getElementById('selectOccasion');

    var getValue = userSelectedStyle.options[userSelectedStyle.selectedIndex].value;
    var getSecondValue = userSelectedOccasion.options[userSelectedOccasion.selectedIndex].value;
    
   
  
    function startestyle() {

      var userSelectedStyle = document.getElementById('selectStyle');
      var userSelectedOccasion = document.getElementById('selectOccasion');
  
      var getValue = userSelectedStyle.options[userSelectedStyle.selectedIndex].value;
      var getSecondValue = userSelectedOccasion.options[userSelectedOccasion.selectedIndex].value;
       if(getValue === '3'&& getSecondValue === '3'){
         document.getElementById("outfitOne").innerHTML = finalSelectionOne;
        
       }
       else {
         document.getElementById("outfitOne").innerHTML =finalSelectionTwo;
       }
       console.log(getValue);
    }

    // assign onclick handlers to the buttons
    document.getElementById('outfitGenerateBtn').addEventListener('click', startestyle );;
   

    