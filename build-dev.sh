#!/bin/bash

docker-compose -f docker-compose.dev.yml up -d --build
docker tag tfclient_client qweliant/tfclient:latest
docker push qweliant/tfclient
kubectl delete service,deployment tfclient
kubectl apply -f kubes.yaml