import React from "react"
import {View} from "react-native";

export const Obstacle = ({obstacleLeft,}) => {
    const obstacleWidth = 70
    const obstacleHeight = 250
    const gap = 200
    return (
        <>
        <View style={{
            position: 'absolute',
            backgroundColor: "red",
            width: obstacleWidth,
            height: obstacleHeight,
            left: obstacleLeft - (obstacleWidth/2),
            bottom: 0+obstacleHeight+gap,
        }}/>
            <View style={{
                position: 'absolute',
                backgroundColor: "red",
                width: obstacleWidth,
                height: obstacleHeight,
                left: obstacleLeft - (obstacleWidth/2),
                bottom: 0,
            }}/>
        </>
    )
}