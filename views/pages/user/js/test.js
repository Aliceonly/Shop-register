$(function () {
    var show_num = [];
    draw(show_num);
    $("#canvas").on('click', function () {
        draw(show_num);
    })
    $("#sub_btn").on('click', function () {
        //获取用户的手机号
        var phone = $("#phone").val();
        //获取推荐人手机号
        var referphone = $("#referphone").val();
        //获取用户输入的密码
        var password = $("#password").val();
        reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{8,16}$/;
        var result = reg.test(password);
        if (result == false) {
            alert("密码不能为纯数字，不能为纯小写字母，不能为纯大写字母，不能为纯特殊符号，至少8-16位")
            return false;
        }
        //获取用户输入的确认密码
        var repwd = $("#repwd").val();
        if (phone == "") {
            alert("请输入手机号码！");
            return false;
        }
        if (!(/^1[34578]\d{9}$/.test(phone))) {
            alert("请输入正确的手机号！");
            return false;
        }
        if (referphone.length != 0) {
            if (!(/^1[34578]\d{9}$/.test(referphone))) {
                alert("请输入正确的推荐人手机号！");
                return false;
            }
        }
        if (password == "") {
            alert("请输入密码！");
            return false;
        }
        if (repwd == "") {
            alert("确认密码不能为空！");
            return false;
        }
        //判断两次输入的密码是否一致
        if (repwd != password) {
            //将确认密码清空，即将确认密码密码框中的value属性设置为空
            $("#repwd").val("");
            alert("两次输入的密码不一致！");
            return false;
        }
        var val = $("#itxt").val().toLowerCase();
        var num = show_num.join("");
        if (val == '') {
            alert('请输入验证码！');
            return false;
        } else if (val == num) {
            alert('提交成功！');
            $("#itxt").val('');
            return ture;
            // draw(show_num);
        } else {
            alert('验证码错误！请重新输入！');
            return false;
            $("#itxt").val('');
            // draw(show_num);
        }
    })
})
//生成并渲染出验证码图形
function draw(show_num) {
    var canvas_width = $('#canvas').width();
    var canvas_height = $('#canvas').height();
    var canvas = document.getElementById("canvas");//获取到canvas的对象，演员
    var context = canvas.getContext("2d");//获取到canvas画图的环境，演员表演的舞台
    canvas.width = canvas_width;
    canvas.height = canvas_height;
    var sCode = "a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
    var aCode = sCode.split(",");
    var aLength = aCode.length;//获取到数组的长度
    for (var i = 0; i < 4; i++) { //这里的for循环可以控制验证码位数（如果想显示6位数，4改成6即可）
        var j = Math.floor(Math.random() * aLength);//获取到随机的索引值
        // var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
        var deg = Math.random() - 0.5; //产生一个随机弧度
        var txt = aCode[j];//得到随机的一个内容
        show_num[i] = txt.toLowerCase();
        var x = 10 + i * 20;//文字在canvas上的x坐标
        var y = 20 + Math.random() * 8;//文字在canvas上的y坐标
        context.font = "bold 23px 微软雅黑";
        context.translate(x, y);
        context.rotate(deg);
        context.fillStyle = randomColor();
        context.fillText(txt, 0, 0);
        context.rotate(-deg);
        context.translate(-x, -y);
    }
    for (var i = 0; i <= 5; i++) { //验证码上显示线条
        context.strokeStyle = randomColor();
        context.beginPath();
        context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
        context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
        context.stroke();
    }
    for (var i = 0; i <= 30; i++) { //验证码上显示小点
        context.strokeStyle = randomColor();
        context.beginPath();
        var x = Math.random() * canvas_width;
        var y = Math.random() * canvas_height;
        context.moveTo(x, y);
        context.lineTo(x + 1, y + 1);
        context.stroke();
    }
}
//得到随机的颜色值
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}
$(function () {
    //给注册按钮绑定单击事件


















});

//用户必须同意协议才可以通过
function disable() {
    document.getElementById("sub_btn").disabled = true
}
function enable() {
    document.getElementById("sub_btn").disabled = false
}