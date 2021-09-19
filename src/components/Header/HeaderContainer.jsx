import React from 'react'
import { connect } from 'react-redux';
import Header from './Header';
import { logout } from '../../redux/authMeReducer';


class HeaderContainer extends React.Component {

    // componentDidMount() {
    //     this.props.authMe();
    // }
    
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, { logout })(HeaderContainer);