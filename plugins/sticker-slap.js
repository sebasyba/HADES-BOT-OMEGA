import{sticker}from'../lib/sticker.js';import _0x5eab2a from'node-fetch';const handler=async(_0x238999,{conn:_0x2d85d7,args:_0x3f27c3,usedPrefix:_0x38eb7f,command:_0x354662})=>{let _0x4f1cc3;_0x238999['isGroup']?_0x4f1cc3=_0x238999['mentionedJid'][0x0]?_0x238999['mentionedJid'][0x0]:_0x238999['quoted']?_0x238999['quoted']['sender']:![]:_0x4f1cc3=_0x238999['chat'];const _0x56e430='*[❗]\x20𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰\x20𝙾\x20𝙼𝙴𝙽𝙲𝙸𝙾𝙽𝙰\x20𝙰\x20𝙰𝙻𝙶𝚄𝙸𝙴𝙽*\x0a\x0a*—◉\x20𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\x0a◉\x20'+(_0x38eb7f+_0x354662)+'\x20@'+global['suittag'];if(_0x4f1cc3===_0x238999['chat']&&_0x238999['isGroup']||!_0x4f1cc3&&_0x238999['isGroup'])return _0x238999['reply'](_0x56e430,_0x238999['chat'],{'mentions':_0x2d85d7['parseMention'](_0x56e430)});try{let _0x1edd61;_0x4f1cc3===_0x238999['chat']?_0x1edd61='ʜᴀᴅᴇs\x20ʙᴏᴛ\x20ᴏᴍᴇɢᴀ\x20':_0x1edd61=_0x2d85d7['getName'](_0x4f1cc3);let _0x6c099a=_0x2d85d7['getName'](_0x238999['sender']),_0x366f4a=await _0x5eab2a('https://api.waifu.pics/sfw/slap'),_0x90bdc3=await _0x366f4a['json'](),{url:_0x3dc3ea}=_0x90bdc3,_0x3aa97e=await sticker(null,_0x3dc3ea,_0x6c099a+'\x20le\x20dio\x20una\x20bofetada\x20a\x20'+_0x1edd61,null);_0x2d85d7['sendFile'](_0x238999['chat'],_0x3aa97e,null,{'asSticker':!![]},_0x238999,!![],{'contextInfo':{'forwardingScore':0xc8,'isForwarded':!![]}},{'quoted':_0x238999});}catch{throw'*[❗]\x20𝙴𝚁𝚁𝙾𝚁,\x20𝚅𝚄𝙴𝙻𝚅𝙰\x20𝙰\x20𝙸𝙽𝚃𝙴𝚁𝙽𝚃𝙰𝚁𝙻𝙾*';};};handler['help']=['slap'],handler['tags']=['General'],handler['command']=/^(slap|bofetada)$/i,handler['register']=!![],handler['group']=!![];export default handler;