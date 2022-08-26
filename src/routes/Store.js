import { writable } from "svelte/store";


const CartItemsStore = writable([
    {
        id: 1, name: 'Himadri-1', price: '3000', quantity: 1,
        img: 'https://deshal.net/wp-content/uploads/2022/06/Himadri-1-104482-3.jpg',
    },
    {
        id: 2, name: 'Brahma', price: '3550', quantity: 1,
        img: 'https://deshal.net/wp-content/uploads/2022/06/Brahma-104402-3.jpg',
    },
    {
        id: 3, name: 'Nodika', price: '3900', quantity: 1,
        img: 'https://deshal.net/wp-content/uploads/2022/06/Nodika-103920-3.jpg',
    },
])

export default CartItemsStore