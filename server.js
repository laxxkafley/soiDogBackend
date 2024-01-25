// const express=require("express");
// const bodyParser=require("body-parser");
// const cors=require("cors");
// const mysql=require("mysql");

// const app=express()

// const port = process.env.port||3000;

// app.use(bodyParser.json());

// const connection= mysql.createConnection({
//     host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'dogs_database',
// })

// connection.connect((err)=>{
//     if(err){
//         console.error('Error connecting to MySQL:', err);
//         return;
//     }
//    else{
//     console.log('connection successful')
//    }
// })

// app.get('/', (req, res) => {
//     res.send('Hello, this is the root path!');
//   });

// app.get('/api/dogs',(req,res)=>{
//     const{name, color, sex}=req.query;
//     let query=' select * from dogs'
    
//   if (name) query += ` AND name LIKE '%${name}%'`;
//   if (sex) query += ` AND sex = '${sex}'`;
//   if (color) query += ` AND color LIKE '%${color}%'`;

//   // Execute the SQL query
 
  
//   connection.query(query, (err, results) => {
//     if (err) {
//       console.error('Error executing MySQL query:', err);
//       res.status(500).json({ error: 'Internal Server Error' });
//       return;
//     }
//     res.json(results);
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const mysql = require("mysql");

// const app = express();

// const port = process.env.PORT || 3000;

// app.use(bodyParser.json());
// app.use(cors());

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'dogs_database',
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   }
//   console.log('Connection to MySQL successful');
// });

// app.get('/api/dogs', (req, res) => {
//   const { name, color, sex } = req.query;

//   // Check if only the 'name' parameter is provided
//   if (name && !color && !sex) {
//     const query = 'SELECT * FROM dogs WHERE name LIKE ?';

//     // Use parameterized query to prevent SQL injection
//     connection.query(query, [`%${name}%`], (err, results) => {
//       if (err) {
//         console.error('Error executing MySQL query:', err);
//         res.status(500).json({ error: 'Internal Server Error' });
//         return;
//       }
//       res.json(results);
//     });
//   } else {
//     // Handle the case when other parameters or multiple parameters are provided
//     let query = 'SELECT * FROM dogs WHERE 1';

//     if (name) query += ` AND name LIKE '%${name}%'`;
//     if (sex) query += ` AND sex = '${sex}'`;
//     if (color) query += ` AND color LIKE '%${color}%'`;

//     connection.query(query, (err, results) => {
//       if (err) {
//         console.error('Error executing MySQL query:', err);
//         res.status(500).json({ error: 'Internal Server Error' });
//         return;
//       }
//       res.json(results);
//     });
//   }
// });

// app.get('/', (req, res) => {
//   res.send('Hello, this is the root path!');
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const mysql = require("mysql");

// const app = express();

// const port = process.env.port || 3000;

// app.use(bodyParser.json());

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'dogs_database',
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   } else {
//     console.log('Connection successful');
//   }
// });

// app.get('/', (req, res) => {
//   res.send('Hello, this is the root path!');
// });

// app.get('/api/dogs', (req, res) => {
//   const { name, sex, birth_date } = req.query;
//   let query = 'SELECT * FROM dogs';

//   if (name) query += ` WHERE name LIKE '%${name}%'`;
//   if (sex) query += `${name || birth_date || sex ? ' AND' : ' WHERE'} sex = '${sex}'`;
//   if (birth_date) query += `${name || sex ? ' AND' : ' WHERE'} birth_date = '${birth_date}'`;

//   connection.query(query, (err, results) => {
//     if (err) {
//       console.error('Error executing MySQL query:', err);
//       res.status(500).json({ error: 'Internal Server Error' });
//       return;
//     }
//     res.json(results);
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const mysql = require("mysql");

// const app = express();

// const port = process.env.port || 3000;

// app.use(bodyParser.json());

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'dogs_database',
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   } else {
//     console.log('Connection successful');
//   }
// });

// app.get('/', (req, res) => {
//   res.send('Hello, this is the root path!');
// });

// app.get('/api/dogs', (req, res) => {
//   const { name, sex, birth_date } = req.query;

//   let query = 'SELECT * FROM dogs WHERE 1';

//   if (name) query += ` AND name LIKE '%${name}%'`;
//   if (sex) query += ` AND sex = '${sex}'`;
//   if (birth_date) query += ` AND birth_date = '${birth_date}'`;

//   connection.query(query, (err, results) => {
//     if (err) {
//       console.error('Error executing MySQL query:', err);
//       res.status(500).json({ error: 'Internal Server Error' });
//       return;
//     }
//     res.json(results);
//   });
// });

// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const mysql = require("mysql");

// const app = express();

// const port = process.env.port || 3000;

// app.use(bodyParser.json());

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'dogs_database',
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   } else {
//     console.log('Connection successful');
//   }
// });

// app.get('/', (req, res) => {
//   res.send('Hello, this is the root path!');
// });

// app.get('/api/dogs', (req, res) => {
//   const { name, sex, birth_date } = req.query;
//   let query = 'SELECT * FROM dogs where 1 ';

//   if (name) query += ` AND name LIKE '%${name}%'`;
//   if (sex && (sex.toLowerCase() === 'female' || sex.toLowerCase() === 'male')) {
//     query += ` AND sex = '${sex}'`;
//   }
//   if (birth_date) query += ` AND birth_date = '${birth_date}'`;

//   connection.query(query, (err, results) => {
//     if (err) {
//       console.error('Error executing MySQL query:', err);
//       res.status(500).json({ error: 'Internal Server Error' });
//       return;
//     }
//     res.json(results);
//   });
// });


// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


``
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());
const port = process.env.port || 3000;

app.use(bodyParser.json());
require("dotenv").config()
const connection = mysql.createConnection(process.env.DATABASE_URL)
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'dogs_database',
// });

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  } else {
    console.log('Connection successful');
  }
});

app.get('/', (req, res) => {
  res.send('Hello, this is the root path!');
});

app.get('/api/dogs', (req, res) => {
  const { name, sex, birth_date } = req.query;
  let query = 'SELECT * FROM dogs';

  if (name) query += ` WHERE name LIKE '%${name}%'`;
  if (sex) query += `${name || birth_date ? ' AND' : ' WHERE'} sex = '${sex}'`;
  // Check if birth_date is provided and process it accordingly
  if (birth_date) {
    const birthDateParts = birth_date.split('-');
    if (birthDateParts.length === 1) {
      // Only year provided
      query += ` AND YEAR(birth_date) = '${birthDateParts[0]}'`;
    } else if (birthDateParts.length === 2) {
      // Year and month provided
      query += ` AND YEAR(birth_date) = '${birthDateParts[0]}' AND MONTH(birth_date) = '${birthDateParts[1]}'`;
    } else if (birthDateParts.length === 3) {
      // Year, month, and day provided
      query += ` AND YEAR(birth_date) = '${birthDateParts[0]}' AND MONTH(birth_date) = '${birthDateParts[1]}' AND DAY(birth_date) = '${birthDateParts[2]}'`;
    }
  }
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
