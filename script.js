function showfullstory() {
	let p2= document.getElementById("p2");
	let expandP = document.getElementById("expandP");
	
	if(p2.classList.contains("hidden")){
		p2.classList.remove("hidden");
	expandP.innerHTML = "See Less...";
	}
	else {
		p2.classList.add("hidden");
	expandP.innerHTML = "See More...";
	}
}
function showcompletestory() {
	let q2= document.getElementById("q2");
	let contractP = document.getElementById("contractP");
	
	if(q2.classList.contains("hide")){
		q2.classList.remove("hide");
	contractP.innerHTML = "See Less...";
	}
	else {
		q2.classList.add("hide");
	contractP.innerHTML = "See More...";
	}
}
function showGrade(){
	let questA = document.getElementById("quest-a").value;
	let questB = document.getElementById("quest-b").value;
	let questC = document.getElementById("quest-c").value;
	let questD = document.getElementById("quest-d").value;
	let gradeDiv = document.getElementById("grade");
	gradeDiv.classList.remove("sneak");
	let count = 0
	let resultA = document.getElementById("result-a");
	let resultB = document.getElementById("result-b");
	let resultC = document.getElementById("result-c");
	let resultD = document.getElementById("result-d");
	let theScore = document.getElementById("the-score");
	let answerA = "Incorrect";
	let answerB = "Incorrect";
	let answerC = "Incorrect";
	let answerD = "Incorrect";
	if(questA == "truth-a"){
		answerA = "Correct";
		count ++
	}
	if(questB == "truth-b"){
		answerB = "Correct";
		count ++
	}
	if(questC == "truth-c"){
		answerC = "Correct";
		count ++
	}
	if(questD == "truth-d"){
		answerD = "Correct";
		count ++
	}
	resultA.innerHTML = "Question 1 - " + answerA;
	resultB.innerHTML = "Question 2 - " + answerB;
	resultC.innerHTML = "Question 3 - " + answerC;
	resultD.innerHTML = "Question 4 - " + answerD;
	theScore.innerHTML = "Score: " + count + "/4";
}
function changeSlide(){
	let img1= document.getElementById("pimg1");
	let img2= document.getElementById("pimg2");
	let img3= document.getElementById("pimg3");
	let img4= document.getElementById("pimg4");
	let img5= document.getElementById("pimg5");
	if (img1.classList.contains("visible")){
		img1.classList.remove("visible");
		img1.classList.add("hidden");
		img2.classList.remove("hidden");
		img2.classList.add("visible");
	}
	else if (img2.classList.contains("visible")){
		img2.classList.remove("visible");
		img2.classList.add("hidden");
		img3.classList.remove("hidden");
		img3.classList.add("visible");
	}
	else if (img3.classList.contains("visible")){
		img3.classList.remove("visible");
		img3.classList.add("hidden");
		img4.classList.remove("hidden");
		img4.classList.add("visible");
	}
	else if (img4.classList.contains("visible")){
		img4.classList.remove("visible");
		img4.classList.add("hidden");
		img5.classList.remove("hidden");
		img5.classList.add("visible");
	}
	else if (img5.classList.contains("visible")){
		img5.classList.remove("visible");
		img5.classList.add("hidden");
		img1.classList.remove("hidden");
		img1.classList.add("visible");
	}
}
setInterval(changeSlide, 1000);






