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
      
  // -------------OUTFIT GENERATE SECTION!!! --------------------------------

  // creating arrays of outfit choices
  let workWear = ['trousers and blouse','dress and heels','culottes and rollneck'];
  let casualWear =['jumper and jeans', 'tshirt and midi','wide leg and blazer'];
  let introEstyle = 'Here are the outfits we have generated for you!';
  
  // creating consts of random array 
  const randomWork = workWear[Math.floor(Math.random() * workWear.length)];
  const randomWorkOptTwo = workWear[Math.floor(Math.random() * workWear.length)];
  const randomCasual = casualWear[Math.floor(Math.random() * casualWear.length)];
  const randomCasualOptTwo = casualWear[Math.floor(Math.random() * casualWear.length)];

    // get references to select list and display text box
    var userSelectedStyle = document.getElementById('selectStyle');
    var userSelectedOccasion = document.getElementById('selectOccasion');

  // gets the value that the user selected
    var getValue = userSelectedStyle.options[userSelectedStyle.selectedIndex].value;
    var getSecondValue = userSelectedOccasion.options[userSelectedOccasion.selectedIndex].value;
    
   
  
    function startestyle() {

        // displays introEstyle in document hereARe the outfits
        document.getElementById("hereAreTheOutfits").innerHTML = introEstyle;
      // reading if the user has selected X value, display var displayed in Y
       if(getValue === '1'&& getSecondValue === '1'){
         document.getElementById("outfitOne").innerHTML = randomWork;
         document.getElementById("outfitTwo").innerHTML = randomWorkOptTwo;
        
       }
       else {
         document.getElementById("outfitOne").innerHTML =randomCasual;
         document.getElementById("outfitTwo").innerHTML =randomCasualOptTwo;
       }
       console.log(getValue);
    }

    // assign onclick handlers to the buttons
    document.getElementById('outfitGenerateBtn').addEventListener('click', startestyle );;
   

    