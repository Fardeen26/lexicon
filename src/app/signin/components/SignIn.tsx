"use client"

import { signIn } from "next-auth/react"
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {

    const handleClick = () => {
        signIn('google', { callbackUrl: '/books' })
    }
    return (
        <div className="h-52 flex flex-col items-center">
            <h1 className="text-center font-semibold text-4xl dark:text-white">Welcome to Lexicon</h1>
            <button className="font-semibold py-3 px-5 rounded-lg flex items-center bg-gray-300 dark:bg-gray-200 dark:text-black space-x-4 mt-5" onClick={handleClick}>
                <span><FcGoogle className="w-5 h-5" /></span> <span>Continue with Google</span>
            </button>
        </div>
    )
}

export default SignIn