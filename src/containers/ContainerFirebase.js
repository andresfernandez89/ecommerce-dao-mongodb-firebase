import admin from "firebase-admin";
import config from "../config.js";

try {
  const firebaseConfig = config.firebase;
  admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig),
    databaseURL: "https://ecommercecoder.firebaseio.com",
  });
  console.log("Connected database");
} catch (error) {
  console.log(error);
}

let db = admin.firestore();
class ContainerFirebase {
  constructor(collection) {
    this.collection = db.collection("products");
  }

  async getAll() {
    try {
      const data = [];
      const snapshot = await this.collection.get();
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      return data;
    } catch (error) {
      console.log(error);
      console.log("The file cannot be read.");
    }
  }

  async getById(idPr) {
    try {
      const data = await this.getAll();
      if (data) {
        let obj = await this.collection.doc(idPr).get();
        if (obj) return { id: obj.id, ...obj.data() };
        return null;
      }
    } catch (error) {
      console.log("The file cannot be read.");
    }
  }

  async add(data) {
    try {
      await this.collection.add({ ...data, timestamps: new Date() });
    } catch (error) {
      console.log("The file cannot be written.");
    }
  }

  async editById(idPr, obj) {
    try {
      await this.collection.doc(idPr).update({ ...obj });
    } catch (error) {
      console.log("The file cannot be written.");
    }
  }

  async deleteById(id) {
    try {
      const dataDeleted = await this.collection.doc(id).delete();
    } catch (error) {
      console.log("The file cannot be deleted.");
    }
  }
}

export default ContainerFirebase;
