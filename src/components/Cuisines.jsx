import { useState } from "react";

const cuisines = [
    "Chinese Restaurant  Near Me",
    "South Indian Restaurant Near Me",
    "Indian Restaurant Near Me",
    "Kerala Restaurant Near Me",
    "Korean Restaurant Near Me",
    "North Indian Restaurant Near Me",
    "Seafood Restaurant Near Me",
    "Bengali Restaurant Near Me",
    "Punjabi Restaurant Near Me",
    "Italian Restaurant Near Me",
    "Andhra Restaurant Near Me",
    "Rajasthani Restaurant Near Me",
    "Goan Restaurant Near Me",
    "Thai Restaurant Near Me",
     "Punjabi Restaurant Near Me",
    "Italian Restaurant Near Me",
    "Andhra Restaurant Near Me",
    "Rajasthani Restaurant Near Me",
    "Goan Restaurant Near Me",
    "Thai Restaurant Near Me",
];

const resturent = [
    "Thai Restaurant Near Me",
     "Punjabi Restaurant Near Me",
]
const Cuisines = () => {
    const [showAll, setShowAll] = useState(false);

    const visibleCuisines = showAll ? cuisines : cuisines.slice(0, 9);

    return (
        <div className=" max-w-[1000px] mx-auto px-4 py-16">
            <h2 className="text-2xl font-bold mb-6">Best Cuisines Near Me</h2>

            <div className=" max-w-6xl grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                {visibleCuisines.map((cuisine, index) => (
                    <div
                        key={index}
                        className="  border border-gray-300 rounded-lg p-3 lg:p-3  text-center text-[13px] md:text-[17px] lg:text-[17px] font-medium hover:shadow-sm cursor-pointer"
                    >
                       {cuisine}
                    </div>
                ))}

                {!showAll && (
                    <div
                        onClick={() => setShowAll(true)}
                        className="border border-gray-300 rounded-lg p-4 text-center text-[18px] font-bold text-orange-500 cursor-pointer hover:bg-orange-50"
                    >
                        Show More ↓
                    </div>
                )}
            </div>
             
            <h2 className="text-2xl font-bold my-10">Explore Every Restaurants Near Me</h2>
            <div className=" max-w-6xl grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 ">
                {resturent.map((restaurant, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 rounded-lg p-4 text-center text-[13px] md:text-[17px] lg:text-[17px] font-medium hover:shadow-sm cursor-pointer"
                    >
                        {restaurant}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cuisines;