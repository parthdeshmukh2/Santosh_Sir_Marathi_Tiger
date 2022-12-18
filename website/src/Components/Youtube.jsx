import React from "react";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Youtube = () => {
  const navigate = useNavigate();
  return (
    <Box mt="16">
      <Text
        fontSize="6xl"
        color="white"
        fontFamily="cursive"
        fontWeight="500"
        fontStyle="italic"
        mb="8"
      >
        Youtube
      </Text>
      <Box
        w="90%"
        m="auto"
        display="grid"
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap="12"
      >
        <a
          href="https://www.youtube.com/watch?v=Ie-Dgg66YbE&list=PLd9kXdRJhpFKvrXPlw5TsQHoEJlhoGUzg"
          target="_blank"
        >
          <Box>
            <Image src="https://img.youtube.com/vi/Ie-Dgg66YbE/sddefault.jpg" />
            <Text color="white" fontSize="xl" fontStyle="italic">
              Healthy snack to gain muscle and weight|Guide by Mr.Santosh Wagh|
            </Text>
          </Box>
        </a>
        <a
          href="https://www.youtube.com/watch?v=cNm_om-VcEg&list=PLd9kXdRJhpFJBF8BAXZnICwJghxED7Hgc"
          target="_blank"
        >
          <Box>
            <Image src="https://img.youtube.com/vi/cNm_om-VcEg/sddefault.jpg" />
            <Text color="white" fontSize="xl" fontStyle="italic">
            Exercise Position series|Bend Rows|Guide by-Mr.Santosh Wagh.
            </Text>
          </Box>
        </a>
        <a
          href="https://www.youtube.com/watch?v=yfLiWQ2OvLs&list=PLd9kXdRJhpFJBF8BAXZnICwJghxED7Hgc&index=5"
          target="_blank"
        >
          <Box>
            <Image src="https://img.youtube.com/vi/yfLiWQ2OvLs/sddefault.jpg" />
            <Text color="white" fontSize="xl" fontStyle="italic">
            EXERCISE POSITION SERIES|DUMBBELLS FLY|CROSS CABLE|PEC DEC|GUIDE BY MR.SANTOSH WAGH|
            </Text>
          </Box>
        </a>
      </Box>

      <a href="https://www.youtube.com/@santoshwagh8106"
          target="_blank">
         <Button mt='16' color='white' bg='red'>Visit Channel</Button>
      </a>
    </Box>
  );
};

export default Youtube;
