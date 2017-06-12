
/*nav static at top*/
setInterval(function(){
		var navdft=document.getElementsByClassName('navbar-default')[0];
		var nav=document.getElementById('nav1');
		var totopshow=document.getElementById("gotop");
		var offsetHeight=$(document).scrollTop(); //document.body.scrollTop;
		if(offsetHeight>=850){
			nav.style.position="fixed";
			nav.style.top="0";
			nav.style.zIndex="1000";
			nav.style.width="100%";
			navdft.style.backgroundColor="#555555";
		}else{
			nav.style.position="inherit";
			navdft.style.backgroundColor="#555555";
		}
		if(offsetHeight>450){         
			totopshow.style.display="block";
		}
		else{
			//totopshow.style.display="none";
			$('#gotop').fadeOut();
		};
		
	},500);

$('video').mouseover(function(){
		$('.videoarrow').fadeIn();	
});
$('video').mouseout(function(){
	$('.videoarrow').fadeOut();
});

/*slow up to top*/
function flytotop(){
	$('html,body').animate({scrollTop: '0px'},2000);return false;
} 

/* 新闻页面web添加内容*/
function addInfomation(str){
	/*<div class="content"><a href="#"><img src="img/sec6.jpg"></a></div>添加的div结构*/
	var count=0;
	var addInfo=setInterval(function(){
				var parent=document.getElementById(str);
				var fig=document.createElement('figure');
				var figcap=document.createElement('figcaption');
				var img=document.createElement('img')
					img.src="img/poster9.jpg";
					//img.innerHTML="<img>";
					img.style.display="inline-block";
				var oa1=document.createElement('a');
					oa1.setAttribute('href','');
					//oa1.innerHTML="<a></a>";
				oa1.appendChild(img);
				figcap.innerHTML="<a href='http://www.webhek.com/misc/z-type'>HTML5技术精品：盲打高手打飞字</a><br>打飞字(Z-Type)这是有史以来最酷的一款练习盲打的游戏。视觉效果、射击爆破效果和声音效果都非常的刺激。这款游戏是用HTML5做成的，曾经获得Mozilla Game On游戏大赛的Community Choice Award大奖玩家可以选择关闭游戏音效，轻按ESC按键便可以暂停游戏.;";
				fig.appendChild(oa1);
				fig.appendChild(figcap);
				fig.setAttribute("class","fly");
				parent.appendChild(fig);
				count=count+1;
				//setTimeout(200);
				if(count>12){
					clearInterval(addInfo);
				}
		},200);	
};

/*海洋科普添加内容*/
function TecListAdd(obj){
	obj.setAttribute("id","fenyeactive");
		/*
		<li>
			<i><img src="img/logo1.ico" alt="" /></i>
			<a href="#" title="北冰洋是怎么形成的？">北冰洋是怎么形成的？</a>
			<span>2015-12-03</span>
		</li>
		*/
	var arr=new Array();
	arr[0]="珊瑚长“白斑”不容忽视";arr[1]="南极科考有多难？";arr[2]="谁是最“懒”的海洋动物？";arr[3]="警惕！咬人的沙海蜇";arr[4]="海上遇险时的对策";arr[5]="远古海洋四大“魔兽”";
	var count=0;
	var parent=document.getElementById('teclistadd');
	parent.innerHTML="";
	var addInfo1=setInterval(function(){
		//var parent=document.getElementById('teclistadd');
		var ul=document.createElement('ul');
			for(var k=0;k<5;k++){
				var li=document.createElement('li');
				var span=document.createElement('span');
					span.innerHTML=Math.floor(Math.random()*17+2000)+"-"+Math.floor(Math.random()*13)+"-"+Math.floor(Math.random()*12+1);
				var img=document.createElement('img');
					img.src="img/logo1.ico";
				var i=document.createElement('i');
					i.appendChild(img);
				var a=document.createElement('a');
					a.href="#";
					a.setAttribute("title","北冰洋是怎么形成的？");
					a.innerHTML=arr[Math.floor(Math.random()*6)];
				li.appendChild(i);
				li.appendChild(a);
				li.appendChild(span);
				ul.appendChild(li)
			}
		parent.appendChild(ul);
		count=count+1;
				//setTimeout(200);
		if(count>5){
			clearInterval(addInfo1);
		}
	},200);	
} 
/*video more*/
/*<div class="video_list">
					<img alt="视频海报" src="img/poster13.jpg"/> 
					<span class="h5 overflow"><p>“三沙一号”交通补给船，长120米，宽20米，排水量8100吨，最大航速20节，续航力为6000海里，</p></span>
</div>*/
function MoiveAdd(){
	var count=0;
		
	var addInfo=setInterval(function(){
				var parent=document.getElementById('moivemore');
				var div=document.createElement('div');
					div.setAttribute("class","video_list");
				var img=document.createElement('img')
					img.src="img/poster13.jpg";
					img.alt="视频海报";
				var span=document.createElement('span');
					span.setAttribute("class","h5");
					span.setAttribute("class","overflow");
				var span1=document.createElement('span');
					span1.innerHTML="<span><a href='detail.html'>.......[详细]</a></span>";
				var p=document.createElement('p');
					p.innerHTML="“三沙一号”交通补给船，长120米，宽20米，排水量8100吨，最大航速20节，续航力为6000海里，";
				span.appendChild(p);span.appendChild(span1);
				div.appendChild(img);
				div.appendChild(span);
				parent.appendChild(div);
					
				count=count+1;
				if(count>12){
						clearInterval(addInfo);
				}
		},200);	
		
};

/*呼吁口号*/
$(document).ready(function(){
	/*新闻页面呼吁口号显示*/
	$('.appeal').animate({top:"0",height:"300"},1000);
	$('.appeal').animate({top:'0',height:"300"},2000);
	$('.appeal').animate({top:"-700",height:"0",paddingTop:"0"},1000);
	setTimeout(function(){$('#bg img').animate({height:"350"},1000)},4000);
	/*文本溢出显示省略号*/
	var pt=$('.overflow');
	pt.append("<span><a href='detail.html'>.......[详细]</a></span>");
	/*添加新闻列表*/
	for(var i=0;i<2;i++){
		document.getElementById("listNew").appendChild(creatNewsList());
	}
	
});
/*希新闻列表*/
/*<ul><li><a href="">南海片区海洋新闻信息通讯员实战培训班举办 </a><span id="time">2016-5-14</span></li></ul>*/
function creatNewsList(){
	var arr=new Array();
	arr[0]="img/sea.jpg";
	arr[1]="img/sea2.jpg";
	arr[2]="img/sea3.jpg";
	arr[3]="img/haiyangzhili.jpg";
	var ul=document.createElement("ul");
	var img=document.createElement("img");
	img.src=arr[Math.floor(Math.random()*4)];
	var a2=document.createElement("a");
		a2.href="#";
	a2.appendChild(img);
	ul.appendChild(a2);
	for(var j=0;j<8;j++){
		
		var li=document.createElement("li");
		var a=document.createElement("a");
			a.href="#";
			a.innerHTML="南海新闻信息通讯员实战培训班举办";
		var span=document.createElement("span");
			span.id="time";
			span.innerHTML="2016-5-14";
		li.appendChild(a);
		li.appendChild(span);
		ul.appendChild(li);
	}
	return ul;
}
/*新闻类型切换*/
 function newsType(rd){
 	var one=document.getElementById('sec-new1');
 	var two=document.getElementById('sec-new2');
 	var three=document.getElementById('sec-new3');
 	var self1=document.getElementById('hot');
 	var self2=document.getElementById('Inte');
 	var self3=document.getElementById('vid');
 	switch(rd){
 		case 1: one.style.display="inline-block";
 				two.style.display="none";
 				three.style.display="none";
 				$('#hot').css({"backgroundColor":"#00ff7f","color":"white"});
 				$('#Inte').css({"backgroundColor":"#222","color":"00bfff"});
 				$('#vid').css({"backgroundColor":"#222","color":"00bfff"});
 				break;
 		case 2: two.style.display="inline-block";
 				one.style.display="none";
 				three.style.display="none";
 				$('#hot').css({"backgroundColor":"#222","color":"00bfff"});
 				$('#Inte').css({"backgroundColor":"#00ff7f","color":"white"});
 				$('#vid').css({"backgroundColor":"#222","color":"00bfff"});
 				break;
 		case 3: three.style.display="inline-block";
 				two.style.display="none";
 				one.style.display="none";
 				$('#hot').css({"backgroundColor":"#222","color":"00bfff"});
 				$('#Inte').css({"backgroundColor":"#222","color":"00bfff"});
 				$('#vid').css({"backgroundColor":"#00ff7f","color":"white"});
 				break;
 	}
 }



