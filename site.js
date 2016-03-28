var express = require('express')
, app = express()
, slug
, jsLoc = express.static('js')
, cssLoc = express.static('css')
, imgLoc = express.static('images')
;

app.get('/:slug', function(req, res) {
	slug = [req.params.slug][0];
    res.sendfile(slug);
});

// route for js/css/images files
app.use('/js', jsLoc);
app.use('/css', cssLoc);
app.use('/images', imgLoc);

app.listen(9000);