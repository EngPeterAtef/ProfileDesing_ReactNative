import {Text,View,StyleSheet,Image,Button} from "react-native";
import React,{useState} from 'react';
function Profile()
{
    const[user,setInfo] = useState({
        name:'Peter Atef',
        email:'peter.atef2000@gmail.com',
        phno:'01208216216',
    });
    const[myMode,setMode] = useState("#1BFFFF");
    const[count,setCount] = useState(0);
    function changeMode(){
        if (myMode=="#1BFFFF")
        {
            setMode("black");
        }
        else{
            setMode("#1BFFFF");
        }
    }
    function addFollower() { 
        setCount(count +1);
    }
    function changeInfo () {
        setInfo({...user,name:'patoraa'});
    }
    return(
        <View style={myStyle.cont}>
            <View style={myStyle.pic}>
                <View style={myStyle.mod}>
                    <Button title="mode" color='grey' onPress={changeMode}/>
                    <Button title="edit" color='grey' onPress={changeInfo}/>
                </View>
                <Image source = {require("../assets/me.jpg")} style={myStyle.img}/>
                <Text style={myStyle.name}>{user.name}</Text>
            </View>
            <View style={myStyle.card}>
                <View style={myStyle.col}>
                    <Text style={myStyle.title}>Photos</Text>
                    <Text style={myStyle.data}>23</Text>
                </View>
                <View style={myStyle.col}>
                    <Text style={myStyle.title}>Followers</Text>
                    <Text style={myStyle.data}>{count}</Text>
                </View>
                <View style={myStyle.col}>
                    <Text style={myStyle.title}>Following</Text>
                    <Text style={myStyle.data}>400</Text>
                </View>
            </View>

            <View style={myStyle.body}>
                <View style={myStyle.info}>
                        <Text style={myStyle.personal}>{user.email}</Text>
                        <Text style={myStyle.personal}>{user.phno}</Text>
                        <Text style={myStyle.personal}>Add To Group</Text>
                        <Text style={myStyle.personal}>Show Comments</Text>
                </View>
                <Button title="Follow me" color= {myMode} onPress={addFollower}/>
            </View>
        </View>
    )
}

let myStyle = StyleSheet.create({
    cont:
    {
        marginTop:30, 
        alignItems:'center',
        justifyContent:'space-between',
    },
    mod:
    {
        position:'absolute',
        flexDirection:'row',
        top:20,
        left:70,
    },
    card:
    {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'center',
        height: 100,
        borderRadius:25,
        elevation:20,
        backgroundColor:"white",
        width:300,
        marginTop:-50,
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
        color:"#1BFFFF",
        fontSize:15,
    },
    pic:
    {
        flex:3,
        backgroundColor: "#1BFFFF",
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
        justifyContent: 'space-evenly',
    },
    info:{
        flexDirection:'column',
        alignItems: 'stretch',
        justifyContent: 'space-between',
    },
    personal:
    {
        color:'grey',
        fontSize:15,
        fontWeight:'bold',
        // display:'flex',
        // height:50,
        lineHeight: 50,   
    }
});

export default Profile;