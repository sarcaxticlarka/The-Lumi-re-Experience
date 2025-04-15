import React, { useState } from 'react';
import { User, Users, Mail, Phone, Check, X, Search, ChevronDown, Filter, Download } from 'lucide-react';

export default function GuestManagementDashboard() {
  const [activeTab, setActiveTab] = useState('All Guests');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  // Sample guest data
  const [guests, setGuests] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      phone: "(415) 555-0123",
      rsvpStatus: "Confirmed",
      statusColor: "green",
      event: "Tech Conference 2025",
      checkIn: true,
      dietary: "Vegetarian",
      plusOnes: 1
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.c@example.com",
      phone: "(212) 555-0187",
      rsvpStatus: "Pending",
      statusColor: "yellow",
      event: "Product Launch",
      checkIn: false,
      dietary: "None",
      plusOnes: 0
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      email: "emma.r@example.com",
      phone: "(305) 555-0145",
      rsvpStatus: "Declined",
      statusColor: "red",
      event: "Tech Conference 2025",
      checkIn: false,
      dietary: "Vegan",
      plusOnes: 0
    },
    {
      id: 4,
      name: "David Kim",
      email: "david.k@example.com",
      phone: "(310) 555-0162",
      rsvpStatus: "Confirmed",
      statusColor: "green",
      event: "Design Workshop",
      checkIn: true,
      dietary: "Gluten-free",
      plusOnes: 2
    },
    {
      id: 5,
      name: "Olivia Martinez",
      email: "olivia.m@example.com",
      phone: "(312) 555-0198",
      rsvpStatus: "Waitlisted",
      statusColor: "blue",
      event: "Tech Conference 2025",
      checkIn: false,
      dietary: "None",
      plusOnes: 0
    }
  ]);

  const [selectedGuest, setSelectedGuest] = useState(guests[0]);

  // Filter guests based on search and active tab
  const filteredGuests = guests.filter(guest => {
    const matchesSearch = guest.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         guest.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === 'All Guests') return matchesSearch;
    return matchesSearch && guest.rsvpStatus === activeTab;
  });

  const handleCheckIn = (guestId) => {
    setGuests(guests.map(guest => 
      guest.id === guestId ? {...guest, checkIn: !guest.checkIn} : guest
    ));
  };

  return (
    <div className="bg-gray-100 w-full py-8 px-4 md:px-8 lg:px-64 h-screen overflow-y-auto">
      <div className="mx-auto max-w-full bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Header Navigation */}
        <div className="flex items-center justify-between px-4 py-4 bg-white border-b">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-full bg-purple-700"></div>
            <span className="font-bold text-gray-800">EventFlow</span>
          </div>
          
          <div className="flex space-x-2 overflow-x-auto">
            <button 
              className={`px-4 py-2 rounded-full text-sm ${activeTab === 'All Guests' ? 'bg-purple-700 text-white' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setActiveTab('All Guests')}
            >
              All Guests
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm ${activeTab === 'Confirmed' ? 'bg-purple-700 text-white' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setActiveTab('Confirmed')}
            >
              Confirmed
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm ${activeTab === 'Pending' ? 'bg-purple-700 text-white' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setActiveTab('Pending')}
            >
              Pending
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm ${activeTab === 'Declined' ? 'bg-purple-700 text-white' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setActiveTab('Declined')}
            >
              Declined
            </button>
          </div>
          
          <div className="h-8 w-8 rounded-full bg-orange-300 flex items-center justify-center text-white">
            <span className="text-xs">GM</span>
          </div>
        </div>
        
        <div className="flex">
          {/* Sidebar */}
          <div className="bg-gray-900 w-12 py-8 flex flex-col items-center space-y-6">
            <div className="h-8 w-8 rounded-full bg-gray-800 border-2 border-purple-800 flex items-center justify-center text-white">
              <Users size={16} />
            </div>
            <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center text-white">
              <List size={16} />
            </div>
            <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center text-white">
              <BarChart2 size={16} />
            </div>
            <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center text-white">
              <Mail size={16} />
            </div>
            <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center text-white">
              <Settings size={16} />
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 bg-white p-4 md:p-6 overflow-y-auto">
            {/* Page Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-bold text-gray-800">Guest Management</h1>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search guests..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
                </div>
                <button 
                  className="px-4 py-2 border border-gray-300 rounded-full text-sm flex items-center"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter size={16} className="mr-2" />
                  Filters
                  <ChevronDown size={16} className="ml-2" />
                </button>
                <button className="px-4 py-2 bg-purple-700 text-white rounded-full text-sm flex items-center">
                  <Download size={16} className="mr-2" />
                  Export
                </button>
              </div>
            </div>
            
            {/* Filters Dropdown */}
            {showFilters && (
              <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Event</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                      <option>All Events</option>
                      <option>Tech Conference 2025</option>
                      <option>Product Launch</option>
                      <option>Design Workshop</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Check-In Status</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                      <option>All</option>
                      <option>Checked In</option>
                      <option>Not Checked In</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Dietary Requirements</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                      <option>All</option>
                      <option>Vegetarian</option>
                      <option>Vegan</option>
                      <option>Gluten-free</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Plus Ones</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                      <option>All</option>
                      <option>With Plus Ones</option>
                      <option>Without Plus Ones</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
            
            {/* Guest List */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Guest
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Event
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      RSVP Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Check-In
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredGuests.map((guest) => (
                    <tr 
                      key={guest.id} 
                      className={`hover:bg-gray-50 cursor-pointer ${selectedGuest?.id === guest.id ? 'bg-purple-50' : ''}`}
                      onClick={() => setSelectedGuest(guest)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                            <User size={20} className="text-purple-700" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{guest.name}</div>
                            <div className="text-sm text-gray-500">{guest.dietary}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{guest.email}</div>
                        <div className="text-sm text-gray-500">{guest.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{guest.event}</div>
                        <div className="text-sm text-gray-500">{guest.plusOnes > 0 ? `+${guest.plusOnes}` : 'No plus ones'}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          guest.statusColor === 'green' ? 'bg-green-100 text-green-800' :
                          guest.statusColor === 'yellow' ? 'bg-amber-100 text-amber-800' :
                          guest.statusColor === 'red' ? 'bg-red-100 text-red-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {guest.rsvpStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCheckIn(guest.id);
                          }}
                          className={`px-3 py-1 rounded-full text-xs flex items-center ${
                            guest.checkIn ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {guest.checkIn ? (
                            <>
                              <Check size={14} className="mr-1" /> Checked In
                            </>
                          ) : (
                            <>
                              <X size={14} className="mr-1" /> Not Checked In
                            </>
                          )}
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-2">
                          <button className="text-purple-600 hover:text-purple-900">
                            <Mail size={16} />
                          </button>
                          <button className="text-purple-600 hover:text-purple-900">
                            <Phone size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Guest Details Panel */}
            {selectedGuest && (
              <div className="mt-6 p-6 border border-gray-200 rounded-lg bg-gray-50">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{selectedGuest.name}</h3>
                    <p className="text-sm text-gray-500">{selectedGuest.event}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    selectedGuest.statusColor === 'green' ? 'bg-green-100 text-green-800' :
                    selectedGuest.statusColor === 'yellow' ? 'bg-amber-100 text-amber-800' :
                    selectedGuest.statusColor === 'red' ? 'bg-red-100 text-red-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {selectedGuest.rsvpStatus}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">CONTACT INFORMATION</h4>
                    <div className="space-y-2">
                      <p className="text-sm flex items-center">
                        <Mail size={14} className="mr-2 text-gray-400" />
                        {selectedGuest.email}
                      </p>
                      <p className="text-sm flex items-center">
                        <Phone size={14} className="mr-2 text-gray-400" />
                        {selectedGuest.phone}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">EVENT DETAILS</h4>
                    <div className="space-y-2">
                      <p className="text-sm">
                        <span className="font-medium">Plus Ones:</span> {selectedGuest.plusOnes}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Dietary:</span> {selectedGuest.dietary}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">ACTIONS</h4>
                    <div className="flex flex-wrap gap-2">
                      <button className="px-4 py-2 bg-purple-700 text-white text-sm rounded-full">
                        Send Reminder
                      </button>
                      <button className="px-4 py-2 border border-purple-700 text-purple-700 text-sm rounded-full">
                        Edit Details
                      </button>
                      <button 
                        className={`px-4 py-2 text-sm rounded-full flex items-center ${
                          selectedGuest.checkIn ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}
                        onClick={() => handleCheckIn(selectedGuest.id)}
                      >
                        {selectedGuest.checkIn ? 'Checked In' : 'Check In'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}