var current_player = "X";

document.getElementById("current_player_label").innerText = "X";

function make_a_turn(row, col){

    var box = document.getElementById(`box_${row}_${col}`);

    if(box.value == ""){
        box.value = current_player;

       var result = check_game_status(row, col);

       if(result == "win"){
        alert(`Player ${current_player} Won`);
        reset_game();
    }
    else if(result == 'draw'){
        alert(`game draw`);
        reset_game();
    }
       else{

           switch_player();
        }
        
    }
    else{
        alert("Please Turn Some Another Box");
    }
    
}

function switch_player(){
    if(current_player == "X"){
        current_player = "O";
    }
    else if(current_player == "O"){
        current_player = "X";
    }
    document.getElementById("current_player_label").innerText = current_player;
}
// horizontally
function check_game_status(row, col){
    if(document.getElementById(`box_${row}_1`).value == current_player &&
    document.getElementById(`box_${row}_2`).value == current_player &&
    document.getElementById(`box_${row}_3`).value == current_player){
        return "win";
    }
    
    // Vertically
    if(document.getElementById(`box_${col}_1`).value == current_player &&
    document.getElementById(`box_${col}_2`).value == current_player &&
    document.getElementById(`box_${col}_3`).value == current_player){
        return "win";
    }
    
    
    // Diagnoally

    if(document.getElementById(`box_1_1`).value == document.getElementById(`box_2_2`).value &&
    document.getElementById(`box_2_2`).value == document.getElementById(`box_3_3`).value &&
    document.getElementById(`box_1_1`)== current_player){
        return "win";
    }

    if(document.getElementById(`box_1_3`).value == document.getElementById(`box_2_2`).value &&
    document.getElementById(`box_2_2`).value == document.getElementById(`box_3_1`).value &&
    document.getElementById(`box_1_3`)== current_player){
        return "win";
    }

    // checking for Draw

    var boxes = [];
   boxes = document.getElementsByClassName('box');
    
    for(i=0; i<boxes.length; i++){
        if(boxes[i].value == ""){
            return "continue";
        }
    }
    return "draw";
}

function reset_game(){
    current_player = "X";

    var boxes = document.getElementsByClassName("box");

    for(i=0; i<boxes.length; i++){
        boxes[i].value = "";
    }
}