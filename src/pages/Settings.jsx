import React from 'react';
import Header from '../components/Header';

export default function Settings() {
    return (
        <>
            <Header title="App Settings" showBack={true} />

            <div className="px-6 space-y-4">
                {/* Profile Header */}
                <div className="mesh-gradient relative overflow-hidden flex flex-col items-center justify-center rounded-3xl shadow-sm border border-slate-100 p-8">
                    <div className="relative mb-4">
                        <div className="size-20 rounded-full bg-white p-1 border border-slate-100 shadow-sm">
                            <img alt="Avatar" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKmDUN-FstDOJHd3wPo0yzthSD3I38nNxrVEjdmLGxOAgqmG0zgc1xWQ8yXHlqTlW_OcyxKJ_6B7neoorEF1NTR4UN2mG5IMlAP9K1H2dvzzqsmTPqlmyx7CWouHjOjdzqFJA3R2JhTjNW6_KZ8TLdC-0WwwjtDvmRn8ji0Im1P_pQ7YGWaLMEMnpl-k3-zZcDp9R_ZY7PDqjUWk1kHV4aXNAsxWSB5NVdMxrRwZ4n0x3t8svGDJpc0SY7y07HlhDmxCGEb2W9cagN" />
                        </div>
                        <div className="absolute bottom-0 right-0 size-6 bg-primary border-2 border-white rounded-full flex items-center justify-center cursor-pointer">
                            <span className="material-symbols-outlined text-white text-[14px]">edit</span>
                        </div>
                    </div>
                    <h1 className="text-xl font-bold text-slate-900">Julian Alexander</h1>
                    <p className="text-slate-500 text-sm">julian.alex@finance.app</p>
                    <div className="mt-4 px-4 py-1.5 bg-white/60 backdrop-blur-sm rounded-full border border-white/40 shadow-sm">
                        <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Premium Member</span>
                    </div>
                </div>

                {/* Security Settings */}
                <div className="grid grid-cols-1 gap-4">
                    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="size-10 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100">
                                <span className="material-symbols-outlined text-slate-600">shield</span>
                            </div>
                            <h3 className="text-base font-bold text-slate-800">Security</h3>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-semibold text-slate-800">Biometric Login</p>
                                    <p className="text-xs text-slate-400">Use Face ID or Touch ID</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input defaultChecked className="sr-only peer" type="checkbox" />
                                    <div className="w-11 h-6 bg-slate-200 rounded-full transition-colors duration-200 peer-checked:bg-primary">
                                        <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow-md transition-transform duration-200 peer-checked:translate-x-5"></div>
                                    </div>
                                </label>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-semibold text-slate-800">Two-Factor Auth</p>
                                    <p className="text-xs text-slate-400">Enhanced account safety</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input className="sr-only peer" type="checkbox" />
                                    <div className="w-11 h-6 bg-slate-200 rounded-full transition-colors duration-200 peer-checked:bg-primary">
                                        <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow-md transition-transform duration-200 peer-checked:translate-x-5"></div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Notifications Settings */}
                <div className="grid grid-cols-1 gap-4">
                    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="size-10 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100">
                                <span className="material-symbols-outlined text-slate-600">notifications_active</span>
                            </div>
                            <h3 className="text-base font-bold text-slate-800">Notifications</h3>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-semibold text-slate-800">Transaction Alerts</p>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input defaultChecked className="sr-only peer" type="checkbox" />
                                    <div className="w-11 h-6 bg-slate-200 rounded-full transition-colors duration-200 peer-checked:bg-primary">
                                        <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow-md transition-transform duration-200 peer-checked:translate-x-5"></div>
                                    </div>
                                </label>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-semibold text-slate-800">Weekly Summary</p>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input defaultChecked className="sr-only peer" type="checkbox" />
                                    <div className="w-11 h-6 bg-slate-200 rounded-full transition-colors duration-200 peer-checked:bg-primary">
                                        <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow-md transition-transform duration-200 peer-checked:translate-x-5"></div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* App Theme Settings */}
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="size-10 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100">
                            <span className="material-symbols-outlined text-slate-600">palette</span>
                        </div>
                        <h3 className="text-base font-bold text-slate-800">App Theme</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        <button className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-200 border-2">
                            <div className="size-6 rounded-full bg-white border border-slate-300"></div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">Light</span>
                        </button>
                        <button className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-slate-900/5 border border-transparent">
                            <div className="size-6 rounded-full bg-slate-900 border border-slate-800"></div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Dark</span>
                        </button>
                        <button className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-slate-900/5 border border-transparent">
                            <div className="size-6 rounded-full bg-gradient-to-br from-white to-slate-900 border border-slate-300"></div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Auto</span>
                        </button>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                        <p className="text-sm font-semibold text-slate-800">High Contrast</p>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input className="sr-only peer" type="checkbox" />
                            <div className="w-11 h-6 bg-slate-200 rounded-full transition-colors duration-200 peer-checked:bg-primary">
                                <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow-md transition-transform duration-200 peer-checked:translate-x-5"></div>
                            </div>
                        </label>
                    </div>
                </div>

                <button className="w-full py-4 text-red-500 font-bold text-sm bg-red-50 rounded-3xl border border-red-100 mt-2 mb-10 active:bg-red-100 transition-colors">
                    Log Out
                </button>
            </div>
        </>
    );
}
