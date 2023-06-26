# WebLoginWizard
Web login wizard project with .NET and Angular.

# WebLoginWizard Back-End
API built with ASP.NET Core that validates email and phone number and generates a 6-digit code which is printed in the console and then verifies it in the server and saves information about user in state.

https://localhost:5001/api/Server - Post request endpoint for validating if email and number provided are in the right format, if they are it sends the 6-digit code(prints it to the console), which can be later used for verification. If they are not in the right format it returns a bad request status code. Saves email, number and code in state.

https://localhost:5001/api/Server/Code/{String} - Post request with a string parameter, which is the generated code. Verifies code with the one that is saved in state and if it is correct it returns a 200 OK, otherwise a bad request status code.

# Angular Front-End - Not completed yet
Interface for WebLoginWizard, simple UI to use API endpoints and create a web-login flow. Still not completed due to configuration issues with sending requests through API(400 error code and not hitting POST endpoints).

# Startup
Start .NET project, which is configured to run on "https://localhost:5001". Start angular project by running "ng serve" or "npm start" command in a terminal/bash/shell within the project folder or in VS Code. Front-end configured to run on "http://localhost:4200/".

