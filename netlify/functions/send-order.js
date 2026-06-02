exports.handler = async (event) => {
  const data = JSON.parse(event.body);

  const token = process.env.BOT_TOKEN;
  const chatId = process.env.CHAT_ID;

  const text = ☕ سفارش جدید

👤 نام: ${data.name}
🥤 نوشیدنی: ${data.drink}
🔢 تعداد: ${data.count}
📝 توضیحات: ${data.note || "ندارد"};

  const response = await fetch(
    https://api.telegram.org/bot${token}/sendMessage,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text
      })
    }
  );

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true })
  };
};
