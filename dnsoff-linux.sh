#!/bin/bash

echo 0 | sudo tee /proc/sys/net/ipv4/ip_forward
sudo echo nameserver 1.1.1.1 > /etc/resolv.conf
iptables -t nat -D OUTPUT -p tcp -o lo --dport 53 -j REDIRECT --to-ports 5350
iptables -t nat -D OUTPUT -p udp -o lo --dport 53 -j REDIRECT --to-ports 5350

