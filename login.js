$(function(){
	$('#login').click(function(){
		var emailId = $('#emailId').val();
		var password =  $('#password').val();
		var name = $('#name').val();

		var postData = {
			"emailId":emailId,
		    "name":name,
		    "password" : password,
		    "active" :true
		};

		console.log(postData);

		$.ajax({
		    url: 'http://localhost:8080/user/createUser',
		    type: "POST",
		    contentType: 'application/json; charset=utf-8',
		    dataType : 'json',
		    data: JSON.stringify(postData), 
		    success: function(){
		       alert('success');
		    },
		    error: function(){
		        alert('error');
		        console.log(postData);
		    }
		});
	});
});