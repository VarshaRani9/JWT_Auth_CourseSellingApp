# Course Selling App

## Description
This project is built with Express and MongoDB using Mongoose. It features a system for user and admin management where users can sign up, view, and purchase courses, while admins can create and list courses. The User schema references the Course schema for purchased courses, ensuring a relational structure between users and their enrolled courses. 
JWT authentication is implemented to secure access to the endpoints.

## Features
- User and Admin authentication using JWT
- Course creation and listing by admins
- User sign-up and course purchase
- Relational data management between users and courses

## Installation

1. **Clone the repository**:
   - git clone https://github.com/VarshaRani9/JWT_Auth_CourseSellingApp.git
   - cd JWT_Auth_CourseSellingApp
   - npm install

2. **Config.js**
   
    - module.exports = {JWT_SECRET: "<your-jwt-secret>", mongoURI: "<your-mongodb-connection-string>"}
    - Include config.js in your .gitignore file

4. **Start the server**
   - node run dev

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)

## Endpoints
### User Endpoints

#### 1. User Sign-Up
- **URL:**: `POST /user/signup`
- **Description**: Registers a new user.
- **Request Body**:
```json
{
  "username": "user",
  "password": "password"
}
```
- **Response**:
```json
{
  "msg": "User Created Successfully",
  "userId": "<user-id>"
}
```
#### 2. User Sign-In
- **URL**: `POST /user/signin`
- **Description**: Authenticates a user and returns a JWT token.
- **Request Body**:
```json
{
  "username": "user",
  "password": "password"
}
```
- **Response**:
```json
{
  "token": "<jwt-token>"
}
```

#### 3. List Available Courses
- **URL**: `GET /user/courses`
- **Description**: Retrieves the list of available courses.
- **Response**:
```json
{
  "courses": ["course1", "course2", "course3"]
}
```

#### 4. Purchase Course
- **URL**: `POST /user/courses/:courseId`
- **Description**: Adds a course to the user's purchased courses. Requires JWT authentication.
- **Headers**:
{
  "Authorization": "Bearer <jwt-token>"
}
- **Response**:
```json
{
  "msg": "Purchase complete"
}
```

#### 5. List Purchased Courses
- **URL**: `GET /user/purchased-courses`
- **Description**: Retrieves the list of courses purchased by the authenticated user. Requires JWT authentication.
- **Headers**:
{
  "Authorization": "Bearer <jwt-token>"
}
- **Response**:
```json
{
  "courses": ["course1", "course2", "course3"]
}
```

### Admin endpoints

#### 1. Admin Sign-Up
- **URL:** `POST /admin/signup`
- **Description:** Registers a new admin.
- **Request Body:**
```json
{
   "username": "admin",
   "password": "password"
}
```
- **Response**:
```json
{
  "msg": "Admin created successfully",
  "id": "<admin-id>"
}
```

#### 2. Admin Sign-In
- **URL**: `POST /admin/signin`
- **Description**: Authenticates an admin and returns a JWT token.
- **Request Body**:
```json
{
  "username": "admin",
  "password": "password"
}
```
- **Response**:
```json
{
  "token": "<jwt-token>"
}
```

#### 3. Create Course
- **URL**: `POST /admin/courses`
- **Description**: Creates a new course. Requires admin authentication.
- **Request Body**:
```json
{
  "title": "Course Title",
  "description": "Course Description",
  "imageLink": "http://example.com/image.jpg",
  "price": 100
}
```
- **Response**:
```json
{
  "msg": "Course created successfully",
  "courseId": "<course-id>"
}
```

#### 4. List All Courses
- **URL**: `GET /admin/courses`
- **Description**: Retrieves the list of all courses. Requires admin authentication.
- **Response**:
```json
{
  "courses": [
    {
      "title": "Course Title 1",
      "description": "Course Description 1",
      "imageLink": "http://example.com/image1.jpg",
      "price": 100
    },
    {
      "title": "Course Title 2",
      "description": "Course Description 2",
      "imageLink": "http://example.com/image2.jpg",
      "price": 150
    },
    
  ]
}
```
