import React from 'react';
import Header from '../components/Header';
import { useTransactions } from '../context/TransactionContext';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const { totalBalance, totalExpense, transactions } = useTransactions();
    const navigate = useNavigate();

    // Get up to 3 most recent transactions
    const recentTransactions = transactions.slice(0, 3);

    return (
        <>
            <Header title="Dashboard" />
            <div className="px-6 space-y-4">
                { /* Mesh Gradient Total Balance Card */}
                <div className="mesh-gradient relative overflow-hidden flex flex-col items-center justify-center rounded-3xl shadow-sm border border-slate-100 p-8">
                    <p className="text-slate-500 text-sm font-medium mb-1">Total Balance</p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-slate-400 text-2xl font-semibold">$</span>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                            {totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </h1>
                    </div>
                    <div className="mt-6 flex gap-3 w-full">
                        <button className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-2xl text-sm font-semibold transition-transform active:scale-95">
                            <span className="material-symbols-outlined text-lg">arrow_upward</span>
                            Send
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 bg-white text-slate-900 py-3 rounded-2xl text-sm font-semibold border border-slate-100 shadow-sm transition-transform active:scale-95">
                            <span className="material-symbols-outlined text-lg">arrow_downward</span>
                            Receive
                        </button>
                    </div>
                </div>

                { /* Grid Cards */}
                <div className="grid grid-cols-2 gap-4">
                    { /* Spending */}
                    <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
                        <div>
                            <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider mb-3">Spending</p>
                            <p className="text-lg font-bold text-slate-900">
                                ${totalExpense.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                            </p>
                        </div>
                        <div className="flex items-end justify-between gap-1 h-12 mt-4">
                            <div className="w-2 bg-slate-100 rounded-full h-[40%]"></div>
                            <div className="w-2 bg-primary/40 rounded-full h-[70%]"></div>
                            <div className="w-2 bg-primary rounded-full h-[100%]"></div>
                            <div className="w-2 bg-slate-100 rounded-full h-[50%]"></div>
                            <div className="w-2 bg-slate-100 rounded-full h-[65%]"></div>
                        </div>
                    </div>

                    { /* Credit Score */}
                    <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
                        <div>
                            <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider mb-3">Credit Score</p>
                        </div>
                        <div className="relative flex flex-col items-center justify-center">
                            <svg className="w-full h-16" viewBox="0 0 100 60">
                                <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#f1f5f9" strokeLinecap="round" strokeWidth="8"></path>
                                <path className="gauge-path" d="M 10 50 A 40 40 0 0 1 75 20" fill="none" stroke="url(#gauge-grad)" strokeLinecap="round" strokeWidth="8"></path>
                                <defs>
                                    <linearGradient id="gauge-grad" x1="0%" x2="100%" y1="0%" y2="0%">
                                        <stop offset="0%" stopColor="#ef4444"></stop>
                                        <stop offset="50%" stopColor="#f59e0b"></stop>
                                        <stop offset="100%" stopColor="#10b77f"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className="absolute bottom-0 text-center">
                                <span className="text-lg font-bold text-slate-900 leading-none">740</span>
                                <p className="text-[9px] text-primary font-bold">Good</p>
                            </div>
                        </div>
                    </div>
                </div>

                { /* Transactions List */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-base font-bold text-slate-800">Transactions</h3>
                        <button
                            onClick={() => navigate('/transactions')}
                            className="text-xs font-bold text-primary px-3 py-1 bg-primary/10 rounded-full"
                        >
                            See All
                        </button>
                    </div>
                    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                        <div className="divide-y divide-slate-50">
                            {recentTransactions.map(t => (
                                <div key={t.id} className="flex items-center gap-4 p-4">
                                    <div className={`size-11 flex items-center justify-center rounded-full border border-slate-100 ${t.colorClass}`}>
                                        <span className={`material-symbols-outlined text-xl ${t.iconColor}`}>{t.icon}</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-sm text-slate-800">{t.merchant}</p>
                                        <p className="text-xs text-slate-400">
                                            {t.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                                        </p>
                                    </div>
                                    <p className={`font-bold text-sm ${t.type === 'income' ? 'text-primary' : 'text-slate-900'}`}>
                                        {t.type === 'income' ? '+' : '-'}${t.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
