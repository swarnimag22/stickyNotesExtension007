$(function(){




	$('#login').click(function(){
		var emailId = $(#'emailId').val();
		var password =  $(#'password').val();
		var name = $(#'name').val();

		let postData = {
			"emailId":emailId,
		    "name":name,
		    "password" : password,
		    "active" :true
		}

 // $(#'emailId').text("");
	// 	       $(#'password').text("");
	// 	       $(#'name').text("");

		$.ajax({
		    url: 'http://localhost:8080/notes/addNote',
		    type: 'POST',
		    contentType: 'application/json',
		    data: JSON.stringify( postData ), 
		    success: function(){
		       alert('success');
		       $(#'emailId').text("");
		       $(#'password').text("");
		       $(#'name').text("");
		    },
		    error: function(){
		        alert('error');
		        $(#'emailId').text("error");
		       $(#'password').text("error");
		       $(#'name').text("error");
		    }
		});




		// let request = new XMLHttpRequest();
		// let url = 'http://localhost:8080/notes/addNote?name=${name}&password=${password}&emailId=${emailId}&active=true'
  //   	//let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[API-KEY-GOES-HERE]`;

  //   	request.onreadystatechange = function() {
  //    	 	if (this.readyState === 4 && this.status === 200) {
  //       	let response = JSON.parse(this.responseText);
  //       	getElements(response);
  //   	  }
	 //   	 }

	 //    request.open("GET", url, true);
	 //    request.send();

	 //    getElements = function(response) {
	 //      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
	 //      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
	 //    }


	}






}