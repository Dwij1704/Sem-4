const nodemailer = require('nodemailer');
var trans = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gamil.com',
    port: 465,
    secure: true,
    auth: {
        user: 'dwijpatel1704@gmail.com',
        pass:'rtuxzdtgtnuzdsrs'
    }
})
// drashtimala09@gmail.com,
// 14shubhamjain12@gmail.com,
// aryaninvestment@gmail.com,
// ashviraval0104@gmail.com,
// dwijpatel1704@gmail.com,
// singhamankumar207@gmail.com,
// khushi.nandwal2612@gmail.com,
// maisuriyakhushi470@gmail.com,
// jaysolanki1208@gmail.com
// 15jeel6201patel@gmail.com
// rbrijesh306@gmail.com
var mail = {
    from: 'dwijpatel1704@gmail.com',
    to: ['jyotimistry210@gmail.com','14shubhamjain12@gmail.com','jaysolanki1208@gmail.com','rbrijesh306@gmail.com','maisuriyakhushi470@gmail.com','ashviraval0104@gmail.com','drashtimala09@gmail.com','15jeel6201patel@gmail.com'],
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