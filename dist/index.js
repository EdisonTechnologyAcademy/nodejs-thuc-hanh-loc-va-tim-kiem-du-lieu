"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
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
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use('/users', (req, res) => {
    const filters = req.query;
    const filteredUsers = data.filter((user) => {
        let isValid = true;
        for (let key in filters) {
            isValid = isValid && user[key] == filters[key];
        }
        return isValid;
    });
    console.log(filteredUsers);
    res.send(filteredUsers);
});
app.listen(PORT, () => {
    console.log("App running with port: " + PORT);
});
//# sourceMappingURL=index.js.map