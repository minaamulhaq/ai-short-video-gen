"use client"
import React, { useContext, useEffect, useState } from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { auth } from './configs/firebase.config'
import { onAuthStateChanged } from 'firebase/auth'
import { Authcontext } from './_context/AuthContext'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'


function Provider({ children }) {
    // const createUser = useMutation();
    const [user, setUser] = useState("")
    const createUser = useMutation(api.user.createNewuser);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const result = await createUser({
                    name: user?.displayName,
                    email: user?.email,
                    photoURL: user?.photoURL,
                })
                setUser(result);
                console.log("user created", user);

            } else {
                console.log("user logged out");
            }
        })
        return () => {
            unsubscribe();
        }
    }, [])
    return (
        <div>


            <Authcontext.Provider value={user}>
                <NextThemesProvider attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >

                    {children}
                </NextThemesProvider>
            </Authcontext.Provider>

        </div>
    )
}
export const useAuth = () => {
    const context = useContext(Authcontext);
    return context;
}
export default Provider
