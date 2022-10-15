import express, { Express, Request, Response } from "express";
import bodyParser from 'body-parser';

const data = [
  { id: 1, name: 'Alan Wake', age: 21, city: 'New York' },
  { id: 2, name: 'Steve Rogers', age: 106, city: 'Chicago' },
  { id: 3, name: 'Tom Hanks', age: 47, city: 'Detroit' },
  { id: 4, name: 'Ryan Burns', age: 16, city: 'New York' },
  { id: 5, name: 'Jack Ryan', age: 31, city: 'New York' },
  { id: 6, name: 'Clark Kent', age: 34, city: 'Metropolis' },
  { id: 7, name: 'Bruce Wayne', age: 21, city: 'Gotham' },
  { id: 8, name: 'Tim Drake', age: 21, city: 'Gotham' },
  { id: 9, name: 'Jimmy Olsen', age: 21, city: 'Metropolis' },
  { id: 10, name: 'Ryan Burns', age: 21, city: 'New York' },
];

const PORT = 3000;
const app: Express = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use('/users', (req, res) => {
  const filters = req.query;
  const filteredUsers = data.filter((user: any) => {
    let isValid = true;
    for (let key in filters) {
      isValid = isValid && user[key] == filters[key];
    }
    return isValid;
  });
  console.log(filteredUsers)
  res.send(filteredUsers);
});
app.listen(PORT, () => {
  console.log("App running with port: " + PORT);
});