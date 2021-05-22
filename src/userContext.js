import React, { useState } from "react";

let UserContext = React.createContext();

export default UserContext;

// This will provide a data to all its childrens
export const UserProvider = ({children}) => {

    let [userList,setUserList] = useState([])

    return <UserContext.Provider value={{userList,setUserList}}>
        {children}
    </UserContext.Provider>
}
