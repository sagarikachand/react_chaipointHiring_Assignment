

export  function setLocalStorage(key, data){
  localStorage.setItem(key , JSON.stringify(data))
}

export  function getLocalStorage(key){
  let retrievedData= localStorage.getItem(key)
  if(retrievedData){
    return JSON.parse(retrievedData)
  }else{
    return null;
  }
}
