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
  let workSummer = ['slinky dress','shorts and tee','culottes and tee'];
  let casualWear =['jumper and jeans', 'tshirt and midi','wide leg and blazer'];
  let introEstyle = 'Here are the outfits we have generated for you!';
  let reshuffleHeading ="Don't like either? Thats ok! You can reshuffle!";
  let or ="OR";
  // creating consts of random array 
  

    // get references to select list and display text box
    const userSelectedStyle = document.getElementById('selectStyle');
    const userSelectedOccasion = document.getElementById('selectOccasion');

  // gets the value that the user selected
  
    document.getElementById("reShuffleBtn").style.display = 'none';
    
//     ('#outfitGenerateBtn').click(function(){
//       if ($("#selectStyle ")[0].selectedIndex <= 0) {
//                  alert("Not selected");
//              }
//      else
//         startestyle();
//  });

// NEED TO WORK ON THIS
    var getValue;
    var getSecondValue;
    var randomWork;
    var randomWorkOptTwo;
    var randomCasual;
    var randomCasualOptTwo;


    // need to add if val1 == val2 shuffle again
    function startestyle() {
      // get date and month
      var d = new Date();
      var n = d.getMonth();

      // if (n >= 2){
      //   randomWork = workWear[Math.floor(Math.random() * workWear.length)];
      // } else{
      //   randomWork = workSummer[Math.floor(Math.random() * workSummer.length)];
      // }

      randomWork = workWear[Math.floor(Math.random() * workWear.length)];
      randomWSummer = workSummer[Math.floor(Math.random() * workSummer.length)];
      randomWorkOptTwo = workWear[Math.floor(Math.random() * workWear.length)];
      randomCasual = casualWear[Math.floor(Math.random() * casualWear.length)];
      randomCasualOptTwo = casualWear[Math.floor(Math.random() * casualWear.length)];
      getValue = userSelectedStyle.options[userSelectedStyle.selectedIndex].value;
      getSecondValue = userSelectedOccasion.options[userSelectedOccasion.selectedIndex].value;

        // displays introEstyle in document hereARe the outfits
        
      // reading if the user has selected X value, display var displayed in Y
       if (getValue === '1'&& getSecondValue === '1' &&  n <= 1){
        
         document.getElementById("outfitOne").innerHTML = randomWork;
         document.getElementById("outfitTwo").innerHTML = randomWorkOptTwo;
         document.getElementById("hereAreTheOutfits").innerHTML = introEstyle;
         document.getElementById("orWording").innerHTML = or;

              
       }
      //  ifno value is selected alert this message
      else if (getValue ==='' && getSecondValue === '' ){
        alert("Oops! You need to select an option!");
        
        }
        else if (getValue ==='1' && getSecondValue === '1'&& n>=1 ){
          document.getElementById("outfitOne").innerHTML = randomWSummer;
          document.getElementById("outfitTwo").innerHTML = randomWorkOptTwo;
          document.getElementById("hereAreTheOutfits").innerHTML = introEstyle;
          document.getElementById("orWording").innerHTML = or;
          
          }
       else {
         document.getElementById("outfitOne").innerHTML =randomCasual;
         document.getElementById("outfitTwo").innerHTML =randomCasualOptTwo;
         document.getElementById("hereAreTheOutfits").innerHTML = introEstyle;
         document.getElementById("orWording").innerHTML = or;
         console.log(randomCasual);
       }
      
       document.getElementById("reShuffleText").innerHTML = reshuffleHeading;
       document.getElementById("reShuffleBtn").style.display = 'block';
       console.log(n)
    }
    
    // assign onclick handlers to the buttons
    document.getElementById('outfitGenerateBtn').addEventListener('click', startestyle );;
    // reshuffle button runs event again if user unhappy with choices
    document.getElementById('reShuffleBtn').addEventListener('click', startestyle );;
   

    