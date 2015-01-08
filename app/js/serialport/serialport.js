GLOBAL.namespace("dr.an");

dr.an.serial = function(options) {
    var defaults = {
        "id": "-serial",
        "baudrate": 57600,
        "databits": 8,
        "stopbits": 1,
        "parity": "none",
        "buffersize": 255
    };

    var _self = this;

    this.serials = {};

    this.opts = jQuery.extend(defaults, options);

    this.serialPort = require('serialport');

    _self.listPort();
};

/**
 * 所有COMM口
 */
dr.an.serial.prototype.listPort = function() {
    var _self = this;
    _self.serialPort.list(function(err, ports) {
        ports.forEach(function(p) {
            var portName = p.comName.toString();

            _self.serials[portName] = undefined;
        });
    });
}



/**
 * 打开串口
 */
dr.an.serial.prototype.open = function(port) {
    var _self = this;
    if (!_self.serials[port]) {
        _self.serials[port] = new _self.serialPort.SerialPort(port, _self.opts);

        _self.serials[port].on('data', function(data) {
            console.log('data received----------------------------: ' + data);
        });
    }
}


/**
 *
 */
dr.an.serial.prototype.close = function(port) {
    var _self = this;

    if (_self.serials[port]) {
        _self.serials[port].close(function(err) {
            _self.serials[port] = undefined;
            console.log('port closed', err);
        });
    };
}

/**
 * 是否打开状态
 */
dr.an.serial.prototype.isOpen = function(port) {
    var _self = this;
    if (_self.serials[port]) {
        return true;
    }
    return false;
}

dr.an.serial.prototype.writeThenDrainThenWait = function(port, message) {
    var _self = this;
    console.log('Calling write...');
    _self.serials[port].write(message, function() {
        console.log('...Write callback returned...');
        console.log('...Calling drain...');
        _self.serials[port].drain(function() {
            console.log('...Drain callback returned...');
            console.log('...Waiting', 1000, 'milliseconds...');
        });
    });
};
