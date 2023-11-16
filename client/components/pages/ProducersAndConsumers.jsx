import React from 'react';

export function ProducersAndConsumers() {
  return (
    <>
      <h1>Welcome to Producer/Consumers</h1>
      <object
        class='producer-count'
        data='http://localhost:3000/d-solo/de1b793d-167d-400e-8cdf-607ca9b24a0e/producer-count?orgId=1&from=now-24h&to=now&panelId=1'
        width='450'
        height='200'
        frameborder='0'></object>
    </>
  );
}
