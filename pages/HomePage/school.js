import React from 'react';
import { Flex, Text,Image, Heading,Center, Spacer, Button } from '@chakra-ui/react';
import {Home} from '@mui/icons-material';
import styled from 'styled-components'
import styles from '../../styles/Home.module.css'
import {useRouter} from 'next/router'

const school = [
    {   
        id:'1',
        name:'Jomo Kenyatta University of Agriculture and technology',
        flats: 100,
        area:'Juja,Kiambu'
    },
    {
        id:'2',
        name:'Kenyatta University',
        flats:50,
        area:'Ruiru,Kiambu'
    },
    {
        id:'3',
        name:'Mount Kenya University',
        flats:40,
        area:'Thika,Kiambu'
    },
    {
        id:'4',
        name:'University of Nairobi',
        flats:20,
        area:'Nairobi,Nairobi'
    },
]
export default function School(){
    const router = useRouter();
    return(
        <Center w='100%' h='100%'>
            <Flex direction='column' w='100%'>
                <Center>
                    <StyledHeading >
                        Our Institutions
                    </StyledHeading>

                </Center>
                <Center m='auto' w='100%'>
                    <StyledSlider className={styles.scrollbar}>
                        {school.map((item)=>{
                            return(
                                <StyledDiv key={item.id}>
                                    <Item  item={item}/>                         
                                </StyledDiv>
                            )
                        })}
                    </StyledSlider>
                </Center>
                <Center mt='20px'>
                    <Button bg='#ffa31a' onClick={(()=>{router.push('explore')})}>
                        Explore More
                    </Button>
                </Center>
            </Flex>

        </Center>

    )
}

const Item=({item})=>{
    return(
        <Flex direction='column' w='325px' h='300px' >
            <Image h='250px' w='325px' borderRadius='10px' src='https://a0.muscache.com/im/pictures/a003c1a8-0182-4b39-9e48-c6e0be6cbe11.jpg?im_w=320' alt='school photo' />
            <Flex p='1'>
                <Text fontFamily='Poppins-bold' fontSize='md' noOfLines={1}>
                    {item.name}
                </Text>
                <Spacer/>
                <Flex marginRight='1'>
                    <Home style={{fontSize:'20px'}}/>
                    <Text>{item.flats}</Text>
                </Flex>
            </Flex>
            <Text fontSize='md' p='1'>
                {item.area}
            </Text>
        </Flex>
    )
}

const StyledDiv = styled.div`
    box-shadow:
    2px 10.9px 10px rgba(0, 0, 0, 0.075),
    16px 87px 80px rgba(0, 0, 0, 0.15)
    ;
    display: flex;
    flex-direction: column;
    width: 325px;
    height: 300px;
    border-radius: 10px;
    margin: 10px
`
const StyledHeading = styled.h1`
    font-size: clamp(36px, 2.5vw, 64px);
    font-family: Poppins-bold; 
    text-decoration: underline #ffa31a;
`
const StyledSlider = styled.div`
    display: flex;
    overflow: auto;
    padding:10px;
    margin: 10px; 
    white-space:nowrap;
          
`