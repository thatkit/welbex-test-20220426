# Rest API architecture

## Main CRUD

`POST`

    interface BlogNote {
        id!: ObjectID;
        date!: Date;
        message!: string | Media;
        author!: string;
    }

`GET`

findMany() & findOne(id)?

`PUT :id`

`DELETE :id`

## JWT Auth

`POST` create a new user

`POST` authenticate a registered user