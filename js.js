var ar_subs=[];
ar_subs.push(["Clay TQ","https://scontent-lim1-1.xx.fbcdn.net/v/t1.6435-9/70911183_769976830089545_8786856317080829952_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFZocH1ksl7QWyeU97pnmg1recENjJNfXGt5wQ2Mk19cRH64_dcO1x4BvJDZU_gF4s&_nc_ohc=2vKHl52AsbIAX9Yn4jn&_nc_ht=scontent-lim1-1.xx&oh=00_AT-YDKH-x9KmMgkCSravls4mzYnPMKucbRBkMrc6yym8pw&oe=6304A141"]);
ar_subs.push(["Jesus Chavez","https://elcomercio.pe/resizer/i5EwTXR5oWy3iUDjUKeQl-prqGk=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/IAZ53YXFIZCLXOQHCTT4JDQB24.jpg"]);
		var time_seg={{durationAnimation}};
		var tam_subs=ar_subs.length;
		var start_pos=1;
		document.getElementById("name-sub").innerHTML=ar_subs[0][0];
		document.getElementById("img-sub").src=ar_subs[0][1];
		var timer=setInterval(function(){
			document.getElementById("name-sub").innerHTML=ar_subs[start_pos][0];
			document.getElementById("img-sub").src=ar_subs[start_pos][1];
			if (start_pos+1>=tam_subs) {
				start_pos=0;
			}else{
				start_pos++;
			}
		},1000*time_seg);