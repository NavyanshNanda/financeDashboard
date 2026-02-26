import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTransactions } from '../context/TransactionContext';

const CATEGORIES = {
    Food: { icon: 'fastfood', iconColor: 'text-orange-500', colorClass: 'bg-orange-100', borderActive: 'border-orange-500' },
    Shopping: { icon: 'shopping_bag', iconColor: 'text-blue-500', colorClass: 'bg-blue-100', borderActive: 'border-blue-500' },
    Travel: { icon: 'directions_car', iconColor: 'text-purple-500', colorClass: 'bg-purple-100', borderActive: 'border-purple-500' },
    Fun: { icon: 'movie', iconColor: 'text-pink-500', colorClass: 'bg-pink-100', borderActive: 'border-pink-500' },
    Other: { icon: 'more_horiz', iconColor: 'text-slate-500', colorClass: 'bg-slate-100', borderActive: 'border-slate-500' }
};

export default function AddTransaction() {
    const navigate = useNavigate();
    const { addTransaction } = useTransactions();

    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('Food');
    const [method, setMethod] = useState('UPI');
    const [note, setNote] = useState('');

    const handleSave = () => {
        const parsedAmount = parseFloat(amount);
        if (isNaN(parsedAmount) || parsedAmount <= 0) return;

        const details = CATEGORIES[category];

        addTransaction({
            merchant: note || category,
            category: category,
            icon: details.icon,
            colorClass: details.colorClass,
            iconColor: details.iconColor,
            type: 'expense',
            amount: parsedAmount,
            method: method
        });

        navigate(-1);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <div className="flex items-center sticky top-0 z-20 px-6 py-4 justify-between bg-slate-50/80 backdrop-blur-md">
                <button
                    onClick={() => navigate(-1)}
                    className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm border border-slate-100 transition-transform active:scale-90"
                >
                    <span className="material-symbols-outlined text-slate-600">close</span>
                </button>
                <h2 className="text-base font-bold text-slate-800">Add Transaction</h2>
                <div className="size-10"></div>
            </div>

            <div className="px-6 space-y-4 flex-1">
                {/* Enter Amount Card */}
                <div className="bg-emerald-50 rounded-3xl p-8 flex flex-col items-center justify-center border border-primary/10">
                    <p className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Enter Amount</p>
                    <div className="flex items-center">
                        <span className="text-primary/60 text-3xl font-bold mr-1">$</span>
                        <input
                            autoFocus
                            className="bg-transparent border-none text-center text-5xl font-bold text-primary focus:ring-0 p-0 w-full max-w-[200px] outline-none"
                            type="number"
                            placeholder="0.00"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                </div>

                {/* Category Selector */}
                <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                    <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mb-4">Select Category</p>
                    <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                        {Object.entries(CATEGORIES).map(([catKey, details]) => (
                            <div
                                key={catKey}
                                onClick={() => setCategory(catKey)}
                                className="flex flex-col items-center gap-2 shrink-0 cursor-pointer"
                            >
                                <div className={`size-14 rounded-full ${details.colorClass} flex items-center justify-center border-2 transition-transform active:scale-95 ${category === catKey ? details.borderActive : 'border-transparent'}`}>
                                    <span className={`material-symbols-outlined ${details.iconColor} text-2xl`} style={{ fontVariationSettings: "'FILL' 1" }}>
                                        {details.icon}
                                    </span>
                                </div>
                                <span className={`text-[10px] font-bold uppercase tracking-tight ${category === catKey ? 'text-slate-800' : 'text-slate-500'}`}>
                                    {catKey}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Date and Method */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-3">
                        <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">Date</p>
                        <div className="flex items-center gap-3">
                            <div className="size-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600">
                                <span className="material-symbols-outlined text-xl">calendar_today</span>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-800 leading-none">Today</p>
                                <p className="text-[10px] text-slate-400 mt-1">
                                    {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-3">
                        <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">Method</p>
                        <div className="flex bg-slate-100 p-1 rounded-2xl segmented-control">
                            <input
                                checked={method === 'UPI'}
                                onChange={() => setMethod('UPI')}
                                className="hidden peer/upi"
                                id="upi" name="payment" type="radio"
                            />
                            <label className="flex-1 text-center py-2 rounded-xl text-xs font-bold text-slate-500 cursor-pointer transition-all peer-checked/upi:bg-white peer-checked/upi:text-slate-900 peer-checked/upi:shadow-sm" htmlFor="upi">
                                UPI
                            </label>

                            <input
                                checked={method === 'Cash'}
                                onChange={() => setMethod('Cash')}
                                className="hidden peer/cash"
                                id="cash" name="payment" type="radio"
                            />
                            <label className="flex-1 text-center py-2 rounded-xl text-xs font-bold text-slate-500 cursor-pointer transition-all peer-checked/cash:bg-white peer-checked/cash:text-slate-900 peer-checked/cash:shadow-sm" htmlFor="cash">
                                Cash
                            </label>
                        </div>
                    </div>
                </div>

                {/* Note */}
                <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                    <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mb-2">Note (Optional)</p>
                    <input
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        className="w-full border-none p-0 text-sm font-medium text-slate-800 placeholder-slate-300 focus:ring-0 outline-none"
                        placeholder="What's this for?"
                        type="text"
                    />
                </div>

                {/* Save Button */}
                <div className="pt-4 pb-20">
                    <button
                        onClick={handleSave}
                        disabled={!amount}
                        className={`w-full py-5 rounded-3xl text-base font-bold shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 ${amount ? 'bg-primary text-white shadow-primary/30' : 'bg-slate-200 text-slate-400 shadow-none'}`}
                    >
                        <span className="material-symbols-outlined text-xl">check_circle</span>
                        Save Transaction
                    </button>
                </div>
            </div>
        </div>
    );
}
