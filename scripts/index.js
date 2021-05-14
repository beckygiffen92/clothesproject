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
  discountList.innerHTML = '<h5 class="center-align">no outfits</h5>'
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
  // -------------OUTFIT GENERATE SECTION!!! --------------------------------


  let introEstyle = 'Here are the outfits we have generated for you!';
  let reshuffleHeading ="Don't like either? Thats ok! You can reshuffle!";
  let or ="OR";
  // creating consts of random array 
  

    // get references to select list and display text box
    // const userSelectedStyle = document.getElementById('selectStyle');
    const userSelectedOccasion = document.getElementById('selectOccasion');

  // gets the value that the user selected

// NEED TO WORK ON THIS

  // dbcollection (outfits).workwear = randomWork
  
 
    // assign onclick handlers to the buttons
    
    // reshuffle button runs event again if user unhappy with choices
   
   

    // need to streamline if statements

    
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {});
  });
  




     
  
      var container = document.querySelector('#outfitViewer');

      function createElement(doc){


          // container.innerHTML="";
          // let card = document.createElement('card');

          // let card = document.createElement('card');
          let h1 = document.createElement('h1');
          let h3 = document.createElement('h3');
          let img = document.createElement('img');
          // let reText = document.createElement('p');
          // let reShuf = document.createElement('btn');
        

          img.setAttribute('src', doc.data().imageurl);
          img.setAttribute('alt', doc.data().imagedesc);
          h1.textContent = doc.data().imagedesc;
          h3.textContent= doc.data().tip;
          
          // container.appendChild(card);
          container.appendChild(h1);
          container.appendChild(h3);
          container.appendChild(img);
         
         


          
          // container.appendChild(reText);
          // container.appendChild(reShuf);
      

          // document.getElementById("hereAreTheOutfits").innerHTML = introEstyle;
          //       document.getElementById("orWording").innerHTML = or;
      }

      // var selection = document.querySelector('#outfitSelector');
      
      // db.collection('outfits').get().then(snapshot => {
      //         snapshot.docs.forEach(doc => {
      //             console.log(doc.data())
      //             createElement(doc);
      //         });
      //     });

      //https://firebase.google.com/docs/firestore/query-data/queries

      var displayWorkTest;
      var displayCasualTest;

      var btn = document.getElementById('outfitSelector').addEventListener('click', testing );;
      
    

      const userSelectTest = document.getElementById('testingSelect');
      const userSelectedStyle = document.getElementById('selectStyle');
      var getTestSelect;
      var getStyleSelect;
     
      function testing(){
        
      // gettestselect is created from the value the user has selected from the userselecttest selection
         getStyleSelect = userSelectedStyle.options[userSelectedStyle.selectedIndex].value;
        getTestSelect = userSelectTest.options[userSelectTest.selectedIndex].value;
       console.log(getStyleSelect);
       
       var randomInt;
      randomInt = Math.floor(Math.random() * 6);
    
      // if user selects casual from the options; the db collection looks for an array that contains casual under occasionoption then displays this in createelement
      if ( getTestSelect === 'casual' && getStyleSelect === 'both') {
        container.innerHTML ="";
        
        // container.innerHTML = "";
        // add ['casual','trouser'] and skirt to each one
        
        // var option = work[Math.floor(Math.random()*work.length)];
        
        // array-contains-any ['casual','skirt'] 
        // array contains casual
        db.collection('outfits').where('occasionoption', 'array-contains', 'bothcasual').limit(2).get().then(snapshot => {

          
            snapshot.docs.forEach (doc => {
              // randomOutfit = snapshot.doc[Math.floor(Math.random()*snapshot.doc.length)];
              
              console.log(snapshot.doc)
                console.log(doc.data())
                
                createElement(doc);
            });
            
        });
  

      }
      else if ( getTestSelect === 'casual' && getStyleSelect === 'skirt') {
        container.innerHTML ="";
       
        // container.innerHTML = "";
        // add ['casual','trouser'] and skirt to each one
        
        // var option = work[Math.floor(Math.random()*work.length)];
        
        // array-contains-any ['casual','skirt'] 
        // array contains casual
        db.collection('outfits').where('occasionoption', 'array-contains', 'skirtcasual').get().then(snapshot => {

         
            snapshot.docs.forEach(doc => {
                console.log(doc.data())
               
                createElement(doc);
            });
            
        });
  

      }
      else if ( getTestSelect === 'casual' && getStyleSelect === 'trousers') {
        container.innerHTML ="";
       
        // container.innerHTML = "";
        // add ['casual','trouser'] and skirt to each one
        
        // var option = work[Math.floor(Math.random()*work.length)];
        
        // array-contains-any ['casual','skirt'] 
        // array contains casual
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
  else if(getTestSelect === 'work' && getStyleSelect === 'skirt'){
    container.innerHTML ="";
    db.collection('outfits').where('occasionoption', 'array-contains', 'skirtwork').get().then(snapshot => {
     
      
      snapshot.docs.forEach(doc => {
          console.log(doc.data())
         
          createElement(doc);
      });
  });
} 
else if(getTestSelect === 'work' && getStyleSelect === 'trousers'){
  container.innerHTML ="";
  db.collection('outfits').where('occasionoption', 'array-contains', 'trouserwork').get().then(snapshot => {
   
    
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
       
        createElement(doc);
    });
});
} 

  else if(getTestSelect === 'romance' && getStyleSelect === 'both'){
    container.innerHTML ="";
    db.collection('outfits').where('occasionoption', 'array-contains', 'bothromance').get().then(snapshot => {
     
      
      snapshot.docs.forEach(doc => {
          console.log(doc.data())
         
          createElement(doc);
      });
  });
} 
else if(getTestSelect === 'romance' && getStyleSelect === 'skirt'){
  container.innerHTML ="";
  db.collection('outfits').where('occasionoption', 'array-contains', 'skirtromance').get().then(snapshot => {
   
    
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
       
        createElement(doc);
    });
});
} 
else if(getTestSelect === 'romance' && getStyleSelect === 'trousers'){
  container.innerHTML ="";
  db.collection('outfits').where('occasionoption', 'array-contains', 'trouserromance').get().then(snapshot => {
   
    
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
       
        createElement(doc);
    });
});
} 

else if(getTestSelect === 'walk' && getStyleSelect ==='both'){
  container.innerHTML ="";
  db.collection('outfits').where('occasionoption', 'array-contains', 'walk').get().then(snapshot => {
   
    
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
       
        createElement(doc);
    });
});
} 
else if(getTestSelect === 'walk' && getStyleSelect ==='skirt'){
  container.innerHTML ="";
  db.collection('outfits').where('occasionoption', 'array-contains', 'walk').get().then(snapshot => {
   
    
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
       
        createElement(doc);
    });
});
} 
else if(getTestSelect === 'walk' && getStyleSelect ==='trousers'){
  container.innerHTML ="";
  db.collection('outfits').where('occasionoption', 'array-contains', 'walk').get().then(snapshot => {
   
    
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
       
        createElement(doc);
    });
});
} 
else if(getTestSelect === 'yoga' && getStyleSelect ==='both'){
  container.innerHTML ="";
  db.collection('outfits').where('occasionoption', 'array-contains', 'yoga').get().then(snapshot => {
   
    
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
       
        createElement(doc);
    });
});
} 
else if(getTestSelect === 'yoga' && getStyleSelect ==='skirt'){
  container.innerHTML ="";
  db.collection('outfits').where('occasionoption', 'array-contains', 'yoga').get().then(snapshot => {
   
    
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
       
        createElement(doc);
    });
});
} 
else if(getTestSelect === 'yoga' && getStyleSelect ==='trousers'){
  container.innerHTML ="";
  db.collection('outfits').where('occasionoption', 'array-contains', 'yoga').get().then(snapshot => {
   
    
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
       
        createElement(doc);
    });
});
} 
else if(getTestSelect === 'concert' && getStyleSelect ==="both"){
  container.innerHTML ="";
  db.collection('outfits').where('occasionoption', 'array-contains', 'bothconcert').get().then(snapshot => {
   
   
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
       
        createElement(doc);
    });
});
} 
else if(getTestSelect === 'concert' && getStyleSelect ==="skirt"){
  container.innerHTML ="";
  db.collection('outfits').where('occasionoption', 'array-contains', 'skirtconcert').get().then(snapshot => {
   
   
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
       
        createElement(doc);
    });
});
} 
else if(getTestSelect === 'concert' && getStyleSelect ==="trousers"){
  container.innerHTML ="";
  db.collection('outfits').where('occasionoption', 'array-contains', 'trouserconcert').get().then(snapshot => {
   
   
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
       
        createElement(doc);
    });
});
} 
else if(getTestSelect === 'sport' && getStyleSelect ==='both'){
  container.innerHTML ="";
  db.collection('outfits').where('occasionoption', 'array-contains', 'sport').get(Math.floor(Math.random() * 'sport'.length)).then(snapshot => {
   
    
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
       
        createElement(doc);
    });
});
}
else if (getTestSelect ==='' && getStyleSelect === '' ){
  alert("Oops! You need to select an option!");
  
  };

  // document.getElementById("reShuffleText").innerHTML = reshuffleHeading;
  // document.getElementById("reShuffleBtn").style.display = 'block';
  document.getElementById("textReShuffleAppear").innerHTML = '<h1>Dont like either? Thats ok, you  can reshuffle!</h1>';
  document.getElementById("buttonAppear").innerHTML = '<button onclick="testing()">Reshuffle</button>';

      }
    