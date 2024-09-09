function password(obj){
    if(obj.name ===undefined || obj.sitName === undefined || obj.bithName === undefined || obj.bithName.toString().length !== 4){
        return 'invlid'
    }
    let capitalName = obj.sitName[0].toUpperCase() + obj.sitName.slice(1)
    let passwordString = capitalName+ "#" +obj.name +"@"+ obj.bithName;
    return passwordString
}

console.log(password({name:'tanzid',bithName: 1999, sitName:'google'}))
console.log(password({name:'tanzid',bithName: 199, sitName:'google'}))