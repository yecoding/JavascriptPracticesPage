//Toggle Menu
var showmenu = false;
function toggleMenu() {
	var navbar = document.getElementById('navbar');
	if(!showmenu){
		navbar.style.display = 'block';
	}else{
		navbar.style.display = 'none';
	}
	showmenu = !showmenu;
}

//Show Code function

function showCode(btnID, divID){
	console.log(btnID)
	console.log(divID)
	var divDisplay = document.getElementById(divID);

	var btnContent = document.getElementById(btnID);

	displayProp = window.getComputedStyle(divDisplay, null)['display'];

	if(displayProp == 'none'){
		divDisplay.style.display = "block";
		btnContent.innerHTML = "Hide Code";
	}else{
		divDisplay.style.display = "none";
		btnContent.innerHTML = "Show Code";
		
	}
}

//Magnifier Button

function enlargeCodeBoard(openBtnID, closeBtnID, divID,codeID){
	var popup = document.getElementById(divID);
	var codeShow = document.getElementById(codeID);
	var openBtn = document.getElementById(openBtnID);
	var closeBtn = document.getElementById(closeBtnID);

	popup.style.width = '100vw';
	popup.style.height = '100vh';
	popup.style.position = 'fixed';
	popup.style.left = '0';
	popup.style.top = '0';
	popup.style.padding = '15%';
	popup.style.zIndex = '1';
	popup.style.backgroundColor = 'rgba(0,0,0,0.4)';
	popup.style.overflow = 'auto';

	closeBtn.style.display = 'block';

	codeShow.style.margin = "0 auto";

	openBtn.style.display = 'none';
}

//Close Button

function closeCodeBoard(openBtnID, closeBtnID, divID,codeID){
	var popup = document.getElementById(divID);
	var codeShow = document.getElementById(codeID);
	var openBtn = document.getElementById(openBtnID);
	var closeBtn = document.getElementById(closeBtnID);

	closeBtn.style.display = 'none';

	popup.style.position = 'relative';
	popup.style.width = '100%';
	popup.style.height = 'auto';
	popup.style.padding = '0';
	popup.style.zIndex = '0';
	popup.style.backgroundColor = '#000000';
	popup.style.overflow = 'hidden';

	codeShow.style.margin = '0';

	openBtn.style.display = 'block';

}



//Double Write String
	var codeContent1 = document.getElementById('showCode01');
	codeContent1.addEventListener('click', function(){showCode('showCode01','Prct1Code')});

	var sbmtBtn1 = document.getElementById("submit1");

	sbmtBtn1.addEventListener('click', function(){doubleWrite('input1','result1')});

	function doubleWrite(stringInputID, stringOutputID){
		var inputText = document.getElementById(stringInputID).value;
		document.getElementById(stringOutputID).innerHTML = inputText + inputText;
	}

//Reverse Write String
	var codeContent2 = document.getElementById('showCode02');
	codeContent2.addEventListener('click', function(){showCode('showCode02','Prct2Code')});

	var sbmtBtn2 = document.getElementById("submit2");

	sbmtBtn2.addEventListener('click', function(){reverseWrite('input2','result2')});

	function reverseWrite(stringInputID, stringOutputID){
		var inputText = document.getElementById(stringInputID).value;
		var outputText = '';
		for(i=inputText.length-1;i>=0;i--){
			outputText += inputText[i];
		}
		document.getElementById(stringOutputID).innerHTML = outputText;
	}

//Swapping the first and the last
	var codeContent3 = document.getElementById('showCode03');
	codeContent3.addEventListener('click', function(){showCode('showCode03','Prct3Code')});

	var sbmtBtn3 = document.getElementById("submit3");

	submit3.addEventListener('click', function(){swapFandL('input3','result3')});

	function swapFandL(stringInputID, stringOutputID){
		var inputText = document.getElementById(stringInputID).value;

		var newStart = inputText[(inputText.length - 1)];

		var newEnd = inputText[0];

		var middle = inputText.slice(1, (inputText.length - 1));

		if(inputText.length<=1){
			document.getElementById(stringOutputID).innerHTML = inputText;
		}else{
			document.getElementById(stringOutputID).innerHTML = newStart + middle +newEnd;
		}	
	}

//Palindrome or Not
	var codeContent4 = document.getElementById('showCode04');
	codeContent4.addEventListener('click', function(){showCode('showCode04','Prct4Code')});

	var sbmtBtn4 = document.getElementById("submit4");

	sbmtBtn4.addEventListener('click', function(){palindromStr('input4','result4')});

	function palindromStr(stringInputID, stringOutputID){
		var inputStr = document.getElementById(stringInputID).value;
		if(inputStr.length<1){
			document.getElementById(stringOutputID).innerHTML = "";
		}

		else{
			var paliCnfrm = true;
			for(i=0; i<=(Math.floor(inputStr.length/2)-1);i++){
				if(inputStr[i] != inputStr[(inputStr.length-1-i)]){
					paliCnfrm = false;
					break;
				}
			}
			document.getElementById(stringOutputID).innerHTML = paliCnfrm;
		}
	}


//Character Count (not in order)

	// var sbmtBtn5 = document.getElementById('submit5');

	// submit5.addEventListener('click', characterCount);

	// function characterCount(){
	// 	var inputText5 = document.getElementById('input5').value;
		
	// 	var strNum = {};

	// 	for (i=0;i<=inputText5.length-1;i++){
	// 		if(strNum[inputText5[i]]==undefined){
	// 			strNum[inputText5[i]] = 1;
	// 		}else{
	// 			strNum[inputText5[i]] += 1;
	// 		}
	// 	}

	// 	var characterNames = Object.keys(strNum);

	// 	var outputStr = "";

	// 	for (i=0;i<=characterNames.length-1;i++){
	// 		outputStr += characterNames[i]+": "+strNum[characterNames[i]]+"; ";
	// 	}

	// 	document.getElementById('result5').innerHTML = outputStr;

	// }



	//Character Count in order
	var codeContent5 = document.getElementById('showCode05');
	codeContent5.addEventListener('click', function(){showCode('showCode05','Prct5Code')});

	var sbmtBtn5 = document.getElementById('submit5');

	submit5.addEventListener('click', function(){characterCount('input5','result5')});

	function characterCount(stringInputID, stringOutputID){
		var inputText5 = document.getElementById(stringInputID).value;
		var characterNam = [];
		var characterCounts =[];

		for(i=0;i<inputText5.length;i++){
			if(inputText5.length == 0){
				document.getElementById(stringOutputID).innerHTML = "";
			}else if(inputText5.length == 1){
				document.getElementById(stringOutputID).innerHTML = inputText5;
			}else{

				//Check if character has been collected
				var sameChrctr = false;
				for(k=0;k<characterNam.length;k++){
					if(inputText5[i]==characterNam[k]){
						sameChrctr = true;
						characterCounts[k] += 1;
					}
				}
				if(!sameChrctr){
					characterNam.push(inputText5[i]);
					characterCounts.push(1);
				}
			}
		}

		var strCombine ="";

		for(i=0;i<characterNam.length;i++){
			strCombine += characterNam[i] + " : " + characterCounts[i]+"; ";
		}
		document.getElementById(stringOutputID).innerHTML = strCombine;
	}



	//All Characters
	var codeContent6 = document.getElementById('showCode06');
	codeContent6.addEventListener('click', function(){showCode('showCode06','Prct6Code')});

	var sbmtBtn6 = document.getElementById('submit6');
	submit6.addEventListener('click', function(){allCharacters('input6','result6')});


	function allCharacters(stringInputID, stringOutputID){
		var inputText6 = document.getElementById(stringInputID).value;
		var strOutput = [];

			if(inputText6.length<1){
				document.getElementById(stringOutputID).innerHTML = "";
			}else if(inputText6.length == 1){
				document.getElementById(stringOutputID).innerHTML = inputText6;
			}else{
				for (i=0;i<=inputText6.length-1;i++){

					// test if strOuput already has the character
					var alreadyCollected = false;

					for (k = 0; k < strOutput.length; k++){
						if(inputText6[i] == strOutput[k]){
							alreadyCollected = true;
						}
					}

					if (!alreadyCollected){
						strOutput.push(inputText6[i]);
					}


				}
			}				

		document.getElementById(stringOutputID).innerHTML = strOutput;
	}

	//All odd characters
	var codeContent7 = document.getElementById('showCode07');
	codeContent7.addEventListener('click', function(){showCode('showCode07','Prct7Code')});

	var sbmtBtn7 = document.getElementById('submit7');
	submit7.addEventListener('click', function(){oddCharacters('input7','result7')});

	function oddCharacters(stringInputID, stringOutputID){
		var inputText7 = document.getElementById(stringInputID).value;
		var outputStr7 = "";
		for(i=0;i<inputText7.length;i+=2){
				outputStr7 += inputText7[i];
		}
		document.getElementById(stringOutputID).innerHTML = outputStr7;
	}

	
	//String Split
	var codeContent8 = document.getElementById('showCode08');
	codeContent8.addEventListener('click', function(){showCode('showCode08','Prct8Code')});

	var sbmtBtn8 = document.getElementById('submit8');
	sbmtBtn8.addEventListener('click', function(){stringSplit('input8','result8')});

	//Alternative Solution of String Split: remove extra blanks first

	// function stringSplit(stringInputID, stringOutputID){
	// 	var inputText8 = document.getElementById(stringInputID).value;
	// 	var tempStr = "";
	// 	for(i=0;i<inputText8.length;i++){
	// 		if(inputText8[i]!=" "){
	// 			tempStr += inputText8[i];
	// 		}else{
	// 			if(inputText8[i+1] != " "){
	// 			tempStr += " ";
	// 			}
	// 		}
	// 	}
	// 	console.log(tempStr);

	// 	if(tempStr[0]==" "){
	// 		var cutStr = tempStr.slice(1, tempStr.length+1);
	// 		console.log(cutStr);
	// 		if(cutStr[cutStr.length-1] == " "){
	// 			var finalStr = cutStr.slice(0, -1);
	// 			console.log("!!!");
	// 		}else{
	// 			finalStr = cutStr;
	// 		}
	// 	}else{
	// 		finalStr = tempStr;
	// 	}

	// 	document.getElementById(stringOutputID).innerHTML = finalStr.split(" ");
	// }



	//Remove start and end blanks
	function rmEndWhiteSpace (sInput){
		var chrctrIndexFrst;
		var chrctrIndexLst;
		for(i=0;i<sInput.length;i++){
			if(sInput[i]!=" "){
				chrctrIndexFrst = i;
				break;
			}
		}
		for(i=sInput.length-1;i>0;i--){
			if(sInput[i]!=" "){
				chrctrIndexLst = i;
				break;
			}
		}

		if((chrctrIndexFrst == undefined)||(chrctrIndexLst == undefined)){
			return("");
		}else{
			sOutput = sInput.slice(chrctrIndexFrst, chrctrIndexLst+1);
			return(sOutput);
		}
	}
	//Split string between blanks
	function stringSplit(stringInputID, stringOutputID){
		var inputText8 = document.getElementById(stringInputID).value;


		inputText8 = rmEndWhiteSpace(inputText8);

		var tempStr = "";
		for(i=0;i<inputText8.length;i++){
			if(inputText8[i]!=" "){
				tempStr += inputText8[i];
			}else{
				if(inputText8[i+1] != " "){
				tempStr += " ";
				}
			}
		}		
		document.getElementById(stringOutputID).innerHTML = tempStr.split(" ");
	}


	//Lowercase to Uppercase
	var codeContent9 = document.getElementById('showCode09');
	codeContent9.addEventListener('click', function(){showCode('showCode09','Prct9Code')});

	var sbmtBtn9 = document.getElementById('submit9');
	sbmtBtn9.addEventListener('click', function(){LowerToUpper('input9','result9')});


	alphabet = {
		a:"A", b:"B", c:"C", d:"D", e:"E", f:"F",
		g:"G", h:"H", i:"I", j:"J", k:"K", l:"L",
		m:"M", n:"N", o:"O", p:"P", q:"Q", r:"R",
		s:"S", t:"T", u:"U", v:"V", w:"W", x:"X",
		y:"Y", z:"Z"
	}

	function LowerToUpper(stringInputID, stringOutputID){
		var inputText9 = document.getElementById(stringInputID).value;

		var upperStr = "";
		for(i=0;i<inputText9.length;i++){
			if(alphabet[inputText9[i]]==undefined){
				upperStr += inputText9[i];
			}else{
				upperStr += alphabet[inputText9[i]];
			}
		}
		document.getElementById(stringOutputID).innerHTML = upperStr;

	}


	//Postcode Format (A0A 0A0)
	var codeContent10 = document.getElementById('showCode10');
	codeContent10.addEventListener('click', function(){showCode('showCode10','Prct10Code')});

	var sbmtBtn10 = document.getElementById('submit10');
	sbmtBtn10.addEventListener('click', function(){postcodeFmt('input10','result10')});


	function postcodeFmt(stringInputID, stringOutputID){
		//format input string
		var inputText10 = document.getElementById(stringInputID).value;
		var strMiddle = rmEndWhiteSpace(inputText10);
		var strTemp = strMiddle.toLowerCase();

		//At least 6 characters
		if(strMiddle.length<6){
			document.getElementById(stringOutputID).innerHTML = "Not Postcode Format";
			return;
		}

		//Extra characters
		if(strMiddle.length>6){
			for(i=3;i<strTemp.length-3;i++){
				if(strTemp[i]!=" "){
				document.getElementById(stringOutputID).innerHTML = "Not Postcode Format";
				return;
				}
			}
		}
		

		//Match Postcode format
		var isLetter = postcodeLetters(strTemp);
		var isNumbr = postcodeNumbers(strTemp);

		if(isLetter&&isNumbr){
			document.getElementById(stringOutputID).innerHTML = "Postcode Format Match!";
		}else{
			document.getElementById(stringOutputID).innerHTML = "Not Postcode Format";
		}

	}	

	//Postcode: positions of letters 
	function postcodeLetters(strInput){
			if(
			(alphabet[strInput[0]]!=undefined)
			&&(alphabet[strInput[2]]!=undefined)
			&&(alphabet[strInput[(strInput.length-2)]]!=undefined)
		){
			return true;
		}else{
			return false;
		}
	}
	//Postcode: positions of numbers
	function postcodeNumbers(strInput){
		var frst = ifNumber(strInput[1]);
		var snd = ifNumber(strInput[(strInput.length-3)]);
		var lst = ifNumber(strInput[(strInput.length-1)]);
		if(frst&&snd&&lst){
			return true;
		}else{
			return false;
		}
	}

	//if a character is a number
	function ifNumber(chrctr){
		allNum = ['0','1','2','3','4','5','6','7','8','9'];
		var itIsNum = false;
		for(i=0;i<allNum.length;i++){
			if(allNum[i] == chrctr){
				itIsNum = true;
				break;
			}
		}
		return itIsNum;
	}





