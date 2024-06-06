# NoHeatStroke -- Microprocesors Project

This is the server to handle data sent from [NoHeatStroke-ESP32](https://github.com/jerapiblaze/NoHeatStroke-ESP32), then provides a web interface as well as an REST API service allow users to read sensor data.

## Setup

This server can be deployed traditionally or with Docker (`dockerfile` included).

You will need to create your own `.env` file to config the server.

The `.env` file should look like below:
```.env
SERVER_PORT=
SERVER_SECRET=
DB_DATABASE=
DB_DIALECT=
DB_PATH=
DB_LOGGING=
DB_OVR=
DB_HOST= 
DB_USER=
DB_PASSWORD=
```

## Usage

**\[Note\]** `did` is `device_id` and `n` is number of latest records to display.

- Web interface is available at root path: `SERVER_ADDRESS/?did={did}&n={n}` 

- API is available at `SERVER_ADDRESS/api/v1/sensor0`
    - GET: `SERVER_ADDRESS/api/v1/sensor0/?did={did}&n={n}`
    - POST: `SERVER_ADDRESS/api/v1/sensor0` (accepts `appication/json`)