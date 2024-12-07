import React from 'react';

export const FleetManagementDashboard = () => {
  const [vehicleData, setVehicleData] = React.useState({
    id: 'TRK-2024',
    status: 'STOPPED',
    duration: '00:00:00',
    distance: '0.0'
  });

  return (
    <div style={{ 
      padding: '20px',
      backgroundColor: '#f5f5f5',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Fleet Management</h1>
          <div>Vehicle ID: {vehicleData.id}</div>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '20px'
          }}>
            <h2 style={{ fontSize: '20px' }}>Current Trip Status</h2>
            <button 
              onClick={() => {
                // Handle start trip
                console.log('Starting trip...');
              }}
              style={{
                backgroundColor: '#10B981',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Start Trip
            </button>
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px'
          }}>
            <div style={{ padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
              <div>Duration</div>
              <div style={{ fontSize: '20px', fontFamily: 'monospace' }}>{vehicleData.duration}</div>
            </div>
            <div style={{ padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
              <div>Distance</div>
              <div style={{ fontSize: '20px' }}>{vehicleData.distance} km</div>
            </div>
            <div style={{ padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
              <div>Status</div>
              <div style={{ fontSize: '20px' }}>{vehicleData.status}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};