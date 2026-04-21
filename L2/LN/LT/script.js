function doHomework(){
    const p=new Promise((res,rej)=>{
        setTimeout(()=>{
            letdone=true
            if (done){
                console.log("work is done");
                res("work is done!")
            }else{
                rej("work is not done")
            }

        },2000)
    })
    return p;
}
p.then ((Message)=>{
     
})

function gotoPlayground(){
    const p=new Promise((res,rej)=>{
        setTimeout(()=>{
            letdone=true
            if (done){
                console.log("Went to playground")
                res("Playground time")
            }else{
                rej("not allowed")
            }


        },2000)
    })
    return p
}
doHomework().then((Message)=>{
    console.log(Message)
    return eatDinner()
}).then((Message)=>{
    console.log(Message)
    return gotoPlayground() 
}).then((Message)=>{
    console.log(Message)
}).catch((error)=>{
    console.log("Error:", error);
})