var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

/*$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 100);
});
*/


function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
	
  msg = $('.message-input').val();
  
  if ($.trim(msg) == '') {
    return false;
  }
  
  console.log('insertMessage  msg  '+msg);
  
  if (IF_NET) {
  	
  			var msgObj = {
  				
  				msg: msg
  			}
											
			
			ajaxRequest(false, "POST", 'sendmsg', msgObj, function(result) {
			
			
						if (result.code != 10000) {
							
							
							Lobibox.alert(
							    'error', // Any of the following
							    {
							        msg:result.msg
							    }
							);
						
						
						} else {
							
							
							Lobibox.alert(
							    'success', // Any of the following
							    {
							        msg:'调取 发表留言 接口 成功  '
							    }
							);
							
							 
						  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
						  
						  setDate();
						  
						  $('.message-input').val(null);
						  
						  updateScrollbar();
						  
//						  fakeMessage();
						    
							  
						}
						
				
					}, errorReturn);
			
		}	
  
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})

var Fake = [
  'Hi there, I\'m Fabio and you?',
  'Nice to meet you',
  'How are you?',
  'Not too bad, thanks',
  'What do you do?',
  'That\'s awesome',
  'Codepen is a nice place to stay',
  'I think you\'re a nice person',
  'Why do you think that?',
  'Can you explain?',
  'Anyway I\'ve gotta go now',
  'It was a pleasure chat with you',
  'Time to make a new codepen',
  'Bye',
  ':)'
]

// 调取 获取留言接口
function fakeMessage() {
	
	/*$('<div class="message loading new"><figure class="avatar"><img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80_4.jpg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
							  
  	updateScrollbar();*/
							
  	if (IF_NET) {
											
			
			ajaxRequest(false, "get", 'getmsg', '', function(result) {
			
			
						if (result.code != 10000) {
							
							
							/*Lobibox.alert(
							    'error', // Any of the following
							    {
							        msg:result.msg
							    }
							);*/
						
						
						} else {
							
							
							/*Lobibox.alert(
							    'success', // Any of the following
							    {
							        msg:'调取 获取留言 接口 成功  '
							    }
							);*/
							
							  /*if ($('.message-input').val() != '') {
							    return false;
							  }*/
							 
//						    $('.message.loading').remove();
							 
							 
							for (var i = 0; i < result.data.length; i++) {
								
								
<<<<<<< HEAD
								/*$('.atvPic').attr('src', result.data[i].avatar_large);
								
								
								$('.chatContent').html( result.data[i].msg );*/
								
								
								var chatShow = '<div id="chatPng'+i+'" class="chatShow"><div class="userPic"><img id="atvPic" src="'+ result.data[i].avatar_large +'" class="clip-circle user" /></div><div class="chatContent">'+ result.data[i].msg +'</div></div>'
								
								$('body').append(chatShow);
								
								
//								$('#chatContainer').html(chatShow);
=======
								var chatShow = '<div class="chatShow"><div class="userPic"><img id="atvPic" src="'+ result.data[i].avatar_large +'" class="clip-circle user" /></div><div class="chatContent">'+ result.data[i].msg +'</div></div>'
								
								
								$('#chatContainer').html(chatShow);
>>>>>>> parent of 69d9231... 留言
								
								
//							    $('<div class="message new"><figure class="avatar"><img src="'+ result.data[i].avatar_large +'" /></figure>' + result.data[i].msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
							    
							    
<<<<<<< HEAD
=======
							    html2canvas( $('#chatContainer'), {


									onrendered: function (canvas) {
								
								
										 var imgageData = canvas.toDataURL("image/png");
									
										 krpano.call("addhotspot(chatPng'"+i+"');set(hotspot[chatPng'"+i+"'].url,'"+ imgageData + "');set(hotspot[chatPng'"+i+"'].ath,'"+(Math.random()*100+i)+"');set(hotspot[chatPng'"+i+"'].atv,'"+(Math.random()*100-i)+"')");
									
										 console.log('render chatPng1');
									
										 console.log('imgageData  '+imgageData);
									
										 var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
									
										 console.log('newData  '+newData);
									
								
									}
						
								});
							    
>>>>>>> parent of 69d9231... 留言
							    
							    /*html2canvas( $('.message new'), {
		    	
						         onrendered: function (canvas) {
						                
						                
						                var imgageData = canvas.toDataURL("image/png");

									    krpano.call("addhotspot(chatPng"+i+");set(hotspot[chatPng"+i+"].url,'"+ imgageData + "');set(hotspot[chatPng"+i+"].height,40);set(hotspot[chatPng"+i+"].width,40);");
						                
						                krpano.call("set(hotspot[chatPng"+i+"].ath, "+ i/360 +");set(hotspot[chatPng"+i+"].atv,'"+ i/90 +"');");
						                
						                
								    	console.log('render chatPng');
								    	
						                console.log('imgageData  '+imgageData);
						                
						                
						                var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
						                
						                console.log('newData  '+newData);
						                
						                console.log('chatData  '+chatData);
						                
						             }
					         	});*/
							    
							    /*setDate();
							    
							    updateScrollbar();*/
								
							}
							
							
							var dataLen = result.data.length;
							
							
							while (dataLen > 0) {
								
								
								html2canvas( $('#chatPng'+dataLen), {
							    	
							    	
									onrendered: function (canvas) {
								
								
										 var imgageData = canvas.toDataURL("image/png");
									
										 krpano.call("addhotspot(chatPng'"+dataLen+"');set(hotspot[chatPng'"+dataLen+"'].url,'"+ imgageData + "');set(hotspot[chatPng'"+dataLen+"'].ath,'"+(Math.random()*100+i)+"');set(hotspot[chatPng'"+dataLen+"'].atv,'"+(Math.random()*100-dataLen)+"')");
									
										 console.log('render chatPng  '+dataLen);
									
										 console.log('imgageData  '+imgageData);
									
										 var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
									
										 console.log('newData  '+newData);
										 
										 dataLen--;
									
								
									}
						
								});
								
							}
						    
							  
						}
						
				
					}, errorReturn);
			
		}	
	
  
}