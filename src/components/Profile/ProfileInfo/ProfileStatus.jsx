import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }
    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactiveEditMode = () =>{
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }
    statusChange = (e) =>{
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevP, prevS) {
        if(prevP.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
        console.log('update');
    }
    render() {
        console.log('render');
        return (
            
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick ={ this.activeEditMode }>{this.props.status || '---'}</span>
                    </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={ this.statusChange } autoFocus={true} onBlur={ this.deactiveEditMode } value={this.state.status} />
                </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;