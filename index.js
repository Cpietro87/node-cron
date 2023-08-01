import cron from "node-cron";
import nodemailer from "nodemailer";

//user:  'palrhl57hnxnxkhj@ethereal.email'
//pass: '4ZWPtAvr4gcZnMUB19'


// se crea un mail de prueba
// nodemailer.createTestAccount().then( account => {
//     console.log(account);
// })

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth:{
        user: 'palrhl57hnxnxkhj@ethereal.email',
        pass: '4ZWPtAvr4gcZnMUB19'

    }
})

cron.schedule('*/1 * * * *', async () => {
   const info = await transporter.sendMail({
        from: "cristianpietrobon2019@gmail.com",
        to:  "cristianpietrobon2019@gmail.com",
        subject: "asesoria Web",
        text: "Hello World!!!"
    })
    console.log(info.messageId);

    const previewURL = nodemailer.getTestMessageUrl(info);

    console.log(previewURL);
})

// cron.schedule('38 22 31 7 *', () => {
//     console.log('Ejecutando!!!!');
// })
//esta anotacion representa que se va a ejecutar cada 1 minuto
// cron.schedule('*/1 * * * *', () => {
//     console.log('Ejecutando!!!!');
// })
// se ejecuta por intervalos del segundo 1-5
// cron.schedule('1-5 * * * * *', () => {
//     console.log('Ejecutando!!!!');
// })
// se ejeuta en los segundos especificados
// cron.schedule('1,5,7 * * * * *', () => {
    // puedo hacer llamadas 
    // basedatos
    // fetch 
    // api
    // process
//     console.log('Ejecutando!!!!');
// })

// cron.schedule('*/2 * * * * *', () => {
//     console.log(`se ejecuto en: ${new Date()}`);
// })

// 0 0 * * * - todos los dias a las 00:00
// 30 18 * * - todos los dias a las 18:30
// 0 0 * * 0 - todos los domingos a las 00:00
// 0 0 1 * * - el primer dia de cada mes
// 0 0 1 1 * - el primer dia de cada enero
// 