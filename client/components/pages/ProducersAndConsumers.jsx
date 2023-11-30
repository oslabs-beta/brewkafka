import React from 'react';
import Dashboards from '../Dashboards';

export function ProducersAndConsumers() {
  return (
    <>
    <Dashboards/>
      <h1 id="dashboardHeader">Producer & Consumers Dashboard</h1>
      {/* <object
        class='producer-count'
        data='http://localhost:3000/d-solo/de1b793d-167d-400e-8cdf-607ca9b24a0e/producer-count?orgId=1&from=now-24h&to=now&panelId=1'
        width='450'
        height='200'
        frameborder='0'></object>
      <object
        class='producer-request-per-sec'
        data='http://localhost:3000/d-solo/f8a24bef-6703-47c7-aba0-8fbe642972d5/producer-request-per-sec?orgId=1&from=now-24h&to=now&panelId=1'
        width='450'
        height='200'
        frameborder='0'></object>
      <object
        class='number-of-offset'
        data='http://localhost:3000/d-solo/bd89d867-c767-418d-9ccb-43c166028c14/num-of-offset?orgId=1&from=now-24h&to=now&panelId=1'
        width='450'
        height='200'
        frameborder='0'></object> */}
      <h1>Docker iframe producer count:</h1>
      <iframe
        src='http://localhost:3001/d-solo/c815566a-1a0f-4bea-a96b-df57bf18c720/docker-dashboard?orgId=1&panelId=3'
        width='450'
        height='200'
        frameborder='0'></iframe>
      <h1>Docker iframe Producer req per sec:</h1>
      <iframe
        src='http://localhost:3001/d-solo/c815566a-1a0f-4bea-a96b-df57bf18c720/docker-dashboard?orgId=1&panelId=4'
        width='450'
        height='200'
        frameborder='0'></iframe>
      <h1>Number of Offsets:</h1>
      <iframe
        src='http://localhost:3001/d-solo/c815566a-1a0f-4bea-a96b-df57bf18c720/docker-dashboard?orgId=1&panelId=5'
        width='450'
        height='200'
        frameborder='0'></iframe>
    </>
  );
}
