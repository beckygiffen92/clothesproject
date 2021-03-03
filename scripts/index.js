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
 
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });
        