$('#chng').click(()=>set_title(prompt("please type a new  title","defaultText")));

function set_title(title){    
    document.title = title;   
}    

$('#add').click(()=>{
   $("#first-div").append('<h3>Test 3 title</h3>');
});
$('#add').dblclick(()=>alert('double-clicked'));

$('#clear').click(()=>{
   $("#first-div").empty();
});
$('#hide').click(()=>{
   if ($("#first-div").hasClass('hidden')){
   $("#first-div").removeClass('hidden');
       $("#first-div").show();
   }else{
       $("#first-div").addClass('hidden');
       $("#first-div").hide();

   }
});

$('#get').click(()=>{
   $.get('http://195.69.76.88:3000', (data)=> {
    $('#first-div').html(data);   
   })
});