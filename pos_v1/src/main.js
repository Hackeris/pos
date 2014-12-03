//TODO: Please write code in this file.
function Table () {
	// body...
}

function printInventory(inputItems){

	var boughtCount = getItemsCountTable(inputItems);

}

function getItemsCountTable(inputItems){

	var allCounts = new Table();
	for (var i = 0;i < inputItems.length; i++){
		var barcode = inputItems[i].split('-')[0];
		var count = inputItems[i].split('-')[1];
		count = (count == null) ? 1 : count;
		if(!allCounts[barcode]){
			allCounts[barcode] = 0;
		}
		allCounts[barcode] += parseInt(count);
	}
	return allCounts;
}


