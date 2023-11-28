const KafkaService = {
  addKafkaServer: async serverUrl => {
    // check to make sure url is passed

    try {
      const response = await fetch('/config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ serverUrl }),
      });
      console.log(serverUrl);
      // await prometheusConfigWriter.writeConfig(serverUrl);
    } catch (error) {
      throw new Error('Error updating Kafka service server config: ' + error);
    }
    return response.json();
  },
  reloadPrometheusConfig: async () => {
    // Replace with the correct URL if Prometheus is running elsewhere
    const prometheusReloadUrl = 'http://localhost:9090/-/reload'; //http reload for prometheus -- only POST or PUT works
    const response = await fetch(prometheusReloadUrl, { method: 'POST' });

    if (response.ok) {
      console.log('Prometheus configuration reload triggered successfully.');
      return;
    } else {
      const text = await response.text();
      throw new Error(`Failed to reload Prometheus configuration: ${text}`);
    }
  },
};

// const isValidUrl = urlString => {
//   new URL(urlString).catch(err => 'Error: ', err);
// };

module.exports = KafkaService;
