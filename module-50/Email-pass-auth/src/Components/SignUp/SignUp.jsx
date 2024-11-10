import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth } from "../../firebase.init";
import { useState } from "react";
import { FaEye } from "react-icons/fa";

const SignUp = () => {
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignUp = e => {
        e.preventDefault();
        // console.log(e.target.email.value)
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        console.log(email, password, name, photo);

        // reset Error
        setErrorMessage('');
        setSuccess(false);

        if (password.length < 6) {
            setErrorMessage('Password Should be 6 Characters or Longer');
            return;
        }

        const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;

        if (!passwordRegex.test(password)) {
            setErrorMessage('At lest one uppercase, one lowercase, one special character');
            return;
        }
        // create user email and pass
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess(true);
            })

        // send verification email address
        sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log('verification email sent')
            })
            .catch(error => {
                console.log('ERROR', error.message);
                setErrorMessage(error.message);
                setSuccess(false)

                //update profile name and photo url
                const profile = {
                    displayName: name,
                    photoURL: photo
                }
                updateProfile(auth.currentUser, profile)
                    .then(() => {
                        console.log('user profile update')
                    })
                    .catch(error => console.log('user profile update error'));
            });

    }
    return (


        <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl mt-32">
            <h3 className="text-3xl text-center font-bold">Sign Up now!</h3>
            <form onSubmit={handleSignUp} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text"><i>Name</i></span>
                    </label>
                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        // type={showPassword ? 'text' : 'password'}
                        type="text"
                        placeholder="password"
                        name='password'
                        className="input input-bordered" required />
                    <button
                        // onClick={() => setShowPassword()}
                        className="btn btn-xs absolute right-4 top-12"> <FaEye></FaEye></button>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
            </form>
            {
                errorMessage && <p className="text-red-600">{errorMessage}</p>
            }
            {
                success && <p className="text-green-500">Sign Up Success</p>
            }
        </div>

    );
};

export default SignUp;