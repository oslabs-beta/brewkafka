import React from 'react';

export function Topics () {
  return (
    <>
      <h1>Topics & Messages Dashboard</h1>
      <iframe src="http://localhost:3000/d-solo/fcab298e-8a43-4a92-a740-f11d2e992881/topic-count?orgId=1&from=1700059694365&to=1700081294365&panelId=1" width="450" height="200" frameborder="0"></iframe>
      <iframe src="http://localhost:3000/d-solo/ac38a6a7-19f3-4f3e-920d-65efbafccebb/topic-bytes-in-per-sec?orgId=1&from=1700059820015&to=1700081420015&panelId=1" width="450" height="200" frameborder="0"></iframe>
      <iframe src="http://localhost:3000/d-solo/dd3d2248-cb4f-495f-abe5-331407713c01/message-in-per-sec?orgId=1&from=1700060955112&to=1700082555112&panelId=1" width="450" height="200" frameborder="0"></iframe>
    </>
  )
}