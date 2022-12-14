//call back
// function back(call){
//     setTimeout(function(){
// console.log('call back')
//     },1000)
//      call()
// }
// function back1(){
// console.log('call back one')
// }

// back(back1);

//callback-chain
// function chain(c1){
//     setTimeout(function(){
// console.log('11')
// c1(chain3)
//     },1000)   
// }

// function chain1(c2){
//     setTimeout(function(){
// console.log('22')
// c2(chain3)
//     },1000) 
// }


// function chain2(){
//     setTimeout(function(){
// console.log('44')
//     },1000) 
// }

// function chain3(c3){
// console.log('33')
// c3(chain2)
// }
// chain(chain1)


//promise

function pros(){
    return new Promise(function(resolve,reject){

resolve();
    })
}
    pros()
    .then(function(){
        console.log("success")
    })
    .catch(function(){
        console.log("success")
    });

    //promise chain
    function pchain(){
        return new Promise(function(resolve,reject){
    
    resolve();
        })
    }

    function pchain1(){
        return new Promise(function(resolve,reject){
    
            resolve();
    })
}
function pchain2(){
    return new Promise(function(resolve,reject){

        resolve();
})
}
        pchain()
        .then(function(){
            console.log("success")
            pchain1()
            .then(function(){
                console.log("success-1")
                pchain2()
                .then(function(){
                    console.log("success-2")})
                    .catch(function(){
                        console.log("err-2")
                    });})
                .catch(function(){
                    console.log("err-1")
                });
        })
        .catch(function(){
            console.log("err")
        });
