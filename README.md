# Florida Plant Man App

## Description

This project is a full-stack application built for a company that sells plants online. The front-end was developed using React, while the backend utilizes Flask, Python, and SQLite for the database. Object-oriented design principles were employed to create five database models: Plant, Reviews, Customers, CartItem and Cart.

[![Watch the video](https://img.youtube.com/vi/1lVPPZC-9rg/maxresdefault.jpg)](https://youtu.be/1lVPPZC-9rg)

- **Plant Model**: Represents the plant products available for sale.
- **Reviews Model**: Represents customer reviews left on the products.
- **Customers Model**: Represents the customers.
- **Cart Model**: Represents current users cart. 
- **Cart Item Model**: Represents an individual item in a users cart.

The relationships between these models are as follows:
- Plants and Shoppers have a many-to-many relationship through reviews.
- Plants and Reviews have a one-to-many relationship.
- Customers and Reviews have a one-to-many relationship.
- Carts and Plants have a many to many relationship through cart items.

The application includes various features:
- Redux toolkit for state management 
- CRUD actions on plant model .
- Filter plants by category.
- Ability to create reviews and customers through the review creation process.
- Utilized Flask's session module to persistently manage user carts by storing cart items as a dictionary within the session, allowing for an intuitive and seamless shopping experience across multiple visits.
- Admin portal to view all customers and reviews.
- Planned features include customer login, viewing saved plants, checkout functionality, About Us, Shipping, FAQ, and Returns Policy pages.
- Additionally, there are plans to implement a messages panel and support channels in the backend for administrators.

## Dependencies

- **Frontend Dependencies**:
  - "@emotion/react": "^11.11.1"
  - "@emotion/styled": "^11.11.0"
  - "@fontsource/roboto": "^5.0.8"
  - "@mui/icons-material": "^5.15.1"
  - "@mui/material": "^5.15.1"
  - "@testing-library/jest-dom": "^5.17.0"
  - "@testing-library/react": "^13.4.0"
  - "@testing-library/user-event": "^13.5.0"
  - "formik": "^2.4.5"
  - "react-burger-menu": "^3.0.9"
  - "react-dom": "^18.2.0"
  - "react-icons": "^4.12.0"
  - "react-router-dom": "^6.21.0"
  - "react-scripts": "^5.0.1"
  - "react-simple-image-slider": "^2.4.1"
  - "web-vitals": "^2.1.4"
  - "yup": "^1.3.3"
  - "polished": "^4.3.1"
  - "react-loading-icons": "^1.1.0"
  - "react-show-more-text": "^1.7.1"
  - "react-toastify": "^10.0.4"
  - "save": "^2.9.0"
  -  "redux": "^5.0.1"
  - "redux-thunk": "^3.1.0"
    
- **Backend Dependencies**:
  - ipdb = "0.13.9"
  - flask  
  - flask-sqlalchemy = "3.0.3"
  - Werkzeug = "2.2.2"
  - flask-migrate 
  - sqlalchemy-serializer
  - flask-restful
  - flask-cors 
  - faker
  - python version = "3.8.13"

## Installation

1. **Backend Installation**:
   - Run `pipenv install` to install all backend dependencies.
   - Enter the shell by running `pipenv shell`.
   - Seed the database by running `python seed_customer.py`, `python seed_review.py`, and `python seed_plant.py`.
   - Run the Flask app by executing `python app.py`.

2. **Frontend Installation**:
   - Navigate to the client folder.
   - Run `npm install` to install frontend dependencies.
   - Start the development server with `npm start`.

## Usage

- After installation, users can access the application through the browser.
- Various functionalities are available for users, including browsing plants, filtering by category, and leaving reviews.
- Administrators can access the admin portal to perform CRUD actions on plants and view customer and review data.

## Contributors

- [Anissa Lopez](https://github.com/anissalopez)