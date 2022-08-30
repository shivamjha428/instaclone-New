import { useState, useEffect } from "react";
import Header from "./Header";
import "./postview.css";


const Post = () => {
  const [allPost, setAllPost] = useState([]);
  const[i,setI]=useState(0);
  const[j,setJ]=useState(2);
  const handleUser=()=>{
    if(i>=allPost.length || j>allPost.length){
      alert("No more post");
    }
    else{
      setI(i+2);
    setJ(j+2);
    }
  }
  const handleUser2=()=>{
    if(i>=2 && j>=4){
    setI(i-2);
    setJ(j-2);
    }
    else{
      alert("No more post"); 
    }
  }

  useEffect(() => {
    fetch("http://localhost:5000/post/posts")
      .then((res) => {
        return res.json();
      })
      .then((postData) => {
        // console.log(postData)       
        setAllPost(postData);
        // console.log(postData[0].postImage)
      });
  }, []);

  let monthNo = new Date().getMonth();
  let month = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let date =
    new Date().getDate() +
    " " +
    month[monthNo] +
    " " +
    new Date().getFullYear();

  return (
    <>
      <Header/>
      <div>
        {allPost.slice(i,j).map((ele) => {
          return (
            <div className="imagepost">
              <div >
                <div>
                  <label >
                    <b>{ele.name}</b>
                  </label>
                  <br />
                  <label style={{ color: "gray" }}>{ele.location}</label>
                </div>
                <img src="3DT.jpeg" style={{ height: "50px" }} alt="" className="dt" />
              </div>
              <div>
          
                <img
                  src={ele.postImage}
                  style={{ width: "100%",height:"50%"}}
                  alt=""
                />
              </div>
              <div >
                <img src="like.jpeg" style={{ width: "100px" }} alt="" />
                <div className="date">
                <label
                >
                  {date}
                </label></div>
              </div>
              <div className="likes">
                <label
                >
                  {ele.likes} likes
                </label>
              </div>
              <div >
                <p className="desc">{ele.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="btn">
      <button className="btn1" onClick={handleUser2}>previous</button>
      <button className="btn1" onClick={handleUser}>next</button>
      </div>
    </>
  );
};


export default Post;