import express from "express";
const app = express();
app.use(express.urlencoded({ extended: false }));

app.post("/voice", (req, res) => {
  const twiml = `
    <Response>
      <Connect>
        <Stream url="wss://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview">
          <Parameter name="Authorization" value="Bearer sk-votre_cle_openai"/>
        </Stream>
      </Connect>
    </Response>
  `;
  res.type("text/xml");
  res.send(twiml);
});

app.get("/", (req, res) => res.send("Twilio ↔ OpenAI proxy en ligne 🚀"));
app.listen(3000);
