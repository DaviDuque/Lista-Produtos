var router = require('./router');
var app = router(3412);
var produtos = [
	{
		nome: "Kit Ecologie Face", 
		descricao:"Para sua pele ficar linda e macia a linha Ecologie Face age de forma natural e refrescante", 
		foto: 'https://www.carone.com.br/media/wysiwyg/produtos-ecologie-face.png', id: '1'
	},{
		nome: "Vantage Alvejante", 
		descricao:"Aquela roupa branquinha e cheirosa somente com Vantage", 
		foto: 'http://www.mndesign.com.br/wp-content/uploads/2016/05/DProduto_01.jpg', id: '2'
	},{
		nome: "Casinha para cães Patinha Vermelha", 
		descricao:"Ideal Para cães de médio porte, a Casinha Patinha Vermelha é resistente a chuva e sol.", 
		foto: 'https://img.clasf.com.br/2016/06/22/ANIMAIS-PRODUTOS-VENDER-ANIMAIS-PRODUTOS-Casa-20160622183813.jpg', id: '3'
	}
];	

var comentarios = [
	{
		nome: "Bruno", 
		texto: "Muito bom esse kit", 
		id: '1'
	},{
		nome: "Sandra", 
		texto: "Aprovado, Fantástico!!", 
		id: '2'
	},{
		nome: "Mariana", 
		texto: "Cabe quantos cachorros pequenos?", 
		id: '3'
	}
];	

app.interceptor(function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Headers','Content-Type');
	next();
});
app.interceptor(function(req, res, next){
	res.setHeader('Content-Type','application/json;charset=UTF-8');
	next();
});


app.get('/enderecos', function(req, res){
	res.write(JSON.stringify(operadoras));
	res.end();
});

app.get('/produtos', function(req, res){
	res.write(JSON.stringify(produtos));
	res.end();
});

app.get('/comentarios', function(req, res){
	res.write(JSON.stringify(comentarios));
	res.end();
});

app.post('/comentarios', function(req, res){
	var comentario = req.body;
	console.log(comentario);
	comentarios.push(JSON.parse(comentario));
	res.end();
});

app.options('/comentarios', function(req, res){
	res.end();
});
			
