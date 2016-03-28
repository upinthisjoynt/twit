(function ($) {

	/**
	 * Handlebars Cache
	 * @type {object}
	 */
	var _HB = Handlebars
	/**
	 * Method for handling feeds
	 * @method    	getMyFeed
	 * @property 	{object} 	myFeed 		jQuery call to get the feed and render the tweets
	 * @property 	{function} _fnUserImg 	Handlebars helper to write an image tag
	 * @returns   	{object}   	Returns an API object
	 * @author 		Addam Driver <mrgift@gmail.com>
	 * @added     	2016-03-27
	 * @version   	1.0
	 * @nameSpace 	getMyFeed
	 * @since     	1.0.0
	 * @example   	<caption>How to get a feed</caption>
	 * getMyFeed("#cnn"); // will return an API with the feed data requested
	 */
	, getMyFeed = function () {

		/**
		 * Method to render tweets
		 * @method    	_fnRenderTweets
		 * @param     	{object}	oData 			oData from the twitter feed
		 * @property 	{object} 	_oTempl 		Template DOM Element
		 * @property 	{string} 	_sHTMLTemplate  HTML String (template)
		 * @property 	{function}	_fnTempl 		Handlebars Compiled template function
		 * @property 	{string} 	_sHtml 			Compiled html template
		 * @returns   	{string}  Returns a compiled template
		 * @author 		Addam Driver <mrgift@gmail.com>
		 * @added     	2016-03-27
		 * @version   	1.0
		 * @memberOf  	getMyFeed
		 * @since     	1.0.0
		 * @example   	<caption>Render the tweets</caption>
		 * _fnRenderTweets({objectdata}); // rendes the compiled data to the CNN feed
		 */
		var _fnRenderTweets = function (oData) {
			
			var _oTempl = $("#cnnFeed")
			, _sHTMLTemplate = _oTempl.html()
			, _fnTempl = _HB.compile(_sHTMLTemplate)
			, _sHtml = _fnTempl(oData)
			;
			
			// replace the template with the new feed data
			return _oTempl.html(_sHtml);
		}
		, myFeed = $.get("http://localhost:3000", _fnRenderTweets)
		/**
		 * Handlebars helper to render image tags
		 * @method    	_fnUserImg
		 * @param     	{string} 	image	URL location for the profile image
		 * @returns   	{string}  Returns an HTML image string
		 * @author 		Addam Driver <mrgift@gmail.com>
		 * @added     	2016-03-27
		 * @version   	1.0
		 * @memberOf  	getMyFeed
		 * @since     	1.0.0
		 * @example   	<caption>Create a user image field</caption>
		 * _fnUserImg("http://..."); returns an image tag with the urls as the src
		 */
		, _fnUserImg = function (image) {
			return "<img align='top' src='" + image + "' />";
		};

		// register the user image helper
		// prevents bad image requests from the template
		_HB.registerHelper('userImg', _fnUserImg);

		return {
			myFeed: myFeed
		};
	}();

	return getMyFeed;
})(jQuery);
