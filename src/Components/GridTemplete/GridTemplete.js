import React from 'react';
import '../../App.css';
import { Box, Button, ChakraProvider, Container, Grid, GridItem, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import GridText from './GridText/GridText';

const GridTemplete = () => {

  return (
    <Container maxW={'7xl'} pt={8}>
      <ChakraProvider>
        <Grid
          className='grid'
          templateColumns='repeat(3, 1fr)'
          templateRows='repeat( 1fr)'
          gap={4}
          mb={10}
        >
          {/* 1st Row  */}
          <GridText bgColor={'#DA412C'} smallFront={'ENOCH SOCIAL'} largeFont={'Earn monthly cash rewards for completing missions'}></GridText>
          <GridItem bg='papayawhip' >
            <Image w={'100%'} src={require('../../assect/Img3.jpg')}></Image>
          </GridItem>
          <GridText bgColor={'#668C4D'} smallFront={'RANKING POOL'} largeFont={'Earn monthly cash rewards for ranking up'}></GridText>

          {/* 2nd Row  */}
          <GridItem rowSpan={2} bg='papayawhip' >
            <Image h={'100%'} w={'100%'} src={require('../../assect/Img4.jpg')}></Image>
          </GridItem>
          <GridText bgColor={'#049B9A'} smallFront={'BETTING GAME POOL'} largeFont={'Earn a passive income by winning bets and barrels in Knights Templar Distillery'}></GridText>
          <GridItem rowSpan={2} bg='papayawhip'>
            <Image h={'100%'} w={'100%'} src={require('../../assect/Img5.jpg')}></Image>
          </GridItem>
          <GridText bgColor={'#273C75'} smallFront={'BETTING GAME POOL'} largeFont={'Earn a passive income by winning battles and bets in Aztec game'}></GridText>

          {/* 3rd Row  */}
          <GridText bgColor={'#B33771'} smallFront={'FRACTAL WORLD'} largeFont={'Own in-game assets and stake them in our Fractal World Pools'}></GridText>
          <GridItem colSpan={2} bg='papayawhip' >
            <Image h={'100%'} w={'100%'} src={require('../../assect/Img6.jpg')}></Image>
          </GridItem>

          {/* 5th Row  */}
          <GridItem colSpan={2} bg='papayawhip' >
            <Image h={'100%'} w={'100%'} src={require('../../assect/Img2.jpg')}></Image>
          </GridItem>
          <GridText bgColor={'#EE4646'} smallFront={'FRACTAL WORLD'} largeFont={'Investing in Star Walker game assets gives you up to 30% APY passive income'}></GridText>



          {/* 6th Row  */}
          <GridItem bg='papayawhip' >
            <Image w={'100%'} src={require('../../assect/Img1.jpg')}></Image>
          </GridItem>
          <GridItem bg='papayawhip' >
            <Image w={'100%'} src={require('../../assect/Img7.jpg')}></Image>
          </GridItem>
          <GridItem bg='papayawhip' >
            <Image w={'100%'} src={require('../../assect/Img8.jpg')}></Image>
          </GridItem>

        </Grid>

      </ChakraProvider>

    </Container >
  );
};

export default GridTemplete;