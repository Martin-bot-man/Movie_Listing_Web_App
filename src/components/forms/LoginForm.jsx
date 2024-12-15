import { useState } from "react";
import { TbMail } from "react-icons/tb";
import { TiKeyOutline } from "react-icons/ti";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";


function LoginForm() {
    const [ formData, setFormData ] = useState({});
    const [ showpassword, setShowPassword ] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({...formData, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div className="h-full flex flex-col justify-center">
            <div className="mb-4">
                <span className="text-white font-extrabold text-3xl">Login</span>
            </div>
            <div className=" w-96">
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="flex space-x-2 items-center border rounded border-gray-500 px-1 bg-[#475069]">
                        <TbMail color="gray" />
                        <input onChange={(e)=> handleChange(e)} type='email' className="outline-none bg-[#475069] h-8 text-gray-200" name="email" placeholder="Email" required />
                    </div>
                    <div className="flex space-x-2 items-center border rounded border-gray-500 px-1 bg-[#475069]">
                        <TiKeyOutline color="gray" />
                        <input onChange={(e)=> handleChange(e)} type={showpassword ? 'text': 'password'} className="outline-none bg-[#475069] h-8 text-gray-200" name="password" placeholder="Password" required />
                        <div className="relative left-32">
                            {
                                showpassword ? 
                                <FiEyeOff className="cursor-pointer text-gray-400" onClick={() => setShowPassword(!showpassword)} />
                                : 
                                <FiEye className="cursor-pointer text-gray-400" onClick={() => setShowPassword(!showpassword)} />
                            }
                        </div>
                    </div>

                <div>
                        <button type='submit' className="bg-[#7B6EF6] hover:bg-[#7c6ef6a4] w-full text-white font-semibold text-2xl rounded">Login</button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm