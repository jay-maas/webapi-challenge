#Mention two parts of Express that you learned about this week.

Learning about express this week, I learned that:
Express is a library for Node, similar to how react works for FE. 
Express does not do alot out of the box, but allows for alot of expansion on top of its framework.
Routing, and middleware are two parts that are crucial to writing an efficient API, and with express both are accomplished alot easier.

#Describe Middleware?

Middleware gets right in between something you are trying to do. These are functions that are written and then passed into another function, typically used for validation in the routing process. Allows for more cleaner code, and something that can be written once and used over and over again i.e. checking the dynamic id on a server request.

#Describe a Resource?

A resource is an item that comes from the database. It can helps us decide how/where/why we route.

#What can the API return to help clients know if a request was successful?

API can return resources specific to the request, as well as json objects that can contain message, and res.status as well!

#How can we partition our application into sub-applications?

We can partition our application into sub-apps by making decisions to programatically seperate like resources/helpers into their own directorys. This enables us to create building blocks and a foundation for our application to be functional. 