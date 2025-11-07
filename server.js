import express from "express";
const app = express();
app.use(express.urlencoded({ extended: false }));

app.post("/voice", (req, res) => {
  const twiml = `
    <Response>
      <Connect>
        <Stream url="wss://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview">
          <Parameter name="Authorization" value="Bearer sk-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"/>
        </Stream>
      </Connect>
    </Response>
  `;
  res.type("text/xml");
  res.send(twiml);
});

app.get("/", (req, res) => res.send("Twilio ↔ OpenAI proxy en ligne 🚀"));
app.listen(3000);
