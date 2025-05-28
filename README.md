# sveltekit-starter - ED-Web branch

A sveltekit frontend meant to act as an edge device that is subscribed to events in the input
interface through messages forwarded by the ED-Server. 
This branch is part of a proof of concept implementation that shows inter-project communication.
This project serves as a backend server in a 4-part communication line. It contains local config files
that determines the topics it will be subscribed to.

Inter-project communication POC
frontend edge device: https://github.com/tristan1672/sveltekit-starter/tree/ED-Web - running locally

backend conduit server: https://github.com/tristan1672/PERN-Docker-Project/tree/ED-Server - ran on docker

rabbit mq - ran on docker

event input interface: https://github.com/tristan1672/threejs_starter/tree/ED-Input - ran locally

Description:
*Branch specific
-frontend client registration (POST)
-SSE event routing to clients (GET)
-client management
-consumer management, queue construction and client mapping to queue

Database:
PostgreSQL

Backend:
Express + Node

Frontend:![Inter-project Communications-Simple drawio](https://github.com/user-attachments/assets/82e013b3-6a4f-486c-a3a9-ea063ae41910)

React

Prerequisites
-Node.js
-npm or yarn
-PostgreSQL
-Docker

How to Run:
- clone this repository
- npm install or yarn install in /backend and /frontend directories
- npm run build in folders /backend and /frontend
- Run Docker desktop
- in the source directory /pern, run docker compose up --build

  *Branch Specific
- Ensure rabbitMQ is running on docker. install rabbitmq and run with docker run -d --hostname rabbitmq --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
- Since runnning on docker, check ipconfg in cmd for public address
- Populate amqp.connect("amqp:<your public address>:5672"); ensure formatting, example: "amqp://192.168.6.122:5672"
- Ensure backend connects to rabbitMQ
- clone sveltekit-starter and run locally, ensure .env file backend_url=http://<your public address>:5000 as this current project is ran on docker



**Diagram**
![Inter-project Communications-sveltekit-starter focus drawio](https://github.com/user-attachments/assets/f4a55bda-1e08-41ac-a7bd-c3a863fd96ed)


