try {
    // node-webkit
    var gui = require('nw.gui');
    var win = gui.Window.get();

    // show devtools to debug
    win.showDevTools();

} catch (e) {

}

var sysDef = {
'ROOT' : 
{
'PAGE_ID' : 'ROOT',
'FILE_PATH' : './main.html', 
'BUTTON_LIST' : [
{'BUTTON_ID': 'button_channel1','BUTTON_NAME': '通道一','EVENT_TYPE':'1','LOAD_DATA':'channel_sys'},
{'BUTTON_ID': 'button_channel2','BUTTON_NAME': '通道二','EVENT_TYPE':'1','LOAD_DATA':'channel_sys'},
{'BUTTON_ID': 'button_channel3','BUTTON_NAME': '通道三','EVENT_TYPE':'1','LOAD_DATA':'channel_sys'},
{'BUTTON_ID': 'button_channel4','BUTTON_NAME': '通道四','EVENT_TYPE':'1','LOAD_DATA':'channel_sys'}
]
} , 

'channel_sys' : 
{
'PAGE_ID' : 'channel_sys',
'FILE_PATH' : './view/channel_sys.html', 
'BUTTON_LIST' : [
{'BUTTON_ID': 'link_sys1','BUTTON_NAME': '系统1','EVENT_TYPE':'1','LOAD_DATA':'channel_sys_sub1'},
{'BUTTON_ID': 'link_sys2','BUTTON_NAME': '系统2','EVENT_TYPE':'1','LOAD_DATA':'channel_sys_sub2'},
{'BUTTON_ID': 'link_sys3','BUTTON_NAME': '系统3','EVENT_TYPE':'1','LOAD_DATA':'channel_sys_sub3'},
{'BUTTON_ID': 'link_sys4','BUTTON_NAME': '系统4','EVENT_TYPE':'1','LOAD_DATA':'channel_sys_sub4'}
]
}
,
'channel_sys_sub1' : 
{
'PAGE_ID' : 'channel_sys_sub1',
'FILE_PATH' : './view/channel_sys_sub1.html', 
'BUTTON_LIST' : [
{'BUTTON_ID': 'link_sys1','BUTTON_NAME': '子系统1','EVENT_TYPE':'1','LOAD_DATA':'channel_sys_time'}
]
}
,
'channel_sys_sub2' : 
{
'PAGE_ID' : 'channel_sys_sub2',
'FILE_PATH' : './view/channel_sys_sub2.html', 
'BUTTON_LIST' : [
{'BUTTON_ID': 'link_sys1','BUTTON_NAME': '子系统1','EVENT_TYPE':'1','LOAD_DATA':'channel_sys_time'},
{'BUTTON_ID': 'link_sys2','BUTTON_NAME': '子系统2','EVENT_TYPE':'1','LOAD_DATA':'channel_sys_time'}
]
}
,
'channel_sys_sub3' : 
{
'PAGE_ID' : 'channel_sys_sub3',
'FILE_PATH' : './view/channel_sys_sub3.html', 
'BUTTON_LIST' : [
{'BUTTON_ID': 'link_sys1','BUTTON_NAME': '子系统1','EVENT_TYPE':'1','LOAD_DATA':'channel_sys_time'},
{'BUTTON_ID': 'link_sys2','BUTTON_NAME': '子系统2','EVENT_TYPE':'1','LOAD_DATA':'channel_sys_time'},
{'BUTTON_ID': 'link_sys3','BUTTON_NAME': '子系统3','EVENT_TYPE':'1','LOAD_DATA':'channel_sys_time'}
]
}
,
'channel_sys_sub4' : 
{
'PAGE_ID' : 'channel_sys_sub4',
'FILE_PATH' : './view/channel_sys_sub4.html', 
'BUTTON_LIST' : [
{'BUTTON_ID': 'link_sys1','BUTTON_NAME': '子系统1','EVENT_TYPE':'1','LOAD_DATA':'channel_sys_time'},
{'BUTTON_ID': 'link_sys2','BUTTON_NAME': '子系统2','EVENT_TYPE':'1','LOAD_DATA':'channel_sys_time'},
{'BUTTON_ID': 'link_sys3','BUTTON_NAME': '子系统3','EVENT_TYPE':'1','LOAD_DATA':'channel_sys_time'},
{'BUTTON_ID': 'link_sys4','BUTTON_NAME': '子系统4','EVENT_TYPE':'1','LOAD_DATA':'channel_sys_time'}
]
}
,

'channel_sys_time' : 
{
'PAGE_ID' : 'channel_sys_time',
'FILE_PATH' : './view/channel_sys_time.html', 
'BUTTON_LIST' : [
{'BUTTON_ID': 'link_time1','BUTTON_NAME': '时间1','EVENT_TYPE':'2','LOAD_DATA':'ABCD'},
{'BUTTON_ID': 'link_time2','BUTTON_NAME': '时间2','EVENT_TYPE':'2','LOAD_DATA':'EFGH'},
{'BUTTON_ID': 'link_time3','BUTTON_NAME': '时间3','EVENT_TYPE':'2','LOAD_DATA':'IJKL'},
{'BUTTON_ID': 'link_time4','BUTTON_NAME': '时间4','EVENT_TYPE':'2','LOAD_DATA':'MNOP'}
]
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
    $.each(rootBtns, function(index, btnObj){
        $("#" + btnObj.BUTTON_ID).bind("click", function() {
            viewStack = [];
            var viewObj = {
                'pageId': btnObj.LOAD_DATA
            };
            viewStack.push(viewObj);
                 
            loadPage(btnObj.LOAD_DATA);
        });
    });

    $("#button_channel1").click();

    $("#viewback").bind("click", backClick);

});


function loadPage(pageId) {
    var pageObj = sysDef[pageId];

    loadRightContent(pageObj.FILE_PATH, function(){
        //页面加载完成之后，绑定事件
        var btnList = pageObj.BUTTON_LIST;

        $.each(btnList, function(index, btnObj){
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
        });
    });
}



function testDb() {
    if (dreamDb) {
        //dreamDb.createTable("CREATE TABLE ex2(a VARCHAR(10), b NVARCHAR(15), c TEXT, d INTEGER)");
        
        var startDate=new Date();
        var start = startDate.getTime();
        var itemObj = {'a':'value1','b':'value2'};
        var itemArray = new Array();

        for (var i=0;i<1000;i++) {
            //dreamDb.insertOne("ex2", itemObj);

            itemArray.push(itemObj);
        }

        dreamDb.insertBatch("ex2", itemArray);

        var endDate=new Date();
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
    $("#rightContainer").load(filePath, funcCallback);
}


