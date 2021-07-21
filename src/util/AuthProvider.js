import react, {createContext} from 'react';
import auth from '@react-@react-native-firebase/auth';
import { async } from 'q';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,login: async (email,password) => {
          try{
            await auth().signInWithEmailAndPassword(email, password)
          } catch(e) {
            console.log(e);
          }
        },
        register: async (email,password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch(e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch(e) {
            console.log(e);
          }
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}