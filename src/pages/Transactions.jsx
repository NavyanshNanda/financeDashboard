import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTransactions } from '../context/TransactionContext';

export default function Transactions() {
    const navigate = useNavigate();
    const { transactions } = useTransactions();

    return (
        <div className="mesh-gradient-bg min-h-screen flex flex-col pb-24">
            <header className="px-6 pt-8 pb-4">
                <div className="flex items-center justify-between mb-6">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm border border-slate-100 active:scale-95 transition-transform"
                    >
                        <span className="material-symbols-outlined text-slate-600">arrow_back_ios_new</span>
                    </button>
                    <button className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm border border-slate-100 active:scale-95 transition-transform">
                        <span className="material-symbols-outlined text-slate-600 text-[20px]">search</span>
                    </button>
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Recent Transactions</h1>
            </header>

            <div className="px-6 mb-6 shrink-0">
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                    <button className="px-6 py-2.5 bg-primary text-white rounded-full text-sm font-semibold shadow-sm shadow-primary/20 whitespace-nowrap">
                        All
                    </button>
                    <button className="px-6 py-2.5 bg-white text-slate-500 border border-slate-100 rounded-full text-sm font-semibold whitespace-nowrap active:bg-slate-50 transition-colors">
                        UPI
                    </button>
                    <button className="px-6 py-2.5 bg-white text-slate-500 border border-slate-100 rounded-full text-sm font-semibold whitespace-nowrap active:bg-slate-50 transition-colors">
                        Cash
                    </button>
                    <button className="px-6 py-2.5 bg-white text-slate-500 border border-slate-100 rounded-full text-sm font-semibold whitespace-nowrap active:bg-slate-50 transition-colors">
                        Income
                    </button>
                </div>
            </div>

            <div className="px-4 flex-1">
                <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm min-h-full overflow-hidden">
                    <div className="px-6 pt-6 pb-2">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">History</h3>
                    </div>
                    <div className="divide-y divide-slate-50">
                        {transactions.map((t) => (
                            <div key={t.id} className="flex items-center gap-4 p-5 active:bg-slate-50 transition-colors cursor-pointer">
                                <div className={`size-12 flex items-center justify-center rounded-full border border-slate-100 ${t.colorClass}`}>
                                    <span className={`material-symbols-outlined ${t.iconColor}`}>{t.icon}</span>
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-[15px] text-slate-800">{t.merchant}</p>
                                    <p className="text-xs font-medium text-slate-400">
                                        {t.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })} • {t.category}
                                    </p>
                                </div>
                                <p className={`font-bold text-[15px] ${t.type === 'income' ? 'text-primary' : 'text-slate-900'}`}>
                                    {t.type === 'income' ? '+' : '-'}${t.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
