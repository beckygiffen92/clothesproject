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


// const userOutfit =(data) =>{        //putting data inside the array
//   //setting up if the user is logged in the discountlist array has length, then we can see it; 
//   if (data.length){
//   let html = '';
//   data.forEach(doc =>{          //foreach document in the discountlist
//     const concertwear = doc.data();    //going through the array vv creating an li with h2 and p for each store and discountcode
//     const li = `

//       <li>  
//       <h2>${concertwear.top}</h2>
//       <p>${concertwear.bottom}</p>
//       <p>${concertwear.outer}</p>
//       <p>${concertwear.shoes}</p>
//       </li>
//     `;             //`` output data inside curly strings
//     html += li;
//   })

//   outfitGenerator.innerHTML = html;
// }else {       //this message appears if user clicjs discount codes but not logged in
//   outfitGeneratort.innerHTML = '<h5 class="center-align">Oops! Only members can see these discount codes! Log in or Sign up</h5>'
// }}
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

  // document.addEventListener('DOMContentLoaded', function(){
  //   // const firestore = firebase.firestore();
  //   firestore.settings({timestampsInSnapshots: true});
  //   const colWork = firestore.collection('workwear');
  //   // const colCas = firestore.collection('casualwear');
  //   // const colConc = firestore.collection('concertwear');
  //   // const colRom = firestore.collection('romancewear');

  //   const query = colWork.where('top','array-contains', 'blouse')
  //   query.get().then(snapshot =>{
  //     snapshot.docs.forEach(doc=>{
  //       console.log(doc.id, doc.data())
  //     })
  //   })
  // });
  
  // let workWear = db.collection('outfits').where("keywords","array-contains","work");
  // console.log('workWear');

  // db.collection('workwear').('workwear1').get().then((snapshot)=>{
  //   snapshots.docs.forEach(doc =>{
  //   var top = snapshot.get("top");
  //   var bottom = snapshot.get("bottom");
  //   var shoes = snapshot.get("shoes");
  //   var outer = snapshot.get("outer");
  //     console.log(workwear1)
  //   })
  // })

  let outfitsWork= db.collection('outfits').where('keywords','array-contains-any','work');
    outfitsWork.get();
    // .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // })
    // .catch((error) => {
    //     console.log("Error getting documents: ", error);
    // });


  // creating arrays of outfit choices
  // let workWear = ['trousers and blouse','dress and heels','culottes and rollneck'];
  let workSummer = ['slinky dress','shorts and blouse','culottes and tee'];
  let casualWear =['jumper and jeans', 'tshirt and midi','wide leg and blazer'];
  let casualSummer = ['tee and midi skirt','midi dress','maxi dress'];
  let romanceWear = ['blouse and wide leg trousers','jeans and heels','midi dress'];
  let romanceSummer = ['blouse and wide leg trousers','jeans and heels','midi dress'];
  let concertWear = ['rock tee and skinny jeans', 'band tee and midi skirt','black top and black jeans','dungarees, band tee and doc martens','rockabilly dress and bandana'];
  let concertWearSummer = ['rock tee and skinny jeans', 'band tee and midi skirt','black top and black jeans','dungarees, band tee and doc martens','rockabilly dress and bandana'];
  let yogaWear = ['crop top, vest and leggings', 'vest, crop top and shorts','crop sweat and leggings'];
  let yogaSummer = ['crop top, vest and leggings', 'vest, crop top and shorts','crop sweat and leggings'];
  let walking = ['coat, leggings and walking boots','woolly jumper, leggings and walking boots','longline cardigan, leggings and walking boots'];
  let walkingSummer =['tshirt, leggings and walking boots','vest, cycling shorts and walking boots','hoody, shorts and trainers'];
  let sportingEvent = ['dress layered with cardigan', 'midi dress and blazer', 'cami dress with longline coat and heels','wide leg trousers, blouse and heels', 'long sleeve maxi dress with overcoat'];

  // need to finish this
  let sportingSummer;
  let introEstyle = 'Here are the outfits we have generated for you!';
  let reshuffleHeading ="Don't like either? Thats ok! You can reshuffle!";
  let or ="OR";
  // creating consts of random array 
  

    // get references to select list and display text box
    const userSelectedStyle = document.getElementById('selectStyle');
    const userSelectedOccasion = document.getElementById('selectOccasion');

  // gets the value that the user selected
  
    document.getElementById("reShuffleBtn").style.display = 'none';


// NEED TO WORK ON THIS


 
    var getValue;
    var getSecondValue;
    var randomWork;
    var randomWSummer;
    var randomWorkOptTwo;
    var randomCasual;
    var randomCasSummer;
    var randomCasualOptTwo;
    var randomRomance;
    var randomRomanceOptTwo;
    var randomRomanceSummer;
    var randomConcert;
    var randomConcertOptTwo;
    var randomConcertSummer;
    var randomYoga;
    var randomYogaOptTwo;
    var randomYogaSummer;
    var randomWalk;
    var randomWalkOptTwo;
    var randomWalkSummer;
    var randomSportEvent;
    

    function startestyle() {
      // the outfits are displayed on click
      var chosenOutfitOne=document.getElementById("outfitOne");
      var chosenOutfitTwo=document.getElementById("outfitTwo");

      chosenOutfitOne.style.display="block";
      // chosenOutfitOne.classList.toggle('fade');
      chosenOutfitTwo.style.display="block";
     

      // get date and month
      var d = new Date();
      var n = d.getMonth();

      // creating variables that are randomised values taken from arrays 
       randomWork = outfitsWork[Math.floor(Math.random() * outfitsWork.length)];
      // randomWork = workWear[Math.floor(Math.random() * workWear.length)];
      randomWSummer = workSummer[Math.floor(Math.random() * workSummer.length)];
      // randomWorkOptTwo = workWear[Math.floor(Math.random() * workWear.length)];
      randomWorkOptTwo = outfitsWork[Math.floor(Math.random() * outfitsWork.length)];
      randomCasual = casualWear[Math.floor(Math.random() * casualWear.length)];
      randomCasSummer = casualSummer[Math.floor(Math.random() * casualSummer.length)];
      randomCasualOptTwo = casualWear[Math.floor(Math.random() * casualWear.length)];
      randomRomance = romanceWear[Math.floor(Math.random() * romanceWear.length)];
      randomRomanceOptTwo = romanceWear[Math.floor(Math.random() * romanceWear.length)];
      randomConcert= concertWear[Math.floor(Math.random() * concertWear.length)];
      randomConcertOptTwo = concertWear[Math.floor(Math.random() * concertWear.length)];
      randomConcertSummer = concertWearSummer[Math.floor(Math.random() * concertWearSummer.length)];
      randomYoga = yogaWear[Math.floor(Math.random() * yogaWear.length)];
      randomYogaOptTwo = yogaWear[Math.floor(Math.random() * yogaWear.length)];
      randomYogaSummer = yogaSummer[Math.floor(Math.random() * yogaSummer.length)];
      randomWalk = walking[Math.floor(Math.random() * walking.length)];
      randomWalkOptTwo = walking[Math.floor(Math.random() * walking.length)];
      randomWalkSummer = walkingSummer[Math.floor(Math.random() * walkingSummer.length)];
      randomSportEvent = sportingEvent[Math.floor(Math.random() * sportingEvent.length)];
      randomSportEventOptTwo = sportingEvent[Math.floor(Math.random() * sportingEvent.length)];
      getValue = userSelectedStyle.options[userSelectedStyle.selectedIndex].value;
      getSecondValue = userSelectedOccasion.options[userSelectedOccasion.selectedIndex].value;

        // displays introEstyle in document hereARe the outfits
        
      // reading if the user has selected X value, display var displayed in Y

      // dowsnt seem to work if using or?
       if (getSecondValue === '1'||getSecondValue ==='3'){
        
         document.getElementById("outfitOne").innerHTML = randomWork;
        
         document.getElementById("outfitTwo").innerHTML = randomWorkOptTwo;
         document.getElementById("hereAreTheOutfits").innerHTML = introEstyle;
         document.getElementById("orWording").innerHTML = or;

              
       }
       else if (getValue == '2' && getSecondValue === '2'&& n>1  || getValue =='3' && getSecondValue === '2'&& n>1  ){
        document.getElementById("outfitOne").innerHTML = randomCasual;
        
        document.getElementById("outfitTwo").innerHTML = randomCasualOptTwo;
        document.getElementById("hereAreTheOutfits").innerHTML = introEstyle;
        document.getElementById("orWording").innerHTML = or;
       }
       else if (getValue >= '2'&& getSecondValue === '4'&& n>1 ){
        document.getElementById("outfitOne").innerHTML = randomWalk;
        document.getElementById("outfitTwo").innerHTML = randomWalkOptTwo;
        document.getElementById("hereAreTheOutfits").innerHTML = introEstyle;
        document.getElementById("orWording").innerHTML = or;
       }
       else if (getValue >= '2'&& getSecondValue === '8'&& n>1 ){
        document.getElementById("outfitOne").innerHTML = randomConcert;
        document.getElementById("outfitTwo").innerHTML = randomConcertOptTwo;
        document.getElementById("hereAreTheOutfits").innerHTML = introEstyle;
        document.getElementById("orWording").innerHTML = or;
        
        }
        else if (getValue >= '2'&& getSecondValue === '5'|| getSecondValue ==='6'|| getSecondValue ==='7'&& n>=1 ){
          document.getElementById("outfitOne").innerHTML = randomRomance;
          document.getElementById("outfitTwo").innerHTML = randomRomanceOptTwo;
          document.getElementById("hereAreTheOutfits").innerHTML = introEstyle;
          document.getElementById("orWording").innerHTML = or;
          
          }
          else if (getValue >= '2'&& getSecondValue === '8'&& n>1 ){
            document.getElementById("outfitOne").innerHTML = randomConcert;
            document.getElementById("outfitTwo").innerHTML = randomConcertOptTwo;
            document.getElementById("hereAreTheOutfits").innerHTML = introEstyle;
            document.getElementById("orWording").innerHTML = or;
            }
            else if (getValue >= '2'&& getSecondValue === '9'&& n>1 ){
              document.getElementById("outfitOne").innerHTML = randomSportEvent;
              document.getElementById("outfitTwo").innerHTML = randomSportEventOptTwo;
              document.getElementById("hereAreTheOutfits").innerHTML = introEstyle;
              document.getElementById("orWording").innerHTML = or;
              
              }
              else if (getValue >= '2'&& getSecondValue === '10'&& n>1 ){
                document.getElementById("outfitOne").innerHTML = randomYoga;
                document.getElementById("outfitTwo").innerHTML = randomYogaOptTwo;
                document.getElementById("hereAreTheOutfits").innerHTML = introEstyle;
                document.getElementById("orWording").innerHTML = or;
                
                }
      //  ifno value is selected alert this message
      else if (getValue ==='' && getSecondValue === '' ){
        alert("Oops! You need to select an option!");
        
        }
        console.log(getSecondValue);
      
       document.getElementById("reShuffleText").innerHTML = reshuffleHeading;
       document.getElementById("reShuffleBtn").style.display = 'block';
       console.log(n)
    }
    
    // assign onclick handlers to the buttons
    document.getElementById('outfitGenerateBtn').addEventListener('click', startestyle );;
    // reshuffle button runs event again if user unhappy with choices
    document.getElementById('reShuffleBtn').addEventListener('click', startestyle );;
   

    // need to streamline if statements

    
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {});
  });
  