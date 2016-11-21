export function downloadFile(file) {
	const link = document.createElement("a");
	link.download = file.name + '.' + file.type;
	link.href = file.url;
	link.click();
}
export function isValidFileType(fileType) {
	const typeArray = ['jpeg', 'jpg', 'pdf', 'csv', 'png', 'gif', 'css', 'html', 'js', 'py', 'java', 'gifv',
		'txt', 'docx', 'doc', 'zip', 'exe', 'tar', 'mp4', 'avi', 'mov', 'pptx', 'ppt', 'xlsx', 'xml', 'json', 'bmp', 'php'];
	return typeArray.indexOf(fileType) != -1;
}
