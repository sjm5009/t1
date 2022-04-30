import { getDatabase, ref, set } from "firebase/database";

class DbService {
  constructor() {}

  writeUserData(userId, name, email) {
    const db = getDatabase();
    set(ref(db, "users/" + userId), {
      username: name,
      email: email,
    })
      .then(() => {
        // Data saved successfully!
        alert("Data saved successfully!");
      })
      .catch((error) => {
        // The write failed...
        alert("The write failed...");
      });
  }
}

export default DbService;
