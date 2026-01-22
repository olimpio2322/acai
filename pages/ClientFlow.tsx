import React, { useState, useEffect } from 'react';
import { Neighborhood } from '../types';

// Mock Data from "Açaí Paradise" & "Açaí Delícia"
const SIZES = [
    { id: '300', name: '300ml', price: 15, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBatUvJCym0h6RELtobiC9AiUh5Zb8j-E_v29jBFFORrfLH6UQ6ikJKy_4BVcuf_cQiTXSwiuG-Now8hPz6xMSE7sdsAYoF5ay4xRbupWkyJ-x6vMQC0Hwe_7SXKtfdnRA63xGmXWGVO-WJA0fdZwP9AHwjcyE5GIt20XjnzvJT5i3UM2qAKBYA6TMjydkjiMW3YvEgeOQef7RnNvxMMPCOOSAYtSXD4tQQuJM_y7Lb3xBzKbFeISiKuZYxvdXfbOLVvy30IxbYq7-' },
    { id: '500', name: '500ml', price: 22, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbZmrMpbYcwHlgwDBiRFDlgf-Sm360hje-E56wV5YbXNU-UuynicsNZX9xw-jqMeFYeq7fKoDeNbWtq6umcrip-iYQugMSTBksRGV-CwnLW4GjYkqj3GqMXKkhAS72iFmgwoiMtndj0IBR6DamGob62Z5ew7NaYI3cJFH9f_7TcDuagi2DjOUK8m0ezhSwJXjccPon5jbs0lQqEaNM8bXLqerkngcnvdB1iq73_Zg951vBzkCXMNSwR-I2UerNv2NL0N89th95pSMW' },
    { id: '700', name: '700ml', price: 30, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaI8MHnCqAS2XWrGptZnxMKo06hLYio2W6d6zreAb5lXLdc5ZEX66M8k-i5NFffGmvunV9-2UxivBnfkZ9cNRm3W-Lkdl67jOeYf818qJeJjMtJRK0ORqpegVfHpWu9muGO3IeoDJogb2vFtUc2Kp2OI9By35iURqwdD8RUwZrbhWJhJ4FB-IKw8aUdMHCamoW7q2W-yGFtuPy_QpYrcnK1NIpitMKVQp-A84mciHNbKSLMgPzU9hd_Vdn6wT_BjMbu8sV4vclzM1x' },
];

const FREE_TOPPINGS = ['Leite em Pó', 'Granola', 'Banana', 'Morango', 'Mel', 'Paçoca'];

const PAID_EXTRAS = [
    { name: 'Nutella', price: 5 },
    { name: 'Chocolate', price: 3 },
    { name: 'Doce de Leite', price: 4 },
    { name: 'M&Ms', price: 2 },
    { name: 'Ovomaltine', price: 3 },
    { name: 'Leite Condensado', price: 2 },
];

const NEIGHBORHOODS: Neighborhood[] = [
    { id: '1', name: 'Centro', fee: 5.00 },
    { id: '2', name: 'Jardim Primavera', fee: 8.00 },
    { id: '3', name: 'Bela Vista', fee: 6.50 },
    { id: '4', name: 'São José', fee: 10.00 },
];

enum Step {
    BUILD,
    CHECKOUT
}

export default function ClientFlow() {
    const [step, setStep] = useState<Step>(Step.BUILD);
    
    // Build State
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [selectedFree, setSelectedFree] = useState<string[]>([]);
    const [selectedPaid, setSelectedPaid] = useState<string[]>([]);

    // Checkout State
    const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card' | 'money'>('pix');
    const [changeAmount, setChangeAmount] = useState<string>('');
    const [neighborhoodId, setNeighborhoodId] = useState<string>('');
    const [name, setName] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [notes, setNotes] = useState('');

    // Logic: Toggle Free Toppings (Max 3)
    const toggleFree = (topping: string) => {
        if (selectedFree.includes(topping)) {
            setSelectedFree(prev => prev.filter(t => t !== topping));
        } else {
            if (selectedFree.length < 3) {
                setSelectedFree(prev => [...prev, topping]);
            }
        }
    };

    // Logic: Toggle Paid Extras
    const togglePaid = (extraName: string) => {
        if (selectedPaid.includes(extraName)) {
            setSelectedPaid(prev => prev.filter(e => e !== extraName));
        } else {
            setSelectedPaid(prev => [...prev, extraName]);
        }
    };

    // Calculations
    const sizePrice = selectedSize ? SIZES.find(s => s.id === selectedSize)?.price || 0 : 0;
    const extrasPrice = selectedPaid.reduce((acc, name) => {
        const item = PAID_EXTRAS.find(e => e.name === name);
        return acc + (item?.price || 0);
    }, 0);
    const selectedNeighborhood = NEIGHBORHOODS.find(n => n.id === neighborhoodId);
    const deliveryFee = selectedNeighborhood?.fee || 0;
    
    const subTotal = sizePrice + extrasPrice;
    const total = subTotal + deliveryFee;

    const handleFinish = () => {
        // Logic to save to Supabase would go here
        alert(`Pedido enviado!\nTotal: R$ ${total.toFixed(2)}\nPagamento: ${paymentMethod}`);
    };

    if (step === Step.BUILD) {
        return (
            <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#faf8fc] overflow-x-hidden font-body text-[#160c1d]">
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#eee6f4] px-4 md:px-10 py-3 bg-white">
                    <div className="flex items-center gap-4 text-[#160c1d]">
                        <div className="size-4">
                             <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-current"><path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z" fill="currentColor"></path></svg>
                        </div>
                        <h2 className="text-[#160c1d] text-lg font-bold leading-tight tracking-[-0.015em]">Açaí Paradise</h2>
                    </div>
                </header>

                <div className="flex flex-1 justify-center py-5">
                    <div className="flex flex-col max-w-[960px] flex-1">
                        <div className="flex flex-col gap-3 p-4">
                            <div className="flex gap-6 justify-between">
                                <p className="text-[#160c1d] text-base font-medium">Montar</p>
                                <p className="text-[#160c1d] text-sm font-normal">33%</p>
                            </div>
                            <div className="rounded bg-[#decdea]"><div className="h-2 rounded bg-[#4e0085]" style={{ width: '33%' }}></div></div>
                        </div>

                        {/* Size Selection */}
                        <h2 className="text-[#160c1d] tracking-light text-[28px] font-bold px-4 text-left pb-3 pt-5">Escolha o Tamanho</h2>
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                            {SIZES.map(size => (
                                <div 
                                    key={size.id} 
                                    className={`flex flex-col gap-3 pb-3 cursor-pointer rounded-xl p-2 transition-all ${selectedSize === size.id ? 'ring-2 ring-[#4e0085] bg-[#eee6f4]' : ''}`}
                                    onClick={() => setSelectedSize(size.id)}
                                >
                                    <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl" style={{ backgroundImage: `url("${size.image}")` }}></div>
                                    <p className="text-[#160c1d] text-base font-medium">{size.name} - R${size.price}</p>
                                </div>
                            ))}
                        </div>

                        {/* Free Toppings */}
                        <h2 className="text-[#160c1d] text-[22px] font-bold px-4 pb-3 pt-5">Acompanhamentos Grátis (Máx 3)</h2>
                        <p className="text-[#7a45a1] text-sm font-normal pb-3 pt-1 px-4">{selectedFree.length}/3 selecionados</p>
                        <div className="flex flex-wrap gap-3 px-4 py-3">
                            {FREE_TOPPINGS.map(topping => (
                                <button
                                    key={topping}
                                    onClick={() => toggleFree(topping)}
                                    className={`flex h-10 px-4 items-center justify-center rounded-xl text-sm font-bold border ${selectedFree.includes(topping) ? 'bg-[#4e0085] text-white border-[#4e0085]' : 'bg-[#eee6f4] text-[#160c1d] border-transparent'}`}
                                >
                                    {topping}
                                </button>
                            ))}
                        </div>

                        {/* Paid Extras */}
                        <h2 className="text-[#160c1d] text-[22px] font-bold px-4 pb-3 pt-5">Adicionais Pagos</h2>
                        <div className="flex flex-wrap gap-3 px-4 py-3">
                            {PAID_EXTRAS.map(extra => (
                                <button
                                    key={extra.name}
                                    onClick={() => togglePaid(extra.name)}
                                    className={`flex h-10 px-4 items-center justify-center rounded-xl text-sm font-bold border ${selectedPaid.includes(extra.name) ? 'bg-[#4e0085] text-white border-[#4e0085]' : 'bg-[#eee6f4] text-[#160c1d] border-transparent'}`}
                                >
                                    {extra.name} R${extra.price}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <footer className="sticky bottom-0 bg-white border-t border-[#eee6f4] flex justify-center p-4">
                    <div className="flex max-w-[960px] flex-1 gap-3 justify-between items-center">
                        <div className="flex h-12 px-5 items-center justify-center rounded-xl bg-[#eee6f4] text-[#160c1d] text-base font-bold">
                            Total: R$ {subTotal.toFixed(2).replace('.', ',')}
                        </div>
                        <button
                            onClick={() => {
                                if (!selectedSize) alert('Selecione um tamanho!');
                                else setStep(Step.CHECKOUT);
                            }}
                            className="flex h-12 px-5 items-center justify-center rounded-xl bg-[#4e0085] text-[#faf8fc] text-base font-bold"
                        >
                            Continuar
                        </button>
                    </div>
                </footer>
            </div>
        );
    }

    // CHECKOUT STEP (Dark Theme based on "Açaí Delícia - Dark")
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#1b0f24] text-white font-sans overflow-x-hidden">
             <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#39204b] px-4 md:px-10 py-3">
                 <div className="flex items-center gap-4">
                     <button onClick={() => setStep(Step.BUILD)} className="text-white">
                        <span className="material-symbols-outlined">arrow_back</span>
                     </button>
                    <h2 className="text-lg font-bold">Açaí Delícia</h2>
                 </div>
            </header>

            <main className="flex-1 overflow-y-auto pb-20">
                <div className="max-w-[960px] mx-auto p-4 md:p-10">
                    <h1 className="text-[32px] font-bold mb-6">Finalizar Pedido</h1>
                    
                    {/* Summary */}
                    <div className="mb-8">
                        <h2 className="text-[22px] font-bold mb-3">Resumo do Pedido</h2>
                        <div className="bg-[#2a163a] rounded-xl border border-[#39204b] p-4">
                             <div className="flex justify-between py-2 border-b border-[#39204b]">
                                <span className="text-[#b38dce]">Tamanho</span>
                                <span>{SIZES.find(s => s.id === selectedSize)?.name}</span>
                             </div>
                             <div className="flex justify-between py-2 border-b border-[#39204b]">
                                <span className="text-[#b38dce]">Toppings</span>
                                <span className="text-right">{selectedFree.length > 0 ? selectedFree.join(', ') : 'Nenhum'}</span>
                             </div>
                             <div className="flex justify-between py-2">
                                <span className="text-[#b38dce]">Extras</span>
                                <span className="text-right">{selectedPaid.length > 0 ? selectedPaid.join(', ') : 'Nenhum'}</span>
                             </div>
                        </div>
                    </div>

                    {/* Payment */}
                    <div className="mb-8">
                        <h2 className="text-[22px] font-bold mb-3">Forma de Pagamento</h2>
                        <div className="flex flex-col gap-3">
                             <label className={`flex items-center gap-4 rounded-xl border p-[15px] cursor-pointer ${paymentMethod === 'pix' ? 'border-[#aa33ff] bg-[#39204b]' : 'border-[#522e6b]'}`}>
                                <input type="radio" name="payment" className="text-[#aa33ff] focus:ring-[#aa33ff]" checked={paymentMethod === 'pix'} onChange={() => setPaymentMethod('pix')} />
                                <span>PIX</span>
                             </label>
                             <label className={`flex items-center gap-4 rounded-xl border p-[15px] cursor-pointer ${paymentMethod === 'card' ? 'border-[#aa33ff] bg-[#39204b]' : 'border-[#522e6b]'}`}>
                                <input type="radio" name="payment" className="text-[#aa33ff] focus:ring-[#aa33ff]" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                                <span>Cartão (Crédito/Débito)</span>
                             </label>
                             <label className={`flex items-center gap-4 rounded-xl border p-[15px] cursor-pointer ${paymentMethod === 'money' ? 'border-[#aa33ff] bg-[#39204b]' : 'border-[#522e6b]'}`}>
                                <input type="radio" name="payment" className="text-[#aa33ff] focus:ring-[#aa33ff]" checked={paymentMethod === 'money'} onChange={() => setPaymentMethod('money')} />
                                <span>Dinheiro</span>
                             </label>
                        </div>
                        
                        {/* Change Input Logic */}
                        {paymentMethod === 'money' && (
                            <div className="mt-4">
                                <p className="text-base font-medium mb-2">Precisa de troco para quanto?</p>
                                <input 
                                    type="text" 
                                    className="w-full bg-[#39204b] border-none rounded-xl h-14 px-4 text-white placeholder-[#b38dce] focus:ring-2 focus:ring-[#aa33ff]"
                                    placeholder="R$ 50,00"
                                    value={changeAmount}
                                    onChange={(e) => setChangeAmount(e.target.value)}
                                />
                            </div>
                        )}
                        
                        {paymentMethod === 'pix' && (
                            <p className="text-[#b38dce] text-sm mt-3">Para pagamentos via PIX, favor enviar o comprovante pelo WhatsApp.</p>
                        )}
                    </div>

                    {/* Observations */}
                    <div className="mb-8">
                        <p className="text-base font-medium mb-2">Observações (opcional)</p>
                        <input 
                            type="text" 
                            className="w-full bg-[#39204b] border-none rounded-xl h-14 px-4 text-white placeholder-[#b38dce] focus:ring-2 focus:ring-[#aa33ff]"
                            placeholder="Alguma instrução especial?"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </div>

                    {/* Delivery Data */}
                    <div className="mb-8">
                        <h2 className="text-[22px] font-bold mb-3">Dados de Entrega</h2>
                        <div className="flex flex-col gap-4">
                            <div>
                                <p className="text-base font-medium mb-2">Nome</p>
                                <input 
                                    type="text" 
                                    className="w-full bg-[#39204b] border-none rounded-xl h-14 px-4 text-white placeholder-[#b38dce] focus:ring-2 focus:ring-[#aa33ff]"
                                    placeholder="Nome completo"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <p className="text-base font-medium mb-2">WhatsApp</p>
                                <input 
                                    type="text" 
                                    className="w-full bg-[#39204b] border-none rounded-xl h-14 px-4 text-white placeholder-[#b38dce] focus:ring-2 focus:ring-[#aa33ff]"
                                    placeholder="(XX) XXXXX-XXXX"
                                    value={whatsapp}
                                    onChange={(e) => setWhatsapp(e.target.value)}
                                />
                            </div>
                            <div>
                                <p className="text-base font-medium mb-2">Selecione o Bairro</p>
                                <select 
                                    className="w-full bg-[#39204b] border-none rounded-xl h-14 px-4 text-white focus:ring-2 focus:ring-[#aa33ff]"
                                    value={neighborhoodId}
                                    onChange={(e) => setNeighborhoodId(e.target.value)}
                                >
                                    <option value="">Selecione...</option>
                                    {NEIGHBORHOODS.map(n => (
                                        <option key={n.id} value={n.id}>{n.name} (+R$ {n.fee.toFixed(2)})</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Totals */}
                    <div className="bg-[#2a163a] rounded-xl border border-[#39204b] p-4 mb-8">
                        <div className="flex justify-between py-2 border-b border-[#39204b]">
                            <span className="text-[#b38dce]">Subtotal</span>
                            <span>R$ {subTotal.toFixed(2).replace('.', ',')}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-[#39204b]">
                            <span className="text-[#b38dce]">Taxa de Entrega</span>
                            <span>R$ {deliveryFee.toFixed(2).replace('.', ',')}</span>
                        </div>
                        <div className="flex justify-between py-2 font-bold text-lg">
                            <span className="text-[#b38dce]">Total</span>
                            <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="fixed bottom-0 w-full bg-[#1b0f24] border-t border-[#39204b] p-4 flex justify-center z-10">
                <div className="flex max-w-[960px] flex-1 gap-3 justify-between">
                     <button
                        onClick={() => setStep(Step.BUILD)}
                        className="flex h-10 px-4 items-center justify-center rounded-xl bg-[#39204b] text-white text-sm font-bold"
                    >
                        Voltar
                    </button>
                    <button
                        onClick={handleFinish}
                        className="flex h-10 px-4 items-center justify-center rounded-xl bg-[#aa33ff] text-white text-sm font-bold"
                    >
                        Finalizar Pedido
                    </button>
                </div>
            </footer>
        </div>
    );
}