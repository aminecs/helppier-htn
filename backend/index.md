
# HTN-magic4

Practice saving and working with geolocatiion user models

## Indices

* [jobs](#jobs)

  * [/api/job/<job_id>](#1-apijob<job_id>)
  * [/api/job/<job_id>](#2-apijob<job_id>)
  * [/api/job/create](#3-apijobcreate)
  * [/api/jobs](#4-apijobs)

* [users](#users)

  * [/api/register](#1-apiregister)
  * [/api/user](#2-apiuser)
  * [/api/users](#3-apiusers)
  * [/api/users/<user_id>/posted_jobs](#4-apiusers<user_id>posted_jobs)
  * [/api/users/<user_id>/volunteered_jobs](#5-apiusers<user_id>volunteered_jobs)
  * [/api/users/top](#6-apiuserstop)

* [Ungrouped](#ungrouped)

  * [/api/login](#1-apilogin)
  * [getBalance](#2-getbalance)


--------


## jobs



### 1. /api/job/<job_id>


Register a user. 


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{url}}/api/job/{{job1}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



### 2. /api/job/<job_id>


Register a user. 


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{url}}/api/job/{{job2}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
    "user_id": {{user2}}
}
```



### 3. /api/job/create


Register a user. 


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{url}}/api/job/create
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        

        {
            "owner_id": "{{user2}}",
            "description": "Buy fruits",
            "job_type": "groceries",
            "reward": "100",
            "latitude": "40.699215",
            "longitude": "-73.999039",
            "time_needed_mins": "100"
        }
```



### 4. /api/jobs


Register a user. 


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{url}}/api/jobs
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
    "username": "blinder@example.com", 
    "password": "secret"
}
```



## users



### 1. /api/register


Register a user. 


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{url}}/api/register
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
        {
            "firstname": "Steve",
            "lastname": "Rogers",
            "email": "cap@retired.com",
            "password": "shield"
        }
```



### 2. /api/user


Register a user. 


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{url}}/api/user/625155154391246609
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



### 3. /api/users


Register a user. 


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{url}}/api/users
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



### 4. /api/users/<user_id>/posted_jobs


Get the top earning users


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{url}}/api/users/{{user2}}/posted_jobs
```



### 5. /api/users/<user_id>/volunteered_jobs


Get the top earning users


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{url}}/api/users/{{user3}}/volunteered_jobs
```



### 6. /api/users/top


Get the top earning users


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{url}}/api/users/top
```



## Ungrouped



### 1. /api/login


Register a user. 


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{url}}/api/login
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
    "username": "blockchain@example.com", 
    "password": "blockchain"
}
```



### 2. getBalance


Get the balance of a user


***Endpoint:***

```bash
Method: GET
Type: 
URL: localhost:3000/getBalance
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| addr | 0xbA4010F289dD0463a4a3121Ed2a8DCFFdcB25Dd1 |  |



---
[Back to top](#htn-magic4)
> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2021-01-17 06:23:16 by [docgen](https://github.com/thedevsaddam/docgen)
