const products = [
    {
        title: "Apple",
        description: "Fresh and juicy red apples, perfect for snacking or baking.",
        image: {
            url: "https://plus.unsplash.com/premium_photo-1666822818174-ce5f76d03bae?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "apple"
        },
        price: 25,
        location: "Aisle 1",
        quantity: 50,
        category: "Fruits",
        type: "Organic"
    },
    {
        title: "Strawberry",
        description: "Fresh and juicy red Strawberry, perfect for snacking or baking.",
        image: {
            url: "https://images.unsplash.com/photo-1495570689269-d883b1224443?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFN0cmF3YmVycnl8ZW58MHx8MHx8fDA%3D",
            filename: "Strawberry"
        },
        price: 25,
        location: "Aisle 1",
        quantity: 50,
        category: "Fruits",
        type: "Organic"
    },
    {
        title: "Pineapple",
        description: "Fresh and juicy red Pineapple, perfect for snacking or baking.",
        image: {
            url: "https://media.istockphoto.com/id/172388455/photo/pineapple-wallpaper.webp?a=1&b=1&s=612x612&w=0&k=20&c=D5wz4Yh66Alkloyj0l8fgillEVn6YP3pt9TV2OXRDFI=",
            filename: "Pineapple"
        },
        price: 25,
        location: "Aisle 1",
        quantity: 50,
        category: "Fruits",
        type: "Organic"
    },
    {
        title: "Papaya",
        description: "Fresh and juicy red Papaya, perfect for snacking or baking.",
        image: {
            url: "https://media.istockphoto.com/id/1163930184/photo/papaya-on-wooden-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=_GckmvQkOwpP8DBx5-qzDFUmmbzKTYpnj2VbJ9qMqhI=",
            filename: "Papaya"
        },
        price: 25,
        location: "Aisle 1",
        quantity: 50,
        category: "Fruits",
        type: "Organic"
    },
    {
        title: "Mango",
        description: "Fresh and juicy red Mango, perfect for snacking or baking.",
        image: {
            url: "https://media.istockphoto.com/id/534608466/photo/popular-kesar-mangoes-with-light-green-backround-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=bgY76s-b93jxJcfWoIi4m3eVTQz1FbY9gkIhJ17YPTY=",
            filename: "Mango"
        },
        price: 25,
        location: "Aisle 1",
        quantity: 50,
        category: "Fruits",
        type: "Organic"
    },
    {
        title: "Watermelon",
        description: "Fresh and juicy red Watermelon, perfect for snacking or baking.",
        image: {
            url: "https://media.istockphoto.com/id/157636928/photo/watermelon.webp?a=1&b=1&s=612x612&w=0&k=20&c=HM3IwAq6Ria7AAwOdWWs43oB27pQFVJeoQbPtL_vV5M=",
            filename: "Watermelon"
        },
        price: 25,
        location: "Aisle 1",
        quantity: 50,
        category: "Fruits",
        type: "Organic"
    },
    {
        title: "Kiwi",
        description: "Fresh and juicy red Kiwi, perfect for snacking or baking.",
        image: {
            url: "https://media.istockphoto.com/id/537403487/photo/kiwi.webp?a=1&b=1&s=612x612&w=0&k=20&c=FNY-4Zf4tS6FLF6_QXamOhpTyuweMaWkBm0kzKy6Y00=",
            filename: "Kiwi"
        },
        price: 25,
        location: "Aisle 1",
        quantity: 50,
        category: "Fruits",
        type: "Organic"
    },
    {
        title: "Blueberry",
        description: "Fresh and juicy red Blueberry, perfect for snacking or baking.",
        image: {
            url: "https://images.unsplash.com/photo-1425934398893-310a009a77f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Qmx1ZWJlcnJ5fGVufDB8fDB8fHww",
            filename: "Blueberry"
        },
        price: 25,
        location: "Aisle 1",
        quantity: 50,
        category: "Fruits",
        type: "Organic"
    },
    {
        title: "Banana",
        description: "Ripe yellow bananas, rich in potassium and energy.",
        image: {
            url: "https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=400",
            filename: "banana"
        },
        price: 12,
        location: "Aisle 2",
        quantity: 100,
        category: "Fruits",
        type: "Normal"
    },
    {
        title: "Banana",
        description: "Ripe yellow bananas, rich in potassium and energy.",
        image: {
            url: "https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=400",
            filename: "banana"
        },
        price: 12,
        location: "Aisle 2",
        quantity: 100,
        category: "Fruits",
        type: "Organic"
    },
    {
        title: "Carrot",
        description: "Crunchy orange carrots, ideal for salads and cooking.",
        image: {
            url: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=400",
            filename: "carrot"
        },
        price: 10,
        location: "Aisle 3",
        quantity: 80,
        category: "Vegetables",
        type: "Normal"
    },
    {
        title: "Pea",
        description: "Crunchy orange Pea, ideal for salads and cooking.",
        image: {
            url: "https://images.unsplash.com/photo-1609820323628-621956856049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGVhfGVufDB8fDB8fHww",
            filename: "Pea"
        },
        price: 10,
        location: "Aisle 3",
        quantity: 80,
        category: "Vegetables",
        type: "Normal"
    },
    {
        title: "Green Chili",
        description: "Crunchy orange Green Chili, ideal for salads and cooking.",
        image: {
            url: "https://images.unsplash.com/photo-1524593410820-38510f580a77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R3JlZW4lMjBDaGlsaXxlbnwwfHwwfHx8MA%3D%3D",
            filename: "Green Chili"
        },
        price: 10,
        location: "Aisle 3",
        quantity: 80,
        category: "Vegetables",
        type: "Normal"
    },
    {
        title: "Cucumber",
        description: "Crunchy orange Cucumber, ideal for salads and cooking.",
        image: {
            url: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q3VjdW1iZXJ8ZW58MHx8MHx8fDA%3D",
            filename: "Cucumber"
        },
        price: 10,
        location: "Aisle 3",
        quantity: 80,
        category: "Vegetables",
        type: "Normal"
    },
    {
        title: "Tomato",
        description: "Fresh red tomatoes, perfect for sauces and salads.",
        image: {
            url: "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400",
            filename: "tomato"
        },
        price: 18,
        location: "Aisle 4",
        quantity: 70,
        category: "Vegetables",
        type: "Organic"
    },
    {
        title: "Spinach",
        description: "Organic spinach leaves, loaded with nutrients and flavor.",
        image: {
            url: "https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?auto=compress&cs=tinysrgb&w=400",
            filename: "spinach"
        },
        price: 20,
        location: "Aisle 5",
        quantity: 60,
        category: "Leafy-Greens",
        type: "Normal"
    },
    {
        title: "kale",
        description: "Organic kale leaves, loaded with nutrients and flavor.",
        image: {
            url: "https://plus.unsplash.com/premium_photo-1702286619432-740a9d5e3ff0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2FsZXxlbnwwfHwwfHx8MA%3D%3D",
            filename: "kale"
        },
        price: 20,
        location: "Aisle 5",
        quantity: 60,
        category: "Leafy-Greens",
        type: "Normal"
    },
    {
        title: "chard",
        description: "Organic chard leaves, loaded with nutrients and flavor.",
        image: {
            url: "https://media.istockphoto.com/id/1190356145/photo/swiss-rainbow-chard-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=3rls-uBk6dnKPr49ozRETIw-mhvi-rXYLM55cnq6grQ=",
            filename: "chard"
        },
        price: 20,
        location: "Aisle 5",
        quantity: 60,
        category: "Leafy-Greens",
        type: "Normal"
    },
    {
        title: "Bok choy",
        description: "Organic Bok choy leaves, loaded with nutrients and flavor.",
        image: {
            url: "https://media.istockphoto.com/id/1289115859/photo/fresh-bok-choy-or-pak-choi.webp?a=1&b=1&s=612x612&w=0&k=20&c=5IY0yVVe6dc7Ds1TBsveGZ4A3Rtx7tDRueqgVX2ZjCo=",
            filename: "Bok choy"
        },
        price: 20,
        location: "Aisle 5",
        quantity: 60,
        category: "Leafy-Greens",
        type: "Normal"
    },
    {
        title: "mint",
        description: "Organic mint leaves, loaded with nutrients and flavor.",
        image: {
            url: "https://plus.unsplash.com/premium_photo-1725549578976-2aa34e0f3d01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWludHxlbnwwfHwwfHx8MA%3D%3D",
            filename: "mint"
        },
        price: 20,
        location: "Aisle 5",
        quantity: 60,
        category: "Leafy-Greens",
        type: "Normal"
    },
    {
        title: "Curry leaves",
        description: "Organic Curry leaves leaves, loaded with nutrients and flavor.",
        image: {
            url: "https://images.unsplash.com/photo-1722481440877-aa0e3c4a8f2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q3VycnklMjBsZWF2ZXN8ZW58MHx8MHx8fDA%3D",
            filename: "Curry leaves"
        },
        price: 20,
        location: "Aisle 5",
        quantity: 60,
        category: "Leafy-Greens",
        type: "Normal"
    },
    {
        title: "Spinach",
        description: "Organic spinach leaves, loaded with nutrients and flavor.",
        image: {
            url: "https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?auto=compress&cs=tinysrgb&w=400",
            filename: "spinach"
        },
        price: 20,
        location: "Aisle 5",
        quantity: 60,
        category: "Leafy-Greens",
        type: "Normal"
    },
    {
        title: "Potato",
        description: "Versatile potatoes, great for boiling, frying, or roasting.",
        image: {
            url: "https://images.pexels.com/photos/7129145/pexels-photo-7129145.jpeg?auto=compress&cs=tinysrgb&w=400",
            filename: "potato"
        },
        price: 8,
        location: "Aisle 6",
        quantity: 120,
        category: "Vegetables",
        type: "Normal"
    },
    {
        title: "Orange",
        description: "Sweet and tangy oranges, packed with vitamin C.",
        image: {
            url: "https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=400",
            filename: "orange"
        },
        price: 22,
        location: "Aisle 7",
        quantity: 40,
        category: "Fruits",
        type: "Normal"
    },
    {
        title: "Onion",
        description: "Fresh onions, essential for enhancing the flavor of your dishes.",
        image: {
            url: "https://images.pexels.com/photos/7129153/pexels-photo-7129153.jpeg?auto=compress&cs=tinysrgb&w=400",
            filename: "onion"
        },
        price: 9,
        location: "Aisle 8",
        quantity: 90,
        category: "Vegetables",
        type: "Organic"
    },
    {
        title: "Cucumber",
        description: "Crisp cucumbers, perfect for hydration and salads.",
        image: {
            url: "https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=400",
            filename: "cucumber"
        },
        price: 15,
        location: "Aisle 9",
        quantity: 75,
        category: "Vegetables",
        type: "Organic"
    },
    {
        title: "Bell Pepper",
        description: "Colorful bell peppers, great for cooking or eating raw.",
        image: {
            url: "https://images.pexels.com/photos/594137/pexels-photo-594137.jpeg?auto=compress&cs=tinysrgb&w=400",
            filename: "bellpepper"
        },
        price: 23,
        location: "Aisle 10",
        quantity: 65,
        category: "Vegetables",
        type: "Normal"
    },
    {
        title: "Chinese cabbage",
        description: "Colorful Chinese cabbage, great for cooking or eating raw.",
        image: {
            url: "https://media.istockphoto.com/id/2189342662/photo/vegetable.webp?a=1&b=1&s=612x612&w=0&k=20&c=pXzp4eKNmA1pu2tR_Pc6zI4LWiTpZ53M-kovfLOHzXc=",
            filename: "Chinese cabbage"
        },
        price: 23,
        location: "Aisle 10",
        quantity: 65,
        category: "Exotic-Vegetables",
        type: "Normal"
    },
    {
        title: "Asparagus",
        description: "Colorful Asparagus, great for cooking or eating raw.",
        image: {
            url: "https://media.istockphoto.com/id/820942710/photo/fresh-raw-green-asparagus-on-wooden-chopping-board.webp?a=1&b=1&s=612x612&w=0&k=20&c=lJFDmiCjmM2g2vKEb_v_asKIIxCiCvW6dIDblvy8SjI=",
            filename: "Asparagus"
        },
        price: 23,
        location: "Aisle 10",
        quantity: 65,
        category: "Exotic-Vegetables",
        type: "Organic"
    },
    {
        title: "Broccoli",
        description: "Colorful Broccoli, great for cooking or eating raw.",
        image: {
            url: "https://plus.unsplash.com/premium_photo-1702403157830-9df749dc6c1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QnJvY2NvbGl8ZW58MHx8MHx8fDA%3D",
            filename: "Broccoli"
        },
        price: 23,
        location: "Aisle 10",
        quantity: 65,
        category: "Exotic-Vegetables",
        type: "Organic"
    },
    {
        title: "Baby corn",
        description: "Colorful Baby corn, great for cooking or eating raw.",
        image: {
            url: "https://plus.unsplash.com/premium_photo-1725619404326-3c2da1a0d931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmFieSUyMGNvcm4lMjB2ZWdldGFibGV8ZW58MHx8MHx8fDA%3D",
            filename: "Baby corn"
        },
        price: 23,
        location: "Aisle 10",
        quantity: 65,
        category: "Exotic-Vegetables",
        type: "Organic"
    },
    {
        title: "Artichoke",
        description: "Colorful Artichoke, great for cooking or eating raw.",
        image: {
            url: "https://images.unsplash.com/photo-1518735869015-566a18eae4be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEFydGljaG9rZXxlbnwwfHwwfHx8MA%3D%3D",
            filename: "Artichoke"
        },
        price: 23,
        location: "Aisle 10",
        quantity: 65,
        category: "Exotic-Vegetables",
        type: "Organic"
    },
    {
        title: "Cherry tomatoes",
        description: "Colorful Cherry tomatoes, great for cooking or eating raw.",
        image: {
            url: "https://images.unsplash.com/photo-1570543375343-63fe3d67761b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2hlcnJ5JTIwdG9tYXRvZXN8ZW58MHx8MHx8fDA%3D",
            filename: "Cherry tomatoes"
        },
        price: 23,
        location: "Aisle 10",
        quantity: 65,
        category: "Exotic-Vegetables",
        type: "Organic"
    },
    {
        title: "Apple",
        description: "Fresh and juicy red apples, perfect for snacking or baking.",
        image: {
            url: "https://plus.unsplash.com/premium_photo-1666822818174-ce5f76d03bae?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "apple"
        },
        price: 25,
        location: "Aisle 1",
        quantity: 50,
        category: "Best-Selling",
        type: "Organic"
    },
    {
        title: "Strawberry",
        description: "Fresh and juicy red Strawberry, perfect for snacking or baking.",
        image: {
            url: "https://images.unsplash.com/photo-1495570689269-d883b1224443?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFN0cmF3YmVycnl8ZW58MHx8MHx8fDA%3D",
            filename: "Strawberry"
        },
        price: 25,
        location: "Aisle 1",
        quantity: 50,
        category: "Best-Selling",
        type: "Organic"
    },
    {
        title: "Pineapple",
        description: "Fresh and juicy red Pineapple, perfect for snacking or baking.",
        image: {
            url: "https://media.istockphoto.com/id/172388455/photo/pineapple-wallpaper.webp?a=1&b=1&s=612x612&w=0&k=20&c=D5wz4Yh66Alkloyj0l8fgillEVn6YP3pt9TV2OXRDFI=",
            filename: "Pineapple"
        },
        price: 25,
        location: "Aisle 1",
        quantity: 50,
        category: "Best-Selling",
        type: "Organic"
    },
    {
        title: "Cherry tomatoes",
        description: "Colorful Cherry tomatoes, great for cooking or eating raw.",
        image: {
            url: "https://images.unsplash.com/photo-1570543375343-63fe3d67761b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2hlcnJ5JTIwdG9tYXRvZXN8ZW58MHx8MHx8fDA%3D",
            filename: "Cherry tomatoes"
        },
        price: 23,
        location: "Aisle 10",
        quantity: 65,
        category: "Best-Selling",
        type: "Organic"
    },
    {
        title: "Orange",
        description: "Sweet and tangy oranges, packed with vitamin C.",
        image: {
            url: "https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=400",
            filename: "orange"
        },
        price: 22,
        location: "Aisle 7",
        quantity: 40,
        category: "Best-Selling",
        type: "Normal"
    },
    {
        title: "Onion",
        description: "Fresh onions, essential for enhancing the flavor of your dishes.",
        image: {
            url: "https://images.pexels.com/photos/7129153/pexels-photo-7129153.jpeg?auto=compress&cs=tinysrgb&w=400",
            filename: "onion"
        },
        price: 9,
        location: "Aisle 8",
        quantity: 90,
        category: "Best-Selling",
        type: "Organic"
    },
    {
        title: "Cucumber",
        description: "Crisp cucumbers, perfect for hydration and salads.",
        image: {
            url: "https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=400",
            filename: "cucumber"
        },
        price: 15,
        location: "Aisle 9",
        quantity: 75,
        category: "Best-Selling",
        type: "Organic"
    },
    {
        title: "Green Chili",
        description: "Crunchy orange Green Chili, ideal for salads and cooking.",
        image: {
            url: "https://images.unsplash.com/photo-1524593410820-38510f580a77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R3JlZW4lMjBDaGlsaXxlbnwwfHwwfHx8MA%3D%3D",
            filename: "Green Chili"
        },
        price: 10,
        location: "Aisle 3",
        quantity: 80,
        category: "Best-Selling",
        type: "Normal"
    },
    {
        title: "Cucumber",
        description: "Crunchy orange Cucumber, ideal for salads and cooking.",
        image: {
            url: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q3VjdW1iZXJ8ZW58MHx8MHx8fDA%3D",
            filename: "Cucumber"
        },
        price: 10,
        location: "Aisle 3",
        quantity: 80,
        category: "Best-Selling",
        type: "Normal"
    },
    {
        title: "Tomato",
        description: "Fresh red tomatoes, perfect for sauces and salads.",
        image: {
            url: "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400",
            filename: "tomato"
        },
        price: 18,
        location: "Aisle 4",
        quantity: 70,
        category: "Best-Selling",
        type: "Organic"
    },
];

module.exports = { data: products };
