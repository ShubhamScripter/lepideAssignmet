# Lepide Assignment

## Web App Demo Video Link:
[Demo Video Link](https://drive.google.com/file/d/1pQwAH4h-9KzcLOMbWHsPxEbR3EXbm6-W/view?usp=sharing)

## Description
This is a web-app which allows user to upload .txt files and displays the content of the file in the web browser.

## For running the application locally
### Clone this repository in your local machine
git clone https://github.com/srijan-99/lepide-assignment

## Installation
1. Clone this repository to your local machine.
2. Install Node.js from [Node.js website](https://nodejs.org/).
3. Install MongoDB from [MongoDB website](https://www.mongodb.com/).
4. Navigate to the project directory in the terminal/command prompt.
5. Run `npm install` to install the necessary dependencies.
6. Configure the MongoDB connection in the backend code.

### For running the backend server
Enter the server directory
```
cd "lepide-assignment/backend"
```

Install the dependencies
```
npm i
```

Start the backend server
```
node server.js
```

### For running the client-side server
Enter the client directory
```
cd "lepide-assignment/frontend"
```

Install the dependencies
```
npm i
```

Start the client server
```
npm run start
```

## Usage for local development
1. Ensure server is running on the port 5000.
2. Navigate to `User.jsx` present in `/frontend/src/components/upload` and replace the API url with `http://localhost:5000`.
3. Open a web browser and visit `http://localhost:3000` to access the application.

## Technologies Used
- Express.js
- React.js
- Node.js

## Contributors
- [Srijan Ojha](https://www.github.com/srijan-99)

## Contact
For inquiries or support, please contact [srijanojha26@gmail.com](mailto:srijanojha26@gmail.com)
