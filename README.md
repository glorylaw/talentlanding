## To build the application using docker,use the command below.You can choose to put any name in the app name position
docker build -t appname .

## You then choose a port by running the command below
docker run --rm -p 3000:3000 appname

## Just incase you want to make changes in file and you want those changes to reflect,use the command below.
docker run --rm -p 3000:3000 -v $(pwd)/src/app/src:ro appname

## To stop the server simply do the following
docker ps
 
 ## the above command will show you the list of container running.you then pick one image id...you dont have to copy all the id,just the first 2 or 3 item and run the command below

 docker stop imageid
