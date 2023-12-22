
    swal({
        "title": "公告",
        "text": '<div\x20align=\x22center\x22><p\x20class=\x22klan\x22>\x20获取密码方式</span></p><br\x20/><p\x20class=\x22klan\x22>\x20关注公众号</span></p><br\x20/><p\x20class=\x22klan\x22>\x20心科技</span></p><br\x20/><p\x20class=\x22klan\x22>\x20回复关键词：ID</p></span><br\x20/></div>',
        "html": !![],
        "type": "input",
        "closeOnConfirm": ![],
        "closeOnCancel": ![],
        "confirmButtonText": '确\x20认',
        "inputPlaceholder": "请输入密码",
        'inputType': "password",
        'showLoaderOnConfirm': !![]
    }, function (_0x2cc41b) {
        if (_0x2cc41b != "5813".split("").reverse().join("")) {
            swal["showInputError"]("入输新重请，误错码密".split("").reverse().join(""));
            return;
        }
        swal("用使迎欢".split("").reverse().join(""), '密码正确', "success");
    });
