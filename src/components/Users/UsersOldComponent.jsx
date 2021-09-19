import React from 'react';
import styles from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/img/user.png'

const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            });
            // props.setUsers([
            //     { id: 1, photoUrl: 'https://www.pngkit.com/png/detail/911-9115516_avatar-icon-deadpool.png', followed: true, fullName: 'Maxim', status: 'I`m programmist', location: { city: 'Kiev', country: 'Ukraine' } },
            //     { id: 2, photoUrl: 'https://www.pngkit.com/png/detail/911-9115516_avatar-icon-deadpool.png', followed: false, fullName: 'Andry', status: 'I`m programmist too', location: { city: 'Moscow', country: 'Russia' } },
            //     { id: 3, photoUrl: 'https://www.pngkit.com/png/detail/911-9115516_avatar-icon-deadpool.png', followed: true, fullName: 'Alex', status: 'I`m programmist too', location: { city: 'Minsk', country: 'Belarus' } },
            //     { id: 4, photoUrl: 'https://www.pngkit.com/png/detail/911-9115516_avatar-icon-deadpool.png', followed: false, fullName: 'Kirill', status: 'I`m programmist too', location: { city: 'Golden-Seands', country: 'Bolgary' } }
            // ])
        }
    }


    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                (props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto} alt='avatar-icon' />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unFollow(u.id) }}>unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>))
            }
        </div>)
}

export default Users;