import React, {useState} from 'react'

export const AppContext = React.createContext(null);

function AppProvider(props) {
    var [state, setState] = useState({
        username: '',
        password: ''
      });

    return (
        <AppContext.Provider value={[state, setState]}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider
