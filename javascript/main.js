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
	popup.style.zIndex = '1';
	popup.style.backgroundColor = 'rgba(0,0,0,0.4)';
	popup.style.overflow = 'auto';

	closeBtn.style.display = 'block';

	codeShow.style.width = "100%";
	codeShow.style.margin = "100px 0";

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

