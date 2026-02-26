import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function MainLayout() {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pb-32 bg-background-light font-display text-slate-900 antialiased">
            <Outlet />
            <BottomNav />
        </div>
    );
}
