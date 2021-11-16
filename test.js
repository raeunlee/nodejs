const nodemailer = require('nodemailer');
//const로 변수명 지정 후, require로 불러오면 됨

//계정정보 선언 - 호스트 정보, 포트 정보, 보안. 유저정보와 비밀번호정보! nodemailer->smtp에 나와있음

const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f794759b8d5a73",
      pass: "8beed692016cc2"
    }
}


//메일을 보내려면 SMTP서버가 있어야하고 관리자에 해당하는 게정정보가 있어야함
const send = async(option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {

        if(error) {
            console.log(error);
        }
        else{
            console.log(info);
            return info.response;
        }
    });
};

let email_data = {
    from: 'admin@naver.com',
    to: 'admin@naver.com',
    subject: 'test-mail',
    text: 'node.js 한시간만에 끝내보자'
}

send(email_data);