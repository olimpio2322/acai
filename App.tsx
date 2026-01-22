import React, { useState } from 'react';
import ClientFlow from './pages/ClientFlow';
import AdminOrders from './pages/AdminOrders';
import AdminMenu from './pages/AdminMenu';
import AdminStock from './pages/AdminStock';
import SuperAdmin from './pages/SuperAdmin';

// Simple Router
enum View {
    HOME,
    CLIENT_APP,
    ADMIN_ORDERS,
    ADMIN_MENU,
    ADMIN_STOCK,
    SUPER_ADMIN
}

export default function App() {
    const [currentView, setCurrentView] = useState<View>(View.CLIENT_APP);

    const renderView = () => {
        switch (currentView) {
            case View.CLIENT_APP: return <ClientFlow />;
            case View.ADMIN_ORDERS: return <AdminOrders />;
            case View.ADMIN_MENU: return <AdminMenu />;
            case View.ADMIN_STOCK: return <AdminStock />;
            case View.SUPER_ADMIN: return <SuperAdmin />;
            default: return <ClientFlow />;
        }
    };

    return (
        <div className="min-h-screen bg-[#1b0f24] text-white font-sans">
             {/* Dev Navigation Bar - Removed in production usually, keeping for prototype navigation */}
             <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#39204b]/90 backdrop-blur-md px-6 py-3 rounded-full flex gap-4 z-50 border border-[#522e6b] shadow-2xl">
                <button onClick={() => setCurrentView(View.CLIENT_APP)} className={`text-xs font-bold ${currentView === View.CLIENT_APP ? 'text-[#aa33ff]' : 'text-gray-400'}`}>CLIENTE</button>
                <div className="w-px bg-gray-600 h-4 self-center"></div>
                <button onClick={() => setCurrentView(View.ADMIN_ORDERS)} className={`text-xs font-bold ${currentView === View.ADMIN_ORDERS ? 'text-[#aa33ff]' : 'text-gray-400'}`}>PEDIDOS</button>
                <button onClick={() => setCurrentView(View.ADMIN_MENU)} className={`text-xs font-bold ${currentView === View.ADMIN_MENU ? 'text-[#aa33ff]' : 'text-gray-400'}`}>CARDÁPIO</button>
                <button onClick={() => setCurrentView(View.ADMIN_STOCK)} className={`text-xs font-bold ${currentView === View.ADMIN_STOCK ? 'text-[#aa33ff]' : 'text-gray-400'}`}>ESTOQUE</button>
                <button onClick={() => setCurrentView(View.SUPER_ADMIN)} className={`text-xs font-bold ${currentView === View.SUPER_ADMIN ? 'text-[#aa33ff]' : 'text-gray-400'}`}>SUPER ADMIN</button>
            </div>

            {renderView()}
        </div>
    );
}