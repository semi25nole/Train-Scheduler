var config = {
  apiKey: "AIzaSyBtmXpIiX7akXlaIdiV8PwifeH7vlqV2zQ",
  authDomain: "train-departures.firebaseapp.com",
  databaseURL: "https://train-departures.firebaseio.com",
  projectId: "train-departures",
  storageBucket: "train-departures.appspot.com",
  messagingSenderId: "75786081357"
};
firebase.initializeApp(config);

var name = "";
var dest = "";
var time = "";
var freq = "";
var next = "";
var arr = "";

var database = firebase.database();


$('.btn-primary').on('click', function() {

  event.preventDefault();

  name = $('#name').val();
  dest = $('#dest').val();
  freq = $('#freq').val();
  time = $('#time').val();

  var newTime = moment(time, 'hh:mm').format('LLL');

  var change = moment(newTime).subtract(1, "years");

  var diff = moment().diff(moment(change), 'minutes');

  var remaining = diff % freq;

  arr = remaining;

  database.ref().push({
    name: name,
    dest: dest,
    time: newTime,
    freq: freq,
    arr: arr
  })

  $('#name').val("");
  $('#dest').val("");
  $('#freq').val("");
  $('#time').val("");

});
database.ref().orderByChild('dataAddded').on('child_added', function(snapshot) {
  var sv = snapshot.val();
  var add = '<tr><td>' + sv.name + '</td><td>' + sv.dest + '</td><td>' + sv.freq + '</td><td>' + sv.time + '</td><td>' + sv.arr + '</td><td>';
  $('#tbod').append(add);

});
