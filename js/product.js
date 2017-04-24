
/*product页面下的作品展示手风琴效果*/
	show(0);
	function show(index){
		//获取box集合
		var mylis=document.getElementsByClassName("box");
		for (var i=0;i<mylis.length;i++) {
			//找到box下的ul集合  让ul的高为0
			mylis[i].getElementsByClassName("box_ul")[0].style.height="0px";
		}
		//让ul的高变为原来的高度
		mylis[index].getElementsByClassName("box_ul")[0].style.height="230px";
	}