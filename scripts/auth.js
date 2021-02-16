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
    auth.signOut().then(()=>{
        console.log('user signed off');
    });
});