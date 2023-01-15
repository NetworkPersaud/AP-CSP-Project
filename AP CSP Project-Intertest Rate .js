//Reset Tasks
console.clear();
hideElement("label5");
hideElement("label11");
setScreen("screen1");
console.log("Site Reset");
//Declaring Variables
var FirstName;
var LastName;
var Email;
var Password;
var FirstNameList = [];
var LastNameList = [];
var EmailList = [];
var PasswordList = [];
//UserName Variables Set
var InitialAmount;
var CompoundRate;
var BankName;
var CompoundMethod;
//Calculation Variable Set 
var R;
var N;
var R_Over_N;
var Amount;
//Math Equation Variables Set
var FactorNumber;
var Number = 1;
//Compound Interest Proof Set
console.log("Variables Set");
//Ending Setting Variables
//Tiggers
onEvent("button1", "click", function( ) {
	//Moves From Welcome Screen to Login Screen
	playSound("sound://category_tap/puzzle_game_organic_wood_block_tone_tap_4_app_click.mp3", false);
	setScreen("screen2");
});
onEvent("button2", "click", function( ) {
	//Login Screen to Home Screen
	playSound("sound://category_tap/puzzle_game_organic_wood_block_tone_tap_4_app_click.mp3", false);
	setScreen("screen3");
	UserInfoSet();
	StartHomeScreen();
});
onEvent("button7", "click", function( ) {
	//Sets the Calucation Variab;e
	playSound("sound://category_tap/puzzle_game_organic_wood_block_tone_tap_4_app_click.mp3", false);
	console.log("Calculation Informatuon Submitted");
	setScreen("screen4");
	SetValueToCalculation();
	TranslationToNextPage();
	//Running Math
	RunMath(InitialAmount, CompoundRate, BankName, CompoundMethod);
});
onEvent("button5", "click", function( ) {
	//Selecting the Compound Compound Annually
	playSound("sound://category_tap/puzzle_game_organic_wood_block_tone_tap_4_app_click.mp3", false);
	console.log("Compound Annually Selected");
	hideElement("label11");
	showElement("label5");
	CompoundMethod = "Annually";
});
onEvent("button6", "click", function( ) {
	//Selecting The Monthly
	playSound("sound://category_tap/puzzle_game_organic_wood_block_tone_tap_4_app_click.mp3", false);
	console.log("Compound Monthly Selected");
	hideElement("label5");
	showElement("label11");
	CompoundMethod = "Monthly";
});
onEvent("button3", "click", function( ) {
  //Change Screen to Home
  playSound("sound://category_tap/puzzle_game_organic_wood_block_tone_tap_4_app_click.mp3", false);
	setScreen("screen3");
});
onEvent("button4", "click", function( ) {
  //Change Screen to Set Variables
  playSound("sound://category_tap/puzzle_game_organic_wood_block_tone_tap_4_app_click.mp3", false);
	setScreen("screen5");
	setText("label31", FirstNameList[0]);
	setText("label34", LastNameList[0]);
	setText("label39", EmailList[0]);
});
onEvent("button9", "click", function( ) {
  //Change back to homescreen
  playSound("sound://category_tap/puzzle_game_organic_wood_block_tone_tap_4_app_click.mp3", false);
	setScreen("screen3");
});
onEvent("button8", "click", function( ) {
  //Change to proof compound intertest screen
  playSound("sound://category_tap/puzzle_game_organic_wood_block_tone_tap_4_app_click.mp3", false);
	setScreen("screen6");
});
onEvent("button10", "click", function( ) {
  //Factorial Number
  playSound("sound://category_tap/puzzle_game_organic_wood_block_tone_tap_4_app_click.mp3", false);
	FactorNumber = getNumber("text_input2");
  //Code here uses all 3, Sequences, Selection, Iteration
  if (FactorNumber == 5) {
    for (var i = 1; i < FactorNumber + 1; i++) {
     Number = Number * i;
	}
    setText("label54", Number);
    return Number;
  }
});
onEvent("button13", "click", function( ) {
  //Return to Home screen
  playSound("sound://category_tap/puzzle_game_organic_wood_block_tone_tap_4_app_click.mp3", false);
  setScreen("screen3");
});
//Functions
function UserInfoSet() {
  //Setting the Text to the variables
  FirstName = getText("text_input1");
  LastName = getText("text_input3");
  Email = getText("text_input6");
  Password = getText("text_input7");
  //Appending The UserInfo List
  appendItem(FirstNameList, FirstName);
  appendItem(LastNameList, LastName);
  appendItem(EmailList, Email);
  appendItem(PasswordList, Password);
}
function StartHomeScreen() {
  //Welcoming you
  setText("label4", "Welcome, " + (FirstName  + (" " + LastName)));
}
function SetValueToCalculation() {
  //Taking Vaules and setting variables
  InitialAmount = getNumber("text_input8");
  CompoundRate = getNumber("text_input9");
  BankName = getText("text_input10");
}
function TranslationToNextPage() {
  //Setting text for Bank Info
  setText("label13", "$" + InitialAmount);
  setText("label15", CompoundRate + "%");
  setText("label17", BankName + "");
  setText("label19", CompoundMethod);
}
function RunMath(I, C, B, C) {
  show();
  penUp();
  // A = P(1 + r/n)^nt
  R = CompoundRate / 100;
  if (CompoundMethod == "Annually") {
    N = 1;
    R_Over_N = R / N;
    //1 Year
    Amount = InitialAmount * (Math.pow(1 + R_Over_N, N * 1));
Amount = Math.round(Amount);
    setText("label21", "1 Year");
    setText("label6", "$" + Amount);
    // 3 Years
    Amount = InitialAmount * (Math.pow(1 + R_Over_N, N * 3));
Amount = Math.round(Amount);
setText("label24", "3 Years");
    setText("label20", "$" + Amount);
    //6 Years
    Amount = InitialAmount * (Math.pow(1 + R_Over_N, N * 6));
Amount = Math.round(Amount);
    setText("label25", "6 Years");
    setText("label22", "$" + Amount);
    //12 Years
    Amount = InitialAmount * (Math.pow(1 + R_Over_N, N * 12));
Amount = Math.round(Amount);
    setText("label26", "12 Years");
    setText("label23", "$" + Amount);
    //24 Years
    Amount = InitialAmount * (Math.pow(1 + R_Over_N, N * 24));
Amount = Math.round(Amount);
    setText("label28", "24 Years");
    setText("label27", "$" + Amount);
    penUp();
    show();
    moveTo(0, 235);
    penWidth(3);
    penDown();
    penColor("black");
    turnRight(180);
    for (var i = 0; i < 4; i++) {
      moveForward(315);
      turnLeft(90);
    }
    penUp();
    hide();
  }
  if (CompoundMethod == "Monthly") {
    N = 12;
    R_Over_N = R / N;
    //1 Month
    Amount = InitialAmount * (Math.pow(1 + R_Over_N, N * 0.08333));
    Amount = Math.round(Amount);
    setText("label21", "1 Month");
    setText("label6", "$" + Amount);
    //3 Month
    Amount = InitialAmount * (Math.pow(1 + R_Over_N, N * 0.25));
Amount = Math.round(Amount);
    setText("label24", "3 Month");
    setText("label20", "$" + Amount);
    //6 Month
   Amount = InitialAmount * (Math.pow(1 + R_Over_N, N * 0.50));
Amount = Math. round(Amount);
    setText("label25", "6 Month");
    setText("label22", "$" + Amount);
    //12 Month
    Amount = InitialAmount * (Math.pow(1 + R_Over_N, N * 1));
Amount = Math. round(Amount);
    setText("label26", "12 Month");
    setText("label23", "$" + Amount);
    //24 Months
    Amount = InitialAmount * (Math.pow(1 + R_Over_N, N * 2));
Amount = Math. round(Amount);
    setText("label28", "24 Month");
    setText("label27", "$" + Amount);
    penUp();
    show();
    moveTo(0, 235);
    penWidth(3);
    penDown();
    penColor("black");
    turnRight(180);
    for (var i = 0; i < 4; i++) {
      moveForward(315);
      turnLeft(90);
    }
    penUp();
    hide();
  }
}
//End Of Script Of Code

