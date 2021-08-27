import React, { Component } from 'react'
import {  StyleSheet, ScrollView, Image, Animated } from 'react-native'
import { Block, Button, Text, Utils } from "expo-ui-kit"

import { images, theme } from "../constants";
const { background } = images;

const { rgba } = Utils;
const { SIZES, COLORS } = theme;

const backgrounds = [
    {
        title: " Moisture Soil",
        description: "This app is using for scale the moisture of soil. that can scale from moisture senser",
        img: background.welcome,
    },
    {
        title: " Moisture Soil",
        description: "This app is using for scale the moisture of soil. that can scale from moisture senser",
        img: background.moistureDevice,
    }
];

export default class Welcome extends Component {
    scrollX = new Animated.Value(0);

    renderImages() {
        return(
            <ScrollView 
                horizontal 
                pagingEnabled 
                scrollEnabled 
                decelerationRate = {0}
                scrollEventThrottle = {16}
                snapToAlignment = 'center'
                showsHorizontalScrollIndicator ={false}
                onScroll = {Animated.event([
                    { nativeEvent: {contentOffset: { x: this.scrollX }}}
                ])}
            >
                {backgrounds.map((item, index )=> (
                    <Block 
                        center 
                        bottom 
                        key = {`img-${index}`} 
                        style={{ width: SIZES.width}}
                    >
                        <Image 
                            source = { item.img } 
                            resizeMode = 'center' 
                            style = {{
                                width: SIZES.width / 1.5,
                                height: "50%"
                            }}
                        />
                    </Block>
                ))}
                </ScrollView>
            )
    }

    renderDot() {
        const dotPosition = Animated.divide(this.scrollX, SIZES.width);

        return(
            <Block 
                flex ={false} 
                row 
                center 
                middle 
                margin = {[20, 0, 40, 0]}
            >
                {backgrounds.map((item, index) => {
                    const opacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1 ],
                        outputRange: [0.3, 1, 0.3 ],
                        extrapolate: "clamp"
                    })
                    return (
                        <Block 
                            gray
                            animated
                            flex = {false} 
                            key = {`dot-${index}`}
                            margin = {[0, 5]} 
                            radius = {8} 
                            style = {[styles.dot, {opacity}]}
                        />
                    )
                })}
                
            </Block>
        )
    }

    render() {
        const { navigation } = this.props;

        return (
            <Block safe>
                <Block center middle>
                    {this.renderImages()}
                </Block>
                <Block flex = {false} center bottom margin = {60}>
                    <Text h2 semibold>
                    Soil Moisture
                    </Text>
                    <Text h2 center caption gray margin = {[10,0]}>
                        This app is using for scale The soil Moisture. 
                        that can scale from moisture senser.
                    </Text>
                    {this.renderDot()}
                    <Button 
                        theme = { theme }
                        primary 
                        onPress = {() => navigation.navigate("TestMoisture")}
                        style = {{borderRadius: 30}}
                    >
                        <Text center white caption bold margin = {[12, 30]}>
                            GET STARTED
                        </Text>
                    </Button>
                    <Text h2 center caption gray margin = {[40,0,0,0]} >
                        Made By Oreo
                    </Text>
                </Block>
                
            </Block>
        )
    }
}

const styles = StyleSheet.create({
    dot:{
        width:8, 
        height: 8
    }
})
