$(function(){
    
    var arr = ['list/1.html','list/2.html','list/3.html','list/4.html','list/list_index.html']; 
    var i = 0;
    
    $("#leftBtn").mouseover(function(){
       $(this).css("opacity","0.5");
        $(this).css("transform","scale(1.2)");
        
    });
    
    $("#rightBtn").click(function leftClick(){
    
      
    
    $("#iframe_box").attr('src',arr[i]);
    
      i = i+1;
      if(i > 4){
          i = 0;
      }
      
        
        
    });
    

  
  
  
  });