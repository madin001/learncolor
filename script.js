let elTitle = document.querySelector('#title');
let elBox = document.querySelector('#box');
let elLearnText = document.querySelector('#learn_text')
let rec = new webkitSpeechRecognition();


btn.addEventListener('click', function(){
    rec.start();

    rec.lang ='ru-Ru';

    rec.onresult = function(e){
        if(e.results[0].isFinal){
            if(e.results[0][0].transcript == 'красный'){
                elBox.classList.add('red');
                elLearnText.textContent =" красный - red - qizil "
            }
    
            else if(e.results[0][0].transcript =='жёлтый'){
                elBox.classList.add('yellow')
                  elLearnText.textContent =" жёлтый - yellow - sariq "
            }

            else if(e.results[0][0].transcript=='розовый'){
                elBox.classList.add('pink')
                elLearnText.textContent =" розовый - pink - pushti "
            }

            else if(e.results[0][0].transcript=='зелёный'){
                elBox.classList.add('green')
                elLearnText.textContent =" зелёный - green - yahil "
            }
            
            else if(e.results[0][0].transcript=='фиолетовый'){
                elBox.classList.add('violet')
                elLearnText.textContent =" фиолетовый - violet - binafsha rang "
            }

            
            else if(e.results[0][0].transcript=='серый'){
                elBox.classList.add('grey')
                elLearnText.textContent =" серый'- grey - kulrang "
            }

            else if(e.results[0][0].transcript=='чёрный'){
                elBox.classList.add('black')
                elLearnText.textContent =" чёрный - black - qora "
            }

            else if(e.results[0][0].transcript=='синий'){
                elBox.classList.add('blue')
                elLearnText.textContent =" синий - blue - ko'k "
            }



        }
        else{
            elTitle.textContent = "noto'g'ri so'z kiritildi"
        }
    }
})
console.log(rec);