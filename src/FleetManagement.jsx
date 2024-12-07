import React from 'react';

const FleetManagement = () => {
  const [currentTrip, setCurrentTrip] = React.useState({
    duration: '00:00:00',
    distance: '0.0',
    status: 'STOPPED'
  });

  const recentTrips = [
    {
      date: '2024-03-04',
      duration: '02:30:00',
      distance: '45.2',
      status: 'Completed'
    },
    {
      date: '2024-03-03',
      duration: '01:45:30',
      distance: '32.8',
      status: 'Completed'
    },
    {
      date: '2024-03-02',
      duration: '03:15:00',
      distance: '58.6',
      status: 'Completed'
    }
  ];

  return (
    <div className="p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Fleet Management</h1>
          <div className="text-gray-600">Vehicle ID: TRK-2024</div>
        </div>

        {/* Current Trip Status */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Current Trip Status</h2>
            <button 
              className="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600"
              onClick={() => alert('Starting trip...')}
            >
              Start Trip
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-gray-600 mb-2">Duration</div>
              <div className="text-2xl font-mono">{currentTrip.duration}</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-gray-600 mb-2">Distance</div>
              <div className="text-2xl">{currentTrip.distance} km</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-gray-600 mb-2">Status</div>
              <div className="text-2xl">{currentTrip.status}</div>
            </div>
          </div>
        </div>

        {/* Recent Trips */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6">Recent Trips</h2>
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Duration</th>
                <th className="text-left py-3 px-4">Distance</th>
                <th className="text-left py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentTrips.map((trip, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-4">{trip.date}</td>
                  <td className="py-3 px-4">{trip.duration}</td>
                  <td className="py-3 px-4">{trip.distance} km</td>
                  <td className="py-3 px-4">{trip.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FleetManagement;