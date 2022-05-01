import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

class AuthService {
  constructor() {
    this.auth = getAuth();
  }

  checkProvider(providerName) {
    switch (providerName) {
      case "Github":
        this.provider = new GithubAuthProvider();
        break;

      default:
        break;
    }
  }

  signInWithPopup() {
    signInWithPopup(this.auth, this.provider)
      .then((result) => {
        console.log(result);
        console.log(result.user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        console.log(`${errorCode} ${errorMessage} ${email}`);
      });
  }
}

export default AuthService;
