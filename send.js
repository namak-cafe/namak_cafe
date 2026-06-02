export default async function handler(req, res) { const { name, drink, count, note } = req.body;
const token = process.env.BOT_TOKEN; const chatId = process.env.CHAT_ID;
const text =  ☕ سفارش جدید
👤 نام: ${name} 🥤 نوشیدنی: ${drink} 🔢 تعداد: ${count} 📝 توضیحات: ${note || "ندارد"} ;
await fetch(https://api.telegram.org/bot${token}/sendMessage, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ chat_id: chatId, text: text }) });
res.status(200).json({ ok: true }); }
