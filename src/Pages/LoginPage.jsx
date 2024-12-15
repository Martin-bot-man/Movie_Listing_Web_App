import LoginForm from "../components/forms/LoginForm";
import Navbar from "../components/Navbar";

function LoginPage() {
    return (
        <div className="bg bg-gradient-to-r from-[#062032] via-[#062032] h-screen to-[#0C4265] space-x-16">
            <Navbar />
            <div className="flex  justify-center item-center space-x-16 pt-16">
                <div className="">
                    <img src='/static/images/login.png' className="h-[30rem]" alt="LOGIN" />
                </div>
                <div>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default LoginPage;