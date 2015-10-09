function btnToBase64_Clicked()
{
	var originContent = getContentFromOriginTextarea();
	alert('to base64: ' + originContent);
}

function btnToHex_Clicked()
{
	var originContent = getContentFromOriginTextarea();
	alert('to hex: ' + originContent);
}

function getContentFromOriginTextarea()
{
	var originContent = document.getElementById("textarea-origin-content").value;
	return originContent;
}