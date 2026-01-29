// Creates instruction files in ALL main folders
const folders = ['AI', 'Java', 'interview-prep', 'coding-patterns'];

const instructions = {
    'AI': `# AI Folder Rules\nFOCUS: AI/ML concepts, tools, prompts, papers.\n- Explain algorithms with diagrams/math\n- Generate Python + Java implementations\n- Compare tools (LangChain vs LlamaIndex)\n- Create prompts for specific models\n- Reference latest papers/research`,

    'Java': `# Java Concepts Rules\nFOCUS: Core Java (OOP, JVM, collections, streams).\n- Always show code examples\n- Explain JVM behavior step-by-step\n- Compare pre-Java 8 vs modern approaches\n- Include memory/performance implications\n- Link to Patterns folder for usage`,

    'interview-prep': `# Interview Rules\nFOCUS: Java/Spring Boot theory Q&A.\n- Answer in STAR format (Situation-Task-Action-Result)\n- Include trade-offs + alternatives\n- Cite Spring Boot version differences\n- Practice behavioral + system design\n- Mock interview style responses`,

    'coding-patterns': `# Patterns Rules\nFOCUS: LeetCode-style Java patterns.\n- ALWAYS provide complete working code\n- Show time/space complexity analysis\n- Include 3+ test cases\n- Step-by-step problem walkthrough\n- Link to Java concepts when needed`
};

for (const folderName of folders) {
    const fileName = `${folderName}-Instructions.md`;
    const filePath = `${folderName}/${fileName}`;

    // Skip if exists
    if (await app.vault.adapter.exists(filePath)) {
        console.log(`Skipped: ${filePath} exists`);
        continue;
    }

    await app.vault.create(filePath, instructions[folderName]);
    console.log(`Created: ${filePath}`);
}

new Notice("✅ All instruction files created!");
