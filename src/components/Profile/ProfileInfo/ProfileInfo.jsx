import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    
    if(!props.profile){
        return <Preloader />
    }

    return (

        <div >
            <div>
                <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' />
            </div>

            <div className={s.deskriptionsBlock}>
                <div>
                    <img src={props.profile.photos.large}/>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                    <p>{props.profile.fullName}</p>
                    <p>{props.profile.aboutMe}</p>
                </div>
            </div>
        </div>
    );

}

export default ProfileInfo;