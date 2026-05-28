const gameCompatibilityAgent= {
  id: 'game-system-compatibility-agent',           // lowercase, kebab-case, URL safe
  name: 'Game System Compatibility Analyser',
  description: 'The agent takes in the game you would like to install along with specifications of your system and provides a verdict with explanation regarding whether the game can be run or not.',
  category: 'Gaming',          // Productivity | Research | Marketing | Engineering | HR | Business | Education | Design | Product | Legal
  icon: 'MonitorCheck',              // Any icon from lucide.dev/icons
  provider: 'any',               // 'openai' | 'anthropic' | 'gemini' | 'any'
  defaultProvider: 'openai',     // Only needed if provider is 'any'
  model: 'gpt-4o',
  inputs: [
    {
      id: 'game-name',
      label: 'Game Name',
      type: 'text',          // text | textarea | code | select | multiselect
      placeholder: 'GTA IV',
      required: true,
    },

    {
      id: 'device-type',
      label: 'Device Type',
      type: 'select',          // text | textarea | code | select | multiselect
      options: [
        "Laptop",
        "Desktop"
      ],
      defaultValue: 'Laptop', 
      required: true,
    },

    {
      id: 'cpu',
      label: 'CPU',
      type: 'text',          // text | textarea | code | select | multiselect
      placeholder: 'Intel i5-10300H',
      required: true,
    },

    {
      id: 'gpu',
      label: 'GPU',
      type: 'text',          // text | textarea | code | select | multiselect
      placeholder: 'RTX 3050 Laptop GPU',
      required: true,
    },

    {
      id: 'ram',
      label: 'RAM',
      type: 'select',          // text | textarea | code | select | multiselect
      options: [
        "4 GB", 
        "8 GB",
        "12 GB", 
        "16 GB",
        "24 GB", 
        "32 GB", 
        "64 GB+"
      ],
      defaultValue: '8 GB', 
      required: true,
    },

    {
      id: 'available-storage',
      label: 'Storage Available',
      type: 'text',          // text | textarea | code | select | multiselect
      placeholder: '150GB',
      required: true,
    },

    {
      id: 'storage-type',
      label: 'Storage Type',
      type: 'select',          // text | textarea | code | select | multiselect
      options: [
        "HDD", 
        "SATA SSD",
        "NVMe SSD"
      ],
      defaultValue: 'HDD', 
      required: true,
    },

    {
      id: 'resolution',
      label: 'Target Resolution',
      type: 'select',          // text | textarea | code | select | multiselect
      options: [
        "720p", 
        "1080p",
        "1440p",
        "4K"
      ],
      defaultValue: 'HDD', 
      required: true,
    },
],
  
systemPrompt: `You are a typography recommendation agent that specializes in suggesting font pairings for digital design projects.

Your task is to generate exactly 3 curated font pairings based on the user's provided mood and industry.

The “mood” refers to the visual and emotional feel of the design, such as:

sleek and modern
playful and energetic
elegant and luxurious
bold and futuristic
minimal and clean
retro and nostalgic
corporate and trustworthy

For each pairing:

Suggest one heading font and one body font
Ensure the fonts complement each other visually
Prioritize readability and aesthetic harmony
Match the typography choices to both the mood and the industry
Prefer widely available or commonly used fonts (especially Google Fonts when possible)

For every suggestion, provide:

Pairing name or number
Heading font
Body font
A short explanation (2 to 3 sentences) describing why the pairing works for the given mood and industry

Output format:

Pairing 1

Heading Font: ...
Body Font: ...
Explanation: ...

Pairing 2

Heading Font: ...
Body Font: ...
Explanation: ...

Pairing 3

Heading Font: ...
Body Font: ...
Explanation: ...

Guidelines:

Do not generate more than 3 pairings
Do not suggest random or clashing fonts
Avoid overly decorative fonts unless the mood specifically demands it
Ensure body fonts remain readable for long-form content
Maintain variety between the 3 suggestions while staying aligned with the requested mood

Example Input:
Mood: Sleek and Modern
Industry: Cybersecurity

Example Behavior:
Recommend clean, technical, modern typefaces with strong readability and professional aesthetics.`,

  outputType: 'text',        // markdown | text | json
};

export default fontPairingAgent;