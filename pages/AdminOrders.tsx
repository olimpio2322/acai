import React from 'react';

// Orders data mockup based on HTML
const ORDERS = [
    { id: '1234', isNew: true, desc: '1 item • R$ 25,00', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-7_kYxLIcxhmhOSlkeMh9yYv7xdkMIEaP9_NvPF5Af2Zk27N1I-OADUXVEesqnBwzyjHFpOb14l4DqDxxOrg2EFoE_KhLn3DaAj4JhPwKrS7jCydlviWZyl0CP4jASgYSTvntSSZ5Fcp9fvZhECYjPiT432SQqq8Oz7gjVWoSWzdGppuUS7m0idImAW72jq4eSfRYv5-NZWjFDKNJbMPnOKrzLLv0syhGWz7gkg6jEkchqgeD4Q2q1_bQG9938sUFXCgaJE3eqGVg' },
    { id: '5678', isNew: true, desc: '2 itens • R$ 45,00', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC45nu5MwcrjdV--M4Hk26r3oWE-WYktuyW5zokA2VsDQu-8MqJFMWUOkBdOtkrYDdoOAK_CVxrA6jyx5cLutG79ximUz4mbPqWJlr2oNk1mHrIBqXL1LKR_WjnyC9kxBfa3XoVExQ-FQm70jOUjDkpUIxjUKVm2gYpyiHudTtVnlo17xx0CGxlTRSQ7vKpD7taMwQ66K9ruTs13g5ez5l5tbw7WoeAtkK3snPWCX9-xR0SI6b9YRMWEXemqyJ-WyZHHprGKgwC24zh' },
    { id: '9012', isNew: true, desc: '3 itens • R$ 60,00', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqjXx7DfcEwPSxIYCr15emNGQQObHEF4mlYTJX_fhsMbrneRrJhKTLOyH_v6e5IBiuPCXsUbCFycWnNAr0RVR2od578POv2mfLjFAxzNcEc4v_mfOKIbi429T9TmorlRaVU_-h-0Joex-mVxMPlI7-IgxTOb9nojH_haO9N-nkbJIc5djUJzFmCZqBKLBAsqoS-d5q3Soz4bmgjkdr-xQX_EzUyxAL37zCxSNTMDWxTcZh9H5L_lLsM0SHHtywogawEUfmHQPVWp1s' },
    { id: '3456', isNew: true, desc: '1 item • R$ 20,00', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLgdy41Nl6ix1gimRbbLUj7h9XgCOnM5TPrq7aR78Kb03zaft3lumbXQw0RvO6WBHHaaEy3qcD5v33RKJkN7ZhoRyqqRKMTAt9wCysZCpv4v2oiHAsygbkUSgq5gufM9d9XGGQuvS_hK-0hW3li2tWdb-xQTDOenZ9n1WGVLNPaAYQrLpYe93a3Y20aztcg-M3-BOCuoCOb-l0fXXXodrRg7Vdo23BDaCu0zUNJhUgt7XlusMu39mFE5QtCNSyeRqEzxDqnQz32hLU' },
    { id: '7890', isNew: true, desc: '2 itens • R$ 35,00', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMAqaen8ifXOnbKlfOUjYLY8dqdQVzc_y8MF4hsssDEk7vpxlgHsxzarZypyY1-XvaTRBrWZdCghgcts6JgxF2z40dxQqYkFKxzkp2FsOaSNEbzwWU4v_QoUCecIAbicMAVDhowwOXV8Tq1EftOKiB0a5vd1Dn_AhHhR0y1fh3zmuM5WDlcoAAbI7WTVrax5vYGbzbcFSVQtURrZtD1F_luXph28VvnrFVr8p8j13dWD1X5auqlixsx1pcC-yYNo9n3lHKY9tl2iRS' },
];

export default function AdminOrders() {
    return (
        <div className="flex h-full grow flex-col bg-[#0f2424] min-h-screen">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#204b4b] px-10 py-3">
                <div className="flex items-center gap-4 text-white">
                    <div className="size-4">
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor"></path></svg>
                    </div>
                    <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Acai Shop Admin</h2>
                </div>
                <div className="flex flex-1 justify-end gap-8">
                    <div className="flex items-center gap-9">
                        <a className="text-white text-sm font-medium leading-normal" href="#">Pedidos</a>
                        <a className="text-white text-sm font-medium leading-normal" href="#">Cardápio</a>
                        <a className="text-white text-sm font-medium leading-normal" href="#">Relatórios</a>
                        <a className="text-white text-sm font-medium leading-normal" href="#">Configurações</a>
                    </div>
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWLNMHMX0i7M7QHmWkOT7U1wquIp13l3af4G66qIWs3hXg5NPMIZF97XkCOxTm_RUIn32kw5cQtqJCs5S13pkz7QmG5E3_mVjsG1dUH9_YzQislwjwYs1lqThDQ6Njw0bFfbIIrskjP5Tc3pvUIWFVosJTFHA0jlAc0sFHic-2CbHR3Rfo6OnQUN5aMGYmu-Z1XoT5Yg8SgyOtiLwFI9Dvq6GY6dKIYM05t0Vqe-n5itTuiZ8Gup9cFB6T4mtFL4AKjNY3NMTX0-wv")' }}></div>
                </div>
            </header>
            <div className="px-40 flex flex-1 justify-center py-5">
                <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                    <div className="flex flex-wrap justify-between gap-3 p-4">
                        <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Pedidos em Aberto</p>
                    </div>
                    {ORDERS.map(order => (
                        <div key={order.id} className="p-4">
                            <div className="flex items-stretch justify-between gap-4 rounded-lg">
                                <div className="flex flex-[2_2_0px] flex-col gap-4">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[#8dcece] text-sm font-normal leading-normal">NOVO</p>
                                        <p className="text-white text-base font-bold leading-tight">Pedido #{order.id}</p>
                                        <p className="text-[#8dcece] text-sm font-normal leading-normal">{order.desc}</p>
                                    </div>
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#204b4b] text-white pr-2 gap-1 text-sm font-medium leading-normal w-fit">
                                        <div className="text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                                                <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path>
                                            </svg>
                                        </div>
                                        <span className="truncate">Chamar Cliente</span>
                                    </button>
                                </div>
                                <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1" style={{ backgroundImage: `url("${order.image}")` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}