const handler=async(_0x5ed5ae,{conn:_0x85e212,isAdmin:_0x26f687})=>{if(_0x5ed5ae['fromMe'])return;if(_0x26f687)throw'*[❗]\x20𝙷𝙾𝙻𝙰\x20𝙲𝚁𝙴𝙰𝙳𝙾𝚁,\x20𝙲𝙾𝙼𝙾\x20𝙴𝚂𝚃𝙰?\x20𝚄𝚂𝚃𝙴𝙳\x20𝚈𝙰\x20𝙴𝚂\x20𝙰𝙳𝙼𝙸𝙽\x20𝙳𝙴\x20𝙴𝚂𝚃𝙴\x20𝙶𝚁𝚄𝙿𝙾*';try{await _0x85e212['groupParticipantsUpdate'](_0x5ed5ae['chat'],[_0x5ed5ae['sender']],'promote');}catch{await _0x5ed5ae['reply']('*[❗]\x20𝙴𝚁𝚁𝙾𝚁,\x20𝙽𝙾\x20𝙵𝚄𝙴\x20𝙿𝙾𝚂𝙸𝙱𝙻𝙴\x20𝙳𝙰𝚁𝙻𝙴\x20𝙰𝙳𝙼𝙸𝙽*');}};handler['command']=/^autoadmin$/i,handler['rowner']=!![],handler['group']=!![],handler['register']=!![],handler['botAdmin']=!![];export default handler;