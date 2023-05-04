import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc, getDoc, arrayUnion, Timestamp, updateDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { async } from "@firebase/util";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    const docRef = doc(db, "unuser_client", email);
    const docSnap = await getDoc(docRef);
    try {
      //Create user

      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            await setDoc(doc(db, "userlimit", res.user.uid), { limit: 0 });
            /// check wheether user someone requested or not
            if (docSnap.data()) {
              setChat(docSnap.data(), res.user);
              // add requested chat 

            }
            navigate("/index");
            window.location.reload(false);
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      })

    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };
  async function setChat(data, user) {
    const combinedId = user.uid > data.senderId ? user.uid + data.senderId : data.senderId + user.uid;
    console.log(combinedId + "this is comboin id");
    //create a chat in chats collection
    console.log(data);
    await setDoc(doc(db, "chats", combinedId), {
      messages: arrayUnion({
        id: uuid(),
        text: data.message,
        senderId: data.senderId,
        date: Timestamp.now(),
      }),
    })
    await updateDoc(doc(db, "userChats", user.uid), {
      [combinedId + ".userInfo"]:{
        uid: data.senderId,
        displayName: data.displayName,
        photoURL: data.photoURL? data.photoURL:"",
      },
      [combinedId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.senderId), {
      [combinedId + ".userInfo"]: {
     uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL?user.photoURL:" ",
      },
      [combinedId + ".date"]: serverTimestamp(),
    });
  }

  return (
    <>
      <div className="bg"></div>
      

      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="formContainer">
          <div className="formWrapper">
            <span className="logo">C2D Chat</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
              <input required type="text" placeholder="Your name" />
              <input required type="email" placeholder="Email" />
              <input required type="password" placeholder="Password" />
              <input required style={{ display: "none" }} type="file" id="file" />
              <label htmlFor="file">
                <img src={Add} alt="" />
                <span>Add an avatar</span>
              </label>
              <button disabled={loading}>Sign up</button>
              {loading && "Uploading and compressing the image please wait..."}
              {err && <span>Something went wrong</span>}
            </form>
            <p>
              You do have an account? <Link to="/login">Login</Link>
            </p>
          </div>

          <script src="./js/jquery.min.js"></script>

          <script src="./js/bootstrap.min.js"></script>

          <script src="./js/navigation.js"></script>
          <script src="./js/navigation.fixed.js"></script>

          <script src="./js/swiper.min.js"></script>

          <script src="./js/popper.min.js"></script>

          <script src="./js/owl.carousel.min.js"></script>

          <script src="./js/main.js"></script>
        </div>
      </div>

    </>
  );
};

export default Register;
