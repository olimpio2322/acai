import React from 'react';

export default function SuperAdmin() {
    return (
        <div className="flex min-h-screen bg-[#1A0033] text-white font-['Space_Grotesk'] overflow-hidden">
            <aside className="w-64 bg-[#110022] border-r border-[#39204b] flex flex-col h-screen">
                <div className="p-6 flex items-center gap-3 border-b border-[#39204b]">
                    <div className="size-8 text-[#FF007F]">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <h1 className="font-bold text-lg tracking-tight">Super Admin</h1>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#240046] text-white" href="#">
                        <span className="material-symbols-outlined">dashboard</span>
                        <span className="font-medium">Visão Geral</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-[#240046] hover:text-white transition-colors" href="#">
                        <span className="material-symbols-outlined">database</span>
                        <span className="font-medium">API &amp; Banco</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-[#240046] hover:text-white transition-colors" href="#">
                        <span className="material-symbols-outlined">inventory_2</span>
                        <span className="font-medium">Estoque Global</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-[#240046] hover:text-white transition-colors" href="#">
                        <span className="material-symbols-outlined">map</span>
                        <span className="font-medium">Bairros</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-[#240046] hover:text-white transition-colors" href="#">
                        <span className="material-symbols-outlined">group</span>
                        <span className="font-medium">Usuários</span>
                    </a>
                </nav>
                <div className="p-4 border-t border-[#39204b]">
                    <div className="flex items-center gap-3 px-4 py-2">
                        <div className="size-8 rounded-full bg-[#aa33ff] overflow-hidden">
                            <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWcVYNWJUfE8S845aYjbPBeWlQBVQupdC1CJclfiCwRCzIgkUS6_i6Aw4XrBjvYX7Fa3htuTq89GgKjg8MyhCPBSjuIdh_VaE7StjpnFdjs9sAFn_pcb74A7XowzBmiVXz4k_BDXkUhld25UOrYDwCYENyxhICof5vzK6VHWvi0_LfHs8BMIYB184Dk0JMczofdWA-3BR6gFp34VmDVlYMz8rj7CbDoLTi_ZGAJJ2A1g59LJgmJsy0PcbM3YckUd-7H353A0IkaBh5"/>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-bold">Master Admin</span>
                            <span className="text-[10px] text-gray-400">admin@acai-eco.com</span>
                        </div>
                    </div>
                </div>
            </aside>
            <main className="flex-1 overflow-y-auto p-8">
                <header className="flex justify-between items-center mb-10">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">Painel de Controle Super Admin</h2>
                        <p className="text-gray-400 mt-1">Bem-vindo de volta. O ecossistema está rodando normalmente.</p>
                    </div>
                    <button className="bg-[#FF007F] hover:opacity-90 px-6 py-2.5 rounded-full font-bold text-sm shadow-[0_0_20px_rgba(255,0,127,0.3)] transition-all">
                        FORÇAR RECARGA
                    </button>
                </header>
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-4 bg-[#240046] rounded-2xl p-6 border border-[#39204b]">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-lg">Status da API</h3>
                            <span className="bg-[#00FF94]/10 text-[#00FF94] text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider animate-pulse">Live</span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-black/20 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-blue-400">cloud</span>
                                    <span className="text-sm font-medium">Supabase DB</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-400">24ms</span>
                                    <div className="size-2 rounded-full bg-[#00FF94]"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-black/20 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-green-400">chat</span>
                                    <span className="text-sm font-medium">WhatsApp API</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-400">99.8%</span>
                                    <div className="size-2 rounded-full bg-[#00FF94]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-8 bg-[#240046] rounded-2xl p-6 border border-[#39204b]">
                        <h3 className="font-bold text-lg mb-6">Visão Geral do Banco de Dados</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                <p className="text-gray-400 text-sm">Total de Pedidos</p>
                                <p className="text-3xl font-bold mt-2">12.482</p>
                                <p className="text-[#00FF94] text-xs mt-1 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-xs">trending_up</span> +12% esse mês
                                </p>
                            </div>
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                <p className="text-gray-400 text-sm">Clientes Ativos</p>
                                <p className="text-3xl font-bold mt-2">4.103</p>
                                <p className="text-[#00FF94] text-xs mt-1 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-xs">check_circle</span> 89% retenção
                                </p>
                            </div>
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                <p className="text-gray-400 text-sm">Armazenamento</p>
                                <p className="text-3xl font-bold mt-2">1.2 GB</p>
                                <div className="w-full bg-black/40 h-1.5 rounded-full mt-3">
                                    <div className="bg-[#FF007F] h-full w-[45%] rounded-full shadow-[0_0_8px_#FF007F]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-8 bg-[#240046] rounded-2xl border border-[#39204b] overflow-hidden">
                        <div className="p-6 border-b border-[#39204b] flex justify-between items-center">
                            <h3 className="font-bold text-lg">Controle de Estoque Global</h3>
                            <div className="flex gap-3">
                                <button className="text-xs font-bold text-gray-400 hover:text-white px-3 py-1.5 border border-white/10 rounded-lg">Selecionar Tudo</button>
                                <button className="text-xs font-bold text-white bg-red-600/20 hover:bg-red-600/30 text-red-400 px-3 py-1.5 border border-red-500/20 rounded-lg">Marcar Esgotado</button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-black/20 text-xs text-gray-400 uppercase tracking-widest">
                                    <tr>
                                        <th className="px-6 py-4 font-medium">Produto</th>
                                        <th className="px-6 py-4 font-medium">Categoria</th>
                                        <th className="px-6 py-4 font-medium">Status</th>
                                        <th className="px-6 py-4 font-medium text-right">Ações</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#39204b]">
                                    <tr className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4 flex items-center gap-3">
                                            <div className="size-10 rounded-lg bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDurpp9eCknZody3jbkcgZcpMLk-l8zVEUypDxKx82d_mEAtkBtG1jrCT-rjhP_muguTZNmYmtM5889i6VRIlQh3G_JdTTL_wHgxU4ZTSH2Go8NGbnB5eGL3f1e9Ke-kZu-mZIkR__HxjxNYLy69KrOmCUXddJ-NrTTyPM2Js0GoY16gua3sr-7vYdSYnOlbYENsSrKliv2hyPRiBJZsHDxn2Grn5gtMNLpOpksEAx3gEz607oOnSdE0c0y9vltGNhyLbPlV6JxHqIr')" }}></div>
                                            <span className="font-medium">Nutella Premium</span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-400">Cobertura</td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 rounded-md bg-[#00FF94]/10 text-[#00FF94] text-[10px] font-bold">EM ESTOQUE</span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input defaultChecked className="sr-only peer" type="checkbox"/>
                                                <div className="w-11 h-6 bg-[#39204b] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF007F]"></div>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4 flex items-center gap-3">
                                            <div className="size-10 rounded-lg bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDt8sk4YbmwCl8-NKt_Ajv6B_cx0zj6AO24sQ0N7EuoJNKbOtB1YF3XtfQq-nGaifxLFI4tk-zePdoph6TsK-1CtOU8YO76dcQac0MuBckZbh3sS1Yyf3hEaKVKgcLIcgPkNE3MhdxoffIE4YAHujE7Y-iUMUUDnkNn4M2GuFUHGp37NSIu3aus5VG-OertymFLfTcpVD_wsnYvyXEVgOxajkB0eqMvR9yBaDApUBztqi2aobdH61eaquQsLvPASB1Q5IYdYXuoDswy')" }}></div>
                                            <span className="font-medium">Morango Fresco</span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-400">Fruta</td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 rounded-md bg-[#00FF94]/10 text-[#00FF94] text-[10px] font-bold">EM ESTOQUE</span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input defaultChecked className="sr-only peer" type="checkbox"/>
                                                <div className="w-11 h-6 bg-[#39204b] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF007F]"></div>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4 flex items-center gap-3">
                                            <div className="size-10 rounded-lg bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCoo6FMkOD1mlb9u1rX_fALytPPxqOdkKVplDpK0gWr4LhpqhKF4P1Qt9EfsYlwndta9VL5bk4Ixco8wxT-XsMSFC5R4N8eibBQCUS4ABlLrXL3R9v0-mVvcTcEbHDiRp8Q9Ky4Z9_SXT8phAQ2YFpuQW2PK2AIQkQ4Vxbz3zuHiN6SZ2lfXjuI-yCEXazloTQrwXqPRPrXrN_3m_6pzCiYy7n976plTCLUf0Qmu5sLxJ8UrXarvjgMfzluln_TqS8CGLlWge7PJEun')" }}></div>
                                            <span className="font-medium">M&Ms Tradicional</span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-400">Toping</td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 rounded-md bg-red-500/10 text-red-500 text-[10px] font-bold">ESGOTADO</span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input className="sr-only peer" type="checkbox"/>
                                                <div className="w-11 h-6 bg-[#39204b] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF007F]"></div>
                                            </label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4 bg-[#240046] rounded-2xl p-6 border border-[#39204b]">
                        <h3 className="font-bold text-lg mb-6">Logs do Sistema</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1 size-2 rounded-full bg-[#FF007F] shadow-[0_0_8px_#FF007F] shrink-0"></div>
                                <div>
                                    <p className="text-sm font-medium">Backup automático concluído</p>
                                    <p className="text-xs text-gray-400 mt-1">Sincronizado com AWS S3 há 15min</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 size-2 rounded-full bg-[#00FF94] shrink-0"></div>
                                <div>
                                    <p className="text-sm font-medium">Novo Admin cadastrado</p>
                                    <p className="text-xs text-gray-400 mt-1">Loja #03 - João Silva há 42min</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 size-2 rounded-full bg-blue-500 shrink-0"></div>
                                <div>
                                    <p className="text-sm font-medium">Limpeza de cache global</p>
                                    <p className="text-xs text-gray-400 mt-1">Efetuado por Master há 2h</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 size-2 rounded-full bg-yellow-500 shrink-0"></div>
                                <div>
                                    <p className="text-sm font-medium">Pico de latência detectado</p>
                                    <p className="text-xs text-gray-400 mt-1">Instância DB-43-X há 5h</p>
                                </div>
                            </div>
                        </div>
                        <button className="w-full mt-8 py-3 rounded-xl border border-white/10 text-xs font-bold hover:bg-white/5 transition-all uppercase tracking-widest">
                            Ver Todos os Logs
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}