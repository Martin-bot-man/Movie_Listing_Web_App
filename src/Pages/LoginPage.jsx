import LoginForm from "../components/forms/LoginForm";

function LoginPage() {
    return (
        <div className="bg bg-gradient-to-r from-[#062032] via-[#062032] h-screen to-[#0C4265] space-x-16">
            <div className="flex  justify-center item-center space-x-16">
                <div className="">
                    <img src='/static/images/login.png' className="" alt="LOGIN" />
                </div>
                <div>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default LoginPage;