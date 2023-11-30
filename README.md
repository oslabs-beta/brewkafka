# BrewKafka

<img src='./client/assets/logo.png' alt='BrewKafka logo'>

# Setup

Requirements:
### This app assumes the user has:
- a standalone kafka broker
- their own Kafka Server
- “jmx_prometheus_javaagent-0.19.0.jar” in “libs” folder
- a specific "kafka_broker.yml" file in "config" folder


1. Wait about 10s for grafana to load, then set your url, otherwise it may crash and stop
    - In the event of a crash, just go to docker and turn on grafana again via GUI

2. Track your metrics via opts
    - Use this line in your server-start.sh file, before ```exec`````` cmd
    ``` js
    export KAFKA_OPTS="$KAFKA_OPTS -javaagent:../libs/jmx_prometheus_javaagent-0.19.0.jar=7071:../config/kafka_broker.yml"
    ```
    This sets your Kafka JMX port to 7071 for prometheus to scrape metrics

### Ports we are exposing docker containers to (Ports to keep open):
- 8080 for BrewKafka
- 9090 for Prometheus
- 3001 for Grafana

*If user is hosting their Kafka server locally, use* ```host.docker.internal:[port]```. ```Localhost:[port]``` does not work.


# Developed using

![JavaScript]https://img.shields.io/badge/JavaScript-gray?style=for-the-badge&logo=javascript
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![React]https://img.shields.io/badge/React-blue?style=for-the-badge&logo=react

# Made by

- Nick Dabreau [Github](https://github.com/nick-dab) | [LinkedIn](www.linkedin.com/in/brobertforrester)
- Robert Forrester [Github](https://github.com/Canarsie) | [LinkedIn]()
- Andrew Lo [Github](https://github.com/lomeintheory) | [LinkedIn](https://www.linkedin.com/in/andrew--lo/)
- Helen Ta [Github](https://github.com/Helen-Ta) | [LinkedIn](www.linkedin.com/in/helen-ta)
- Jordan Woods [Github](https://github.com/ejwoods) | [LinkedIn](https://www.linkedin.com/in/jordanwoods277/)