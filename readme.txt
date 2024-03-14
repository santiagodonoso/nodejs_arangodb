##############################
To install the container:

docker-compose build --no-cache
docker-compose up

##############################
In vscode settings add:

"liveServer.settings.ignoreFiles":[
    "arangodb"
],
"liveServer.settings.wait": 250