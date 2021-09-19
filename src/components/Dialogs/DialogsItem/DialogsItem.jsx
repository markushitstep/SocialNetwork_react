import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const Dialog = (props) => {
    let id = '/dialogs/' + props.id;
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <img src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png"></img>
            <NavLink to={id}>{props.name}</NavLink>
        </div>
    )
}


export default Dialog;