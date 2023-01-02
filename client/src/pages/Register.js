import React from "react";
import { Link } from "react-router-dom";

class Register extends React.Component{

    // name,email,pass,pass confirm
    state = {
        name: '',
        email: '',
        password:'',
        confirmPassword:'',
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
        let {name,email,password,confirmPassword,error} = this.state
        return(
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <h1 className="text-center display-4">Register Here</h1>
                    <form onsubmit = {this.submitHandler}>
                        
                        <div className="form-group">
                            <label htmlFor="name">Name: </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Name"
                                name = 'name'
                                id='name'
                                value={name}
                                onChange = {this.changeHandler}
                            />
                        </div>

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

                        <div className="form-group">
                            <label htmlFor="confirmPassword">confirmPassword: </label>
                            <input
                                type="confirmPassword"
                                className="form-control"
                                placeholder="Enter Your confirmPassword"
                                name = 'confirmPassword'
                                id='confirmPassword'
                                value={confirmPassword}
                                onChange = {this.changeHandler}
                            />
                        </div>
                        <div className="mt-3">
                            <Link to='/login'>Already Have account? Log in Here</Link>
                        </div>
                        
                        <button className="mt-4 px-5 btn btn-primary">Sign Up</button>


                    </form>
                </div> 
            </div>
        )
    }
}


export default Register