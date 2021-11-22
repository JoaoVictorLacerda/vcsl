
class SL{

    constructor(){
        try{
            const data = require('../../../KEY.json')
            
        }catch(error){
            const Main = require('./main/Main') 
            new Main();
        }
    }
    
    


    encrypt(msg){
        const data = require('../../../KEY.json')
        let msgBroken = msg.split('')
        let result ='';

        for (let index = 0; index <2; index++) {
            result = '';
            msgBroken.forEach(element => {

                result += data.encrypt[element]+",";
            });
            result = result.substring(0, result.length - 1);
            msgBroken = result.split('');
        }


        return result
    }

    decrypt(code){
        const data = require('../../../KEY.json')
        let codeBroken = code.split(',')
        let result ='';
        for (let index = 0; index <2; index++) {
            result = '';
            codeBroken.forEach(element => {

                result += data.decrypt[element];
            });
            codeBroken = result.split(',');
        }
        
        return result
        
    }

}

module.exports = new SL();

