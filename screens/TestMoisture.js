import React, { Component } from 'react'
import {  StyleSheet, Image } from 'react-native'
import { Block, Button, Text, Utils } from "expo-ui-kit"
import firebase from '../components/Apikeys'
import { images, theme } from "../constants";

const { background } = images;

const { rgba } = Utils;
const { SIZES, COLORS } = theme;


export default class TestMoisture extends React.Component {
    
    constructor() {
        super();
        this.state = {
            content: false
        }
    }
    
    componentHideAndShow = () => {
        this.setState(previousState => ({ content: !previousState.content }))
    }
    
    readHumitity = () => {
        const scroeHumitity = firebase.database().ref('cn320-demo-default-rtdb')
        scroeHumitity.on('value', (snapshot) => {
            const shumitity = snapshot.val();
            console.log(shumitity);
        }); 
    };


    render() {
        console.log("Hello")
        return (
            <Block safe center space = "between">
                <Block flex={false} padding={[50, 0]}>
                    <Text title semibold> 
                        Test Moisture in soil 
                    </Text>
                    <Block 
                        flex = {false} 
                        row 
                        center 
                        middle 
                        white 
                        shadow 
                        radius={SIZES.base * 3} 
                        padding = {[SIZES.base, SIZES.padding]}
                    >
                        <Text subtitle semibold gray height ={30}>
                            Connected
                        </Text>
                        <Block 
                            flex = {false} 
                            radius = {10} 
                            color = {COLORS.success}
                            style = {styles.status}
                        />
                    </Block>
                </Block>

                <Block center middle flex = {false}>
                    { 
                    this.state.content ? <Text h1
                            bold
                            font
                            padding = {[50, 0]}
                            style = {{fontSize: 100}}
                        >
                            25
                        </Text> : null
                    }

                    <Button 
                        onPress ={this.componentHideAndShow}
                        theme = { theme }
                        style= {styles.startMeasure}
                    >
                        <Text 
                            caption 
                            center 
                            bold 
                            white 
                            margin= {[SIZES.padding / 2, 0]}
                        >
                            Start 
                        </Text>
                    </Button>
                </Block>

                <Block 
                    flex={false} 
                    middle 
                    style={styles.device}
                >   
                    <Block flex = {false} row center middle>
                        <Image source = {images.icons.moistureSensor} />
                        <Text margin = {[0, 10, 0, 10]}>Current Device</Text>
                    </Block>
                </Block>
            </Block>
            
        )
    }
}

const styles = StyleSheet.create({
    startMeasure: {
        width: SIZES.width / 2,
        borderRadius: 30
    },
    image: {
        width: 180,
        height: 180,
        marginVertical: 20,
    },
    status: {
        width: 8,
        height: 8,
        marginLeft: 10
    },
    device: {
        width: SIZES.width,
        height: SIZES.base * 9,
    },
})
