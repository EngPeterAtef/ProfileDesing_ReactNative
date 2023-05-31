import {Text,View,StyleSheet,Image,Button} from "react-native";
import React,{useState} from 'react';
function Profile()
{
    const[myMode,setMode] = useState("#1BFFFF");
    function changeMode(){
        if (myMode=="#1BFFFF")
        {
            setMode("black");
        }
        else{
            setMode("#1BFFFF");
        }
    }
    const[user,setInfo] = useState({
        name:'Peter Atef',
        email:'peter.atef2000@gmail.com',
        phone_num:'01208216216',
    });
    const[count,setCount] = useState(() =>{
        // console.log("hello");
        return 0;
    });
    function addFollower() { 
        setCount(count +1);
    }
    function changeInfo () {
        setInfo({...user,name:'patoraa'});
    }
    const styles = myStyle(myMode);
    return(
        <View style={styles.cont}>
            <View style={styles.pic}>
                <View style={styles.mod}>
                    <Button title="mode" color='grey' onPress={changeMode}/>
                    <Button title="edit" color='grey' onPress={changeInfo}/>
                </View>
                <Image source = {require("../assets/me.jpg")} style={styles.img}/>
                <Text style={styles.name}>{user.name}</Text>
            </View>
            <View style={styles.card}>
                <View style={styles.col}>
                    <Text style={styles.title}>Photos</Text>
                    <Text style={styles.data}>23</Text>
                </View>
                <View style={styles.col}>
                    <Text style={styles.title}>Followers</Text>
                    <Text style={styles.data}>{count}</Text>
                </View>
                <View style={styles.col}>
                    <Text style={styles.title}>Following</Text>
                    <Text style={styles.data}>400</Text>
                </View>
            </View>

            <View style={styles.body}>
                <View style={styles.info}>
                        <Text style={styles.personal}>{user.email}</Text>
                        <Text style={styles.personal}>{user.phone_num}</Text>
                        <Text style={styles.personal}>Add To Group</Text>
                        <Text style={styles.personal}>Show Comments</Text>
                </View>
                <Button title="Follow me" color= {myMode} onPress={addFollower}/>
            </View>
        </View>
    )
}

let myStyle = (mode) => StyleSheet.create({
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
        color:mode,
        fontSize:15,
    },
    pic:
    {
        flex:3,
        backgroundColor: mode,
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