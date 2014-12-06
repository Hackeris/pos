//TODO: Please write code in this file.

function build_paying_receipt(paying_list){

	return _.reduce(paying_list,function(str,it){
			return str + "名称："+ it.name + "，数量："+it.count + it.unit + 
			"，单价：" + it.price + "(元)，小计："+ it.costs +"(元)\n";
		},"");
}

function build_gifts_receipt(gifts_list){

	return _.reduce(gifts_list,function(str,it){
		return str + "名称：" + it.name + "，数量：" + it.count + it.unit + "\n";
	},"");
}

function build_total_label(paying_list){

	return "总计：" + _.reduce(paying_list,function(mamo,it){
		return mamo + parseFloat(it.costs);
	},0.0).toFixed(2) + "(元)\n";
}

function build_saved_label(gifts_list){

	return "节省：" + _.reduce(gifts_list,function(mamo,it){
		return mamo + parseFloat(it.costs);
	},0).toFixed(2) + "(元)\n";
}

function printInventory(inputItems){

	var paying_list = [
		{
			name : "雪碧",
			price : "3.00",
			count : "5",
			costs : "12.00",
			unit : "瓶",
		},
		{
			name : "荔枝",
			price : "15.00",
			count : "2",
			costs : "30.00",
			unit : "斤",
		},
		{
			name : "方便面",
			price : "4.50",
			count : "3",
			costs : "9.00",
			unit : "袋",
		}
	];

	var gifts_list = [
		{
			name : "雪碧",
			price : "3.00",
			count : "1",
			costs : "3.00",
			unit : "瓶",
		},
		{
			name : "方便面",
			price : "4.50",
			count : "1",
			costs : "4.50",
			unit : "袋",
		}
	];

	var text = "***<没钱赚商店>购物清单***\n"+
		build_paying_receipt(paying_list)+
		"----------------------\n"+
		"挥泪赠送商品：\n"+
		build_gifts_receipt(gifts_list) +
		"----------------------\n"+
		build_total_label(paying_list)+
		build_saved_label(gifts_list)+
		"**********************";

	console.log(text);
}

