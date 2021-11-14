// SILAHKAN KALIAN ATUR SESUAI KEINGINAN KALIAN :)
// NO ENC ALL FITUR? CHAT ME 🥴
// BY HANN SYKES | YOUTUBE : HannSykes
/*++++++++++++++++++++++++++++++++++++++++++++*/

// UCAPAN WELCOME
const ucapan = (num, mdata, pushname) => {
	return `Hello, @${num.split('@')[0]} 👋
Selamat Datang Di *_${mdata.subject}_*
Seperti Biasa Jauhi Keramaian, Ketatkan Celana Dalam, Simetriskan Kedudukan, Jangan Pernah Semangat Tetaplah Putus Asa Jadilah Beban Keluarga Jangan Lupa Baca Desk!

~ Thanks`
}

exports.ucapan = ucapan

// FOOTER WELCOME
const footerwelkam = `JANGAN LUPA PATUHI RULES!`
exports.footerwelkam = footerwelkam


// UCAPAN GOODBYE
const goodbye = (num, mdata, pushname) => {
  return `Good Bye! @${num.split('@')[0]}\nDasar Anak Ngen...`
  }
exports.goodbye = goodbye


// FOOTER GOODBYE
const footergoodbye = `SEMOGA TENANG DI ALAM SANA`
exports.footergoodbye = footergoodbye