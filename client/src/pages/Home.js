import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/actions/authActions";

class Home extends React.Component{
    render(){
        return(
            <div>
                <h1>I am home</h1>
            
            {
                this.props.auth.isAuthenticated ?
                <button
                onClick={() => this.props.logout(this.props.history)}
                 className="btn btn-danger"
                 >Log out</button>:
                <Link to="/login"><button className="btn btn-success">Log in</button></Link>
            }
            </div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps,{logout})(Home)