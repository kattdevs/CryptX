const MetricCard = ({title, value, change, color}) => {
    return (
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <div className={`w-10 h-10 rounded-lg ${color}`}></div>
                <span className={`text-sm ${change.includes ('-') ? 'text-red-500' : 'text-green-500'}`}>
                {change}
                </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">{value}</h2>
            <p className="text-gray-400 text-sm mt-1">{title}</p>
        </div>

    );
};

export default MetricCard;