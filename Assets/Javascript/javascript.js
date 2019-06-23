
setInterval(function() {
  $(".current-time").html(moment(moment()).format("hh:mm:ss"));
    }, 1000);
   
  // Your web app's Firebase configuration
  console.log("hello")
  var config = {
    apiKey: "AIzaSyDP2v5i1tWtRocBZGlIu_5NciiolBk4VMk",
    authDomain: "train-schedulerr.firebaseapp.com",
    databaseURL: "https://train-schedulerr.firebaseio.com",
    projectId: "train-schedulerr",
    storageBucket: "train-schedulerr.appspot.com",
    messagingSenderId: "766239664707",
    appId: "1:766239664707:web:a4ebbdb1b76924f5"
  };
  // // Initialize Firebase
  var clickcounter=0;
  firebase.initializeApp(config);
 var database= firebase.database();
$(".submit").on("click", function(event) {
  event.preventDefault();
    var trainName= $("#train-name-input").val();
    var destination= $("#destination-input").val();
    clickcounter ++;
    var firstTrain = moment($("#first-train-input").val().trim(), "HH:mm").format("hh:mm")

    var frequency = $("#frequency-input").val().trim();
    // console.log(firstTrain)
    console.log(destination)
    console.log(trainName)
    console.log(frequency)
    console.log(firstTrain)
    var newTrain= {
        clickcounter: clickcounter,
        trainName: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
    }
    database.ref().push(newTrain)

//     database.ref().on("child_added", function(childSnapshot) {
//       var firstTimeConverted = moment(childSnapshot.val().firstTrain, "hh:mm").subtract(1, "days");
//       var timeDiff = moment().diff(moment(firstTimeConverted), "minutes");
//       var remainder = timeDiff % childSnapshot.val().frequency;
//       var minsUntilTrain = childSnapshot.val().frequency - remainder;
//       var nextTrainTime = moment().add(minsUntilTrain, "minutes");
//       $("#table-body").append("<tr><td>" + childSnapshot.val().trainName + "</td><td>" + childSnapshot.val().destination + "</td><td>" +
//       childSnapshot.val().frequency + "</td><td>" + moment(nextTrainTime).format("hh:mm") + "</td><td>" + minsUntilTrain + "</td></tr>");
//     });
});