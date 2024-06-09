function showinfo(){                               //Function for the get in to the information box
    var infobx = document.getElementById("infobox").hidden=false;
}
function showquestion(){           //FUntion for the start the quiz
    var strtbtn = document.getElementById("strtbtn").hidden=true;
    var infobx = document.getElementById("infobox").hidden=true;
    var continu = document.getElementById("Question_area").hidden=false;

    timer();                  //Called the timer function
   
}
function quit(){                         //Funtion for the exit button
    var quit = document.getElementById("infobox").hidden=true;
}
 function GetRadioValue(radioArray) {           //Function for the get radio value
            var i;
            for(i=0; i<radioArray.length; i++) {
                if(radioArray[i].checked) {
                    return radioArray[i].value;
                }
            }
            
        }


function timer(){                  //Function for the timer
    var settimeperiod = setInterval(Results,60000);       //Set the timer for 1min
}
function backtotop(){                      //Function for the back to top button
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}
function Results(){                    //Function for get the results
    var result = document.getElementById("Result_Box").hidden=false;
    var strtbtn = document.getElementById("strtbtn").hidden=true;
    var infobx = document.getElementById("infobox").hidden=true;
    var continu = document.getElementById("Question_area").hidden=true;

    var SelectedAnswers = [];            //Created the Array to store the users' answers
    for(let j = 0; j < 10; j++) {
        var name = "answer" + (j+1);
        var allAnswers = [];
        allAnswers = document.getElementsByName(name);

        var selectedAnswer = GetRadioValue(allAnswers);
        SelectedAnswers[j] = selectedAnswer;        //Saved the answer for the array
    }

    let score = 0;
    const correctAnswers = [1,2,1,1,1,1,0,3,0,0];          //Created array with correct answers for the question
    for(let i = 0; i < SelectedAnswers.length; i++) {
        var id = "q" + (i+1);
        if(SelectedAnswers[i] == correctAnswers[i]) {          //Then Compared it with users' selecetd answers
            score += 2;
            document.getElementById(id).innerHTML = "correct";
        } else {
            score -= 1;
            document.getElementById(id).innerHTML = "incorrect";
        }
    }
    document.getElementById("total").innerHTML = "Your score is " + score;
    document.getElementById("Result_Box").style.backgroundColor="yellow";
    if(score<5){
        document.getElementById("Result_Box").style.backgroundColor="red";      //Changing the colour of the result box according to the marks user got
        var crwn = document.getElementById("crown").hidden=true;
    }else if(score<10){
        document.getElementById("Result_Box").style.backgroundColor="orange";
        var crwn = document.getElementById("crown").hidden=true;
    }else if(score>15){
        document.getElementById("Result_Box").style.backgroundColor="green";
        var crwn = document.getElementById("crown").hidden=false;
    }

}
