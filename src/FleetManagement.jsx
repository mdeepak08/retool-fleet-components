import React from 'react';
import * as Retool from '@tryretool/custom-component';

export const FleetManagement = () => {
  const [currentTrip, setCurrentTrip] = Retool.useStateObject({
    name: "currentTrip",
    initialValue: {
      duration: '00:00:00',
      distance: '0.0',
      status: 'STOPPED'
    },
    label: "Current Trip Data"
  });

  const [vehicleId] = Retool.useStateString({
    name: "vehicleId",
    initialValue: "TRK-2024",
    label: "Vehicle ID"
  });

  const startTrip = Retool.useEventCallback({ 
    name: "startTrip" 
  });

  return (
    <div className="p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Fleet Management</h1>
          <div className="text-gray-600">Vehicle ID: {vehicleId}</div>
        </div>

        {/* Current Trip Status */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Current Trip Status</h2>
            <button 
              onClick={startTrip}
              className="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600"
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
      </div>
    </div>
  );
};