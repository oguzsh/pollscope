<div align="center">
  <img width="75%" src="https://media.giphy.com/media/Um7f7HzPD8VKWgx2ZY/giphy.gif" />
</div>
<br />

# Pollscope
## Prerequisites
- The setups steps expect following tools installed on the system.
  - Ruby - 3.0.2
  - Rails - 6.1.4

## Schema
![image](https://user-images.githubusercontent.com/15168877/155898458-0e724f1e-fba8-4adf-aa40-2c676147e811.png)

## Deployment instructions

### 1. Check out the repository

```bash
git clone git@github.com:oguzsh/pollscope.git
```

### 2. Create and setup the database

Run the following commands to create and setup the database.

```ruby
rake db:create && rake db:migrate && rake db:seed
```

### 3. Start the Rails server

You can start the rails server using the command given below.

```ruby
rails s
```

And now you can visit the site with the URL http://localhost:3000
