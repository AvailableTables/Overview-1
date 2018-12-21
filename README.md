**Getting Started**
```
 This is the overview microservice that was part of proxy server
 ```

**Install Dependencies**
```
1. Download Dependies
    -npm install
```


**Set Up Database**
```

1. Update Postgres host, user, and password to match your account
    -go to db/postgresIndex.js


2. Populate database
    - npm run pgPopulate (this should take approximately 5 minutes to randomly generate 10,000,000 records)


3. Seed database
    -npm run pgSeed (this should take approximately 7 minutes to seed 10,000,000 records)
```


**Start server and run webpack**

```

1.  Start server
    - npm run server

2. Start Webpack
    - npm run react-dev

```

**Enjoy the microservice**

```
1. Head over to http://localhost:3010/restaurants/? where ? is any number under 10,000,000


```