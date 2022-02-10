# node-arg
Node application takes APP_ID &amp; PORT as environment varibales

Docker image located at https://hub.docker.com/repository/docker/trbaks/node-env

This is simple NodeJs image which take PORT and APPLICATION_ID as input through environment variables.

For example in the command below: docker run -d --name node-env-feb-2022 --env PORT=3070 --env APP_ID="Amit" -p 3070:3070 trbaks/node-env:1

On your browser or curl commands below paths are supported:

Path1: / Displays Application ID::APP_ID:: is listening on port::PORT (Application ID and PORT you passed) 
Path2: /time Displays current time. 
Path3: /healthcheck Displays the message Application is running fine! Healthceheck successful

Purpose: A small image to be deployed as container for testing purpose either on local machine or ECS/EKS
