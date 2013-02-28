
function runMe(request, response){
	
	xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://api.github.com/users/Wakanda');
//	xhr.open('GET', 'https://api.github.com/repos/W/:repo/commits
	xhr.send();
	
	response.contentType = 'text/html';
	var res = "Our Project is at: ";
	res += ds.getModelFolder().path;
	res += "<br /><br />Version of Wakanda:";
	res += process.version;
	res += "<br /><br />And here is some json from GitHub: <br />"
	
	response.body =  res + xhr.responseText;
}