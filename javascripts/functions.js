/**
 * Handler for toBase64Button
 */
function btnToBase64_Clicked()
{
	var originContent = getContentFromOriginTextarea();
	var encodedData = window.btoa(originContent);

	setContentToTargetTextarea(encodedData);
}

/**
 * Handler for toHexButton
 */
function btnToHex_Clicked()
{
	var originContent = getContentFromOriginTextarea();
	var decodedData = window.atob(originContent);

	setContentToTargetTextarea(decodedData);
}

/**
 * Returns the content of the origin textarea
 */
function getContentFromOriginTextarea()
{
	var originContent = document.getElementById("textarea-origin-content").value;
	return originContent;
}

/**
 * Sets the content of the target textarea
 */
function setContentToTargetTextarea(content)
{
	document.getElementById("textarea-target-content").value = content;
}