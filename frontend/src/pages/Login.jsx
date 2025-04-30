import axios from 'axios';
import { useState } from 'react';
import { useAuth } from '../auth/AuthContext';

const Login = () => {
    const { login } = useAuth();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loginData, setLoginData] = useState({
        username: "Gazdag99",
        password: "gb990726"
    });

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'


    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError(null);
        
        try {
            const response = await axios.post(`${API_URL}/admin/login`, loginData);
            if (response.status === 200 && response.data.token) {
                login(response.data.token);
            } else {
                setError('Invalid login response');
            }
        } catch (error) {
            console.error('Login error:', error);
            if (error.response) {
                setError(`Login failed: ${error.response.data.message || error.response.statusText}`);
            } else if (error.request) {
                setError('No response from server. Is the server running?');
            } else {
                setError(`Error: ${error.message}`);
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex min-h-full h-[100svh] flex-1 flex-col justify-center px-6 py-20 lg:px-8 items-center">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-wedding-gray">
                    Admin felület belépés
                </h2>
                <p>git push Kizárolag a vőlegény és mennyasszony részére!</p>
            </div>

           

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                        {error}
                    </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                            Felhasználónév
                        </label>
                        <div className="mt-2">
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                value={loginData.username}
                                onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                                autoComplete="username"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-wedding-brown sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                Jelszó
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-wedding-brown hover:text-wedding-brown-darker">
                                    Elfelejtetted a jelszót?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={loginData.password}
                                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                                autoComplete="current-password"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 hover:text-wedding-brown-darker sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex w-full justify-center rounded-md bg-wedding-brown px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-wedding-deep-brown cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-70"
                        >
                            {loading ? "Folyamatban..." : "Belépés"}
                        </button>
                    </div>
                </form>

                <p className='w-full opacity-50 mt-20 text-gray text-center flex flex-col gap-3 p-10 rounded-md'>
                    <span className='font-bold'>Megjegyzés</span>
Itt kezeljük a vendégek visszajelzéseit, üzeneteit és fotóit, valamint az oldal teljes tartalmát.
Ha véletlenül tévedtél ide, kérünk, hogy hagyd el az oldalt — ez a kulisszák mögötti rész. 😉</p>

            </div>
        </div>
    );
};

export default Login;