function buttonSuccess(){
    if(document.getElementById(`searchFoodItem`).value===``){
        document.getElementById(`calculateNutrients`).disabled = true;
    }
    else document.getElementById(`calculateNutrients`).disabled = false;
}