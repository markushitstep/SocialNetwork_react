import s from './Like.module.css';

const Like = (props) => {
    return (

        <div className={s.like}>
            <img className={s.pic}src="https://орфографика.рф/800/600/https/img.icons8.com/pastel-glyph/2x/facebook-like.png"></img>
            {props.count}
        </div>

    );

}

export default Like;