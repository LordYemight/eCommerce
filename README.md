e C o m m e r c e 

//How to use the app

to sign-up (localhost:5000/signUp) - 'post'
 {
  "name": "Tunde Adigun",
  "email": "example@yahoo.com",
  "password": "Dlare1234",
  "repeat_password": "Dlare1234"
}



to log-in (localhost:5000/login) - 'post'
{
  "email": "example@yahoo.com",
  "password": "Dlare1234"
}


to change password (localhost:5000/changepassword) - 'post'
{
  "email": "example@yahoo.com",
  "newPassword": "newPassword123"
}


to upload product (localhost:5000/product) - 'post'
{
  "name": "iPhone X",
  "price": 999.99,
  "description": "The latest flagship smartphone from Apple with advanced features and a stunning design."
}

get all product - 'get'
 (localhost:5000/getproductAll)

you can use this ID - "64a2a2d24a8b92c27e621c1d"
get a particular product - 'get'
 (localhost:5000/getproduct/:id)

update a particular product name, price and description - 'put'
 (localhost:5000/product/:id)

to delete a particular product - "delete"
 (localhost:5000/product/:id)


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
      "description": "Next-generation gaming console with immersive graphic, fast loading times, and a wide range of games."
    }
  ]
}


