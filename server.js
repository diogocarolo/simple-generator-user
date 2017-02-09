var faker = require('faker');
var exec = require('child_process').exec;

function generate(times) {
	var random = {};
	random.name = faker.name.findName(); // Rowan Nikolaus
	random.email= faker.internet.email(); // Kassandra.Haley@erich.biz
	
	random.country = faker.address.country();
	random.state = faker.address.state();
	random.city = faker.address.city();
	random.image = faker.image.avatar();
	random.id = faker.random.uuid();
	random.comment = faker.lorem.text();
	random.klout = Math.floor(Math.random() * (100 - 0));
	random.rating = Math.floor(Math.random() * (100 - 0));
	random.stars = Math.floor(Math.random() * (5 - 0));
	return JSON.stringify(random);
}

for(var i = 0; i<2; i++){
	json = generate();

	var cmd = `curl -XPOST -H "content-type:application/json" 'your link' -d '${json}'`;
	exec(cmd, function(error, stdout, stderr) {
	  console.log(stdout)
	});
	
}

