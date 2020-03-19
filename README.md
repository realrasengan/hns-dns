# hns-dns

This script simply helps you set your resolution up if you have hsd running on Mac or Linux (or with Bob) on port 5350.  This sets up a port forward and sets your dns server to 127.0.0.1.
Specifically, in Mac OS X, it uses pfctl and sets up a redirect for port 53 traffic to 5350. On linux, a port 53
redirect is made with iptables.

Please edit the .sh scripts to better work with your existing system before running this script.  However, if you have a default system, this will work just fine!

## Installation
```
git clone https://github.com/realrasengan/hns-dns
cd hns-dns
```

## Usage
Turn on 127.0.0.1 resolution (must have hsd on 5350 or Bob running)
```
node setdns.js on
```
Turn off (set to 1.1.1.1)
```
node setdns.js off
```

## Copyright
Copyright (C) 2020 The Handshake Community

MIT License


