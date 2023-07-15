let products = [
    {
        id: 1,
        name: 'White shirt',
        category: 'T-shirts',
        description: 'A white t-shirt',
        image: 'white_shirt.jpg',
        price: 2.99
    },
    {
        id: 2,
        name: 'Blue shirt',
        category: 'T-shirts',
        description: 'A blue t-shirt',
        image: 'blue_shirt.jpg',
        price: 3.99
    },
    {
        id: 3,
        name: 'Apples',
        category: 'Fruits',
        description: 'Nice apples',
        image: 'apples.jpg',
        price: 1.50
    },
    {
        id: 4,
        name: 'Bananas',
        category: 'Fruits',
        description: 'Nice apples',
        image: 'bananas.jpg',
        price: 2.99
    },
    {
        id: 5,
        name: 'Black shirt',
        category: 'T-shirts',
        description: 'A black t-shirt',
        image: 'black_shirt.jpg',
        price: 2.99
    },
    {
        id: 6,
        name: 'Grey shirt',
        category: 'T-shirts',
        description: 'A grey t-shirt',
        image: 'grey_shirt.jpg',
        price: 3.99
    },
    {
        id: 7,
        name: 'Grapefruit',
        category: 'Fruits',
        description: 'Juicy grapefruit',
        image: 'grapefruit.jpg',
        price: 2.50
    },
    {
        id: 8,
        name: 'Grapes',
        category: 'Fruits',
        description: 'Nice grapes',
        image: 'grapes.jpg',
        price: 2
    },
    {
        id: 9,
        name: 'Pink shirt',
        category: 'T-shirts',
        description: 'A pink t-shirt',
        image: 'pink_shirt.jpg',
        price: 5.99
    },
    {
        id: 10,
        name: 'Yellow shirt',
        category: 'T-shirts',
        description: 'A yellow t-shirt',
        image: 'yellow_shirt.jpg',
        price: 6.99
    },
    {
        id: 11,
        name: 'Kiwi',
        category: 'Fruits',
        description: 'Fresh kiwi',
        image: 'kiwi.jpg',
        price: 3
    },
    {
        id: 12,
        name: 'Watermelon',
        category: 'Fruits',
        description: 'Delicious watermelon',
        image: 'watermelon.jpg',
        price: .50
    },

]

pages = [
    {
        id: 1,
        name: 'Home',
        slug: 'home',
        content: 'home page'
    },
    {
        id: 2,
        name: 'About Us',
        slug: 'about-us',
        content: 'about us page'
    },
    {
        id: 3,
        name: 'Services',
        slug: 'services',
        content: 'services page'
    },
    {
        id: 4,
        name: 'Contact',
        slug: 'contact',
        content: 'contact page'
    }
]

module.exports = function () {
    return {
        products: products,
        pages: pages,
        categories: [... new Set(products.map(p => p.category))].sort(),
        orders: []
    }
}