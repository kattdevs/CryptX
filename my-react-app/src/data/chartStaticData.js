/*SVG path string for BTC price line*/
export const btcLinePath =
"M0, 130 C20, 120 40, 100 60, 110 C80, 120 100, 80 130, 85 130, 85 C160, 90 170, 60 190, 65 C210, 70 230, 40 255, 50 C270, 56 290, 30 320,20"

/**Position of the interactive dot and tooltip on the chart*/
export const btcDot= {x:190, y:65, label: "$25,240"};

/** X-axis month labels rendered beneath the chart */
export const btcXLabels = ["Jan", "Mar", "May", "Jul", "Sep", "Nov"];

/**Y-axis value labels rendered on the left side of the chart*/
export const btcYLabels = [800, 600, 400, 200,0];

/*Data for the four metric cards displayed in the top-left grid*/
export const metricCards = [
    {
    icon:"₿",
    bg:"#f59e0b",
    label:"Bitcoin - BTC",
    value:"$40,291",
    change:"+0.25%",
    up:true,
    },

        {
    icon:"Ξ",
    bg:"#8b5cf6",
    label:"Ethereum - ETH",
    value:"$18,291",
    change:"+0.25%",
    up:true,
    },

        {
    icon:"Ł",
    bg:"#3b82f6",
    label:"Litecoin - LTL",
    value:"$8,291",
    change:"+0.25%",
    up:true,
    },

        {
    icon:"₳",
    bg:"#22c55e",
    label:"Cardano - ADA",
    value:"$3,291",
    change:"-2.08",
    up:false,
    },
];
