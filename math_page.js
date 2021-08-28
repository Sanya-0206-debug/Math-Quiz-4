player1_name=localStorage.getItem("p1name");
player2_name=localStorage.getItem("p2name");
debugger;
player1_score=0;
player2_score=0;

document.getElementById("number1").innerHTML=player1_name +":";
console.log("hi");
document.getElementById("number2").innerHTML=player2_name +":";
document.getElementById("p1score").innerHTML=player1_score +"";
document.getElementById("p2score").innerHTML=player2_score +"";
document.getElementById("player_question").innerHTML="Question turn : "+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn : "+player2_name;

function send()
{
    number1=document.getElementById("math1").value;
    number2=document.getElementById("math2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>"+ number1 +" X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row= question_number + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("math1").value="";
    document.getElementById("math2").value="";
}
question_turn="player1";
answer_turn="player2";
function check()
{
    get_answer=document.getElementById("input_check_box").value;
    if(get_answer== actual_answer)
    {
        if(answer_turn == "player1")
        {
            
            update_player1_score = player1_score+1;
            player1_score = update_player1_score;
            document.getElementById("p1score").innerHTML = update_player1_score;
          
        }
        else
        {
            update_player2_score = player2_score +1
            player2_score = update_player2_score;
            document.getElementById("p2score").innerHTML = update_player2_score;
        }
    }
    if(question_turn=="player1")
    {
        question_turn="player2";
        document.getElementById("player_question").innerHTML = "Question Turn - "+ player2_name;

        answer_turn="player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - "+ player1_name;

    }
    else
    {
        question_turn="player1"
        document.getElementById("player_question").innerHTML = "Question Turn - "+ player1_name;        

        answer_turn="player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - "+ player2_name;
    
    }
}
