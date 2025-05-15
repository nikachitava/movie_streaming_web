// GoogleLoginButton.tsx
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const GoogleLoginButton = () => {
    return (
        <GoogleLogin
            onSuccess={(credentialResponse) => {
                const credential = credentialResponse.credential;
                if (credential) {
                    const decoded: any = jwtDecode(credential);
                    console.log("Decoded user:", decoded);
                }
            }}
            onError={() => {
                console.log("Login Failed");
            }}
        />
    );
};

export default GoogleLoginButton;
