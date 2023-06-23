const nodemailer = require('nodemailer');
var trans = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gamil.com',
    port: 465,
    secure: true,
    auth: {
        user: '', //Enter Your Mail here
        pass:'' //Enter Your key here
    }
})
var mail = {
    from: '', //Enter Your Mail
    to: [''], //Enter Their Mail or Mails
    subject: 'Dont be sad bro because reverse of sad is das, and das not good😶',
    attachments: [
        {  
            path: 'Mail Attachments\\AokfasGmMrF1kMeAv18wLkmITVytqpF7HtgkbmhH6Wk=_plaintext_638230987813820521.jpg'
        },
        {  
            path: 'Mail Attachments\\IMG-20230623-WA0023.jpg'
        },
        {  
            path: 'Mail Attachments\\IMG-20230623-WA0019.jpg'
        },
        {  
            path: 'Mail Attachments\\qOffNhRp_ZYbnk4u7pBou4OKOT23Vl9SjIB_MsUOW2E=_plaintext_638230987813820521.jpg'
        },
        {  
            path: 'Mail Attachments\\qOffNhRp_ZYbnk4u7pBou4OKOT23Vl9SjIB_MsUOW2E=_plaintext_638230987813820521.jpg'
        }
    ],
    text:'Enjoy You Memes'
}
trans.sendMail(mail, (err, info) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(info);
    }
})