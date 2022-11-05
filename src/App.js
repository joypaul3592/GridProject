import logo from './logo.svg';
import './App.css';
import { Box, Button, ChakraProvider, Container, Grid, GridItem, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
function App() {


  return (
    <Container maxW={'7xl'} pt={8}>
      <ChakraProvider>
        <Grid
          templateColumns='repeat(3, 1fr)'
          templateRows='repeat( 1fr)'
          gap={4}
          mb={10}
        >
          <GridItem bg='#DA412C'   >
            <Box p={7}>
              <Text fontSize='xs' fontWeight={'bold'} color={'white'}>ENOCH SOCIAL</Text>
              <Text fontSize='4xl' fontWeight={'semibold'} pt={'4'} lineHeight={'110%'} color={'white'}>Earn monthly cash rewards for completing missions</Text>
              <Button bg={'white'} mt={'6'} rounded='md' size='md' fontSize='xs' fontWeight={'medium'}>
                LEARN MORE
              </Button>
            </Box>
          </GridItem>
          <GridItem bg='papayawhip' >
            <Image src={require('./assect/Img3.jpg')}></Image>
          </GridItem>
          <GridItem bg='#668C4D' >
            <Box p={7}>
              <Text fontSize='xs' fontWeight={'bold'} color={'white'}>RANKING POOL</Text>
              <Text fontSize='4xl' fontWeight={'semibold'} pt={'4'} lineHeight={'110%'} color={'white'}>Earn monthly cash rewards for ranking up</Text>
              <Button bg={'white'} mt={'6'} rounded='md' size='md' fontSize='xs' fontWeight={'medium'}>
                LEARN MORE
              </Button>
            </Box>
          </GridItem>


          <GridItem rowSpan={2} bg='papayawhip' >
            <Image h={'100%'} src={require('./assect/Img4.jpg')}></Image>
          </GridItem>
          <GridItem bg='#049B9A' >
            <Box p={7}>
              <Text fontSize='xs' fontWeight={'bold'} color={'white'}>BETTING GAME POOL</Text>
              <Text fontSize='4xl' fontWeight={'semibold'} pt={'4'} lineHeight={'110%'} color={'white'}>Earn a passive income by winning bets and barrels in Knights Templar Distillery</Text>
              <Button bg={'white'} mt={'6'} rounded='md' size='md' fontSize='xs' fontWeight={'medium'}>
                LEARN MORE
              </Button>
            </Box>
          </GridItem>
          <GridItem rowSpan={2} bg='papayawhip'>
            <Image h={'100%'} src={require('./assect/Img5.jpg')}></Image>
          </GridItem>
          <GridItem bg='#273C75' >
            <Box p={7}>
              <Text fontSize='xs' fontWeight={'bold'} color={'white'}>BETTING GAME POOL</Text>
              <Text fontSize='4xl' fontWeight={'semibold'} pt={'4'} lineHeight={'110%'} color={'white'}>Earn a passive income by winning battles and bets in Aztec game</Text>
              <Button bg={'white'} mt={'6'} rounded='md' size='md' fontSize='xs' fontWeight={'medium'}>
                LEARN MORE
              </Button>
            </Box>
          </GridItem>





          <GridItem bg='#B33771' >
            <Box p={7}>
              <Text fontSize='xs' fontWeight={'bold'} color={'white'}>BETTING GAME POOL</Text>
              <Text fontSize='4xl' fontWeight={'semibold'} pt={'4'} lineHeight={'110%'} color={'white'}>Own in-game assets and stake them in our Fractal World Pools</Text>
              <Button bg={'white'} mt={'6'} rounded='md' size='md' fontSize='xs' fontWeight={'medium'}>
                LEARN MORE
              </Button>
            </Box>
          </GridItem>
          <GridItem colSpan={2} bg='papayawhip' >
            <Image h={'100%'} src={require('./assect/Img6.jpg')}></Image>
          </GridItem>



          <GridItem colSpan={2} bg='papayawhip' >
            <Image h={'100%'} src={require('./assect/Img2.jpg')}></Image>
          </GridItem>
          <GridItem bg='#EE4646'>
            <Box p={7}>
              <Text fontSize='xs' fontWeight={'bold'} color={'white'}>BETTING GAME POOL</Text>
              <Text fontSize='4xl' fontWeight={'semibold'} pt={'4'} lineHeight={'110%'} color={'white'}>Investing in Star Walker game assets gives you up to 30% APY passive income</Text>
              <Button bg={'white'} mt={'6'} rounded='md' size='md' fontSize='xs' fontWeight={'medium'}>
                LEARN MORE
              </Button>
            </Box>
          </GridItem>



          <GridItem bg='papayawhip' >
            <Image src={require('./assect/Img1.jpg')}></Image>
          </GridItem>
          <GridItem bg='papayawhip' >
            <Image src={require('./assect/Img7.jpg')}></Image>
          </GridItem>
          <GridItem bg='papayawhip' >
            <Image src={require('./assect/Img8.jpg')}></Image>
          </GridItem>
        </Grid>

      </ChakraProvider>

    </Container >

  );
}

export default App;
