setInterval("img_display()",800);
var img_sequence = ["101-01.jpg","102-01.jpg","103-01.jpg","104-01.jpg","105-01.jpg","106-01.jpg"];
var number_of_image = img_sequence.length;
var i = 0;               
function img_display(){
	document.getElementById("OPOP").innerHTML  = "<img src='"+img_sequence[i]+"' width=250 height=250>";        
	i++;
	if(i == number_of_image){
		i=5;
	}
}

setTimeout("time_count()",8000);
function time_count(){
	location.href= ("https://likeneverdie.github.io/uidd2017/"); 
}
