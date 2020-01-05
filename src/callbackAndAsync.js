function returnNumber100 () {
  return 100
}


function setTimeoutReturn100 () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(100)
    }, 100)
  })
}


function callbackTest(callback){
  callback(100)
}

function callbackTimeoutTest(callback){
  setTimeout(() => {
    callback(100)
  }, 2000)
}

async function asyncReturn100(){
  await setTimeout(() => {}, 1000)
  return 100
}

export { returnNumber100, setTimeoutReturn100, callbackTest, callbackTimeoutTest, asyncReturn100 }