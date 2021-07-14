# Digit4U

## Description

This is an Web App that offers services of digitalisation to companies who want to improve their virtual awareness and update their tecnologies.

## User Stories

- **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault.
- **Signup:** As an anon I can sign up so that I can buy products.
- **Login:** As a user I can login so I can buy products and check the products I've already bought.
- **Logout:** As a user I can logout from the platform so no one else can use it.
- **Edit profile:** As a user I can edit my own profile.
- **Buy item:** As a user I can buy products so they are available for me all the time.

## Backlog

Product CRUD
Expert CRUD
Successfully implement Stripe to buy the courses
Successfully implement social login
Implement nodemailer

# Client / Frontend

## React Router Routes

| **Path**           | **Component**   | **Permissions**            | **Behavior**                                                  |
| ------------------ | --------------- | -------------------------- | ------------------------------------------------------------- |
| `/`                | Homepage        | public `<Route>`           | Home page                                                     |
| `/signup`          | Sign Up Page    | anon only `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup |
| `/login`           | Login Page      | anon only `<AnonRoute>`    | Login form, link to signup, navigate to homepage after login  |
| `/products`        | Shop Page       | public `<Route>`           | Shows all products in a list                                  |
| `/articles`        | Blog            | public `<Route>`           | Show all blog articles                                        |
| `/contact-us`      | Contact Page    | public `<Route>`           | Contact Form                                                  |
| `/userhomepage`    | User Page       | user only `<PrivateRoute>` | View user and bought products                                 |
| `/editArticle/:id` | Edit Blog Entry | admin only `<AdminRoute>`  | Form edit new blog entry                                      |

## Components

- Navbar
- Footer
- User
- Product
- Product Sample
- Article

## Services

#### Auth Service

- signup(user)
- login(user)
- logout()
- isLoggedIn()

#### Product Service

- getProducts(data)

#### User Service

- getUser(id)
- editUser(id)
- deleteUser(id)

#### Article Service

- getArticles()
- postArticles()
- getArticle(id)
- editArticle(id)
- deleteArticle(id)

# Server/Backend

## Models

### User model

```javascript
{
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  name: {type: String, required: true},
  surname: {type: String, required: true},
  phone: {type: Number, required: true},
  position: {type: String},
  products: {type:Schema.Types.ObjectId, ref:'Product'},
  role: {type: String, enum:['admin', 'user']}
}
```

### Product model

```javascript
{
  name: {type: String, required: true, unique: true},
  description: {type: String, required: true},
  price: {type: Number, required: true}
  category: {type: String, enum:['Web Design', 'Digital Marketing', 'Staff Training', 'Consulting']}
  video_demo: {type: string, required: true}
  expert: [type:objectId, ref:'expert']}
}
```

### Article model

```javascript
{
  name: {type: String, required: true, unique: true},
  description: {type: String, required: true},
  link: {type: String, required: true},
  photo: {type: String, required: true}
}
```

### Expert model

```javascript
{
  Name: {type: String, required: true},
  Surname: {type: String, required: true},
  description: {type: String, required: true},
  img: {type:string, required: true}
}
```

## API Endpoints (backend routes)

| **HTTP Method** | **URL**              | **Request Body**                 | **Success status** | **Error Status** | **Description**                                                                                                                 |
| --------------- | -------------------- | -------------------------------- | ------------------ | ---------------- | ---------------------------------------------------------------------------------- |
| GET             | `/api/auth/loggedin` | Saved session                    | 200                | 404              | Check if user is logged in and return profile page                                                                              |
| POST            | `/api/auth/signup`   | {name, surname, email, password} | 201                | 404              | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST            | `/api/auth/login`    | {email, password}                | 200                | 401              | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session              |
| POST            | `/api/auth/logout`   | (empty)                          | 204                | 400              | Logs out the user |
| GET             | `/api/users`         |                                  |                    | 400              | Show users |
| GET             | `/api/users/:id`     | {id}                             |                    | 400              | Show specific user |
| PUT             | `/api/users/:id`     | {id}                             |                    | 400              | Edit user     |
| DELETE          | `/api/users/:id`     | {id}                             |                    | 400              | Delete user     |
| GET             | `/api/products`      |                                  |                    | 400              | Show all products  |
| GET             | `/api/articles`      |                                  |                    | 400              | Show all articles  |
| POST            | `/api/articles`      | {name, description, img, link}   | 200                | 404              | Add article        |
| PUT             | `/api/articles/:id`  | {name,img}                       | 201                | 400              | Edit article       |
| DELETE          | `/api/articles/:id`  | {id}                             | 200                | 400              | Delete article     |
| GET             | `/api/experts/:id`   | {}                               | 201                | 400              | Show expert        |

## Links

### Trello/Kanban

- [Trello](https://trello.com/b/LA1OwpCf/ironhack-project-3)

### Git

- [Frontend Link](https://github.com/l-masip/digit4u)
- [Backend Link](https://github.com/l-masip/digit4u2)

### Deploy link

- [Deploy on Heroku](https://digit4u.herokuapp.com)