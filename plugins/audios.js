import{sticker}from'../lib/sticker.js';const handler=_0x1701aa=>_0x1701aa;handler['all']=async function(_0x542005,{conn:_0x5012a5}){const _0x3a07d7=global['db']['data']['chats'][_0x542005['chat']];if(/^descargas|Descargas$/i['test'](_0x542005['text'])&&!_0x3a07d7['isBanned']){if(!db['data']['chats'][_0x542005['chat']]['audios'])return;if(!db['data']['settings'][this['user']['jid']]['audios_bot']&&!_0x542005['isGroup'])return;const _0x2a7e47='./Audios/descargas.mp3';mconn['conn']['sendPresenceUpdate']('recording',_0x542005['chat']),mconn['conn']['sendMessage'](_0x542005['chat'],{'audio':{'url':_0x2a7e47},'fileName':'error.mp3','mimetype':'audio/mpeg','ptt':!![]},{'quoted':_0x542005});}if(/^juegos|Juegos$/i['test'](_0x542005['text'])&&!_0x3a07d7['isBanned']){if(!db['data']['chats'][_0x542005['chat']]['audios'])return;if(!db['data']['settings'][this['user']['jid']]['audios_bot']&&!_0x542005['isGroup'])return;const _0x572f22='./Audios/Konede.mp3';mconn['conn']['sendPresenceUpdate']('recording',_0x542005['chat']),mconn['conn']['sendMessage'](_0x542005['chat'],{'audio':{'url':_0x572f22},'fileName':'error.mp3','mimetype':'audio/mpeg','ptt':!![]},{'quoted':_0x542005});}if(/labiblia|LaBiblia^$/i['test'](_0x542005['text'])&&!_0x3a07d7['isBanned']){if(!db['data']['chats'][_0x542005['chat']]['audios'])return;if(!db['data']['settings'][this['user']['jid']]['audios_bot']&&!_0x542005['isGroup'])return;const _0x383cba='./Audios/La\x20biblia.mp3';mconn['conn']['sendPresenceUpdate']('recording',_0x542005['chat']),mconn['conn']['sendMessage'](_0x542005['chat'],{'audio':{'url':_0x383cba},'fileName':'error.mp3','mimetype':'audio/mpeg','ptt':!![]},{'quoted':_0x542005});}if(/groupinfo|Groupinfo^$/i['test'](_0x542005['text'])&&!_0x3a07d7['isBanned']){if(!db['data']['chats'][_0x542005['chat']]['audios'])return;if(!db['data']['settings'][this['user']['jid']]['audios_bot']&&!_0x542005['isGroup'])return;const _0x2b76b4='./Audios/naa.mp3';mconn['conn']['sendPresenceUpdate']('recording',_0x542005['chat']),mconn['conn']['sendMessage'](_0x542005['chat'],{'audio':{'url':_0x2b76b4},'fileName':'error.mp3','mimetype':'audio/mpeg','ptt':!![]},{'quoted':_0x542005});}return!0x0;};export default handler;