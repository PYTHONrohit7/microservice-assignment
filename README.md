# Bookstore Microservices Assignment

## Description
This project demonstrates a microservices architecture using two Ubuntu virtual machines in VirtualBox.

- VM1: Frontend service (Express + Axios)
- VM2: Backend service (Express API)

## Networking
- NAT for internet access
- Host-only adapter for VM-to-VM communication

## How to Run
1. Start backend on VM2:
   node index.js

2. Start frontend on VM1:
   node index.js

3. Open browser:
   http://192.168.56.10:8080
