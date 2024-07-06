import axios from "axios";

export const dynamic = 'force-dynamic' 

export async function POST(request: Request) {
    const res = await request.json()
    const content:string  = res.content;
    if(!content) {
        throw "No  content"
    }
    console.log('working',  content)
    const webhookUrl = process.env.WEBHOOK_URL;

    if(!webhookUrl) {
        throw "No  webhookUrl"
    }
    await axios.post(webhookUrl, {
      content
    });

    return Response.json({ success:true   })
}