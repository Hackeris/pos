//TODO: Please write code in this file.
function printInventory(inputItems){

	var boughtCount = getAllBoughtCount(inputItems);
}

function getAllBoughtCount(inputItems){
	
	var allCounts = new Array();
	for (var i = 0;i < inputItems.length; i++){
		var barcode = inputItems[i].split('-')[0];
		var count = inputItems[i].split('-')[1];
		if(!allCounts[barcode]){
			allCounts[barcode] = 0;
		}
		if(count){
			allCounts[barcode] += parseInt(count);
			continue;
		}
		allCounts[barcode] ++;
	}
	return allCounts;
}