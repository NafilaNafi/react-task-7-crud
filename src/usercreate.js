import { useContext, useEffect, useState } from "react"
import UserContext from "./userContext";
import { Formik } from 'formik';

export default function UserCreate() {


    let userData = useContext(UserContext)

    let [firstName,setfirstName] =useState("");
    let [lastName,setlastName] =useState("");
    let [email,setemail] =useState("");
    let [password,setpassword] =useState("");

    let userSubmit = async (e) => {
        e.preventDefault()
        

        userData.setUserList([...userData.userList, {
            firstName,
            lastName,
            email,
            password
        }])

        await fetch("https://5cdd0a92b22718001417c19d.mockapi.io/api/users",{
            method : "POST",
            body : JSON.stringify({
                firstName,
                lastName,
                email,
                password
            }),
            headers : {
                "Content-type" : "application/json"
            }
        })
    }

    // Component Lifecycle Hook

    //Creating
    useEffect(() => {
        console.log("During Creation")
    },[])

    useEffect(() => {
        return () => {
            console.log("During Destroy")
        }
    },[])

    useEffect(() => {
        console.log("During the Props change")
    },[firstName])

    //Updating

    //Destroy

    

    return <>
        <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h3>USER FORM</h3>
            </div>
        </div>

    <Formik>
        <Form>
            <Field className="form-control" name="firstname"/>
            <Field name="lastname"/>
            <Field name="email"/>
            <Field name="password"/>
        </Form>
    </Formik>


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
