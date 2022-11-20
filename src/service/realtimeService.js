import { getDatabase, ref, set, onValue, update } from "firebase/database";

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

  saveGoodsList(goods) {
    set(ref(this.db, `goods/all/${goods.goodsId}`), goods)
      .then(() => {
        // Data saved successfully!
        // alert("Data saved successfully!");
      })
      .catch((error) => {
        // The write failed...
        alert("The write failed...");
      });
  }

  saveGoodsCateList(goods) {
    set(ref(this.db, `goods/${goods.category}/${goods.goodsId}`), goods)
      .then(() => {
        // Data saved successfully!
        // alert("Data saved successfully!");
      })
      .catch((error) => {
        // The write failed...
        alert("The write failed...");
      });
  }

  readGoods(onUpdate) {
    const starCountRef = ref(this.db, "goods/all/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      onUpdate(data);
    });
  }

  getDetailGoods(goodsId, goodsCate, setGoodsDetail) {
    const path = ref(this.db, `goods/${goodsCate}/${goodsId}/`);
    onValue(path, (snapshot) => {
      let result = snapshot.val();
      setGoodsDetail(result);
    });
  }

  updateDetailGoods(prevGoodsDlt) {
    const updates = {};
    updates[`/goods/${prevGoodsDlt.category}/${prevGoodsDlt.goodsId}`] = null;

    update(ref(this.db), updates)
      .then(() => {
        alert("상품이 수정되었습니다.");
      })
      .catch((error) => {
        alert("상품 수정을 실패했습니다.");
      });
  }
}

export default DbService;
