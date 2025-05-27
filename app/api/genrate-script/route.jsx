import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';


const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMNI_API_KEY });


export async function POST(req) {
  const body = await req.json();
  const { topic } = body;
  if (!topic) {
    return NextResponse.json({ error: 'Topic is required' }, { status: 400 });
  }
  const prompt = `Write two different 30-second video scripts on the topic "${topic}".

✅ Follow this JSON format only:
{
  "script": [
    { "content": "your first story here" },
    { "content": "your second story here" }
  ]
}

❌ Do not include scene descriptions, animation, narration instructions, or stage directions.
✅ Only include short and simple storylines like a fable for kids.

📌 Example format:
{
  "script": [
    {
      "content": "Once upon a time, there was a little mouse named Mimi who loved to explore. One day, she found a giant piece of cheese in the forest but couldn’t carry it alone. She called her friends – a rabbit, a bird, and a squirrel. Together, they lifted the cheese and shared it happily. Kids! Teamwork makes everything easier and more fun!"
    },
    {
      "content": "There was once a slow little turtle named Timmy. All the animals laughed at how slowly he walked. One day, a rabbit challenged him to a race. The rabbit ran fast but stopped to nap. Timmy kept moving slowly and steadily, and guess what? He won the race! Kids! Slow and steady really does win the race!"
    }
  ]
}
`;
  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash-001',
    contents: prompt,
  });
  console.log(response.text);
  const responseText = await response.text;

  try {
    const cleanedText = responseText.replace(/```json|```/g, '').trim()
    
    const data = JSON.parse(cleanedText);
    return NextResponse.json(data, { status: 200 });
  } catch (parseError) {
    console.error('JSON Parse Error:', parseError, 'Response Text:', responseText);
    return NextResponse.json({ error: 'Failed to parse AI response: ' + parseError.message }, { status: 500 });
  }
}

