## Cartoon RESTful CRUD Exercise

### Installation

- clone repo
- `npm install`
- `createdb cartoons`
- `knex migrate:latest`
- `knex seed:run`

### Instructions

The code that you need to create can be found in the following files.

* `db/query.js`
* `routes/cartoons.js`

 How to connect database to Heroku

 1. Create an account with Heroku, follow prompts
 2. In terminal - heroku create
 3. git remote -v (see the set remote)
 4. heroku addons:create heroku-postgresql
 5. heroku config (to display DATABASE_URL - postgres://....etc)
 6. In knexfile.js:
      add this:
      production: {
        client: "pg",
        connection: process.env.DATABASE_URL
      },

7. create .env file
8. Within .env, set DATABASE_URL=postgres://.....(your url)
      add ?ssl=true at the end
      *no quotes or spaces*
      *add .env to .gitignore file*
9. npm i -S dotenv (installs a package)
10. Add:   require('dotenv').config()    to knexfile.js
11. knex migrate:latest --env production
12. knex seed:run --env production

13. heroku pg:psql
        \dt to describe tables
        table cartoon; (to display cartoon table)

14. In connection.js, set:
            var environment = process.env.NODE_ENV || ‘development'
            var config = require(‘../knexfile.js’) [environment]

15. git add -A
16. git status
17. git commit -m "initial commit"
18. git push heroku deploy:master
19. heroku open ---> open in browser

Additional commands:
1. heroku config - display enoviroment variables
2. heroku config:set - key value pairs (ie foo=bar banana=pineapple)
    heroku config to see the new variables
3. heroku logs - display console from heroku
4. heroku logs --tail to display messages and changes
