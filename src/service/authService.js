import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

class AuthService {
  constructor() {
    this.auth = getAuth();
  }

  checkProvider(providerName) {
    switch (providerName) {
      case "Github":
        this.provider = new GithubAuthProvider();
        break;
      case "Google":
        this.provider = new GoogleAuthProvider();
        break;

      default:
        break;
    }
  }

  async signInWithPopup() {
    let obj = new Object();
    await signInWithPopup(this.auth, this.provider)
      .then((data) => {
        console.log(data);
        obj = { providerId: data.providerId, uid: data.user.uid };
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        console.log(`${errorCode} ${errorMessage} ${email}`);
      });

    return await obj;
  }

  onAuthChanged(onUserChange) {
    onAuthStateChanged(this.auth, (user) => {
      onUserChange(user);
    });
  }

  signOut() {
    signOut(this.auth);
  }
}

export default AuthService;
