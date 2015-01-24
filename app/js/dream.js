try {
    // node-webkit
    var gui = require('nw.gui');
    var win = gui.Window.get();

    // show devtools to debug
    win.showDevTools();
    win.maximize();
} catch (e) {

}

var sysDef = {
    'ROOT': {
        'PAGE_ID': 'ROOT',
        'FILE_PATH': './main.html',
        'SHOW_BACK': false,
        'BUTTON_LIST': [{
            'BUTTON_ID': 'button_channel1',
            'BUTTON_NAME': '通道一',
            'EVENT_TYPE': '1',
            'LOAD_DATA': 'channel_sys'
        }, {
            'BUTTON_ID': 'button_channel2',
            'BUTTON_NAME': '通道二',
            'EVENT_TYPE': '1',
            'LOAD_DATA': 'channel_sys'
        }, {
            'BUTTON_ID': 'button_channel3',
            'BUTTON_NAME': '通道三',
            'EVENT_TYPE': '1',
            'LOAD_DATA': 'channel_sys'
        }, {
            'BUTTON_ID': 'button_channel4',
            'BUTTON_NAME': '通道四',
            'EVENT_TYPE': '1',
            'LOAD_DATA': 'channel_sys'
        }, {
            'BUTTON_ID': 'debugger_tool',
            'BUTTON_NAME': '串口调试工具',
            'EVENT_TYPE': '1',
            'LOAD_DATA': 'debugger_tool'
        }, {
            'BUTTON_ID': 'seeting_tool',
            'BUTTON_NAME': '其他设置',
            'EVENT_TYPE': '1',
            'LOAD_DATA': 'seeting_tool'
        }, {
            'BUTTON_ID': 'button_history',
            'BUTTON_NAME': '病历',
            'EVENT_TYPE': '1',
            'LOAD_DATA': 'sick_history'
        }]
    },

    'debugger_tool': {
        'PAGE_ID': 'debugger_tool',
        'FILE_PATH': './view/debugger_tool.html',
        'JS_FILE': 'js/debugger_tool.js',
        'SHOW_BACK': false,
        'BUTTON_LIST': [{
            'BUTTON_ID': 'open_close_btn',
            'BUTTON_NAME': '打开串口',
            'EVENT_TYPE': '2',
            'LOAD_DATA': ''
        }, {
            'BUTTON_ID': 'send_data_btn',
            'BUTTON_NAME': '发送数据',
            'EVENT_TYPE': '2',
            'LOAD_DATA': ''
        }]
    },

    'seeting_tool': {
        'PAGE_ID': 'seeting_tool',
        'FILE_PATH': './view/seeting_tool.html',
        'SHOW_BACK': false,
        'BUTTON_LIST': [{
            'BUTTON_ID': 'link_sys1',
            'BUTTON_NAME': '系统1',
            'EVENT_TYPE': '1',
            'LOAD_DATA': 'channel_sys_sub1'
        }, {
            'BUTTON_ID': 'link_sys2',
            'BUTTON_NAME': '系统2',
            'EVENT_TYPE': '1',
            'LOAD_DATA': 'channel_sys_sub2'
        }, {
            'BUTTON_ID': 'link_sys3',
            'BUTTON_NAME': '系统3',
            'EVENT_TYPE': '1',
            'LOAD_DATA': 'channel_sys_sub3'
        }, {
            'BUTTON_ID': 'link_sys4',
            'BUTTON_NAME': '系统4',
            'EVENT_TYPE': '1',
            'LOAD_DATA': 'channel_sys_sub4'
        }]
    },

    'sick_history': {
        'PAGE_ID': 'sick_history',
        'URL_PATH': 'http://localhost:8083/task/list',
        'SHOW_BACK': false,
        'BUTTON_LIST': []
    },

    'channel_sys': {
        'PAGE_ID': 'channel_sys',
        'FILE_PATH': './view/channel_sys.html',
        'SHOW_BACK': false,
        'BUTTON_LIST': [{
            'BUTTON_ID': 'link_sys1',
            'BUTTON_NAME': '系统1',
            'EVENT_TYPE': '1',
            'LOAD_DATA': 'channel_sys_sub1'
        }, {
            'BUTTON_ID': 'link_sys2',
            'BUTTON_NAME': '系统2',
            'EVENT_TYPE': '1',
            'LOAD_DATA': 'channel_sys_sub2'
        }, {
            'BUTTON_ID': 'link_sys3',
            'BUTTON_NAME': '系统3',
            'EVENT_TYPE': '1',
            'LOAD_DATA': 'channel_sys_sub3'
        }, {
            'BUTTON_ID': 'link_sys4',
            'BUTTON_NAME': '系统4',
            'EVENT_TYPE': '1',
            'LOAD_DATA': 'channel_sys_sub4'
        }]
    },
    'channel_sys_sub1': {
        'PAGE_ID': 'channel_sys_sub1',
        'FILE_PATH': './view/channel_sys_sub1.html',
        'SHOW_BACK': true,
        'BUTTON_LIST': [{
            'BUTTON_ID': 'link_sys1',
            'BUTTON_NAME': '子系统1',
            'EVENT_TYPE': '1',
            'LOAD_DATA': 'channel_sys_time'
        }]
    },
    'channel_sys_sub2': {
        'PAGE_ID': 'channel_sys_sub2',
        'FILE_PATH': './view/channel_sys_sub2.html',
        'SHOW_BACK': true,
        'BUTTON_LIST': [{
            'BUTTON_ID': 'link_sys1',
            'BUTTON_NAME': '子系统1',
            'EVENT_TYPE': '1',
            'LOAD_DATA': 'channel_sys_time'
        }, {
            'BUTTON_ID': 'link_sys2',
            'BUTTON_NAME': '子系统2',
            'EVENT_TYPE': '1',
            'LOAD_DATA': 'channel_sys_time'
        }]
    },
    'channel_sys_sub3': {
        'PAGE_ID': 'channel_sys_sub3',
        'FILE_PATH': './view/channel_sys_sub3.html',
        'SHOW_BACK': true,
        'BUTTON_LIST': [{
            'BUTTON_ID': 'link_sys1',
            'BUTTON_NAME': '子系统1',
            'EVENT_TYPE': '1',
            'LOAD_DATA': 'channel_sys_time'
        }, {
            'BUTTON_ID': 'link_sys2',
            'BUTTON_NAME': '子系统2',
            'EVENT_TYPE': '1',
            'LOAD_DATA': 'channel_sys_time'
        }, {
            'BUTTON_ID': 'link_sys3',
            'BUTTON_NAME': '子系统3',
            'EVENT_TYPE': '1',
            'LOAD_DATA': 'channel_sys_time'
        }]
    },
    'channel_sys_sub4': {
        'PAGE_ID': 'channel_sys_sub4',
        'FILE_PATH': './view/channel_sys_sub4.html',
        'SHOW_BACK': true,
        'BUTTON_LIST': [{
            'BUTTON_ID': 'link_sys1',
            'BUTTON_NAME': '子系统1',
            'EVENT_TYPE': '1',
            'LOAD_DATA': 'channel_sys_time'
        }, {
            'BUTTON_ID': 'link_sys2',
            'BUTTON_NAME': '子系统2',
            'EVENT_TYPE': '1',
            'LOAD_DATA': 'channel_sys_time'
        }, {
            'BUTTON_ID': 'link_sys3',
            'BUTTON_NAME': '子系统3',
            'EVENT_TYPE': '1',
            'LOAD_DATA': 'channel_sys_time'
        }, {
            'BUTTON_ID': 'link_sys4',
            'BUTTON_NAME': '子系统4',
            'EVENT_TYPE': '1',
            'LOAD_DATA': 'channel_sys_time'
        }]
    },

    'channel_sys_time': {
        'PAGE_ID': 'channel_sys_time',
        'FILE_PATH': './view/channel_sys_time.html',
        'SHOW_BACK': true,
        'BUTTON_LIST': [{
            'BUTTON_ID': 'link_time1',
            'BUTTON_NAME': '时间1',
            'EVENT_TYPE': '2',
            'LOAD_DATA': 'ABCD'
        }, {
            'BUTTON_ID': 'link_time2',
            'BUTTON_NAME': '时间2',
            'EVENT_TYPE': '2',
            'LOAD_DATA': 'EFGH'
        }, {
            'BUTTON_ID': 'link_time3',
            'BUTTON_NAME': '时间3',
            'EVENT_TYPE': '2',
            'LOAD_DATA': 'IJKL'
        }, {
            'BUTTON_ID': 'link_time4',
            'BUTTON_NAME': '时间4',
            'EVENT_TYPE': '2',
            'LOAD_DATA': 'MNOP'
        }]
    }
};


var viewStack = new Array();
var serail; //全局的serialport对象
var dreamDb;
var currentPort = "COM4";

// init
document.addEventListener('DOMContentLoaded', function() {
    $('#closeWindow').click(function() {
        win.close();
    });

    var serialParam = {};
    try {
        serail = new dr.an.serial(serialParam);

        dreamDb = new dr.an.sqlitedb();
    } catch (e) {

    }
    $('#btnTurnOn').on('click', function() {
        if (serail.isOpen(currentPort)) {
            serail.close(currentPort);

            $("#btnTurnOn").text("Turn On");
        } else {
            serail.open(currentPort);

            $("#btnTurnOn").text("Turn Off");
        }
    });

    $("#splash_div").bind("click", function() {
        $("#main").show();
        $("#main").css('display', 'inline-block');
        $("#splash_div").remove();
        $("#channel1").click();
    });

    var rootBtns = sysDef.ROOT.BUTTON_LIST;
    $.each(rootBtns, function(index, btnObj) {
        $("#" + btnObj.BUTTON_ID).bind("click", function() {
            $("#sidebar-left").find("a").removeClass("btn-selected");
            $("#" + btnObj.BUTTON_ID).addClass("btn-selected");

            viewStack = [];
            var viewObj = {
                'pageId': btnObj.LOAD_DATA
            };
            viewStack.push(viewObj);

            loadPage(btnObj.LOAD_DATA);
        });
    });

    //$("#button_channel1").click();

    //$("#viewback").bind("click", backClick);

    registerEvent();
});



function loadPage(pageId) {
    var pageObj = sysDef[pageId];
    if (pageObj.SHOW_BACK) {
        $("#viewback").show();
    } else {
        $("#viewback").hide();
    }

    if (pageObj.FILE_PATH) {
        loadRightContent(pageObj.FILE_PATH, function() {
            //页面加载完成之后，绑定事件
            var btnList = pageObj.BUTTON_LIST;

            $.each(btnList, function(index, btnObj) {
                $("#" + btnObj.BUTTON_ID).bind("click", function() {
                    if (btnObj.EVENT_TYPE == 1) { //loadPage
                        var viewObj = {
                            'pageId': btnObj.LOAD_DATA
                        };
                        viewStack.push(viewObj);

                        loadPage(btnObj.LOAD_DATA);
                    } else { //sendData
                        if (serail && serail.isOpen(currentPort)) {
                            serail.writeThenDrainThenWait(currentPort, btnObj.LOAD_DATA);
                        }
                    }
                });

                //
                $("#" + btnObj.BUTTON_ID).text(btnObj.BUTTON_NAME);
            });

            // load js file
            if (pageObj.JS_FILE) {
                executeJs(pageObj.JS_FILE);
            }
        });
    } else if (pageObj.URL_PATH) {
        jQuery("#content").html("");
        var frameStr = "<iframe id='right_frame' src="+pageObj.URL_PATH+" style='margin-left:0px;height:600px;width:100%;'> </iframe";
        $(frameStr).appendTo(jQuery("#content"));

        $("#right_frame").load(function(){
            var mainheight = $(this).contents().find("body").height()+100;
            $(this).height(mainheight);
        });
    }

}

function executeJs(jsFileUrl) {
    $.ajax({
        url: jsFileUrl,
        type: "GET",
        dataType: "text",
        async: false,
        data: {},
        success: function(data) {
            try {
                var servExt = new Function(data);
                servExt.apply();
            } catch (e) {
                alert("卡片页面js加载错误");
            }
        },
        error: function() {;
        }
    });
}


function registerEvent() {
    $(document).on('myCustomEvent', function(event, data) {
        console.log("-------------receive event-------------" + JSON.stringify(data));
    });
}

function testDb() {
    if (dreamDb) {
        //dreamDb.createTable("CREATE TABLE ex2(a VARCHAR(10), b NVARCHAR(15), c TEXT, d INTEGER)");

        var startDate = new Date();
        var start = startDate.getTime();
        var itemObj = {
            'a': 'value1',
            'b': 'value2'
        };
        var itemArray = new Array();

        for (var i = 0; i < 1000; i++) {
            //dreamDb.insertOne("ex2", itemObj);

            itemArray.push(itemObj);
        }

        dreamDb.insertBatch("ex2", itemArray);

        var endDate = new Date();
        var end = endDate.getTime();

        console.log("#######################################" + (end - start));
    }


    /*    // 测试滑动块
        var slider = new Slider("#ex8", {
            tooltip: 'always'
        });  */
}

function backClick() {
    if (viewStack.length > 1) {
        viewStack.pop();
        var viewObj = viewStack[viewStack.length - 1];
        loadPage(viewObj.pageId);
    }
}

function loadRightContent(filePath, funcCallback) {
    $("#content").load(filePath, funcCallback);
}


window.addEventListener('message', function(event) {
    console.log(event.origin);

    console.log(event.data);

    serail.open("COM4");

    serail.writeThenDrainThenWait("COM4", "ABC");

    var msgData = event.data;
    if (msgData) {
        if (msgData.servObj == "serial") {
            if (msgData.actionMethod == "listPort") {
                serail.listPort();
            } else if (msgData.actionMethod == "open") {
                serail.open(msgData.dataObj.PORT_NUM);
            } else if (msgData.actionMethod == "writeData") {
                var dataObj = msgData.dataObj;
                serail.writeThenDrainThenWait(dataObj.PORT_NUM, dataObj.COMMAND);
            } else if (msgData.actionMethod == "getPorts") {
                returnPortList();
            }
        }
    }
});


function sendParamToFrame(sendData) { //发送消息
    document.getElementById("frameId").contentWindow.postMessage(sendData, '*');
}


function returnPortList() {
    var param = {};
    param.servObj = "serial"; //将操作父对象的serial对象
    param.actionMethod = "getPorts"; //操作方法
    var rtnData = [];
    jQuery.each(serail.getPorts(), function(index, item){
        rtnData.push(index);
    });

    param.dataObj = rtnData;
    
    sendParamToFrame(param);
}
