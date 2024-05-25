import { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
// import axios from 'axios';
import { UserContext } from "../UserContext";
import apiClient from "../api";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUser} = useContext(UserContext);

    async function handleLoginSubmit(event) {
        event.preventDefault();
        try {
            const {data} = await apiClient.post('/login', {email, password}, {withCredentials: true});
            setUser(data);
            alert('Login Succesful.');
            setRedirect(true);
        }
        catch (e){
            alert('Login Failed.');
        }
    }

    if(redirect) {
        return <Navigate to={'/'} />
    }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
                    <input
                        type="email"
                        placeholder="atharvkulkarni429@gmail.com"
                        value={email}
                        onChange = {event => setEmail(event.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange = {event => setPassword(event.target.value)}
                    />
                    <button className="primary">Login</button>
                    <div className="text-center py-2 text-gray-500">
                        Don't have an account yet? <Link className="underline text-black" to={'/register'}>Register Now</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}