# Projects
Add / Edit / Info / Delete Project
## New Project
### HTTP Request
`POST http://host/project/new`
#### Payload Params



`name: String,
company: String,
department: String,
description: String`
#### Sample Request
```json
{
  "name": "Test-Project",
  "company": "UET",
  "department": "FIT",
  "description": "blablabla"
}
```
> The response from server:
```json
{
    "code": 200,
    "reason": "Create new project success",
    "content": {
        "idProject": 2,
        "name": "Test-Project",
        "location": "",
        "company": "UET",
        "department": "FIT",
        "description": "blablabla",
        "updatedAt": "2017-10-26T16:49:31.660Z",
        "createdAt": "2017-10-26T16:49:31.660Z"
    }
}
```
## Info Project
## Edit Project
