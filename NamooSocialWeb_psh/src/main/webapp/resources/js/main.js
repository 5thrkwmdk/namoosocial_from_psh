$(document).ready(function(){
	$.get(nsjs.ctx + "/mainList", function(data) {
//		appendRelation(data.user);
		appendNotFollowingsList(data.notFollowings);
		appendMessagesTr(data.messages);
	});

//	function appendRelation(user) {
//		//
//		var html = '';
//		
//		html += "<a href='${ctx}/followings'>팔로잉수 : " + user.followings.size() + "</a><br />";
//		html += "<a href='${ctx}/followers'>팔로워수 : " + user.followers.size() + "</a>";
//		
////		<a href="${ctx}/followings">팔로잉수 :${user.followings.size()}</a><br />
////		<a href="${ctx}/followers">팔로워수 :${user.followers.size()}</a>
//		$("#userRelation").append(html);
//	}
	
	function appendNotFollowingsList(notFollowings) {
		//
		var html = '';
		
		for(var i=0, length = notFollowings.length; i< length; i++) {
			//
			var notFollowing= notFollowings[i];
			html += "<i class='glyphicon glyphicon-user'></i>";
			html += "<p>" + notFollowing.name + "&nbsp;&nbsp;&nbsp;" + notFollowing.userId + "</p>";
			html += "&nbsp;<input type='button' onclick='location.href='${ctx}/follow/" + notFollowing.userId + "'' value='팔로우' class='btn btn-default' /><br/>";
			html += "";
		}
		$("#recommendFollowing").append(html);
	}
	
	function appendMessagesTr(messages) {
		//
		var html = '';
		
		for(var i=0, length = messages.length; i< length; i++) {
			//
			var message = messages[i];
			html += "<div class='row'><div class='col-md-8'>";
			html += "<h4>" + message.writer.name + "</h4>";
			html += "<h5>" + message.writer.userId + "&nbsp;" + message.reg_dt + "</h5>";
			html += "<p>" + message.contents + "</p>";
			html += "<br><br>";
			html += "<button class='btn btn-default'>More</button>&nbsp;&nbsp<input type='checkbox'/>";
			html += "</div></div><hr>";
		}
		$("#allMessages").append(html);
	}
});