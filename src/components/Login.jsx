import React, { useState } from 'react';

function Login() {
    const [pseudoInput,setPseudoInput] = useState("")
    return (
        <div>
            <h1>Login</h1>
            <label htmlFor="">
                pseudo 
            </label>
            <input type="text"
                value={pseudoInput}
                onChange={
                    (e)=>setPseudoInput(e.target.value)
                }
            />
            <button 
            onClick={
                ()=>onLoginSubmit(pseudoInput)
            }>
                Acceder
            </button>
        </div>
    );
}

export default Login;