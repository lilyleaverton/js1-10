//write first method
function sleep_in(weekday,vacation) {
    return !weekday||vacation;
}

//write second method
function monkey_trouble(param1, param2) {
    return !(!param1==param2);
}

function string_times(string, n) {
    if(n>0) {
        var r = string;
        for (var i = 0; i < (n - 1); i++) {
            r = r + string;
        }
        return r;
    }
    if(n==0) {
        return "";
    }
}

function front_times(x, n) {
    if(n>0) {
        var r = x.substring(0,3);
        for (var i = 0; i < (n - 1); i++) {
            r = r + x.substring(0,3);
        }
        return r;
    }else {
        return "" ;
    }
}

function string_bits(string) {
    var l = string.length ;
    var x = 0 ;
    var y = 1 ;
    var r = string.substring(x,y) ;
    while(y<=l) {
        x = x + 2 ;
        y = y + 2 ;
        r = r + string.substring(x,y) ;
    }
    return r ;
}

function caughtSpeeding(speed, birthday) {
    if(birthday == false) {
        if(speed<=60) {
            return 0 ;
        }
        if(speed>60&&speed<=80) {
            return 1 ;
        }
        if(speed>80) {
            return 2 ;
        }
    }else {
        if(speed<=65) {
            return 0 ;
        }
        if(speed>65&&speed<=85) {
            return 1 ;
        }
        if(speed>85) {
            return 2 ;
        }
    }
}

function fizz_buzz(x) {
    var string = "";
    var fizz = "Fizz";
    var buzz = "Buzz";
    var excl = "!";

    if (x % 3 != 0 && x % 5 != 0) {
        return x + "!";
    }

    if (x % 3 == 0 || x % 5 == 0) {
        if (x % 3 == 0) {
            string = string + fizz;
        }
        if (x % 5 == 0) {
            string = string + buzz;
        }
        return string ;
    }
}

function teaParty(tea, candy) {
    if(tea<5||candy<5) {
        return 0 ;
    }else {
        if(tea>=2*candy || candy>=2*tea) {
            return 2 ;
        }else {
            return 1 ;
        }
    }
}

function blackjack(x,y) {
    var r = 21-x ;
    var n = 21-y ;

    if(r<0 && n<0) {
        return 0 ;
    } else {
        if(r<n) {
            if(r>=0) {
                return x ;
            } else {
                return y ;
            }
        }
        if(n<r) {
            if(n>=0) {
                return y ;
            } else {
                return x ;
            }
        }
    }
}

function loneSum(a,b,c) {
    var sum = a+b+c ;
    if(a==b) {
        sum = c ;
    }
    if(b==c) {
        sum = a ;
    }
    if(a==c) {
        sum = b ;
    }
    if(a==b&&b==c) {
        sum = 0 ;
    }
    return sum ;
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times('hi', 6);
    document.getElementById("output").innerHTML += front_times('hello', 6);
    document.getElementById("output").innerHTML += string_bits('hello', 6);
    document.getElementById("output").innerHTML += caughtSpeeding(50, true);
    document.getElementById("output").innerHTML += fizz_buzz(9);
    document.getElementById("output").innerHTML += teaParty(5,7);
    document.getElementById("output").innerHTML += blackjack(5,7);
    document.getElementById("output").innerHTML += loneSum(5,7,7);


}