// console.log("1")
// console.log("2")
//
// //Asynchronous
// setTimeout(()=>{
//     console.log("3")
// }, 0o000)
// console.log("4")
// console.log("5")
//
// //callbacks
//
// //calling a function inside 0f an another function is called callback function
//
// function one(call_two) {
//     console.log(" step 1 complete.please call step 2");
//     call_two();
// }
//
// function two(){
//    console.log(" step 2 ");
// }
//
// one(two);

//ice cream project

let stocks = {
    Fruits : ["strawberry","grapes","banana","apple"],
    Liquid : ["rum", "wine", "arrack", "tequila"],
    Holder : ["cone", "cup", "stick"],
    Toppings : ["Chocolate", "Peanut"]
}

 // let order = (Fruit_name,call_production) => {
 //
 //    setTimeout(()=>{
 //        console.log(`${stocks.Fruits[Fruit_name]} was selected`)
 //        call_production();
 //    }, 2000)
 //
 //     console.log("order placed. please call production");
 //     //call_production();
 // };

//call back hell
//  let production = () => {
//      setTimeout(() => {
//          console.log("production has started");
//
//          setTimeout(() => {
//              console.log("the fruit has been chopped");
//
//              setTimeout(() => {
//                  console.log(`${stocks.Liquid[0]} was added`);
//
//                  setTimeout(() => {
//                      console.log("The machine was started");
//
//                      setTimeout(() => {
//                          console.log(`${stocks.Holder[0]} was selected`);
//
//                          setTimeout(() => {
//                              console.log("add toppings");
//                          },3000)
//                      },2000)
//                  },1000)
//              },1000)
//          }, 2000)
//      }, 0o000);
//      //console.log("order received, starting production");
//  };
//
// order(0,production);

//solution for call back hell is promises

//A promise is made ->
//Pending->
//Resolve or Reject
//Resolve -> then -> then -> finally
//Reject -> catch -> finally


//using promises

let is_shop_open = true;

let order = (time,work) => {

    return new Promise((resolve,reject)=>{

        if (is_shop_open){

            setTimeout(()=>{
                resolve(work());
            },time)

        }else{
            reject(console.log("our shop is closed"));
        }
    })
}

order(2000,()=>console.log("select fruit"))
    .then(()=>{
        return order(0o000,()=>console.log("production has started."))
    }).then(()=>{
        return order(2000,()=>console.log("the fruit was chopped"))
}).then(()=>{
    return order(1000,()=>console.log("liquid was added"))
})

//Async / Await

let is_shop_open = true;

let order = () => {
     return new Promise((resolve,reject)=>{
         if(){
             resolve();
         }else{
             reject()
         }
     })
}

async function order(){}