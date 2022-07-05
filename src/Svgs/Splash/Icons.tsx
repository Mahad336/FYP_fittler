import React from 'react';
import Svg, { Path,Rect,Circle, Defs, Stop,G,Mask,Pattern, Use,LinearGradient,Image } from 'react-native-svg'

interface ClockProps {
    style?: any,
}
const SplashIcon = ({ style }: ClockProps) => {
    return (
        <Svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink">
        <Mask id="mask0_918_30668" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="96" height="96">
        <Rect width="96" height="96" fill="url(#pattern0)"/>
        </Mask>
        <G mask="url(#mask0_918_30668)">
        <Rect width="96" height="96" fill="white"/>
        </G>
        <Defs>
        <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <Use  transform="translate(-0.00711864) scale(0.000677966)"/>
        </Pattern>
        <Image id="image0_918_30668" width="1496" height="1475" xlinkhref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABdgAAAXDCAYAAADDXlxQAAAACXBIWXMAABcSAAAXEgFnn9JSAAAu10lEQVR4nOzcsY1aYRBG0d/W64JivA4JqAl6IiBli6EOHDi35Cut54HPqeCLr0bz7fl8LgAAAAAA4O98nx4AAAAAAACvSGAHAAAAAIBAYAcAAAAAgEBgBwAAAACAQGAHAAAAAIBAYAcAAAAAgEBgBwAAAACAQGAHAAAAAIBAYAcAAAAAgEBgBwAAAACAQGAHAAAAAIBAYAcAAAAAgEBgBwAAAACAQGAHAAAAAIBAYAcAAAAAgEBgBwAAAACAQGAHAAAAAIBAYAcAAAAAgEBgBwAAAACAQGAHAAAAAIBAYAcAAAAAgEBgBwAAAACAQGAHAAAAAIBAYAcAAAAAgEBgBwAAAACAQGAHAAAAAIBAYAcAAAAAgEBgBwAAAACAQGAHAAAAAIBAYAcAAAAAgEBgBwAAAACAQGAHAAAAAIBAYAcAAAAAgEBgBwAAAACAQGAHAAAAAIBAYAcAAAAAgEBgBwAAAACAQGAHAAAAAIBAYAcAAAAAgEBgBwAAAACAQGAHAAAAAIBAYAcAAAAAgEBgBwAAAACAQGAHAAAAAIBAYAcAAAAAgGCbHlCdbo+PtdbH8AwAAAAAgP/e9Xi4TG+Y8LKBff2O6+fpEQAAAAAArMv0gAlexAAAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQCCwAwAAAABAILADAAAAAEAgsAMAAAAAQLBNDwD4Yp9rrfv0CAAAAADej8AOvLv79Xi4TI8AAAAA4P14EQMAAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAACBwA4AAAAAAIHADgAAAAAAgcAOAAAAAADBNj0AAAAAgH073R73tdaP6R3A7v28Hg/36RH/kgt2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAi26QEAAAAA7Nv1ePiY3gCwRy7YAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAINimBwAAAACwX6fb4zK9Adi/6/Fwmd4wQWAHAAAA4E/O0wOAl3CZHjDBixgAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAIBHYAAAAAAAgEdgAAAAAACAR2AAAAAAAItukBAF/sfLo9ztMjAAAAAHg/LtgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAACAX+3asQkAMADDMPr/0ekPXkpBuiCzCRAI7AAAAAAAEAjsAAAAAAAQCOwAAAAAABAI7AAAAAAAEAjsAAAAAAAQCOwAAAAAABAI7AAAAAAAEAjsAAAAAAAQCOwAAAAAABAI7AAAAAAAEAjsAAAAAAAQCOwAAAAAABAI7AAAAAAAEAjsAAAAAAAQCOwAAAAAABAI7AAAAAAAEAjsAAAAAAAQCOwAAAAAABAI7AAAAAAAEAjsAAAAAAAQCOwAAAAAABAI7AAAAAAAEAjsAAAAAAAQCOwAAAAAABAI7AAAAAAAEAjsAAAAAAAQCOwAAAAAABAI7AAAAAAAEAjsAAAAAAAQCOwAAAAAABAI7AAAAAAAEAjsAAAAAAAQCOwAAAAAABAI7AAAAAAAEAjsAAAAAAAQCOwAAAAAABAI7AAAAAAAEAjsAAAAAAAQCOwAAAAAABAI7AAAAAAAEAjsAAAAAAAQCOwAAAAAABAI7AAAAAAAEAjsAAAAAAAQCOwAAAAAABAI7AAAAAAAEAjsAAAAAAAQCOwAAAAAABAI7AAAAAAAEAjsAAAAAAAQCOwAAAAAABAI7AAAAAAAEAjsAAAAAAAQCOwAAAAAABAI7AAAAAAAEAjsAAAAAAAQCOwAAAAAABAI7AAAAAAAEAjsAAAAAAAQCOwAAAAAABAI7AAAAAAAEAjsAAAAAAAQCOwAAAAAABAI7AAAAAAAEAjsAAAAAAAQCOwAAAAAABAI7AAAAAAAEAjsAAAAAAAQCOwAAAAAABAI7AAAAAAAEAjsAAAAAAAQCOwAAAAAABCcba83AAAAAADAdzzYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAgENgBAAAAACAQ2AEAAAAAIBDYAQAAAAAguHw9KOUb7COIAAAAAElFTkSuQmCC"/>
        </Defs>
        </Svg>
    )
}
export default SplashIcon


