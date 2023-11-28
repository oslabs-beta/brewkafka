const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// const prometheusConfigFilePath = path.join(__dirname, '../prometheus.yml');
console.log('DIRNAME:' + __dirname);
console.log('---------------------------');
const prometheusConfigFilePath = path.join(__dirname, '../prometheus.yml');

const prometheusConfigWriter = {
  writeConfig: async serverUrl => {
    try {
      console.log('server url: ', serverUrl);
      const currentConfig = yaml.load(
        fs.readFileSync(prometheusConfigFilePath, 'utf8'),
      );
      if (currentConfig && Array.isArray(currentConfig.scrape_configs)) {
        currentConfig.scrape_configs.forEach(config => {
          if (
            config.job_name === 'kafka' &&
            Array.isArray(config.static_configs) &&
            config.static_configs.length > 0
          ) {
            config.static_configs[0].targets = [serverUrl];
          }
        });
        fs.writeFileSync(
          prometheusConfigFilePath,
          yaml.dump(currentConfig),
          'utf8',
        );
      } else {
        throw new Error('Invalid Prometheus config format.');
      }
    } catch (error) {
      throw new Error('Error writing config: ' + error);
    }

    // const targetFile = path.join(targetsDirectory, 'kafka_targets.yml');
    // // load existing config
    // let currentConfig = [];
    // if (fs.existsSync(targetFile)) {
    //   // currentConfig = JSON.parse(fs.readFileSync(targetFile));
    //   currentConfig = yaml.load(fs.readFileSync(targetFile, 'utf8')) || [];
    // }

    // // add new target
    // currentConfig.push(targetConfig);

    // // Save updated config back to the file
    // // convert the js obj to yaml str
    // const yamlStr = yaml.dump(currentConfig);
    // fs.writeFileSync(targetFile, yamlStr, 'utf8');
    // // fs.writeFileSync(targetFile, JSON.stringify(currentConfig, null, 2));
  },
};

module.exports = prometheusConfigWriter;
