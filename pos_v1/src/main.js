//TODO: Please write code in this file.
function Table () {
	// body...
}

var text = "";

function printInventory(inputItems){

	var boughtTable = getBoughtTable(inputItems);
	var freeTable = getFreeItemsTable(boughtTable);

	text += '***<没钱赚商店>购物清单***\n';
	printBoughtTable(boughtTable,freeTable);
	text += '----------------------\n'
		+ '挥泪赠送商品：\n';
	printFreeTable(freeTable);
	text += '----------------------\n';
	printTotal(boughtTable,freeTable);
	text += '**********************';

	console.log(text);
}

function getBoughtTable(inputItems){

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

function printBoughtTable(boughtTable,freeTable){
	
	var allItems = loadAllItems()
	for(var i in allItems){
		if(allItems[i].barcode in boughtTable){
			var barcode = allItems[i].barcode;
			var count = boughtTable[barcode];
			var freeCount = 0;
			if(freeTable[barcode]){
				freeCount = parseInt(freeTable[barcode]);
			}
			text += '名称：' + allItems[i].name + '，' +
				'数量：' + count + allItems[i].unit + '，' + 
				'单价：' + allItems[i].price.toFixed(2) + '(元)，' +
				'小计：' + (allItems[i].price * (count - freeCount)).toFixed(2) + '(元)\n';
		}
	}
}

function printFreeTable(freeTable){
	
	var allItems = loadAllItems()
	for(var i in allItems){
		if(allItems[i].barcode in freeTable){
			var barcode = allItems[i].barcode;
			var count = freeTable[barcode];
			text += '名称：' + allItems[i].name + '，' +
				'数量：' + count + allItems[i].unit + '\n';
		}
	}
}

function printTotal(boughtTable,freeTable){

	var allItems = loadAllItems()
	var totalCost = 0,savedCost = 0;
	for(var i in allItems){
		if(allItems[i].barcode in boughtTable){
			var barcode = allItems[i].barcode;
			var count = boughtTable[barcode];
			if(freeTable[barcode]){
				count -= parseInt(freeTable[barcode]);
			}
			totalCost += allItems[i].price * count;
		}
		if(allItems[i].barcode in freeTable){
			var barcode = allItems[i].barcode;
			var count = freeTable[barcode];
			savedCost += allItems[i].price * count;
		}
	}
	text += '总计：' + totalCost.toFixed(2) + '(元)\n' +
			'节省：' + savedCost.toFixed(2) + '(元)\n';
}