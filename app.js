'use strict';

var numOfTotalQuestions = 0;
var numOfQuestionsAnswerd = 0;
var percentageComplete = 0;
var percentageNotComplete = 0;
var keyValueArray = [];
var keyArray = [];
var storeData;
var answers = {};
var barChart = null;
var PieChart = null;
var sansCriticalControlsBarChartLabelsArray = [];
var highSeaSecScore = 0;
var midSeaSecScore = 0;
var lowSeaSecScore = 0;

function checkLocalStorageExistance(){
  if(localStorage.answers) {
    var storedAnswersData = localStorage.getItem('answers');
    var answersData = JSON.parse(storedAnswersData);
    answers = answersData;
    console.log(answersData);
  }
}

function updateLocalStorage (){
  var storedAnswersData = JSON.stringify(answers);
  localStorage.setItem('answers',storedAnswersData);
  console.log('Local storage has been updated.');
}

function dataSelected(event) {
  var objKey = event.target.id;
  answers[objKey] = event.target.value;
  // console.log('The KEY '' + event.target.id + '' was updated with a VALUE of '' + event.target.value + ''');
}
function objectKeyExtraction() {
  //keyArray = [];
  keyArray = Object.keys(answers);
  // console.log(keyArray);
}

function objectKeyValueExtraction() {
  keyValueArray = [];
  keyValueArray = Object.keys(answers).map(function(e) {
    return parseInt(answers[e]);
  });
  // console.log(keyValueArray);
}

function securityScoresObjectKeyValueExtraction() {
  highSeaSecScore = 0;
  midSeaSecScore = 0;
  lowSeaSecScore = 0;
  keyValueArray = [];
  keyValueArray = Object.keys(answers).map(function(e) {
    return parseInt(answers[e]);
  });
  for(var i = 0; i < keyValueArray.length; i++) {
    if(keyValueArray[i] < 6) {
      lowSeaSecScore += keyValueArray[i];
    } else if(keyValueArray[i] >= 6 && keyValueArray[i] < 8) {
      midSeaSecScore += keyValueArray[i];
    } else if(keyValueArray[i] >= 8) {
      highSeaSecScore += keyValueArray[i];
    }
  }
  // console.log(keyValueArray);
}

function countNumOfTotalQuestions() {
  numOfTotalQuestions = 0;
  var selectsArray = [];
  var select = [];
  selectsArray = document.getElementsByTagName('select');
  for (var i = 0; i < selectsArray.length; i++) {
    numOfTotalQuestions++;
  }
  // console.log('The number of total questions (or selects) is: ' + numOfTotalQuestions);
}

function countNumOfQuestionsAnswerd() {
  numOfQuestionsAnswerd = 0;
  objectKeyValueExtraction();
  for (var i = 0; i < keyValueArray.length; i++) {
    numOfQuestionsAnswerd++;
  }
  // console.log('The number of questions answered is: ' + numOfQuestionsAnswerd);
}

function calcPercentageComplete() {
  percentageComplete = 0;
  percentageNotComplete = 0;
  percentageComplete = numOfQuestionsAnswerd / numOfTotalQuestions;
  percentageNotComplete = 1 - percentageComplete;
  // console.log('The percentage of questionaire completed is: ' + percentageComplete);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function shadeColor(color, percent) {
  var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
  return '#'+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

function recreateCanvas(id, width, height) {
  // To fix the chartjs bug when you mouse over the chart, it changes
  //  after answering the 2nd question
  var canvas = document.getElementById(id);
  if (canvas) {
    canvas.parentNode.removeChild(canvas);
  }
  canvas = document.createElement('canvas');
  canvas.id = id;
  canvas.width = width;
  canvas.height = height;
  document.getElementById('chartContainer').appendChild(canvas);
  return canvas;
}

function renderPercentageCompleteChart() {
  var canvas = recreateCanvas('percentageChart', '300', '300');
  var ctx = canvas.getContext('2d');
  var chartData = [{
    value: numOfQuestionsAnswerd,
    color: '#69BE28',
    highlight: '#457E1A',
    label: 'Questions Answered'
  }, {
    value: numOfTotalQuestions - numOfQuestionsAnswerd,
    color: '#002C5F',
    highlight: '#002244',
    label: 'Remaining Questions'
  }];
  new Chart(ctx).Pie(chartData);
}

function renderIndividualBarChart() {
  var canvas = recreateCanvas('individualBarChart', '300', '300');
  var ctx = canvas.getContext('2d');
  var chartData = {
    labels: keyArray,
    datasets: [{
      label: 'My dataset',
      fillColor: '#69BE28',
      strokeColor: '#002244',
      highlightFill: '#457E1A',
      highlightStroke: '#002C5F',
      data: keyValueArray
    }]
  };
  new Chart(ctx).Bar(chartData);
}

// The data used in the 2nd chart (individualBarChart) and
//  3rd chart (individualPieChart) is the same as instructed
function renderIndividualPieChart() {
  var canvas = recreateCanvas('individualPieChart', '300', '300');
  var ctx = canvas.getContext('2d');
  var chartData = [];
  for (var i = 0; i < keyArray.length; i++) {
    var rcolor = getRandomColor();
    chartData.push({
      label: keyArray[i],
      value: keyValueArray[i],
      color: rcolor,
      highlight: shadeColor(rcolor, 0.3)
    });
  }
  new Chart(ctx).PolarArea(chartData);

}

function renderIndividualPolarChart() {
  var canvas = recreateCanvas('buildSansCriticalControlsPolarChartHere', '300', '300');
  var polarChart = canvas.getContext('2d');


  var polarData = [
    {
      value: highSeaSecScore,
      color:'#69BE28',
      highlight: '#457E1A',
      label: 'High'
    },
    {
      value: midSeaSecScore,
      color: '#002C5F',
      highlight: '#002244',
      label: 'MID'
    },
    {
      value: lowSeaSecScore,
      color: '#85cae5',
      highlight: '#213D5A',
      label: 'LOW'
    }
  ];

  var polarOptions = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : true,
    //String - The colour of each segment stroke
    segmentStrokeColor : '#fff',
    //Number - The width of each segment stroke
    segmentStrokeWidth : 2,
    //The percentage of the chart that we cut out of the middle.
    percentageInnerCutout : 50,
    //Boolean - Whether we should animate the chart
    animation : true,
    //Number - Amount of animation steps
    animationSteps : 100,
    //String - Animation easing effect
    animationEasing : 'easeOutBounce',
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,
	  //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : true,
	  //Function - Will fire on animation completion.
    onAnimationComplete : null
  };

  new Chart(polarChart).PolarArea(polarData);
}

function buildTables(tableDataArray, tableHeaderArray, buildLocation) {
  var tableLocation = document.getElementById(buildLocation);
  var table = document.createElement('table');
  var trEL = document.createElement('tr');

  if (tableLocation) {
    tableLocation.appendChild(table);
  }
  table.appendChild(trEL);

  //Build the table headers
  for (var i = 0; i < recomendationsHeaderArray.length; i++) {
    var thEL = document.createElement('th');
    thEL.textContent = recomendationsHeaderArray[i];
    trEL.appendChild(thEL);
  }
  //Build the table rows
  for (var i = 0; i < tableDataArray.length; i++) {
    var trEL = document.createElement('tr');
    table.appendChild(trEL);
    for (var j = 0; j < tableDataArray[i].length; j++) {
      var tdEl = document.createElement('td');
      tdEl.textContent = tableDataArray[i][j];
      trEL.appendChild(tdEl);
    }
  }
}

function checksOnNewPageRunDashboard() {
  if(document.getElementById('dashboard')){
    //Check for and retrieve local storage
    checkLocalStorageExistance();
    //Calc and extract data
    countNumOfTotalQuestions();
    countNumOfQuestionsAnswerd();
    calcPercentageComplete();
    securityScoresObjectKeyValueExtraction();
    objectKeyExtraction();
    //Render all four charts
    renderPercentageCompleteChart();
    renderIndividualBarChart();
    renderIndividualPieChart();
    renderIndividualPolarChart();
  }
}

function checksOnNewPageRunQuestionnaire() {
  if(document.getElementById('questionnaire')) {
    //Checn for and retrieve local storage
    checkLocalStorageExistance();
    //Calc and extract data
    countNumOfTotalQuestions();
    countNumOfQuestionsAnswerd();
    calcPercentageComplete();
    securityScoresObjectKeyValueExtraction();
    objectKeyExtraction();
    //Render percentage and polar sea-sec-score charts
    renderPercentageCompleteChart();
    renderIndividualPolarChart();
  }
}

function checksOnNewPageRunRecommendations() {
  if(document.getElementById('recommendations')){
    if(document.getElementById('buildRecommendationTableHere')){
      buildTables(recomendationsArray,recomendationsHeaderArray,'buildRecommendationTableHere');
    }
    if(document.getElementById('storedData')){
      //Calc and extract data
      checkLocalStorageExistance();
      //Calc and extract data
      countNumOfTotalQuestions();
      countNumOfQuestionsAnswerd();
      calcPercentageComplete();
      securityScoresObjectKeyValueExtraction();
      objectKeyExtraction();
      //Render polar sea-sec-score and pie charts
      renderIndividualPolarChart();
      renderIndividualPieChart();
    }
  }
}

function dataSelectedHandler(){
  //Calc and extract data
  dataSelected(event);
  countNumOfTotalQuestions();
  countNumOfQuestionsAnswerd();
  calcPercentageComplete();
  securityScoresObjectKeyValueExtraction();
  objectKeyExtraction();
  //Update local storage
  updateLocalStorage();
  //Render polar sea-sec-score and pie charts
  renderPercentageCompleteChart();
  renderIndividualPolarChart();
  // console.log('The KEY "' + event.target.id + '" was updated with a VALUE of "' + event.target.value + '"');
}

//Eventlistenr to update some data
// storedData.addEventListener('change',dataSelected);
//Eventlistenr to update questionnaire page
if(document.getElementById('questionnaire')) {
  storedData.addEventListener('change',dataSelectedHandler);
  console.log('The \'checksOnNewPageRunQuestionnaire\' event listener ran.');
}

checksOnNewPageRunQuestionnaire();
checksOnNewPageRunRecommendations();
checksOnNewPageRunDashboard();
