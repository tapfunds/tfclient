#!/bin/bash
yarn run build
docker-compose -f docker-compose.dev.yml up -d --build
kubectl apply -f kubes.yaml