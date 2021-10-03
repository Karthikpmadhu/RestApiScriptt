const express = require('express');
const Joi = require('joi');
const app = express();
app.use(express.json());

const customer = [
     {title: 'Jay', id: 1} 
     {title: 'Harry', id: 2} 
     {title: 'Das', id: 3} 
     {title: 'Fredy', id: 4} 
     {title: 'Joy', id: 5} 
]
//Read
app.get('/',(req, res) => {
    res.send('Hello!!!');
});

app.get('/api/customers',(req, res) => {
    res.send(customers);
});

app.get('/api/customers',(req, res) => {
    const customer = customers.find(c=>c.id == parseInt(reg.params.id));
    if (!customer) res.status(404).send('h3 style="font-family:Arial;">Not found!</h3>');
});
//Create
app.post('/api/customers',(req, res) => {
    const{error} = validateCustomer(req.body);
    if (error) {
        res.status(400).send(error.details[0].message)
        return;
    }

        const customer = {
            id: customers.length+1,
            title: req.body.title
        };
        customers.push(customer);
        res.send(customer);
    };
//Update
    app.put('/api/customers/:id',(req, res) => {
        const customer = customers.find(c=>c.id == parseInt(reg.params.id));
    if (!customer) res.status(404).send('h3 style="font-family:Arial;">Not found!</h3>');

    const{error} = validateCustomer(req.body);
    if (error) {
        res.status(400).send(error.details[0].message)
        return;
    }
    customer.title = req.body.title;
    res.send(customer);
});
//Delete
app.delete('/api/customers/:id',(req, res) => {
    const customer = customers.find(c=>c.id == parseInt(reg.params.id));
    if (!customer) res.status(404).send('h3 style="font-family:Arial;">Not found!</h3>');

    const index = customers.indexOf(customer);
    customers.splice(index,1);

    res.send(customers);
});

const port = process.env.PORT || 8080;
app.listen(port, () =>console.group('Listening on port $(port'));
