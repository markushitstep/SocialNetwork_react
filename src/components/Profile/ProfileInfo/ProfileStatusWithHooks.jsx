import React, { useEffect, useState } from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    
    useEffect( () =>{
        setStatus(props.status);
    }, [props.status]);

    const activeEditMode = () =>{
        setEditMode(true);
    }

    const deactiveEditMode = () =>{
        setEditMode(false);
        props.updateStatus(status);
    }

    const statusChange = (e) =>{
        setStatus(e.currentTarget.value);
    }

    return (

        <div>
            { !editMode &&
                <div>
                    <span onDoubleClick ={ activeEditMode }>{props.status || '---'}</span>
                </div>
            }
            { editMode &&
                <div>
                    <input onChange={ statusChange } autoFocus={true} onBlur={ deactiveEditMode } value={status} />
                </div>
            }
        </div>
    );

}

export default ProfileStatusWithHooks;