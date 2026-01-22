import React from 'react';

const INGREDIENTS = [
    { name: 'Nutella', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDurpp9eCknZody3jbkcgZcpMLk-l8zVEUypDxKx82d_mEAtkBtG1jrCT-rjhP_muguTZNmYmtM5889i6VRIlQh3G_JdTTL_wHgxU4ZTSH2Go8NGbnB5eGL3f1e9Ke-kZu-mZIkR__HxjxNYLy69KrOmCUXddJ-NrTTyPM2Js0GoY16gua3sr-7vYdSYnOlbYENsSrKliv2hyPRiBJZsHDxn2Grn5gtMNLpOpksEAx3gEz607oOnSdE0c0y9vltGNhyLbPlV6JxHqIr' },
    { name: 'Morango', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDt8sk4YbmwCl8-NKt_Ajv6B_cx0zj6AO24sQ0N7EuoJNKbOtB1YF3XtfQq-nGaifxLFI4tk-zePdoph6TsK-1CtOU8YO76dcQac0MuBckZbh3sS1Yyf3hEaKVKgcLIcgPkNE3MhdxoffIE4YAHujE7Y-iUMUUDnkNn4M2GuFUHGp37NSIu3aus5VG-OertymFLfTcpVD_wsnYvyXEVgOxajkB0eqMvR9yBaDApUBztqi2aobdH61eaquQsLvPASB1Q5IYdYXuoDswy' },
    { name: 'Granola', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZvDmLtF5VLhZBeenpOhE_phIy63efRdvuT4KKvKq1DYAVS7b0iRNRKCp8qwu_60_yYF5sn9fqv5gdUcX7eIyTRju2FW_VeGqtv4-kW72pLc5vvOSH4bjB-TxhbqdwEQmsDJX1U4w-y1NfLfIAy98HZaj8JpcHn9pJ4yf11xuwBhxtLc61Asq5qE26YhA_jsjiqQ7PwFl8HPMr1oCzM2oItgHUwbiuUkzyVSWN6bWumtiue5LH42ek-4InfyFAJrjPAtOpsXYJiHuQ' },
    { name: 'Leite Condensado', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmI1tlDqB36olaxMyh_ZrHK3lo1_Bzo1FtffitnbV6q97K2HALgenxaPzsGrGkPPpSrOCL8D_UaChwbXTzssg5TmvTJA4bFKbzkXIvGzGP93obYmtfqtyxjhGJ7ej-BSij92EltOlc4a6zdQGQ2c8_5fKY1q08E5jtBegOCo_CijxqHItRDj-wlccR49s3J2SOupo3rmJfTA4CA3T3xi_pgkKlFY6UM-sVQwRtvuzO_hQG_wvtH71_tK0Nkj6zsWks0VR80Fpypz7x' },
    { name: 'Banana', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2_0Wv7J8wQpIp3tSHW13q3DWPW33JJ-6kygOx1GkUiuX7Mif7FU8o7RlOSNr8j3Nm7joxzSh13YOlfbyHXFxQlaTXYkzAvawSfFy7kczHLEteY2eRG7WXEh6SyOGQ9rTg9-3qcFOTl0yI7qZHB1XwIre6I6V8b5I6MCwpmsuYWwhCbxPWA1D_gkyWhbtFjiePllEeO386Uq43a_Ap5IXRM4jhdlHhNE1loa277unF3FDzEG6XQadOYoJfJkIaA9D2CBp3uKjmgu-d' },
    { name: 'Kiwi', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMdX__9ozuChv7CE5MfKyN-M5pQvH4ExOeOto7yJXLf71WqUwh2_u-iA5TqPc3XsGwuAsb1Hwxk-ihxE6MheFm74As4uFynmXfjBlrkV4MIc70TluipxeuCJf0bBdUPaa-bvhe23loMVUknU0jQbP2059lRAmUoZRT71VZsys84DQHA3JoVnuT3yTd60HhWrzn04m7HmVaMHChFTZaHjY0rAb3rsS4xmtokpV-w58poY8M8kzdm8oLaNmnCqTary1cN-G7AZeHL66H' },
    { name: 'Manga', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4NxfdbwLJYioJN2soFsqxhV-z19mNeuZ4E2IadKn1mZH1pvhAbJy7LHD9ppmMhT19X4Suu6a96AbBEuR0upHoHtTFcWlLwjMymcgKi3-7wYr-VEvErLFsMEjRoNlYQyspGe-h9RGAdjNp2JdxFpNp1yoC3qHOLp7RxXV7J-uxqyCkpTax4b1zitBALnQ9AEuCGftvlz0_8gOJqeeC-WMeCqWEAlmrbW65r5DAGoEGP0qwE7TN4md-RK1i1xj1MRptxIy1MYWSFvXx' },
    { name: 'Chocolate', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClxGql3F80IoBwAG9QxvVA0RMSVcrRK-pjUOnXxyz0gDLkANOyF7zAtL_oyo7Z4eReh0epybNNY5PG_I-vhN8mPLz77vsJ7Z6hD_RjHE15oPTRBgBX70IgPNFFrrRZ29LQdjjcdFYrZK_7T0ddEFxymGte_fE38Qc-oHPRYwOBfOaABzdPYe6lS0riFQd1MaiY3LcZAg_twYoE8MI2aRyEaTKqYTxVIYDPDTCi3fgsCtWIbcERnjh_iC76RxfaoAjC6nXQRXpVWyu-' },
];

export default function AdminStock() {
    return (
        <div className="flex flex-col h-full grow min-h-screen bg-[#1b0f24]">
             <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#39204b] px-10 py-3">
                 <div className="flex items-center gap-4 text-white">
                     <div className="size-4">
                         <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor"></path></svg>
                     </div>
                     <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Açaí Shop Admin</h2>
                 </div>
                 <div className="flex flex-1 justify-end gap-8">
                     <div className="flex items-center gap-9">
                         <a className="text-white text-sm font-medium leading-normal" href="#">Pedidos</a>
                         <a className="text-white text-sm font-medium leading-normal" href="#">Estoque e Bairros</a>
                         <a className="text-white text-sm font-medium leading-normal" href="#">Relatórios</a>
                     </div>
                     <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWcVYNWJUfE8S845aYjbPBeWlQBVQupdC1CJclfiCwRCzIgkUS6_i6Aw4XrBjvYX7Fa3htuTq89GgKjg8MyhCPBSjuIdh_VaE7StjpnFdjs9sAFn_pcb74A7XowzBmiVXz4k_BDXkUhld25UOrYDwCYENyxhICof5vzK6VHWvi0_LfHs8BMIYB184Dk0JMczofdWA-3BR6gFp34VmDVlYMz8rj7CbDoLTi_ZGAJJ2A1g59LJgmJsy0PcbM3YckUd-7H353A0IkaBh5")' }}></div>
                 </div>
             </header>

            <div className="px-40 flex flex-1 justify-center py-5">
                <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                    <div className="flex flex-wrap justify-between gap-3 p-4"><p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Estoque e Bairros</p></div>
                    <div className="pb-3">
                        <div className="flex border-b border-[#522e6b] px-4 gap-8">
                            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#aa33ff] text-white pb-[13px] pt-4" href="#">
                                <p className="text-white text-sm font-bold leading-normal tracking-[0.015em]">Estoque</p>
                            </a>
                            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#b38dce] pb-[13px] pt-4" href="#">
                                <p className="text-[#b38dce] text-sm font-bold leading-normal tracking-[0.015em]">Bairros</p>
                            </a>
                        </div>
                    </div>
                    <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Ingredientes</h3>
                    
                    {INGREDIENTS.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-[#1b0f24] px-4 min-h-[72px] py-2 justify-between">
                            <div className="flex items-center gap-4">
                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14" style={{ backgroundImage: `url("${item.image}")` }}></div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-white text-base font-medium leading-normal line-clamp-1">{item.name}</p>
                                    <p className="text-[#b38dce] text-sm font-normal leading-normal line-clamp-2">{item.name}</p>
                                </div>
                            </div>
                            <div className="shrink-0">
                                <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-[#39204b] p-0.5 has-[:checked]:justify-end has-[:checked]:bg-[#aa33ff]">
                                    <div className="h-full w-[27px] rounded-full bg-white shadow-sm"></div>
                                    <input type="checkbox" className="invisible absolute" defaultChecked />
                                </label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}