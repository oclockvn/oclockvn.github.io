---
My very first time with Ruby on Rails and Docker
tags: ["ror", "docker"]
---

### Setup

I've had docker for windows already, so no need to setup anything else.

### Run

First of all, i run

```
docker-compose build
```

there was an error like:

```
Couldn't find env file: \proj\.env.web
```

It's easy this time cuz' env.web.example file has already been there. I just need to rename it.

Then i run docker compose build again, face the error:

`
Windows named pipe error: The system cannot find the file specified. (code: 2)
`

After 1 min gg, turn out that I ran on Linux container, the fix is r-click on docker icon at toolbar and choose **Switch to Windows containers...**

docker-compose build again...waiting...waiting...i'm gonna make a coffee

It hanged like 30 min, the final solution is switch back to Linux container LOL.

Now i can run:

```
docker-compose up
```

and everything works just fine.

### Tips:

If i need to run any code, execute this command to open rail console:

```
docker-compose run web rails c
```

