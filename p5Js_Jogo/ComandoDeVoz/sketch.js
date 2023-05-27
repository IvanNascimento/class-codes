function setup(){
  noCanvas();
  let lang = navigator.language || 'en-US';
  let speechRec = new p5.SpeechRec(lang, gotSpeech);

  let continuos = true;
  let interim = true;

  speechRec.start(continuos, interim);

  function gotSpeech(){
    if( speechRec.resultValue){
      createP(speechRec.resultString);
    }
  }
}

/*
  para o pc reponder
  
  var myVoice = new p5.Speech();
  myVoice.speak("String muito doida");
*/
