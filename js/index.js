window.addEventListener('load', function(){
		var swiper = new Swiper('.swiper-container', {
		      centeredSlides: true,
		      loop: true,
		      hashNavigation: {
		      watchState: true,
		      },
		      autoplay: {
		        delay: 2500,
		        disableOnInteraction: false,
		      },
		      pagination: {
		        el: '.swiper-pagination',
		        clickable: true,
		      },
		      navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
		      },
	    });
    })

window.onload=function(){
	//头部选项卡
	let els = document.querySelectorAll('.nav-item.nav-item1');
		for(let i = 0 ; i < els.length ; i++){
		els[i].onmouseenter = function(){
			this.querySelector('.drop').style.height = '229px';
		}
		els[i].onmouseleave = function(){
			this.querySelector('.drop').style .height = 0;
		}
	}

		//侧导航选项卡
	let dis = document.querySelectorAll('.banner_nav .pop');
	for(let i = 0 ; i < dis.length ; i++){
		dis[i].onmouseenter = function(){
			this.querySelector('.banner-dorp').style.display = 'block';
		}
		dis[i].onmouseleave = function(){
			this.querySelector('.banner-dorp').style.display = 'none';
		}
	}

	//购物车
	let head_buy=document.getElementsByClassName('head_buy')[0];
	let head_buy_box=document.getElementsByClassName('head_buy_box')[0];
	head_buy.onmouseenter=function(){
		head_buy_box.style.height='100px';
		head_buy_box.style.boxShadow='0 3px 4px 1px rgba(0,0,0,0.1)';
	}

	head_buy.onmouseleave=function(){
		head_buy_box.style.height=0;
		head_buy_box.style.boxShadow='none';
	}

	//搭配选项卡
	function main(x){
		// console.log(dapei);
		let Span=x[0].getElementsByClassName('Span');
		// console.log(dapaiSpan);
		let zhineng_bottom_first=x[0].getElementsByClassName('zhineng_bottom_first');
		// console.log(zhineng_bottom_first);

		for(let i=0;i<Span.length;i++){
			Span[i].onmouseenter=function(){
				for(let j=0;j<Span.length;j++){
					zhineng_bottom_first[j].style.display='none';
					Span[j].className='Span';
				}
				zhineng_bottom_first[i].style.display='block';
				Span[i].className='Span zoo';
			}
		}
	}
	let x=document.getElementsByClassName('dapei');
	main(x);
	let y=document.getElementsByClassName('peijian');
	main(y);
	let z=document.getElementsByClassName('zhoubian');
	main(z);


	//双下标轮播图
	function fn(sec){
		// let sec=document.querySelectorAll('.neirong_tit0');
		let bookBOX=sec.getElementsByClassName('bookBOX');
		let widths=parseInt(getComputedStyle(sec,null).width);
		let left=sec.getElementsByClassName('left-bookBOX');
		let right=sec.getElementsByClassName('right-bookBOX');
		let btns=sec.getElementsByClassName('son');
		console.log(/*bookBOX,widths,left,right,btns,*/sec);

		// let f=setInterval(move,2000);
		let now=0;
		let next=0;
		let flg=true;
		function move(){
			next++;
			if(next==bookBOX.length){
				next=0;
			}
			bookBOX[next].style.left=widths+'px';
			animate(bookBOX[now],{left:-widths});
			animate(bookBOX[next],{left:0},function(){
				flg=true;
			});
			btns[now].classList.remove('son1')
		    btns[next].classList.add('son1');
			now=next;
		}

		function move1(){
			next--;
			if(next<0){
				next=bookBOX.length-1;
			}
			bookBOX[next].style.left=-widths+'px';
			animate(bookBOX[now],{left:widths});
			animate(bookBOX[next],{left:0},function(){
				flg=true;
			});
			btns[now].classList.remove('son1')
		    btns[next].classList.add('son1');
			now=next;
		}

		left[0].onclick=function(){
			if(flg==false){
				return;
			}
			if(next==0){
				return;
			}
			flg=false;
			move1();
		}

		right[0].onclick=function(){
			if(flg==false){
				return;
			}
			if(next==bookBOX.length-1){
				return;
			}
			flg=false;
			move();
		}

		/*sec[0].onmouseenter=function(){
			clearInterval(f);
		}

		sec[0].onmouseleave=function(){
			f=setInterval(move,2000);
		}*/

		for(let i=0;i<btns.length;i++){
			btns[i].onclick=function(){
				if(now==i){
					return;
				}
				if(now<i){
					bookBOX[i].style.left=widths+'px';
		            animate(bookBOX[now],{left:-widths});
		            animate(bookBOX[i],{left:0});
		            btns[now].classList.remove('son1')
		            btns[i].classList.add('son1');
		            now=next=i;
				}
				if(now>i){
					bookBOX[i].style.left=-widths+'px';
		            animate(bookBOX[now],{left:widths});
		            animate(bookBOX[i],{left:0});
		            btns[now].classList.remove('son1')
		            btns[i].classList.add('son1');
		            now=next=i;
				}
			}
		}
	}	

	let w=document.querySelector('.neirong_tit0');
	fn(w);
	let h=document.querySelector('.neirong_tit1');
	fn(h);
	let k=document.querySelector('.neirong_tit2');
	fn(k);
	let s=document.querySelector('.neirong_tit3'); 
	fn(s);
	/*for(let i=0;i<w.length;i++){
		fn(w[i]);
	}*/


	//抢购
	function sele(fr){
		// let buy=document.querySelector('.box1');
		let star_bottom_right0=fr.querySelector('.star_bottom_right0');
		let star_btn=fr.getElementsByClassName('star_btns');
		let box=fr.querySelector('.bottom_right_box');
		let widths=parseInt(getComputedStyle(box,null).width)/2;
		let times=0;
		// console.log(star_btn,box,widths);

		star_btn[1].onclick=function(){
			times++;
			if(times>1){
				times=1;
			}
			star_btn[1].classList.add('star_btn1');
			star_btn[0].classList.remove('star_btn1');
			box.style.transform='translateX('+(-widths*times)+'px)';
		}

		star_btn[0].onclick=function(){
			if(times==0){
				return;
			}
			times--;
			if(times<0){
				times=0;
			}
			star_btn[1].classList.remove('star_btn1');
			star_btn[0].classList.add('star_btn1');
			box.style.transform='translateX('+(-widths*times)+'px)';
		}
	}
	let o=document.querySelector('.box1');
	sele(o);
	let l=document.querySelector('.tuijian');
	sele(l);

	//倒计时
	moves();
	setInterval(moves,1000);
	function moves(){
		let span=document.querySelectorAll('.time .son');
		let arr=fns();
		for(let i=0;i<span.length;i++){
		span[i].innerText=arr[i+2];
		}
	}
	function fns(){
		let arr=[];
		let count=new Date();
		let future=new Date(2020,6,30,18);
		let countT=count.getTime();
		let futureT=future.getTime();
		let newTime=Math.floor((futureT-countT)/1000);
		let month=Math.floor(newTime/(30*24*60*60));
		if(Math.floor(month/10)==0){
			arr.push('0'+month);
		}else{
			arr.push(month);
		}
		let monthRem=newTime%(30*24*60*60);
		let days=Math.floor(monthRem/(24*60*60));
		if(Math.floor(days/10)==0){
			arr.push('0'+days);
		}else{
			arr.push(days);
		}
		let daysRem=monthRem%(24*60*60);
		let hours=Math.floor(daysRem/(60*60));
		if(Math.floor(hours/10)==0){
			arr.push('0'+hours);
		}else{
			arr.push(hours);
		}
		let hoursRem=daysRem%(60*60);
		let minutes=Math.floor(hoursRem/60);
		if(Math.floor(minutes/10)==0){
			arr.push('0'+minutes);
		}else{
			arr.push(minutes);
		}
		let seconds=hoursRem%60;
		if(Math.floor(seconds/10)==0){
			arr.push('0'+seconds);
		}else{
			arr.push(seconds);
		}
		return arr;
	}
}
