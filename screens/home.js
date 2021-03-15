import React from 'react';
import {View, StyleSheet, Image, ScrollView, TouchableOpacity} from "react-native";
import {Button, Text} from "react-native-paper";

function Home(props) {
    const style=StyleSheet.create({
        screen:{
            flex:1,
            backgroundColor:'#131515',
            padding:10
        },
        text:{
            fontSize:20
        },
        image:{
            height:'100%',
            width:'100%'
        },
        frame:{
            height:124,
            width:124,
            borderWidth:1
        }
    })
    return (
        <ScrollView style={style.screen}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity onPress={()=>{props.navigation.navigate('Details')}}>
                    <View style={style.frame}>
                        <Image source={{uri:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/sven_vert.jpg?v=6406837"}} style={style.image}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{props.navigation.navigate('Details')}}>
                    <View style={style.frame}>
                        <Image source={{uri:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/drow_ranger_vert.jpg?v=6406837"}} style={style.image}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{props.navigation.navigate('Details')}}>
                    <View style={style.frame}>
                        <Image source={{uri:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/juggernaut_vert.jpg?v=6406837"}} style={style.image}/>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <TouchableOpacity onPress={()=>{props.navigation.navigate('Details')}}>
                    <View style={style.frame}>
                        <Image source={{uri:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/mirana_vert.jpg?v=6406837"}} style={style.image}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{props.navigation.navigate('Details')}}>
                    <View style={style.frame}>
                        <Image source={{uri:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/morphling_vert.jpg?v=6406837"}} style={style.image}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{props.navigation.navigate('Details')}}>
                    <View style={style.frame}>
                        <Image source={{uri:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/phantom_lancer_vert.jpg?v=6406837"}} style={style.image}/>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <TouchableOpacity onPress={()=>{props.navigation.navigate('Details')}}>
                    <View style={style.frame}>
                        <Image source={{uri:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/vengefulspirit_vert.jpg?v=6406837"}} style={style.image}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{props.navigation.navigate('Details')}}>
                    <View style={style.frame}>
                        <Image source={{uri:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/riki_vert.jpg?v=6406837"}} style={style.image}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{props.navigation.navigate('Details')}}>
                    <View style={style.frame}>
                        <Image source={{uri:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/sniper_vert.jpg?v=6406837"}} style={style.image}/>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <TouchableOpacity onPress={()=>{props.navigation.navigate('Details')}}>
                    <View style={style.frame}>
                        <Image source={{uri:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/templar_assassin_vert.jpg?v=6406837"}} style={style.image}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{props.navigation.navigate('Details')}}>
                    <View style={style.frame}>
                        <Image source={{uri:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/luna_vert.jpg?v=6406837"}} style={style.image}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{props.navigation.navigate('Details')}}>
                    <View style={style.frame}>
                        <Image source={{uri:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/bounty_hunter_vert.jpg?v=6406837"}} style={style.image}/>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <TouchableOpacity onPress={()=>{props.navigation.navigate('Details')}}>
                    <View style={style.frame}>
                        <Image source={{uri:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/ursa_vert.jpg?v=6406837"}} style={style.image}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{props.navigation.navigate('Details')}}>
                    <View style={style.frame}>
                        <Image source={{uri:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/gyrocopter_vert.jpg?v=6406837"}} style={style.image}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{props.navigation.navigate('Details')}}>
                    <View style={style.frame}>
                        <Image source={{uri:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/lone_druid_vert.jpg?v=6406837"}} style={style.image}/>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default Home;