  function hr(){
    return new Promise (function (resolve,reject){
      if (tech=='java'){
        reject();
      }
      else if(tech=='React'){
        resolve();
      }
    },3000)
  }

  hr().then(function(){},function(){});