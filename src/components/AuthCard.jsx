function AuthCard({ title, subtitle, children, footer }) {
return (
    <div className="container-auth">
        <div className="card">
        <h1 className="text-2xl font-semibold text-center">{title}</h1>
        {subtitle && <p className="text-sm text-gray-500 mt-1 text-center">{subtitle}</p>}
        <div className="mt-6 space-y-4">{children}</div>
        {footer && <div className="mt-6 text-sm text-gray-600">{footer}</div>}
        </div>
        <p className="text-[11px] text-gray-500 mt-4 text-center">By continuing you agree to our Terms and Privacy.</p>
    </div>
    );
}
export default AuthCard