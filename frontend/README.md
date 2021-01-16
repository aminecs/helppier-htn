Frontend hosted on `port: 3001`

`/api/register` - Register users ['POST']
Input:
```
{
    username: "johndoe"
    email: "johndoe@gmail.com",
    password: "johndoe"
    name: "John Doe"
    dateOfBirth: Sat Jan 16 2021 04:28:38 GMT-0500 (Eastern Standard Time) //Date Object
}
```

Output:
```
{
    value: true,
}
```

`/api/login` - Login user ['POST']
Input: 
```
{
    email: "johndoe@gmail.com",
    password: "johndoe"
}
```

Output:
```
{
    value: true,
}
```


`/api/requestVolunteer` - Request a volunteer['POST']

Input:
```
{
    type: "laundary",
    time: 60,
    latitude: 35.123,
    longitude: 35.123,
    description: "do my laundary please"
}
```

Output:
```
{
    value: true,
}
```

`/api/getVolunteers` - Request a volunteer['GET'] // return all volunteers
`/api/getVolunteers/type=delivery`
`/api/getVolunteers/time=60` 
`/api/getVolunteers/type=delivery/time=60` 
Output:
```
[
    {
        userId: "asdfasdf",
        name: "Nancy Moe",
        type: "delivery,
        time: 60,
        longitude: 0,
        latitude: 0,
        rewards: 600
    },
    {
        userId: "asdfasdf",
        name: "Nancy Moe",
        type: "delivery,
        time: 60,
        longitude: 0,
        latitude: 0,
        rewards: 600
    }
]
```