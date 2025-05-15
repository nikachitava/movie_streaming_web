import GoogleLoginButton from "../components/GoogleButton";
import backgroundImage from "/assets/images/auth_background.svg";

const Auth = () => {
    return (
        <main className="relative w-full h-screen flex justify-center items-center overflow-hidden">
            <img
                src={backgroundImage}
                alt="Background"
                className="absolute  inset-0 w-full h-full object-cover z-10"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-[#6100C2]/b70 to-[#191817]/b95 -z-10"></div>

            <div className="relative z-10 text-center text-white">
                <div className="flex flex-col gap-4">
                    <img
                        src="/assets/icons/logo.svg"
                        alt="logo"
                        className="mx-auto mb-6"
                    />
                    <h3 className="text-3xl font-semibold mb-2">
                        Enjoy the newest movies
                    </h3>
                </div>
                <div className="mt-4 flex flex-col items-center gap-2">
                    <GoogleLoginButton />
                    <p className="text-lg">
                        No Account?{" "}
                        <span className="underline cursor-pointer">
                            Sign Up
                        </span>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Auth;
