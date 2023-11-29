import React from 'react';

export function Topics() {
  return (
    <>
      <h1>Topics & Messages Dashboard</h1>
      <h1>Topic-count iframe</h1>
      <iframe
        src='http://localhost:3001/d-solo/c815566a-1a0f-4bea-a96b-df57bf18c720/docker-dashboard?orgId=1&panelId=6'
        width='450'
        height='200'
        frameborder='0'></iframe>
      <object
        class='topic-count '
        data='http://localhost:3000/d-solo/fcab298e-8a43-4a92-a740-f11d2e992881/topic-count?orgId=1&from=now-24h&to=now&panelId=1'
        width='450'
        height='200'
        frameborder='0'></object>
      <h1>Topic-bytes per sec iframe</h1>
      <iframe
        src='http://localhost:3001/d-solo/c815566a-1a0f-4bea-a96b-df57bf18c720/docker-dashboard?orgId=1&panelId=7'
        width='450'
        height='200'
        frameborder='0'></iframe>
      <object
        class='topic-bytes-per-second'
        data='http://localhost:3000/d-solo/ac38a6a7-19f3-4f3e-920d-65efbafccebb/topic-bytes-in-per-sec?orgId=1&from=now-24h&to=now&panelId=1'
        width='450'
        height='200'
        frameborder='0'></object>
      <h1>Messages in per sec iframe</h1>
      <iframe
        src='http://localhost:3001/d-solo/c815566a-1a0f-4bea-a96b-df57bf18c720/docker-dashboard?orgId=1&panelId=8'
        width='450'
        height='200'
        frameborder='0'></iframe>
      <object
        class='messages-in-per-sec'
        data='http://localhost:3000/d-solo/dd3d2248-cb4f-495f-abe5-331407713c01/message-in-per-sec?orgId=1&from=now-24h&to=now&panelId=1'
        width='450'
        height='200'
        frameborder='0'></object>
    </>
  );
}
