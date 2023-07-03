# eCommerce App

## How to Use the App

- Sign-up (localhost:5000/signUp) - `POST`
  ```json
  {
    "name": "Tunde Adigun",
    "email": "example@yahoo.com",
    "password": "Dlare1234",
    "repeat_password": "Dlare1234"
  }
  
- Log-in (localhost:5000/login) - `POST`
  ```json
{
  "email": "example@yahoo.com",
  "password": "Dlare1234"
}


- Change Password (localhost:5000/changepassword) - `POST`
```json
{
  "email": "example@yahoo.com",
  "newPassword": "newPassword123"
}

- Upload Product (localhost:5000/product) - `POST`
```json
{
  "name": "iPhone X",
  "price": 999.99,
  "description": "The latest flagship smartphone from Apple with advanced features and a stunning design."
}


- sample ID = "64a2a2d24a8b92c27e621c1d"
- Get All Products - `GET` (localhost:5000/getproductAll)

- Get a Particular Product - `GET` (localhost:5000/getproduct/:id)

- Update a Particular Product (Name, Price, and Description) - `PUT` (localhost:5000/product/:id)

- Delete a Particular Product - `DELETE` (localhost:5000/product/:id)


### Sample Product Data
{
  "products": [
    {
      "_id": "64a2a2d24a8b92c27e621c1d",
      "name": "Samsung Smart TV",
      "price": 799.99,
      "description": "A smart TV with a large display, high-resolution picture quality, and built-in streaming apps."
    },
    {
      "_id": "64a2a2de4a8b92c27e621c1f",
      "name": "Nike Air Max",
      "price": 199.99,
      "description": "High-performance athletic shoes with excellent cushioning and support for running and training."
    },
    {
      "_id": "64a2a2f14a8b92c27e621c21",
      "name": "iPhone X",
      "price": 999.99,
      "description": "The latest flagship smartphone from Apple with advanced features and a stunning design."
    },
    {
      "_id": "64a2c3c4fd01c2e8d99f2147",
      "name": "Sony PlayStation 5",
      "price": 499.99,
      "description": "Next-generation gaming console with immersive graphics, fast loading times, and a wide range of games."
    }
  ]
}
