# BrewKafka

<img src='./client/assets/brewkafka_logo_original.png' width='80%' alt='BrewKafka logo'>

# Setup

### This app assumes the user has:
- a standalone kafka broker
- their own Kafka Server
- “jmx_prometheus_javaagent-0.19.0.jar” in “libs” folder
- a specific "kafka_broker.yml" file in "config" folder

### To add your Kafka server:
1. Wait about 10s for grafana to load, then set your url, otherwise it may crash and stop
    - In the event of a crash, just go to docker and turn on grafana again via GUI

2. Track your metrics via opts
    - Use this line in your server-start.sh file, before ```exec`````` cmd
    ``` js
    export KAFKA_OPTS="$KAFKA_OPTS -javaagent:../libs/jmx_prometheus_javaagent-0.19.0.jar=7071:../config/kafka_broker.yml"
    ```
    This sets your Kafka JMX port to 7071 for prometheus to scrape metrics

### Ports to which we are exposing docker containers (Ports to keep open):
- 8080 for BrewKafka
- 9090 for Prometheus
- 3001 for Grafana

*If user is hosting their Kafka server locally, use* ```host.docker.internal:[port]```.</br>
```Localhost:[port]``` *does not work*.


# Developed using

![HTML](https://img.shields.io/badge/HTML-orange?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-blue?style=for-the-badge&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-gray?style=for-the-badge&logo=javascript)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![React](https://img.shields.io/badge/React-blue?style=for-the-badge&logo=reac&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-black?style=for-the-badge&logo=reactrouter)
![Express](https://img.shields.io/badge/express-beige?style=for-the-badge&logo=express&logoColor=black)
![Prometheus](https://img.shields.io/badge/prometheus-black?style=for-the-badge&logo=prometheus)
![Grafana](https://img.shields.io/badge/grafana-yellow?style=for-the-badge&logo=grafana)
![Kafka](https://img.shields.io/badge/kafka-hotpink?style=for-the-badge&logo=apachekafka)
![Docker](https://img.shields.io/badge/docker-blue?style=for-the-badge&logo=docker&logoColor=white)
![NodeJS](https://img.shields.io/badge/NodeJS-darkblue?style=for-the-badge&logo=nodedotjs&logoColor=#339933)

# Made by

- Nick Dabreau [Github](https://github.com/nick-dab) | [LinkedIn](https://www.linkedIn.com/in/nickdabreau)
- Robert Forrester [Github](https://github.com/Canarsie) | [LinkedIn](https://www.linkedin.com/in/brobertforrester)
- Andrew Lo [Github](https://github.com/lomeintheory) | [LinkedIn](https://www.linkedin.com/in/andrew--lo/)
- Helen Ta [Github](https://github.com/Helen-Ta) | [LinkedIn](https://www.linkedin.com/in/helen-ta)
- Jordan Woods [Github](https://github.com/ejwoods) | [LinkedIn](https://www.linkedin.com/in/jordanwoods277/)
