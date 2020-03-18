#!/bin/bash

if [[ $# -ne 1 ]]; then
  echo "Usage: dnson.sh <interface>"
  exit 2
fi
sudo sysctl net.inet.ip.forwarding=1
echo "rdr pass on lo0 proto {tcp,udp} from any to 127.0.0.1 port 53 -> 127.0.0.1 port 5350" | sudo pfctl -Evf -
sudo networksetup -setdnsservers $1 127.0.0.1
