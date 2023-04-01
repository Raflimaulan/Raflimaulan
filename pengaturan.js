/*
› Di Rancang Oleh Rafli, RaffX, Hega, Ajis, Alva
› Silahkan Di Pake Tapi Ngotak Yah Jangan Se Enaknya
› Kalo Recode/Reuplod Wajib Kasih Credit Pembuat @raffx_official
*/

const fs = require('fs')
const chalk = require('chalk')
//=================================================//
//—————「 Set Random Image Menu - False Bukan Untuk Di Ubah 」—————//
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
//=================================================//
//—————「 Sosmed True Ubah Sesuai Kebutuhan 」—————//
global.youtube = 'https://youtube.com/@raffx_official'
global.ig = 'https://instagram.com/syaxc_30'
global.mygc = 'https://chat.whatsapp.com/'
global.myweb = 'https://saweria.co/RaffXLawack'
global.linkgrupss = "https://chat.whatsapp.com/"
//==================================================//
//—————— Rawan Error Kalo Gatau Jangan Ubah Ribet ——————//
global.linkpro = 'mailto:support@whatsapp.com?subject=Deactivate%20My%20Account%20Number&body=Please%20Deactivate%20The%20My%20Account%20Number%20%2B62XXXXXXXX%20Immediately%20Because%20The%20Number%20Has%20Been%20Lost'
global.linkun = 'mailto:support@whatsapp.com?subject=المساعدة%20في%20إلغاء%20حظر%20رقمي&body=Admins%20Whatsapp%20😰kenapa%20nomer%20saya%20(%20+62xx%20)%20di%20blokir%20padahal%20saya%20tidak%20melakukan apa%20apa%20nomer%20saya%20hanya%20di%20pinjam%20oleh%20saudara%20saya%20yang%20tinggal%20di%20amerika😢1hari%20kemuadian%20nomernya%20di%20blokir mohon%20atas%20ketidaknyamananya%20di%20perbaiki 😩salam%20hangat'
global.email = 'raflimaulanbegal15@gmail.com'
global.region = 'Purwokerto'
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
//—————「 Set Nama Own & Bot 」—————//
global.nomerOwner = "6282136168315" // Ubah Owner Di File pengaturanadmin-database-paling bawah setting
global.namaOwner = "RaffX"
global.footer = 'RaffXMn'
//=================================================//
global.packname = 'RAFFX BOT 2023'
global.ownerr = ['RaffX Official']
global.author = ['RaffX Official']
global.prefa = ['','!','.',',','#','*']
global.sp = '•'
global.mess = {
    wait: '⏳ _*Loading...*_',
    success: "_𝙎𝙪𝙘𝙘𝙚𝙨𝙨シ_",
    group: "_Khusus Digunakan Di Group_",
    owner: "_Khusus Digunakan Owner_",
    maintenance: "Mohon Maaf Server Bot Sedang Dalam Masa Maintenance Dan Sedang Di Update\nKembali Lain Waktu. TerimaKasih",
    admin: "_khusus Digunakan Admin Group Ini_",
    badmin: "_Khusus Digunakan Oleh Bot Admin_", 
    nsfw: '⚠️ _*Fitur NSFW tidak diaktifkan, chat admin grup supaya diaktifkan*_',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
}
global.timeBug = 1 // 1 Menit
//=================================================//
global.thumb = { url: 'https://postimg.cc/BtzYbNwJ' }
global.visoka = { url: 'https://a.uguu.se/fVFNCwix.mp4' }
global.menuimg = { url: 'https://ibb.co/58992y3' }
global.zy = { url: 'https://ibb.co/58992y3' }
global.logonya = fs.readFileSync("./media/gambarnye/raffx.jpg")
global.thumbnailvid = { url: 'https://telegra.ph/file/d718d5a123a0943abfb30.jpg4' }
global.bgv = { url: 'https://a.uguu.se/YHuhGMUw.mp4' }
global.removebgkey = "o9jGwRuAbYFGprJDwZhEAsU1" 
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
