function addcomma(num){
    num=String(num).split("")
    let res=[]
    let count=0
    for (let index = num.length-1; index >= 0 ; index--) {
        count+=1;
        (count%3===0 && count !== num.length)?res.push(','+num[index]):res.push(num[index])
    }
    return res.reverse().join("")
}

export {addcomma}