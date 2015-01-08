GLOBAL.namespace("dr.an");

dr.an.sqlitedb = function(options) {
    var defaults = {
        "id": "-sqlitedb"
    };

    var _self = this;

    this.opts = jQuery.extend(defaults, options);

    this.sqlite3 = require('sqlite3').verbose();

    this.dreamDB = new this.sqlite3.Database("D:/dream.db");
};

dr.an.sqlitedb.prototype.getDbObj = function() {
	var _self = this;

	return _self.dreamDB;
}


dr.an.sqlitedb.prototype.close = function() {
	var _self = this;
	if (_self.dreamDB) {
		_self.dreamDB.close();
	}
}

/**
 * CREATE TABLE ex2(a VARCHAR(10), b NVARCHAR(15), c TEXT, d INTEGER)
 */
dr.an.sqlitedb.prototype.createTable = function(createStr) {
	var _self = this;

    _self.dreamDB.serialize(function() {
        _self.dreamDB.run(createStr);
    });
}

/** 
 * var itemObj = {'a':'value1','b':'value2'};
 */
dr.an.sqlitedb.prototype.insertOne = function(tableName, itemObj) {
	var _self = this;

    _self.dreamDB.serialize(function() {
    	var fields = new Array();
    	var values = new Array();
    	var fieldWenHao = new Array();
        $.each(itemObj, function(key, value){
            fields.push(key);
            values.push(value);
            fieldWenHao.push("?");
        });
        
        var stmt = _self.dreamDB.prepare("INSERT INTO " + tableName + "("+fields.join(",")+") VALUES ("+fieldWenHao.join(",")+")");
        
        stmt.run(values);

        stmt.finalize();
    });	
}

dr.an.sqlitedb.prototype.insertBatch = function(tableName, itemObjs) {
	var _self = this;

    _self.dreamDB.serialize(function() {

    	var itemObj = itemObjs[0];
    	var fields = new Array();
    	var fieldWenHao = new Array();
        $.each(itemObj, function(key, value){
            fields.push(key);
            fieldWenHao.push("?");
        });
        
        var stmt = _self.dreamDB.prepare("INSERT INTO " + tableName + "("+fields.join(",")+") VALUES ("+fieldWenHao.join(",")+")");
        
        $.each(itemObjs, function(index, itemObj){
        	var values = new Array();
	        $.each(itemObj, function(key, value){
	            values.push(value);
	        });
	    	stmt.run(values);    
        });

        stmt.finalize();
    });	
}


dr.an.sqlitedb.prototype.findById = function(tableName, pkCode) {
	var _self = this;

    _self.dreamDB.serialize(function() {
        var stmt = _self.dreamDB.prepare("INSERT INTO " + tableName + " VALUES (?)");
        for (var i = 0; i < 10; i++) {
            stmt.run("Ipsum " + i);
        }
        stmt.finalize();
    });	
}


