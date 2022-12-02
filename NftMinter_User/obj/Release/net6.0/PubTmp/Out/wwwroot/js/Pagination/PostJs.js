
//function redirection(Url, NextScreenName) {
//    LockScreen();

//    if (@(ViewBag.ScreenName == null ? "0" : "1") == 0) {
//        $(location).attr("href", Url);
//        return;
//    }
//    $.ajax({
//        type: 'post', dataType: 'text', url: '@Url.Action("Tracking_MoveTo", "Contents")', data: {
//            CurrentScreen: '@Html.Raw(ViewBag.ScreenName)',
//            NextScreen: NextScreenName
//        }, success: function (data, textStatus, jQxhr) { $(location).attr("href", Url); }
//    });
//}

var CallBack_ApplySuccessAfter = function () { };
var CallBack_TablePostSuccessAfter = function () { };


function LoadTable2(Url, TableName, agData) {

    LockScreen();
    $.ajax({
        url: Url, data: agData,
        type: 'post', dataType: 'text', success: function (data, textStatus, jQxhr) {
            UnLockScreen();
            var jsonData = JSON.parse(data);
            if (jsonData.result) {
                $('#' + TableName + ' > tbody').empty();
                $('#' + TableName + ' > tbody:first').append(jsonData.tableRows);
                UnLockScreen();
            } else PostError(jsonData.iData, jsonData.sData);
        },
        error: PostPageError
    });
}

function LoadTable(Url, TableName, PageNav, PagePos, agData) {

    LockScreen();
    $.ajax({
        url: Url, data: agData,
        type: 'post', dataType: 'text', success: function (data, textStatus, jQxhr) {
            UnLockScreen();
            var jsonData = JSON.parse(data);
            if (jsonData.result) {
                $('#' + TableName + ' > tbody').empty();
                $('#' + TableName + ' > tbody:first').append(jsonData.tableRows);
                $('#' + PageNav).empty();
                $('#' + PageNav).append(jsonData.navStr);
                UnLockScreen();
            } else PostError(jsonData.iData, jsonData.sData);
        },
        error: PostPageError
    });
}

function PostError(iData, sData) {
    UnLockScreen();
    switch (iData) {
        case 0:
            swal.fire('오류', sData, "error");
            break;
        case 1:
            swal.fire('해킹 감지', sData + " 비정상적인 방법으로 접근시 형사 고발될 수 있습니다.", 'error');
            setTimeout(function () {
                $(location).attr("href", '@Url.Action("Index", "Home")');
            }, 1600);
            break;
        case 2:
            swal.fire('로그인 필요', "로그인이 필요한 서비스입니다.", 'error');
            setTimeout(function () {
                $(location).attr("href", '@Url.Action("Index", "Home")');
            }, 1600);
            break;
        default:
            $(location).attr("href", '@Url.Action("Index", "Home")');
            break;
    }
}

// Table Post Basic
function TablePostSuccess(data, textStatus, jQxhr) {
    UnLockScreen();
    var jsonData = JSON.parse(data);
    console.log(jsonData);
    if (jsonData.result) {
        $("#searchStr").val(jsonData.searchStr);
        $("#PagePos").text(jsonData.pagePos);
        $('#InfoTable > tbody').empty();
        $('#InfoTable > tbody:first').append(jsonData.tableRows);
        $('#PageNav').empty();
        $('#PageNav').append(jsonData.navStr);
        UnLockScreen();
        if (typeof CallBack_TablePostSuccessAfter === 'function') { CallBack_TablePostSuccessAfter(); }
    } else PostError(jsonData.iData, jsonData.sData);
}



function ApplySuccess(data, textStatus, jQxhr) {
    UnLockScreen();
    var jsonData = JSON.parse(data);
    if (jsonData.result) {
        console.log(jsonData);
        swal.fire("적용 완료", '요청한 내용 적용이 완료됐습니다.', 'success');
        if (typeof CallBack_ApplySuccessAfter === 'function') { CallBack_ApplySuccessAfter(); }
    } else PostError(jsonData.iData, jsonData.sData);
}

function PostPageError(jqXhr, textStatus, errorThrown) {
    UnLockScreen();
    swal.fire("오류", '데이터 오류', 'error');
}
    //a3w3f2
