class GenerateAlphabet{

    alphabet=[
        'ú','Ú','y','r','j','k',' ','f',
        'o','q','a','h','v','ç','p','b',
        'g','s','m','d','t','z','c','i',
        'l','u','n','e','x','w','A','B',
        'C','D','E','F','G','H','I','J',
        'K','L','M','N','O','P','Q','R',
        'S','T','U','V','W','X','Y','Z',
        'Ç',',','.',';','?',':','ã','é',
        'à','á','õ','ó','ê','ô','â','Ã',
        'É','À','Á','Õ','Ó','Ê','Ô','Â',
        '1','2','3','4','5','6','7','8',
        '9','0','+','-','/','\\','*','$',
        '!',']','[','(',')','"','{','}',
        '=',"'",'_','Ç','\n','í','Í','#'
    ]
    generate(){
        const criacao=[
            'ú','Ú','y','r','j','k','f',
            'o','q','a','h','v','ç','p','b',
            'g','s','m','d','t','z','c','i',
            'l','u','n','e','x','w','A','B',
            'C','D','E','F','G','H','I','J',
            'K','L','M','N','O','P','Q','R',
            'S','T','U','V','W','X','Y','Z',
            'Ç','.',';','?',':','ã','é',
            'à','á','õ','ó','ê','ô','â','Ã',
            'É','À','Á','Õ','Ó','Ê','Ô','Â',
            '1','2','3','4','5','6','7','8',
            '9','0','+','-','*','$',
            '!',']','[','(',')','"','{','}',
            '=',"'",'_','Ç','í','Í','#'
        ]

        const KEY={}

        const encrypt={}
        const decrypt={}


        this.alphabet.forEach(element => {
            let character="";
            let qtdOfCharacter  = this.randomizar(10,5)

            for (let index = 0; index < qtdOfCharacter; index++) {
                const result = this.randomizar(criacao.length-1,0);
                character += criacao[result];
            }
            encrypt[element] = character;
            decrypt[character] =element;
        });

        KEY['encrypt'] = encrypt;
        KEY['decrypt'] = decrypt;

        return KEY;

    }

    randomizar(max, min){
        return Number.parseInt(Math.random() * (max - min) + min);
    }
}

class Main{

    constructor(){
        const generateAlphabet =  new GenerateAlphabet();
        const data = generateAlphabet.generate();
        
        const fs = require('fs');

        fs.appendFile('KEY.json', JSON.stringify(data), function (err) {
            if (err) throw err;
            console.log('successfully created KEY');
        });
    }
}

module.exports = Main;
