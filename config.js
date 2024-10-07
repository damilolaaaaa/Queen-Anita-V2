//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348036399544";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0lQUGtLZEJkZHZVQjd4cVk4QXNVZDJscFlGYWpsTC9BY2VGSHg5UVJrdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMDJRZ2dPS1gvNGJmdXlvUlVtOU1reENGZTBZQThTbVZkMjRHRjQzeXJDQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTHhYQ3BZOHVJVXlmOHFlZWtkN3E3TUhTM2lzdkpEcXFjQmw2MlhoWGtnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2YzEwVXdTVHlFeEgrdGFVYTkrU0Z2cndJL2ZnU3M5bE5XV0lOUTNTa2lRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdKT08rTUJBM0tveGJ0TG9WcDZ4UHZCazNNNUxpMkNoL3BNT3kxTUhOMmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFZblVnNlozNWFUOHcrOTM4bWpoNEVFdGdOWUNVNlA3S0Y0RW5OSjl1MlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEF3eFBjcmhyelV3UXpGekVCeGl3THFyOU11cnEyaHB0SjNrbS8rMDZFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1ZYU3AyOVlBajJsdmhjenAwNUhmK0hscTNWaUYwU3Nqa3RBR1RyZ3YzOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iks1MUZrOS9JOUNlQmE2TXJ5OW1zdlVqdm9kdm9GTysrb05lVkVWcnNwSFpaeHJjV292a3c0VVllSmZUWDVJZDZlVi81VE02NVpoYVUxaUtyU3hPVWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDEsImFkdlNlY3JldEtleSI6IkdtdlBGRm5xL2NwaVR0c1FoeDdhWlpZOFlxT3VYYXBoeGlRY2NKeS80TkU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ikc2RVdLREJCUXBpUEtraVBYNW0yREEiLCJwaG9uZUlkIjoiNDMyM2U3MTEtNTZiNi00OWIxLTk1OTctODBkOWNmYTY4OTNlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktaVExYUFc4aDlDbWZZc1FqcXduT01acTdHdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpOFQ0RjdKeUJCdkNqendhS2drNDRaeC9GbkU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMUtSMjROV0YiLCJtZSI6eyJpZCI6IjIzNDgwMzYzOTk1NDQ6MThAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiT0xVRklTQVlPIE9MT1lFREUgRElWSU5FIFNPTkdTIE1JTklTVFJZIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNell6KzhERU55SWtiZ0dHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJTcUlrQUxsTHBKRGtqTjVWNzgzaGppSnhsS093OVFvTjdEY3pQVXp2emprPSIsImFjY291bnRTaWduYXR1cmUiOiJRenlFdU9uRFNoRnRja1Qrb25hTTVXbWJSWjZRaVpwVld5Q0lkNmxyM0FoUTNER3JRc2FiVUNzdG5jMFk2a1B1M2tkWkJiVnIweVZsV1RiVUo2WlZEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRFNnOHpvcGhwTDRXYWxQNWlzNGMxVTlMKy83aFZQQllSNktVeEQ5dDdmaFVNTGVjbDJDazM0YU1VY1c0WnZSQVJ3YTlWYmloaWNwU3k3Q0ZrZjJYaUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDM2Mzk5NTQ0OjE4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVxaUpBQzVTNlNRNUl6ZVZlL040WTRpY1pTanNQVUtEZXczTXoxTTc4NDUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjgzMzI5MDcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUFZsIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
