// Complete the Index page component here
// Use chakra-ui
import { useState } from "react";
import { Box, Button, Textarea, VStack, Text } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";

const Index = () => {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const summarizeText = async () => {
    // Simulating a call to an AI API like OpenAI's GPT-3.5
    // This is a placeholder function since we can't make actual API calls here.
    const simulatedResponse = "This is a summary of the text.";
    setSummary(simulatedResponse);
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
