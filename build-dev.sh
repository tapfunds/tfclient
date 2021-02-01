#!/bin/bash
docker-compose -f docker-compose.dev.yml up -d --build
docker tag tfclient_client qweliant/tfclient:latest