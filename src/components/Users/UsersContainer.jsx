import React from 'react';
import { connect } from 'react-redux';
import { getUsers, onPageChanged, unfollowClick, followClick} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { getPageSize, getUserss, getTotalUsersCount, getCurrentPage, getIsFetching, getIsButtonProgress } from '../../redux/users-Selectors';


class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.usersSize);
        
        // usersAPI.getUsers(this.props.currentPage, this.props.usersSize).then(data => {
        //     this.props.toogleIsFetching(false);
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        // });
    }
    
    onPageChanged = (pageNumber) => {
        this.props.onPageChanged(pageNumber, this.props.usersSize);
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                usersSize={this.props.usersSize}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollowClick={this.props.unfollowClick}
                followClick={this.props.followClick}
                isButtonProgress={this.props.isButtonProgress} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUserss(state) ,
        usersSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state) ,
        isFetching: getIsFetching(state),
        isButtonProgress: getIsButtonProgress(state),
    }
};

export default compose(
    connect(mapStateToProps, { getUsers, onPageChanged, unfollowClick, followClick }),
    //withAuthRedirect
)(UsersContainer);
document.getElementById("tea")