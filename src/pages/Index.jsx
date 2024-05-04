// Complete the Index page component here
// Use chakra-ui
import { useState } from "react";
import { Button, Textarea, VStack, Text } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";
import { create } from "../../lib/openai";

const Index = () => {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const summarizeText = async () => {
    const response = await create({
      messages: [{ role: "system", content: text }],
      model: "gpt-3.5-turbo",
    });
    if (response && response.data && response.data.choices && response.data.choices.length > 0) {
      setSummary(response.data.choices[0].message.content);
    } else {
      setSummary("Failed to generate summary.");
    }
  };

  return (
    <VStack spacing={4} p={5}>
      <Text fontSize="2xl" fontWeight="bold">
        Text Summarizer <FaRobot />
      </Text>
      <Textarea placeholder="Enter your text here..." value={text} onChange={handleTextChange} size="sm" />
      <Button colorScheme="blue" onClick={summarizeText}>
        Summarize
      </Button>
      <Textarea placeholder="Summary will appear here..." value={summary} isReadOnly size="sm" />
    </VStack>
  );
};

export default Index;
