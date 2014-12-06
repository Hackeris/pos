//TODO: Please write code in this file.

function build_paying_ticket(paying_list){

	return _.reduce(paying_list,function(str,it){
			return str + "名称："+ it.name + "，数量："+it.count + it.unit + 
			"，单价：" + it.price + "(元)，小计："+ it.costs +"(元)\n";
		},"");
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

	var text = "***<没钱赚商店>购物清单***\n"+
		build_paying_ticket(paying_list)+
		"----------------------\n"+
		"挥泪赠送商品：\n"+
		"名称：雪碧，数量：1瓶\n"+
		"名称：方便面，数量：1袋\n"+
		"----------------------\n"+
		"总计：51.00(元)\n"+
		"节省：7.50(元)\n"+
		"**********************";

	console.log(text);
}

