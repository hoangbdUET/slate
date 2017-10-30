---
title: API Reference

language_tabs: # must be one of https://git.io/vQNgJ

toc_footers:

includes:
  - errors
  
search: true
---

# Introduction

Well Insight User manager 

<aside class="notice">
BASE_URL = <code>http://user.dev.sflow.me</code>
</aside>

* List User
* Edit User
* Insert User
* Active/Deactive User
* Delete User

# User Manager

Manager user

## Get all User

### HTTP Request

> The success response:

```json
{
    "result": true,
    "content": [
        {
            "idUser": 5,
            "username": "hoangbd1",
            "password": "123456",
            "status": "Actived",
            "role": 2,
            "email": "",
            "fullname": "",
            "createdAt": "2017-10-25T09:09:23.000Z",
            "updatedAt": "2017-10-25T09:09:23.000Z"
        }
    ]
}
```

> The error response:

```
None
```

* ROUTER : `POST : BASE_URL/user/list`

* PAYLOAD Exapmle : `NONE`

## Get a User by idUser

### HTTP Request

> The success response:

```json
{
    "result": true,
    "content": {
        "idUser": 5,
        "username": "hoangbd1",
        "password": "123456",
        "status": "Actived",
        "role": 2,
        "email": "",
        "fullname": "",
        "createdAt": "2017-10-25T09:09:23.000Z",
        "updatedAt": "2017-10-25T09:09:23.000Z"
    }
}
```
> The error response:

* ROUTER : `POST : BASE_URL/user/info`

* PAYLOAD Exapmle : 
```json
{
    "idUser" : 5
}
```

## Edit a User

### HTTP Request

> The success response:

```json
{
    "result": true,
    "content": {
        "idUser": 5,
        "username": "hoangbd1",
        "password": "123456",
        "status": "Actived",
        "role": 2,
        "email": "",
        "fullname": "",
        "createdAt": "2017-10-25T09:09:23.000Z",
        "updatedAt": "2017-10-25T09:09:23.000Z"
    }
}
```

* ROUTER : `POST : BASE_URL/user/edit`

* PAYLOAD Exapmle : 

```json
{
		"idUser": 5,
        "username": "editna",
        "password": "passna",
        "status": "Actived",
        "role": 2,
        "email": "",
        "fullname": "Sua na`"
}
```

## Delete a User

### HTTP Request

* ROUTER : `POST : BASE_URL/user/delete`

* PAYLOAD Exapmle : 

```json
{
    "idUser" : 5
}
```

> The success response:

```json
{
    "result": true,
    "content": {
        "idUser": 5,
        "username": "editna",
        "password": "passna",
        "status": "Actived",
        "role": 2,
        "email": "",
        "fullname": "Sua na`"
    }
}
```

## Insert a User

### HTTP Request

> The success response:

```json
{
    "result": true,
    "content": {
        "idUser": 6,
        "username": "hoangbd",
        "password": "password",
        "status": "Actived",
        "role": 2,
        "email": "",
        "fullname": "Sua na`",
        "updatedAt": "2017-10-30T15:57:36.582Z",
        "createdAt": "2017-10-30T15:57:36.582Z"
    }
}
```

* ROUTER : `POST : BASE_URL/user/new`

* PAYLOAD Exapmle : 

```json
{
        "username": "hoangbd",
        "password": "password",
        "status": "Actived",
        "role": 2,
        "email": "",
        "fullname": "Sua na`"
}
```
