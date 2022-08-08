const menu = (prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender) => {
return `
╭━〢⎙ Bem vindo ━━╮
┣ ⩺ Número: ${sender}
┣ ⩺ Nome: ${pushname}
┣ ⩺ Horario: ${hora}
┣ ⩺ Data: ${data}
╰━〢⎙ Ao menu ━━╯

╭━━〢⎙ Membro ️━━╮
┣ ⩺ ${prefixo}perfil
┣ ⩺ ${prefixo}dono
┣ ⩺ ${prefixo}play ( com botão )
┣ ⩺ ${prefixo}playaudio - nome (em manutenção)
┣ ⩺ ${prefixo}playvideo - nome (em manutenção)
┣ ⩺ ${prefixo}telegra.ph - marca foto (OFF)
╰━━〢⎙ Membro ️━━╯

╭━━〢⎙ Dono ️━━╮
┣ ⩺ ${prefixo}ping
┣ ⩺ ${prefixo}sair
┣ ⩺ ${prefixo}executar - comando (OFF)
┣ ⩺ ${prefixo}clonar - número
┣ ⩺ ${prefixo}fotobot - marca foto (beta)
┣ ⩺ ${prefixo}setprefix - simbolo
╰━━〢⎙ Dono ️━━╯

╭━━〢⎙ Adms ️━━╮
┣ ⩺ ${prefixo}gplink
┣ ⩺️ ${prefixo}resetarlink
┣ ⩺️ ${prefixo}infogp
┣ ⩺️ ${prefixo}mudardk - texto
┣ ⩺ ${prefixo}mudarnm - nome
┣ ⩺ ${prefixo}rebaixar - número
┣ ⩺ ${prefixo}promover - número
┣ ⩺ ${prefixo}banir - número
┣ ⩺ ${prefixo}adicionar - número
╰━━〢⎙ Adms ━━╯

╭━━〢⎙ Info bot ━━╮
┣ ⩺ Prefixo: ${prefixo}
┣ ⩺ Nome Bot: ${nomeBot}
┣ ⩺ Dono: wa.me/${numeroDono}
┣ ⩺ Nome Dono: ${nomeDono}
╰━━〢⎙ Info bot ️━━╯
`
}
exports.menu = menu