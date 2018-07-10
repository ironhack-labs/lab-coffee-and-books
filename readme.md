![Ironhack logo](https://i.imgur.com/1QgrNNw.png)

# PP | Ironhack Bureau Investigation

![Gadget Inspector](http://i.giphy.com/usZXhnivnVpEA.gif)

## Learning Goals

After this lesson, you will be able to:

- Build an app using Passport.js to authenticate users.
- Create user Roles with Passport.js to restrict access to certain pages.

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/).
- Clone your fork into your `~/code/labs` folder.

## Submission

Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m"done"
$ git push origin master
```

Navigate to your repo and create a Pull Request -from your master branch to the original repository master branch.

In the Pull Request name, add your campus, name, and las name separated by a dash "-".

## Deliverables

All the files that make your Express app work.

## Introduction

Imagine you just graduated from your Ironhack course being the number one of the class. Ironhack General Manager, decides to offer you to join the I.B.I., also known as Ironhack Bureau Investigation. And you accept.

There you are, doing a lot of cool stuff, hacking the bad guys and making this plante a safer place to live. One day, your manager comes to see you with bad news:

```
Hey, Ironhacker!

Last night we've been hacked, and all our system is down. There's a lot of stuff
to fix, but I know I can trust in you to revert this situation.

First things first, I have lost my super-admin access to the platform, and I need
to take the control again to give access to all our contents to our employees.

Let's push and solve this problem,

General Manager
```

### Starter Code

## Iteration #1: Give access to General Manager

In the first iteration of this lesson, you have to give back the control of the company to the General Manager. The platform routes must be protected, so only the logged users can access to them.

In this first iteration, the only user that will be able to access to the platform will be the General Manager, which role will be **Boss**.

**Tasks**

- Create an schema considering the following roles: **Boss, Developer, TA**.
- Create a **Boss** user and give access to the platform to his/her account.
- Allow only the **Boss** user to add and remove employees to the platform.

## Iteration #2: Employees

The General Manager can add and remove users to the platform, by indicating which role they have: developer or TA. Now we need to let them start a session in the platform.

Once they are logged in, they have to be able to edit their profile, and view other user profiles.

**Tasks**

- Allow users to log in the platform.
- Allow logged in users to see other user's profile.
- Allow a user to edit his/her own profile.

## Iteration #3: Course creation

Now that we have employees already defined, we need to be able to create our courses. An Ironhack platform without courses, is nothing.

TA's will have the responsability of course creation, so we will have to create the routes and views to let them create courses. The courses can be created just by TA's.

**Tasks**

- Create a CRUD to let the TA's create/edit/remove courses from the platform.
- The routes we will use to create the courses will be protected, and the TA role will be the only one with permission over these routes.

## Iteration #4: Alumni

Now that our platform is 100% restored, it's time to let other people come in. We are going to give the opportunity to the alumni to access our platform by using they facebook profile.

When alumni access the platform with their facebook profile, we should store their data in the database with "Student" role.

Alumni can see their profile and the operative courses, but they should not be able to see any of the following roles: Boss, Developer, TA.

**Tasks**

- Allow alumni to log in the application by using their Facebook profile. We have to use passport.js to let them do that.
- Alumni can see other alumni profiles.
- Alumni can't see other roles profiles: Boss, Developer, nor TA.
- TA's will be able to add alumni to the courses, creating a nested document in the `Course` model.

/Happy coding!

