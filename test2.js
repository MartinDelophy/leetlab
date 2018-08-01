function recDate(input){
    var t=+(new Date())
    var time =~~((t-input)/1000) +1
    if((time)<=60){
        console.log("刚刚")
    }else if(60<time && time<=60*60){
        console.log(~~(time/60)+"分钟前")
    }else if(60*60 <=time && time<60*60*24){
        console.log(~~(time/(60*60))+"小时前")
    }else if (time>60*60*24 ){
        console.log(~~(time/(60*60*24))+"天前")
    }

}

recDate(153214806073)