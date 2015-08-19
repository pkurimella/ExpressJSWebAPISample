# ExpressJSWebAPISample
Sample Node Web API Application using ExpressJS and JWT (JSON Web Token) for auth. This app could be used as a boiler plate to add a NodeJS based API to your existing applications. The app has an authenticate route through which you could return a token upon succesfull authentication. This token has to be passed for all subsequent calls /routes for which authorization is required. We verify the validity of the token using a middleware function (tokenChecker).


####Routes
1. Authenticate - Generates a Token with some test info
2. Authenticate with User Info - Generates a Token with info passed through parameters
3. API Routes - Decode the token info and return it



