/**Top navigation bar that sticks to the top of the main content area**/
export default function Header() {
  return (
        <header className="flex-items-center justify-between bg-gray-50 px-6 py-3 sticky top-0 z-10">

        {/*Search bar*/}
        <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-2 shadow-sm w-52">
        
        {/*Magnifier icon*/}
        <span className="text-gray-400 text-sm">🔍</span>

        {/*Text input*/}
        <input type="text" className="text-xs text-gray-400 bg-transparent outline-none" placeholder="Search type of keywords" readOnly/></div>

        {/*Right-side icon cluster*/}
        <div className="flex items-center gap-4">

        {/*Notification bell*/}
            <button className="text-gray-400 hover:text-gray-600 text-lg" aria-label="Notifications">🔔</button>
            
        {/*Help icon*/}
        <button className="text-gray-400 hover:text-gray-600 text-base font-bold border border-gray-300 rounded-full w-6 h-6 flex items-center justify-center" aria-label="Help">?</button>

        {/*User avatar +name block*/}
        <div className="flex items-center gap-2">

        {/*Avatar circle*/}
        <div className="w-8 h-8 rounded-full overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white text-xs font-bold">L
            </div>
        </div>

        {/*Display name and handle*/}
        <div className="hidden sm:block">
            <p className="text-xs font-semibold text-gray-700 leading-tight">
                Laurice
            </p>
            <p className="text-xs text-gray-400 leading-tight">
                @laurice22
            </p>
        </div>

        </div>
        </div>
        </header>
    );
}