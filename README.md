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
-frontend client registration (POST)
-SSE event routing to clients (GET)

Frontend:
svelte sveltekit

Prerequisites
-npm or yarn
-sveltekit

How to Run:
- clone this repository
- npm install
- npm run dev
- clone sveltekit-starter and run locally, ensure .env file backend_url=http://localhost:5000


**Diagram**
![Inter-project Communications-sveltekit-starter focus drawio](https://github.com/user-attachments/assets/f4a55bda-1e08-41ac-a7bd-c3a863fd96ed)


