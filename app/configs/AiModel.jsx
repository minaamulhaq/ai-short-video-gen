// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
  GoogleGenAI,
} from '@google/genai';


const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GEMNI_API_KEY,
});
const config = {
  responseMimeType: 'application/json',
};
const model = 'gemini-2.0-flash';
const contents = [
  {
    role: 'user',
    parts: [
      {
        text: `Write two different 30-second video scripts on the topic "Kids Story".

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
`,
      },
    ],
  },
  {
    role: 'model',
    parts: [
      {
        text: `The user wants two 30-second video scripts for kids' stories.
Each script should be a short, simple storyline, like a fable.
The final output must be in JSON format, following the provided example.
I need to avoid scene descriptions, animation instructions, etc.

Story 1 idea: A little star who is afraid of the dark.
Story 2 idea: A grumpy cloud who learns to smile.

Let's draft Story 1:
Once, a tiny star named Twinkle was afraid of the dark night sky. All the other stars shone brightly, but Twinkle hid. One night, a lost firefly asked Twinkle for help to find its way home. Twinkle gathered all its courage and shone its brightest. The firefly found its way, and Twinkle realized being brave and helping others felt wonderful. Kids! Even small acts of courage can make a big difference.

Let's draft Story 2:
Barnaby the Bear loved honey, but he never wanted to share. One sunny morning, he found the biggest pot of honey ever! He tried to eat it all himself but got a tummy ache. His friend, Rosie Rabbit, offered him some berries to feel better. Barnaby shared his honey with Rosie, and it tasted even sweeter with a friend. Kids! Sharing makes everything better and sweeter.

Reviewing the drafts:
- Are they short and simple? Yes.
- Are they like fables for kids? Yes, they have a moral.
- Do they fit the 30-second timeframe? Likely, they are concise.
- Do they avoid forbidden elements? Yes.

Now, I will format them into the JSON structure.`,
      },
      {
        text: `\`\`\`json
{
  "script": [
    {
      "content": "Leo the lion cub was scared of his own roar. It sounded so loud! One day, his little sister got stuck in a bush. Leo took a deep breath and let out the biggest roar he could. The roar scared away a sneaky snake, and his sister was safe. Leo learned his roar wasn't scary, it was strong! Kids! Your unique qualities can be your greatest strengths."
    },
    {
      "content": "Pippa the Penguin loved to collect shiny pebbles but never tidied up. Her igloo was a mess! One morning, she couldn't find her favorite sparkly blue pebble. She searched and searched, tripping over piles. Finally, after cleaning her whole igloo, she found it under a pile of forgotten shells. Pippa learned keeping things tidy helps you find what you love. Kids! A tidy space makes for a happy place!"
    }
  ]
}
\`\`\``,
      },
    ],
  },
  {
    role: 'user',
    parts: [
      {
        text: `${topic}`,
      },
    ],
  },
];

const response = await ai.models.generateContentStream({
  model,
  config,
  contents,
});


