
    console.log("hello")
  // Your web app's Firebase configuration
//   var config = {
//     apiKey: "AIzaSyDP2v5i1tWtRocBZGlIu_5NciiolBk4VMk",
//     authDomain: "train-schedulerr.firebaseapp.com",
//     databaseURL: "https://train-schedulerr.firebaseio.com",
//     projectId: "train-schedulerr",
//     storageBucket: "train-schedulerr.appspot.com",
//     messagingSenderId: "766239664707",
//     appId: "1:766239664707:web:a4ebbdb1b76924f5"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(config);
     
//       // Initialize Firebase
    



//  var database= firebase.database();


      $(".submit").on("click", function() {
       console.log("clicked")
    var trainName= $("#train-name-input").val();
    var addDestination= $("#destination-input").val();
   
    var firstTrain = moment($("#first-train-input").val().trim(),"HH:mm").format("hh:mm")
    console.log(firstTrain)
    console.log(addDestination)
    console.log(trainName)
    return false;
    // // var newTrain= {
    //     trainName: trainName,
    //     destination: addDestination,
    //     train: firstTrain,
    //     freq: frequency,
    // // }
    // database.ref().push({  
    //      trainName: trainName,
    //         destination: addDestination,
    //         train: firstTrain,
    //         freq: frequency})

    // console.log(newTrain.trainName)
    // // return false;

//     var time= moment();
//     console.log(time);


//  $("#train-name-display").text(addTrain);
//  $("#destination-display").text(addDestination);
//  $("#train-time-display").text(trainTime);





















});