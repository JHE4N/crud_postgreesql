const connection = require('../database/db')

exports.save = (req, res) => {
    const client = req.body.user
    const property = req.body.property
    const value = req.body.value
    console.log(client+' '+property+' '+value);
    connection.query(
        'INSERT INTO crud(id, client, property, value) VALUES($1, $2, $3, $4)',
        [createHash(client, property, value), client, property, value],
        (error, results) => {
            if(error) {
                console.log(error);
            } else {
                res.redirect('/');         
            }
    })
}

exports.update = (req, res) => {
    const id = req.body.id
    const client = req.body.user
    const property = req.body.property
    const value = req.body.value
    console.log(client+' '+property+' '+value);
    connection.query(
        'UPDATE crud SET client=$1, property=$2, value=$3, id=$4 WHERE id=$4',
        [client, property, value, id],
        (error, results) => {
            if(error) {
                console.log(error);
            } else {
                res.redirect('/');         
            }
    })
}

function createHash(client, property, value) {
    return Number(client.toString().length) + Number(property.toString().length) + Number(value)
}