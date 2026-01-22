import React from 'react';

// Exact replication of the "Gestão de Cardápio" page structure
export default function AdminMenu() {
    return (
        <div className="flex min-h-screen bg-[#1A0033] text-white font-['Inter']">
            {/* SideNavBar Component */}
            <aside className="w-64 flex flex-col justify-between bg-[#1A0033] border-r border-[#492236] p-6 sticky top-0 h-screen">
                <div className="flex flex-col gap-8">
                    <div className="flex gap-3 items-center">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1yt__tV8J0tf5C5VoXuG-t_MojskvdDjBQ1Wn_0bEqurBhJ89T_xWDmooapgyr8WSVMv-oCW38uJM_Z9DjrHwUsfvso9nh6UdCh-VOGlbGOG_5ByzxxD1ltbv1GkobRpv2-w34UDsjcHU7pnNF1KLBz64qShc7UtKVrDtbkyag03t3mQXAUxkDAudiR79BCkzP-Z7o0-x0ohSfz3Dk5wUeE_iE5tmyLmOb23GAc0vEZ4F0rbJbp8-8XxI-MAw8aBkLfgBx3bBpDuD")' }}></div>
                        <div className="flex flex-col">
                            <h1 className="text-white text-base font-bold leading-tight">Açaí Admin</h1>
                            <p className="text-[#cb90ad] text-xs font-normal">Gestão de Loja</p>
                        </div>
                    </div>
                    <nav className="flex flex-col gap-2">
                        <div className="flex items-center gap-3 px-3 py-2 text-white hover:bg-[#492236] rounded-lg cursor-pointer transition-colors">
                            <span className="material-symbols-outlined">dashboard</span>
                            <p className="text-sm font-medium">Dashboard</p>
                        </div>
                        <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#f4258c] text-white cursor-pointer">
                            <span className="material-symbols-outlined">restaurant_menu</span>
                            <p className="text-sm font-medium">Cardápio</p>
                        </div>
                        <div className="flex items-center gap-3 px-3 py-2 text-white hover:bg-[#492236] rounded-lg cursor-pointer transition-colors">
                            <span className="material-symbols-outlined">shopping_cart</span>
                            <p className="text-sm font-medium">Pedidos</p>
                        </div>
                        <div className="flex items-center gap-3 px-3 py-2 text-white hover:bg-[#492236] rounded-lg cursor-pointer transition-colors">
                            <span className="material-symbols-outlined">settings</span>
                            <p className="text-sm font-medium">Configurações</p>
                        </div>
                    </nav>
                </div>
                <div className="flex flex-col gap-1 border-t border-[#492236] pt-4">
                    <div className="flex items-center gap-3 px-3 py-2 text-[#cb90ad] hover:text-white cursor-pointer transition-colors">
                        <span className="material-symbols-outlined">logout</span>
                        <p className="text-sm font-medium">Sair</p>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col">
                <header className="flex items-center justify-between sticky top-0 z-10 bg-[#1A0033]/80 backdrop-blur-md border-b border-[#492236] px-8 py-4">
                    <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-[#f4258c]">edit_note</span>
                        <h2 className="text-white text-lg font-bold leading-tight">Gestão de Cardápio</h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[#f4258c] hover:bg-[#f4258c]/90 text-white text-sm font-bold transition-all shadow-lg shadow-[#f4258c]/20">
                            <span>Salvar Alterações</span>
                        </button>
                        <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[#492236] hover:bg-[#5a2a43] text-white text-sm font-bold transition-all">
                            <span>Descartar</span>
                        </button>
                        <div className="w-px h-6 bg-[#492236] mx-2"></div>
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-[#f4258c]/30" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7__M1IfoTK3t0uP-zu4buc-aMlfxRMgzNwViKiBleoEpBvos6Gr_vufQnpmad5qlulfChpidtFIyv1mNiWGpjsmGR_V-nFM_uA5uTzWnsmTFiCoH9zZCTzPwfnkSzauHs8_MznR2rMvFDy1UOqqDLdZp2v1HZe68zLzYAnewUVdgZvJWv898M_7AHE9t4WpnFTpYNKRdzLvq4u4EDg-NjtCtURPbnx_e3RQUF1ytYmErQrmxJnKY7mKLpgmpNuQLJYsg2BdE5RFuc")' }}></div>
                    </div>
                </header>

                <div className="p-8 max-w-[1200px] mx-auto w-full">
                    <div className="mb-8">
                        <p className="text-white text-4xl font-black tracking-tight mb-2">Painel de Cardápio</p>
                        <p className="text-[#cb90ad] text-base">Gerencie os itens, preços e disponibilidade do seu cardápio de açaí.</p>
                    </div>

                    {/* Section: Tamanhos */}
                    <section className="mb-12">
                        <div className="flex items-center gap-2 mb-4 border-l-4 border-[#f4258c] pl-4">
                            <h2 className="text-white text-2xl font-bold">Tamanhos</h2>
                            <span className="text-[#cb90ad] text-sm font-normal ml-2">(Preços base do copo)</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { name: 'Copo 300ml', size: 'Pequeno', price: '15,00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIb-S9vk8OdGSGPiZXL1cdCVt2MVN2Br-9QXWsZP0p1UlX0mScJIdilc504cPWMxwPNNTBzvI1URqJKC9hdAuZtJMhxIp-XjIpW1PPhxJRBNYHlUMfpeY0wYz1xi4rJPdYYAE-i0PTLusupnxTjkfLr5LGK2svktUS5_nQZD8Y3dXPgCh1B_je7S06an0rpMVIn4z5SY3ACesAB4eHMrFDCOzJ3BXR7xw-MEveQXYFzVVa3BAiXZmmu4raAOCYHqY1BUVvF9S0AgK0' },
                                { name: 'Copo 500ml', size: 'Médio', price: '22,00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtmvJgEcKfLXcvGbxCeJhamN6dlps_EkzjIhR2yKkwUNyF0p13aKsVEw8_WM8tipBjEsNBJnPLWsFW3gjqxd6lkbM_60phSW4IS_t6h0miCnW6pMcKsST0FK9aETl1Lmy7r9_YrAwIsnG1QjTB1LnLL5XVyec_KYzxW6jL-3bTsLU1F42KbFwsReMjxuuP8gP-369-t_fG_mDFLHRmvyfx_hf7OURyANCLlplUUMEIjqMMEXU8yMoUwqJg8VLgLSqOnI3RoHc6TQUO' },
                                { name: 'Copo 700ml', size: 'Grande', price: '28,00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCR20XecdnNqDv9wG3iXyBoKdeOSXg53eyB2NuOm1bEKrxMQSC4XdjZck8U2eGIR2bQ7bSg8YHaeW0acPLSOzbF6jetNb_5OYECchTI8RmN_moF5XdAcxUSkxX6nc1uwe_iYS58W0sgx_epCj9eCVVgNAYCBP-R5gSLTCHqMQ61i5R7iQsH6ffRwaRaS6-OpH-6qcxPHdxtAXjYOxbTQybs9a812Jvbl26YKO4VcOvtX8o-CzgBt49l0XVbcKu8wLm387pgnHz8tpd' }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-[#2a004d] rounded-xl p-5 border border-[#492236] hover:border-[#f4258c]/50 transition-all group">
                                    <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg mb-4" style={{ backgroundImage: `url("${item.img}")` }}></div>
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-white text-lg font-bold">{item.name}</p>
                                            <p className="text-[#cb90ad] text-xs">Tamanho {item.size}</p>
                                        </div>
                                        <div className="flex flex-col items-end gap-1">
                                            <label className="text-[10px] uppercase font-bold text-[#f4258c] tracking-wider">Preço (R$)</label>
                                            <input className="bg-[#1A0033] border border-[#492236] rounded-lg px-3 py-1 w-24 text-right text-white font-bold focus:border-[#f4258c] focus:ring-1 focus:ring-[#f4258c] outline-none" type="text" defaultValue={item.price} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Section: Acompanhamentos Grátis */}
                        <section>
                            <div className="flex items-center justify-between mb-4 border-l-4 border-[#cb90ad] pl-4">
                                <h2 className="text-white text-xl font-bold">Acompanhamentos Grátis</h2>
                                <button className="text-[#f4258c] text-sm font-bold flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">add_circle</span>
                                    Adicionar
                                </button>
                            </div>
                            <div className="flex flex-col gap-3">
                                {[
                                    { name: 'Leite em Pó', active: true },
                                    { name: 'Granola Crocante', active: true },
                                    { name: 'Paçoca Especial', active: false },
                                ].map((item, idx) => (
                                    <div key={idx} className={`flex items-center justify-between bg-[#2a004d]/50 p-4 rounded-lg border border-[#492236] ${!item.active ? 'opacity-60' : ''}`}>
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-[#cb90ad]">drag_indicator</span>
                                            <p className="text-white font-medium">{item.name}</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs text-[#cb90ad]">{item.active ? 'Ativo' : 'Inativo'}</span>
                                                <div className={`w-10 h-5 ${item.active ? 'bg-[#f4258c]' : 'bg-[#492236]'} rounded-full relative cursor-pointer`}>
                                                    <div className={`absolute ${item.active ? 'right-1 bg-white' : 'left-1 bg-[#cb90ad]'} top-1 size-3 rounded-full`}></div>
                                                </div>
                                            </div>
                                            <button className="p-1 hover:bg-[#492236] rounded text-[#cb90ad] hover:text-white">
                                                <span className="material-symbols-outlined text-lg">edit</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section: Adicionais Pagos */}
                        <section>
                            <div className="flex items-center justify-between mb-4 border-l-4 border-[#f4258c] pl-4">
                                <h2 className="text-white text-xl font-bold">Adicionais Pagos</h2>
                                <button className="text-[#f4258c] text-sm font-bold flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">add_circle</span>
                                    Adicionar
                                </button>
                            </div>
                            <div className="flex flex-col gap-3">
                                {[
                                    { name: 'Nutella Original', price: '4,50', tag: 'Popular' },
                                    { name: 'Morango Fresco', price: '3,00' },
                                    { name: 'Leite Condensado', price: '2,50' },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between bg-[#2a004d]/50 p-4 rounded-lg border border-[#492236]">
                                        <div className="flex flex-col">
                                            <p className="text-white font-medium">{item.name}</p>
                                            {item.tag && <span className="text-[10px] text-[#f4258c] font-bold uppercase">{item.tag}</span>}
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center bg-[#1A0033] border border-[#492236] rounded px-2 py-1">
                                                <span className="text-xs text-[#cb90ad] mr-1">R$</span>
                                                <input className="bg-transparent border-none p-0 w-12 text-right text-sm font-bold focus:ring-0 text-white" type="text" defaultValue={item.price} />
                                            </div>
                                            <div className="w-10 h-5 bg-[#f4258c] rounded-full relative cursor-pointer">
                                                <div className="absolute right-1 top-1 size-3 bg-white rounded-full"></div>
                                            </div>
                                            <button className="p-1 hover:bg-[#492236] rounded text-[#cb90ad] hover:text-white">
                                                <span className="material-symbols-outlined text-lg">edit</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}