import { useState } from 'react';
import AuthCard from '../components/AuthCard';
import { api } from '../lib/api';
import { Link } from 'react-router-dom';


function Login ({ onDone, switchToLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
    await api.signup({ email, password });
    onDone?.();
    } catch (err) {
    setError(err?.message || 'Signup failed');
    } finally { setLoading(false); }
    };
    return (
        <>
            <div>
                <h2 className='text-2xl text-white font-semibold text-center mt-[50px]'>Welcome to My-Inner Focus</h2>
                <AuthCard title="Login" subtitle="Login to continue">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                    <label className="text-sm">Email</label>
                    <input className="input mt-1 outline-none" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
                    </div>
                    <div>
                    <label className="text-sm">Password</label>
                    <input className="input mt-1 outline-none" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
                    </div>
                    {error && <div className="text-sm text-red-600">{error}</div>}
                    <button className="btn w-full" disabled={loading}>{loading ? 'Logging…' : 'Login'}</button>
                </form>
                <div className="text-center text-sm mt-4">Dont have a account <Link className='text-blue-600' to="/sign-up">Sign-up</Link></div>
                </AuthCard>
            </div>
        </>
    )
}
export default Login
