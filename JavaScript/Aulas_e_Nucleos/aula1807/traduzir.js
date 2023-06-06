// api do tradutor do google: https://www.npmjs.com/package/google-translate-api

var express = require("express")
var bp = require("body-parser")
var app = express()

app.use(bp.json())

app.post("/traduzir",function(req,res){
  var palavra = req.body.palavra
  var idioma = req.body.idioma

  if (idioma == "en"){// ingles
    if (palavra == "ola") { res.send("hello") }
    else if (palavra == "mundo"){ res.send("world")  }
    else if (palavra == "amigo"){ res.send("friend")  }
    else if (palavra == "pai"){ res.send("dad")  }
  }
  else if (idioma == "es"){// espanhol
    if (palavra == "ola") { res.send("Hola") }
    else if (palavra == "mundo") { res.send("mundo") }
    else if (palavra == "amigo"){ res.send("amigo")  }
    else if (palavra == "pai"){ res.send("padre")  }
  }
  else if(idioma == "ja"){// japones
    if (palavra == "ola") { res.send("もしもし") }
    else if (palavra == "mundo") { res.send("世界") }
    else if (palavra == "amigo"){ res.send("友人")  }
    else if (palavra == "pai"){ res.send("お父さん")  }
  }
})

app.listen(3000,function(){
  console.log("Rodando...")
})
