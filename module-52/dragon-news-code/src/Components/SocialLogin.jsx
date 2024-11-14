import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa6";

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3'><i>Login With</i></h2>
            <div className="*:w-full space-y-2">
                <button className='btn'><FaGoogle /> Login With Google</button>
                <button className='btn'><FaGithub /> Login With Git Hub</button>
            </div>
        </div>
    );
};

export default SocialLogin;