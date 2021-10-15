import React from 'react'
import AppProvider from '../../context';
import Login from '../login';
import Profile from '../profile';

function MainPage() {
    return (
        <AppProvider>
        <div>
            <Login />
            <Profile />
        </div>
        </AppProvider>
    )
}

export default MainPage
