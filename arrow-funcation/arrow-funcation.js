const adds =(x,y,colback) =>{
    console.log('Hello');
    console.log(typeof colback);
    colback(x,y)
};
const time =(x,y) =>{
    console.log(x+y)
    return x=y;
}
adds(5,6,time)