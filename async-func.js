function killingAkatsukiMembers() {
  return new Promise((resolve,rejetct)=>{
    setTimeout(() => {
        console.log('Should I kill Hidan?');
        setTimeout(()=>{
            console.log('Should I kill Itachi?');
            setTimeout(()=>{
                console.log('Should I kill Pain?');
                resolve('Sasori');
            }, 1000);
        },1000);
      },1000);
  })
}

module.exports = killingAkatsukiMembers;
