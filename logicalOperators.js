function login(firstName,lastName,gender,age,email,education){

    if(gender == "Male" && ( education == "Graduation" || education == "post Graduation")){
        alert("You are eligible for the job");
    }else{
        alert("You are not eligible for the job");
    }
}
