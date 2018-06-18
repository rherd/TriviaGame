// set up some type of timer variable
// for timer > 0
// display questions as long as timer > 0

// on (click) - once the value is stored, stored it as a true/false value
// create a variable as false, once clicked, change it to true. is it still true, if it is, turn off the radio buttons

//

$(document).ready(function () {


    //setting the questions, choices and answers into a variable
    var questions = [
        {
            question: "In Greek Mythology, Medusa was said to be what type of beast?",
            choices: ["Hydra", "Gorgon", "Basilisk", "Jabberwocky"],
            answer: 1
        },
        {
            question: "In the book 'The Hobbit', what is the name of Bilbo Baggins' hobbit hole?",
            choices: ["Bagger Hole", "Brandywine", "Bag-End", "Baskerville"],
            answer: 2
        },
        {
            question: "Which of the following post-impressionism artists produced 'The Starry Night'?",
            choices: ["Vincent van Gogh", "Pierre August-Renoir", "Claude Monet", "Salvador Dali"],
            answer: 0
        },

        {
            question: "Michael Jackson was married to the daughter of what famous singer?",
            choices: ["Smokey Robinson", "Elvis Presley", "Lisa Marie Presley", "The Artist Formerly Known as Prince"],
            answer: 1
        }
    ];

    function showQuestions() {

        //this shows the Questions and starts the time for the game. 
        // var timeLeft = 30;
        // var intervalId;

        // intervalId = setInterval(decrement, 1000);

        // function decrement() {
        //     timeLeft--;
        //     $(".game-time").text("Time Remaining: " + timeLeft + " Seconds!");
        //     if (timeLeft === 0) {
        //         stop()
        //     }
        // }

        // function stop() {
        //     clearInterval(intervalId);
        //     done();
        // }

        function startTimer() {
            // set timeout to 31 seconds so display begins with 30 seconds
            // because first display comes after initial interval of 1 sec
            var timeout = 30;
            function run() {
                counter = setInterval(decrement, 1000);
            }
            function decrement() {
                timeout--;
                // $("#timer").show();
                $(".game-time").text("Time Remaining: " + timeout + " Seconds!");

                if (timeout == 0) {
                    // if time runs out, stop the timer, display time's up and ...
                    $(".game-time").html("Time's Up!");
                    clearInterval(counter);
                    // ... and also run the timesUp function
                    done();
                }
            }
            run();
        }

        startTimer();



        $("#start").hide();

        for (var i = 0; i < questions.length; i++) {
            var thisQ = questions[i].question;
            console.log(thisQ);
            $("#questions").append("<p>" + thisQ + "</p>");

            for (var j = 0; j < questions[i].choices.length; j++) {
                var thisChoice = questions[i].choices[j];
                console.log(thisChoice);
                $("#questions").append(
                    "<div class='form-check form-check-inline'>" +
                    "<input class='form-check-input inlineRadio" + i + "'" + " type = 'radio' name='inlineRadioOptions" + i + "'" + " value='option" + j + "'>" +
                    "<label class='form-check-label' form ='inlineRadio'>" + thisChoice + "</label></div>");




            }
        }


        var submitButton = "<button id='submit'>Submit</button>"
        $("#questions").append(submitButton); //creates submit button for use later
    }

    function done() {

        //do this just in case we finish early
        clearInterval(counter);
        timeout = 0;
        $(".game-time").text("Let's See How You Did!");

        $("#submit").hide();

        var myChoices = [];

        for (var i = 0; i < questions.length; i++) {



            var nameStr1 = "input[name=inlineRadioOptions";
            var nameStr2 = "]:checked";
            var fullNameStr = $(nameStr1 + i + nameStr2);

            if (fullNameStr.val() == null) {
                myChoices.push("unanswered");

            }
            else {
                myChoices.push(fullNameStr.val());
            }


        }

        var correctYesNo = [];
        var correct = 0;
        var incorrect = 0;
        var noAnswer = 0;

        for (var i = 0; i < questions.length; i++) {
            if (questions[i].answer == myChoices[i].slice(-1)) {
                correctYesNo.push("true");
                correct++;
            }

            else if (myChoices[i] == "unanswered") {
                correctYesNo.push("unanswered");
                noAnswer++;
            }
            else {
                correctYesNo.push("false");
                console.log(myChoices[i].slice(-1));
                incorrect++;
            }
        }

        console.log(myChoices);
        console.log(correctYesNo);

        $("#questions").hide();

        $("#done").append("<h1>Done!</h1>");

        $("#done").append("<div>Correct: " + correct + "</div>");
        $("#done").append("<div>Incorrect: " + incorrect + "</div>");
        $("#done").append("<div>Unanswered: " + noAnswer + "</div>");



    }



    $(document).on("click", "#start", showQuestions);

    $(document).on("click", "#submit", done);



}
)


