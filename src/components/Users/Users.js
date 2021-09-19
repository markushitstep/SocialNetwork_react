import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../assets/img/user.png'
import { NavLink } from 'react-router-dom';


let Users =  (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.usersSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={styles.nummeredPages}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.salectedPage}
                        onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto} alt='avatar-icon' />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.isButtonProgress.some( id => id === u.id)} onClick={() => {
                                    props.unfollowClick(u.id);
                                    // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                    //     withCredentials: true ,
                                    //     headers:{
                                    //         'API-KEY' : '027bfafe-8474-4d75-8987-c79cec6ed1de'
                                    //     }
                                    // })
                                }}>unfollow</button>

                                : <button disabled={props.isButtonProgress.some( id => id === u.id)} onClick={() => {
                                    props.followClick(u.id);}}>follow</button>}
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
                </div>)
            }
        </div>
    )
}

export default Users;