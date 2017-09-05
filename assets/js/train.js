var config = {
   apiKey: "AIzaSyBtmXpIiX7akXlaIdiV8PwifeH7vlqV2zQ",
   authDomain: "train-departures.firebaseapp.com",
   databaseURL: "https://train-departures.firebaseio.com",
   projectId: "train-departures",
   storageBucket: "train-departures.appspot.com",
   messagingSenderId: "75786081357"
 };
 firebase.initializeApp(config);

 var database = firebase.database();

 var tName = "";
 var dest = "";
 var freq = "";
 var nxtArr = "";
 var minA = "";
 var table = $('')

 $('.btn-primary').on("click", function() {
   event.preventDefault();

   tName = $('#tName').val().trim();
   dest = $('#dest').val().trim();
   freq = $('#freq').val().trim();


   database.ref().set({
        tName: tName,
        dest: dest,
        freq: freq,
        nxtArr: nxtArr
      });

      database.ref().on("value", function(snapshot) {

            // Print the initial data to the console.
            console.log(snapshot.val());

            // Log the value of the various properties
            console.log(snapshot.val().tName);
            console.log(snapshot.val().dest);
            console.log(snapshot.val().freq);
            console.log(snapshot.val().nxtArr);

            // Change the HTML
            $("#new").html(snapshot.val().tName + " | " + snapshot.val().dest + " | " + snapshot.val().freq + " | " + snapshot.val().nxtArr);

            // If any errors are experienced, log them to console.
          }, function(errorObject) {
            console.log("The read failed: " + errorObject.code);
          });
    });
