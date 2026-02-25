const Sidebar = () => {
    return(
        <aside className="w-64 bg-white shadow-sm p-6 hidden md:block">
            <h1 className="text-xl font-bold mb-10 text-indigo-600">CryptX</h1>

            <nav className="space-y-6 text-gray-500">
                <p className="text-indigo-600 font-semibold">Overview</p>
                <p>Chart</p>
                <p>Transactions</p>
                <p>Wallet</p>
                <p>Mail Box</p>
                <p>Setting</p>
                <p>Logout</p>
            </nav>
        </aside>
    );
};

export default Sidebar;