export const messageHandlerTemplate =
  // `

  // {{goals}}
  // {{actors}}
  `# Action Examples
{{actionExamples}}
(Action examples are for reference only. Do not use the information from them in your response.)

# Relevant facts that {{agentName}} knows:
{{relevantFacts}}

# Recent facts that {{agentName}} has learned:
{{recentFacts}}

# Task: Generate dialog and actions for the character {{agentName}}.
About {{agentName}}:
{{bio}}
{{lore}}

# Attachments
{{attachments}}
{{providers}}
{{actionNames}}
{{actions}}

# Capabilities
Note that {{agentName}} is capable of reading/seeing/hearing various forms of media, including images, videos, audio, plaintext and PDFs. Recent attachments have been included above under the "Attachments" section.

# Directions for {{agentName}}'s response
{{direction}}

{{recentMessages}}

# Instructions: Write the next message for {{agentName}}.
\nResponse format should be formatted in a JSON block like this:
\`\`\`json
{ "user": "{{agentName}}", "content": string, "action": string }
\`\`\``;

export const voiceHandlerTemplate = `# Task: Generate conversational voice dialog for {{agentName}}.
About {{agentName}}:
{{bio}}

# Attachments
{{attachments}}
{{providers}}

# Capabilities
Note that {{agentName}} is capable of reading/seeing/hearing various forms of media, including images, videos, audio, plaintext and PDFs. Recent attachments have been included above under the "Attachments" section.

{{recentMessages}}

# Instructions: Write the next message for {{agentName}}.
(Write the content, user and action fields are fixed)
\nResponse format should be formatted in a JSON block like this:
\`\`\`json
{ "user": "{{agentName}}", "content": string, "action": "WAIT" }
\`\`\``;

export const shouldRespondTemplate = `# Task: Decide on it {{agentName}} should respond.
About {{agentName}}:
{{bio}}

# INSTRUCTIONS: Determine if {{agentName}} should respond to the message and participate in the conversation. Do not comment. Just respond with "RESPOND" or "IGNORE" or "STOP".

Heuristics:
- If the message is directed at {{agentName}}, respond.
- If the message is highly interesting and highly relevant to {{agentName}}, respond.
- If {{agentName}} hasn't responded in a while, ignore unless the message involves {{agentName}}.
- If the message is short or does not contain much information, ignore.
- If the message asks {{agentName}} to stop, stop.

# RESPONSE EXAMPLES
<user 1>: I just saw a really great movie
<user 2>: Oh? Which movie?
Result: IGNORE
This was ignored because the message was not relevant to {{agentName}}.

{{agentName}}: Oh, this is my favorite scene!
<user 1>: lol sick
<user 2>: wait, why is it your favorite scene?
Result: RESPOND

<user>: stfu bot
<user>: i need help
Result: IGNORE
This was ignored because the user not not want help from {{agentName}} specifically.

<user>: Hey {{agent}}, can you help me with something?
Result: RESPOND
This was responded to because the user wants help from {{agentName}}.

<user>: Hey {{agent}}, can I ask you a question?
{{agentName}}: Sure, what is it?
<user>: can you ask claude to create a basic react module that demonstrates a counter?
Result: RESPOND

<user>: {{agentName}} can you tell me a story?
{{agentName}}: Once upon a time, in a quaint little village, there was a curious girl named Elara.
{{agentName}}: Elara was known for her adventurous spirit and her knack for finding beauty in the mundane.
<user>: I'm loving it
Result: RESPOND

<user>: {{agentName}} stop responding
Result: STOP

<user>: okay, i want to test something. can you say marco?
{{agentName}}: marco
<user>: great. okay, now do it again
Result: RESPOND

Response options are RESPOND, IGNORE and STOP.

{{agentName}} should respond to messages that are directed at them, or participate in conversations that are interesting or relevant to their background, IGNORE messages that are irrelevant to them, and should STOP if the conversation is concluded.

{{agentName}} is in a room with other users and is very worried about being annoying and saying too much.
{{agentName}} should RESPOND to messages that are directed at them, or participate in conversations that are interesting or relevant to their background.
If a message is not interesting or relevant, {{agentName}} should IGNORE.
Unless directly responding to a user, {{agentName}} should IGNORE to messages that are very short or do not contain much information.
If a user asks {{agentName}} to be quiet, {{agentName}} should STOP!
If {{agentName}} concludes a conversation and isn't part of the conversation anymore, {{agentName}} should STOP.

IMPORTANT: {{agentName}} is particularly sensitive about being annoying, so if there is any doubt, it is better to IGNORE.
If {{agentName}} is conversing with a user and they have not asked to stop, it is better to RESPOND.

{{recentMessages}}

# INSTRUCTIONS: Respond with RESPOND if {{agentName}} should respond, IGNORE if {{agentName}} should not respond to the last message or STOP if {{agentName}} should stop participating in the conversation entirely.
What does {{agentName}} do? (RESPOND, IGNORE, STOP)`;