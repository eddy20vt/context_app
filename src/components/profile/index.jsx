import React, { useContext } from 'react'
import { AppContext } from '../../context';

function Profile() {
    const [state,setState] = useContext(AppContext);
    return (
        <div>
            <h2>PROFILE</h2>
            {state.username}
        </div>
    )
}

export default Profile
