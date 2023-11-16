import React from 'react';

export function Brokers () {
  return (
    <>
      <h1>Brokers Dashboard</h1>
      <iframe src="http://localhost:3000/d-solo/f79e9d99-336c-4e9a-8187-2fe4c1f257fe/active-broker-count?orgId=1&from=1700063951247&to=1700085551247&panelId=1" width="450" height="200" frameborder="0"></iframe>
      <iframe src="http://localhost:3000/d-solo/caf943c8-294d-4744-8582-40d4a652faed/new-dashboard?orgId=1&from=1700046418538&to=1700068018538&panelId=1" width="450" height="200" frameborder="0"></iframe> 
      <iframe src="http://localhost:3000/d-solo/e74a34bc-bc0f-4af6-9c6c-f503eacfa7e4/broker-bytes-in-per-sec?orgId=1&from=1700046534420&to=1700068134420&panelId=1" width="450" height="200" frameborder="0"></iframe>
       </>
  )
}