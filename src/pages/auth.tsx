import { InferGetStaticPropsType } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from "../styles/Auth.module.css"
import { Redirect } from "next"
import { redirect } from "next/dist/server/api-utils"

export const getStaticProps = async () => {
    const response = await fetch('https://fakestoreapi.com/users')
    const data = await response.json()

    return {
        props: {users: data}
    }
}

const Auth = ({users}: InferGetStaticPropsType<typeof getStaticProps>) => {
    console.log(users)
    
    let user:any = null;
    const router = useRouter()
    let [userLoggedIn, setUserLoggedIn] = useState(true);
    let url = "/"
    
    const submitLogin = () => {
        for(const e of users) {
            user=e;
            console.log(user)
            console.log(user.password)
            console.log("asd")
            if((document.getElementById('username') as HTMLInputElement).value == user.username && (document.getElementById('password') as HTMLInputElement).value == user.password) {
                console.log("Username is " + user.username)
                console.log("Password is " + user.password)
                setUserLoggedIn(true)
                router.push(url)
                break;
            }
            else {
                setUserLoggedIn(false)
                console.log("Invalid credentials!")                                
            }
        }
    }
    
    return (
        <>
        <Head>
            <title>Ecommerce | Login</title>
        </Head> 
            <div className={styles.login}>
                
                <form className={styles.loginForm} onKeyDown={(e) => {
                    if (e.key === "Enter")
                    {
                        submitLogin()
                    }
                    }} >

                    <h2>Login</h2>
                    <p> <input type="text" id="username" placeholder="Username" title="Enter a username" required className={styles.loginUserField} /> </p>
                    <p> <input type="password" id="password" placeholder="Password" title="Password must be 6 characters long" required minLength={6} className={styles.loginPassField} /> </p>
                    <button type="button" className={styles.loginButton} onClick={() => {
                        submitLogin()
                    }} >LOGIN</button>

                    <p className={styles.loginMessage} >Not registered? <a href="" style={{ ["textDecoration" as any]: "underline" }} >Create an account</a> </p>
                    { userLoggedIn==false ? <p className={styles.invalid} >Invalid credentials!</p> : <p></p> }
                </form>
            </div>
        </>
    )
}
 
export default Auth;