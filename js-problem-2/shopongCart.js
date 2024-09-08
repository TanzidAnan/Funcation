const products =[
    {name: 'shampu', price: 200, queatity: 5 },
    {name: 'chrumi', price: 400, queatity: 2 },
    {name: 'shart', price: 700, queatity: 4 },
    {name: 'pant', price: 1200, queatity: 1 },
];

function cartTotle(products){
    let sum =0;
    for(const product of products){
        const thisProductCost = product.price * product.queatity
        sum = sum + thisProductCost;
    }
    return sum
}

const shopingCart =cartTotle(products);
console.log(shopingCart);