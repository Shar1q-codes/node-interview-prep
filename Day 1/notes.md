1. What is NPM?
   A. NPM stands for the node package manager, npm is used for node dependency management. Most of the time, we use npm as a server-side node dependency tool.
   NPM gets installed with NodeJs installation.
   NPM uses nested dependencies, so we can use different versions of any module in our code.
   Nested dependencies mean that any dependency is again dependent on another dependency
   npm: It is a package manager for the JavaScript programming language.
   It is the default package manager for the JavaScript runtime environment Node.js.
   Help to manage a project’s dependencies.
   npm is installed with Node automatically.
   npm: NPM generates a ‘package-lock.json’ file. the package-lock will generate the same node_modules folder for different npm versions.

2. What are the modules in Node.js?
   A. In Node.js, Modules are the blocks of encapsulated code that communicates with an external application on the basis of their related functionality.
   Modules can be a single file or a collection of multiples files/folders.
   The reason programmers are heavily reliant on modules is because of their re-usability as well as the ability to break down a complex piece of code into manageable chunks.
   Modules are of three types:

Core Modules/Internal modules local Modules/Custom modules Third-party Modules

Core Modules: Node.js has many built-in modules that are part of the platform and comes with Node.js installation. These modules can be loaded into the program by using the require function.
The require() function will return a JavaScript type depending on what the particular module returns. ex:- http creates an HTTP server in Node.js.
Local Modules: Unlike built-in and external modules, local modules are created locally in your Node.js application. Let’s create a simple calculating module that calculates various operations. Another file can use its exported functionality using the require() function.

Third-party modules: Third-party modules are modules that are available online using the Node Package Manager(NPM). These modules can be installed in the project folder or globally. Some of the popular third-party modules are mongoose, express, angular, and react.

Example:

npm install express

3. What is the purpose of the module.exports?
   A. Module.exports are the instruction that tells Node. js which bits of code (functions, objects, strings, etc.) to “export” from a given file so other files are allowed to access the exported code.
   The module.exports is actually a property of the module object in node.js. module. Exports is the object that is returned to the require() call. By module.exports, we can export functions, objects, and their references from one file and can use them in other files by importing them by require() method.
   easy to maintain and manage the code base in different modules.

4. Difference between default export and named export
   A. export objects, functions, variables from the module so they can be used by other programs with the help of the import statements. There are two types of exports. One is Named Exports and other is Default Exports.
   Named Exports: Named exports are useful to export several values. During the import, it is mandatory to use the same name of the corresponding object.

Named Exports:- Named exports allow us to share multiple objects, functions or variables from a single file and were introduced with the release of ES2015.
Named exports are imported with curly braces in various files and must be imported using the name of the object, function or variable that was exported.
-> Exporting individual features export var name1 = …, name2 = …, …, nameN; // also let, const

-> Export list export { name1, name2, …, nameN };

-> Exporting everything at once export { object, number, x, y, boolean, string }

-> Renaming exports export { variable1 as name1, variable2 as name2, …, nameN };

-> export features declared earlier export { myFunction, myVariable };

Default Exports: Default exports are useful to export only a single object, function, variable. During the import, we can use any name to import.

Exports without a default tag are Named exports. Exports with the default tag are Default exports.

default export:- Using Named and Default Exports at the same time: It is possible to use Named and Default exports in the same file. It means both will be imported in the same file. Example: javascript.

-> file module.js var x=4; export default x;

-> test.js while importing x in test.js import y from './module'; note that y is used import x instead of // import x, because x was default export console.log(y);
output will be 4

5. How do you import any module in Node.js
   A. Importing functions or modules enhances the reusability of code.

Importing a Module: We need to import the module to use the functions defined in the imported module in another file. The result returned by require() is stored in a variable which is used to invoke the functions using the dot notation.

const f = require('./func')

6. What are the different types of HTTP requests?
   A. HTTP (Hypertext Transfer Protocol) specifies a collection of request methods to specify what action is to be performed on a particular resource. The most commonly used HTTP request methods are GET, POST, PUT, PATCH, and DELETE. These are equivalent to the CRUD operations (create, read, update, and delete).
   GET: GET request is used to read/retrieve data from a web server. GET returns an HTTP status code of 200 (OK) if the data is successfully retrieved from the server.

POST: POST request is used to send data (file, form data, etc.) to the server. On successful creation, it returns an HTTP status code of 201.

PUT: A PUT request is used to modify the data on the server. It replaces the entire content at a particular location with data that is passed in the body payload. If there are no resources that match the request, it will generate one.

PATCH: PATCH is similar to PUT request, but the only difference is, it modifies a part of the data. It will only replace the content that you want to update.

DELETE: A DELETE request is used to delete the data on the server at a specified location.

7. Explain the concept of middleware in Node.js.
   A. Express.js is a routing and Middleware framework for handling the different routing of the webpage and it works between the request and response cycle.

Middleware gets executed after the server receives the request and before the controller actions send the response.

Middleware has the access to the request object, responses object, and next, it can process the request before the server send a response. An Express-based application is a series of middleware function calls.

Middleware Chaining: Middleware can be chained from one to another, Hence creating a chain of functions that are executed in order. The last function sends the response back to the browser. So, before sending the response back to the browser the different middleware process the request.

The next() function in the express is responsible for calling the next middleware function if there is one.

app.get(path, (req, res, next) => {}, (req, res) => {})

8. Explain CORS
   A. CORS (Cross-Origin Resource Sharing) is a mechanism by which data or any other resource of a site could be shared intentionally to a third party website when there is a need. Generally, access to resources that are residing in a third party site is restricted by the browser clients for security purposes.

function httpGetAction(urlLink) { var xmlHttp = new XMLHttpRequest(); xmlHttp.open( "GET", urlLink, false ); xmlHttp.send(); return xmlHttp.responseText; }

npm i CORS

9. What is Express. how it helps you to create a backend application
   A. Express.js: Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middle ware and routing. It adds helpful utilities to Node.js’s HTTP objects. It facilitates the rendering of dynamic HTTP objects.

More features than Node.js

It is used to build web-apps using approaches and principles of Node.js.

Routing is provided.

It requires less coding time.

Uses middleware for the arrangement of functions systematically server-side.

import by const express = require ("express")

Explain min 5 status codes gets used in Backend development
An HTTP status code is a message a website's server sends to the browser to indicate whether or not that request can be fulfilled. Status codes specs are set by the W3C. Status codes are embedded in the HTTP header of a page to tell the browser the result of its request.
102 PROCESSING Processing 200 OK OK 400 BAD_REQUEST Bad Request 401 UNAUTHORIZED Unauthorized 402 PAYMENT_REQUIRED Payment Required 403 FORBIDDEN Forbidden 404 NOT_FOUND Not Found 500 INTERNAL_SERVER_ERROR Internal Server Error 503 - Service Unavailable

10. What is node.js ?
    A. Node.js: Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. You need to remember that NodeJS is not a framework and it’s not a programming language. Most of the people are confused and understand it’s a framework or a programming language. We often use Node.js for building back-end services like APIs like Web App or Mobile App. It’s used in production by large companies such as Paypal, Uber, Netflix, Walmart and so on.

Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript.

It is used to build server-side, input-output, event-driven apps.

It is built on Google’s V8 engine.

C, C++, JavaScript can be used

Run-time platform or environment designed for server-side execution of JavaScript.

Routing is not provided.

No Middleware

11. Difference between HTTP and HTTPS
    A. HTTPS stands for Hyper Text Transfer Protocol Secure. It is highly advanced and secure version of HTTP. It uses the port no. 443 for Data Communication.

HTTP also allows you to create a secure encrypted connection between the server and the browser. It offers the bi-directional security of Data.

HTTP lacks security mechanism to encrypt the data whereas HTTPS provides SSL or TLS Digital Certificate to secure the communication between server and client. HTTP operates at Application Layer whereas HTTPS operates at Transport Layer. HTTP by default operates on port 80 whereas HTTPS by default operates on port 443. HTTP transfers data in plain text while HTTPS transfers data in cipher text (encrypt text). HTTP is fast as compared to HTTPS because HTTPS consumes computation power to encrypt the communication channel.

HTTP It is hypertext transfer protocol. It is less secure as the data can be vulnerable to hackers. It uses port 80 by default. HTTP URLs begin with http:// It’s a good fit for websites designed for information consumption like blogs. HTTP does not scramble the data to be transmitted. HTTP website do not need SSL. Fast

HTTPS Vulnerable to hackers It Is highly secure as the data is encrypted before it is seen across a network. Slower than HTTP HTTPS requires SSL certificate. HTTPS scrambles the data before transmission. If the website needs to collect the private information such as credit card number, then it is a more secure protocol. HTTPs URLs begin with https:// It was use port 443 by default. It is designed to prevent hackers from accessing critical information. It is secure against such attacks. It is hypertext transfer protocol with secure.

12. What are JWT tokens?
    A. JSON web token (JWT), pronounced "jot", is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. Again, JWT is a standard, meaning that all JWTs are tokens, but not all tokens are JWTs.
    ex:-instagram
    when we loggin somewhere , they provide us a unique token.which helps us to access through it
    tocken is provided only when the registered data and login data are matching.
