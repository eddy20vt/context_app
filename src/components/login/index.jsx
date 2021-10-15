import React, {useContext, useRef} from 'react'
import {AppContext} from '../../context';


function Login() {

    const [state,setState] = useContext(AppContext);
    const userName = useRef();
    const userPass = useRef();

    const handleClick = (user,pass) => {
        setState({username: user, password: pass})
    }

    return (
        <div>
            <h2>LOGIN</h2>
                <input ref={userName}/>
                <input ref={userPass}/>
                <button onClick={() => handleClick(userName.current.value, userPass.current.value)}>SUBMIT</button>    
            <div>
            {state.username}
            </div>
        </div>
    )
}

export default Login
