/**Top navigation bar that sticks to the top of the main content area**/
export default function Header() {
  return (
    <header className=" sticky top-0 z-10 flex items-center justify-between px-6 py-3 bg-[#f5f6fa]">
      {/*Search bar*/}
      <div
        className="flex items-center gap-2 bg-white rounded-xl px-3 py-2 w-52"
        style={{ boxShadow: "0 1px 4px rgba (0,0,0,0.8)" }}
      >
        <span className="text-gray-400 text-sm">🔍</span>
        <input
          type="text"
          className="text-xs text-gray-400 bg-transparent outline-none"
          placeholder="Search type of keywords"
          readOnly
        />
      </div>

      {/*Right-side icon cluster*/}
      <div className="flex items-center gap-4">
        {/*Notification bell*/}
        <button
          className="text-gray-400 hover:text-gray-600 text-lg bg-transparent border-0"
          aria-label="Notifications"
        >
          🔔
        </button>

        {/*Help icon*/}
        <button className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 text-gray-400 text-xs font-bold bg-transparent hover:text-gray-600">
          ?
        </button>

        {/*User avatar +name block*/}
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
            style={{ background: "linear-gradient(135deg, #9ca3af, #4b5563)" }}
          >
            L
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-700 leading-tight">
              Laurice
            </p>
            <p className="text-xs text-gray-400 leading-tight">@laurice22</p>
          </div>
        </div>
      </div>
    </header>
  );
}
