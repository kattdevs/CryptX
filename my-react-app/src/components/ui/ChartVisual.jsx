const ChartVisual = () => {
    return(
        <div className="bg-white p-6 rounded-xl shadow-sm col-span-2">
            <h2 className="font-semibold mb-6">BTC Prices</h2>

            <svg viewBox="0 0 500 200" className="w-full h-40 sm:h-48">
                <path
                d="M0 120 C 80 80, 150 150, 220 100 S 350 180, 500 90"
                fill="none"
                stroke="#6366f1"
                strokeWidth="3"
                />
            </svg>
        </div>
    );
};

export default ChartVisual;