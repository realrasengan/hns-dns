#!/bin/bash

echo 1 | sudo tee /proc/sys/net/ipv4/ip_forward
sudo echo nameserver 127.0.0.1 > /etc/resolv.conf
iptables -t nat -I OUTPUT -p tcp -o lo --dport 53 -j REDIRECT --to-ports 5350
iptables -t nat -I OUTPUT -p udp -o lo --dport 53 -j REDIRECT --to-ports 5350

