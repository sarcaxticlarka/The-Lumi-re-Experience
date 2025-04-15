import React, { useState } from 'react';
import { Calendar, Clock, ChevronLeft, Plus, Settings, List, BarChart2, MessageSquare, Ticket } from 'lucide-react';

export default function RSVPTicketingSystem() {
    const [activeTab, setActiveTab] = useState('Events');
    const [events, setEvents] = useState([
        {
            id: 1,
            title: "Tech Conference 2025",
            date: "April 15, 2025",
            time: "09:00 AM",
            type: "In-Person",
            location: "Venue",
            availableTickets: "243/500",
            ticketsSold: 257,
            maxTickets: 500,
            revenue: 12850,
            rsvpStatus: "Confirmed",
            rsvpStatusColor: "blue",
            bgColor: "blue",
            confirmationRate: 75,
            declineRate: 15,
            pendingRate: 10
        },
        {
            id: 2,
            title: "Product Launch",
            date: "April 22, 2025",
            time: "02:00 PM",
            type: "Hybrid",
            location: "Venue",
            availableTickets: "87/150",
            ticketsSold: 63,
            maxTickets: 150,
            revenue: 3150,
            rsvpStatus: "Pending",
            rsvpStatusColor: "yellow",
            bgColor: "blue",
            confirmationRate: 45,
            declineRate: 5,
            pendingRate: 50
        },
        {
            id: 3,
            title: "Design Workshop",
            date: "May 3, 2025",
            time: "10:00 AM",
            type: "Virtual",
            location: "Zoom",
            availableTickets: "32/50",
            ticketsSold: 18,
            maxTickets: 50,
            revenue: 900,
            rsvpStatus: "Hosting",
            rsvpStatusColor: "green",
            bgColor: "red",
            confirmationRate: 60,
            declineRate: 10,
            pendingRate: 30
        }
    ]);

    const [selectedEvent, setSelectedEvent] = useState(events[0]);
    const [showEventForm, setShowEventForm] = useState(false);
    const [showTicketForm, setShowTicketForm] = useState(false);
    const [newTickets, setNewTickets] = useState(0);
    const [newEvent, setNewEvent] = useState({
        title: "",
        date: "",
        time: "",
        type: "In-Person",
        location: "",
        maxTickets: 0,
        rsvpStatus: "Pending",
        rsvpStatusColor: "yellow",
        bgColor: "blue"
    });

    const handleSelectEvent = (event) => {
        setSelectedEvent(event);
    };

    const handleAddTickets = () => {
        if (newTickets <= 0) return;

        const updatedEvents = events.map(event => {
            if (event.id === selectedEvent.id) {
                const updatedTicketsSold = event.ticketsSold + parseInt(newTickets);
                const updatedAvailableTickets = `${event.maxTickets - updatedTicketsSold}/${event.maxTickets}`;
                const updatedRevenue = event.revenue + (parseInt(newTickets) * 50); // Assuming $50 per ticket

                return {
                    ...event,
                    ticketsSold: updatedTicketsSold,
                    availableTickets: updatedAvailableTickets,
                    revenue: updatedRevenue
                };
            }
            return event;
        });

        setEvents(updatedEvents);
        setSelectedEvent(updatedEvents.find(event => event.id === selectedEvent.id));
        setShowTicketForm(false);
        setNewTickets(0);
    };

    const handleCreateEvent = () => {
        if (!newEvent.title || !newEvent.date || !newEvent.time || !newEvent.location || newEvent.maxTickets <= 0) {
            return;
        }

        const newId = Math.max(...events.map(e => e.id)) + 1;
        const createdEvent = {
            ...newEvent,
            id: newId,
            availableTickets: `${newEvent.maxTickets}/${newEvent.maxTickets}`,
            ticketsSold: 0,
            revenue: 0,
            confirmationRate: 0,
            declineRate: 0,
            pendingRate: 100
        };

        setEvents([...events, createdEvent]);
        setShowEventForm(false);
        setNewEvent({
            title: "",
            date: "",
            time: "",
            type: "In-Person",
            location: "",
            maxTickets: 0,
            rsvpStatus: "Pending",
            rsvpStatusColor: "yellow",
            bgColor: "blue"
        });
    };

    return (
        <div className="bg-gray-100 relative w-full py-2 px-4 md:px-8 lg:px-64 h-screen overflow-y-auto">
            <img
                className='absolute w-[12vw] right-0 bottom-0'
                src="https://images.pexels.com/photos/1058771/pexels-photo-1058771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                style={{ clipPath: 'polygon(30% 99%, 100% 0, 0 0, 72% 100%)' }}
            />
            <h1 className='text-5xl mb-4'>Your Dashboard</h1>
            <div className="mx-auto max-w-full   bg-green-50 rounded-xl shadow-sm ">
                {/* Header Navigation */}
                <div className="flex items-center justify-between px-4 py-4 bg-white border-b">
                    <div className="flex items-center space-x-2">
                        <div className="h-6 w-6 rounded-full bg-purple-700"></div>
                        <span className="font-bold text-gray-800">EventFlow</span>
                    </div>

                    <div className="flex space-x-2 overflow-x-auto">
                        <button className={`px-4 py-2 rounded-full text-sm ${activeTab === 'Home' ? 'bg-purple-700 text-white' : 'bg-gray-100 text-gray-700'}`}
                            onClick={() => setActiveTab('Home')}>
                            Home
                        </button>
                        <button className={`px-4 py-2 rounded-full text-sm ${activeTab === 'Events' ? 'bg-purple-700 text-white' : 'bg-gray-100 text-gray-700'}`}
                            onClick={() => setActiveTab('Events')}>
                            Events
                        </button>
                        <button className={`px-4 py-2 rounded-full text-sm ${activeTab === 'Tickets' ? 'bg-purple-700 text-white' : 'bg-gray-100 text-gray-700'}`}
                            onClick={() => setActiveTab('Tickets')}>
                            Tickets
                        </button>
                        <button className={`px-4 py-2 rounded-full text-sm ${activeTab === 'Settings' ? 'bg-purple-700 text-white' : 'bg-gray-100 text-gray-700'}`}
                            onClick={() => setActiveTab('Settings')}>
                            Settings
                        </button>
                    </div>

                    <div className="h-8 w-8 rounded-full bg-orange-300 flex items-center justify-center text-white">
                        <span className="text-xs">RS</span>
                    </div>
                </div>

                <div className="flex">
                    {/* Sidebar */}
                    <div className="bg-gray-900 w-12 py-8 flex flex-col items-center space-y-6">
                        <div className="h-8 w-8 rounded-full bg-gray-800 border-2 border-purple-800 flex items-center justify-center text-white">
                            <Ticket size={16} />
                        </div>
                        <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center text-white">
                            <List size={16} />
                        </div>
                        <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center text-white">
                            <BarChart2 size={16} />
                        </div>
                        <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center text-white">
                            <MessageSquare size={16} />
                        </div>
                        <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center text-white">
                            <Settings size={16} />
                        </div>
                        <div className="mt-auto h-8 w-8 rounded-full bg-purple-800 flex items-center justify-center text-white cursor-pointer"
                            onClick={() => setShowEventForm(true)}>
                            <Plus size={16} />
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 bg-green-50 p-4 md:p-6 overflow-y-auto">
                        {/* Page Header */}
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center space-x-2">
                                <ChevronLeft size={20} className="text-gray-800" />
                                <h1 className="text-sm font-bold text-gray-800">My Events</h1>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-gray-600">April, 2025</span>
                                <div className="h-8 w-8 flex items-center justify-center bg-white rounded border border-gray-200">
                                    <Calendar size={16} />
                                </div>
                            </div>
                        </div>

                        {/* Upcoming Events Section */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800">Upcoming Events</h2>
                            <div className="h-1 w-32 bg-purple-700 rounded-full mb-5"></div>

                            <div className="grid grid-cols-1 text-2xl md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                {events.map(event => (
                                    <div key={event.id} onClick={() => handleSelectEvent(event)} className="cursor-pointer ">
                                        <EventCard
                                            title={event.title}
                                            date={event.date}
                                            time={event.time}
                                            type={event.type}
                                            location={event.location}
                                            availableTickets={event.availableTickets}
                                            rsvpStatus={event.rsvpStatus}
                                            rsvpStatusColor={event.rsvpStatusColor}
                                            bgColor={event.bgColor}
                                            isSelected={selectedEvent && selectedEvent.id === event.id}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Ticket Management Section */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">Ticket Management</h2>
                            <div className="h-1 w-40 bg-purple-700 rounded-full mb-4"></div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                                {/* Ticket Management Card */}
                                <div className="md:col-span-2 py-12 bg-white rounded-lg shadow-sm p-4">
                                    <div className="mb-4 ">
                                        <div className="flex  justify-between items-center">
                                            <h3 className="font-bold text-sm text-gray-800">{selectedEvent.title}</h3>
                                            <div className="flex space-x-4">
                                                <span className="text-gray-600">{selectedEvent.date}</span>
                                                <span className="text-gray-600">{selectedEvent.time}</span>
                                            </div>
                                        </div>
                                        <div className="border-t border-gray-200 my-3"></div>
                                        <div className="flex justify-between">
                                            <div>
                                                <span className="text-gray-600 text-sm">Ticket Sales:</span>
                                                <span className="ml-2 text-sm">{selectedEvent.ticketsSold} / {selectedEvent.maxTickets}</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-600 text-sm">Revenue:</span>
                                                <span className="ml-2 text-sm">${selectedEvent.revenue}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            className="px-6  py-2 bg-purple-700 text-white text-sm rounded-full"
                                            onClick={() => setShowTicketForm(true)}>
                                            Manage Tickets
                                        </button>
                                        <button className="px-4 py-2 border border-purple-700 text-purple-700 text-sm rounded-full">
                                            Send Reminders
                                        </button>
                                        <button className="px-4 py-2 border border-purple-700 text-purple-700 text-sm rounded-full">
                                            View Guest List
                                        </button>
                                    </div>

                                    {/* Ticket Form */}
                                    {showTicketForm && (
                                        <div className="mt-4 p-4 border border-gray-200 rounded-lg">
                                            <h4 className="font-bold text-gray-800 mb-3">Add Ticket Sales</h4>
                                            <div className="flex items-center space-x-4">
                                                <div className="flex-1">
                                                    <label className="block text-sm text-gray-600 mb-1">Number of Tickets</label>
                                                    <input
                                                        type="number"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                                        value={newTickets}
                                                        onChange={(e) => setNewTickets(e.target.value)}
                                                        min="1"
                                                    />
                                                </div>
                                                <div className="flex items-end space-x-2">
                                                    <button
                                                        className="px-4 py-2 bg-purple-700 text-white text-sm mt-4 rounded-full"
                                                        onClick={handleAddTickets}>
                                                        Add Tickets
                                                    </button>
                                                    <button
                                                        className="px-4 py-2 border border-gray-300 text-gray-600 text-sm rounded-full"
                                                        onClick={() => setShowTicketForm(false)}>
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* RSVP Summary Card */}
                                <div className="bg-white rounded-lg shadow-sm p-4">
                                    <h3 className="font-bold text-2xl text-gray-800 mb-4">RSVP Summary</h3>

                                    <div className="flex justify-between items-center">
                                        {/* Confirmation Rate */}
                                        <div className="flex flex-col items-center">
                                            <div className="relative h-12 w-12">
                                                <svg viewBox="0 0 36 36" className="h-12 w-12">
                                                    <path
                                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                        fill="none"
                                                        stroke="#6d28d9"
                                                        strokeWidth="3"
                                                    />
                                                    <path
                                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                        fill="none"
                                                        stroke="#6d28d9"
                                                        strokeWidth="3"
                                                        strokeDasharray={`${selectedEvent.confirmationRate}, 100`}
                                                    />
                                                </svg>
                                                <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                                                    <span className="text-sm font-bold">{selectedEvent.confirmationRate}%</span>
                                                </div>
                                            </div>
                                            <span className="text-xl text-gray-600 text-xl mt-1">Confirmation Rate</span>
                                        </div>

                                        {/* Decline Rate */}
                                        <div className="flex flex-col items-center">
                                            <div className="relative h-12 w-12">
                                                <svg viewBox="0 0 36 36" className="h-12 w-12">
                                                    <path
                                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                        fill="none"
                                                        stroke="#ef4444"
                                                        strokeWidth="3"
                                                    />
                                                    <path
                                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                        fill="none"
                                                        stroke="#ef4444"
                                                        strokeWidth="3"
                                                        strokeDasharray={`${selectedEvent.declineRate}, 100`}
                                                    />
                                                </svg>
                                                <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                                                    <span className="text-sm font-bold">{selectedEvent.declineRate}%</span>
                                                </div>
                                            </div>
                                            <span className="text-xl text-gray-600 mt-1">Decline Rate</span>
                                        </div>

                                        {/* Pending Rate */}
                                        <div className="flex flex-col items-center">
                                            <div className="relative h-12 w-12">
                                                <div className="h-12 w-12 rounded-full border-2 border-amber-500 overflow-hidden">
                                                    <div
                                                        className="h-full bg-amber-500"
                                                        style={{ width: `${selectedEvent.pendingRate}%` }}
                                                    ></div>
                                                </div>
                                                <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                                                    <span className="text-xs font-bold">{selectedEvent.pendingRate}%</span>
                                                </div>
                                            </div>
                                            <span className="text-xl text-gray-600 mt-1">Pending</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Event Modal */}
            {showEventForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Create New Event</h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Event Title</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    value={newEvent.title}
                                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm text-gray-600 mb-1">Date</label>
                                    <input
                                        type="text"
                                        placeholder="MM/DD/YYYY"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                        value={newEvent.date}
                                        onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-600 mb-1">Time</label>
                                    <input
                                        type="text"
                                        placeholder="HH:MM AM/PM"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                        value={newEvent.time}
                                        onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm text-gray-600 mb-1">Event Type</label>
                                    <select
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                        value={newEvent.type}
                                        onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
                                    >
                                        <option value="In-Person">In-Person</option>
                                        <option value="Virtual">Virtual</option>
                                        <option value="Hybrid">Hybrid</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-600 mb-1">Location</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                        value={newEvent.location}
                                        onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Maximum Tickets</label>
                                <input
                                    type="number"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    value={newEvent.maxTickets}
                                    onChange={(e) => setNewEvent({ ...newEvent, maxTickets: parseInt(e.target.value) })}
                                    min="1"
                                />
                            </div>

                            <div className="flex justify-end space-x-2 pt-4">
                                <button
                                    className="px-4 py-2 border border-gray-300 text-gray-600 rounded-md"
                                    onClick={() => setShowEventForm(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="px-4 py-2 bg-purple-700 text-white rounded-md"
                                    onClick={handleCreateEvent}
                                >
                                    Create Event
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// Event Card Component
function EventCard({ title, date, time, type, location, availableTickets, rsvpStatus, rsvpStatusColor, bgColor, isSelected }) {
    // Map status colors to Tailwind classes
    const statusColorMap = {
        blue: {
            bg: 'bg-blue-100',
            text: 'text-blue-500'
        },
        green: {
            bg: 'bg-green-100',
            text: 'text-green-600'
        },
        yellow: {
            bg: 'bg-amber-100',
            text: 'text-amber-600'
        },
        red: {
            bg: 'bg-red-100',
            text: 'text-red-500'
        }
    };

    const bgColorMap = {
        blue: 'bg-blue-50',
        red: 'bg-red-50',
        green: 'bg-green-50'
    };

    const statusClasses = statusColorMap[rsvpStatusColor] || statusColorMap.blue;
    const typeClasses = statusColorMap[rsvpStatusColor === 'red' ? 'red' : 'blue'];
    const headerBgClass = bgColorMap[bgColor] || bgColorMap.blue;

    return (
        <div className={`bg-white rounded-lg shadow-sm overflow-hidden ${isSelected ? 'ring-2 ring-purple-700' : ''}`}>
            {/* Card Header */}
            <div className={`p-4 ${headerBgClass}`}>
                <h3 className="font-bold text-gray-800 mb-1">{title}</h3>
                <div className="flex justify-between text-sm text-gray-600">
                    <span>{date}</span>
                    <span>{time}</span>
                </div>
                <div className="flex space-x-2 mt-2">
                    <span className={`px-3 py-1 rounded-full text-xs ${typeClasses.bg} ${typeClasses.text}`}>
                        {type}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs bg-purple-100 text-purple-600">
                        {location}
                    </span>
                </div>
            </div>

            {/* Card Content */}
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600">Available Tickets:</span>
                    <span className="text-sm font-bold">{availableTickets}</span>
                </div>

                <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600">RSVP Status:</span>
                    <span className={`px-3 py-1 rounded-full text-xs ${statusClasses.bg} ${statusClasses.text}`}>
                        {rsvpStatus}
                    </span>
                </div>

                <div className="flex space-x-2">
                    <button className="flex-1 px-3 py-1 bg-purple-700 text-white text-sm rounded-full">
                        Manage Event
                    </button>
                    <button className="flex-1 px-3 py-3 border border-purple-700 text-purple-700 text-sm rounded-full">
                        View Tickets
                    </button>
                </div>
            </div>
        </div>
    );
}