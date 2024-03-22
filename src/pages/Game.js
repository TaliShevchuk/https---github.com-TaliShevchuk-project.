import React, { useEffect, useState } from "react";
import { useQuestionStore, useScoreStore } from "../Controlls/ZustandStore.js";
import { Box, Button, Center, Heading, SimpleGrid } from "@chakra-ui/react";
const Game = ({ Next }) => {
  const { questions } = useQuestionStore();
  const [indext, updateIndex] = useState(0);
  const [answerarray, updateAnswer] = useState([]);
  const { score, addPoint } = useScoreStore();
  const Check = (event) => {
    if (event.currect) {
      addPoint()
    }
    if (indext < questions.length - 1) {

      updateIndex(indext + 1);
    } else {
      Next();
    }
  };
  const Load = () => {
    const arr = [];
    arr.push({ answer: questions[indext].correct_answer, currect: true });
    questions[indext].incorrect_answers.filter((e) => {
      arr.push({ answer: e, currect: false });
    });
    updateAnswer(shuffle(arr));
  };

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    Load();
  }, [indext]);
  return (
    <Box padding="5" bg="withe" width="1300px" minHeight="500" borderRadius={20}>
      {questions.length > 0 ? (
        <SimpleGrid column={1} spacingX={20} spacingY={10}>
          <Box
            padding={2}
            textAlign="center"
            borderRadius={20}
            bg="grey"
            height="300px"
          >
            <Heading>{questions[indext].question}</Heading>
          </Box>
          <SimpleGrid column={2} spacingX={20} spacingY={10}>
            {answerarray.length > 0 ? (
              answerarray.map((e, i) => {
                return (
                  <Button
                    key={e + i}
                    onClick={() => {
                      Check(e);
                    }}
                    borderRadius={20}
                    minHeight={20}
                    maxWidth={400}
                    minWidth={400}
                    colorScheme="teal"
                    variant="solid"
                  >
                    {e.answer}
                  </Button>
                );
              })
            ) : (
              <></>
            )}
          </SimpleGrid>
        </SimpleGrid>
      ) : (
        <>
          <Button onClick={Next}></Button>
        </>
      )}
    </Box>
  );
};

export default Game;
