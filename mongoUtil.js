const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://iot:Jamil54321@cluster0.bre70.mongodb.net/';

var _db;

module.exports = {
    connectToServer: function( callback){
        MongoClient.connect(url, {useNewUrlParser: true}, function(err, client){
            _db = client.db('mydb');
            return callback(err);
        });
    },
    getDb: function(){
        return _db;
    }
};