import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserStatus, setUser, updateStatus } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = this.props.autorizedUserId;
            if(!userId){
                this.props.history.push('/login');
            }
        }
        this.props.setUser(userId);
        this.props.getUserStatus(userId);
    }
    
    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect (mapStateToProps, { setUser, getUserStatus, updateStatus }),
    withRouter
)(ProfileContainer);