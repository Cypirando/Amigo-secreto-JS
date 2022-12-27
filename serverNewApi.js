const http = require("http");
const app  = require('./appNewApi')
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);

// docker run -p 3307:3306 --name  mysql-mariadb1 -e MYSQL_ROOT_PASSWORD=root -d mariadb