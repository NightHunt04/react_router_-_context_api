import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <div className="w-full font-poppins border-t-2 py-5">
            <div className="w-3/5 m-auto px-24 flex items-end justify-center">
                <div className="font-roboto text-xl w-full">
                    React<span className="text-red-500 font-bold">SITE</span>
                    <p className="font-poppins text-sm">Copyright @ 2024</p>
                </div>
                <div className="flex items-center justify-center text-xl">
                    <div className="px-2">
                        <Link
                            to='https://github.com/NightHunt04'
                            target="_blank">
                                <i className="fa-brands fa-github"></i>
                        </Link>
                    </div>

                    <div className="px-2">
                        <Link
                            to='https://www.instagram.com/jeet._004'
                            target="_blank">
                                <i className="fa-brands fa-instagram"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}