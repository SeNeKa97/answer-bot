const { Telegraf } = require("telegraf")
//const { express } = require("express")

//const app = express()
const bot = new Telegraf("1737603973:AAGKTsXPZFRsOyry5VzgqgYHZwADzYFRhQs")

const port = 3000


app.get('/', function(req, res) {
  res.send('I\'m alive');
});

bot.start((ctx) => ctx.reply('Здраститя'))

bot.on('text', (ctx)=>{
	if(ctx.message.text.includes(""))
})

bot.command('decide', (ctx)=>{

})

/*
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})*/