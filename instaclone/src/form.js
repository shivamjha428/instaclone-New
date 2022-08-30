import "./form.css";
import { useState } from "react";
import Header from "./Header";

import {useNavigate} from "react-router-dom"

const Form = () => {
  let navigate = useNavigate()
  
  const [data, setData] = useState({
    name:"",location:"",description:"",postImage:"",date:Date.now(),likes:64
  })

  let name,value;
  let base64Path;
  const handleInputs = (e) =>{
      name = e.target.name;
    value = e.target.value;
      setData({...data, [name]:value})
      
  }
  
  // for browse label button -- handle event
  const handlefile =async (e) =>{
     base64Path = await fileTobase64(e.target.files[0]) 
    setData({...data,postImage:base64Path})
    
  }


  const handleUserAdd = async (e) =>{
    e.preventDefault()
        const {name, location, description, postImage,date,likes}= data
        await fetch("http://localhost:5000/post/add", {
              method:"POST",
              headers : {
                "Content-Type": "application/json"
              },
              body : JSON.stringify({
                postImage:postImage,name:name, location:location, description:description,date:date,likes:likes
          })
           }).then(()=>{
           navigate("/post")
           })   
  }

  const fileTobase64 = (file) =>{
    return new Promise((resolve, reject)=>{
      const reader = new FileReader(file)
      reader.readAsDataURL(file)
      reader.onload = ()=>{
        resolve(reader.result)
      }
      reader.onerror = (err)=>{
        reject(err)
      }
    })
  }

    return (
    <>

    <Header/>
      <div >
        <form >
          <div>
            
          
            <div>
            <input type="text" id="filepath" name="filepath"   placeholder="No file chosen"/>
              <label for="files" >Browse</label>
              <input id="files" hidden type="file" onChange={handlefile}/>
            </div>
         
          </div>
          <div >
            <input id="name" name="name" onChange={handleInputs} placeholder="Author" />
            <input id="location" name="location" onChange={handleInputs} placeholder="Location" />
          </div>
          <div >
            <input id="description" name="description" onChange={handleInputs} placeholder="Description" />
          </div>
          <div>
            <button id="postbtn" type="submit" onClick={handleUserAdd}>Post</button>
          </div>
        </form>
      </div>
      
    </>
  );
};
export default Form;