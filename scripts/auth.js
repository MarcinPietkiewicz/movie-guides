// sign up

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', e => {
    e.preventDefault();

    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // sign up the user

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            const modal = document.querySelector('#modal-signup');
            M.Modal.getInstance(modal).close();
            signupForm.reset();
        }).catch(err => { console.log(err.message) });
    console.log(`successful creation of account for ${email}`);
});

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('this user has signed out');
    });
})

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', e => {
    e.preventDefault();

    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password)
        .then(cred => {
            console.log(`user ${cred.user.email} logged in!`);

            // close the login modal and reset the form
            const modal = document.querySelector('#modal-login');
            M.Modal.getInstance(modal).close();
            loginForm.reset();


        });
})