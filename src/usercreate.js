import { useContext, useState } from "react"
import UserContext from "./userContext";

export default function UserCreate(){

    let userData = useContext(UserContext)

    let [firstName,setfirstName] =useState("");
    let [lastName,setlastName] =useState("");
    let [email,setemail] =useState("");
    let [password,setpassword] =useState("");

    let userSubmit = (e) => {
        e.preventDefault()
        

        userData.setUserList([...userData.userList,{
            firstName,
            lastName,
            email,
            password
        }])
    }

    return <>
        <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h3>USER FORM</h3>
            </div>
        </div>
        <form onSubmit={userSubmit}>
        <div className="row">
            <div className="col-lg-6">
                <label> First Name</label>
                <input className="form-control" value={firstName} onChange={(e) => setfirstName(e.target.value)} />
            </div>
            <div className="col-lg-6">
            <label>Last Name</label>
                <input className="form-control" value={lastName} onChange={(e) => setlastName(e.target.value)}/>
            </div>
        </div>

        <div className="row">
        <div className="col-lg-6">
            <label>Email</label>
            <input className="form-control" value={email} onChange={(e) => setemail(e.target.value)}/>
        
        </div>
        <div className="col-lg-6">
            <label>Password</label>
            <input className="form-control" value={password} onChange={(e) => setpassword(e.target.value)}/>
        
        </div>
        </div>

        <div className="row mt-3">
        <div className="col-lg-6">
            <input className="btn btn-primary" type="Submit" value="Submit"/>
        </div>
        </div>
        

        </form>
        </div>
    </>
}
