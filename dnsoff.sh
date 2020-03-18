#!/bin/bash

if [[ $# -ne 1 ]]; then
  echo "Usage: dnsoff.sh <interface>"
  exit 2
fi
sudo pfctl -F all -f /etc/pf.conf
sudo networksetup -setdnsservers $1 1.1.1.1
