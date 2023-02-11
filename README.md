- Pseudocode for Project

// Endpoint to register a new customer
POST /register
Input: {
"name": string,
"destination": string,
"age": number,
"nextOfKin": string,
"nextOfKinNum": Number
}
Output: {
"success": boolean,
"message": string
}

// Endpoint to get the total count of registered customers
GET /count
Output: {
"count": Number
}

// Endpoint to edit an existing customer's data
PUT /update/:id
Input: {
"name": string,
"destination": string,
"age": number,
"nextOfKin": string,
"nextOfKinNum": number
}
Output: {
"success": boolean,
"message": string
}

// Endpoint to clear all the data in the database
GET /del
Output: {
"success": boolean,
"message": string
}

Link to published documentation:

https://documenter.getpostman.com/view/25799451/2s935uFfws

