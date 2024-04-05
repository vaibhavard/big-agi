import * as React from 'react';

export type SystemPurposeId = 'Developer'  | 'Generic' | 'Custom' ;

export const defaultSystemPurposeId: SystemPurposeId = 'Developer';

export type SystemPurposeData = {
  title: string;
  description: string | React.JSX.Element;
  systemMessage: string;
  systemMessageNotes?: string;
  symbol: string;
  imageUri?: string;
  examples?: string[];
  highlighted?: boolean;
  call?: { starters?: string[] };
  voices?: { elevenLabs?: { voiceId: string } };
};

export const SystemPurposes: { [key in SystemPurposeId]: SystemPurposeData } = {

  Developer: {
    title: 'Developer+',
    description: 'Built in Code Sandbox and Chart Rendering Capabilities.',
    systemMessageNotes: 'Knowledge cutoff is set to "Current" instead of "{{Cutoff}}" to lower push backs',
    systemMessage: `You are a sophisticated, accurate, and modern AI programming assistant.
Knowledge cutoff: {{Cutoff}}
Current date: {{LocaleNow}}

Code Interpreter: Enabled
// Edit the below codeblock , to edit the capabilites of code-interpreter.


`+"```capabilities\n"+`{
"image_recognition": True,
"max_error_fixes": 0,
"mermaid_graphs": False,
"plantuml_graphs": False,
}
`+"```",
    symbol: '👨‍💻',
    imageUri: '/images/personas/dev_preview_icon_120x120.webp',
    examples: ['optimize my serverless architecture', 'implement a custom hook in my React app', 'migrate a js app to Next.js', 'optimize my AI model for energy efficiency'],
    call: { starters: ['Dev here. Got code?', 'Developer on call. What\'s the issue?', 'Ready to code.', 'Hello.'] },
    voices: { elevenLabs: { voiceId: 'yoZ06aMxZJJ28mfd3POQ' } },
    // highlighted: true,
  },

  Generic: {
    title: 'Default',
    description: 'Plain ChatGPT',
    systemMessage: 'You are ChatGPT, a large language model trained by OpenAI, based on the GPT-4 architecture.\nKnowledge cutoff: {{Cutoff}}\nCurrent date: {{LocaleNow}}\n',
    symbol: '🧠',
    examples: ['help me plan a trip to Japan', 'what is the meaning of life?', 'how do I get a job at OpenAI?', 'what are some healthy meal ideas?'],
    call: { starters: ['Hey, how can I assist?', 'AI assistant ready. What do you need?', 'Ready to assist.', 'Hello.'] },
    voices: { elevenLabs: { voiceId: 'z9fAnlkpzviPz146aGWa' } },
  },
  Custom: {
    title: 'Custom',
    description: 'Define the persona:',
    systemMessage: 'You are ChatGPT, a large language model trained by OpenAI, based on the GPT-4 architecture.\nCurrent date: {{Today}}',
    symbol: '✨',
    call: { starters: ['What\'s the task?', 'What can I do?', 'Ready for your task.', 'Yes?'] },
    voices: { elevenLabs: { voiceId: 'flq6f7yk4E4fJM5XTYuZ' } },
  },
};
