<script src="https://www.gstatic.com/firebasejs/5.9.0/firebase.js"></script>

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD8avaEz9os-na2KxTY34qLn-oDDss6vhg",
    authDomain: "material-exchange.firebaseapp.com",
    databaseURL: "https://material-exchange.firebaseio.com",
    projectId: "material-exchange",
    storageBucket: "material-exchange.appspot.com",
    messagingSenderId: "792758028792"
  };
  firebase.initializeApp(config);


<script src="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.js"></script>
<link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css" />


// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());


var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
        },
        uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: 'index.html',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users. You can comment out the ones you dont use.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url. If you want. Right now... we want a succcessful log in to go to one page
    tosUrl: 'logged_in.html',
    // Privacy policy url.
    privacyPolicyUrl: 'logged_in.html'
    };

// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
