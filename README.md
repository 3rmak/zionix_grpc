# zionix-grpc

```
Test Task: GRPC Filtering Service
Objective: Develop a pair of NestJS microservices to demonstrate basic GRPC communication. The Producer service will read a JSON file containing a list of users, filter users based on age criteria (age > 18), and send the filtered list to the Consumer service. The Consumer service will invoke the Producer, receive the filtered data, and log it to the console.
Requirements:
    1. Two NestJS microservices:
        ◦ Producer: Responsible for reading, filtering, and returning user data.
        ◦ Consumer: Responsible for calling the Producer and displaying the filtered results.
    2. Communication between services must be implemented using GRPC.
    3. The Producer service must:
        ◦ Read a JSON file with user data.
        ◦ Filter users where age > 18.
        ◦ Return the filtered list of users.
    4. The Consumer service must:
        ◦ Request the filtered data from the Producer.
        ◦ Log the filtered users to the console.
Details:
Producer Service
    1. JSON File: The file should be located in the src/data/users.json directory and contain the following content:

 [
  { "id": 1, "name": "Alice", "age": 25 },
  { "id": 2, "name": "Bob", "age": 17 },
  { "id": 3, "name": "Charlie", "age": 30 },
  …………………………………………..
]

    2. GRPC API:

        ◦ Service Name: UserService
        ◦ RPC Method: GetFilteredUsers
Proto File: Define the API schema in a users.proto file with the syntax = "proto3";
Logic:

        ◦ Read the users.json file.
        ◦ Filter users with age > 18.
        ◦ Return the filtered users.
Consumer Service
    1. GRPC Client:
        ◦ Use the same users.proto file to define the client-side API.
        ◦ Connect to the Producer service and call GetFilteredUsers.
    2. Logic:
        ◦ Display the filtered users in the console.
Expected Console Output
When running the Consumer service, the console should display:
Filtered Users: [
  { "id": 1, "name": "Alice", "age": 25 },
  { "id": 3, "name": "Charlie", "age": 30 }
]

Submission Requirements:
    1. Include the complete source code for both Producer and Consumer services.
    2. Ensure the users.json file is included in the Producer service.
    3. Provide instructions on how to run both services.
Bonus:
    • Use Docker to containerize both services and provide a docker-compose.yml file to simplify running the services.
Time Estimate: ~20-30 minutes


This project demonstrates a pair of NestJS microservices that communicate using GRPC. The Producer service reads a JSON file containing user data, filters users based on age criteria (age > 18), and sends the filtered list to the Consumer service. The Consumer service invokes the Producer, receives the filtered data, and logs it to the console.

## Project Structure


zionix-grpc
├── proto
├── producer
├── consumer
├── docker-compose.yml
└── README.md
```

#### With Docker

1. Build and run the services using Docker Compose:
   ```
   docker-compose up --build
   ```
