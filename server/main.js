var path = require('path');
var express = require('express');
var browserify = require('browserify-middleware');
var bodyParser = require('body-parser');
var history = require('connect-history-api-fallback');

const routes = require('./routes');

const app = express();
const port = process.env.PORT || 4040;

////////////////// Passport //////////////////
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());


// Load Routes
routes(app);

app.use(history());
app.use(express.static(path.join(__dirname, "../client/public")));

app.get('/app-bundle.js',
  browserify(path.join(__dirname, '../client/main.js'), {
     transform: [ [ require('babelify'), { presets: ["es2015", "react"] } ] ]
   })
);

app.listen(port, () => {
  console.log("Server is listening on port " + port) 
})

<<<<<<< d6506b82a589230f8c3efdb570c12a575049b324
<<<<<<< a6e8ed28e24fb70fb8f0486ae0b888bc9033225f
=======
////////// Passport eh?///////////////
require('./passport')(passport);

// Redirect the user to the OAuth provider for authentication.  When
// complete, the provider will redirect the user back to the application at
//     /auth/provider/callback
<<<<<<< a4b10eecece38b096ac36f7728c2da3130401945
=======

>>>>>>> trying new implemenetation of local
app.get('/auth/facebook', passport.authenticate('facebook'));

// The OAuth provider has redirected the user back to the application.
// Finish the authentication process by attempting to obtain an access
// token.  If authorization was granted, the user will be logged in.
// Otherwise, authentication has failed.
<<<<<<< a4b10eecece38b096ac36f7728c2da3130401945
<<<<<<< 9a4699796b34b970042a3a6a2af9458e7762ad07
<<<<<<< 5158a1e0936f0265d3d1e04fc8cd79579b3f7ad9
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/' }));
<<<<<<< f47bec5a9c0d9848fd62ac16b0ef306e3026c367
>>>>>>> working in passport.js
=======
=======
app.get('/auth/provider/callback',
  passport.authenticate('provider', { successRedirect: '/',
=======
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
>>>>>>> merging
=======

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
>>>>>>> trying new implemenetation of local
                                      failureRedirect: '/' }));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',)})
=======

>>>>>>> major retoolings, basic fbook and local passport created, basic code cleanup, moving onto testing and implementation







<<<<<<< a4b10eecece38b096ac36f7728c2da3130401945







>>>>>>> attempting to implemet with shane
>>>>>>> attempting to implemet with shane
=======
>>>>>>> trying new implemenetation of local
