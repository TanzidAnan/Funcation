const products =[
    {name: 'shampu', price: 200, },
    {name: 'chrumi', price: 400, },
    {name: 'shart', price: 700, },
    {name: 'pant', price: 1200, },
]

function getShopinTotal(products){
    let sum = 0;
    for(const product of products){
        // console.log(product.price)
        sum =sum +product.price
    }
    return sum
}

const total =getShopinTotal(products);
console.log('total Price: ',total)