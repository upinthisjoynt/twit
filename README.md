# twit
cnn twitter fun

To install this application you must have the following installed on your machine.

* Nodejs
* Express
* dotEnv - https://www.npmjs.com/package/dotenv
* twitter - https://www.npmjs.com/package/twitter

#DOTENV
This library helps manage the environment variables.  Since I created this feed with my twitter credentials, you will need to setup your twitter credentials in order to make this work.  

## Setup instructions
Create a ".env" file and place it in the "app" folder.  Inside of that file you will need to add the following:

TWIT_CONSUMER_KEY = /* your key goes here */
TWIT_CONSUMER_SECRET = /* your key goes here */
TWIT_ACCESS_TOKEN_KEY = /* your key goes here */
TWIT_ACCESS_TOKEN_SECRET =  /* your key goes here */

You can setup your twitter account (or any account) to have an application account.  At the end of you setting up that account, you will be provided with the information necessary to use the twitter API.

See: https://dev.twitter.com/rest/public

Once you have all of these installed, place the files inside of your node root.

Run the file "site.js" in the node console to start the Web Server
Run the file "app/twit.app.js" in a different node console to start the API server

Navigate to "http://localhost:9000/index.html" and you will see a bunch of CNN feeds being gathere from the API server and managed by the site.
