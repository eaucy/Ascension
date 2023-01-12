
const chalk=require("chalk")

function powerSet(v)
{
	z=[]
	v.forEach((x)=>{
		z.push([x])
			v.forEach((y)=>{
				if(x.userAssetId!=y.userAssetId){
				z.push([x,y])
		      	 	v.forEach((a)=>{
						if(a.userAssetId!=y.userAssetId && a.userAssetId!=x.userAssetId){
					z.push([x,y,a])
		       		      	 	v.forEach((b)=>{
								if(b.userAssetId!=y.userAssetId && b.userAssetId!=x.userAssetId&&b.userAssetId!=a.userAssetId){
							z.push([x,y,a,b])
								}
						})
							
						}
				})
					
				}
			})       
	})
		return z
}

function c(x) {
  var str=x.toString().split(".")
  if(str[1]){
    str[0]=str[0]+"."
  }else{
    str[1]=""
  }

return str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")+str[1]
}
var fetch = require(`node-fetch`)


var token="hi"
var inventorycombinations=[]
var jsonconfig=require("./config.json")
var onlyvaluedshit=jsonconfig.only_valued_shit
var ignore_rap=jsonconfig.ignore_rap
var downgrade=jsonconfig.downgrade
var upgrade=jsonconfig.upgrade
var cantsendinterval=jsonconfig.cantsendinterval
var proxies=jsonconfig.proxies
var rap_diff_ratio=jsonconfig.rap_diff_ratio
var sendinterval=jsonconfig.sendinterval
var DISCORD_ID = jsonconfig.DISCORD_ID
var CMDS = jsonconfig.CMDS
var tradeadsnipes=jsonconfig.tradeadsnipes
var notifs = jsonconfig.notifs
var NOTIF_CHANNEL = jsonconfig.NOTIF_CHANNEL
var TRADE_CHANNEL = jsonconfig.TRADE_CHANNEL
var colors = jsonconfig.colors
var open_desktop_app=jsonconfig.open_desktop_app
var want = jsonconfig.want
var dontcheckoutbound=jsonconfig.dontcheckoutbound
var rapboost=jsonconfig.rapboost
reset_already_sent_interval=jsonconfig.reset_already_sent_interval // MILLISECONDS
var use_robux = jsonconfig.use_robux
var projected_ratio = jsonconfig.projected_ratio
var robux_ratio_send = jsonconfig.robux_ratio_send // dont touch if dont know what doing
var testmode = jsonconfig.testmode
var custom_values = jsonconfig.custom_values
  accept_ratio=jsonconfig.accept_ratio
var USER_ID = jsonconfig.USER_ID
var stop_on_completed = jsonconfig.stop_on_completed
var selfeval = jsonconfig.selfeval
var ratio =jsonconfig.ratio
var maxratio =jsonconfig.maxratio
dontdecline = jsonconfig.dontdecline
mineval = jsonconfig.mineval
var keepmyrares = jsonconfig.keepmyrares
var manualeval =jsonconfig.manualeval
var DONOTGET = jsonconfig.DONOTGET
var keep_images=jsonconfig.keep_images
var DONOTTRADE =jsonconfig.DONOTTRADE
var getridoffast = jsonconfig.getridoffast
var fuckrares = jsonconfig.fuckrares
var rewrite_to_end_if_ratelimited=jsonconfig.rewrite_to_end_if_ratelimited
var upgrading_ratio = jsonconfig.upgrading_ratio
var upgrading_max_ratio = jsonconfig.upgrading_max_ratio
var onlytradefor = jsonconfig.onlytradefor
var onlytradeforarray =jsonconfig.onlytradeforarray
var proof_based ={}
var autoregen=jsonconfig.autoregen
var autoregeninterval=jsonconfig.autoregeninterval
var owned_proj_ratio=jsonconfig.owned_proj_ratio
var security_check=jsonconfig.security_check
const isMac = process.platform === 'darwin'


function main(){
if(open_desktop_app && process.env.REPLIT_DB_URL==undefined){
const { app, BrowserWindow,ipcMain} = require('electron')
const path = require('path')

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


ipcMain.handle('fetch_last_queue', async (event, ...args) => {

  return "result"
})
var win
function createWindow () {
   win = new BrowserWindow({
     icon:__dirname+"/winter.ico",
    width: 1200,
    height: 900,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
  ipcMain.on("toMain", (event, args) => {
    win.webContents.send("fromMain", {"remove":true})
  })
}
}

var outbound=require("./json/outbound.json").outbound
var upgbias=0
  projected= {}
badassets={"63690008":true}

var moment = require('moment');



var fs = require('fs');

//fs.appendFileSync('.log',"\n"+moment().format("MM ddd, YYYY hh:mm:ss a")+" => Bot was restarted either manually or automatically.");

fs.readdir(`./json`, function (err, files) {

  files.forEach(function (file, index) {
   var data = fs.readFileSync('./json/'+file, 'utf8')
   try {
    JSON.parse(data)
} catch (e) {
console.log(chalk.greenBright("Reparing /json/"+file))
   fetch("https://github.com/eaucy/Ascension/raw/main/json/"+file).then(res=>res.json()).then(data=>{
     fs.writeFileSync("./json/"+file,JSON.stringify(data))
   })
}
  });
});


function clog(str){
console.log(str)
////fs.appendFileSync('debug.log', chalk.reset(str));
}


function sanitize(str) {
  return str.replace(/([^a-zA-Z_0-9 ])/, "")
}
const Jimp = require("jimp")
var font = null
Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(f => {
  font = f
})
var font16 = null
Jimp.loadFont((Jimp.FONT_SANS_16_WHITE)).then(f => {
  font16 = f
})
var image = null

var imagestyle = "wide" // wide, tall, or none
Jimp.read("./image_templates/"+imagestyle + ".jpg")
  .then(async function(image1) {
    image = image1
  })

var valueList = require("./json/rapreqs.json")

ROBLOX_USERNAME = ""
ROBUX_BALANCE = 0

require("dotenv").config()
envcookie = process.env.cookie + ""
const {
  parse,
  stringify
} = require('envfile')

var continueeval = {};

var queuecache = require("./json/queue_save.json").active_queue
const prefer = require("./json/prefer.json").prefer

var cached = {}


blacklist_on_failed = {}

indexmessages = {}

whitelist = {};

var trade_queue = require("./json/queue.json").active_queue
var finished_queue = require("./json/queue.json").finished_queue

var viewed1 = JSON.parse(JSON.stringify(require("./json/tradesviewed1.json")))


const discord = require("discord.js")
const client = new discord.Client()

client.login(process.env.token)
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

var gotuaids = {}

async function generate(assets, receive) {

}
fs.readFile("./json/tradesviewed1.json", "utf8", function(err, data) {
  if (err) throw err;
});

fs.readFile("./json/indexmessages.json", "utf8", function(err, data) {
  if (err) throw err;
  indexmessages = JSON.parse(data);
});

fs.readFile("./json/cached.json", "utf8", function(err, data) {
  if (err) throw err;
  cached = JSON.parse(data).cached
});

function accept(id) {}

  if (res[DISCORD_ID] && res[DISCORD_ID]==USER_ID) {
    fetch("https://www.roblox.com/mobileapi/userinfo", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        cookie: ".ROBLOSECURITY=" + envcookie + ";",
      }
    }).then(res => res.json()).then(res => {
      clog(chalk.blue("Logged in as "+res.UserName))
      ROBLOX_USERNAME = res.UserName
      ROBUX_BALANCE = res.RobuxBalance

      if (true) {
        var already_harassed = {}

        var rawinv = {}
        var valueList = require("./json/rapreqs.json")

        function getRandomInt(max) {
          return Math.floor(Math.random() * Math.floor(max));
        }

        function shuffle(array) {
          return array.sort(() => Math.random() - 0.5);
        }
        var inv = {}

        var sent = 0
        fs.readFile('./json/sent-trades.json', 'utf8', function(err, data) {
          sent = parseInt(JSON.parse(data).last)
          // clog(sent)
        })

        var declinedj = {}
        fs.readFile('./json/declined.json', 'utf8', function(err, data) {
          declinedj = JSON.parse(data)
          // // clog(data)
        })

        function findNearestTier(rap) {
          var t = rap
          Object.keys(valueList).forEach(k => {
            if (parseInt(rap) > parseInt(k)) {
              t = valueList[k]

            }
          })
          return parseInt(t)
        }
        var snipes = (require("./json/snipes.json") || {"snipes":[]})

        already_sent = {}
        var configs = require("./json/configs.json")

        var options = {
          method: 'POST',
          uri: 'https://auth.roblox.com/v2/login',
          headers: {
            cookie: ".ROBLOSECURITY=" + envcookie + ";"
          }
        };

        setInterval(function() {

        }, 10000)
        var rp = require('request-promise');
        var cooldown = []
        var url = "https://roblox.com/"

        rp(options).then(function() {

          })
          .catch(function(err) {
            token = err.response.headers["x-csrf-token"] || "shitfart"
            if(autoregen){
            setInterval(function() {
              fetch("https://www.roblox.com/authentication/signoutfromallsessionsandreauthenticate", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "X-CSRF-TOKEN": token,
                  cookie: ".ROBLOSECURITY=" + envcookie + ";",
                },
                body: {
                  "__RequestVerificationToken": ""
                }
              }).then(data => {
                envcookie = data.headers.raw()['set-cookie'][7].split(";")[0].replace(".ROBLOSECURITY", "").replace("=", "") + ""
                fs.writeFile(".env", stringify({
                  cookie: data.headers.raw()['set-cookie'][7].split(";")[0].replace(".ROBLOSECURITY", "").replace("=", ""),
                  token: process.env.token
                }), (err) => {
                  require("dotenv").config()

                })

              })
            }, autoregeninterval)
            }
            setTimeout(function() {
              fetch(`https://inventory.roblox.com/v1/users/${USER_ID}/assets/collectibles?limit=100`, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "X-CSRF-TOKEN": token,
                  cookie: ".ROBLOSECURITY=" + envcookie + ";",
                },
              }).then(res => res.json()).then(invdata => {
                // clog(invdata)
var toremove={}
                var ida = []
                rawinv = invdata.data
                invdata.data.forEach((x, index) => {
                  if (DONOTTRADE[x.assetId] == undefined) {
                    if ((keepmyrares == true && itemdata[x.assetId][9] == 1) ){

                    } else {
                      if (mineval < rawitemdata[x.assetId][4] && rawitemdata[x.assetId][4] < manualeval) {
                        if(projected[x.assetId]!=undefined && rawitemdata[x.assetId][4]!=itemdata[x.assetId][4] ){
                          DONOTGET[x.assetId]=true
                          itemdata[x.assetId][4]=rawitemdata[x.assetId][2]*1
  clog(chalk.yellow("You own the projected ")+chalk.green(itemdata[x.assetId][0])+chalk.yellow(" so it was reset to "+c(itemdata[x.assetId][4])+" value and added to DONOTGET"))
                          itemdata[x.assetId][3]=rawitemdata[x.assetId][2]
                        }
                        if (Object.keys(getridoffast) == 0 || getridoffast[x.assetId]) {
                          ida.push(invdata.data[index])
                        }
                      }
                    }
                  }
                })
                // clog(ida)
                inv=shuffle(ida)
                inv = inv.slice(0,5)
//console.log(inv.length)
                inventorycombinations=powerSet(inv)
                //console.log(inventorycombinations.length+" different trade combinations found.")
                logged_in = true
                inventorycombinations.forEach((x,index)=>{
  if(x.length>4){
delete inv[index]

}
})
inventorycombinations=inventorycombinations.filter(function (el) {
  return el != null;
})
var combo=[]
inventorycombinations.forEach(x=>{
  var sum=0
  x.forEach(x=>{
sum=sum+itemdata[x.assetId][2]
  })
combo.push({value:sum,assets:x})
})
inventorycombinations=combo
var removed=0
                trade_queue.forEach((trade,index)=>{
                    if(trade){
                  var nothave=false
                  trade[3].forEach(uaid=>{
                    if(toremove[uaid]==undefined){
                      nothave=true

                    }
                  })
                  if(nothave){
                    removed=removed+1
                    delete trade_queue[index]
                  }
                    }
                })
             //   console.log("Removed "+c(removed)+" trades with items you no longer own")
             trade_queue=trade_queue.filter(function (el) {
  return el != null;
})
              })

            }, 30000)
          })
        setInterval(function() {
          rp(options).then(function() {

            })
            .catch(function(err) {
              token = err.response.headers["x-csrf-token"]

            })

        }, 100000)

        demand = {

          "4": "Amazing",
          "3": "High",
          "2": "Normal",
          "1": "Low",
          "0": "Terrible",
          "-1": "Unassigned"
        }
        trend = {
          "4": "Fluctuating",
          "3": "Raising",
          "2": "Stable",
          "1": "Lowering",
          "0": "Unstable",
          "-1": "Unassigned"
        }
        state = {
          "0": "Bad Rare",
          "1": "OK Rare",
          "2": "Good Rare",
          "3": "Hot Rare :fire:"
        }
        var FuzzySearch = require('fuzzy-search');
        var QuickChart = require('quickchart-js');

        moment().format();
        var express = require('express')
        var expressapp = express()

        expressapp.get("/v1/trades/Inbound", (req, res) => {
          if (req.query.key == process.env.key) {
            fetch(
                `https://trades.roblox.com/v1/trades/Inbound?limit=10`, {
                  headers: {
                    "Content-Type": "application/json",
                    cookie: ".ROBLOSECURITY=" + envcookie + ";",
                  },
                }
              )
              .then((res) => res.json())
              .then((data) => {
                res.send(JSON.stringify(data))
              })
          }
        })
        var port = 3000
        var logged_in = false
        var viewed = 999999999999999999999

        var emoji = {
          "1": "808151078095814666",
          "2": "808151078364905513",
          "3": "808151076808163359",
          "4": "808151078436208701",
          "5": "808151076565811211",
          "6": "808151076083335168",
          "7": "808151078201589760"
        }
        client.on("ready", () => {
            clog(client.user.username+"#"+client.user.discriminator)

          client.channels.cache.get("" + NOTIF_CHANNEL).send("===============================\n Bot has restarted. \n ===============================")
          setTimeout(function() {
            if (client.user.username != ROBLOX_USERNAME) {
              client.user.setUsername(ROBLOX_USERNAME)
              client.user.setAvatar("https://www.roblox.com/headshot-thumbnail/image?userId=" + USER_ID + "&width=420&height=420&format=png")

            }
          }, 10000)
        })

        var premium = new discord.MessageEmbed()
          .setTitle(":crown: You just found a premium feature!")
          .setDescription("We appreciate your interest in our services, but development isn't free. Please consider purchasing any subscription tier in order to use this command.")
          .setFooter("Embedded77#1367 | https://discord.gg/qcDQ7CCS88")

          .setColor("#ffc0cb")
        expressapp.listen((process.env.PORT || 8060), () => {
          // // clog(`App listening at http://localhost:${port}`)
        })

        expressapp.get('/', (req, res) => {
        res.send(`<meta content="Embedded77" property="og:title">	<meta class="dynamic" property="og:url" content="https://embedded77.xyz/">
	<meta class="dynamic" property="og:description" content="Embedded77 is the well-known developer behind several projects">
	<meta class="dynamic" property="og:type" content="video.other">
	<meta class="dynamic" property="og:image" content="https://media1.tenor.com/images/2fcf74b263b3eb1e4dcf7ef34751fa8e/tenor.gif?itemid=21763418">
	<meta class="dynamic" property="og:image:type" content="image/gif">
	<meta class="dynamic" property="og:image:width" content="498">
	<meta class="dynamic" property="og:image:height" content="498">
	<meta class="dynamic" property="og:video" content="https://media.tenor.com/videos/bfb456152bb8814f93afc551fac22e13/mp4">
	<meta class="dynamic" property="og:video:secure_url" content="https://media.tenor.com/videos/bfb456152bb8814f93afc551fac22e13/mp4">
	<meta class="dynamic" property="og:video:type" content="video/mp4">
	<meta class="dynamic" property="og:video:width" content="640">
	<meta class="dynamic" property="og:video:height" content="640">
	<meta class="dynamic" property="og:video" content="https://media.tenor.com/videos/13394f0aeafcd8af8ebd3ceb03ea3663/webm">
	<meta class="dynamic" property="og:video:secure_url" content="https://media.tenor.com/videos/13394f0aeafcd8af8ebd3ceb03ea3663/webm">
	<meta class="dynamic" property="og:video:type" content="video/webm">
	<meta class="dynamic" property="og:video:width" content="640">
	<meta class="dynamic" property="og:video:height" content="640">
  <video autoplay loop width="250">
  <source type="video/webm" src="https://media.tenor.com/videos/13394f0aeafcd8af8ebd3ceb03ea3663/webm"></source></video>`)

        })


var finallast=0
        setInterval(function() {
          var last=1
                     var highestlast=finallast
          var index = 1
          if (logged_in && itemdata!=null && itemdata!=undefined) {

              fetch("https://TradeAds.embedded77.repl.co", {
                headers: {}
              }).then(res => res.json()).then(res => {

                fs.readFile('./json/tradesviewed.json', 'utf8', function(err, data) {
                  if (err) throw err;
                  
                //  console.log("final last is "+finallast)
                  res.trade_ads.forEach((a,index) => {

                    if (a[0] > finallast) {
                       snipes.snipes.push(a)
                      if (declinedj[a[2]] < 3 || declinedj[a[2]] == undefined) {
                        //// // clog(a[3]+`(${a[0]})`)
                        //fs.appendFileSync('.log',"\n"+moment().format("MM ddd, YYYY hh:mm:ss a")+" => "+((`Searching trades with `)+(a[3])+` (${a[2]})`));
                        var da = []
                        da[0] = a[5]
                        da[1] = a[4]
                        var sumhold = null
                        var raphold = null
                        var give = []
                       var already_upgraded={}
                        var gett = []
                        var sumget = 0
                        var sumgive = 0
                        var rapgive = 0
                        var rapget = 0
                        var hasrare = false
                        var hasrapitem = false

                                  var already_pushed = false
                        var has_wanted = false
                        b = []
                        a[4].forEach(ua => {
                          //// // clog(itemdata[ua+""][0])
                          if (itemdata[ua + ""]) {
                            if (itemdata[ua + ""][9] == 1) {
                              hasrare = true
                            }
                   
                            give.push("[" + itemdata[ua + ""][0] + "](https://www.rolimons.com/item/" + ua + ") : " + c(itemdata[ua + ""][4]))
                            sumgive = sumgive + itemdata[ua + ""][4]
                            rapgive = rapgive + itemdata[ua + ""][2]
                            if (itemdata[ua + ""][3] == -1) {
                              hasrapitem = true
                            }
                            if (want[ua + ""]) {
                              has_wanted = itemdata[ua + ""][0]
                            }
                          }
                        })

                        a[5].forEach(ua => {
                          if (ua > 10) {
                            //// // clog(itemdata[ua+""][0])

                            gett.push("[" + itemdata[ua + ""][0] + "](https://www.rolimons.com/item/" + ua + ") : " + c(itemdata[ua + ""][4]))
                            sumget = sumget + itemdata[ua + ""][4]
                            rapget = rapget + itemdata[ua + ""][2]
                          }
                        })
                        var goal = sumgive;
                        var no_rap_inv = []

                        inv.forEach(x => {
                    //      console.log(x)
                          if (itemdata[x.assetId][3] > 0) {
                            no_rap_inv.push(x)
                          }
                        })
                        if (no_rap_inv.length == 0) {
                          no_rap_inv = inv
                        }
//insert here
var tradewiththisfuckinguser=undefined
var assets=[]
var j=[]
var giveassets=[]
var p=[]

var giveassets2=[]
setTimeout(function(){

fetch(`https://inventory.roblox.com/v1/users/${
  a[2]
}/assets/collectibles?limit=10`, {
   method: "GET",
   headers: {
     "Content-Type": "application/json"
   },
 }).then(res => res.json()).then(invdata => {

var inv=powerSet(shuffle(invdata.data).slice(0,5))


clog((`Searching trades with `)+chalk.white(a[3])+` (${a[2]})`)
inv=inv.slice(0,4000)

inv.forEach((x,index)=>{
  var p1=[]
  var assets1=[]
  var end=false
if(x.length<=4){
var sum=0
var get={}
var rap=0
var print=""
x.forEach(va=>{
sum=sum+itemdata[va.assetId][4]
rap=rap+(parseInt(itemdata[va.assetId][2]||"0")||0)
assets1.push(va.assetId)
p1.push(va.userAssetId)
get[va.assetId]=true
if(rawitemdata[va.assetId][3]==-1 && onlyvaluedshit==true){
end=true
}
})
inventorycombinations.slice(0,10000).forEach(lolmfao=>{
 
  var sum1=0
var rap1=0

var imaddingrap=false
var giveassets1=[]

var donotcontinue=false
var giveassets4=[]
  lolmfao.assets.forEach(va=>{

     if( get[va.assetId]==true){
donotcontinue=true
     }
 var actualamt=itemdata[va.assetId][4]
if(rawitemdata[va.assetId][3]==-1){
  actualamt=itemdata[va.assetId][4]*1.1
}
    sum1=sum1+actualamt
    if(rawitemdata[va.assetId][3]==-1){
      rap1=rap1+itemdata[va.assetId][2]*1.1
    
    }else{
    rap1=rap1+(parseInt(itemdata[va.assetId][2]||"0")||0)
    }
giveassets1.push(va.userAssetId)
giveassets4.push(va.assetId)
})
assets1.forEach(asset=>{
  if(DONOTGET[asset]!=undefined ){
    donotcontinue=true
  }
})
if(donotcontinue==false && sum<sum1*maxratio && sum>sum1*ratio && giveassets4.length<=4){
  if((downgrade==true && giveassets4.length<giveassets2.length) || (downgrade==true && giveassets4.length<=giveassets2.length) || (upgrade==true && downgrade==true)){
  if((Math.abs(rap-rap1)<rap_diff_ratio*rap && (
  (giveassets1.length!=1 && rap1>rap) || rap1<rap))||ignore_rap  ){
  if(already_pushed==false){
  //console.log(`TRADE FOUND ${ sum } vs ${sum1}`)
  }
    if(tradewiththisfuckinguser==undefined && end == false){
    
    assets=giveassets4
    giveassets= giveassets1
    giveassets2=assets1
    p=p1
    j=giveassets2
    
  tradewiththisfuckinguser=true
  }
  
  }
}
}
})

}
})
var sendrobux=0
//console.log(`${a[3]} ended with ${tradewiththisfuckinguser} ${already_pushed} ${assets.length} ${JSON.stringify(DONOTGET)}`)
  if (tradewiththisfuckinguser && already_pushed == false) {
    var d = ""
    var z=[]
    var j=giveassets2
    var gamt
    shuffle(assets).forEach(meowm => {
      d = d + itemdata[meowm + ""][0] + " : " + c(itemdata[meowm + ""][4] + "\n")
      gamt = gamt + itemdata[meowm + ""][4]
    })
    shuffle(giveassets2).forEach(meowm => {
      z.push(itemdata[meowm + ""][0] + " : " + c(itemdata[meowm + ""][4] + "\n"))
      gamt = gamt + itemdata[meowm + ""][4]
    })
    already_pushed = true
    trade_queue.push([assets, a[2], p, giveassets, z, 0,a[3]])

    var i = new discord.MessageEmbed()
    i.addField("Items you will GIVE", d, true)

    i.setTimestamp()
    i.addField("Items you will GET", z.join("\n"), true)
if(trade_queue.length!=1)
{                  i.addField("Queue", trade_queue.length+" trades",false)
  }
else{
i.addField("Queue", trade_queue.length+" trade",false)
}
i.setTitle("Trade Sending")
      .setDescription("Will return trade sent or an error message")
      .setFooter("Embedded77#1367 | https://discord.gg/qcDQ7CCS88")

clog(chalk.green("Trade found with "+a[3]+" ("+a[2]+")"))
//fs.appendFileSync('.log',"\n"+moment().format("MM ddd, YYYY hh:mm:ss a")+" => "+"Trade found with "+a[3]+" ("+a[2]+")");
clog(chalk.cyan("Queue length is now "+trade_queue.length))
//fs.appendFileSync('.log',"\n"+moment().format("MM ddd, YYYY hh:mm:ss a")+" => "+"Queue length is now "+trade_queue.length);
    var sum = 0
    var sum1 = 0
    var rap = 0
    var rap1 = 0
var savekey=a[2]
var imagestyle="none"
client.channels.cache.get(NOTIF_CHANNEL).send(i)
    if (imagestyle == "tall") {
      Jimp.read("./image_templates/tall.jpg")
        .then(async function(image) {
          var key = Math.random().toString(36).substring(7)
          var edit = image.print(font, 375, 150, "" + sanitize(a[3]))
          edit.print(font, 75, 150, ROBLOX_USERNAME)

          let found_image = await Jimp.read("https://www.roblox.com/headshot-thumbnail/image?userId=" + a[2] + "&width=100&height=100&format=png");
          // clog(85 + 100 * index)
          await edit.composite(found_image, 750, 100)
          await assets.forEach(async (x, index) => {
            // clog(x)
            //  // clog('https://www.roblox.com/thumbs/asset.ashx?width=100&height=100&assetid='+parseInt(x)+'')
            sum = sum + itemdata[parseInt(x)][4]
            rap = rap + itemdata[parseInt(x)][2]
            let found_image = await Jimp.read('https://www.roblox.com/thumbs/asset.ashx?width=100&height=100&assetid=' + parseInt(x) + '');
            // clog(85 + 100 * index)
            var id = itemdata[parseInt(x)]
            await edit.composite(found_image, 75, 200 + 120 * index)
            await edit.print(font, 180, 227 + 120 * index, "" + c(id[4]))
     //       await edit.print(font16, 180, 246 + 120 * index, "  Rap: " + c(id[2]))
            // clog("updated")
          })
          await j.forEach(async (x, index) => {
            sum1 = sum1 + itemdata[parseInt(x)][4]
            rap1 = rap1 + itemdata[parseInt(x)][2]
            // clog('./itemimages/' + parseInt(x) + '.png')
            let found_image = await Jimp.read('https://www.roblox.com/thumbs/asset.ashx?width=100&height=100&assetid=' + parseInt(x) + '');
            var id = itemdata[parseInt(x)]
            await edit.composite(found_image, 375, 200 + 120 * index)
            await edit.print(font, 480, 227 + 120 * index, "" + c(id[4]))
          //  await edit.print(font16, 480, 246 + 120 * index, "  Rap: " + c(id[2]))
            if (index + 1 == j.length) {

              edit.print(font, 75, 720, c(sum)+` (${c(rap)})`)
              edit.print(font, 375, 720, c(sum1)+` (${c(rap1)})`)
              setTimeout(function() {
                edit.write("./images/"+savekey+".jpg").getBuffer(Jimp.MIME_PNG, (err, buffer) => {
if(open_desktop_app &&process.env.REPLIT_DB_URL==undefined){
fs.readFile("./images/"+savekey+".jpg", function(err, data) {
if(open_desktop_app &&process.env.REPLIT_DB_URL==undefined){
win.webContents.send("fromMain", {"remove":false,content:{"buffer": Buffer.from(data, 'base64').toString('base64'),give:d.split("\n"),"get":z,time:moment().format("MM ddd, YYYY hh:mm:ss a"),user:a[3],userid:a[2]}})
}
})

}

setTimeout(function() {
edit.write("./images/"+savekey+".jpg").getBuffer(Jimp.MIME_PNG, (err, buffer) => {
setTimeout(function(){
fs.readFile("./images/"+savekey+".jpg", function(err, data) {
if(open_desktop_app &&process.env.REPLIT_DB_URL==undefined){
win.webContents.send("fromMain", {"remove":false,content:{"buffer": Buffer.from(data, 'base64').toString('base64'),give:d.split("\n"),"get":z,time:moment().format("MM ddd, YYYY hh:mm:ss a"),user:a[3],userid:a[2]}})
}
})
var attachment = new discord
.MessageAttachment('./images/'+savekey+'.jpg', 'output.jpg')
// clog("sent!")
i.attachFiles(attachment)
i.setImage("attachment://output.jpg")
client.channels.cache.get(NOTIF_CHANNEL).send(i).then(async x=>{
if(keep_images==false){
setTimeout(function(){
  try{
fs.unlink("./images/"+savekey+".jpg", (err) => {


//file removed
})}
catch(err){

}
},10000)
}
})
},10000)
})
}, 5000)
                })
              }, 5000)

            }
          })

        })
    } else if (imagestyle == "wide") {
      var sum = 0
      var sum1 = 0
      var rap = 0
      var rap1 = 0
      Jimp.read("./image_templates/wide.jpg")
        .then(async function(image) {

          var edit = image.print(font, 600, 10, "Trade with " + sanitize(a[3]))
          let found_image = await Jimp.read("https://www.roblox.com/headshot-thumbnail/image?userId=" + a[2] + "&width=150&height=150&format=png");
          // clog(85 + 100 * index)
          await edit.composite(found_image, 750, 100)
          await assets.forEach(async (x, index) => {
            // clog(x)
            //  // clog('https://www.roblox.com/thumbs/asset.ashx?width=100&height=100&assetid='+parseInt(x)+'')
            sum = sum + itemdata[parseInt(x)][4]
            rap = rap + itemdata[parseInt(x)][2]
            let found_image = await Jimp.read('https://www.roblox.com/thumbs/asset.ashx?width=100&height=100&assetid=' + parseInt(x) + '');
            // clog(85 + 100 * index)
            await edit.composite(found_image, 85 + 145 * index, 85)
            // clog("updated")

          })
          await j.forEach(async (x, index) => {
            sum1 = sum1 + itemdata[parseInt(x)][4]
            rap1 = rap1 + itemdata[parseInt(x)][2]
            // clog('./itemimages/' + parseInt(x) + '.png')
            let found_image = await Jimp.read('https://www.roblox.com/thumbs/asset.ashx?width=100&height=100&assetid=' + parseInt(x) + '');
            // clog(85 + 100 * index)
            await edit.composite(found_image, 85 + 145 * index, 345)
            if (index + 1 == j.length) {
             await edit.print(font, 650, 300, c(sum) + " vs " + c(sum1))
          setTimeout(async function(){
             await   edit.write("./images/"+savekey+".jpg").getBuffer(Jimp.MIME_PNG, (err, buffer) => {

fs.readFile("./images/"+savekey+".jpg", function(err, data) {
if(open_desktop_app &&process.env.REPLIT_DB_URL==undefined){
win.webContents.send("fromMain", {"remove":false,content:{"buffer": Buffer.from(data, 'base64').toString('base64'),give:d.split("\n"),"get":z,time:moment().format("MM ddd, YYYY hh:mm:ss a"),user:a[3],userid:a[2]}})
}
})
i.addField("Value",(c(sum)+" vs "+c(sum1)),true)
i.addField("Rap",(c(rap)+" vs "+c(rap1)),true)
i.addField("% Win",Math.round(((sum1/sum)-1)*100)+"%",true)


var attachment = new discord
                .MessageAttachment('./images/'+savekey+'.jpg', 'output.jpg')
                  // clog("sent!")
                  i.attachFiles(attachment)
                  i.setImage("attachment://output.jpg")
                  client.channels.cache.get(NOTIF_CHANNEL).send(i).then(async x=>{
                  if(keep_images==false){
                    setTimeout(function(){
                                fs.unlink("./images/"+savekey+".jpg", (err) => {


//file removed
})
                    },10000)
                      }
                  })
                })

          },10000)
            }
          })

        })
    } else if (imagestyle == "none") {

    }
  }else{
    //clog((`No trades found with `)+chalk.white(a[3])+` (${a[2]})`)
  }
})


}, 3000*index)
                      }
                    }
                    if (a[0] > highestlast) {
                      highestlast = a[0]
//console.log("highest last is now "+a[0])
                    }

          }, index * 2000)

          index = index + 1
        })


                })
                setTimeout(function(){
             // console.log(highestlast)
finallast=highestlast
//console.log(finallast)
                },7000)


          }
        }, 15000)
        var search
        itemdata = null
         rawitemdata=null
        fetch('https://www.rolimons.com/itemapi/itemdetails').then(res => res.json()).then(idatat => {
          
    fetch(""+(jsonconfig.sales || "https://sales.embedded77.repl.co")+"/rap").then(res=>res.json()).then(rapdata=>{
   
   
          // clog(Object.keys(itemdata).length)
fetch(``+(jsonconfig.sales || "https://sales.embedded77.repl.co")+`/`).then(res=>res.json()).then(projdata=>{
  if(projdata){
  itemdata = idatat.items
  rawitemdata = JSON.parse(JSON.stringify(idatat.items))
  Object.keys(custom_values).forEach(id => {
              
   rawitemdata[id][4] = custom_values[id]
   rawitemdata[id][3] = custom_values[id]
   itemdata[id][4] = custom_values[id]
   itemdata[id][3] = custom_values[id]
   // clog(custom_values[id])
 })
       
        Object.keys(idatat.items).forEach(x=>{
          idatat.items[x][2]=rapdata[x]
          if(rawitemdata[x][3]==-1){
            
            idatat.items[x][3]=rapdata[x]
            idatat.items[x][4]=rapdata[x]
          }
        })
        var itemdata=idatat.items
      var idata=JSON.parse(JSON.stringify(idatat))
  Object.keys(projdata).forEach(key=>{
    if(rawitemdata[key][3]>0){
      projdata[key]=undefined
   //   clog(itemdata[key][0])
    }
  })
  projected=projdata

  Object.keys(itemdata).forEach(id => {

if(rawitemdata[id][3]==-1){
if(projdata[id]!=undefined){
  if(projdata[id]!=true)
{
  itemdata[id][4] = projdata[id][0]
 // console.log(chalk.yellowBright(itemdata[id][0]+" is projected now valued at "+itemdata[id][4]))
  itemdata[id][3] = projdata[id][0]
}else{
  itemdata[id][4]=projected_ratio*rawitemdata[id][2]
    itemdata[id][3]=projected_ratio*rawitemdata[id][2]
 // clog(chalk.yellowBright(itemdata[id][0]+" is old projected now valued at "+itemdata[id][4]))
}
if(itemdata[id][4]<1000){
  //itemdata[id][4]=1000
 // itemdata[id][3]=1000
}
}
}


            // clog(custom_values[id])
          })
                   Object.keys(custom_values).forEach(id => {

            rawitemdata[id][4] = custom_values[id]
            rawitemdata[id][3] = custom_values[id]
            itemdata[id][4] = custom_values[id]
            itemdata[id][3] = custom_values[id]
            // clog(custom_values[id])
          })


          var searcher = []

          Object.keys(itemdata).forEach(x => {
              searcher.push([itemdata[x + ""][0], x])
          })
          search = new FuzzySearch(searcher, [0], {
            caseSensitive: false,
            sort: true
          });
        }
        })
          setInterval(function() {
            fetch('https://www.rolimons.com/itemapi/itemdetails').then(res => res.json()).then(idatat => {
              

                        fetch(""+(jsonconfig.sales || "https://sales.embedded77.repl.co")+"/rap").then(res=>res.json()).then(rapdata=>{
                        
fetch(``+(jsonconfig.sales || "https://sales.embedded77.repl.co")+`/`).then(res=>res.json()).then(projdata=>{
  itemdata = idatat.items
  rawitemdata = JSON.parse(JSON.stringify(idatat.items))
  Object.keys(custom_values).forEach(id => {
              
   rawitemdata[id][4] = custom_values[id]
   rawitemdata[id][3] = custom_values[id]
   itemdata[id][4] = custom_values[id]
   itemdata[id][3] = custom_values[id]
   // clog(custom_values[id])
 })
Object.keys(idatat.items).forEach(x=>{
//    idatat.items[x][2]=rapdata[x]
})
var idata=JSON.parse(JSON.stringify(idatat))

if(itemdata){
Object.keys(idata.items).forEach(key=>{
if(idata.items[key][3]==-1 && idata.items[key][2]>1.3*itemdata[key][4]){
idata.items[key][2]=itemdata[key][4]
idata.items[key][4]=itemdata[key][4]
}
})
}

  Object.keys(projdata).forEach(key=>{
    if(rawitemdata[key][3]>0){
      projdata[key]=undefined
      //clog(itemdata[key][0])
    }
  })
  projected=projdata

              Object.keys(itemdata).forEach(id => {

if(rawitemdata[id][3]==-1){
if(projdata[id]!=undefined){
  if(projdata[id]!=true)
{
  itemdata[id][4] = projdata[id][0]
  itemdata[id][3] = projdata[id][0]
 // console.log(chalk.yellowBright(itemdata[id][0]+" is projected now valued at "+itemdata[id][4]))
}else{
  itemdata[id][4]=projected_ratio*rawitemdata[id][2]
    itemdata[id][3]=projected_ratio*rawitemdata[id][2]
   // console.log(chalk.yellowBright(itemdata[id][0]+" is old projected now valued at "+itemdata[id][4]))
}
if(itemdata[id][4]<1000){
  //itemdata[id][4]=1000
  //itemdata[id][3]=1000
}
}
}

            // clog(custom_values[id])
          })

                   Object.keys(custom_values).forEach(id => {

            rawitemdata[id][4] = custom_values[id]
            rawitemdata[id][3] = custom_values[id]
            itemdata[id][4] = custom_values[id]
            itemdata[id][3] = custom_values[id]
            // clog(custom_values[id])
          })

              fetch(`https://inventory.roblox.com/v1/users/${USER_ID}/assets/collectibles?limit=100`, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "X-CSRF-TOKEN": token,
                  cookie: ".ROBLOSECURITY=" + envcookie + ";",
                },
              }).then(res => res.json()).then(invdata => {

var toremove={}
                var ida = []
                rawinv = invdata.data
                invdata.data.forEach((x, index) => {
                  toremove[x.userAssetId]=true
                  if (DONOTTRADE[x.assetId] == undefined) {
                    if ((keepmyrares == true && itemdata[x.assetId][9] == 1) ){

                    } else {
                      if (mineval < rawitemdata[x.assetId][4] && rawitemdata[x.assetId][4] < manualeval) {
                        if(projected[x.assetId]!=undefined && rawitemdata[x.assetId][4]!=itemdata[x.assetId][4] ){
                          DONOTGET[x.assetId]=true
                          itemdata[x.assetId][4]=rawitemdata[x.assetId][2]*1

                          itemdata[x.assetId][3]=rawitemdata[x.assetId][2]*1
                        }
                        if (Object.keys(getridoffast) == 0 || getridoffast[x.assetId]) {
                          ida.push(invdata.data[index])
                        }
                      }
                    }
                  }
                })
                // clog(ida)
                inv=shuffle(ida)
                inv = inv.slice(0,5)

                inventorycombinations=powerSet(inv)
              //  console.log(inventorycombinations.length+" different trade combinations found.")
                logged_in = true
                inventorycombinations.forEach((x,index)=>{
  if(x.length>4){
delete inv[index]
}
})
inventorycombinations=inventorycombinations.filter(function (el) {
  return el != null;
})
var combo=[]
inventorycombinations.forEach(x=>{
  var sum=0
  x.forEach(x=>{
sum=sum+itemdata[x.assetId][2]
  })
combo.push({value:sum,assets:x})
})
inventorycombinations=combo
var removed=0
                trade_queue.forEach((trade,index)=>{
                  if(trade){
                  var nothave=false
                  trade[3].forEach(uaid=>{
                    if(toremove[uaid]==undefined){
                      nothave=true

                    }
                  })
                  if(nothave){
                    removed=removed+1
                    delete trade_queue[index]
                  }
                  }
                })
                //console.log("Removed "+c(removed)+" trades with items you no longer own")
                          trade_queue=trade_queue.filter(function (el) {
  return el != null;
})
              })
})

            })
            })
          }, 20000)
          })
        })
        var prefix = '$'
        client.on("message", message => {

          var args = message.content.split(" ");
    if(message.author.bot==false && message.content.search("<@!693482849914847282>")>-1){
      message.reply("Embedded needs the following before he can fix your problem\n**1.** Your config\n**2.** The .log file (dont worry, its just a log of any error messages/console outputs theres no cookies/shit in there)\n**3.** A clear description of the issue. A screenshot helps.\n\nEmbedded should ONLY be asked for support from if the staff can't solve it, or it's an issue which affects many users.\n<#775362538287923220>")
    }
          if (message.channel.id == "775142698998562836" && message.attachments.first()) {
            message.react("✅")
            message.react("❌")
          }
          if (message.channel.id == "826523367891795979" && message.attachments.first()) {
            message.react("🇼")
            message.react("🇱")
          }

          args.forEach((a, b) => {
            args[b] = a.replace("`", "")

            args[b] = args[b].replace(".", "")

            args[b] = args[b].replace("`", "")
            args[b] = args[b].replace(`"`, "")

            args[b] = args[b].replace(`'`, "")

          })
          var args = message.content.split(" ")
          if (message.author.bot == false) {
            if (message.content.startsWith("$")) {

              if (message.channel.id != CMDS && message.author.id != DISCORD_ID) {
                message.reply("stop using cmds here idiot. <#" + CMDS + ">")
                return;
              }
            }

            args.forEach((a, b) => {
              args[b] = a.replace("`", "")

              args[b] = args[b].replace(".", "")

              args[b] = args[b].replace("`", "")
              args[b] = args[b].replace(`"`, "")

              args[b] = args[b].replace(`'`, "")

            })
            switch (args[0]) {
            case prefix+"stats":
break;

              case prefix+"sandbox":
                if(args[1]){
                message.reply("creating...")
                var em=new discord.MessageEmbed()
                .setFooter("Embedded77#1367 | https://discord.gg/qcDQ7CCS88")
.setTitle("Here's the result!")
.setColor("#ffc0cb")
var str="Items tried on:"
args[1].split(",").forEach(x=>{
  if(itemdata[""+parseInt(x)]){
str=str+"\n**"+itemdata[""+parseInt(x)][0]+"**"
  }
})
em.setDescription(str)
var query=args[1].split(",")
query.forEach((x,index)=>{
  query[index]=parseInt(x)
})
fetch(`https://avatar.roblox.com/v1/try-on/2d?width=420&height=420&format=jpg&addAccoutrements=true&assetIds=`+query.join("&assetIds="),  { "headers": {
  "Content-Type": "application/json",
  "X-CSRF-TOKEN": token,
  cookie: ".ROBLOSECURITY=" + envcookie + ";",
}}).then(res=>res.json()).then(res=>{
  if(res.final==true && res.url.search("420")>-1){

    em.setImage(res.url)
    em.setURL(res.url)
    message.reply(em)

  }else{
    setTimeout(function(){
    fetch(`https://avatar.roblox.com/v1/try-on/2d?width=420&height=420&format=jpg&addAccoutrements=true&assetIds=`+query.join("&assetIds="),  { "headers": {
  "Content-Type": "application/json",
  "X-CSRF-TOKEN": token,
  cookie: ".ROBLOSECURITY=" + envcookie + ";",
}}).then(res=>res.json()).then(res=>{

    em.setImage(res.url)
    em.setURL(res.url)
    message.reply(em)

})
    },5000)
  }
})
}else{
                  message.reply("supply a list of asset ids!")
                }
              break;
              case prefix+"proj":



                var yesid
                cooldown[message.author.id] = new Date().getTime() + 2000
                if (args[1]) {
                  var yes = undefined
                  Object.keys(itemdata).forEach(x => {
                    if (itemdata[x] && itemdata[x][1].toLowerCase() == args[1].toLowerCase()) {
                      yes = itemdata[x]
                      yesid = x
                    }
                  })
                  args[0] = ""
                  if (yes) {

                  } else {
                    var result = search.search(args.join(' ').substring(1));
                    if (result[0]) {
                      yesid = result[0][1]
                    } else {
                      message.reply("Not found")
                    }
                  }

                }
                if (yesid) {
                  fetch(""+(jsonconfig.sales || "https://sales.embedded77.repl.co")+"").then(res=>res.json()).then(data=>{

                  var em=new discord.MessageEmbed()
                    if(data[yesid+""]){
em.setFooter("Embedded77#1367 | https://discord.gg/qYhbqG9Jz7")
                                              em.setAuthor(itemdata[yesid][0],
                        "https://www.roblox.com/thumbs/asset.ashx?width=420&height=420&assetid=" + yesid)
    .setColor("#ffc0cb")
    .setTitle("Projected :warning:")
    .setColor("YELLOW")
    if(data[yesid+""]==true){
      em.setDescription("This is an old projection, so it was sourced from rolimons. New projections will show the rap before projection & the sale price.")
    }
    else{
      em.addField("Rap Before Projection",data[yesid+""][0])
        em.addField("Rap After Projection",data[yesid+""][1])
          em.addField("Sale Price",data[yesid+""][2])
    }
    message.reply(em)
                    }else{
                                          em.setFooter("Embedded77#1367 | https://discord.gg/qYhbqG9Jz7")
                                              em.setAuthor(itemdata[yesid][0],
                        "https://www.roblox.com/thumbs/asset.ashx?width=420&height=420&assetid=" + yesid)

    .setColor("#ffc0cb")
    .setTitle("Not Projected")
    .setDescription("This item isn't marked as projected yet!")
    message.reply(em)
                    }
                  })
                }else{

                  var em=new discord.MessageEmbed()
                      .setFooter("Embedded77#1367 | https://discord.gg/qYhbqG9Jz7")
    .setColor("#ffc0cb")
    .setTitle("Not found")
    .setDescription("Could not find that item.")
    message.reply(em)
                }

break;
              case prefix + "queue":
                var em = new discord.MessageEmbed()
                  .setTitle("Queue Size")
                  .setDescription("**" + trade_queue.length + "** trades")
                message.reply(em)
                break;
              case prefix + "help":
                var em = new discord.MessageEmbed()
                  .setTitle("Commands")
                  .setFooter("Embedded77#1367 | https://discord.gg/eZYUByBAZZ")
                  .setDescription("The currently available commands.\nPremium ones require an embeddedtradebot subscription and are indicated by a :crown:\nSome commands are available for the bot owner only, and are marked by a :lock:")
                  .setColor("#ffc0cb")
                  .addField(`$userid`, "Fetches the userid of the given user.\n Example: `$userid Embedded77`", false)
                  .addField(`$itemid`, "Fetches the itemid of the given item.\n Example: `$itemid PTS`", false)
                  .addField(`$userid`, "Fetches the userid of the given user.\n Example: `$userid Embedded77`", false)
                  .addField(`:lock: $send`, "Send a trade to the given user.\n Example: `$send 1 [1,2,3,4] [5]`", false)
                  .addField(`$who_am_i`, "Fetch the info for the bot's authenticated user.")
                  .addField(`$uucflag`, "UUC flags the given user.\n Example: `$uucflag 123`", false)

                  .addField(`$flagged`, "Checks whether the user is uuc flagged.\n Example: `$flagged 123`", false)
                  .addField(`$uuclist`, "Gets the list of UUCers", false)
                  .addField(`$item`, "Fetch the info as well as the graph for the given item\nExample: `$item pts`")
                  .addField(`$steal_trade`, "Fetches users who own both of the specified owners, letting you guess who sent it.\nExample: `$steal_trade 1,1`", false)
                  .addField(`:lock: $decline`, "Declines the trade with the given trade id.\n Example: `$decline 123`", false)
                  .addField(`:lock: $accept`, "Accepts the trade with the given trade id.\n Example: `$accept 123`", false)
                  .addField(`:lock: $message_all`, "Messages many of the owners of the specified itemid.\n Example: `$message_all 123`", false)
                  .addField(`:lock: $mass_send`, "Sends to many of the owners of the specified itemid.\n Example: `$mass_send 123 [123,1234,12345,1234567]`", false)
                  .addField(`$dog`, "Fetches a disgusting animal which Embedded despises.", false)
                  .addField(`$cat`, "Fetches a cute kittycat.", false)
                  .addField(`$inbounds`, "Fetches all your inbounds.", false)
                  .addField(`$outbounds`, "Fetches all your outbounds.", false)
                  .addField(`$declined`, "Fetches all your recent declined trades.", false)
                  .addField(`:lock: $mass_decline`, "Declines up to 100 outbounds.", false)
                  .addField(`:crown: $pois`, "Checks whether the given uaid is pois or clean.\nExample: `$pois 1234`", false)
                  .addField(`:crown: $recent_snipes`, "Finds recent good deals for given itemid.\nExample: `$recent_snipes 1234`", false)
                message.reply(em)
                break;
              case prefix + "userid":
                fetch(`https://api.roblox.com/users/get-by-username?username=` + args[1]).then(res => res.json()).then(x => {
                  if (x.Id) {
                    message.reply(x.Id)
                  } else {
                    message.reply("invalid user.")
                  }
                })

                break;

              case prefix + "send":

                cooldown[message.author.id] = new Date().getTime() + 10000
                if (message.author.id == DISCORD_ID) {
                  fetch(`https://trades.roblox.com/v1/trades/send`, {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        "X-CSRF-TOKEN": token,
                        cookie: ".ROBLOSECURITY=" + envcookie + ";",
                      },
                      body: JSON.stringify({
                        offers: [{
                          userId: args[1],
                          userAssetIds: JSON.parse(args[3]),

                          robux: 0,
                        }, {
                          userId: user_id,
                          userAssetIds: JSON.parse(args[2]),
                          robux: 0,
                        }, ],
                      }),
                    })
                    .then((res) => res.json())
                    .then((a) => {
                      message.reply(JSON.stringify(a.errors));
                    });
                }
                break;
              case prefix + "who_am_i":
                fetch(`https://www.roblox.com/mobileapi/userinfo`, {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
                      "X-CSRF-TOKEN": token,
                      cookie: ".ROBLOSECURITY=" + envcookie + ";",
                    },
                  })
                  .then((res) => res.json())
                  .then((zdata) => {
                    var em = new discord.MessageEmbed()
                      .setAuthor(zdata.UserName, zdata.ThumbnailUrl)
                      .addField("Username", zdata.UserName, true)
                      .addField("Robux Balance", process.env.robuxBalance)
                      .addField(
                        "Rolimons",
                        "https://www.rolimons.com/player/" + zdata.UserID
                      )
                      .addField(
                        "Trade",
                        "https://www.roblox.com/Trade/TradeWindow.aspx?TradePartnerID=" +
                        zdata.UserID
                      )
                      .addField("Premium", JSON.stringify(zdata.IsPremium));
                    message.reply(em);
                    fetch(`https://inventory.roblox.com/v1/users/${zdata.UserID}/assets/collectibles?limit=100`, {
                      method: "GET",
                      headers: {
                        "Content-Type": "application/json",
                        "X-CSRF-TOKEN": token,
                        cookie: ".ROBLOSECURITY=" + envcookie + ";",
                      },
                    }).then(res => res.json()).then(invdata => {
                      amt = 0
                      rap = 0
                      z = ["**__ITEM NAME__ : __UAID__ : __VALUE__ : __RAP__**"]
                      invdata.data.forEach(item => {
                        var id = itemdata[item.assetId + ""]
                        z.push("" + id[0] + " : **" + item.userAssetId + "** : " + c(id[4]) + " : " + c(id[2]))

                        amt = amt + id[4]
                        rap = rap + id[2]
                      })
                      var em1 = new discord.MessageEmbed()
                        .setTitle("Items:")
                        .setDescription(z.join("\n").substring(0, 2000) + "...")
                        .addField("VALUE", amt)
                        .addField("RAP", rap)
                      message.channel.send(em1)
                    })

                  });

                break;

              case prefix + "steal_trade":

                cooldown[message.author.id] = new Date().getTime() + 10000
                var got = {};
                if (args[1]) {
                  var em = new discord.MessageEmbed()
                    .setAuthor("Possible Users")

                    .setColor("#ffc0cb");
                  message.reply(em);
                  var args1 = args[1].split(",");
                  if (args1[1] && args1[0]) {
                    fetch(
                        `https://inventory.roblox.com/v2/assets/${args1[0]}/owners?sortOrder=Desc&limit=100`, {
                          headers: {
                            cookie: ".ROBLOSECURITY=" + envcookie + ";",
                          },
                        }
                      )
                      .then((res) => res.json())
                      .then((d) => {
                        fetch(
                            `https://inventory.roblox.com/v2/assets/${args1[1]}/owners?sortOrder=Desc&limit=100`, {
                              headers: {
                                cookie: ".ROBLOSECURITY=" + envcookie + ";",
                              },
                            }
                          )
                          .then((res) => res.json())
                          .then((d1) => {
                            d.data.forEach((m) => {
                              d1.data.forEach((m1) => {
                                if (m.owner && m1.owner && m1.id != m.id) {
                                  //  // clog(m1.owner.id,m.owner.id)
                                  if (
                                    m1.owner.id == m.owner.id &&
                                    got[m.owner.id] != true
                                  ) {
                                    got[m.owner.id] = true;
                                    fetch(
                                        "https://users.roblox.com/v1/users/" + m.owner.id, {
                                          headers: {
                                            cookie: ".ROBLOSECURITY=" + envcookie + ";",
                                          },
                                        }
                                      )
                                      .then((a) => a.json())
                                      .then((p) => {
                                        var e = new discord.MessageEmbed()
                                          .setFooter(
                                            "Embedded77#1367 | https://discord.gg/eZYUByBAZZ"
                                          )
                                          .setTitle(p.displayName)
                                          .setURL(
                                            `https://www.roblox.com/users/${m.owner.id}/profile`
                                          )
                                          .addField(
                                            "Rolimons",
                                            "https://www.rolimons.com/player/" +
                                            m.owner.id
                                          )
                                          .addField(
                                            "Trade",
                                            "https://www.roblox.com/Trade/TradeWindow.aspx?TradePartnerID=" +
                                            m.owner.id
                                          )
                                          .setColor("#ffc0cb");
                                        message.channel.send(e);
                                      });
                                  }
                                }
                              });
                            });
                          });
                      });
                  }
                }

                break;

              case prefix + "clean_queue":
                var index = 2
                if (message.author.id == DISCORD_ID) {
                  message.reply("removed " + trade_queue.length + " trades.")
                  trade_queue = []

                }

                break;
                case prefix + "tally":
                  var index = 2
                  var max = parseInt(args[3] || "999999999")
                  if (message.author.id == DISCORD_ID) {
                    oldpage = null;
                    end = false;
                    var sent = 0;
                    var send = args[2].replace("[", "");
                    send = send.replace("]", "");
                    send = send.split(",");
                    message.reply("counting.")
                    // clog(send);
                    var actualsend = []
                    send.forEach(x => {
                      actualsend.push(parseInt(x))
                    })
                    send = actualsend
                    var sentcool = 0
  var count=0
                    function iterate_send(cursor) {
                      var str = `   https://inventory.roblox.com/v2/assets/${args[1]}/owners?sortOrder=Desc&limit=100
      `
                      if (cursor != null) {
                        str = str + "&cursor=" + cursor
                      }

                      fetch(str, {
                          headers: {
                            cookie: ".ROBLOSECURITY=" + envcookie + ";",
                          },
                        })
                        .then((res) => res.json())
                        .then((data) => {
                          // clog(data.nextPageCursor)

                          if (cursor == null && data.data == undefined) {
                            setTimeout(function() {
                              iterate_send(data.nextPageCursor)
                            }, 2000)
                          }

                count=count+data.data.length
                          if (sentcool > 0 && cursor == null && data.data) {
                            // clog(sentcool, cursor)
                            // clog("finished")
                            return;
                          }
                          if (sentcool == 0) {

                            sentcool = sentcool + 1
                          }
                          setTimeout(function() {
                            iterate_send(data.nextPageCursor)
                          }, 2000)
                        })
                    }
                    iterate_send(null)

                    message.reply(count)
                  }
                  break;
              case prefix + "mass_send":
                var index = 2
                var max = parseInt(args[3] || "999999999")
                if (message.author.id == DISCORD_ID) {
                  oldpage = null;
                  end = false;
                  var sent = 0;
                  var send = args[2].replace("[", "");
                  send = send.replace("]", "");
                  send = send.split(",");
                  message.reply("sending.")
                  // clog(send);
                  var actualsend = []
                  send.forEach(x => {
                    actualsend.push(parseInt(x))
                  })
                  send = actualsend
                  var sentcool = 0

                  function iterate_send(cursor) {
                    var str = `   https://inventory.roblox.com/v2/assets/${args[1]}/owners?sortOrder=Desc&limit=100
    `
                    if (cursor != null) {
                      str = str + "&cursor=" + cursor
                    }

                    fetch(str, {
                        headers: {
                          cookie: ".ROBLOSECURITY=" + envcookie + ";",
                        },
                      })
                      .then((res) => res.json())
                      .then((data) => {
                        // clog(data.nextPageCursor)

                        if (cursor == null && data.data == undefined) {
                          setTimeout(function() {
                            iterate_send(data.nextPageCursor)
                          }, 5000)
                        }

                        data.data.forEach((d, index1) => {
                          if (d.owner && max > 0) {
                            max = max - 1

                            trade_queue.push([
                              [], parseInt(d.owner.id), [parseInt(d.id)], send, [],0,undefined
                            ])
                            //trade_queue.push([assets,a[2],p,giveassets,z])

                          }
                        })
                        if (sentcool > 0 && cursor == null && data.data) {
                          // clog(sentcool, cursor)
                          // clog("finished")
                          return;
                        }
                        if (sentcool == 0) {

                          sentcool = sentcool + 1
                        }
                        setTimeout(function() {
                          iterate_send(data.nextPageCursor)
                        }, 5000)
                      })
                  }
                  iterate_send(null)
                }
                break;
              case prefix + "override":
                if (message.author.id == DISCORD_ID) {
                  args[0] = "";

                  message.reply("Overrode" + args.join(" "));
                } else {
                  message.reply("Access Denied.");
                }
                break;
                case prefix + "countoutbounds":
                  if (message.author.id == DISCORD_ID) {
                    var count = 0

                    function fetchand_add(cursor, yes) {
                      var str = `https://trades.roblox.com/v1/trades/Outbound?sortOrder=Asc&limit=100`
                      if (cursor != null) {
                        str = str + "&cursor=" + cursor
                      }
                      if (cursor == null && yes == "yes") {
                        message.reply("you have **" + c(count) + "** outbounds.")
                        return;
                      }
                      fetch(
                          str, {
                            headers: {
                              "Content-Type": "application/json",
                              cookie: ".ROBLOSECURITY=" + envcookie + ";",
                            },
                          }
                        )
                        .then((res) => res.json())
                        .then((data) => {
                          count = count + data.data.length
                          setTimeout(function() {
                            fetchand_add(data.nextPageCursor, "yes")
                          }, 5000)
                        })

                    }
                  }
                  message.reply("calculating...")
                  fetchand_add(null, "")
                  break;
              case prefix + "cleanoutbounds":
                if (message.author.id == DISCORD_ID) {
                  var count = 0

                  function fetchand_add(cursor, yes) {
                    var str = `https://trades.roblox.com/v1/trades/Outbound?sortOrder=Asc&limit=100`
                    if (cursor != null) {
                      str = str + "&cursor=" + cursor
                    }
                    if (cursor == null && yes == "yes") {
                      message.reply("you have **" + c(count) + "** outbounds.")
                      return;
                    }
                    fetch(
                        str, {
                          headers: {
                            "Content-Type": "application/json",
                            cookie: ".ROBLOSECURITY=" + envcookie + ";",
                          },
                        }
                      )
                      .then((res) => res.json())
                      .then((data) => {
                        message.reply("cleaning...")
                        data.data.forEach(x=>{
                          fetch(`https://trades.roblox.com/v1/trades/${x.id}/decline`, {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                              "X-CSRF-TOKEN": token,
                              cookie: ".ROBLOSECURITY=" + envcookie + ";",
                            },
                          })
                        })
                        setTimeout(function() {
                          fetchand_add(data.nextPageCursor, "yes")
                        }, 5000)
                      })

                  }
                }
                message.reply("cleaning...")
                fetchand_add(null, "")
                break;
              case prefix + "outbounds":

                cooldown[message.author.id] = new Date().getTime() + 10000
                fetch(
                    `https://trades.roblox.com/v1/trades/Outbound?sortOrder=Asc&limit=10`, {
                      headers: {
                        "Content-Type": "application/json",
                        cookie: ".ROBLOSECURITY=" + envcookie + ";",
                      },
                    }
                  )
                  .then((res) => res.json())
                  .then((data) => {
                    // clog(data);
                    data.data.forEach((item) => {
                      var id = item.id;
                      fetch(`https://trades.roblox.com/v1/trades/` + id, {
                          headers: {
                            "Content-Type": "application/json",
                            cookie: ".ROBLOSECURITY=" + envcookie + ";",
                          },
                        })
                        .then((res) => res.json())
                        .then((da) => {
                                if(da.offers==undefined){
return;
              }
                          var i = new discord.MessageEmbed();
                          var sumhold = null;
                          var raphold = null;
                          var give = [];
                          var gett = [];
                          var sumget = 0;
                          var rapgive = 0;
                          var rapget = 0;
                          var hasrare = false;
                          var hasrapitem = false;

                          da.offers[0].userAssets.forEach((ua) => {
                            sumget = sumget + itemdata[ua.assetId + ""][4];
                            rapget = rapget + ua.recentAveragePrice;

                            gett.push(ua.name + " : " + c(itemdata[ua.assetId + ""][4]));
                            if (whitelist[ua.assetId + ""]) {
                              continueeval[id] = true;
                            }

                            if (da.offers[0].user.name != ROBLOX_USERNAME) {
                              if (sumget + itemdata[ua.assetId + ""][4] == -1) {
                                hasrapitem = true;
                              }
                            }
                            if (itemdata[ua.assetId + ""][9] == 1) {
                              hasrare = true;
                            }
                          });
                          var sumgive = 0;
                          da.offers[1].userAssets.forEach((ua) => {
                            give.push(ua.name + " : " + c(itemdata[ua.assetId + ""][4]));

                            rapgive = rapgive + ua.recentAveragePrice;
                            if (itemdata[ua.assetId + ""][9] == 1) {
                              hasrare = true;
                            }
                            sumgive = sumgive + itemdata[ua.assetId + ""][4];
                            /*
                                      if (da.offers[0].user.name==ROBLOX_USERNAME){
                                        sumhold=sumget
                                        sumget=sumgive
                                        sumgive=sumhold
                                         raphold=rapget
                                        rapget=rapgive
                                        rapgive=raphold
                                      }
                                      */
                          });
                          // clog("You give " + sumgive + " and receive " + sumget);
                          i.setColor("YELLOW");
                          i.setTitle("Trade Outbound");
                          i.setAuthor(
                            item.user.name,
                            "https://www.roblox.com/headshot-thumbnail/image?userId=" +
                            item.user.id +
                            "&width=420&height=420&format=png"
                          );
                          i.addField("Items you will give", gett.join("\n"), true);
                          i.setTimestamp();
                          i.addField(
                            "Items you will receive",
                            give.join("\n"),
                            true
                          ).addField("Value", `${c(sumget)} vs ${c(sumgive)}`, false);
                          i.addField("Rap", `${c(rapget)} vs ${c(rapgive)}`, false);
                          i.addField("TradeID", id, false);
                          message.channel.send(i);
                        });
                    });
                  });

                break;
              case prefix + "mass_decline":

                if (message.author.id == DISCORD_ID) {
                  fetch(
                      `https://trades.roblox.com/v1/trades/Outbound?sortOrder=Asc&limit=100`, {
                        headers: {
                          "Content-Type": "application/json",
                          cookie: ".ROBLOSECURITY=" + envcookie + ";",
                        },
                      }
                    )
                    .then((res) => res.json())
                    .then((data) => {

                      message.channel.send("Declining " + data.data.length + " trades.")
                      data.data.forEach((item) => {
                        var id = item.id;
                        fetch(`https://trades.roblox.com/v1/trades/${id}/decline`, {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                            "X-CSRF-TOKEN": token,
                            cookie: ".ROBLOSECURITY=" + envcookie + ";",
                          },
                        })
                      });
                    })
                }
                break;
                           case prefix + "yeet_inbounds":

                if (message.author.id == DISCORD_ID) {
                  fetch(
                      `https://trades.roblox.com/v1/trades/Inbound?sortOrder=Asc&limit=100`, {
                        headers: {
                          "Content-Type": "application/json",
                          cookie: ".ROBLOSECURITY=" + envcookie + ";",
                        },
                      }
                    )
                    .then((res) => res.json())
                    .then((data) => {

                      message.channel.send("Declining " + data.data.length + " trades.")
                      data.data.forEach((item) => {
                        var id = item.id;
                        fetch(`https://trades.roblox.com/v1/trades/${id}/decline`, {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                            "X-CSRF-TOKEN": token,
                            cookie: ".ROBLOSECURITY=" + envcookie + ";",
                          },
                        })
                      });
                    })
                }
                break;
              case prefix + "declined":

                cooldown[message.author.id] = new Date().getTime() + 10000
                if (message.author.id == DISCORD_ID) {
                  fetch(
                      `https://trades.roblox.com/v1/trades/Inactive?sortOrder=Asc&limit=10`, {
                        headers: {
                          "Content-Type": "application/json",
                          cookie: ".ROBLOSECURITY=" + envcookie + ";",
                        },
                      }
                    )
                    .then((res) => res.json())
                    .then((data) => {
                      data.data.forEach((item) => {
                        var id = item.id;
                        fetch(`https://trades.roblox.com/v1/trades/` + id, {
                            headers: {
                              "Content-Type": "application/json",
                              cookie: ".ROBLOSECURITY=" + envcookie + ";",
                            },
                          })
                          .then((res) => res.json())
                          .then((da) => {
                                  if(da.offers==undefined){
return;
              }
                            var i = new discord.MessageEmbed();
                            var sumhold = null;
                            var raphold = null;
                            var give = [];
                            var gett = [];
                            var sumget = 0;
                            var rapgive = 0;
                            var rapget = 0;
                            var hasrare = false;
                            var hasrapitem = false;

                            da.offers[0].userAssets.forEach((ua) => {
                              sumget = sumget + itemdata[ua.assetId + ""][4];
                              rapget = rapget + ua.recentAveragePrice;

                              gett.push(
                                ua.name + " : " + c(itemdata[ua.assetId + ""][4])
                              );
                              if (whitelist[ua.assetId + ""]) {
                                continueeval[id] = true;
                              }

                              if (da.offers[0].user.name != ROBLOX_USERNAME) {
                                if (sumget + itemdata[ua.assetId + ""][4] == -1) {
                                  hasrapitem = true;
                                }
                              }
                              if (itemdata[ua.assetId + ""][9] == 1) {
                                hasrare = true;
                              }
                            });
                            var sumgive = 0;
                            da.offers[1].userAssets.forEach((ua) => {
                              give.push(
                                ua.name + " : " + c(itemdata[ua.assetId + ""][4])
                              );

                              rapgive = rapgive + ua.recentAveragePrice;
                              if (itemdata[ua.assetId + ""][9] == 1) {
                                hasrare = true;
                              }
                              sumgive = sumgive + itemdata[ua.assetId + ""][4];
                              /*
                                          if (da.offers[0].user.name==ROBLOX_USERNAME){
                                            sumhold=sumget
                                            sumget=sumgive
                                            sumgive=sumhold
                                             raphold=rapget
                                            rapget=rapgive
                                            rapgive=raphold
                                          }
                                          */
                            });
                            // clog("You give " + sumgive + " and receive " + sumget);
                            i.setColor("RED");

                            i.setColor(colors["declined"] || "RED");
                            i.setTitle("Trade Declined");
                            i.setAuthor(
                              item.user.name,
                              "https://www.roblox.com/headshot-thumbnail/image?userId=" +
                              item.user.id +
                              "&width=420&height=420&format=png"
                            );
                            i.addField("Items you will give", give.join("\n"), true);
                            i.setTimestamp();
                            i.addField(
                              "Items you will receive",
                              gett.join("\n"),
                              true
                            ).addField("Value", `${c(sumgive)} vs ${c(sumget)}`, false);
                            i.addField("Rap", `${c(rapgive)} vs ${c(rapget)}`, false);
                            i.addField("TradeID", id, false);
                            message.channel.send(i);
                          });
                      });
                    });
                }
                break;
              case prefix + "declinedjson":

                break;
              case prefix + "inbounds":

                cooldown[message.author.id] = new Date().getTime() + 10000
                fetch(
                    `https://trades.roblox.com/v1/trades/Inbound?limit=10`, {
                      headers: {
                        "Content-Type": "application/json",
                        cookie: ".ROBLOSECURITY=" + envcookie + ";",
                      },
                    }
                  )
                  .then((res) => res.json())
                  .then((data) => {
                    data.data.forEach((item) => {
                      var id = item.id;
                      fetch(`https://trades.roblox.com/v1/trades/` + id, {
                          headers: {
                            "Content-Type": "application/json",
                            cookie: ".ROBLOSECURITY=" + envcookie + ";",
                          },
                        })
                        .then((res) => res.json())
                        .then((da) => {
                                if(da.offers==undefined){
return;
              }
                          var i = new discord.MessageEmbed();
                          var sumhold = null;
                          var raphold = null;
                          var give = [];
                          var gett = [];
                          var sumget = 0;
                          var rapgive = 0;
                          var rapget = 0;
                          var hasrare = false;
                          var hasrapitem = false;

                          da.offers[0].userAssets.forEach((ua) => {
                            sumget = sumget + itemdata[ua.assetId + ""][4];
                            rapget = rapget + ua.recentAveragePrice;

                            gett.push(ua.name + " : " + c(itemdata[ua.assetId + ""][4]));
                            if (whitelist[ua.assetId + ""]) {
                              continueeval[id] = true;
                            }

                            if (da.offers[0].user.name != ROBLOX_USERNAME) {
                              if (sumget + itemdata[ua.assetId + ""][4] == -1) {
                                hasrapitem = true;
                              }
                            }
                            if (itemdata[ua.assetId + ""][9] == 1) {
                              hasrare = true;
                            }
                          });
                          var sumgive = 0;
                          da.offers[1].userAssets.forEach((ua) => {
                            give.push(ua.name + " : " + c(itemdata[ua.assetId + ""][4]));

                            rapgive = rapgive + ua.recentAveragePrice;
                            if (itemdata[ua.assetId + ""][9] == 1) {
                              hasrare = true;
                            }
                            sumgive = sumgive + itemdata[ua.assetId + ""][4];

                            if (da.offers[0].user.name == ROBLOX_USERNAME) {

                              sumhold = sumget;
                              sumget = sumgive;
                              sumgive = sumhold;
                              raphold = rapget;
                              rapget = rapgive;
                              rapgive = raphold;
                              itemhold = gett
                              gett = give
                              give = itemhold
                            }

                          });
                          // clog("You give " + sumgive + " and receive " + sumget);
                          i.setColor(colors["inbound"] || "GREEN");
                          i.setTitle("Trade Inbound");
                          i.setAuthor(
                            "Hidden",
                            "https://www.roblox.com/headshot-thumbnail/image?userId=" +
                            1 +
                            "&width=420&height=420&format=png"
                          );
                          i.addField("Items you will give", give.join("\n"), true);
                          i.setTimestamp();
                          i.addField(
                            "Items you will receive",
                            gett.join("\n"),
                            true
                          ).addField("Value", `${c(sumgive)} vs ${c(sumget)}`, false);
                          i.addField("Rap", `${c(rapgive)} vs ${c(rapget)}`, false);
                          i.addField("TradeID", id, false);
                          message.channel.send(i);
                        });
                    });
                  });

                break;
              case prefix + "message_all":
                message.channel.send("**THIS COMMAND IS SLOW, BE PREPARED FOR A WAIT**")
                if (message.author.id == DISCORD_ID) {

                  var index = 1
                  oldpage = null;
                  end = false;
                  sent = 0;

                  if (oldpage == null) {
                    fetch(
                        `   https://inventory.roblox.com/v2/assets/${args[1]}/owners?sortOrder=Desc&limit=100
    `, {
                          headers: {
                            cookie: ".ROBLOSECURITY=" + envcookie + ";",
                          },
                        }
                      )
                      .then((res) => res.json())
                      .then((data) => {
                        fetch(
                            "https://api.roblox.com/marketplace/productinfo?assetId=" +
                            parseInt(args[1])
                          )
                          .then((res) => res.json())
                          .then((iteml) => {
                            var sent1 = []

                            data.data = data.data.slice(0, 50)
                            data.data.forEach((d) => {
                              index = index + 1

                              // clog('hi')
                              if (d.owner) {
                                setTimeout(function() {

                                  fetch("https://api.roblox.com//users/" + d.owner.id)
                                    .then((res) => res.json())
                                    .then((u) => {
                                      delete args[1]
                                      delete args[2]
                                        args=args.filter(function (el) {
  return el != null;
})
                                      message.channel.send(`Sending to ` + u.Username)
                                      if (sent1[u.Username] == undefined) {
                                        sent1[u.Username] = ""
                                        fetch("https://friends.roblox.com/v1/users/" + u.Id + "/request-friendship", {
                                          method: "POST",
                                          headers: {
                                            "Content-Type": "application/json",
                                            "X-CSRF-TOKEN": token,
                                            cookie: ".ROBLOSECURITY=" +
                                              envcookie +
                                              ";",
                                          },
                                          body: JSON.stringify({
                                            "friendshipOriginSourceType": "Unknown"
                                          })
                                        })
                                        fetch(
                                            `https://privatemessages.roblox.com/v1/messages/send`, {
                                              method: "POST",
                                              headers: {
                                                "Content-Type": "application/json",
                                                "X-CSRF-TOKEN": token,
                                                cookie: ".ROBLOSECURITY=" +
                                                  envcookie +
                                                  ";",
                                              },
                                              body: JSON.stringify({
                                                subject: "Trade for " + iteml.Name,
                                                body: `${u.Username},\n`+(
                                                "Please add me so i can offer for this item"),
                                                recipientId: u.Id + "",
                                                cacheBuster: 1613997102080
                                              }),
                                            }
                                          )
                                          .then((res) => res.json())
                                          .then((idata) => {
                                            // clog(idata);
                                            if (idata.success == true) {
                                              message.channel.send(
                                                "Sent to " + u.Username
                                              );
                                            } else {
                                              message.channel.send(u.Username + " | " + idata.message)
                                            }
                                          });
                                      }
                                    });
                                  oldpage = data.nextPageCursor;

                                }, 1000 + (index * 10000));
                              }
                            });
                          });
                      });
                  } else {}
                }
                break;
              case prefix + "cat":

                cooldown[message.author.id] = new Date().getTime() + 1000
                try {
                  cembed = new discord.MessageEmbed().setTitle("Cat").setDescription("Aww, cute cat!")
                  fetch("https://api.thecatapi.com/v1/images/search").then(res => res.json())
                    .then(json => {

                      cembed.setImage(json[0].url)
                      // clog(json)
                      message.channel.send(cembed)
                    })
                } catch (err) {
                  message.reply("sorry, something went wrong")
                }
                break;

              case prefix + "dog":
                try {
                  cembed = new discord.MessageEmbed().setTitle("Dog").setDescription("Dogs are disgusting, filthy animals which Embedded despises. Please use $cat instead. To show you how disgusting this animal is, here's a picture.")
                  fetch("https://api.thedogapi.com/v1/images/search").then(res => res.json())
                    .then(json => {

                      cembed.setImage(json[0].url)
                      // clog(json)
                      message.channel.send(cembed)
                    })
                } catch (err) {
                  message.reply("sorry, something went wrong")
                }
                break;

              case prefix + "create":
            /*
                var em = new discord.MessageEmbed()

                var sum = 0
                var sum1 = 0
                var rap = 0
                var rap1 = 0
                var assets = args[3].split(",")
                var j = args[4].split(",")
                if (imagestyle == "tall") {
                  Jimp.read("./image_templates/background.jpg")
                    .then(async function(image) {
                      var key = Math.random().toString(36).substring(7)
                      var edit = image.print(font, 375, 150, "" + sanitize(args[2]))
                      edit.print(font, 75, 150, sanitize(args[1]))

                      // clog(85 + 100 * index)
                      await assets.forEach(async (x, index) => {
                        //  // clog('https://www.roblox.com/thumbs/asset.ashx?width=100&height=100&assetid='+parseInt(x)+'')
                        sum = sum + itemdata[parseInt(x)][4]
                        rap = rap + itemdata[parseInt(x)][2]
                        let found_image = await Jimp.read('https://www.roblox.com/thumbs/asset.ashx?width=100&height=100&assetid=' + parseInt(x) + '');
                        // clog(85 + 100 * index)
                        var id = itemdata[parseInt(x)]
                        await edit.composite(found_image, 75, 200 + 135 * index)
                        await edit.print(font16, 180, 227 + 115 * index, "Value: " + c(id[4]))
                        await edit.print(font16, 180, 246 + 115 * index, "  Rap: " + c(id[2]))
                        // clog("updated")
                      })
                      await j.forEach(async (x, index) => {
                        sum1 = sum1 + itemdata[parseInt(x)][4]
                        rap1 = rap1 + itemdata[parseInt(x)][2]
                        // clog('./itemimages/' + parseInt(x) + '.png')
                        let found_image = await Jimp.read('https://www.roblox.com/thumbs/asset.ashx?width=100&height=100&assetid=' + parseInt(x) + '');
                        var id = itemdata[parseInt(x)]
                        await edit.composite(found_image, 375, 200 + 122 * index)
                        await edit.print(font16, 480, 227 + 125 * index, "Value: " + c(id[4]))
                        await edit.print(font16, 480, 246 + 125 * index, "  Rap: " + c(id[2]))
                        if (index + 1 == j.length) {
                          edit.print(font, 380, 680, c(rap) + " vs " + c(rap1))
                          edit.print(font, 380, 730, c(sum) + " vs " + c(sum1))
                          var attachment = new discord
                            .MessageAttachment('created.jpg', 'created.jpg')
                          setTimeout(function() {
                            edit.write("created.jpg").getBuffer(Jimp.MIME_PNG, (err, buffer) => {

                              // clog("sent!")
                              em.attachFiles(attachment)
                              em.setImage("attachment://created.jpg")

                              em.setFooter("Embedded77#1367 | https://discord.gg/qcDQ7CCS88")

                                .setColor("#ffc0cb")

                              message.reply(em)
                            })

                          }, 2000)
                        }
                      })

                    })
                } else if (imagestyle == "wide") {
                  var sum = 0
                  var sum1 = 0
                  Jimp.read("./image_templates/background.jpg")
                    .then(async function(image) {

                      var edit = image.print(font, 600, 10, "Trade with " + sanitize(a[3]))
                      let found_image = await Jimp.read("https://www.roblox.com/headshot-thumbnail/image?userId=" + a[2] + "&width=150&height=150&format=png");
                      // clog(85 + 100 * index)
                      await edit.composite(found_image, 600, 100)
                      await assets.forEach(async (x, index) => {
                        // clog(x)
                        //  // clog('https://www.roblox.com/thumbs/asset.ashx?width=100&height=100&assetid='+parseInt(x)+'')
                        sum = sum + itemdata[parseInt(x)][4]
                        let found_image = await Jimp.read('https://www.roblox.com/thumbs/asset.ashx?width=100&height=100&assetid=' + parseInt(x) + '');
                        // clog(85 + 100 * index)
                        await edit.composite(found_image, 85 + 145 * index, 85)
                        // clog("updated")
                      })
                      await j.forEach(async (x, index) => {
                        sum1 = sum1 + itemdata[parseInt(x)][4]
                        // clog('./itemimages/' + parseInt(x) + '.png')
                        let found_image = await Jimp.read('https://www.roblox.com/thumbs/asset.ashx?width=100&height=100&assetid=' + parseInt(x) + '');
                        // clog(85 + 100 * index)
                        await edit.composite(found_image, 85 + 145 * index, 345)
                        if (index + 1 == j.length) {
                          edit.print(font, 650, 300, c(sum) + " vs " + c(sum1))
                          var attachment = new discord
                            .MessageAttachment('./output.jpg', 'output.jpg')
                          setTimeout(function() {
                            edit.write("output.jpg").getBuffer(Jimp.MIME_PNG, (err, buffer) => {

                              // clog("sent!")
                              i.attachFiles(attachment)
                              i.setImage("attachment://output.jpg")
                              client.channels.cache.get(NOTIF_CHANNEL).send(i);
                            })

                          }, 2000)
                        }
                      })

                    })
                } else if (imagestyle == "none") {

                }
*/

                break;
              case prefix + "uucflag":
                fetch("https://api.roblox.com//users/" + args[1])
                  .then((res) => res.json())
                  .then((u) => {

                    if (u.Username) {
                      declinedj[args[1]] = 3
                      message.reply("flagged " + u.Username + ".")
                    } else {
                      message.reply("this is an invalid user.")
                    }

                  })
                break;
              case prefix + "massuucflag":
                // clog(message.author.id)
                if (message.author.id == "" + DISCORD_ID + "") {
                  var g = JSON.parse(JSON.stringify(args))
                  g[0] = ''
                  g = g.join(",")
                  g.split(",").forEach(k => {
                    // clog(k)
                    if (k != "") {
                      fetch("https://api.roblox.com//users/" + (k))
                        .then((res) => res.json())
                        .then((u) => {

                          if (u.Username) {
                            declinedj[k + ""] = 3
                            message.reply("flagged " + u.Username + ".")
                          } else {
                            message.reply("this is an invalid user.")
                          }

                        })
                    }
                  })
                }
                break;
              case prefix + "flagged":
                fetch("https://api.roblox.com//users/" + args[1])
                  .then((res) => res.json())
                  .then((u) => {
                    if (u.Username) {
                      if (declinedj[args[1]] == undefined) {
                        message.reply(u.Username + " isn't flagged yet, use $uucflag to flag them if you wish.")
                      } else {
                        message.reply(u.Username + " is flagged with a **" + declinedj[args[1]] + "**/3 likelihood.")

                      }
                    } else {
                      message.reply("this is an invalid user.")
                    }

                  })

                break;

              case prefix + "pois":

                var id = parseInt(args[1])

                if (id) {
                  fetch(`https://www.rolimons.com/uaid/` + id).then(res => res.text()).then(res => {
                    //// clog(res)
                    if (res != 'Uaid not found, try again later') {
                      var search = res,
                        first = 'uaid_details'
                      var second = `owner_list`;
                      var itemdat = JSON.parse(search.substring(search.indexOf(first) + first.length, search.indexOf(second)).replace(";", "").replace("=", "").replace("var", ''))
                      // clog(itemdat)
                      var search = res,
                        first = 'item_details'
                      var second = `uaid_details`;
                      var itemname = JSON.parse(search.substring(search.indexOf(first) + first.length, search.indexOf(second)).replace(";", "").replace("=", "").replace("var", ''))
                      var search = res,
                        first = 'owner_list'
                      var second = `lucky_cat_uaid`;
                      var owners = JSON.parse(search.substring(search.indexOf(first) + first.length, search.indexOf(second)).replace(";", "").replace("=", "").replace("var", ''))
                      message.reply(`Scanning...`)
                      var em = new discord.MessageEmbed()
                        .setFooter("Embedded77#1367 | https://discord.gg/qcDQ7CCS88")
                        .setURL("https://www.rolimons.com/item/" + args[1])
                        .setColor("#ffc0cb")
                        .setThumbnail("https://www.roblox.com/thumbs/asset.ashx?width=420&height=420&assetid=" + itemdat["asset_id"])
                        .setTitle(`UAID ` + args[1])
                        .setURL(`https://www.rolimons.com/uaid/` + args[1])
                        .setAuthor(itemname.name, `https://www.roblox.com/thumbs/asset.ashx?width=420&height=420&assetid=` + itemdat["asset_id"])
                      if (itemdata.serial) {
                        em.addField('SERIAL', itemdat.serial)
                      }
                      em.addField('OWNER', (itemdat.owner_name || `Hidden/Deleted`))
                      em.addField(`Last Traded`, itemdat["updated_relative_string"])
                      message.reply(em)
                      if (itemdat["updated_relative_string"].search(`month`) != -1 || itemdat["updated_relative_string"].search(`year`) != -1) {
                        message.channel.send(`Since the current owner has had it for more than a month, we have deemed this uaid(${args[1]}) as CLEAN :white_check_mark:`)

                      } else {
                        comped_detected = false

                        Object.keys(owners).forEach(x => {

                          var item = owners[x][0]
                          if (item && parseInt(x) + 2628000 >= Date.now() / 1000) {
                             fetch(`https://avatar.roblox.com/v1/users/${item}/avatar`).then(res => res.json()).then(avatar => {
                               avatar.assets.forEach(a=>{
                                 if(badassets[a.id]!=undefined){
                                   comped_detected=true
                                 }
                               })
                            fetch("https://inventory.roblox.com/v1/users/" + item + "/assets/collectibles?sortOrder=Asc&limit=100").then(res => res.json()).then(p => {
                              // clog(p)
                              var amt = 0
                              if (p.data) {
                                p.data.forEach(l => {
                                  amt = amt + itemdata[l.assetId][4]
                                })
                                if (amt < 5000) {
                                  comped_detected = true
                                }
                              }
                            })
                             })
                          }
                        })

                        setTimeout(function() {
                          if (comped_detected) {
                            message.reply(`after scanning this uaid, the bot has determined that the uaid is :x: POIS`)
                          } else {

                            message.reply(`After scanning this uaid, the bot has determined that the uaid is :white_check_mark: CLEAN`)
                          }
                        }, 2000)
                      }
                    } else {
                      message.reply(`invalid UAID.`)
                    }
                  })

                } else {
                  message.reply(`please provide a UAID for us to scan.`)
                }

                break;

              case prefix + "underrap":

                var yesid
                cooldown[message.author.id] = new Date().getTime() + 2000
                if (args[1]) {
                  var yes = undefined
                  Object.keys(itemdata).forEach(x => {
                    if (itemdata[x] && itemdata[x][1].toLowerCase() == args[1].toLowerCase()) {
                      yes = itemdata[x]
                      yesid = x
                    }
                  })
                  args[0] = ""
                  if (yes) {

                  } else {
                    var result = search.search(args.join(' ').substring(1));
                    if (result[0]) {
                      yesid = result[0][1]
                    } else {
                      message.reply("Not found")
                    }
                  }

                }

                var id = itemdata[yesid + ""]
                if (id[3] == -1) {
                  message.channel.send(id[0] + " isnt valued")
                } else if (id[9] == 1) {
                  message.channel.send(id[0] + " is a rare. Its rap is irrelevant.")
                } else {
                  message.channel.send("The current value of " + id[0] + " is " + id[4] + ". It has the rap for " + findNearestTier(id[2]))
                }
                break;

              case prefix + "item":

                var yesid
                cooldown[message.author.id] = new Date().getTime() + 2000
                if (args[1]) {
                  var yes = undefined
                  Object.keys(itemdata).forEach(x => {
                    if (itemdata[x] && itemdata[x][1].toLowerCase() == args[1].toLowerCase()) {
                      yes = itemdata[x]
                      yesid = x
                    }
                  })
                  args[0] = ""
                  if (yes) {

                  } else {
                    var result = search.search(args.join(' ').substring(1));
                    if (result[0]) {
                      yesid = result[0][1]
                    } else {
                      message.reply("Not found")
                    }
                  }

                }
                if (yesid) {
                  var em = new discord.MessageEmbed()

                  fetch("https://www.rolimons.com/item/" + yesid).then(res => res.text()).then(res => {

                    var search = res,
                      first = 'item_details_data',
                      second = 'history_data';
                    var itemdata = JSON.parse(search.substring(search.indexOf(first) + first.length, search.indexOf(second)).replace(";", "").replace("var", '').replace("=", ''))
                    if (custom_values[yesid + ""]) {
                      itemdata.value = custom_values[yesid + ""]
                    }
                    em.setTitle(itemdata.item_name)
                    if (itemdata.acronym) {
                      em.setAuthor(itemdata.acronym,
                        "https://www.roblox.com/thumbs/asset.ashx?width=420&height=420&assetid=" + yesid)
                    }
                    em.addField(`RAP`, c(itemdata.rap), true)
                    em.addField(`VALUE`, (c(itemdata.value || itemdata.rap)), true)
                    em.addField(`Best Price`, c(itemdata.best_price), true)
                    em.addField(`Premium/Total Copies`, c(itemdata.bc_copies) + "/" + c(itemdata.copies), true)
                    em.addField(`Hoarded`, `${((itemdata.hoarded_copies / itemdata.copies) * 100).toFixed(3)}% (${itemdata.hoarded_copies} Copies)`, true)
                      .setFooter("Embedded77#1367 | https://discord.gg/qcDQ7CCS88")
                      .setURL("https://www.rolimons.com/item/" + yesid)
                      .setColor("#ffc0cb")
                      .setThumbnail("https://www.roblox.com/thumbs/asset.ashx?width=420&height=420&assetid=" + yesid)
                    var search = res,
                      first = 'value_changes',
                      second = 'item_notes_html';
                    var values = (search.substring(search.indexOf(first) + first.length, search.indexOf(second)).replace(";", "").replace("=", "").replace("var", ''))

                    var search = res,
                      first = '],"rap":',
                      second = ',"best_price":[';

                    var rap = JSON.parse(search.substring(search.indexOf(first) + first.length, search.indexOf(second)).replace(";", ""))
                    var search = res,
                      first = 'history_data',
                      second = ',"favorited":[';
                    var timestamps = JSON.parse(search.substring(search.indexOf(first) + first.length, search.indexOf(second)).replace(";", "").replace("=", "") + "}")
                    d = []
                    p = []
                    v = []
                    h = {}
                    t = {}
                    var x = 'Tags: '
                    if (itemdata.rare) {
                      x = x + ':gem: '
                    }

                    if (itemdata.hyped) {
                      x = x + ':fire: '
                    }

                    if (itemdata.projected) {
                      x = x + ':warning: '
                    }
                    em.addField(`Demand`, demand[itemdata.demand + ""], true)

                    em.addField(`Trend`, trend[itemdata.trend + ""], true)
                    var xiho = {}
                    em.addField(`TAGS:`, x, false)
                    JSON.parse(values).forEach((y) => {

                      if (parseInt(y[3]) && parseInt(y[3]) > 100) {
                        d.push(parseInt(y[3]))
                        p.push(moment(y[0] * 1000).format("MM-DD-YY"))
                        xiho[moment(y[0] * 1000).format("MM-DD-YY")] = ''
                      }
                    })
                    h = {}

                    var sdhfoih = []
                    var s = ''
                    // // clog(xiho,h)
                    var rt = 0
                    timestamps.timestamp.forEach((ts, index) => {
                      if (h[moment(ts * 1000).format("MM-DD-YY")] == undefined) {
                        // // // clog(moment(ts*1000).format("MM-DD-YY"),xiho[moment(ts*1000).format("MM-DD-YY")])
                        if (xiho[moment(ts * 1000).format("MM-DD-YY")] != undefined) {
                          rt = rt + 1
                          if (rt % 8 == 0) {

                            s = s + rap[index] + ','
                          }
                          h[moment(ts * 1000).format("MM-DD-YY")] = ''
                          s = s + rap[index] + ','
                        }
                      }
                    })
                    // // clog(sdhfoih)
                    g = []
                    var gx = 1
                    while (gx < (d.length - s.split(",").length)) {
                      s = s + itemdata.rap + ','
                      gx = gx + 1
                    }
                    // clog(s)
                    // // clog(d.length,sdhfoih.length)
                    p.push(moment((new Date).getTime()).format("MM-DD-YY"))
                    d.push(itemdata.value)
                    // // clog(s.split(','))
                    s = s + itemdata.rap
                    var myChart = new QuickChart();
                    myChart
                      .setConfig({
                        type: 'line',
                        data: {
                          labels: p,
                          datasets: [{
                            label: 'VALUE',
                            data: d
                          }, {
                            label: 'RAP',
                            data: s.split(',')
                          }]
                        },
                        options: {
                          backgroundColor: "#2f3136",
                          label: itemdata.name,
                          pointStyle: 'triangle'
                        }
                      })
                      .setWidth(800) //

                    myChart.getShortUrl().then(x => {
                      em.setImage(x)
                      // // clog(x)
                      message.reply(em)
                    })

                  })
                }
                break;

              case prefix + "itemid":

                cooldown[message.author.id] = new Date().getTime() + 2000
                if (args[1]) {
                  var yes = undefined
                  var yesid
                  Object.keys(itemdata).forEach(x => {
                    if (itemdata[x] && itemdata[x][1].toLowerCase() == args[1].toLowerCase()) {
                      yes = itemdata[x]
                      yesid = x
                    }
                  })
                  args[0] = ""
                  setTimeout(function() {
                    if (yes) {

                      message.reply("id of " + yes[0] + ' is ' + yesid)
                    } else {
                      var result = search.search(args.join(' ').substring(1));
                      if (result[0]) {
                        // // clog(result)
                        message.reply("id of " + itemdata[result[0][1]][0] + ' is ' + result[0][1])
                      } else {
                        message.reply("Not found")
                      }
                    }
                  }, 100)
                }
                break;
              case prefix + "uuclist":
                var hellow = ""

                Object.keys(declinedj).forEach((p, l) => {
                  if (declinedj[p] >= 3) {
                    hellow = hellow + p + " : **" + declinedj[p] + '**\n'
                  }
                })

                setTimeout(function() {
                  var i = new discord.MessageEmbed()
                  i.setAuthor("UUC LIST")
                    .setFooter("Embedded77#1367 | https://discord.gg/qcDQ7CCS88")
                    .setDescription(hellow.substring(0, 2000))
                    .setColor("#ffc0cb")

                  message.reply(i)
                }, 1000)
                break
              case prefix + "recent_snipes":

                cooldown[message.author.id] = new Date().getTime() + 5000

                var index = 1
                var yes = false

                var sent1 = 0
                var amt1 = parseInt(args[2]) || 10
                var args = message.content.split(' ')
                if (logged_in && args[1]) {

                  try {
                    fs.readFile('./json/tradesviewed.json', 'utf8', function(err, data) {

                      if (err) throw err;
                      viewed = JSON.parse(data).last
                      //	// // clog(viewed)
                      last = viewed
                      snipes.snipes.reverse().forEach(a => {

                        if (10 > sent1) {
                          //// // clog(a[3]+`(${a[0]})`)
                          var da = []
                          da[0] = a[5]

                          var donotcontinue = false
                          da[1] = a[4]
                          var sumhold = null
                          var raphold = null
                          var give = []
                          var gett = []
                          var sumget = 0
                          var sumgive = 0
                          var rapgive = 0
                          var rapget = 0
                          var hasrare = false
                          var hasrapitem = false
                          var has_wanted = false
                          b = []
                          a[4].forEach(ua => {
                            //// // clog(itemdata[ua+""][0])

                            if (ua > 10 && itemdata[ua + ""][9] == 1) {
                              hasrare = true
                            }
                            give.push("[" + itemdata[ua + ""][0] + "](https://www.rolimons.com/item/" + ua + ") : " + c(itemdata[ua + ""][4]))
                            sumgive = sumgive + itemdata[ua + ""][4]
                            rapgive = rapgive + itemdata[ua + ""][2]
                            if (itemdata[ua + ""][3] == -1) {
                              hasrapitem = true
                            }
                            if (want[ua + ""]) {
                              has_wanted = itemdata[ua + ""][0]
                            }

                          })

                          a[5].forEach(ua => {
                            if (ua > 10) {
                              //// // clog(itemdata[ua+""][0])

                              if ((ua + "") == args[1]) {
                                donotcontinue = true
                              }
                              gett.push("[" + itemdata[ua + ""][0] + "](https://www.rolimons.com/item/" + ua + ") : " + c(itemdata[ua + ""][4]))
                              sumget = sumget + itemdata[ua + ""][4]
                              rapget = rapget + itemdata[ua + ""][2]
                            }
                          })

                          var desc = ((sumgive - sumget) / sumget) * 100 + "% Win\n **Tags:**\n"
                          a[5].forEach(ua => {
                            if (ua > 10) {} else {
                              if (ua <= 7 && ua >= 1) {
                                desc = desc + `<:${ua}_:${emoji[ua + ""]}>`
                              }
                            }
                          })
                          if (true) {
                            if ((((sumgive - sumget) / sumget) * 100) <= amt1) {
                              // // clog(a[4])
                              setTimeout(function() {
                                fetch("https://inventory.roblox.com/v1/users/" + a[2] + "/assets/collectibles?sortOrder=Asc&limit=100").then(res => res.json()).then(k => {
                                  var p = []
                                  var j = []
                                  var z = []
                                  if (k.data) {
                                    k.data.forEach(l => {
                                      a[4].forEach(h => {
                                        if (l.assetId == h) {
                                          p.push(l.userAssetId)
                                          j.push(l.assetId)
                                        }
                                      })
                                    })
                                    var amt = 0
                                    j.forEach(ua => {
                                      if (ua > 10) {
                                        amt = amt + itemdata[ua + ""][4]
                                        z.push(itemdata[ua + ""][0] + " : " + c(itemdata[ua + ""][4]))
                                      }
                                    })

                                  }
                                })

                              }, index * 2000)

                              index = index + 1

                            }

                            if (sumgive < sumget * 1.35 && gett.length > 0) {
                              var i = new discord.MessageEmbed()
                              i.setAuthor(a[3], "https://www.roblox.com/headshot-thumbnail/image?userId=" + a[2] + "&width=420&height=420&format=png")
                              i.addField("Items you will GET", give.join("\n"), true)
                              i.setTimestamp()
                              i.addField("Items you will GIVE", gett.join("\n"), true)
                                .addField("Value", `${c(sumgive)} vs ${c(sumget)}`, false)
                              i.addField("Rap", `${c(rapgive)} vs ${c(rapget)}`, false)
                                .addField("Rolimons", "https://www.rolimons.com/player/" + a[2])
                                .addField("Trade", "https://www.roblox.com/Trade/TradeWindow.aspx?TradePartnerID=" + a[2])
                                .setTitle("SNIPE")
                                .setFooter("Embedded77#1367 | https://discord.gg/qcDQ7CCS88")
                                .setURL("https://www.rolimons.com/tradead/" + a[0])
                                .setDescription(desc)
                                .setColor("#ffc0cb")

                              if (sumget <= sumgive * 2 && donotcontinue) {

                                if (sumgive >= sumget * 1.05 && sumgive >= 50000 && sumgive <= 150000) {
                                  yes = true
                                  message.channel.send(i)
                                  sent1 = sent1 + 1
                                } else if (sumgive >= sumget * 1.09 && sumgive >= 150000 && sumgive <= 200000) {
                                  yes = true
                                  message.channel.send(i)
                                } else if (sumgive >= sumget * 1.08 && sumgive >= 200000 && sumgive <= 400000) {
                                  yes = true
                                  sent1 = sent1 + 1
                                  message.channel.send(i)
                                } else if (sumgive > sumget * 1.1 && hasrare) {
                                  sent1 = sent1 + 1
                                  yes = true
                                  message.channel.send(i)
                                }

                              }
                            }
                            if (a[0] > last) {
                              last = a[0]
                            }
                          }
                        }
                      });
                      // // clog(last)
                      fs.writeFile("./json/tradesviewed.json", JSON.stringify({
                        "last": last
                      }), function() {})

                      if (yes == false) {

                        var ite = itemdata[args[1]]
                        if (ite) {
                          message.reply("Sorry cutie, but no recent snipes are available for " + ite[0])
                        }
                      }
                    })

                  } catch (e) {
                    // // clog(e)
                  }
                }

                break;
            }
          }

        })
        
        setTimeout(function() {
  var cached={}

        setInterval(function() {
 
    fetch(`https://trades.roblox.com/v1/trades/Completed?limit=10`, {
      headers: {
        "Content-Type": "application/json",
        cookie: ".ROBLOSECURITY=" + envcookie + ";",
      },
    })
    .then((res) => res.json())
    .then((data) => {
      data.data.forEach((item) => {
        var id = item.id;

        if (cached[id] == undefined) {
          cached[id] = 'sex'
          fetch(`https://trades.roblox.com/v1/trades/` + id, {
              headers: {
                "Content-Type": "application/json",
                cookie: ".ROBLOSECURITY=" + envcookie + ";",
              },
            })
            .then((res) => res.json())
            .then((da) => {
                    if(da.offers==undefined){
return;
              }
              var i = new discord.MessageEmbed();
              var sumhold = null;
              var raphold = null;
              var give = [];
              var gett = [];
              var sumget = 0;
              var rapgive = 0;
              var cont = false
              var rapget = 0;
              var hasrare = false;
              var hasrapitem = false;
              da.offers[0].userAssets.forEach((ua) => {
                sumget = sumget + itemdata[ua.assetId + ""][4];
                rapget = rapget + ua.recentAveragePrice;

                gett.push(ua.name + " : " + c(itemdata[ua.assetId + ""][4]));

                if (da.offers[0].user.name != ROBLOX_USERNAME) {
                  if (sumget + itemdata[ua.assetId + ""][4] == -1) {
                    hasrapitem = true;
                  }
                }
                if (itemdata[ua.assetId + ""][9] == 1) {
                  hasrare = true;
                }
              });
              var sumgive = 0;
              da.offers[1].userAssets.forEach((ua) => {
                give.push(ua.name + " : " + c(itemdata[ua.assetId + ""][4]));
                if (itemdata[ua.assetId + ""][9] == 1) {
                  hasrare = true;
                }

                if (da.offers[0].user.name != ROBLOX_USERNAME) {
                  if (sumget + itemdata[ua.assetId + ""][4] == -1) {
                    hasrapitem = true;
                  }
                }
                sumgive = sumgive + itemdata[ua.assetId + ""][4];
                rapgive = rapgive + ua.recentAveragePrice;
              });

              sumgive = sumgive + da.offers[1].robux;

              sumget = sumget + da.offers[0].robux;
              rapgive = rapgive + da.offers[1].robux;

              rapget = rapget + da.offers[0].robux;
              if (da.offers[0].robux > 0) {
                gett.push("Robux : " + c(da.offers[0].robux));
              }
              if (da.offers[1].robux > 0) {
                give.push("Robux : " + c(da.offers[1].robux));
              }
              var itemhold = []
              if (da.offers[0].user.name == ROBLOX_USERNAME) {
                sumhold = sumget;
                sumget = sumgive;
                sumgive = sumhold;
                raphold = rapget;
                rapget = rapgive;
                rapgive = raphold;
                itemhold = gett
                gett = give
                give = itemhold
              }
              if (cont == false) {
                // clog("You give " + sumgive + " and receive " + sumget);

                // clog("You give " + sumgive + " and receive " + sumget);
                // clog(viewed1.trades[id]);
                if (viewed1.trades[id]  == undefined) {



                  viewed1.trades[id] = "ok";
                  var ie = new discord.MessageEmbed();
                  ie.setColor(colors["completed"] || "PINK");
                  ie.setTitle("Trade Completed!");
                  ie.setAuthor(
                    item.user.name,
                    "https://www.roblox.com/headshot-thumbnail/image?userId=" +
                    item.user.id +
                    "&width=420&height=420&format=png"
                  );
                  ie.addField("Items you gave", give.join("\n"), true);
                  ie.setTimestamp();
                  ie.addField(
                    "Items received",
                    gett.join("\n"),
                    true
                  ).addField("Value", `${c(sumgive)} vs ${c(sumget)}`, false);
                  ie.addField("Rap", `${c(rapgive)} vs ${c(rapget)}`, false);

                  client.channels.cache.get(TRADE_CHANNEL).send(`<@${DISCORD_ID}>`)
                  client.channels.cache.get(TRADE_CHANNEL).send(ie);
                  
            fetch('https://www.rolimons.com/itemapi/itemdetails').then(res => res.json()).then(idatat => {

 
                                     fetch(""+(jsonconfig.sales || "https://sales.embedded77.repl.co")+"/rap").then(res=>res.json()).then(rapdata=>{
         
             
                       // clog(Object.keys(itemdata).length)
             fetch(``+(jsonconfig.sales || "https://sales.embedded77.repl.co")+`/`).then(res=>res.json()).then(projdata=>{
               if(projdata){
              itemdata = idatat.items
              rawitemdata = JSON.parse(JSON.stringify(idatat.items))
              Object.keys(custom_values).forEach(id => {
             
                rawitemdata[id][4] = custom_values[id]
                rawitemdata[id][3] = custom_values[id]
                itemdata[id][4] = custom_values[id]
                itemdata[id][3] = custom_values[id]
                // clog(custom_values[id])
              })
Object.keys(idatat.items).forEach(x=>{
//    idatat.items[x][2]=rapdata[x]
})
var idata=JSON.parse(JSON.stringify(idatat))

if(itemdata){
Object.keys(idata.items).forEach(key=>{
 if(idata.items[key][3]==-1 && idata.items[key][2]>1.3*itemdata[key][4]){
   idata.items[key][2]=itemdata[key][4]
   idata.items[key][4]=itemdata[key][4]
 }
})
}
               Object.keys(projdata).forEach(key=>{
                 if(rawitemdata[key][3]>0){
                   projdata[key]=undefined
                   //clog(itemdata[key][0])
                 }
               })
               projected=projdata
             
                           Object.keys(itemdata).forEach(id => {
             
             if(rawitemdata[id][3]==-1){
             if(projdata[id]!=undefined){
               if(projdata[id]!=true)
             {
               itemdata[id][4] = projdata[id][0]
               itemdata[id][3] = projdata[id][0]
             }else{
               itemdata[id][4]=projected_ratio*rawitemdata[id][2]
                 itemdata[id][3]=projected_ratio*rawitemdata[id][2]
             }
             if(itemdata[id][4]<1000){
               //itemdata[id][4]=1000
               //itemdata[id][3]=1000
             }
             }
             }
             
                         // clog(custom_values[id])
                       })
             
                                Object.keys(custom_values).forEach(id => {
             
                         rawitemdata[id][4] = custom_values[id]
                         rawitemdata[id][3] = custom_values[id]
                         itemdata[id][4] = custom_values[id]
                         itemdata[id][3] = custom_values[id]
                         // clog(custom_values[id])
                       })
             
                           fetch(`https://inventory.roblox.com/v1/users/${USER_ID}/assets/collectibles?limit=100`, {
                             method: "GET",
                             headers: {
                               "Content-Type": "application/json",
                               "X-CSRF-TOKEN": token,
                               cookie: ".ROBLOSECURITY=" + envcookie + ";",
                             },
                           }).then(res => res.json()).then(invdata => {
             
             var toremove={}
                             var ida = []
                             rawinv = invdata.data
                             invdata.data.forEach((x, index) => {
                               toremove[x.userAssetId]=true
                               if (DONOTTRADE[x.assetId] == undefined) {
                                 if ((keepmyrares == true && itemdata[x.assetId][9] == 1) ){
             
                                 } else {
                                   if (mineval < rawitemdata[x.assetId][4] && rawitemdata[x.assetId][4] < manualeval) {
                                     if(projected[x.assetId]!=undefined && rawitemdata[x.assetId][4]!=itemdata[x.assetId][4] ){
                                       DONOTGET[x.assetId]=true
                                       itemdata[x.assetId][4]=rawitemdata[x.assetId][2]*1
             
                                       itemdata[x.assetId][3]=rawitemdata[x.assetId][2]*1
                                     }
                                     if (Object.keys(getridoffast) == 0 || getridoffast[x.assetId]) {
                                       ida.push(invdata.data[index])
                                     }
                                   }
                                 }
                               }
                             })
                             // clog(ida)
                             inv=shuffle(ida)
                             inv = inv.slice(0,5)
            // console.log(inv.length)
                             inventorycombinations=powerSet(inv)
                           //  console.log(inventorycombinations.length+" different trade combinations found.")
                             logged_in = true
                             inventorycombinations.forEach((x,index)=>{
               if(x.length>4){
             delete inv[index]
             
             }
             })
             inventorycombinations=inventorycombinations.filter(function (el) {
               return el != null;
             })
             var combo=[]
             inventorycombinations.forEach(x=>{
               var sum=0
               x.forEach(x=>{
             sum=sum+itemdata[x.assetId][2]
               })
             combo.push({value:sum,assets:x})
             })
             inventorycombinations=combo
             var removed=0
                             trade_queue.forEach((trade,index)=>{
                               if(trade){
                               var nothave=false
                               trade[3].forEach(uaid=>{
                                 if(toremove[uaid]==undefined){
                                   nothave=true
             
                                 }
                               })
                               if(nothave){
                                 removed=removed+1
                                 delete trade_queue[index]
                               }
                               }
                             })
                             //console.log("Removed "+c(removed)+" trades with items you no longer own")
                                       trade_queue=trade_queue.filter(function (el) {
               return el != null;
             })
                           })
                          }
             })
             
             
                         })
                         })
                  if (stop_on_completed) {

                    process.exit()
                  }
                }

                if (sumgive >= sumget) {

                  if (continueeval[id] == true || sumget >= selfeval) {
                    if (
                      hasrare == false &&
                      hasrapitem == false &&
                      sumget - sumgive >= 15000
                    ) {
                      accept(id);
                    }
                  } else {
                    if (sumget == sumgive && rapgive < rapget) {
                      if (
                        hasrare == false &&
                        hasrapitem == false &&
                        sumget - sumgive >= 15000
                      ) {
                        accept(id);
                      }
                    } else {
                      if (rapgive > rapget == false && rapget > sumget * 0.81) {
                        if (
                          hasrare == false &&
                          hasrapitem == false &&
                          sumget - sumgive >= 15000
                        ) {
                          accept(id);
                        }
                      } else {
                        if (
                          sumget > selfeval == false
                        ) {

                        }
                      }
                    }
                  }
                }
              }
            });
        }
      });
    });

  },10000)
}, 60000)
setInterval(function() {
if(true==false){
 fetch(`https://trades.roblox.com/v1/trades/Outbound?sortOrder=Asc&limit=100`, {
      headers: {
        "Content-Type": "application/json",
        cookie: ".ROBLOSECURITY=" + envcookie + ";",
      },
    })
    .then((res) => res.json())
    .then((data) => {
      data.data.forEach((item) => {
        var id = item.id;

        if (viewed1.trades[id] == undefined) {
          fetch(`https://trades.roblox.com/v1/trades/` + id, {
              headers: {
                "Content-Type": "application/json",
                cookie: ".ROBLOSECURITY=" + envcookie + ";",
              },
            })
            .then((res) => res.json())
            .then((da) => {
                    if(da.offers==undefined){
return;
              }
              var i = new discord.MessageEmbed();
              var sumhold = null;
              var raphold = null;
              var give = [];
              var gett = [];
              var sumget = 0;
              var rapgive = 0;
              var cont = false
              var rapget = 0;
              var hasrare = false;
              var hasrapitem = false;
              da.offers[0].userAssets.forEach((ua) => {
                sumget = sumget + itemdata[ua.assetId + ""][4];
                rapget = rapget + ua.recentAveragePrice;
                if (prefer[ua.assetId]) {
                  cont = true
                }
                gett.push(ua.name + " : " + c(itemdata[ua.assetId + ""][4]));
                if (whitelist[ua.assetId + ""]) {
                  continueeval[id] = true;
                }

                if (da.offers[0].user.name != ROBLOX_USERNAME) {
                  if (sumget + itemdata[ua.assetId + ""][4] == -1) {
                    hasrapitem = true;
                  }
                }
                if (itemdata[ua.assetId + ""][9] == 1) {
                  hasrare = true;
                }
              });
              var sumgive = 0;
              da.offers[1].userAssets.forEach((ua) => {
                give.push(ua.name + " : " + c(itemdata[ua.assetId + ""][4]));
                if (itemdata[ua.assetId + ""][9] == 1) {
                  hasrare = true;
                }

                if (da.offers[0].user.name != ROBLOX_USERNAME) {
                  if (sumget + itemdata[ua.assetId + ""][4] == -1) {
                    hasrapitem = true;
                  }
                }
                sumgive = sumgive + itemdata[ua.assetId + ""][4];
                rapgive = rapgive + ua.recentAveragePrice;
              });

              sumgive = sumgive + da.offers[1].robux;

              sumget = sumget + da.offers[0].robux;
              rapgive = rapgive + da.offers[1].robux;

              rapget = rapget + da.offers[0].robux;
              if (da.offers[0].robux > 0) {
                gett.push("Robux : " + c(da.offers[0].robux));
              }
              if (da.offers[1].robux > 0) {
                give.push("Robux : " + c(da.offers[1].robux));
              }
              if (da.offers[0].user.name == ROBLOX_USERNAME) {
                sumhold = sumget;
                sumget = sumgive;
                sumgive = sumhold;
                raphold = rapget;
                rapget = rapgive;
                rapgive = raphold;
                itemhold = gett
                gett = give
                give = itemhold
              }
              if (cont == false) {
                // clog("You give " + sumgive + " and receive " + sumget);

                i.setColor(colors["declined"] || "RED");
                i.setTitle("Outbound Declined");
                i.setAuthor(
                  item.user.name,
                  "https://www.roblox.com/headshot-thumbnail/image?userId=" +
                  item.user.id +
                  "&width=420&height=420&format=png"
                );
                i.addField("Items you would have given", give.join("\n"), true);
                i.setTimestamp();
                i.addField(
                  "Items you would have received",
                  gett.join("\n"),
                  true
                ).addField("Value", `${c(sumgive)} vs ${c(sumget)}`, false);
                i.addField("Rap", `${c(rapgive)} vs ${c(rapget)}`, false);
                // clog("You give " + sumgive + " and receive " + sumget);
                // clog(viewed1.trades[id]);
                if (viewed1.trades[id] == undefined) {
                  viewed1.trades[id] = "ok";
                  var ie = new discord.MessageEmbed();

                  i.setColor(colors["outbound"] || "YELLOW");
                  ie.setTitle("Trade Outbound");
                  ie.setAuthor(
                    item.user.name,
                    "https://www.roblox.com/headshot-thumbnail/image?userId=" +
                    item.user.id +
                    "&width=420&height=420&format=png"
                  );
                  ie.addField("Items you will give", give.join("\n"), true);
                  ie.setTimestamp();
                  ie.addField(
                    "Items you will receive",
                    gett.join("\n"),
                    true
                  ).addField("Value", `${c(sumgive)} vs ${c(sumget)}`, false);
                  ie.addField("Rap", `${c(rapgive)} vs ${c(rapget)}`, false)
                    .addField("ID", id)
                  client.channels.cache.get(TRADE_CHANNEL).send(ie);
                }

                if (sumgive > sumget && dontdecline == false) {

                  if (continueeval[id] == true || sumget >= selfeval) {
                    if (
                      hasrare == false &&
                      hasrapitem == false &&
                      sumget - sumgive >= 15000
                    ) {}
                  } else {
                    if (sumget == sumgive && rapgive < rapget) {
                      if (
                        hasrare == false &&
                        hasrapitem == false &&
                        sumget - sumgive >= 15000
                      ) {}
                    } else {
                      if (rapgive > rapget == false && rapget > sumget * 0.81) {
                        if (
                          hasrare == false &&
                          hasrapitem == false &&
                          sumget - sumgive >= 15000
                        ) {}
                      } else {
                        if (
                          sumget > selfeval == false
                        ) {
         
                        }
                      }
                    }
                  }
                }
              }
            });
        }
    })
    })
}
},10000)
 setInterval(function(){
  // console.log
    fs.writeFileSync("./json/queue_save.json", JSON.stringify({
    "active_queue": queuecache,
    "finsihed_queue": finished_queue
  }), function() {})
    fs.writeFileSync("./json/queue.json", JSON.stringify({
    "active_queue": trade_queue,
    "finsihed_queue": finished_queue
  }), function() {})

    fs.writeFileSync("./json/snipes.json", JSON.stringify(snipes), function() {})
    fs.writeFileSync("./json/declined.json", JSON.stringify(declinedj), function() {})
    fs.writeFileSync("./json/cached.json", JSON.stringify({
      "cached": cached
    }), function() {});
    fs.writeFileSync("./json/tradesviewed1.json", JSON.stringify(viewed1), function() {})
    fs.writeFileSync("./json/cached.json", JSON.stringify({
      "cached": cached
    }), function() {});
    fs.writeFileSync("./json/tradesviewed1.json", JSON.stringify(viewed1), function() {});
},10000)
      }
    })
  }else{
   // console.log("UNAUTHORIZED: use $whitelist to run the bot if you have purchased")
    process.exit()
  }
})


harassed = {}

/*
function empty_queue() {
  if(token){
  var trade = trade_queue.shift()
  if (finished_queue) {
    finished_queue.push(trade)
  }
  var base_url = proxies[Math.floor(Math.random() * proxies.length)];
   // clog("EMPTYING QUEUE")
  if (trade && harassed[trade[1] + ""] == undefined) {
    if(open_desktop_app &&process.env.REPLIT_DB_URL==undefined){
   // win.webContents.send("fromMain", {"remove":true})
    }
    clog(chalk.yellow("Attempting to send to "+(trade[6]||"a mass sent user")+" ("+trade[1]+")"))
  //  //fs.appendFileSync('.log',"\n"+moment().format("MM ddd, YYYY hh:mm:ss a")+" => "+"Attempting to send to "+(trade[6]||"a mass sent user")+" ("+trade[1]+")");
    fetch(base_url+`/v1/users/${trade[1]}/can-trade-with`, {
      headers: {
        'Content-Type': 'application/json',
        "X-CSRF-TOKEN": token,
        "cookie": ".ROBLOSECURITY=" + envcookie + ";"
      }
    }).then(res => res.json().catch(err=>{
      if(err){
        setTimeout(function(){
        empty_queue()
        },4000)
      }
    })).then(cantrade => {
      setTimeout(function() {
        queuecache.push(trade)
        if (cantrade && cantrade.canTrade) {
          var z = trade[4]
          fetch(base_url+`/v1/trades/send`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              "X-CSRF-TOKEN": token,
              "cookie": ".ROBLOSECURITY=" + envcookie + ";"
            },
            body: JSON.stringify({
              "offers": [{
                "userId": parseInt(trade[1]),
                "userAssetIds": trade[2],
                "robux": 0
              }, {
                "userId": USER_ID,
                "userAssetIds": trade[3],
                "robux": trade[5] || 0
              }]
            })

          }).then(res => res.json().catch(err=>{
            if(err){
              setTimeout(function(){
              empty_queue()
              },4000)
            }
          })).then(m => {
             clog(m)
            // // // clog(a)
            harassed[trade[1] + ""] = ""
            var d = ""
            var gamt = 0
            gotuaids[trade[2][0]] = true
            var rapgive = 0

            var rapget = 0
            shuffle(trade[0]).forEach(meowm => {
              d = d + itemdata[meowm + ""][0] + " : " + (itemdata[meowm + ""][4] + "\n").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              gamt = gamt + itemdata[meowm + ""][4]
              rapgive = rapgive + itemdata[meowm + ""][2]
            })
            //  // clog(z)
if(m.errors){
      clog(chalk.red("Trade with "+(trade[6]||"a mass sent user")+" ("+trade[1]+")"+" failed"))
      //fs.appendFileSync('.log',"\n"+moment().format("MM ddd, YYYY hh:mm:ss a")+" => "+"Trade with "+(trade[6]||"a mass sent user")+" ("+trade[1]+")"+" failed because "+JSON.stringify(m));
}else{
  outbound.push({"trade":trade,id:m.id})
                  fetch("https://api.roblox.com//users/" + trade[1])
                  .then((res) => res.json().catch(err=>{
                    if(err){
                      setTimeout(function(){
                      empty_queue()
                      },4000)
                    }
                  }))
                  .then((u) => {
                      var em=new discord.MessageEmbed()
                           .setFooter("Embedded77#1367 | https://discord.gg/qcDQ7CCS88")
                           .setDescription(JSON.stringify(m))
.setTitle("Trade Successfully Sent")
          .setColor("#ffc0cb")
          .setAuthor(u.Username,"https://www.roblox.com/headshot-thumbnail/image?userId=" + trade[1] + "&width=420&height=420&format=png")
                  client.channels.cache.get(NOTIF_CHANNEL).send(em)
                  }).catch(err=>{
                    if(err){
                      setTimeout(function(){
                      empty_queue()
                      },4000)
                    }
                  })
        clog(chalk.magentaBright("Trade with "+(trade[6]||"a mass sent user")+" ("+trade[1]+")"+" was sent successfully"))
          //fs.appendFileSync('.log',"\n"+moment().format("MM ddd, YYYY hh:mm:ss a")+" => "+"Trade with "+(trade[6]||"a mass sent user")+" ("+trade[1]+")"+" was sent successfully");
              fs.writeFileSync("./json/outbound.json", JSON.stringify({
    "outbound":outbound
  }), function() {})
}
            setTimeout(function() {
              nexttimeout = cantsendinterval
              if (m&&m.errors && m.errors[0] && m.errors[0].message == "TooManyRequests") {
                nexttimeout = 30000
              }

              if (m&&m.errors && m.errors[0] && m.errors[0].message == "You are sending too many trade requests. Please slow down and try again later.") {
                nexttimeout = 30000
              }
              if(rewrite_to_end_if_ratelimited && nexttimeout==30000){
                trade_queue.push(trade)
              }
              setTimeout(function() {
                empty_queue()
              }, nexttimeout)
            }, sendinterval)

          }).catch(err=>{
            setTimeout(function() {
              empty_queue()
            }, 1000)
          })
        } else {
                clog(chalk.red(""+(trade[6]||"a mass sent user")+" ("+trade[1]+")'s privacy settings are too strict "+JSON.stringify((cantrade || {"errors":["TooManyRequests"]}).errors)))
          nexttimeout = 1000
          if (cantrade && cantrade.errors && cantrade.errors[0] && cantrade.errors[0].message == "TooManyRequests") {
            nexttimeout = 30000
          }

          setTimeout(function() {
            empty_queue()
          }, nexttimeout)
        }
      }, 1000)
    }).catch(err=>{
      if(err){
        setTimeout(function(){
        empty_queue()
        },4000)
      }
    })

  } else {
    if(trade && harassed[trade[1] + ""] != undefined){
            clog(chalk.red(""+(trade[6]||"a mass sent user")+" ("+trade[1]+")"+" has already been sent to recently"))
              //fs.appendFileSync('.log',"\n"+moment().format("MM ddd, YYYY hh:mm:ss a")+" => "+"Trade with "+(trade[6]||"a mass sent user")+" ("+trade[1]+")"+" has already been sent to recently");
    }
    setTimeout(function() {
      empty_queue()
    }, 1000)
  }

  }else{
    empty_queue()
  }
}
*/
var times=0
function empty_queue() {
  times=times+1
  if(times>40){
    return;
  }
  if(token){
  var trade = trade_queue.shift()
  if (finished_queue) {
    finished_queue.push(trade)
  }
  var base_url = proxies[Math.floor(Math.random() * proxies.length)];
   // clog("EMPTYING QUEUE")
  if (trade && harassed[trade[1] + ""] == undefined) {
    if(open_desktop_app &&process.env.REPLIT_DB_URL==undefined){
   // win.webContents.send("fromMain", {"remove":true})
    }
    clog(chalk.yellow("Attempting to send to "+(trade[6]||"a mass sent user")+" ("+trade[1]+")"))
    //fs.appendFileSync('.log',"\n"+moment().format("MM ddd, YYYY hh:mm:ss a")+" => "+"Attempting to send to "+(trade[6]||"a mass sent user")+" ("+trade[1]+")");
    if(trade[6]){
    fetch(base_url+`/v1/users/${trade[1]}/can-trade-with`, {
      headers: {
        'Content-Type': 'application/json',
        "X-CSRF-TOKEN": token,
        "cookie": ".ROBLOSECURITY=" + envcookie + ";"
      }
    }).then(res => res.json().catch(err=>{setTimeout(function(){
      if(err){
      
      empty_queue(


      )
      }
    
    },2000)})).then(cantrade => {
      setTimeout(function() {
        queuecache.push(trade)
        if (cantrade && cantrade.canTrade) {
          var z = trade[4]
          fetch(base_url+`/v1/trades/send`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              "X-CSRF-TOKEN": token,
              "cookie": ".ROBLOSECURITY=" + envcookie + ";"
            },
            body: JSON.stringify({
              "offers": [{
                "userId": parseInt(trade[1]),
                "userAssetIds": trade[2],
                "robux": 0
              }, {
                "userId": USER_ID,
                "userAssetIds": trade[3],
                "robux": trade[5] || 0
              }]
            })

          }).then(res => res.json().catch(err=>{setTimeout(function(){  if(err){
      
            empty_queue(
      
      
            )
            }},2000)})).then(m => {
             clog(m)
            // // // clog(a)
            harassed[trade[1] + ""] = ""
            var d = ""
            var gamt = 0
            gotuaids[trade[2][0]] = true
            var rapgive = 0

            var rapget = 0
            shuffle(trade[0]).forEach(meowm => {
              d = d + itemdata[meowm + ""][0] + " : " + (itemdata[meowm + ""][4] + "\n").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              gamt = gamt + itemdata[meowm + ""][4]
              rapgive = rapgive + itemdata[meowm + ""][2]
            })
            //  // clog(z)
if(m.errors){
      clog(chalk.red("Trade with "+(trade[6]||"a mass sent user")+" ("+trade[1]+")"+" failed"))
      //fs.appendFileSync('.log',"\n"+moment().format("MM ddd, YYYY hh:mm:ss a")+" => "+"Trade with "+(trade[6]||"a mass sent user")+" ("+trade[1]+")"+" failed because "+m.errors[0].message);
}else{
  outbound.push({"trade":trade,id:m.id})
                  fetch("https://api.roblox.com//users/" + trade[1])
                  .then((res) => res.json().catch(err=>{  if(err){
      
                    empty_queue(
              
              
                    )
                    }}))
                  .then((u) => {
                      var em=new discord.MessageEmbed()
                           .setFooter("Embedded77#1367 | https://discord.gg/qcDQ7CCS88")
                           .setDescription(JSON.stringify(m))
.setTitle("Trade Successfully Sent")
          .setColor("#ffc0cb")
          .setAuthor(u.Username,"https://www.roblox.com/headshot-thumbnail/image?userId=" + trade[1] + "&width=420&height=420&format=png")
                  client.channels.cache.get(NOTIF_CHANNEL).send(em)
                  })
        clog(chalk.magentaBright("Trade with "+(trade[6]||"a mass sent user")+" ("+trade[1]+")"+" was sent successfully"))
          //fs.appendFileSync('.log',"\n"+moment().format("MM ddd, YYYY hh:mm:ss a")+" => "+"Trade with "+(trade[6]||"a mass sent user")+" ("+trade[1]+")"+" was sent successfully");
              fs.writeFileSync("./json/outbound.json", JSON.stringify({
    "outbound":outbound
  }), function() {})
}
            setTimeout(function() {
              nexttimeout = cantsendinterval
              if (m&&m.errors && m.errors[0] && m.errors[0].message == "TooManyRequests") {
                nexttimeout = 30000
              }

              if (m&&m.errors && m.errors[0] && m.errors[0].message == "You are sending too many trade requests. Please slow down and try again later.") {
                nexttimeout = 30000
              }
              if(rewrite_to_end_if_ratelimited && nexttimeout==30000){
                trade_queue.push(trade)
              }
              setTimeout(function() {
                empty_queue()
              }, nexttimeout)
            }, sendinterval)

          }).catch(err=>{
            setTimeout(function() {
              if(err){
      
                empty_queue(
          
          
                )
                }
            }, 1000)
          })
        } else {
                clog(chalk.red(""+(trade[6]||"a mass sent user")+" ("+trade[1]+")'s privacy settings are too strict"))
          nexttimeout = 1000
          if (cantrade && cantrade.errors && cantrade.errors[0] && cantrade.errors[0].message == "TooManyRequests") {
            nexttimeout = 30000
          }

          setTimeout(function() {
            empty_queue()
          }, nexttimeout)
        }
      }, 1000)
    }).catch(err=>{
      setTimeout(function(){
        if(err){
      
          empty_queue(
    
    
          )
          }
      },5000)
    })
  }else{
    
    var z = trade[4]
    fetch(base_url+`/v1/trades/send`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "X-CSRF-TOKEN": token,
        "cookie": ".ROBLOSECURITY=" + envcookie + ";"
      },
      body: JSON.stringify({
        "offers": [{
          "userId": parseInt(trade[1]),
          "userAssetIds": trade[2],
          "robux": 0
        }, {
          "userId": USER_ID,
          "userAssetIds": trade[3],
          "robux": trade[5] || 0
        }]
      })

    }).then(res => res.json().catch(err=>{setTimeout(function(){  if(err){

      empty_queue(


      )
      }},2000)})).then(m => {
       clog(m)
      // // // clog(a)
      harassed[trade[1] + ""] = ""
      var d = ""
      var gamt = 0
      gotuaids[trade[2][0]] = true
      var rapgive = 0

      var rapget = 0
      shuffle(trade[0]).forEach(meowm => {
        d = d + itemdata[meowm + ""][0] + " : " + (itemdata[meowm + ""][4] + "\n").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        gamt = gamt + itemdata[meowm + ""][4]
        rapgive = rapgive + itemdata[meowm + ""][2]
      })
      //  // clog(z)
if(m.errors){
clog(chalk.red("Trade with "+(trade[6]||"a mass sent user")+" ("+trade[1]+")"+" failed"))
//fs.appendFileSync('.log',"\n"+moment().format("MM ddd, YYYY hh:mm:ss a")+" => "+"Trade with "+(trade[6]||"a mass sent user")+" ("+trade[1]+")"+" failed because "+m.errors[0].message);
}else{
outbound.push({"trade":trade,id:m.id})
            fetch("https://api.roblox.com//users/" + trade[1])
            .then((res) => res.json().catch(err=>{  if(err){

              empty_queue(
        
        
              )
              }}))
            .then((u) => {
                var em=new discord.MessageEmbed()
                     .setFooter("Embedded77#1367 | https://discord.gg/qcDQ7CCS88")
                     .setDescription(JSON.stringify(m))
.setTitle("Trade Successfully Sent")
    .setColor("#ffc0cb")
    .setAuthor(u.Username,"https://www.roblox.com/headshot-thumbnail/image?userId=" + trade[1] + "&width=420&height=420&format=png")
            client.channels.cache.get(NOTIF_CHANNEL).send(em)
            })
  clog(chalk.magentaBright("Trade with "+(trade[6]||"a mass sent user")+" ("+trade[1]+")"+" was sent successfully"))
    //fs.appendFileSync('.log',"\n"+moment().format("MM ddd, YYYY hh:mm:ss a")+" => "+"Trade with "+(trade[6]||"a mass sent user")+" ("+trade[1]+")"+" was sent successfully");
        fs.writeFileSync("./json/outbound.json", JSON.stringify({
"outbound":outbound
}), function() {})
}
      setTimeout(function() {
        nexttimeout = cantsendinterval
        if (m&&m.errors && m.errors[0] && m.errors[0].message == "TooManyRequests") {
          nexttimeout = 30000
        }

        if (m&&m.errors && m.errors[0] && m.errors[0].message == "You are sending too many trade requests. Please slow down and try again later.") {
          nexttimeout = 30000
        }
        if(rewrite_to_end_if_ratelimited && nexttimeout==30000){
          trade_queue.push(trade)
        }
        setTimeout(function() {
          empty_queue()
        }, nexttimeout)
      }, sendinterval)

    }).catch(err=>{
      setTimeout(function() {
        if(err){

          empty_queue(
    
    
          )
          }
      }, 1000)
    })
  }
  } else {
    if(trade && harassed[trade[1] + ""] != undefined){
            clog(chalk.red(""+(trade[6]||"a mass sent user")+" ("+trade[1]+")"+" has already been sent to recently"))
              //fs.appendFileSync('.log',"\n"+moment().format("MM ddd, YYYY hh:mm:ss a")+" => "+"Trade with "+(trade[6]||"a mass sent user")+" ("+trade[1]+")"+" has already been sent to recently");
    }
    setTimeout(function() {
      empty_queue()
    }, 5000)
  }

  }else{
    setTimeout(function(){
    empty_queue()
    },4000)
  }
}
setTimeout(function() {
  if (testmode == false) {
    empty_queue()
  }
}, 10000)
setInterval(function(){
if(times>40){
  times=0
  empty_queue()
}
},10000)
setInterval(function() {
  harassed = {}
}, reset_already_sent_interval)
}
if((upgrading_ratio>1  || rap_diff_ratio>0.1|| upgrading_max_ratio >1.05 || ratio <1 || Object.keys(custom_values)>0) && security_check==true){
  console.log(chalk.red(`YOUR CONFIG IS VERY DANGEROUS, ARE YOU SURE YOU WISH TO CONTINUE`))
  console.log(`(note: if you would no longer like to be warned, set security_check to false in the config)`)
  console.log(`Upgrading ratio: ${upgrading_ratio}\nUpgrading max ratio: ${upgrading_max_ratio}\nRatio: ${ratio}\nMax Ratio: ${maxratio}\nrap_diff_ratio: ${rap_diff_ratio}`)
  fetch('https://www.rolimons.com/itemapi/itemdetails').then(res => res.json()).then(idatat => {
  console.log(chalk.yellowBright(`Here are your custom values: `))
  Object.keys(custom_values).forEach(x=>{
    console.log(idatat.items[x+""][0]+" : "+c(custom_values[x]))
  })
  var RL=require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  RL.question(chalk.red("Are you sure you wish to continue?[y/n]"), response => {
    if(response=="y" || response=="yes" || response=="Y" || response=="Yes"){
      main()
    }else{
      process.exit()
    }
    RL.close();
  });
  })
  }else{
    main()
  }
