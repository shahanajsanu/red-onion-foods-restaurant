import React from 'react';
import Auth from './useAuth';

const Login = () => {
    const auth = Auth();
    console.log(auth.signInWithGoogle);
    
    return (
        <div>
            <h3>Join with us</h3>
            {
                auth.user ? <button onClick={auth.signOut}>Sign Out</button> :
                <button onClick={auth.signInWithGoogle}>Sign in with Google</button>
            }
        </div>
    );
};

export default Login;