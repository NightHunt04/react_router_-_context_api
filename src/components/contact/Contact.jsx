import { Link } from "react-router-dom"

export default function Contact() {
    return (
        <div className="w-full font-poppins">
            <div className="w-3/5 m-auto h-full px-24 py-60 flex items-center justify-between gap-12">
                <div className="w-2/5">
                    <img className="w-full object-cover"
                        src="/src/assets/contact-detail.svg" alt="" />
                </div>
                <div className="rounded-xl bg-slate-200 w-3/5 h-96">
                    <div className="p-5">
                        <h3 className="text-3xl font-semibold text-gray-700">Admin</h3>
                        <p className="text-gray-600">2nd year student</p>
                    </div>

                    <div className="p-5">
                        {/* email */}
                        <div className="flex items-end text-gray-700 py-2">
                            <h5>Gmail : </h5>
                            <p>&nbsp;jeetbherwani2004@gmail.com</p>
                        </div>

                        {/* github */}
                        <div className="flex items-end text-gray-700 py-2">
                            <h5>Github : </h5>
                            <Link
                                to='https://github.com/NightHunt04'
                                className="hover:text-blue-500">
                                <p className="cursor-pointer">&nbsp;NightHunt04 (username)</p>
                            </Link>
                        </div>

                        {/* insta */}
                        <div className="flex items-end text-gray-700 py-2">
                            <h5>Instagram : </h5>
                            <Link
                                to='https://instagram.com/jeet._004'
                                className="hover:text-pink-500">
                                <p className="cursor-pointer">&nbsp;@jeet._004 (username)</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}