import React from 'react';
import useFirebase from "../Hook/useFirebase"

const Login = () => {
    const {handleGoogleSignIn} = useFirebase()
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google sign in</button>
        </div>
    );
};

export default Login;