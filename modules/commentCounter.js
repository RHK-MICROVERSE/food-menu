const get = (ID, CMT) => {
    const y = ID.length;
    const x = CMT.length;
    if(x === y){
        return x;
    } else {
        return 0;
    }
  };

  export default get;