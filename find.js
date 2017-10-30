
              function myFunction(){
                  var str=document.getElementById("id");
                  var a="ASCII Value is   ";
              document.getElementById("demo").innerHTML=fun(str);
              };
              
              function fun(str){
                  var c= str.value.charCodeAt(0);
                  return c;
              };
              function myFunction1(){
                  var d=$("#id1").val();
                  var f=$("#id2").val();
                  var s1=[$("#id1").val(),$("#id2").val()];
                  //var s2=document.getElementById("id2").value;
                  //var s3=document.getElementById("id3").value;
            s1.sort();
        $("#sel").html(s1);
              };
              function dgh(d,f){
return Math.max(d,f);
              }

       
  //var varDate=$("#datepicker").val();

  