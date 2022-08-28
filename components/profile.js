import {Text,View,StyleSheet,Image,Button} from "react-native";
import React from 'react';
function Profile()
{
    return(
        <View style={myStyle.cont}>
            <View style={myStyle.pic}>
                <Image source = {require("D:/projects/React/firstTask/assets/me.jpg")} style={myStyle.img}/>

                
                <Text style={myStyle.name}>Peter Atef</Text>
            </View>
            <View style={myStyle.card}>
                <View style={myStyle.col}>
                    <Text style={myStyle.title}>Photos</Text>
                    <Text style={myStyle.data}>23</Text>
                </View>
                <View style={myStyle.col}>
                    <Text style={myStyle.title}>Followers</Text>
                    <Text style={myStyle.data}>24414</Text>
                </View>
                <View style={myStyle.col}>
                    <Text style={myStyle.title}>Following</Text>
                    <Text style={myStyle.data}>400</Text>
                </View>
            </View>
            <View style={myStyle.body}>
                <View style={myStyle.info}>
                    <View>
                        <Text>peter.atef2000@gmail.com</Text>
                    </View>
                    <View>
                        <Text>01208216216</Text>
                    </View>
                    <View>
                        <Text>Add To Group</Text>
                    </View>
                    <View>
                        <Text>Show Comments</Text>
                    </View>
                </View>
                </View>
            <Button title="Follow me"/>
        </View>
    )
}

const myStyle = StyleSheet.create({
    cont:
    {
        marginTop:30, 
        alignItems:'center',
        justifyContent:'space-between',
    },
    card:
    {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'center',
        height: 150,
        borderRadius:25,
        elevation:20,
        backgroundColor:"white",
        width:300,
    },
    col:{
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title:{
        color:'grey',
        fontSize:20,
        fontWeight:'bold',
    },
    data:{
        color:"#4BFFFF",
        fontSize:15,
    },
    pic:
    {
        flex:3,
        backgroundColor: "#4BFFFF",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        width: 500,
    },
    name:
    {
        color: "#fff",
        fontSize:30,
        fontWeight:'bold',
    },
    img:
    {
        height: 150,
        width:100,
        borderRadius:50,
    },
    body:
    {
        flex:4,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    info:{
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }
});

export default Profile;