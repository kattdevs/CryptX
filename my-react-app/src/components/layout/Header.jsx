const Header = () => {
    return (
        <header className="bg-white px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm">
            <input 
            type="text"
            placeholder="Search type of keywords"
            className="bg-gray-100 px-4 py-2 rounded-lg w-full sm:w-72 lg:w-80 text-sm outline-none"
            />

            <div className="flex items-center justify-between sm:justify-end gap-4">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <span className="font-medium text-sm sm:text-base">Laurice</span>
            </div>
        </header>
    );
};

export default Header;