import { createContext, useState, useEffect, ReactNode, useContext, Dispatch, SetStateAction } from 'react';
import { getAuth, removeAuth, setAuth } from '../utils/auth-helper';
import { Alert, Snackbar } from '@mui/material';
import { AlertItem } from '../interface/base.type';
import { getCurrentUser } from '../services/auth';

interface User {
  userId: string;
  name: string;
  email: string;
  image: string;
}

interface StoreContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  logOut: Dispatch<SetStateAction<any>>;
  addAlert: (newAlerts: string | string[], type: 'success' | 'info' | 'warning' | 'error') => void;
  setUserToken: Dispatch<SetStateAction<string>>;
}

const StoreContext: any = createContext<StoreContextType>({
  currentUser: null,
  isAuthenticated: false,
  logOut: () => { },
  addAlert: () => { },
  setUserToken: () => { }
});
const useStore = (): StoreContextType => {
  return useContext(StoreContext);
};
const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [alerts, setAlerts] = useState<AlertItem[]>([])
  const [userToken, setUserToken] = useState<string | null>()
  useEffect(() => {
    // Fetch user data when component mounts
    userToken && setAuth(userToken)
    const fetchUserData = async () => {
      try {
        const { data, success } = await getCurrentUser(); // Replace '/auth/me' with your actual API endpoint
        if (success) {
          setCurrentUser(data.user); // Update currentUser with the response data
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    userToken && fetchUserData();

  }, [userToken]);

  useEffect(() => {
    setUserToken(getAuth())
  }, [])

  function addAlert(newAlerts: string | string[], type: 'success' | 'info' | 'warning' | 'error') {
    if (typeof newAlerts == "string") {
      setAlerts((alerts) => [...alerts, { id: Date.now(), type, text: newAlerts }])
    } else {
      setAlerts((alerts) => [...alerts, ...newAlerts.map((item) => { return { id: Date.now(), type, text: item } })])
    }
  }

  function removeAlert(alertId: number) {
    setAlerts((alerts) => alerts.filter(({ id }) => id != alertId))
  }

  function logOut() {
    setCurrentUser(null)
    setUserToken(null)
    removeAuth()
  }
  return (<StoreContext.Provider value={{
    currentUser,
    isAuthenticated: !!currentUser,
    logOut,
    addAlert,
    setUserToken
  }}>
    {children}

    {alerts.map(({ id, text, type }) => {
      return <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={true}
        onClose={() => removeAlert(id)}
        autoHideDuration={5000}
        key={id}
      >
        <Alert severity={type}>{text}</Alert>
      </Snackbar>
    })}
  </StoreContext.Provider>)

}

export { useStore, StoreProvider }

