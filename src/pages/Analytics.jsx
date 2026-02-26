import React from 'react';
import Header from '../components/Header';
import { useTransactions } from '../context/TransactionContext';

export default function Analytics() {
    const { transactions, totalExpense } = useTransactions();

    const expenses = transactions.filter(t => t.type === 'expense');

    // Group by category
    const categories = expenses.reduce((acc, curr) => {
        if (!acc[curr.category]) {
            acc[curr.category] = {
                amount: 0,
                icon: curr.icon,
                colorClass: curr.colorClass,
                iconColor: curr.iconColor,
            };
        }
        acc[curr.category].amount += curr.amount;
        return acc;
    }, {});

    // Convert to array and sort by amount descending
    const sortedCategories = Object.entries(categories)
        .map(([name, data]) => ({
            name,
            ...data,
            percentage: totalExpense > 0 ? (data.amount / totalExpense) * 100 : 0
        }))
        .sort((a, b) => b.amount - a.amount);

    const topCategory = sortedCategories.length > 0 ? sortedCategories[0] : null;

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            <Header title="Spending Analytics" showBack={true} />

            <div className="px-6 space-y-4">
                {/* Donut Chart */}
                <div className="bg-white relative overflow-hidden flex flex-col items-center justify-center rounded-3xl shadow-sm border border-slate-100 p-8">
                    <div className="relative flex items-center justify-center w-48 h-48">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" fill="transparent" r="40" stroke="#f1f5f9" strokeWidth="12"></circle>
                            <circle className="donut-segment" cx="50" cy="50" fill="transparent" r="40" stroke="#10b77f" strokeDasharray="150.7 251.2" strokeDashoffset="0" strokeWidth="12" style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%', transition: 'stroke-dashoffset 0.35s' }}></circle>
                            <circle className="donut-segment" cx="50" cy="50" fill="transparent" r="40" stroke="#8daef4" strokeDasharray="60.3 251.2" strokeDashoffset="-150.7" strokeWidth="12" style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%', transition: 'stroke-dashoffset 0.35s' }}></circle>
                            <circle className="donut-segment" cx="50" cy="50" fill="transparent" r="40" stroke="#f59e0b" strokeDasharray="40.2 251.2" strokeDashoffset="-211" strokeWidth="12" style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%', transition: 'stroke-dashoffset 0.35s' }}></circle>
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <p className="text-slate-400 text-xs font-medium">Total Spent</p>
                            <p className="text-2xl font-bold text-slate-900">${totalExpense.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-wrap justify-center gap-4 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        {sortedCategories.slice(0, 3).map((cat, index) => {
                            const colors = ['bg-primary', 'bg-accent-blue', 'bg-amber-500'];
                            return (
                                <div key={cat.name} className="flex items-center gap-1.5">
                                    <span className={`size-2 rounded-full ${colors[index]}`}></span> {cat.name}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {/* Cash Flow */}
                    <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col">
                        <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider mb-4">Cash Flow</p>
                        <div className="flex items-end justify-between h-16 px-1">
                            <div className="flex flex-col items-center gap-1 h-full justify-end">
                                <div className="w-4 bg-primary/20 rounded-t-sm h-[60%]"></div>
                                <div className="w-4 bg-primary rounded-t-sm h-[100%]"></div>
                            </div>
                            <div className="flex flex-col items-center gap-1 h-full justify-end">
                                <div className="w-4 bg-primary/20 rounded-t-sm h-[50%]"></div>
                                <div className="w-4 bg-primary rounded-t-sm h-[80%]"></div>
                            </div>
                            <div className="flex flex-col items-center gap-1 h-full justify-end">
                                <div className="w-4 bg-primary/20 rounded-t-sm h-[70%]"></div>
                                <div className="w-4 bg-primary rounded-t-sm h-[90%]"></div>
                            </div>
                        </div>
                        <div className="flex justify-between mt-2 px-1">
                            <span className="text-[9px] text-slate-400 font-bold uppercase">Oct</span>
                            <span className="text-[9px] text-slate-400 font-bold uppercase">Nov</span>
                            <span className="text-[9px] text-slate-400 font-bold uppercase">Dec</span>
                        </div>
                    </div>

                    {/* Top Category */}
                    <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
                        <div>
                            <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider mb-1">Top Category</p>
                            <p className="text-lg font-bold text-slate-900">{topCategory ? topCategory.name : 'None'}</p>
                        </div>
                        {topCategory && (
                            <div className="mt-2 flex items-center justify-between">
                                <div className={`size-10 rounded-2xl flex items-center justify-center border-2 border-slate-50 ${topCategory.colorClass}`}>
                                    <span className={`material-symbols-outlined text-xl ${topCategory.iconColor}`}>{topCategory.icon}</span>
                                </div>
                                <div className="text-right">
                                    <p className="text-primary text-xs font-bold">{Math.round(topCategory.percentage)}%</p>
                                    <p className="text-[10px] text-slate-400">of spending</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Category Breakdown */}
                <div className="space-y-4 pt-2">
                    <h3 className="text-base font-bold text-slate-800">Category Breakdown</h3>
                    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden p-2">
                        <div className="space-y-1">
                            {sortedCategories.map((cat, index) => {
                                const barColors = ['bg-primary', 'bg-accent-blue', 'bg-amber-500', 'bg-purple-500', 'bg-pink-500'];
                                return (
                                    <div key={cat.name} className="p-4 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer">
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center gap-3">
                                                <div className={`size-8 rounded-full flex items-center justify-center border border-slate-50 ${cat.colorClass}`}>
                                                    <span className={`material-symbols-outlined text-lg ${cat.iconColor}`}>{cat.icon}</span>
                                                </div>
                                                <span className="font-bold text-sm text-slate-800">{cat.name}</span>
                                            </div>
                                            <span className="font-bold text-sm text-slate-900">${cat.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                        </div>
                                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                            <div className={`${barColors[index % barColors.length]} h-full rounded-full`} style={{ width: `${cat.percentage}%` }}></div>
                                        </div>
                                        <div className="flex justify-between mt-1.5">
                                            <span className="text-[10px] text-slate-400 font-medium">{Math.round(cat.percentage)}% of budget</span>
                                            <span className={`text-[10px] font-bold ${cat.percentage > 40 ? 'text-amber-500' : 'text-primary'}`}>
                                                {cat.percentage > 40 ? 'Warning' : 'Good'}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}

                            {sortedCategories.length === 0 && (
                                <div className="p-6 text-center text-slate-400 text-sm font-medium">
                                    No expenses recorded yet.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
