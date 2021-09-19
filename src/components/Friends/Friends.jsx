import Friend from './Friend/Friend';
import s from './Friends.module.css';

const Friends = (props) =>{

    let friends = props.store.getState().sideBar.friends;
    
    let friendsElement = friends.map( el => <Friend name={el.name}/>);
    return (
        <div className={s.friends}>
            {friendsElement}
        </div>
    )
}

export default Friends;