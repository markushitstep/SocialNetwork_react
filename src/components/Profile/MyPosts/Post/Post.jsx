import Like from './Like/Like';
import s from './Post.module.css';

const Post = (props) => {
    return (

        <div className={s.item}>
            <img className={s.pic} src="https://www.kindpng.com/picc/m/105-1055561_gaming-logo-avatar-png-transparent-png.png"></img>
            {props.message}

            <Like count={props.count} />
            
        </div>

    );

}

export default Post;