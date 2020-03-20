# hns-dns
# I don't recommend this since your hsd node is likely your wallet.  Best to keep DNS resolution and your wallet separated.
## Use [HoldMyHand](https://github.com/realrasengan/holdmyhand) Instead!

This script simply helps you set your resolution up if you have hsd running on Mac or Linux (or with Bob) on port 5350.  This sets up a port forward and sets your dns server to 127.0.0.1.
Specifically, in Mac OS X, it uses pfctl and sets up a redirect for port 53 traffic to 5350. On linux, a port 53
redirect is made with iptables.

Please edit the .sh scripts to better work with your existing system before running this script.  However, if you have a default system, this will work just fine!

## Message to windows users:
I don't use windows nor do I know how.  However, this is probably how you would do this on Windows:
```
netsh interface portproxy add v4tov4 listenaddress=127.0.0.1 listenport=53 connectaddress=127.0.0.1 connectport=5350 protocol=tcp
netsh interface portproxy add v4tov4 listenaddress=127.0.0.1 listenport=53 connectaddress=127.0.0.1 connectport=5350 protocol=udp
```
You should be able to run that in a CMD with administrative rights.  If this is confirmed working, I'll put it in the script!

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


