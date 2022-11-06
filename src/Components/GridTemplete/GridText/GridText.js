import { Box, Button, GridItem, Text } from '@chakra-ui/react';
import React from 'react';

const GridText = ({ bgColor, smallFront, largeFont }) => {

  console.log(bgColor, smallFront, largeFont)

  return (
    <>
      <GridItem bg={bgColor}   >
        <Box p={7}>
          <Text fontSize='xs' fontWeight={'bold'} color={'white'}>{smallFront}</Text>

          <Text
            fontSize={{ base: 'xl', lg: '3xl', xl: '4xl' }}
            fontWeight={'semibold'}
            pt={{ base: '1', lg: '3', xl: '4' }}
            lineHeight={'110%'}
            color={'white'}
          >{largeFont}</Text>

          <Button
            bg={'white'}
            mt={{ base: '3', lg: '4', xl: '6' }}
            rounded='md'
            size={{ base: 'xs', lg: 'sm', xl: 'md' }}
            fontSize='xs'
            fontWeight={'medium'}>
            LEARN MORE
          </Button>

        </Box>
      </GridItem></>
  );
};

export default GridText;