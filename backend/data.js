import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: "Manish",
            email: "admin@example.com",
            password: bcrypt.hashSync("1234", 8),
            isAdmin: true
        },
         {
            name: "Batman",
            email: "user@example.com",
            password: bcrypt.hashSync("1234", 8),
            isAdmin: false
        }
    ],
    products: [
        {
            name: "Nike Slim Shirt",
            category: "Shirts",
            image: "/images/p1.jpg",
            price: 800,
            countInStock: 10,
            brand: "Nike",
            rating: 3.5,
            numReviews: 10,
            description: "High quality product",
        },

        {
            name: "Adidas Slim Shirt",
            category: "Shirts",
            image: "/images/p2.jpg",
            price: 400,
            countInStock: 20,
            brand: "Adidas",
            rating: 4.5,
            numReviews: 14,
            description: "High quality product",
        },

        {
            name: "Lacoste Slim Shirt",
            category: "Shirts",
            image: "/images/p3.jpg",
            price: 900,
            countInStock: 15,
            brand: "Lacoste",
            rating: 4.8,
            numReviews: 14,
            description: "High quality product",
        },

        {
            name: "Puma Slim Pant",
            category: "Shirts",
            image: "/images/p4.jpg",
            price: 800,
            countInStock: 30,
            brand: "Puma",
            rating: 4.9,
            numReviews: 19,
            description: "High quality product",
        },

        {
            name: "Blackberry Slim Pant",
            category: "Pants",
            image: "/images/p5.jpg",
            price: 1200,
            countInStock: 0,
            brand: "Blackberry",
            rating: 5.0,
            numReviews: 20,
            description: "High quality product",
        },

        {
            name: "Highlander Slim Pant",
            category: "Pants",
            image: "/images/p5.jpg",
            price: 600,
            countInStock: 22,
            brand: "Highlander",
            rating: 5.0,
            numReviews: 30,
            description: "High quality product",
        },
    ],
};

export default data;