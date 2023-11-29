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
      // console.log(serverUrl);
      return response.json();
      // await prometheusConfigWriter.writeConfig(serverUrl);
    } catch (error) {
      throw new Error('Error updating Kafka service server config: ' + error);
    }
  },
  reloadPrometheusConfig: async () => {
    // Replace with the correct URL if Prometheus is running elsewhere
    // const prometheusReloadUrl = 'http://prometheus:9090/-/reload'; //http reload for prometheus -- only POST or PUT works
    try {
      const response = await fetch('/promReload', { method: 'POST' });
      const data = await response.json();
      // console.log('Response from backend: ', data.message);
    } catch (error) {
      console.log('Error triggering prometheus reload: ' + error);
    }

    // if (response.ok) {
    //   console.log('Prometheus configuration reload triggered successfully.');
    //   return;
    // }
    // } else {
    //   const text = await response.text();
    //   throw new Error(`Failed to reload Prometheus configuration: ${text}`);
    // }
    // try {
    //   const response = await axios.post('http://prometheus:9090/-/reload');
    //   console.log('Prometheus config triggered via axios');
    // } catch {
    //   throw new Error('Failed to reload prometheus config via axios');
    // }
  },
};

// const isValidUrl = urlString => {
//   new URL(urlString).catch(err => 'Error: ', err);
// };

module.exports = KafkaService;
