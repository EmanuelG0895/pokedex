"use client"
import { signIn } from "next-auth/react"
 
export function SignIn() {
  return (
    <>
    <button className="hidden md:block cursor-pointer" onClick={() => signIn("github", { redirectTo: "/" })}>
      Sign In
    </button>
    <button className="block md:hidden" onClick={() => signIn("github", { redirectTo: "/" })}>
      <img src="/icons/login.svg" alt="" />
    </button>
    </>
  )
}