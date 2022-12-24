import React, { useRef } from 'react';
import '../css/login.css'

const Login = (props) => {
    const { isTaggle, setIsTaggle } = props;

    const usernameRef = useRef();
    const passwordRef = useRef();

    const handeluserLogin = () => {

        const userPassword = String(passwordRef.current.value); // input password convart to string

        if (usernameRef.current.value === "nazmul@gmail.com" && userPassword === "12345") {
            setIsTaggle(!isTaggle);
        }
        else {
            alert("wrong password! try to email : nazmul@gmail.com & password:12345 ");
        }
    }

    return (
        <div className='main-continer'>
            {/* loging section main continer */}
            <div className='login-continer'>
                <h3>Wellcome! login here</h3>
                <form onSubmit={handeluserLogin}>
                    <div>
                        <input
                            ref={usernameRef}
                            type="text"
                            placeholder='nazmul@gmail.com' />
                    </div>
                    <div>
                        <input
                            ref={passwordRef}
                            type="password"
                            placeholder='pass: 12345' />
                    </div>
                    <button type='submit'>login</button>
                </form>
            </div>
        </div>
    )
}

export default Login