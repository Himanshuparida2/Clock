async function getTime(){
    try{
        let time=await fetch('https://worldtimeapi.org/api/ip');
        let data=await time.json();
        return data.datetime;
    }catch(error){
        console.log(error);
        return null;
    }
}
async function update(){
    let CurrentTime= await getTime();
    if(CurrentTime){
        let form=CurrentTime.slice(11,19);
        document.querySelector(".clock").textContent=form;
    }
}
setInterval(update,1000);