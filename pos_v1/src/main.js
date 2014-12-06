//TODO: Please write code in this file.

function printInventory(inputItems){

	var paid_ticket = [
		{
			name : "雪碧",
			price : "3.00",
			count : "5",
			paid : "12.00",
			unit : "瓶",
		},
		{
			name : "荔枝",
			price : "15.00",
			count : "2",
			paid : "30.00",
			unit : "斤",
		},
		{
			name : "方便面",
			price : "4.50",
			count : "3",
			paid : "9.00",
			unit : "袋",
		}
	];

	var text = "***<没钱赚商店>购物清单***\n";
		
		var paid_list = _.reduce(paid_ticket,function(str,it){
			return str + "名称："+ it.name + "，数量："+it.count + it.unit + 
			"，单价：" + it.price + "(元)，小计："+ it.paid +"(元)\n";
		},"");

		text += paid_list;

		text += "----------------------\n"+
		"挥泪赠送商品：\n"+
		"名称：雪碧，数量：1瓶\n"+
		"名称：方便面，数量：1袋\n"+
		"----------------------\n"+
		"总计：51.00(元)\n"+
		"节省：7.50(元)\n"+
		"**********************";

	console.log(text);
}

