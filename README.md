# Send DHT11 sensor data to the IOTA Tangle using MAM

This is a tutorial how to send DHT11 sensor data using Raspberry Pi 3 to IOTA Tangle using Masked Authenticated Messaging (MAM).

## Requirements

All hardware requirements and how the Raspberry Pi is prepared is explained at:  
[https://www.mobilefish.com/developer/iota/iota_quickguide_raspi_mam.html][1]

[1]: https://www.mobilefish.com/developer/iota/iota_quickguide_raspi_mam.html "Mobilefish.com"
[2]: https://youtu.be/atJ-ZT7aKoA "YouTube video"

![alt text](https://www.mobilefish.com/images/developer/raspi_dht11.jpg "DHT11 sensor connected to Raspberry Pi 3")

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

How to use the scripts see:  
[https://www.mobilefish.com/developer/iota/iota_quickguide_raspi_mam.html][1]

or watch this YouTube video:
[https://youtu.be/atJ-ZT7aKoA][2]

