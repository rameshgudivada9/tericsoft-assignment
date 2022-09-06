import { useState } from "react"
import axios from "axios";


export const DetailForm=({pros})=>{
// console.log(pros)
const [adddata,setAdddata]=useState({})

const handlechange=(e)=>{
const {name,value}=e.target;
setAdddata({...adddata,[name]:value})
}
console.log(adddata)
const handleSubmit=(e)=>{
    e.preventDefault()

     axios.post("http://localhost:8080/details",{...adddata}).then((res) => {
         console.log( res);
       })
       .catch((error)=>{
           console.log(error)
       })
       .then(()=>{
           pros()
       })
   }

    return (
        <form className="details" onSubmit={(e)=>{handleSubmit(e)}}>
           <div>Name:{" "}<input name="Name" placeholder="Enter Name" onChange={(e)=>{handlechange(e)}} className="Name" /></div>
           <div>Email:{" "}<input name="Email" placeholder="Enter Email" onChange={(e)=>{handlechange(e)}} className="Email" /></div>
           <div>Phone:{" "}<input name="Phone" placeholder="Enter PhoneNumber" onChange={(e)=>{handlechange(e)}} className="Phone" /></div>
           <div>DOB:{" "}<input type="date" name="Dob" placeholder="Enter Date of Birth" onChange={(e)=>{handlechange(e)}} className="Dob"/></div>
        <div>
          Gender: 
          <div>
            Male{" "}
            <input name="Gender" type="radio" onChange={(e)=>{handlechange(e)}} className="Gender" value="male" />
            Female{" "}
            <input name="Gender"  type="radio" onChange={(e)=>{handlechange(e)}} className="Gender" value="female" />
          </div>
        </div>
        <div>
            <select  name="Branch" onChange={(e)=>{handlechange(e)}} className="Branch" >
                <option value="sports">sports</option>
                <option value="science">science</option>
                <option value="arts">arts</option>
            </select>
            <div>
            <input className="submit" type="submit" value="Submit" />
            </div>
        </div>

           </form>
    )
}