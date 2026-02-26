import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header({ title = 'Dashboard', showBack = false }) {
    const navigate = useNavigate();

    return (
        <div className="flex items-center sticky top-0 z-20 px-6 py-4 justify-between bg-background-light/80 backdrop-blur-md">
            <div
                onClick={() => showBack ? navigate(-1) : null}
                className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm border border-slate-100 cursor-pointer"
            >
                <span className="material-symbols-outlined text-slate-600">
                    {showBack ? 'arrow_back' : 'grid_view'}
                </span>
            </div>
            <h2 className="text-base font-bold text-slate-800">{title}</h2>
            <div className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm border border-slate-100 relative cursor-pointer">
                <span className="material-symbols-outlined text-slate-600">notifications</span>
                <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white"></span>
            </div>
        </div>
    );
}
