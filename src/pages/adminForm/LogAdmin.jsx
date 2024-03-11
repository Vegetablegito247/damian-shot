import React from 'react';
import './logAdmin.css';

function LogAdmin() {
  return (
    <div className='form_admin' >
        <div className="form_cont">
            <div className="form_head">
                <h1>Lens Of Damiano</h1>
            </div>
            <form action="" className="form_main">
                <div className="form_inp">
                    <div className="inp_ctrl">
                        <input type="text" placeholder='Your Email' />
                    </div>
                    <div className="inp_ctrl">
                        <input type="text" placeholder='Your Password' />
                    </div>
                </div>
                <div className="submit_btn">
                    <button>Login</button>
                </div>
                <div className="forget">
                    <p>Forgot password</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LogAdmin