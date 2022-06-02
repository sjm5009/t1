import { getDatabase, ref, set, onValue } from "firebase/database";

class DbService {
  constructor() {
    this.db = getDatabase();
  }

  writeUserData(userId, name, email) {
    set(ref(this.db, "users/" + userId), {
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

  saveGoodsInfo(goods) {
    console.log(goods);
    set(ref(this.db, "goods/" + goods.goodsId), goods)
      .then(() => {
        // Data saved successfully!
        alert("Data saved successfully!");
      })
      .catch((error) => {
        // The write failed...
        alert("The write failed...");
      });
  }

  readGoods(onUpdate) {
    const starCountRef = ref(this.db, "goods/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      onUpdate(data);
    });
  }
}

export default DbService;
