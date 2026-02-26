const Sidebar = () => {
    return(
        <aside className="hidden lg:flex lg:flex-col w-64 bg-white shadow-sm p-6 ">
            <h1 className="text-xl font-bold mb-10 text-indigo-600">CryptX</h1>

            <nav className="space-y-6 text-gray-500 text-sm">
                <p className="text-indigo-600 font-semibold">Overview</p>
                <p className="hover:text-indigo-600 cursor-pointer">Chart</p>
                <p className="hover:text-indigo-600 cursor-pointer">Transactions</p>
                <p className="hover:text-indigo-600 cursor-pointer">Wallet</p>
                <p className="hover:text-indigo-600 cursor-pointer">Mail Box</p>
                <p className="hover:text-indigo-600 cursor-pointer">Setting</p>
                <p className="hover:text-indigo-600 cursor-pointer">Logout</p>
            </nav>
        </aside>
    );
};

export default Sidebar;