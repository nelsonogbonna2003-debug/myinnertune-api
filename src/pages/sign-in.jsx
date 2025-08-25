import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthCard from '../components/AuthCard';
import { supabase } from '../lib/supabaseClient';
import { Link } from 'react-router-dom';


function Signup({ onDone, switchToLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
            setLoading(true);
            setError('');
            setSuccessMsg('');

        const { error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
        setError(error.message);
        } else {
            setSuccessMsg("Signup successful");
            setEmail('');
            setPassword('');
            setTimeout(() => {
                navigate('/login');
            }, 2000);
            
        }
            setLoading(false);
    };

    return (
        <>
            <div>
                <h2 className='text-2xl text-white font-semibold text-center mt-[50px]'>Welcome to My-Inner Focus</h2>
                <AuthCard title="Create your account" subtitle="Sign up to continue">
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
                    {successMsg && (
                        <div className="text-sm text-green-600">{successMsg}</div>
                    )}
                    <button className="w-full inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium bg-black text-white" disabled={loading}>{loading ? 'Creating…' : 'Sign up'}</button>
                </form>
                <div className="text-center text-sm mt-4">Already have an account? <Link className='text-blue-600' to="/login">Login</Link></div>
                </AuthCard>
            </div>
        </>
    )
}
export default Signup
