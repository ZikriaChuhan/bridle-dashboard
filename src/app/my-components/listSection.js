import { CiBookmark } from "react-icons/ci";

const events = [
    {
        id: 1,
        date: { day: "FEB", number: 27 },
        title: "BHA - Kickoff to New Ownership",
        location: "Rim Rock Riders, 17037 Alfalfa Rd, Powell Butte, OR 97753, USA",
    },
    {
        id: 2,
        date: { day: "FEB", number: 28 },
        title: "Barrel Race (race 6)",
        location: "14405 179th Ave SE, Monroe, WA 98272, USA",
    },
    {
        id: 3,
        date: { day: "FEB", number: 28 },
        title: "2024 WEDNESDAY NIGHT'S 4D BARREL RACING - CANCELLED",
        location: "28962 Rd 168, Visalia, CA 93292, USA",
    },
    {
        id: 4,
        date: { day: "FEB", number: 28 },
        title: "Olsen's Events Jackpot!",
        location: "Olsen's Grain Inc, 344 AZ-89, Chino Valley, AZ 86323, USA",
    },
    {
        id: 5,
        date: { day: "MAR", number: 1 },
        title: "On Demand Pest Control Buckle Series Race #4",
        location: "Bergeron Rodeo Grounds, 4201 SW 65th Way, Davie, FL 33314, USA",
    },
];

export default function ListSection() {
    return (
        <>
            <section>
                <div className="p-4">
                    
                    <div className="flex justify-start gap-4 items-center mb-4">
                        <div className="flex ">
                            <button className="py-2 px-4 text-sm font-medium text-gray-800 bg-gray-200  rounded-l-md  hover:bg-gray-200">
                                All
                            </button>
                            <button className="py-2 px-4 text-sm font-medium text-gray-800 bg-gray-100  hover:bg-gray-200">
                                Live
                            </button>
                            <button className="py-2 px-4 text-sm font-medium text-gray-800 bg-gray-100 rounded-r-md hover:bg-gray-200">
                                Upcoming
                            </button>
                        </div>
                        <div className="flex gap-2">
                            <button className="py-2 px-4 text-sm font-medium text-gray-800 bg-gray-100 rounded-md hover:bg-gray-200">
                                Location
                            </button>
                            <button className="py-2 px-4 text-sm font-medium text-gray-800 bg-gray-100 rounded-md hover:bg-gray-200">
                                Event Date
                            </button>
                            <input
                                type="text"
                                placeholder="Search by event name..."
                                className="py-2 px-4 text-sm bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                    </div>

                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {events.map((event) => (
                            <div
                                key={event.id}
                                className="flex items-center justify-between p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition"
                            >
                                
                                <div className="flex flex-col items-center bg-purple-100 text-purple-700 rounded-md px-3 py-2">
                                    <span className="text-sm font-semibold">{event.date.day}</span>
                                    <span className="text-xl font-bold">{event.date.number}</span>
                                </div>

                               
                                <div className="flex-1 ml-4">
                                    <h3 className="text-md font-medium text-gray-900 leading-tight truncate">
                                        {event.title}
                                    </h3>
                                    <p className="text-sm text-gray-500">{event.location}</p>
                                </div>

                               
                                <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
                                    <CiBookmark size={24} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
