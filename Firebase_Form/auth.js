

// Firebase configuration
const firebaseConfig = {
 //enter your
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Sign Up function
function signUp() {
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
          // Signup successful, you could add additional actions here if needed
          console.log("Signup successful");
      })
      .catch((error) => {
          document.getElementById('signupMessage').textContent = error.message;
      });
}

// Login function
function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
          // Redirect to profile page immediately upon successful login
          window.location.href = "profile.html";
      })
      .catch((error) => {
          document.getElementById('loginMessage').textContent = error.message;
      });
}
