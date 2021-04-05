const { Telegraf } = require("telegraf")

var log4js = require('log4js');
var logger = log4js.getLogger();
//const { express } = require("express")

//const app = express()
const bot = new Telegraf("1737603973:AAGKTsXPZFRsOyry5VzgqgYHZwADzYFRhQs")
const port = 3000
const decisions = ["Да", "Нет"]


bot.start((ctx) => ctx.reply('Здраститя'))



bot.command('/decide', (ctx)=>{

	let msgId = ctx.message.message_id
	let decision = getDecision()

	ctx.reply(decision, {reply_to_message_id: msgId})
})


function getDecision(){
	let result = Math.random() > 0.5 ? decisions[1] : decisions[0]
	return result
}

bot.launch()

/*
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})*/