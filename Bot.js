import pkg from 'discord.js';
import cmddata from 'quick.db'
import Create from "./Function/CreateBot.js"
import got from "./Function/CreateBot.js"
const { Client, MessageEmbed } = pkg;
const devmode = false
const client = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_PRESENCES", "GUILD_MEMBERS"],
    disableEveryone: true
});

let checkinterval;
let updating = false
let BotData
let disabledcmd = []
let restarted = 0
cmddata.get(`84416519844165498416584165498165189165198416`) ? (BotData = cmddata.get(`84416519844165498416584165498165189165198416`)["gay"],restarted = 1) : BotData = []
console.log(BotData)
cmddata.set(`84416519844165498416584165498165189165198416`,{"gay": []})
let min = 1000 * 60
Array.prototype.ForEach = function (fact,time,time2) {
    if(time && time2){
        console.log(time,time2)
        let tm = 0
        for (var ia = 0; ia < time; ia++) {
            for (var i = 0+tm; i < time2+tm; i++) {
                fact(this[i],i)
            }
            tm += time2
        }
    }else{
        for (var i = 0; i < this.length; i++) {
            fact(this[i],i)
        }
    }
}
let tiertimer = (tier) => {
    switch (Number(tier)) {
        case 0: return 0
        case 1:
            return min * 30 // number of minutes tier 1? yes i'll go wc for  min k
        case 2:
            return min * 60
        case 3:
            return min * 90
        case 4:
            return min * 180
        case 5:
        case 6:return min * 360
        case 7: return min*9999999
            default:
                return min*10
    }
}
let tiercooldown = (tier) => {
    switch (Number(tier)) {
        case 0: return 0
        case 1:
            return min * 330 // number of minutes tier 1? yes i'll go wc for  min k
        case 2:
            return min * 300
        case 3:
            return min * 270
        case 4:
            return min * 240
        case 5:
            case 6:
            return min * 30
            case 7: return min*9999999

            default: return 0
    }
}

let canunblock = true
client.on('ready', async () => {
    client.user.setActivity(`yusukedao`)
    console.log(`${client.user.username} Loadded ✅`)
    let serverlist = ''
    client.guilds.cache.forEach((guild) => {
        serverlist = serverlist.concat(" - " + guild.name + ": ID: " + guild.id + "\n")
    })
    console.log(serverlist)
})
//we gonna use quick.db for data store kk
client.on("message", async (msg) => {
    if (msg.guild.id !== "983281485769506917") return
    const prefix = "-"
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase()
    const check = (perm) => { // check permission replace perm with adminstartor? instead of member id ok ok
        if (msg.member.permissions.has(perm) || msg.member.permissions.has("ADMINISTRATOR")) {
            return true
        } else {
            return false
        }
    }

    let Embed = async (title, description) => {
        try{
            var embed = new MessageEmbed()
            .setTitle(title)
            .setColor(`RANDOM`)
            .setDescription(`${description || "None"}`)
            .setFooter('Request By ' + msg.author.tag, msg.author.displayAvatarURL())
       await msg.reply({ embeds: [embed] }) // we need to work on same file? yes okt   
        }catch(e){

        }
    }
    let error = async (title, description) => {
        try{
            var embed = new MessageEmbed()
            .setTitle(title)
            .setColor(`#2600ff`)
            .setDescription(`${description || "None"}`)
            .setFooter('Request By ' + msg.author.tag, msg.author.displayAvatarURL())
       await msg.reply({ embeds: [embed] }) // we need to work on same file? yes okt
        }catch(e){

        }
    }
    switch (cmd) {
        case `unban`:
            if(!check("BAN_MEMBERS")){
                return error(`unban`,"You Dont Have Permission To Do That")
            }
            if(!args[0]) return error("You Need To Specify Someone Id")
            async function dae(){
                const banList = await msg.guild.bans.fetch();
                const bannedUser = banList.find(user => user.id === args[0]);
                    bannedUser ? (await msg.guild.members.unban(args[0]),Embed("UnBan Cmd",`successfully UnBanned **<@${args[0]}>**`)) : Embed("UnBan Cmd",`That Member Is Not Banned`)
                    
            }
            dae()
        break;
        case `ban`:
            if(!check("BAN_MEMBERS")){
                return error("You Dont Have Permission To Do That")
            }
                if (msg.mentions.members.first()) {
                    if(!msg.mentions.members.first().bannable){
                        error(`Ban`,`I don't have permissions to ban **${msg.mentions.members.first()}**`)
                      //  msg.reply("I do not have permissions to ban " + msg.mentions.members.first());

                    }else{
                        try {
                            msg.mentions.members.first().ban();
                            Embed("Ban Cmd",`successfully Banned **${msg.mentions.members.first()}**`)
                        } catch {
                            msg.reply("I do not have permissions to ban" + msg.mentions.members.first());
                        }
                    }
                } else {
                    msg.reply("You do not have permissions to ban" + msg.mentions.members.first());
                }
        break;
        case `st${devmode == true? "dev" : ""}`: // ✅
        if(updating == true){
            return Embed("Bot","Updating Bot Please Try Again In Some Minutes")
        }
        if(devmode == true && !check("MANAGE_MESSAGES")&& !Number(msg.channel.id) == "1000248589651542076"){
            return error("You Dont Have Permission To Do That")
        }
            if (!check("ADMINISTRATOR")) return error("SetTier", "**You Dont Have Permission To Do That**")
            if (!args[1]) return error(`SetTier`, "**You Dont Specified Tier**")
            if (isNaN(args[1])) return error(`SetTier`, "**Tier Must Be A Number**")
            const member = msg.mentions.members.first() || msg.member // its better? no bc need this ${member.user.id}
            if (!member) return error(`SetTier`, "**You Dont Specified A Member!**")
            let buyed = msg.guild.roles.cache.find((r) => r.name === "<- Customer ->")
            try {
                let role = args[1] == 6 ? msg.guild.roles.cache.find(r => r.name === 'Tier 6') : args[1] == 5 ? msg.guild.roles.cache.find(r => r.name === 'Tier 5-$10 Exclusive (§6H Bot 9 min cooldown)') : args[1] == 4 ? msg.guild.roles.cache.find(r => r.name === 'Tier 4-$5 (§3H Bot 3 H cooldown)') : ""
                if(member.roles.cache.find(r => r.name === 'Tier 6') || member.roles.cache.find(r => r.name === 'Tier 5-$10 Exclusive (§6H Bot 9 min cooldown)') || member.roles.cache.find(r => r.name === 'Tier 4-$5 (§3H Bot 3 H cooldown)')){
                    member.roles.cache.find(r => r.name === 'Tier 6') ? member.roles.remove(member.roles.cache.find(r => r.name === 'Tier 6')).catch((er) => {}) : ""
                    member.roles.cache.find(r => r.name === 'Tier 5-$10 Exclusive (§6H Bot 9 min cooldown)') ? member.roles.remove(member.roles.cache.find(r => r.name === 'Tier 5-$10 Exclusive (§6H Bot 9 min cooldown)')).catch((er) => {}) : ""
                    member.roles.cache.find(r => r.name === 'Tier 4-$5 (§3H Bot 3 H cooldown)') ? member.roles.remove(member.roles.cache.find(r => r.name === 'Tier 4-$5 (§3H Bot 3 H cooldown)')).catch((er) => {}) : ""
                }
                cmddata.set(`${member.user.id}${msg.guild.id}Tier`, args[1])
                member.roles.add(buyed).catch((er) => {})
                if(role){
                    member.roles.add(role).catch((er) => {})
                }
               // console.log(role,args[1])
                Embed(`TierCheck`, `**${member.user.username}** Is Now Tier ${args[1]}`)
            }catch(er){}
            
            break;
        case `ct${devmode == true? "dev" : ""}`: // ✅
        if(updating == true){
            return Embed("Bot","Updating Bot Please Try Again In Some Minutes")
        }
        if(devmode == true && !check("MANAGE_MESSAGES")&& !Number(msg.channel.id) == "1000248589651542076"){
            return error("You Dont Have Permission To Do That")
        }
        try{
            let member2 = msg.mentions.members.first() || msg.member // its better? no bc need this ${member.user.id}
            if (!member2) return error(`CheckTier`, "**You Dont Specified A Member!**")
            if (!cmddata.get(`${member2.user.id}${msg.guild.id}Tier`)) return error(`CheckTier`, "**This User Dont Have Tier**")
            let tier = cmddata.get(`${member2.user.id}${msg.guild.id}Tier`)
            let rolee = tier == 6 ? msg.guild.roles.cache.find(r => r.name === 'Tier 6') : tier == 5 ? msg.guild.roles.cache.find(r => r.name === 'Tier 5-$10 Exclusive (§6H Bot 9 min cooldown)') : tier == 4 ? msg.guild.roles.cache.find(r => r.name === 'Tier 4-$5 (§3H Bot 3 H cooldown)') : ""
            member2.roles.add(rolee).catch((er) => {})
            let buyed2 = msg.guild.roles.cache.find((r) => r.name === "<- Customer ->")
            member2.roles.add(buyed2).catch((er) => {})

            Embed(`TierCheck`, `**${member2.user.username}** Is Tier ${tier}`)
        }catch(er){}
            break; // back
        case `blacklist`:
            if(updating == true){
                return Embed("Bot","Updating Bot Please Try Again In Some Minutes")
            }
            if(!check("ADMINISTRATOR")) return error("You Dont Have Permission To Do That")
            if(!args[0]) return error("You Need Specify Which Server need to be blacklisted")
            args.ForEach(async (serv) => {
                Create.blacklist(serv)
               await Embed("Blacklist","Blacklisted Server "+serv)
            })
        break;
        case `setpos${devmode == true? "dev" : ""}`:
            if(updating == true){
                return Embed("Bot","Updating Bot Please Try Again In Some Minutes")
            }
            if(devmode == true && !check("MANAGE_MESSAGES")&& !Number(msg.channel.id) == "1000248589651542076"){
                return error("You Dont Have Permission To Do That")
            }
            if (!cmddata.get(`${msg.member.user.id}${msg.guild.id}Tier`) || cmddata.get(`${msg.member.user.id}${msg.guild.id}Tier`) < 1) return error("Bot Start", `You Dont Have Permissions To Bot!`)
            if (!args[0]) return error(`Change Data`, `You Need Specify The Position X`)
            if (!args[1]) return error(`Change Data`, `You Need Specify The Position Y`)
            for (var i = 0; i < BotData.length; i++) {
                let ProData = BotData[i]
                if (ProData !== null) {
                    if (ProData.ID == msg.member.user.id) {
                        ProData.Bot.Pathfind.x = args[0]? Number(args[0]) : 0, ProData.Bot.Pathfind.y = args[1]? Number(args[1]):0
                        return Embed(`🚇Sea Farm🚇`, `\n\nBot Changed Pos To\n\nPosition X: **${ProData.Bot.Pathfind.x}**\nPosition Y: **${ProData.Bot.Pathfind.y}**`)
                    }
                }
            }
            break;
        case `bb`:
            if(updating == true){
                return Embed("Bot","Updating Bot Please Try Again In Some Minutes")
            }
            let bots = ""
            let count = Math.floor(BotData.length/5)+1
                console.log(BotData)
                BotData.ForEach((bot,leng,po) => {
                    let fals = 0
                    if(bot && bot.Bot){
                        bots+= `[${bot.Bot && bot.Bot.Actived == true ? "✔" : "❌"}] <@${bot.ID}> Is Botting with mode **${bot.Bot.Mode}** ${bot.Bot.Mode == "pathfind" || bot.Bot.Mode == "pathfinder" ? `at Position X: **${bot.Bot.Pathfind.x}**, Y: **${bot.Bot.Pathfind.y}** In **Sea Farm**` : bot.Bot.Mode == "farmred" || bot.Bot.Mode == "farmblue" || bot.Bot.Mode == "unblockred" || bot.Bot.Mode == "unblockblue" ? `In **Teammode**` : `In **${bot.Bot.pogaerf}**`}`+"\n"
                    }else{
                        fals--
                    }
                    if(leng+fals%5 === 0 && leng+fals !== 0 || leng == BotData.length-1){
                        Embed("Botting Players:",bots)
                        console.log(bots)
                        console.log("Stopped At: ",leng)
                        bots = ""
                    }
                },count,5) 
            
        break;
            case `allstop`: 
            if(!check("ADMINISTRATOR")) return error("You Dont Have Permission To Do That")
            Create.allbotstop()
		    console.log("bot stoped")
            return Embed("Bot",`all server bot stoped`)
        break;
		case `allgo`: 
            if(!check("ADMINISTRATOR")) return error("You Dont Have Permission To Do That")
            Create.allbotgo()
            return Embed("Bot",`all server bot go`)
        break;
        case `g`: case "glitch":
            if(updating == true){
                return Embed("Bot","Updating Bot Please Try Again In Some Minutes")
            }
            if(!check("ADMINISTRATOR")) return error("You Dont Have Permission To Do That")
            if(!args[0]) return error("You Need Specify Token To 'Glitch'")
            Create.glitchtoken(args[0])
            return Embed("Bot",`Added Token: ${args[0]} To Glitched Token`)
        break;
        case `bott${devmode == true? "dev" : ""}`:
            if(updating == true){
                return Embed("Bot","Updating Bot Please Try Again In Some Minutes")
            }
            if(devmode == true && !check("ADMINISTRATOR") && !Number(msg.channel.id) == "1000248589651542076"){
                return error("You Dont Have Permission To Do That")
            }
            if (!cmddata.get(`${msg.member.user.id}${msg.guild.id}Tier`) || cmddata.get(`${msg.member.user.id}${msg.guild.id}Tier`) < 1) return error("Bot Start", `You Dont Have Permissions To Bot!`)
            if (!args[0]) return error(`Bot Command`, `You Need To Specify A Mode (Pathfind,Farmred,Unblockred,hg,score,juice,full)`)
            args[0] = args[0].toLocaleLowerCase()
            if (args[0] == "full") if(Number(cmddata.get(`${msg.member.user.id}${msg.guild.id}Tier`)) < 5) return error("Bot Start Score","You Need Tier 5+ To Use This")
            if(args[0] == "score" || args[0] == "juice" || args[0] == "book" || args[0] == "target" ) if(Number(cmddata.get(`${msg.member.user.id}${msg.guild.id}Tier`)) !== 6 && Number(cmddata.get(`${msg.member.user.id}${msg.guild.id}Tier`)) !== 7) return error("Bot Start Score","You Need Tier 6 To Use This")
            if (args[0] == "pathfind" && !args[1] || args[0] == "pathfinder" && !args[1]) return error(`Bot Command`, `You Need To Specify Position X`)
            if (args[0] == "pathfind" && !args[2] || args[0] == "pathfinder" && !args[2]) return error(`Bot Command`, `You Need To Specify Position Y`)
            if(args[0] == "pathfind" && args[2] == 0) return error("You Cant Do That","-_-")
            if (args[0] == "pathfind" && args[3] && !args[4]) return error(`Bot Command`, `You Need To Specify The Chest Owner Id`)
            if(args[0] == "unblockred" || args[0] == "unblockblue"){
                if(canunblock == false){
                    return error("Unblock Command","Command Is Disabled By Buyer 🤡")
                }
            }
            console.log(args)
            for (var i = 0; i < BotData.length; i++) {
                let opmath = BotData[i]
                if (opmath !== null) {
                    if (opmath.ID == msg.author.id) {
                        if (opmath.Cooldowned == true) return (console.log(opmath.Finish - Date.now() / 1000 / 60),error(`BotStart`, `You Need Wait Until Your Cooldown Finish\n**${(opmath.Finish-Date.now()) / 1000 / 60}** Minutes Left`))
                        if (opmath.Bot && opmath.Bot.Actived == true) return error(`BotStart`, `Your Bot Already On`)
                        let NewBot = new Create(null, `${ args[0] == "score" ? args[2] : args[0] == "hunt" || args[0] == "follow" || args[0] == "target" ? args[1] : args[3]}`, args[0], { Path: args[0] == "farmred" || args[0] == "unblockred" || args[0] == "farmblue" || args[0] == "unblockblue" ? args[1] : 3,x: args[1] ? args[1] : "None", y: args[2] ? args[2] : "None",Tok1: args[4] ? args[4]: "None",lol: args[1] ? args[1] : 1,Tok2:args[5] ? args[5] : "None",TargetId: (args[0] == "hunt" || args[0] == "kill" || args[0] == "follow" || args[0] == "target" ? args[0] == "kill" ? args[1] : args[2] : "")}) // let's speedrun
                        Create.addbot(NewBot)
                        let LogicJson = {
                            Start: Date.now(),
                            Finish: opmath.CooldownMath == 0 ? opmath.Finish : Date.now() + opmath.CooldownMath,
                            Bot: NewBot,
                            ID: msg.author.id,
                            Reply: Embed,
                            stopall: false,
                            Cooldowned: false,
                            Tier: cmddata.get(`${msg.member.user.id}${msg.guild.id}Tier`),
                            CooldownMath: 0
                        }
                        BotData[i] = LogicJson
                        return Embed(`🚇${args[0]}🚇`, `\n\nBot Started In **${args[0]}**\nYou Are Tier **${LogicJson.Tier}**\nYour Bot Will Stop In **${Math.floor(((LogicJson.Finish - Date.now()) / 1000) / 60)}** Minutes\n\n${args[0] == "pathfind" ? `Position X: **${args[1]}**\nPosition Y: **${args[2]}**`: args[0] == "full" || args[0] == "book" || args[0] == "juice" ? `Position X: **${args[1]}**\nPosition Y: **${args[2]}**\nServer: **${LogicJson.Bot.serv}**` : args[0] == "score" ? `Token: **${args[1]}** 🎫` : ``}`)
                    }
                }
            }
            let NewBot = new Create(null, `${args[0] == "score" ? args[2] : args[0] == "hunt"|| args[0] == "follow" || args[0] == "target" ? args[1] : args[3]}`, args[0], { Path: args[0] == "farmred" || args[0] == "unblockred" || args[0] == "farmblue" || args[0] == "unblockblue" ? args[1] : 3,x: args[1] ? args[1] : "None",lol: args[1] ? args[1] : 1, y: args[2] ? args[2] : "None",Tok1: args[4] ? args[4]: "None",Tok2:args[5] ? args[5] : "None",TargetId: (args[0] == "hunt" || args[0] == "kill" || args[0] == "follow" || args[0] == "target" ? args[0] == "kill" ? args[1] : args[2] : "")}) // let's speedrun
            let LogicJson = {
                Start: Date.now(),
                Finish: Date.now() + tiertimer(cmddata.get(`${msg.member.user.id}${msg.guild.id}Tier`)),
                Bot: NewBot,
                ID: msg.author.id,
                Reply: Embed,
                stopall: false,
                Cooldowned: false,
                Tier: cmddata.get(`${msg.member.user.id}${msg.guild.id}Tier`),
                CooldownMath: 0
            }
            BotData.push(LogicJson)
            Create.addbot(NewBot)
            return Embed(`🚇${args[0]}🚇`, `\n\nBot Started In **${args[0]}**\nYou Are Tier **${LogicJson.Tier}**\nYour Bot Will Stop In **${Math.floor(((LogicJson.Finish - Date.now()) / 1000) / 60)}** Minutes\n\n${args[0] == "pathfind" ? `Position X: **${args[1]}**\nPosition Y: **${args[2]}**`: args[0] == "full" || args[0] == "book" || args[0] == "juice" ? `Position X: **${args[1]}**\nPosition Y: **${args[2]}**\nServer: **${LogicJson.Bot.serv}**` : args[0] == "score" ? `Token: **${args[1]}** 🎫` : ``}`)
            break;
        case `h`:
            return Embed(`Help 💚`,`**Tier 1-6:**\n-checktimer\n!checktier\n-SeaFarm 🌊\n!setpos x y (change position)\n!b pathfind x y\n-Teammode 🚧\n!b farmred Path\n!b unblockred Path\n!b farmblue Path\n!b unblockblue Path\n\n**Tier 6:**\n-AllServer\n!b score token server\n!b full x y server\n!b book x y server acc-token acc-token-session\n!b juice x y server\n\n-Servers 📜\neu(1-4)\nna(1-4)\nas(2-3)\nwa\nau1\nfeu1\nfna1\nfas1\nveu1\nvna1\nvas1\nzeu1\nzna1\nzas1`)
        break;
        case `settarget`:
            let memberateto = msg.member
            for (var i = 0; i < BotData.length; i++) {
                let ProData = BotData[i]
                if (ProData !== null) {
                    if (ProData.ID == memberateto.user.id && ProData.Bot && ProData.Bot.TargetId) {
                        ProData.Bot.TargetId = Number(args[0])
                        Embed(`ChangeTarget`,`Setted Target To **${args[0]}**`)
                    }
                }
            }
        break;
        case `save`:
            for (var i = 0; i < BotData.length; i++) {
                let ProData = BotData[i]
                if (ProData !== null) {
                    try{
                        msg.reply("ok")
                        ProData.Bot = null
                        ProData.stopall = true
                        ProData.CooldownMath == 0 ?ProData.CooldownMath += ProData.Finish - Date.now() : ""
                        let ar = cmddata.get(`84416519844165498416584165498165189165198416`)
                        ar["gay"].push(ProData)
                        cmddata.set(`84416519844165498416584165498165189165198416`,ar)
                    }catch(e){

                    }
                }
            }
            
        break;
        case `forcerestart`:
            if (!check("ADMINISTRATOR")) return error("Restart", "**You Dont Have Permission To Do That**")
            for (var i = 0; i < BotData.length; i++) {
                let ProData = BotData[i]
                if (ProData !== null) {
                    ProData.Bot = null
                    ProData.stopall = true
                    ProData.CooldownMath == 0 ?ProData.CooldownMath += ProData.Finish - Date.now() : ""
                    let ar = cmddata.get(`84416519844165498416584165498165189165198416`)
                    ar["gay"].push(ProData)
                    cmddata.set(`84416519844165498416584165498165189165198416`,ar)
                }
            }
            for (var i = 0; i < BotData.length; i++) {
                let ProData = BotData[i]
                if (ProData !== null) {
                    try{
                       await ProData.Reply(`💥Admin💥`,`💫**Restarting Bot For Test Or Update!**💫`)
                    }catch(e){

                    }
                }
                if(i == BotData.length-1){
                    process.exit(0)
                }
            }
            
        break;
        case `canblock`:
            if(updating == true){
                return Embed("Bot","Updating Bot Please Try Again In Some Minutes")
            }
            if (!check("ADMINISTRATOR")) return error("Unblock Command", "**You Dont Have Permission To Do That**")
            canunblock = !canunblock
            return Embed(`CanUnblock`, `Unblock Command is Now ${canunblock ? "Enabled ✅" : "Disabled ❌"}`)
        break;
        case `updating`:
            if (!check("ADMINISTRATOR")) return error("Update Command", "**You Dont Have Permission To Do That**")
            updating = !updating
            return Embed(`Bot`, `Updating...`)
        break;
        case `ss${devmode == true? "dev" : ""}`:
            if (!cmddata.get(`${msg.member.user.id}${msg.guild.id}Tier`) || cmddata.get(`${msg.member.user.id}${msg.guild.id}Tier`) < 1) return error("Bot Start", `You Dont Have Permissions To Bot!`)
            let memberat = check("MANAGE_MESSAGES") ? msg.mentions.members.first() || msg.member : msg.member
            for (var i = 0; i < BotData.length; i++) {
                let ProData = BotData[i]
                if (ProData !== null) {
                    if (ProData.ID == memberat.user.id) {
                        if (ProData.Bot && ProData.Bot.Actived == true) {
                            clearInterval(ProData.Bot.inta)
                            ProData.Bot.Actived = false
                            ProData.stopall = true
                            ProData.Bot = null
                            ProData.CooldownMath = ProData.Finish - Date.now()
                            return Embed(`Stop Bot`, `**Your Bot Is Now**: ❌\nTime Before Cooldown: **${Math.floor(ProData.CooldownMath / 1000 / 60)}**Minutes`)
                        } else {
                            return error("Stop Bot", `Ur Bot Is Already Disabled;-;`)
                        }
                    }
                }
            }
           // return error("Stop Bot", `You Dont HAVE rUUNNIG BOT `)
            break;
        case `checktimer${devmode == true? "dev" : ""}`:
            let memberatet = msg.mentions.members.first() || msg.member
            for (var i = 0; i < BotData.length; i++) {
                let ProData = BotData[i]
                if (ProData !== null) {
                    if (ProData.ID == memberatet.user.id) {
                        if (ProData.Cooldowned == false) {
                            Embed(`Check Timer`, `**${memberatet.user.username}** Have Again **${Math.floor((ProData.Finish - Date.now()) / 1000 / 60)}** Minutes Before Cooldown Start`)
                        } else {
                            Embed(`Check Timer`, `**${memberatet.user.username}** Have Again **${Math.floor((ProData.Finish - Date.now()) / 1000 / 60)}** Minutes Before Cooldown Stop`)
                        }
                    }
                }
            }
            break;
        case `cc`:
            let memberatete = msg.mentions.members.first() || msg.member
            for (var i = 0; i < BotData.length; i++) {
                let ProData = BotData[i]
                if (ProData !== null) {
                    if (ProData.ID == memberatete.user.id) {
                        if(!ProData.Bot || !ProData.Bot.score) return
                        if (ProData.Cooldowned == false) {
                            Embed(`Check Score`, `**${memberatete.user.username}** Have **${ProData.Bot.score/1000}**k Score`)
                        } else {
                            Embed(`Check Score`, `**${memberatete.user.username}** Have **${ProData.Bot.score/1000}**k Score`)
                        }
                    }
                }
            }
        break;
        case `cleardata${devmode == true? "dev" : ""}`:
            if (!check("ADMINISTRATOR")) return error("Clear Data", "**You Dont Have Permission To Do That**")
            let memberateter = msg.mentions.members.first() || msg.member
            for (var i = 0; i < BotData.length; i++) {
                let ProData = BotData[i]
                if (ProData !== null) {
                    if (ProData.ID == memberateter.user.id) {
                        ProData = null
                        BotData[i] = null
                        Embed(`Clear Data`, `Cleared **${memberateter.user.username}** Data`)
                    }
                }
            }
            break;
        case `cleartoken${devmode == true? "dev" : ""}`:
            if (!check("ADMINISTRATOR")) return error("U DONT HAVE PERM TO DO THAT");
            Create.deleteall()
            msg.reply("Deleted All Tokens")
            break;
        case `clear${devmode == true? "dev" : ""}`:
        case `purge${devmode == true? "dev" : ""}`:
            if (!check("MANAGE_MESSAGES")) return error("You Dont Have Permission To Do That")
            const memberar = msg.mentions.members.first();
            let msgsize = 0
            let time = 0
            const messages = msg.channel.messages.fetch();
            if (memberar) {
                const userMessages = (await messages).filter((m) => m.author.id === memberar.id);
                await msg.channel.bulkDelete(userMessages);
                const embed15 = new MessageEmbed()
                    .setTitle(`${msg.author.username}`)
                    .setURL('https://www.youtube.com/channel/UCKeSpcjhUk9j7ebE_2iekgA')
                    .setDescription(`Successfully Deleted ${member} Messages`)
                    .setFooter('Request By ' + msg.author.tag, msg.author.displayAvatarURL())
                    .setColor(`RANDOM`);
                await msg.channel.send(embed15)
            } else {
                if (!args[0]) { return error(`**Clear Command :**\n\n`, "Please Enter A Number Between 1 and 100") }
                let deleteAmount;
                if (args[0] > 500) return error(`**Clear Command :**\n\n`, "Please Enter A Number Between 1 and 500")
                if (args[0] > 100) {
                    deleteAmount = 100;
                    time = (args[0] / 100).toFixed(0) - 1
                    time2 = (args[0] - (time * 100))
                } else {
                    deleteAmount = parseInt(args[0]);
                    time = 0
                }
                let msgsize = 0
                if (time == 0 || time == 1 && time2 == null) {
                    await msg.channel.bulkDelete(deleteAmount + 1, true).then(mesg => {
                        msgsize += mesg.size
                        const embeda = new MessageEmbed()
                            .setTitle(`${msg.author.username}`)
                            .setURL('https://www.youtube.com/channel/UCKeSpcjhUk9j7ebE_2iekgA')
                            .setDescription(`Successfully Deleted **${msgsize - 1}/100** Messages`)
                            .setFooter('Request By ' + msg.author.tag, msg.author.displayAvatarURL())
                            .setColor(`RANDOM`);
                        msg.channel.send({ embeds: [embeda] }).then(m => m.delete({ timeout: 1000 }))
                        msgsize = 0
                        //console.log(msgsize)
                    })
                } else {
                    for (var ei = 1; ei < time; ei++) {
                        if (ei == time - 1) {
                            await msg.channel.bulkDelete(100, true).then(mesg => {
                                msgsize += mesg.size
                                msg.channel.bulkDelete(time2, true).then(mesg1 => {
                                    msgsize += mesg1.size
                                    const embeda = new MessageEmbed()
                                        .setTitle(`${msg.author.username}`)
                                        .setURL('https://www.youtube.com/channel/UCKeSpcjhUk9j7ebE_2iekgA')
                                        .setDescription(`Successfully Deleted **${msgsize - 1}/100** Messages`)
                                        .setFooter('Request By ' + msg.author.tag, msg.author.displayAvatarURL())
                                        .setColor(`RANDOM`);
                                    const embed5122 = new MessageEmbed()
                                        .setTitle(`Logs`)
                                        .setURL('https://www.youtube.com/channel/UCKeSpcjhUk9j7ebE_2iekgA')
                                        .setDescription(`**${msg.author.tag}** Deleted **${msgsize - 1}/100** Messages in **${msg.channel.name}**`)
                                        .setFooter('Request By ' + msg.author.tag, msg.author.displayAvatarURL())
                                        .setColor(`RANDOM`);
                                    msg.channel.send({ embeds: [embeda] }).then(m => m.delete({ timeout: 1000 }))
                                    msgsize = 0
                                    //console.log(msgsize)
                                })
                            })
                        } else {
                            await msg.channel.bulkDelete(100, true).then(mesg => {
                                msgsize += mesg.size
                            })
                        }
                    }
                }
            }
            break;
    }
})
checkinterval = setInterval(() => {
    for (var i = 0; i < BotData.length; i++) {
        let data = BotData[i]
        if (data !== null) {
            if (data.stopall == false) {
                if (data.Finish - Date.now() <= 0) { // ok?
                    data.Bot.Actived = false
                    data.Cooldowned = true
                    data.stopall = true
                    data.Finish += tiercooldown(data.Tier)
                    data.Reply(`Bot`, `**Stopped** Your Bot (**Cooldown**)\nYour Cooldown Will Finish In **${Math.floor(((data.Finish - Date.now()) / 1000) / 60)}** Minutes`)
                }
            } else if (data.Cooldowned) {
                if (data.Finish - Date.now() <= 0) {
                    console.log("Cooldown Finished")
                    data.Reply(`Bot`, `Your Cooldown Finished`)
                    data.Cooldowned = false
                    data = null
                    BotData[i] = null
                }
            }
        }
    }
}, 100)
/*
           setTimeout(()=>{
let aeaa = new Create(null, "na4", `score` ,{Path: 3,x: 'yusukedao',lol: 'daisukedao',y: "na4",Tok1: 'None',Tok2: 'None',TargetId: null}) // let's speedrun
let aeaaaa = new Create(null, "na3", `score` ,{Path: 3,x: 'yusukedao',lol: 'daisukedao',y: "na3",Tok1: 'None',Tok2: 'None',TargetId: null}) // let's speedrun
let bruh = new Create(null, "na2", `score` ,{Path: 3,x: 'yusukedao',lol: 'daisukedao',y: "na2",Tok1: 'None',Tok2: 'None',TargetId: null}) // let's speedrun
let popa = new Create(null, "au1", `score` ,{Path: 3,x: 'yusukedao',lol: 'daisukedao',y: "au1",Tok1: 'None',Tok2: 'None',TargetId: null}) // let's speedrun
let pop = new Create(null, "eu1", `score` ,{Path: 3,x: 'yusukedao',lol: 'daisukedao',y: "eu1",Tok1: 'None',Tok2: 'None',TargetId: null}) // let's speedrun
let po = new Create(null, "eu2", `score` ,{Path: 3,x: 'yusukedao',lol: 'daisukedao',y: "eu2",Tok1: 'None',Tok2: 'None',TargetId: null}) // let's speedrun
let opa = new Create(null, "eu3", `score` ,{Path: 3,x: 'yusukedao',lol: 'daisukedao',y: "eu3",Tok1: 'None',Tok2: 'None',TargetId: null}) // let's speedrun
let pa = new Create(null, "eu4", `score` ,{Path: 3,x: 'yusukedao',lol: 'daisukedao',y: "eu4",Tok1: 'None',Tok2: 'None',TargetId: null}) // let's speedrun
let oap = new Create(null, "vna1", `score` ,{Path: 3,x: 'yusukedao',lol: 'daisukedao',y: "vna1",Tok1: 'None',Tok2: 'None',TargetId: null}) // let's speedrun
Create.addbott(popa)
Create.addbott(pop)
Create.addbott(po)
Create.addbott(opa)
Create.addbott(pa)
Create.addbott(oap)

Create.addbott(aeaa)
Create.addbott(aeaaaa)
Create.addbott(bruh)
},5000)
*/
//let aeae = new Create(null, "fna1", `score` ,{Path: 3,x: 'yusukedao2',lol: 'daisukedao2',y: "fna1",Tok1: 'None',Tok2: 'None',TargetId: null}) // let's speedrun
         // Create.addbott(aeae)
//let aeaq = new Create(null, "feu1", `score` ,{Path: 3,x: 'yusukedao2',lol: 'daisukedao2',y: "feu1",Tok1: 'None',Tok2: 'None',TargetId: null}) // let's speedrun
           // Create.addbott(aeaq)

//let farmrr = new Create(null, "", `farmred` ,{Path: '3',x: '3',lol: '3',y: 'None',Tok1: 'None',Tok2: 'None',TargetId: ''}) // let's speedrun
setTimeout(()=>{

//Create.addbot(farmrr)
},5000)
//Create.addbot(farmrr)
client.login("MTAwMDI0ODU4OTY1MTU0MjA3Ng.GVg18d.C_qNjH8F_Mq7VrQ7JV4StLbtMw6kaMSuRmRARw");
