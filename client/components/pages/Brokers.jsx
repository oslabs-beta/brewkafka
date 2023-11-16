import React from 'react';

export function Brokers() {
  return (
    <>
      <h1>Welcome to Brokers</h1>
      <object
        data='http://localhost:3000/d-solo/f79e9d99-336c-4e9a-8187-2fe4c1f257fe/active-broker-count?orgId=1&from=now-24h&to=now&panelId=1'
        width='450'
        height='200'
        frameborder='0'></object>
      <object
        data='http://localhost:3000/d-solo/caf943c8-294d-4744-8582-40d4a652faed/new-dashboard?orgId=1&from=now-24h&to=now&panelId=1'
        width='450'
        height='200'
        frameborder='0'></object>
      <object
        data='http://localhost:3000/d-solo/e74a34bc-bc0f-4af6-9c6c-f503eacfa7e4/broker-bytes-in-per-sec?orgId=1&from=now-24h&to=now&panelId=1'
        width='450'
        height='200'
        frameborder='0'></object>
    </>
  );
}
