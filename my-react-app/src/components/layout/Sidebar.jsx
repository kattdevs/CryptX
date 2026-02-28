const NavItems = [
    {label:"Overview",     icon:"⊞", active:"true"},
    {label:"Chart",     icon:"📈", active:"false"},
    {label:"Transactions",     icon:"↔", active:"false"},
    {label:"Wallet",     icon:"👛", active:"false"},
    {label:"Mail Box",     icon:"✉", active:"false"},
    {label:"Setting",     icon:"⚙", active:"false"},
    {label:"Logout",     icon:"⎋", active:"false"},
];

export default function Sidebar() {
    return(
        <aside className="fixed top-0 left-0 bottom-0 z-10 flex flex-col w-36 bg-white py-6 px-3"
        style={{ boxShadow: "2px 0 8px rgba(0,0,0,0.6)"}}>

            {/*Logo*/}
            <div className="flex items-center gap-2 mb-8 px-2">
                <div className="flex">
                <div className="w-3 h-3 rounded-full bg-indigo-500" style={{ opacity:0.0}} />
                 <div className="w-3 h-3 rounded-full bg-indigo-500 -ml-1.5" style={{opacity: 0.4}} />
                 </div>
                 <span className="font-bold text-sm text-gray-800 tracking-tight">CryptX</span>
                 </div>

                {/*Nav*/}
                 <nav className="flex flex-col gap-1">
                    {NavItems.map((item) => (
                        <button 
                        key={item.label}
                        className={`flex items-center gap-2.5 px-2 py-2 rounded-xl text-xs w-full text-left border-0 
                            ${item.active
                                ? "bg-indigo-50 text-indigo-600 font-semibold"
                                : "text-gray-400 hover:text-gray-600 hover:bg-gray-50 font-medium"
                            }`}
                            >
                                <span className="text-sm">{item.icon}</span>
                                {item.label}
                                {item.active && (
                            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        )}
                </button>
            ))}
        </nav>
    </aside> 
    );
}