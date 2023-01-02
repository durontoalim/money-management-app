import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component{

    // name,email,pass,pass confirm
    state = {
        email: '',
        password:'',
        error:{}
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = event => {
        event.preventDefault()
    }

    render(){
        let {email,password,error} = this.state
        return(
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <h1 className="text-center display-4">Login Here</h1>
                    <form onsubmit = {this.submitHandler}>
                        

                        <div className="form-group">
                            <label htmlFor="email">Email: </label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Your Email"
                                name = 'email'
                                id='email'
                                value={email}
                                onChange = {this.changeHandler}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password: </label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter Your Password"
                                name = 'password'
                                id='password'
                                value={password}
                                onChange = {this.changeHandler}
                            />
                        </div>
                        <div className="mt-3">
                            <Link to='/register'>Don't Have account? Registration Here</Link>
                        </div>
                        
                        <button className="mt-4 px-5 btn btn-primary">Log In</button>


                    </form>
                </div> 
            </div>
        )
    }
}


export default Login