//TODO: Please write code in this file.
function Table () {
	// body...
}

function printInventory(inputItems){

	var boughtTable = getItemsCountTable(inputItems);
	var freeTable = getFreeItemsTable(boughtCount);

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

function getFreeItemsTable(allCountsTable){

	var freeCountTable = new Table();
	for(barcode in allCountsTable){
		var freeCount = getFreeCount(barcode,allCountsTable[barcode]);
		if(freeCount > 0){
			freeCountTable[barcode] = freeCount;
		}
	}
	return freeCountTable;
}

function getFreeCount(barcode,count){

	var promotions = loadPromotions();
	for (var i = promotions.length - 1; i >= 0; i--) {
		if(promotions[i].barcodes.indexOf(barcode) >= 0){
			return typeToFreeCount(count,promotions[i].type);
		}
	};
}

function typeToFreeCount(count,type){

	switch(type){
		case 'BUY_TWO_GET_ONE_FREE':
			return parseInt(count / 3);
			break;
	}
	return -1;
}