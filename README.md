![](https://www.teguharief.com/img/teguh-arief.png)

# Hello Prisma

Express.js implement JWT Auth and Role Auth using Prisma ORM with PostgreSQL.

## Installation

```
git clone git@github.com:teguharifudin/Hello-Prisma.git
```
```
cd Hello-Prisma
```
```
npm install
```

## Usage

### Starting the Database Server: PostgreSQL

### Setting up Prisma

```
npx prisma init
```
```
postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public
```
```
npx prisma generate
```

### Postman

POST http://localhost:5000/api/register
```
{
    "firstName": "Teguh",
    "lastName": "Arief",
    "email": "teguh.arifudin@gmail.com",
    "phone": "@Pass123",
    "password": "@Pass123"
}
```

POST http://localhost:5000/api/login
```
{
    "email": "teguh.arifudin@gmail.com",
    "password": "@Pass123"
}
```

GET Bearer Authentication http://localhost:5000/api/users/9757c38e-5903-4e9c-a1bc-89c8e7f38d50

DELETE Bearer Authentication http://localhost:5000/api/users/9757c38e-5903-4e9c-a1bc-89c8e7f38d50

### Prisma Studio
```
npx prisma studio
```

## Contributing

Please use the [issue tracker](https://github.com/teguharifudin/Hello-Prisma/issues) to report any bugs or file feature requests.
