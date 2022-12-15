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
// c2(chain2)
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

// function pros(){
//     return new Promise(function(resolve,reject){

// resolve();
//     })
// }
//     pros()
//     .then(function(){
//         console.log("success")
//     })
//     .catch(function(){
//         console.log("error")
//     });

//     //promise chain
//     function pchain(){
//         return new Promise(function(resolve,reject){
    
//     resolve();
//         })
//     }

//     function pchain1(){
//         return new Promise(function(resolve,reject){
//             console.log("success-1")
//             resolve();
//     })
// }
// function pchain2(){
//     return new Promise(function(resolve,reject){
//         console.log("success-2")
//         resolve();
// })
// }
//method one
        // pchain()
        // .then(function(){
        //     console.log("success")
        //     pchain2()
        //     .then(function(){
        //         console.log("success-2",'2')
        //         pchain1()
        //         .then(function(){
        //             console.log("success-1",'1')})
        //             .catch(function(){
        //                 console.log("err-2")
        //             });})
        //         .catch(function(){
        //             console.log("err-1")
        //         });
        // })
        // .catch(function(){
        //     console.log("err")
        // });
//method

// pchain()
// .then(pchain2)
// .then(pchain1)
// .catch(
//     console.log("err-1")
// )


//promise all
//         function pchain(){
//             return new Promise(function(resolve,reject){
//         console.log('start')
//         resolve();
//             })
//         }
    
//         function pchain1(){
//             return new Promise(function(resolve,reject){
//                 console.log("success-1")
//                 resolve();
//         })
//     }
//     function pchain2(){
//         return new Promise(function(resolve,reject){
//             console.log("success-2")
//             resolve();
//     })
//     }
// Promise.all([pchain(),pchain2(),pchain1()])
// .then(
//     function(){
//         console.log('success')
//     }
// )
// .catch({
//     function(){
//         console.log('err')
//     }
// })


// function pchain(){
//                 return new Promise(function(resolve,reject){
//             console.log('start')
//             reject();
//                 })
//             }
        
//             function pchain1(){
//                 return new Promise(function(resolve,reject){
//                     console.log("success-1")
//                     resolve();
//             })
//         }
//         function pchain2(){
//             return new Promise(function(resolve,reject){
//                 console.log("success-2")
//                 resolve();
//         })
//         }

//         async function tryme(){
//             try{

// var wait=await pchain2();
// var wait1=await pchain();
// var wait2=await pchain1()}
// catch{
// console.log('err')
// }
// // console.log('res',wait,wait1,wait2)
//         }
//         tryme();
