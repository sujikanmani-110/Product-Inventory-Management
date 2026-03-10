Product Inventory Management System:
  
    The Product Inventory Management System is a backend-focused web application developed using Node.js, Express.js, and MongoDB, designed to provide a secure and scalable solution for managing product data through RESTful APIs. The system enables users to create accounts, log in securely, and access protected routes using JWT-based authentication, ensuring that only authorized users can perform operations. It supports complete CRUD functionality, allowing users to add new products, view their inventory, update product details such as price or quantity, and delete items when needed.

Key Objectives:
      • Provide secure JWT-based user authentication and authorization for protected API access.
      • Enable efficient product inventory management through RESTful CRUD operations.
      • Ensure user-specific data isolation so each user can manage only their own products.
      • Implement scalable backend architecture using Node.js, Express.js, and MongoDB.
      • Deliver fast and reliable API responses with proper validation and error handling.


Target Users:
      • Small business owners managing product stock and inventory records.
      • Freelancers or sellers tracking items or services in a structured way.
      • Developers learning backend API development and authentication workflows.
      • Students working on backend or full-stack development projects.
      • Anyone needing a secure and simple backend system for managing product data.
PROJECT INSTRUCTION:
      • Create backend project folder
      • Configure server using Express.js
      • Setup MongoDB database connection
      • Implement authentication APIs
      • Implement product CRUD APIs
      • Test APIs using Thunder Client in VS Code
Initialize Node.js Project: 
    Open terminal inside the server folder and run:
    
    npm init -y
  This creates the package.json file which manages project dependencies.  
Install Required Packages:
        Install backend dependencies:
        
        npm install express mongoose cors dotenv jsonwebtoken bcryptjs
                

Package Purpose:
        express → Backend framework
        mongoose → MongoDB connection
        cors → Cross-origin requests
        dotenv → Environment variables
        jsonwebtoken → Authentication
        bcryptjs → Password hashing


Project Execution:

        Execution Steps
        Open terminal in server folder.
        Make sure you have a start script in the package.js file.
        Run:
        npm start
        


API Testing :
      Use Thunder Client to test APIs:  

Register:

              The register functionality allows new users to create an account by submitting their details, which are validated and securely stored with a hashed password. It ensures unique user creation before granting access to the system.

Login:

      The login functionality verifies user credentials and generates a JWT token upon successful authentication. This token is used to access protected routes securely.

Create Product:

    Allows an authenticated user to add a new product to their inventory by submitting product details. The product is saved with the user’s ID to maintain ownership.

Get all Products:
    
    Fetches all products that belong to the logged-in user. It ensures users can view only their own inventory data.
Update Product:

    Enables users to modify existing product details such as name, price, or quantity. The system verifies ownership before allowing any updates.
Delete Product:
    
    Allows users to permanently remove a product from their inventory. The operation is protected to ensure only the product owner can delete it.
     
