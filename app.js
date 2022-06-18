var a = 1;

let pr = new Promise((resolve,reject)=>{
    if(a==2){
        resolve('Success');
    } else {
        reject('error');
    }
});

pr.then((value)=>{
    console.log(value)
}).catch((value)=>{
    console.log(value)
    console.log('alskdf')
});
