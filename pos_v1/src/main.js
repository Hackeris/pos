//TODO: Please write code in this file.

function build_paying_receipt(paying_list){

	return _.reduce(paying_list,function(memo,it){
			return memo + "名称："+ it.name + "，数量："+it.count + it.unit +
			"，单价：" + it.price + "(元)，小计："+ it.costs +"(元)\n";
	},"");
}

function build_gifts_receipt(gifts_list){

	return _.reduce(gifts_list,function(memo,it){
		return memo + "名称：" + it.name + "，数量：" + it.count + it.unit + "\n";
	},"");
}

function build_total_label(paying_list){

	return "总计：" + _.reduce(paying_list,function(memo,it){
		return memo + parseFloat(it.costs);
	},0.0).toFixed(2) + "(元)\n";
}

function build_saved_label(gifts_list){

	return "节省：" + _.reduce(gifts_list,function(memo,it){
		return memo + parseFloat(it.costs);
	},0).toFixed(2) + "(元)\n";
}

function get_item_info_of_barcode(barcode){

	return _.findWhere(loadAllItems(),{'barcode':barcode});
}

function get_paying_sumary(inputItems){

	return [
		{
			name : "雪碧",
			price : "3.00",
			count : 5,
			costs : "12.00",
			unit : "瓶"
		},
		{
			name : "荔枝",
			price : "15.00",
			count : 2,
			costs : "30.00",
			unit : "斤"
		},
		{
			name : "方便面",
			price : "4.50",
			count : 3,
			costs : "9.00",
			unit : "袋"
		}
	];
}

function get_gift_sumary(inputItems){

	return [
		{
			name : "雪碧",
			price : "3.00",
			count : 1,
			costs : "3.00",
			unit : "瓶"
		},
		{
			name : "方便面",
			price : "4.50",
			count : 1,
			costs : "4.50",
			unit : "袋"
		}
	];
}

function build_receipt(inputItems){

	return {
		paying_items : get_paying_sumary(inputItems),
		gifts_list : get_gift_sumary(inputItems)
	};
}

function printInventory(inputItems) {

	var receipt = build_receipt(inputItems);

	var text = "***<没钱赚商店>购物清单***\n"+
		build_paying_receipt(receipt.paying_items)+
		"----------------------\n"+
		"挥泪赠送商品：\n"+
		build_gifts_receipt(receipt.gifts_list) +
		"----------------------\n"+
		build_total_label(receipt.paying_items)+
		build_saved_label(receipt.gifts_list)+
		"**********************";

	console.log(text);
}

