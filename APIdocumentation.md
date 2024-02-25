# API Documentation
This documentation provides information about the API endpoints available in the Edumi backend.  Below are the details of each endpoint.
## Base URL
All endpoints are relative to the base URL: http://localhost:4000 (for local development)
1. ### Register
 -  Endpoint: /register
 -	Method: POST
 - Request Body:
   - name (string): User's name
   - email (string): User's email
   - password (string): User's password
 - Responses:
   - 200: User registered successfully
   - 400: Please enter all fields
   - 409: User already exists
2. ### Login
  - Endpoint: /login
  -	Method: POST
 - Request Body:
   - email (string): User's email
   - password (string): User's password
 - Responses:
   - 200: Welcome back [user's name]
   - 400: Please enter all fields
   - 401: Incorrect password or email
3. ### Logout
  -  Endpoint: /logout
  -	Method: POST
 - Responses:
   - 200: Logged out successfully
4. ### Get My Profile
 -  Endpoint: /me
 -	Method: GET
 - Responses:
   - 200: User profile details  
5. ### Change Password
 -  Endpoint: /changepassword
 -	Method: PUT
 - Request Body:
   - oldPassword (string): User's current password
   - newPassword (string): User's new password 
 - Responses:
   - 200: Password changed successfully
   - 400: Please enter all fields or Incorrect Password

6. ### Update Profile
 - Endpoint: /updateprofile
 -	Method: PUT
 - Request Body:
   - name (string): Updated user name
   - email (string):  Updated User's email
 - Responses:
   - 200: Profile updated successfully
7. ### Forget Password
 -  Endpoint: /forgetpassword
 -	Method: POST
 - Request Body:
   - email (string): User's email
 - Responses:
   - 200: Reset token sent to email successfully
   - 404: User not found

8. ### Reset Password
 -  Endpoint: /resetpassword/:token
 -	Method: PUT
 -	Request Parameters:
    - token (string): Reset token received via email
 - Request Body:
   - password (string): New password
 - Responses:
   - 200: Password changed successfully
   - 400: Token is invalid or expired

9. ### Add To Playlist
 -  Endpoint: /addtoplaylist
 -	Method: POST
 - Request Body:
   - id (string): Course ID to be added to the playlist
 - Responses:
   - 200: Added to Playlist
   - 400: Invalid course ID
   - 400: Course already in playlist

10. ### Remove From Playlist
 -  Endpoint: /removefromplaylist
 -	Method: DELETE
 - Request Query:
   - id (string): Course ID to be removed from the playlist
 - Responses:
   - 200: Removed from Playlist
   - 400: Invalid course ID

11. ### Delete My Profile
 -  Endpoint: /me
 -	Method: DELETE
 - Responses:
   - 200: Profile deleted successfully

12. ### Admin Delete User
 -  Endpoint: /admin/users/:id
 -	Method: DELETE
 - Request Parameters:
   - id (string): User ID to be deleted
 - Responses:
   - 200: Profile deleted successfully
   - 200: You are not admin

13. ### Admin Get All User
 -  Endpoint: /admin/users
 -	Method: GET
 - Responses:
   - 200: List of users
   - 404: User not found
   - 200: You are not admin

14. ### Update User Role
 -  Endpoint: /admin/users/:id
 -	Method: PUT
 - Request Parameters:
   - id (string): User ID whose role needs to be updated
 - Responses:
   - 200: User role updated
   - 400: User not found
   - 400: User is already an admin
   - 400: Error updating user role
## Course Controller

1. ### Get All Courses
 -  Endpoint: /courses
 -	Method: GET
 - Responses:
   - 200: List of all courses
2. ### Create Course
 -  Endpoint: /createcourse
 -	Method: POST
 -	Authentication: Admin Only
 - Request Body:
   - title (string): Course title
   - description (string): Course description
   - category (string): Course category
   - createdBy (string): Creator of the course
 - Responses:
   - 201: Course created successfully. You can add lectures later
3. ### Add Lecture To Course
 -  Endpoint: /course/:id
 -	Method: POST
 -	Authentication : Admin Only
 -	Request Parameters:
    - id (string): Course ID
 - Request Body:
   - title (string): Lecture title
   - description (string): Lecture description
 - Responses:
   - 200: Lecture added to the course successfully
   - 400: Lecture already exists in the course
   - 404: Course not found
4. ### Get Course Lectures
 -  Endpoint: /course/:id
 -	Method: GET
 - Request Parameters:
   - id (string): Course ID
 - Responses:
   - 200: Course details with lectures
   - 404: Course not found
5. ### Sort Courses
 -  Endpoint: /course/sortCourses
 -	Method: GET
 - Request Parameters:
   - /sort?sortBy=popularity.
 - Responses:
   - 200: Courses according to the sort criteria
6. ### Sort Courses
 -  Endpoint: /course/searchCourses
 -	Method: GET
 - Request Parameters:
   - /searchCourses?keyword=
 - Responses:
   - 200: Courses according to the search