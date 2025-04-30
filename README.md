# Reminders API

A spring boot rest api for storing and managing reminders.

## Tech Stack

- **Spring Boot v3**
- **Spring Data Mongo DB**
- **Mongo Cloud Atlas**

## REST Endpoints

**Find the reminders based on user**

**GET /api/reminders/u?userName=ashish**

```declarative
// Sample response
{
    "status": "OK",
    "payload": [
        {
            "id": "6811af40e77ea9350ea44ece",
            "text": "sample text",
            "userName": "ashish",
            "remindOn": "2025-05-01",
            "remindMe": true,
            "status": "PENDING"
        }
    ]
}
```

**Find remidners based on status**

**http://localhost:9000/api/reminders/s?status=PENDING**

```declarative
// Sample response
{
    "status": "OK",
    "payload": [
        {
            "id": "6811af40e77ea9350ea44ece",
            "text": "sample text",
            "userName": "ashish",
            "remindOn": "2025-05-01",
            "remindMe": true,
            "status": "PENDING"
        }
    ]
}
```

**Create a new reminder**

**http://localhost:9000/api/reminders**

```declarative
// Request
{
    "text":"Sample reminder 2",
    "remindOn":"2025-05-03",
    "remindMe":false
}

// Response
{
    "status": "CREATED",
    "payload": {
        "id": "6811af79e77ea9350ea44ecf",
        "text": "Sample reminder 2",
        "userName": "ashish",
        "remindOn": "2025-05-03",
        "remindMe": false,
        "status": "PENDING"
    }
}

// Error response
{
    "status": "INTERNAL_SERVER_ERROR",
    "payload": {
        "remindOn": "Reminder date is mandatory",
        "text": "Remidner text cannot be blank"
    }
}
```

## Tasks

1. Create a front end using `ReactJS` and integrate it with this api
2. Use `axios` for communication between frontend and backend
3. Use `Tailwind css` to design the UI
4. Use `formik` and `Yup` to create forms and valdiate them