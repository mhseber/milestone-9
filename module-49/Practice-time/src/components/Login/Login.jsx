import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/__fire__";

const Login = () => {
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)
            })
            .catch(error => {
                console.log('ERROR', error)
            })
    }
    return (
        <div >
            <button onClick={handleGoogleSignIn}>Login Google</button>
        </div>
    );
};

export default Login;