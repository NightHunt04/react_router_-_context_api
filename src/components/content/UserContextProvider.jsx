import React from "react";
import UserContext from "./UserContext";

export default function UserContextProvider({children}) {
    const [user, setUser] = React.useState(null)
    const [pass, setPass] = React.useState(null)
    const [isUserIn, setIsUserIn] = React.useState(false)

    return (
        <UserContext.Provider value={{user, setUser, pass, setPass, isUserIn, setIsUserIn}}>
            {children}
        </UserContext.Provider>
    )
}