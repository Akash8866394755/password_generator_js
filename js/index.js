var uppercase = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "V", "U", "W", "X", "Y", "Z"
  ];

var lowercase = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "v", "u", "w", "x", "y", "z"
  ];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]" ];

window.onload = function() {

    var eyeBtn = document.getElementById("eye-btn");
    eyeBtn.onclick = function() {
        var password = document.getElementById("password");
        var eyeIcon = document.getElementById("eye-icon");
        if(password.type == "password") {
            password.type = "text";
            eyeIcon.className = "fa fa-eye-slash";
            eyeBtn.style.color = "#000";
        }
        else {
            password.type = "password";
            eyeIcon.className = "fa fa-eye";
            eyeBtn.style.color = "gray";
        }
    }


    // password-generate

    var passwordGenerateBtn = document.getElementById("generate-password");
    passwordGenerateBtn.onclick = function() {

        var uppercaseBtn = document.getElementById("uppercase");
        var lowercaseBtn = document.getElementById("lowercase");
        var numberBtn = document.getElementById("number");
        var symbolBtn = document.getElementById("symbol");

        if(uppercaseBtn.checked == true && lowercaseBtn.checked == false && 
            symbolBtn.checked == false && numberBtn.checked == false) {

            var uppercasePassword = "";
            for(var i=0; i<8; i++) {
                var randomNumber = Math.floor(Math.random()*uppercase.length);
                var uppercasePassword = uppercasePassword +uppercase[randomNumber];
            }
            
            document.getElementById("password").value = uppercasePassword;
        }
        else if(uppercaseBtn.checked == true && lowercaseBtn.checked == true && numberBtn.checked == false) {
            var uppercaseAndLowercasePassword = "";
            for(var i=0; i<4; i++) {
                var randomNumber = Math.floor(Math.random()*lowercase.length);
                var uppercaseAndLowercasePassword = uppercaseAndLowercasePassword +lowercase[randomNumber];
                var uppercaseAndLowercasePassword = uppercaseAndLowercasePassword +uppercase[randomNumber];

            }
            document.getElementById("password").value = uppercaseAndLowercasePassword;

        }
        else if(numberBtn.checked == true && uppercaseBtn.checked == true 
            && lowercaseBtn.checked == true && symbolBtn.checked == false) {
            var uppercaseLowercaseNumberPassword = "";

            for(var i=0; i<2; i++) {
                var randomNumber = Math.floor(Math.random()*lowercase.length);
                var uppercaseLowercaseNumberPassword = uppercaseLowercaseNumberPassword +lowercase[randomNumber];
                var uppercaseLowercaseNumberPassword = uppercaseLowercaseNumberPassword +uppercase[randomNumber];
                var randomNumber1 = Math.floor(Math.random()*numbers.length);
                var uppercaseLowercaseNumberPassword = uppercaseLowercaseNumberPassword +numbers[randomNumber1];
            }
            for(var i=0; i<2; i++) {
                var randomNumber = Math.floor(Math.random()*numbers.length);
                var uppercaseLowercaseNumberPassword = uppercaseLowercaseNumberPassword +numbers[randomNumber];
            }

            document.getElementById("password").value = uppercaseLowercaseNumberPassword;

        }

        else if(symbolBtn.checked == true && numberBtn.checked == true && 
            uppercaseBtn.checked == true && lowercaseBtn.checked ==true) {
            
            var symbolUppercaseLowercaseNumberPassword = "";

            for(var i=0; i<2; i++) {
                var randomNumber = Math.floor(Math.random()*lowercase.length);
                var symbolUppercaseLowercaseNumberPassword = symbolUppercaseLowercaseNumberPassword +lowercase[randomNumber];
                var symbolUppercaseLowercaseNumberPassword = symbolUppercaseLowercaseNumberPassword +uppercase[randomNumber];

                var randomNumber1 = Math.floor(Math.random()*numbers.length);
                var symbolUppercaseLowercaseNumberPassword = symbolUppercaseLowercaseNumberPassword +numbers[randomNumber1];

                var randomNumber2 = Math.floor(Math.random()*symbols.length);
                var symbolUppercaseLowercaseNumberPassword = symbolUppercaseLowercaseNumberPassword +symbols[randomNumber2];
            }
            document.getElementById("password").value = symbolUppercaseLowercaseNumberPassword;

        }
        else if((uppercaseBtn.checked == true && numberBtn.checked == true) &&
         (lowercaseBtn.checked == false && symbolBtn.checked == false)) {
            var uppercaseAndNumberPassword = "";

            for(var i=0; i<4; i++) {
                var randomNumber1 = Math.floor(Math.random()*uppercase.length);
                var uppercaseAndNumberPassword = uppercaseAndNumberPassword +uppercase[randomNumber1];

                var randomNumber2 = Math.floor(Math.random()*numbers.length);
                var uppercaseAndNumberPassword = uppercaseAndNumberPassword +numbers[randomNumber2];
            }
            
            document.getElementById("password").value = uppercaseAndNumberPassword;


            
        }
        else if((uppercaseBtn.checked == true && symbolBtn.checked == true) &&
         (lowercaseBtn.checked == false && numberBtn.checked == false)) {
            // upper and symbol


            var uppercaseAndSymbolPassword = "";

            for(var i=0; i<4; i++) {
                var randomNumber1 = Math.floor(Math.random()*uppercase.length);
                var uppercaseAndSymbolPassword = uppercaseAndSymbolPassword +uppercase[randomNumber1];

                var randomNumber2 = Math.floor(Math.random()*symbols.length);
                var uppercaseAndSymbolPassword = uppercaseAndSymbolPassword +symbols[randomNumber2];
            }
            
            document.getElementById("password").value = uppercaseAndSymbolPassword;
           
        }
        else if((lowercaseBtn.checked == true && numberBtn.checked == true) &&
         (uppercaseBtn.checked == false && symbolBtn.checked == false)) {
            // lower and number

            var lowercaseAndNumberPassword = "";

            for(var i=0; i<4; i++) {
                var randomNumber1 = Math.floor(Math.random()*lowercase.length);
                var lowercaseAndNumberPassword = lowercaseAndNumberPassword +lowercase[randomNumber1];

                var randomNumber2 = Math.floor(Math.random()*numbers.length);
                var lowercaseAndNumberPassword = lowercaseAndNumberPassword +numbers[randomNumber2];
            }
            
            document.getElementById("password").value = lowercaseAndNumberPassword;
        }
        else if((lowercaseBtn.checked == true && numberBtn.checked == true && symbolBtn.checked == true) && (uppercaseBtn.checked == false)) {
            var lowercaseNumberSymbol = "";

            for(var i=0; i<2; i++) {
                var randomNumber1 = Math.floor(Math.random()*lowercase.length);
                var lowercaseNumberSymbol = lowercaseNumberSymbol +lowercase[randomNumber1];

                var randomNumber2 = Math.floor(Math.random()*numbers.length);
                var lowercaseNumberSymbol = lowercaseNumberSymbol +numbers[randomNumber2];

                var randomNumber3 = Math.floor(Math.random()*symbols.length);
                var lowercaseNumberSymbol = lowercaseNumberSymbol +symbols[randomNumber3];

                
            }
            for(var i=0; i<2; i++) {
                var randomNumber1 = Math.floor(Math.random()*lowercase.length);
                var lowercaseNumberSymbol = lowercaseNumberSymbol +lowercase[randomNumber1];
            }

            
            document.getElementById("password").value = lowercaseNumberSymbol;

        }
        else if((lowercaseBtn.checked == true && symbolBtn.checked == true) && (uppercaseBtn.checked == false && numberBtn.checked == false)) {
            
            var lowercaseAndSymbolPassword = "";

            for(var i=0; i<4; i++) {
                var randomNumber1 = Math.floor(Math.random()*lowercase.length);
                var lowercaseAndSymbolPassword = lowercaseAndSymbolPassword +lowercase[randomNumber1];

                var randomNumber2 = Math.floor(Math.random()*symbols.length);
                var lowercaseAndSymbolPassword = lowercaseAndSymbolPassword +symbols[randomNumber2];
            }
            
            document.getElementById("password").value = lowercaseAndSymbolPassword;
        }
       else if((numberBtn.checked == true && symbolBtn.checked == true) && (uppercaseBtn.checked == false && lowercaseBtn.checked == false)) {
        
        var numberAndSymbolPassword = "";

        for(var i=0; i<4; i++) {
            var randomNumber1 = Math.floor(Math.random()*numbers.length);
            var numberAndSymbolPassword = numberAndSymbolPassword +numbers[randomNumber1];

            var randomNumber2 = Math.floor(Math.random()*symbols.length);
            var numberAndSymbolPassword = numberAndSymbolPassword +symbols[randomNumber2];
        }
        
        document.getElementById("password").value = numberAndSymbolPassword;
       }
       else if((uppercaseBtn.checked == true && numberBtn.checked == true && symbolBtn.checked == true) && lowercaseBtn.checked == false) {
        var uppercaseNumberSymbol = "";

        for(var i=0; i<2; i++) {
            var randomNumber1 = Math.floor(Math.random()*uppercase.length);
            var uppercaseNumberSymbol = uppercaseNumberSymbol +uppercase[randomNumber1];

            var randomNumber2 = Math.floor(Math.random()*numbers.length);
            var uppercaseNumberSymbol = uppercaseNumberSymbol +numbers[randomNumber2];

            var randomNumber3 = Math.floor(Math.random()*symbols.length);
            var uppercaseNumberSymbol = uppercaseNumberSymbol +symbols[randomNumber3];

            
        }
        for(var i=0; i<2; i++) {
            var randomNumber1 = Math.floor(Math.random()*uppercase.length);
            var uppercaseNumberSymbol = uppercaseNumberSymbol +uppercase[randomNumber1];
        }

        
        document.getElementById("password").value = uppercaseNumberSymbol;

       }
       else if((lowercaseBtn.checked == true) &&(uppercaseBtn.checked == false && numberBtn.checked == false && symbolBtn.checked == false)) {
        var lowercasePassword = "";
        for(var i=0; i<8; i++) {
            var randomNumber = Math.floor(Math.random()*lowercase.length);
            var lowercasePassword = lowercasePassword +lowercase[randomNumber];
        }
        
        document.getElementById("password").value = lowercasePassword;

       }
       else if((numberBtn.checked == true) &&(uppercaseBtn.checked == false && lowercaseBtn.checked == false && symbolBtn.checked == false)) {
        var numberPassword = "";
        for(var i=0; i<8; i++) {
            var randomNumber = Math.floor(Math.random()*numbers.length);
            var numberPassword = numberPassword +numbers[randomNumber];
        }
        
        document.getElementById("password").value = numberPassword;

       }
       else if((symbolBtn.checked == true) &&(uppercaseBtn.checked == false 
        && numberBtn.checked == false && lowercaseBtn.checked == false)) {
        var symbolPassword = "";
        for(var i=0; i<8; i++) {
            var randomNumber = Math.floor(Math.random()*symbols.length);
            var symbolPassword = symbolPassword +symbols[randomNumber];
        }
        
        document.getElementById("password").value = symbolPassword;

       }
        else {
            alert("enable password setting");
        }
    }

    var copyBtn = document.getElementById("copy-btn");
    copyBtn.onclick = function() {
        document.execCommand("copy");
    }

    // store cookie
    var nameBtn = document.getElementById("name-btn");
    nameBtn.onclick = function() {
        var username = document.getElementById("username");
        if(username.value == "") {
            var nameMessage = document.getElementById("name-m");
            nameMessage.className = "animate__animated animate__fadeIn";
            nameMessage.style.display = "block";
        }
        else {

            document.cookie = "name = "+username.value+";expires = Tue, 2 Oct 2030 12:00:00 UTC";
            username.value = "";

            var modal = document.getElementById("modal");
            modal.className = "animate__animate animate__fadeOut";

            var alertBox = document.getElementById("alert-box");
            alertBox.className = "animate__animated animate__zoomOut";

            setTimeout(function() {
                modal.style.display = "none";
            }, 800);
        }
        username.oninput = function() {
            var nameMessage = document.getElementById("name-m");
            nameMessage.className = "animate__animated animate__fadeOut";
            nameMessage.style.display = "none";
        }

    }

    var closeBtn = document.getElementById("close-btn");
    closeBtn.onclick = function() {
        
         if(document.cookie.indexOf("name") != -1) {

            var modal = document.getElementById("modal");
            modal.className = "animate__animate animate__fadeOut";

            var alertBox = document.getElementById("alert-box");
            alertBox.className = "animate__animated animate__zoomOut";

            setTimeout(function() {
                modal.style.display = "none";
            }, 800);
         }
         else {
            location.reload();

         }
     
    }
    if(document.cookie.indexOf("name") != -1) {

        var first = document.getElementById("first");
        first.style.display = "none";
        var modal = document.getElementById("modal");
        modal.style.display = "flex";
        modal.className = "animate__animate animate__fadeIn";

        var alertBox = document.getElementById("alert-box");
        alertBox.className = "animate__animated animate__zoomIn";

        var second = document.getElementById("second");
        second.style.display = "block";

        var data = document.cookie.split("=");
        var trData = document.getElementById("back-name");
        trData.innerHTML = data[1];

        // alert(data[1]);



    }
    else {

        var modal = document.getElementById("modal");
        modal.style.display = "flex";
        modal.className = "animate__animate animate__fadeIn";

        var alertBox = document.getElementById("alert-box");
        alertBox.className = "animate__animated animate__zoomIn";

        var second = document.getElementById("second");
        second.style.display = "none";
    }

}






