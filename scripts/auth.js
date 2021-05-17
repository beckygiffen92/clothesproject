
//listen to user auth status changes 
auth.onAuthStateChanged(user =>{        //looking for changes in the user - whether logged in or out
    if (user){
        //get data
db.collection('discounts').get().then(snapshot =>{
    setUpMembersDisc(snapshot.docs);            //retrieve data and settung it up inside setupmemberdisc
    setUpNavbar(user);
})
    }
    else{
        setUpMembersDisc([]);       //empty array if not logged in
        console.log('user logged out')
        setUpNavbar();  //willshow navbar logged out classes
    }
});


//signup - creating a variable that finds the id name of #signupForm
const signUpForm = document.querySelector('#signupForm');

//when we select the signup form then submit - run
signUpForm.addEventListener('submit', (e)=>{

    //need to prevent default refresh otherwise page just refreshes
    e.preventDefault();

    //get user info
    const email = signUpForm['signUpEmail'].value;            //looking for an id name of signupemail within signupform
    const password = signUpForm['signUpPassword'].value;


    //sign up user          //asynch function - may take time so return a promise using .then
    //using email and password created from previous variables
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        //when they log in, close signup modal and refresh 
        // console.log(cred);
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signUpForm.reset();
    })    
    
    
    // console.log(email,password);
})

//logout
const signout = document.querySelector('#signout');
signout.addEventListener('click', (e)=>{
    e.preventDefault();
    auth.signOut();
});

//login
const loginForm = document.querySelector('#login-form')
loginForm.addEventListener('submit',(e) =>{
    e.preventDefault();
   //get user information - can use const email again as its nested in this fuction
   
   const email = loginForm['login-email'].value;    //getting email from the loginform
   const password = loginForm['login-password'].value;
   auth.signInWithEmailAndPassword(email, password).then(cred =>{       //referencing the const email/password created from the values above
   
    //close modal and refresh form back to normal
    const modal = document.querySelector('#modal-signin');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
   })     
} )