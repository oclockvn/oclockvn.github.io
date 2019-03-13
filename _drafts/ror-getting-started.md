### New proj

```
rails new {proj_name} --database=postgresql
```

Install missing gems (if not yet):

```
bundle install
```

Start:

```
rails s // rails server
```

Setup db:

```
rails db:setup
```

Rails console

```
rails c
```

### Structure

- app: logic
  - assets: app js/css/img
  - controllers: app ctrl
  - jobs: bg jobs

- bin: 
- config:
  - env
  - initializers: boot
- db
  - seed
  - migration
- public: static file, to use static file in web server..
- vender: libraries js/css

### Example



```
rails g <module>
```

where:

```
g: generate
```

module:

```
- model
- controller
- scaffold
```

1. Model

```
rails g model Item name:string
```

Migration db:

```
rails db:migrate
```

to rollback latest

```
rails db:rollback
```

2. Controller

```
rails g controller Item index new edit
```

Routes:

```
resources :items, path: 'alias'
```

view generated routes:

```
/rails/info/routes
```

or

```
rails routes
```


### Views

