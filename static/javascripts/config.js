
function getCookie(c_name) {
	if (document.cookie.length > 0) {
		var c_start = document.cookie.indexOf(c_name + "=");
		if (c_start != -1) {
			c_start = c_start + c_name.length + 1;
			c_end = document.cookie.indexOf(";", c_start);
			if (c_end == -1) {
				c_end = document.cookie.length;
			}
			return unescape(document.cookie.substring(c_start, c_end));
		}
	}
	return "";
}

function setCookie(c_name, value, expiredays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	document.cookie = c_name + "=" + escape(value) +
		((expiredays == null) ? "" : "; expires=" + exdate.toGMTString());
}

function talk(data) {
	var time = moment().format('YYYY/MM/DD H:mm');
	var src = data;
	var default_user = "PTT_AKB48";
	var default_talk = "";
	var uid = "";
	var uid_talk = "";
	var username = getCookie('username');
	var user_talk = getCookie('user_talk');

	if (username != null && username != "") {
		//console.log("有Cookie:" + username);
		uid = username;
	} else {
		//console.log("沒有Cookie:" + username);
		uid = default_user;
	}

	swal({
		title : "暱稱(ID)",
		text : "請輸入暱稱(ID)",
		type : "input",
		showCancelButton : true,
		closeOnConfirm : false,
		animation : "slide-from-top",
		inputPlaceholder : "輸入你的暱稱(ID)",
		inputValue : uid
	}, function (inputValue) {
		if (inputValue === false)
			return false;
		if (inputValue === "") {
			swal.showInputError("你需要輸入你的暱稱(ID)哦");
			return false
		}
		setCookie('username', inputValue, 365);

		if (user_talk != null && user_talk != "") {
			//console.log("有Cookie:" + user_talk);
			uid_talk = user_talk;
		} else {
			//console.log("沒有Cookie:" + user_talk);
			uid_talk = default_talk;
		}

		swal({
			title : "想說的話",
			text : "歡迎告白o'_'o",
			type : "input",
			showCancelButton : false,
			closeOnConfirm : false,
			animation : "slide-from-top",
			inputPlaceholder : "真的沒有寫說的話嗎o'_'o",
			inputValue : uid_talk
		}, function (inputValue) {
			setCookie('user_talk', inputValue, 365);
			var val ={
				time : time,
				uid : uid,
				str : str,
				src : src,
				talk : inputValue
			}
			post_request(JSON.stringify(val));
			check_request_song(str, src);
		});
	});
}

function post_request(val) {
	//console.log("ajax val=" + val);
	$.ajax({
		url : 'confirm',
		type : 'POST',
		dataType : "json",
		contentType : "application/json",
		data : val,
		success : function (response) {
			//  console.log(response);
		}
	});
}

function check_request_song(str, src) {
	swal({
		title : "點歌成功",
		text : "你已經成功點了\n\n『" + src + "\n\n" + str + "』\n\n如還需要點歌請按確定，否則請按取消進入播放清單",
		type : "warning",
		showCancelButton : true,
		confirmButtonColor : "#DD6B55",
		confirmButtonText : "確定",
		closeOnConfirm : true,
		closeOnCancel : false
	}, function (isConfirm) {
		if (!isConfirm) {
			location.href = "list";
		}
	});
}

function back_home() {
	location.href = "/";
}

$(function () {
	$("#gotop").click(function () {
		jQuery("html,body").animate({
			scrollTop : 0
		}, 1000);
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('#gotop').fadeIn("fast");
		} else {
			$('#gotop').stop().fadeOut("fast");
		}
	});
});

/*
$(document).ready(function(){
$(".flip").click(function(){
$(".panel").slideToggle("slow");
});
});*/

//測試
$(document).ready(function () {
	$("table tr:first-child").click(function () {
		$(this).nextAll().fadeToggle("slow");
	});
});

$stat = 1;
$(document).ready(function () {
	$('#switch').click(function () {
		/*$('tr:not(:first-child)').toggleClass("hide_content");*/
		if ($stat == 1) {
			$('table tr:not(:first-child)').fadeIn("slow");
			$(this).val('全部收合');
			$stat = 0;
		} else {
			$('table tr:not(:first-child)').fadeOut("slow");
			$(this).val('全部展開');
			$stat = 1;
		}
	});
});

$(function () {
	// run the currently selected effect
	function runEffect() {
		// get effect type from
		//var selectedEffect="blind";
		var selectedEffect = "clip";
		//var selectedEffect="fold";
		//var selectedEffect="puff";
		//var selectedEffect="slide";

		// most effect types need no options passed by default
		var options = {};
		// some effects have required parameters
		if (selectedEffect === "scale") {
			options = {
				percent : 100
			};
		} else if (selectedEffect === "size") {
			options = {
				to : {
					width : 280,
					height : 185
				}
			};
		}
		// run the effect
		$("#effect").show(selectedEffect, options, 1000);
	};

	$(document).ready(function () {
		runEffect();
	});

	$("#effect").hide();
});
