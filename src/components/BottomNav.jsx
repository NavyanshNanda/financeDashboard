import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function BottomNav() {
    const navigate = useNavigate();

    const navLinkClass = ({ isActive }) =>
        `flex size-14 items-center justify-center ${isActive ? 'text-white' : 'text-slate-400'}`;

    const activeStyle = ({ isActive }) =>
        isActive ? { fontVariationSettings: "'FILL' 1" } : {};

    return (
        <div className="fixed bottom-6 left-6 right-6 z-50">
            <div className="bg-slate-900/95 backdrop-blur-xl rounded-[2.5rem] p-2 flex justify-between items-center shadow-2xl shadow-slate-900/20">
                <NavLink to="/" className={navLinkClass}>
                    {({ isActive }) => (
                        <span className="material-symbols-outlined text-2xl" style={activeStyle({ isActive })}>home</span>
                    )}
                </NavLink>
                <NavLink to="/analytics" className={navLinkClass}>
                    {({ isActive }) => (
                        <span className="material-symbols-outlined text-2xl" style={activeStyle({ isActive })}>bar_chart</span>
                    )}
                </NavLink>
                <div className="relative">
                    <button
                        onClick={() => navigate('/add')}
                        className="flex size-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/20 transition-transform active:scale-90"
                    >
                        <span className="material-symbols-outlined text-3xl font-light">add</span>
                    </button>
                </div>
                <NavLink to="/transactions" className={navLinkClass}>
                    {({ isActive }) => (
                        <span className="material-symbols-outlined text-2xl" style={activeStyle({ isActive })}>account_balance_wallet</span>
                    )}
                </NavLink>
                <NavLink to="/settings" className={navLinkClass}>
                    {({ isActive }) => (
                        <span className="material-symbols-outlined text-2xl" style={activeStyle({ isActive })}>person</span>
                    )}
                </NavLink>
            </div>
        </div>
    );
}
