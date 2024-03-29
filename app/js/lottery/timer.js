class Timer{
    countdown(end,update,handle){
        const now=new Date().getTime();//获取当前时间
        const self=this;//当前对象的指针
        if(now-end>0){
            handle.call(self);//如果当前时间大于截止时间，时间结束了
        }else{
            let last_time=end-now; //剩余时间减去当前时间
            const px_d=1000*60*60*24;//天
            const px_h=1000*60*60;//小时
            const px_m=1000*60;
            const px_s=1000;
            let d=Math.floor(last_time/px_d);
            let h=Math.floor((last_time-d*px_d)/px_h);
            let m=Math.floor((last_time-d*px_d/px_h)/px_m);
            let s=Math.floor((last_time-d*px_d/px_h-m*px_m)/px_s);
            let r=[];
            if(d>0){
                r.push(`<em>${d}</em>天`);
            }
            if(r.length||(h>0)){
                r.push(`<em>${h}</em>时`);
            }
            if(r.length||(m>0)){
                r.push(`<em>${m}</em>分`);
            }
            if(r.length||(s>0)){
                r.push(`<em>${s}</em>秒`);
            }   
            self.last_time=r.join('');
            update.call(self,r.join(''));//更新时间
            setTimeout(function () {
                self.countdown(end,update,handle);
            },1000);  
        }
    }
}

export default Timer;