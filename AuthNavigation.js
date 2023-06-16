import React, { useEffect, useState } from "react";
import { SignedInStack, SignOutStack } from "./navigation"
import { onAuthStateChanged, getAuth } from "./firebase";

const AuthNavigation = () => {
    const [ currentUser, setCurrentUser ] = useState(null)
    const auth = getAuth()

    const userHandler = (user) => user ? setCurrentUser(user) : setCurrentUser(null)

    useEffect(() => onAuthStateChanged(auth, (user) => userHandler(user)), [])
    return <>
        {currentUser ? <SignedInStack /> : <SignOutStack />}
    </>
}

export default AuthNavigation