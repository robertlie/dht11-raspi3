# Send DHT11 sensor data to the IOTA Tangle

This is a tutorial how to send DHT11 sensor data using Raspberry Pi 3 to IOTA Tangle using Masked Authenticated Messaging (MAM).

## Requirements

How the Raspberry Pi is prepared and how to connect the DHT11 sensor to the Raspberry Pi is explained at:
[link][1]

[1]: https://www.mobilefish.com/developer/iota/iota_quickguide_raspi_mam.html "Mobilefish.com"

## Features

The project consists of 4 main files and should be executed on the Raspberry Pi.
- mam_publish.js: Publishes randomly generated numbers to the Tangle using MAM.
- mam_receive.js: Extract the stored data from the Tangle using MAM and display the data.
- sensor.js: The DHT11 sensor data (temperature and humidity) is read and displayed.
- mam_sensor.js: The DHT11 sensor data is read and published to the Tangle using MAM.

## Installation

```
npm install
```

## Usage

1. Start with mam_publish.js, type **node mam_publish.js** and open another terminal and type **node mam_receive.js <root>**
2. Next check if the DHT11 sensor data can be read, type **node sensor.js**
3. Last publish DHT11 sensor data on the Tangle, type **node mam_sensor.js** and open another terminal and type **node mam_receive.js <root>**

If you encounter problems reading the DHT11 sensor data and wants more logging:
Type: **npm uninstall node-dht-sensor**
Type: **npm install node-dht-sensor --dht_verbose=true**

After you have fixed your problem:
Type: **npm uninstall node-dht-sensor**
Type: **npm install node-dht-sensor --dht_verbose=false**
