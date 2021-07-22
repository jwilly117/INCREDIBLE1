
var firebaseConfig = {
    apiKey: "AIzaSyDlcbijm1mEcCm4lL2Sl2Wu8VL00NjWhdA",
    authDomain: "incredible-applications.firebaseapp.com",
    databaseURL: "https://incredible-applications-default-rtdb.firebaseio.com",
    projectId: "incredible-applications",
    storageBucket: "incredible-applications.appspot.com",
    messagingSenderId: "811804729674",
    appId: "1:811804729674:web:7ded90ff95e34888ed21b3"
};


// Click events for all of the add buttons
// $("#addExt").click(function(){
// alert("Hello, you have clicked the add installer button");


// })

$("#saveExt").click(function(){
    let fname = $("#extFirstName").val();
    let lname = $("#extLastName").val();
    let phone = $("#extPhone").val();
    let email = $("#extEmail").val();
    let town = $("#extHome").val();
    let notes = $("#extNotes").val();
    
    console.log(fname);
    console.log(lname);
    console.log(phone);
    console.log(email);
    console.log(town);
    console.log(notes);

    clearText();
})

function clearText() {
    $("#extFirstName").val('')
    $("#extLastName").val('');
}

$(".clickme").click(function() {
    console.log(this.val)
});
// Something to think about - Putting date stamped notes in the footer of pop ups / modals
// basically like a list format. 

