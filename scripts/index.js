// const db = firebase.firestore();
const discountList = document.querySelector('#discount-list')
// const outfitGenerator = document.querySelector('#outfit-generate');

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
    const discount = doc.data();    //going through the array vv creating an li with h3 and h3 for each store and discountcode
    const li = `

      <li>
      <h3>${discount.store} </h3>
      <h3> - ${discount.discountcode}</h3><br><br>
      </li>
    `;             //`` output data inside curly strings
    html += li;
  })

  discountList.innerHTML = html;
}else {       //this message appears if user clicjs discount codes but not logged in
  discountList.innerHTML = '<h1 class="center-align">Oops! No discount codes are available at this time. Check again later!</h1>'
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
  // fade duration for when user scrolls
  AOS.init({
    duration: 1200,
  })
 

  // side nav to work using materialize 
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });
  var collapsibleElem = document.querySelector('.collapsible');
  var collapsibleInstance = M.Collapsible.init(collapsibleElem, {});

  // creating consts of random array 
  
  // dropdown trigger function to load using materialize
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {});
  });
  

      // variable container selecting the document with id of outfit viewer in the html
      var container = document.querySelector('#outfitViewer');

      // creating an element for the outfit viewer
      function createElement(doc){

        // creating variables then creating those into documents in the html page
          let h1 = document.createElement('h1');
          let h3 = document.createElement('h3');
          let img = document.createElement('img');

          // setting the image src and alt to the image url and image desc in the database
          img.setAttribute('src', doc.data().imageurl);
          img.setAttribute('alt', doc.data().imagedesc);

          // putting context of our created variables with the text of the image desc and the tip from datavase
          h1.textContent = doc.data().imagedesc;
          h3.textContent= doc.data().tip;
          
          // updating the var container which is outfitviewer in the html page and putting these into them
          container.appendChild(h1);
          container.appendChild(h3);
          container.appendChild(img);
         
      }


   
      // when outfitselector button is clicjed, run the function called testing
      var btn = document.getElementById('outfitSelector').addEventListener('click', testing );;
      
    
      // creating constants from the document id in html
      const userSelectTest = document.getElementById('testingSelect');
      const userSelectedStyle = document.getElementById('selectStyle');

      // creating new variables
      var getTestSelect;
      var getStyleSelect;


    //  function called testing
      function testing(){
        
        // get styleselect is created from the value the user has selected from the userselecteddstyle selection
        // gettestselect is created from the value the user has selected from the userselecttest selection
        getStyleSelect = userSelectedStyle.options[userSelectedStyle.selectedIndex].value;
        getTestSelect = userSelectTest.options[userSelectTest.selectedIndex].value;
        console.log(getStyleSelect);
       
        // tried to make a random function here that could select random
      //  var randomInt;
      // randomInt = Math.floor(Math.random() * 6);
    
      // if user selects casual from the options; the db collection looks for an array that contains casual under occasionoption then displays this in createelement
            if ( getTestSelect === 'casual' && getStyleSelect === 'both') {
              container.innerHTML ="";
              
              // tried to play with this to display a random 2 but couldnt get it to work
              // db.collection('outfits').where('occasionoption', 'array-contains', 'bothcasual').limit(2).get().then(snapshot => 

              // finding outfits where occasionoption array contains this element
              db.collection('outfits').where('occasionoption', 'array-contains', 'bothcasual').get().then(snapshot => {
                  snapshot.docs.forEach (doc => {
                    // tried playing with the random again
                    // randomOutfit = snapshot.doc[Math.floor(Math.random()*snapshot.doc.length)];
                    console.log(snapshot.doc)
                      console.log(doc.data())
                      // create element function
                      createElement(doc);
                  });
                  
              });

            }
            // ifthey select casual and skirt display where arraycontains skirtcasual
            else if ( getTestSelect === 'casual' && getStyleSelect === 'skirt') {
              container.innerHTML ="";
              db.collection('outfits').where('occasionoption', 'array-contains', 'skirtcasual').get().then(snapshot => {
                  snapshot.docs.forEach(doc => {
                      console.log(doc.data())
                      createElement(doc);
                  });
              });
            }

            // if tjeuy select causla and trousers display where array contains trousercasual
            else if ( getTestSelect === 'casual' && getStyleSelect === 'trousers') {
              container.innerHTML ="";
          
              db.collection('outfits').where('occasionoption', 'array-contains', 'trousercasual').get().then(snapshot => {
                  snapshot.docs.forEach(doc => {
                      console.log(doc.data())
                      createElement(doc);
                  }); 
              });
            }
            
            // if user selects work from the options; the db collection looks for an array that contains work under occasionoption then displays this in createelement
            else if(getTestSelect === 'work' && getStyleSelect === 'both'){
              container.innerHTML ="";
              db.collection('outfits').where('occasionoption', 'array-contains', 'bothwork').get().then(snapshot => {
                snapshot.docs.forEach(doc => {
                    console.log(doc.data())
                    createElement(doc);
                });
            });
          } 

        // if they select work and skirt display wehere array contains skirtwork
        else if(getTestSelect === 'work' && getStyleSelect === 'skirt'){
          container.innerHTML ="";
          db.collection('outfits').where('occasionoption', 'array-contains', 'skirtwork').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                console.log(doc.data())
                createElement(doc);
            });
        });
      } 

      // if they slect work and trousers display where array contains trousers work
      else if(getTestSelect === 'work' && getStyleSelect === 'trousers'){
        container.innerHTML ="";
        db.collection('outfits').where('occasionoption', 'array-contains', 'trouserwork').get().then(snapshot => {
          snapshot.docs.forEach(doc => {
              console.log(doc.data())
              createElement(doc);
          });
      });
      } 

        // if they select romance and both display where arraycontains bothromance
        else if(getTestSelect === 'romance' && getStyleSelect === 'both'){
          container.innerHTML ="";
          db.collection('outfits').where('occasionoption', 'array-contains', 'bothromance').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                console.log(doc.data())
                createElement(doc);
            });
        });
      } 

      // if they select romance and skirt dusplay where arraycontains skirtromance
      else if(getTestSelect === 'romance' && getStyleSelect === 'skirt'){
        container.innerHTML ="";
        db.collection('outfits').where('occasionoption', 'array-contains', 'skirtromance').get().then(snapshot => {  
          snapshot.docs.forEach(doc => {
              console.log(doc.data())
              createElement(doc);
          });
      });
      } 

      // if they select romance and trousers display where array contains trouserromance
      else if(getTestSelect === 'romance' && getStyleSelect === 'trousers'){
        container.innerHTML ="";
        db.collection('outfits').where('occasionoption', 'array-contains', 'trouserromance').get().then(snapshot => {
          snapshot.docs.forEach(doc => {
              console.log(doc.data())
              createElement(doc);
          });
      });
      } 

      // if they select walk and both display where array contains walk
      else if(getTestSelect === 'walk' && getStyleSelect ==='both'){
        container.innerHTML ="";
        db.collection('outfits').where('occasionoption', 'array-contains', 'walk').get().then(snapshot => {
          snapshot.docs.forEach(doc => {
              console.log(doc.data())
              createElement(doc);
          });
      });
      } 

      // if they select walk and skirts display where array contains walk
      else if(getTestSelect === 'walk' && getStyleSelect ==='skirt'){
        container.innerHTML ="";
        db.collection('outfits').where('occasionoption', 'array-contains', 'walk').get().then(snapshot => {
          snapshot.docs.forEach(doc => {
              console.log(doc.data())
              createElement(doc);
          });
      });
      } 

      // if they select walk and trouser display where array contains walk
      else if(getTestSelect === 'walk' && getStyleSelect ==='trousers'){
        container.innerHTML ="";
        db.collection('outfits').where('occasionoption', 'array-contains', 'walk').get().then(snapshot => {
          snapshot.docs.forEach(doc => {
              console.log(doc.data())
            
              createElement(doc);
          });
      });
      } 

      // if they select yoga and both display where array contains yoga
      else if(getTestSelect === 'yoga' && getStyleSelect ==='both'){
        container.innerHTML ="";
        db.collection('outfits').where('occasionoption', 'array-contains', 'yoga').get().then(snapshot => {
          snapshot.docs.forEach(doc => {
              console.log(doc.data())
              createElement(doc);
          });
      });
      } 

      // if they select yoga and skirt display where array contains yoga
      else if(getTestSelect === 'yoga' && getStyleSelect ==='skirt'){
        container.innerHTML ="";
        db.collection('outfits').where('occasionoption', 'array-contains', 'yoga').get().then(snapshot => {
          snapshot.docs.forEach(doc => {
              console.log(doc.data())
              createElement(doc);
          });
      });
      } 

      // if they select yoga and trousers display where array contains yoga
      else if(getTestSelect === 'yoga' && getStyleSelect ==='trousers'){
        container.innerHTML ="";
        db.collection('outfits').where('occasionoption', 'array-contains', 'yoga').get().then(snapshot => {
          snapshot.docs.forEach(doc => {
              console.log(doc.data())
              createElement(doc);
          });
      });
      } 

      // if they select concert and both disolay where array contains bothconcert
      else if(getTestSelect === 'concert' && getStyleSelect ==="both"){
        container.innerHTML ="";
        db.collection('outfits').where('occasionoption', 'array-contains', 'bothconcert').get().then(snapshot => {
          snapshot.docs.forEach(doc => {
              console.log(doc.data())
              createElement(doc);
          });
      });
      } 

      // ifthey select concert and skirt, display all outfits where array contains skirt concert
      else if(getTestSelect === 'concert' && getStyleSelect ==="skirt"){
        container.innerHTML ="";
        db.collection('outfits').where('occasionoption', 'array-contains', 'skirtconcert').get().then(snapshot => {
          snapshot.docs.forEach(doc => {
              console.log(doc.data())
              createElement(doc);
          });
      });
      } 

      // if they select concert and trousrs display all outfits where array contains trouser concert
      else if(getTestSelect === 'concert' && getStyleSelect ==="trousers"){
        container.innerHTML ="";
        db.collection('outfits').where('occasionoption', 'array-contains', 'trouserconcert').get().then(snapshot => {
          snapshot.docs.forEach(doc => {
              console.log(doc.data())
              createElement(doc);
          });
      });
      } 

      // if they select sport and both, it will displat array contains sport
      else if(getTestSelect === 'sport' && getStyleSelect ==='both'){
        container.innerHTML ="";
        db.collection('outfits').where('occasionoption', 'array-contains', 'sport').get().then(snapshot => { 
          snapshot.docs.forEach(doc => {
              console.log(doc.data())
              createElement(doc);
          });
      });
      }

      // if user hasnt selected anythign, an alett pops up
      else if (getTestSelect ==='' || getStyleSelect === '' ){
        alert("Oops! You need to select an option!");
        
        };

      // put this text into these document ids when running this function
      // the reshuffle button would allow the user to run the function again and reshuffle the choices bt unfortunately doesnt work how exoexted
        document.getElementById("textReShuffleAppear").innerHTML = '<h1>Dont like either? Thats ok, you  can reshuffle!</h1>';
        document.getElementById("buttonAppear").innerHTML = '<button onclick="testing()">Reshuffle</button>';

            }
          