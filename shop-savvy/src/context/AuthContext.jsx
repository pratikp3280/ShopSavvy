import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null);

  const login = (role) => {
    setUserRole(role);  // role = "admin" or "customer"
  };

  const logout = () => setUserRole(null);

  return (
    <AuthContext.Provider value={{ userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


/** You're importing:
                    React: Needed for JSX.
                    createContext: To create a new context (global storage bucket).
                    useState: To manage userRole (admin/user or null).
                    useContext: To use context in child components easily.

 * export const AuthProvider = ({ children }) => {
                    It will wrap your entire app, so all child components get access to login-related data.
🔍                  children = whatever components are inside <AuthProvider> (e.g., your whole app).
 * 
const [userRole, setUserRole] = useState(null);
                    state variable called userRole
                    It starts as null (no user logged in).
                    It can be set to "admin" or "customer" when a user logs in.
                
* const login = (role) => { setUserRole(role); };
                    Function to log in a user.
                    It takes a role ("admin" or "customer") and sets userRole to that value.


* const logout = () => setUserRole(null);
                    Function to log out a user.
                    It sets userRole back to null (no user logged in).

                    
<AuthContext.Provider value={{ userRole, login, logout }}>
                    Shares userRole
                    Shares the login() and logout() functions
                    Makes them available to all children inside the app
 
 
 export const useAuth = () => useContext(AuthContext);
                     This is a custom hook so you can access the context easily in other components.
                    Ex---const { userRole, login, logout } = useAuth();
 
 
                    */ 