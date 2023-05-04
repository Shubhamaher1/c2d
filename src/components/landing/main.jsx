import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import {ChatContext } from "../../context/ChatContext";

import { db } from '../../firebase';
import { useEffect } from 'react';
import { v4 as uuid } from "uuid";
import { collection,
   query,
   where,
   getDocs,
   setDoc,
   doc,
   updateDoc,
   serverTimestamp,
   getDoc,
   arrayUnion, Timestamp,} from 'firebase/firestore';
import { async } from '@firebase/util';


const Main = () => {
   const [slide, setslide] = useState("0");
   const { currentUser } = useContext(AuthContext);
   const [totauser, setTotalUser] = useState([]);
   const[sendEmail, setSendEmail]= useState();
   const [user, setUser] = useState(null);
   const { dispatch } = useContext(ChatContext);
   const { data } = useContext(ChatContext);
   const[name , setName]= useState();
   const[text, setText]= useState(null);
   // user and data are same 
   console.log(data);
   useEffect(() => {
      const getChats = async () => {
         const tempEmail = [];
         const querySnapshot = await getDocs(collection(db, "users"));
         querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data().email);
            tempEmail.push(doc.data());
            //   setTotalUser(doc.data());
         });
         setTotalUser(tempEmail);

      };

      getChats();


   }, [])
   console.log(totauser);
   // const { data } = useContext(ChatContext);
   function slidemove() {
      const a = setInterval(() => {
         if (slide == "0") {
            setslide("1");
         } else if (slide == "1") {
            setslide("2");
         } else {
            setslide("0");
         }
      }, 3000);
      clearTimeout(a);

   }
   slidemove();
   // console.log(data);
   function submitDataHandel() {
      // reciverid 
      let a=false;
      totauser.forEach((e)=>{
         if(e.email==sendEmail){
            // send chat
            setUser(e);
            // set user in data 
            dispatch({ type: "CHANGE_USER", payload: e });
            handleSelect();
            handleSend();
            a=true;
         }
      })
      if(a!=true){
         // check  add data in unregister user
         unrgistredUserHandel();

      }

   }
   const unrgistredUserHandel = async()=>{
      await setDoc(doc(db, "unuser_client", sendEmail), {
         name:name,
         message: text,
         displayName:currentUser.displayName,
         photoURL:currentUser.photoURL,
         senderId: currentUser.uid
      });
      console.log("added data");
      setSendEmail("");
      setName("");
      setText("");
   }
   const handleSelect = async () => {
      //check whether the group(chats in firestore) exists, if not create
      const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
          // console.log(res);
          const limi = await getDoc(doc(db, "userlimit",currentUser.uid));
          let lim=limi.data().limit;
          // limi.forEach((d)=>{
          //   lim=d.data();
          // })
          console.log(lim);
      try {
        const res = await getDoc(doc(db, "chats", combinedId));
        console.log(currentUser.uid);
        if (!res.exists()&& lim<=5) {
          //create a chat in chats collection
          await setDoc(doc(db, "chats", combinedId), { messages: [] });
          // const ref= db.collection('userChats').where("")
          //create user chats
          await updateDoc(doc(db, "userChats", currentUser.uid), {
            [combinedId + ".userInfo"]: {
              uid: user.uid,
              displayName: user.displayName,
              photoURL: user.photoURL,
            },
            [combinedId + ".date"]: serverTimestamp(),
          });
  
          await updateDoc(doc(db, "userChats", user.uid), {
            [combinedId + ".userInfo"]: {
              uid: currentUser.uid,
              displayName: currentUser.displayName,
              photoURL: currentUser.photoURL,
            },
            [combinedId + ".date"]: serverTimestamp(),
          });
          await updateDoc(doc(db, "userlimit",currentUser.uid),{
            limit: lim+1
          })
        }
      } catch (err) {}
  
      setUser(null);
      // setUsername("")
    };
    console.log(JSON.stringify(currentUser) +"this crrent");
    const handleSend = async () => {
     
        await updateDoc(doc(db, "chats", data.chatId), {
          messages: arrayUnion({
            id: uuid(),
            text,
            senderId: currentUser.uid,
            date: Timestamp.now(),
          }),
        });
      
  
      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });
  
      await updateDoc(doc(db, "userChats", data.user.uid), {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });
  
      setText("");
      // setImg(null);
    };

   return (
      <>
         <section className="banner_main" style={{ width: "100%" }}>
            <div id="myCarousel" className="carousel slide banner" data-ride="carousel">
               <ol className="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" className={slide == "0" ? "active" : ""}></li>
                  <li data-target="#myCarousel" data-slide-to="1" className={slide == "1" ? "active" : ""}></li>
                  <li data-target="#myCarousel" data-slide-to="2" className={slide == "2" ? "active" : ""}></li>
               </ol>
               <div className="carousel-inner" >
                  <div className="carousel-item active">
                     <img className="first-slide" src="./images/banner1.jpg" alt="First slide" />
                     <div className="container">
                     </div>
                  </div>
                  <div className="carousel-item">
                     <img className="second-slide" src="images/banner2.jpg" alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                     <img className="third-slide" src="images/banner3.jpg" alt="Third slide" />
                  </div>
               </div>
               <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
               </a>
               <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
               </a>
            </div>
            <div className="booking_ocline">
               {
                  currentUser ? <div className="container">
                     <div className="row">
                        <div className="col-md-5">
                           <div className="book_room">
                              <h1>Send to Your Crush</h1>
                              <span style={{ color: "white", marginBottom: "6px" }}>Your Name not visible till upto crush show instrest</span>
                              <form className="book_now">
                                 <div className="row">
                                    <div className="col-md-12">
                                       <span>Crush Name</span>
                                       {/* <img className="date_cua" src="images/date.png" /> */}
                                       <input className="online_book" placeholder="" type="text" name="name"  value={name} onChange={(e)=>{
                                          setName(e.target.value);
                                       }}/>
                                    </div>
                                    <div className="col-md-12">
                                       <span>Email</span>
                                       {/* <img className="date_cua" src="images/date.png" /> */}
                                       <input className="online_book" placeholder="Email" type="email" name="email" value={sendEmail} onChange={(e)=>{
                                           setSendEmail(e.target.value);
                                       }} />
                                    </div>
                                    <div className="col-md-12">
                                       <span>Message</span>
                                       {/* <img className="date_cua" src="images/date.png" /> */}
                                       <textarea className="online_book" placeholder="Message" type="textbox" name="message" value={text} onChange={(e)=>{
                                          setText(e.target.value);
                                       }}/>

                                    </div>
                                    <div className="col-md-12">
                                       <button className="book_btn" onClick={(e)=>{
                                          e.preventDefault();
                                          submitDataHandel();
                                       }}>Send Now</button>
                                    </div>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div> :
                     <div className='container'>
                        <div className='row'>
                           <div className="col-md-5">
                              <div className="book_room">

                                 <span style={{ color: "white" }}>
                                    if you want to date someone it the right place to you

                                 </span >
                                 <h4 style={{ color: "white" }}>You Want to Send Message to your Crush without Displying your Name  </h4>
                                 <button className='pd-3 book_btn' >
                                    <Link to="/login">Log In</Link>
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
               }
            </div>
         </section>
         <div className="about">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-md-5">
                     <div className="titlepage">
                        <h2>About Us</h2>
                        <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum. </p>
                        <a className="read_more" href="Javascript:void(0)"> Read More</a>
                     </div>
                  </div>
                  <div className="col-md-7">
                     <div className="about_img">
                        <figure><img src="images/about.png" alt="#" /></figure>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="our_room">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div className="titlepage">
                        <h2>Our Team</h2>
                        <p>We are working ! it is beta version </p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-4 col-sm-6">
                     <div id="serv_hover" className="room">
                        <div className="room_img">
                           <figure><img src="images/room1.jpg" alt="#" /></figure>
                        </div>
                        <div className="bed_room">
                           <h3>Shubham Aher</h3>
                           <p>CEO & Developer </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                     <div id="serv_hover" className="room">
                        <div className="room_img">
                           <figure><img src="images/room2.jpg" alt="#" /></figure>
                        </div>
                        <div className="bed_room">
                           <h3>Anant Kharat</h3>
                           <p>Marketing Head & COO </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                     <div id="serv_hover" className="room">
                        <div className="room_img">
                           <figure><img src="images/room3.jpg" alt="#" /></figure>
                        </div>
                        <div className="bed_room">
                           <h3>You</h3>
                           <p>We Always Give Value to the user </p>
                        </div>
                     </div>
                  </div>
                  {/* <div className="col-md-4 col-sm-6">
                     <div id="serv_hover" className="room">
                        <div className="room_img">
                           <figure><img src="images/room4.jpg" alt="#" /></figure>
                        </div>
                        <div className="bed_room">
                           <h3>Bed Room</h3>
                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                        </div>
                     </div>
                  </div> */}
                  {/* <div className="col-md-4 col-sm-6">
                     <div id="serv_hover" className="room">
                        <div className="room_img">
                           <figure><img src="images/room5.jpg" alt="#" /></figure>
                        </div>
                        <div className="bed_room">
                           <h3>Bed Room</h3>
                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                        </div>
                     </div>
                  </div> */}
                  {/* <div className="col-md-4 col-sm-6">
                     <div id="serv_hover" className="room">
                        <div className="room_img">
                           <figure><img src="images/room6.jpg" alt="#" /></figure>
                        </div>
                        <div className="bed_room">
                           <h3>Bed Room</h3>
                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                        </div>
                     </div>
                  </div> */}
               </div>
            </div>
         </div>
         
         <div className="blog">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div className="titlepage">
                        <h2>Succes Story</h2>
                        <p>Some of the People get good partner on C2D  </p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-4">
                     <div className="blog_box">
                        <div className="blog_img">
                           <figure><img src="images/blog1.jpg" alt="#" /></figure>
                        </div>
                        <div className="blog_room">
                           <h3>Chandu Patil</h3>
                           <span>The standard chunk </span>
                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are   </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="blog_box">
                        <div className="blog_img">
                           <figure><img src="images/blog2.jpg" alt="#" /></figure>
                        </div>
                        <div className="blog_room">
                           <h3>Radhika Jain</h3>
                           <span>The standard chunk </span>
                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are   </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="blog_box">
                        <div className="blog_img">
                           <figure><img src="images/blog3.jpg" alt="#" /></figure>
                        </div>
                        <div className="blog_room">
                           <h3>Namrta Patil</h3>
                           <span>The standard chunk </span>
                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are   </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Main