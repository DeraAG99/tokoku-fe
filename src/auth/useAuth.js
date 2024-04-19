import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const navigate = useNavigate();

    const signIn = async(username, password) => {
        try{
            const response = await
        
        }catch (error){

        }
    }
}