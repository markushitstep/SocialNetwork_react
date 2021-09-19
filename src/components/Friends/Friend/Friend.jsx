import s from './Friend.module.css';

const Friend = (props) => {

    return (
        <div className={s.friend}>
            <img src='https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png'></img>
           
            {props.name}
            
        </div>
    )
}

export default Friend;