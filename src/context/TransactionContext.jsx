import React, { createContext, useState, useContext } from 'react';

const TransactionContext = createContext();

export const useTransactions = () => useContext(TransactionContext);

const initialTransactions = [
    {
        id: '1',
        merchant: 'Apple Store',
        category: 'Shopping',
        icon: 'shopping_bag',
        colorClass: 'bg-slate-50',
        iconColor: 'text-slate-600',
        type: 'expense',
        amount: 99.00,
        date: new Date(new Date().setHours(10, 24, 0, 0)),
        method: 'UPI',
    },
    {
        id: '2',
        merchant: 'Salary Deposit',
        category: 'Income',
        icon: 'account_balance_wallet',
        colorClass: 'bg-emerald-50',
        iconColor: 'text-primary',
        type: 'income',
        amount: 4250.00,
        date: new Date(new Date().setHours(9, 0, 0, 0)),
        method: 'Transfer',
    },
    {
        id: '3',
        merchant: 'Cloud Kitchen',
        category: 'Food',
        icon: 'restaurant',
        colorClass: 'bg-slate-50',
        iconColor: 'text-slate-600',
        type: 'expense',
        amount: 24.50,
        date: new Date(new Date().setDate(new Date().getDate() - 1)),
        method: 'UPI',
    },
    {
        id: '4',
        merchant: 'Uber Trip',
        category: 'Travel',
        icon: 'directions_car',
        colorClass: 'bg-slate-50',
        iconColor: 'text-slate-600',
        type: 'expense',
        amount: 18.20,
        date: new Date(new Date().setDate(new Date().getDate() - 1)),
        method: 'Cash',
    }
];

export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState(initialTransactions);

    const addTransaction = (transaction) => {
        setTransactions(prev => [{ ...transaction, id: Date.now().toString(), date: new Date() }, ...prev]);
    };

    const totalBalance = transactions.reduce((acc, curr) => {
        return curr.type === 'income' ? acc + curr.amount : acc - curr.amount;
    }, 12450.80 - 4250.00 + 99.00 + 24.50 + 18.20); // Base calculated to match design baseline approx $12,450.80 initially

    const totalIncome = transactions.filter(t => t.type === 'income').reduce((acc, curr) => acc + curr.amount, 0);
    const totalExpense = transactions.filter(t => t.type === 'expense').reduce((acc, curr) => acc + curr.amount, 0);

    return (
        <TransactionContext.Provider value={{
            transactions,
            addTransaction,
            totalBalance,
            totalIncome,
            totalExpense
        }}>
            {children}
        </TransactionContext.Provider>
    );
};
