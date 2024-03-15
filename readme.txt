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

##############################
To see the open connections to arangodb, from docker desktop
in the node container, in the exec tab, write this:

grep -v “rem_address” /proc/net/tcp






