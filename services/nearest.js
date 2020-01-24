module.exports = {
    calc: function(usera, userb, interests){
        let seta = [];
        let setb = [];
        interests.forEach(interest => {
            if(usera.interests.some(item => item._id.toString() === interest._id.toString())){
                seta.push(1);
            }else{
                seta.push(0);
            }
            if(userb.interests.some(item => item._id.toString() === interest._id.toString())){
                setb.push(1);
            }else{
                setb.push(0);
            }
        });
        let sum = 0;
        for (let i = 0; i < seta.length; i++) {
            let diff = seta[i] - setb[i];
            let diffSquared = diff * diff;
            sum += diffSquared;
        }
        let distance = Math.sqrt(sum);
        return 1/(1+distance);

    }
};