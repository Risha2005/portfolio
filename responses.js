function getBotResponse(input) {


    if (input=="we want to work with u"){
        return "please contact me using my mail or phone no in contact section"
    }

    if (input=="we loved your website"){
        return "send your feedback using feedback form"
    }

    if (input=="which technology u are good at ?"){
        return " machine learning and many other skills "
    }




    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}