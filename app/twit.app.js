/**
 * Express Web for the app
 * @name express
 * @type {function}
 */
var express = require('express')
/**
 * Cache of the express method
 * @name app
 * @type {function}
 */
, app = express()
/**
 * Manager for the node.js environment variables
 * @name dotenv
 * @type {function}
 */
, dotenv = require('dotenv').config()
/**
 * Twitter Module for managing the twitter API
 * @name twit
 * @type {function}
 */
, twit = require('twitter')
/**
 * Twitter client api
 * @name client
 * @type {object}
 */
, client = new twit({
	consumer_key: process.env.TWIT_CONSUMER_KEY
  	, consumer_secret: process.env.TWIT_CONSUMER_SECRET
  	, access_token_key: process.env.TWIT_ACCESS_TOKEN_KEY
  	, access_token_secret: process.env.TWIT_ACCESS_TOKEN_SECRET
})
/**
 * Hodler for twitter feed
 * @name oTweets
 * @type {object}
 */
, oTweets
/**
 * Method to manage the tweets [EVENT]
 * @method    	fnManageTweets
 * @param     	{object} 	err 	Contains error message data
 * @param     	{object}  tweets  Retrieved tweets
 * @returns   	{object}  Returns tweets
 * @author 		Addam Driver <mrgift@gmail.com>
 * @added     	2016-03-27
 * @version   	1.0
 * @since     	1.0.0
 */
, fnManageTweets = function (err, tweets) {
	return oTweets = tweets;
}
/**
 * Method to that wll set the cross domain data
 * @method    	allowCrossDomain
 * @param     	{object} 		req 	Request object
 * @param     	{object}  	res     Response object
 * @param     	{Function}  	next  	Next Method to run
 * @returns   	{void}        
 * @author 		Addam Driver <mrgift@gmail.com>
 * @added     	2016-03-27
 * @version   	1.0
 * @since     	1.0.0
 */
, allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    next();
}
/**
 * Configuration Query for twitter API
 * @type {Object}
 */
, _config = {
	q: '#cnn'
}
;

// set the CORS for the REST API
app.use(allowCrossDomain);

// get the tweets from the driver wedding
client.get('search/tweets.json', _config, fnManageTweets);

// capture the requests coming in
app.get('/', function(req, res){ 
	res.send(oTweets); 
}); 

// start the app on port 3000
app.listen(3000);