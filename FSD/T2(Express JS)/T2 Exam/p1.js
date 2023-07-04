const nm=require('nodemailer');
const trans=nm.createTransport({
    service:'gamil',
    host:'smtp.gmail.com',
    secure:true,
    auth:{
        user:'dwijpatel1704@gmail.com',
        pass:'msodgzrsdqjqpppn'
    }
});
const mail={
    subject:'HI',
    text:'Good Morning',
    to:'dwijpatel1704@gmail.com',
    from:'dwijpatel1704@gmail.com'
};
trans.sendMail(mail,(err,info)=>{
    if (err){
        console.log(err)
    }
    else{
        console.log(info)
    }
})