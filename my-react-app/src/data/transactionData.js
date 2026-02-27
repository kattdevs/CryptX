/*Transactions data for the right-side panel*/
export const transactions = [
    {
        name:"Ethereum",
        type:"Recieved",
        amount:"$24,102",
        time:"Today, 18:30",
        icon:"Ξ",
        iconBg:"bg-purple-100",
        iconColor:"text-purple-600",
        arrowUp:true,
    },

        {
        name:"Bitcoin",
        type:"Buy",
        amount:"$4,157",
        time:"Today, 14:32",
        icon:"₿",
        iconBg:"bg-orange-100",
        iconColor:"text-orange-500",
        arrowUp:false,
    },

        {
        name:"Bitcoin",
        type:"Buy",
        amount:"$64,784",
        time:"Today, 13:50",
        icon:"₿",
        iconBg:"bg-orange-100",
        iconColor:"text-orange-500",
        arrowUp:false,
    },

        {
        name:"Litecoin",
        type:"Buy",
        amount:"$14,265",
        time:"Today, 09:38",
        icon:"Ł",
        iconBg:"bg-blue-100",
        iconColor:"text-blue-500",
        arrowUp:false,
    },
];

/*Live market rows shown in the bottom-left panel*/
export const liveMarket =[
    {
        name:"Ethereum",
        pair:"ETH/ USDT",
        change:" +14.02%",
        price:"39,786 USD",
        up:true,
        color:"#6366f1",
        path:"M0, 20 C10, 15 20, 5,30, 10 C40, 15 50, 25 60, 18 C70, 11 80, 8 90, 12",
    },

      {
        name:"Bitcoin",
        pair:"ETH / USDT",
        change:"+4.02%",
        price:"21,786 USD",
        up:true,
        color:"#f59e0b",
        path:"M0, 15 C10, 10 20, 20 30, 12 C40, 4 50, 18 60, 10 C70, 2 80, 15 90, 8",
    },

      {
        name:"Litecoin",
        pair:"LTC / USDT",
        change:"-4.02%",
        price:"9,786 USD",
        up:false,
        color:"#ef4444",
        path:"M0, 8 C10, 12 20, 5 30, 18 C40, 25 50, 12 60, 20 C70, 28 80, 18 90, 22",
    },

      {
        name:"Cardano",
        pair:"ADA / USDT",
        change:"+0.02%",
        price:"4,786 USD",
        up:true,
        color:"#22c55e",
        path:"M0, 18 C10, 14 20, 22 30, 16 C40,10 50, 20 60, 14 C70, 8 80, 18 90,12",
    },

]