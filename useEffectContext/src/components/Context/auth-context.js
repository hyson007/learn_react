import React from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    // this dummy function is for vscode auto completion
    onLogout: () => {} 
});

export default AuthContext;
