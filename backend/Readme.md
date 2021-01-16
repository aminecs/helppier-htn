# How to Run the app

Change into the backend directory
`cd backend`
Install dependencies from the requirements.txt file.

Populate your environment variables with `COCKROACH_DB_URI` (You can use a .env)

Run the app `flask run`

# Endpoints Description

## Get all jobs

`GET /api/jobs`
Returns JSON:

```
{
    "jobs": [
        {
            "id": 625061163681818385,
            "title": "task",
            "description": "do my laundary please",
            "owner_id": 625017448693376785,
            "volunteer_id": null,
            "longitude": 35.123,
            "latitude": 35.123
        },
        {
            "id": 625061869106407185,
            "title": "task",
            "description": "clean bedsheets",
            "owner_id": 625017448693376785,
            "volunteer_id": null,
            "longitude": 35.123,
            "latitude": 35.123
        }
    ]
}
```

## Get a single job by ID

`GET /api/job/<job_id>`
Returns JSON:

```
{
    "id": 625061869106407185,
    "title": "task",
    "description": "clean bedsheets",
    "owner_id": 625017448693376785,
    "volunteer_id": null,
    "longitude": 35.123,
    "latitude": 35.123
}
```

## Create a job

`POST /api/job`
**Expects JSON like**

```
{
    "owner_id": "625017448693376785",
    "type": "laundary",
    "time": "60",
    "latitude": "35.123",
    "longitude": "35.123",
    "description": "clean bedsheets"
}
```
