import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import UserContext from "../content/UserContext"

export default function SignIn() {
    const navigate = useNavigate()
    const {setUser, setPass, setIsUserIn} = useContext(UserContext)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [isSignedIn, setIsSignedIn] = useState(false)
    
    function handleClick(e) {
        e.preventDefault()

        if(username === '' || password === '' || confirmPassword === '') {
            alert('Fill all the inputs')
            return
        }

        if(password === confirmPassword) {
            setIsSignedIn(true)

            setUser(username)
            setPass(password)
            setIsUserIn(true)

            setTimeout(() => {
                navigate('/')
            }, 1000)

        }
        else alert('Password does not match!')
    }

    return (
        <div className="w-full font-poppins">
            <div className="w-3/5 m-auto px-24 py-40 flex items-centers gap-20">
                <div>
                    <img className="" 
                    src="/src/assets/sign-in.svg" alt="sign-in" />
                </div>
                <div className="rounded-xl bg-gray-200 w-3/5 flex flex-col items-center p-4">
                    <h3 className="text-lg font-semibold">Sign In</h3>

                    {/* inputs */}
                    <div className="pt-24">
                        {/* username */}
                        <div className="py-4 px-5">
                            <input type="text"
                                name="user"
                                value={username} 
                                onChange={e => setUsername(e.target.value)}
                                placeholder="Username eg., NightHunt04"
                                className="bg-transparent text-center border-b-2 py-1 outline-none border-gray-400"/>
                        </div>

                        {/* password */}
                        <div className="py-4 px-5">
                            <input type="password"
                                name="pass"
                                value={password} 
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Password"
                                className="bg-transparent text-center border-b-2 py-1 outline-none border-gray-400"/>
                        </div>

                        {/* password */}
                        <div className="py-4 px-5">
                            <input type="password"
                                name="confirm-pass"
                                value={confirmPassword} 
                                onChange={e => setConfirmPassword(e.target.value)}
                                placeholder="Confirm password"
                                className="bg-transparent text-center border-b-2 py-1 outline-none border-gray-400"/>
                        </div>
                    </div>

                    <button className="px-3 mt-12 py-1 rounded-lg outline-none border-none shadow-md hover:opacity-80 bg-red-500 text-white text-semibold"
                        onClick={(e) => handleClick(e)}>
                        Submit
                    </button>

                    <p className={`${isSignedIn ? 'block' : 'hidden'} text-green-600 pt-9`}>Successfully signed in!</p>
                </div>
            </div>
        </div>
    )
}