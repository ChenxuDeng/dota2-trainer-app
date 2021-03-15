import React from 'react';
import {Image, ScrollView, StyleSheet, View} from "react-native";
import {Text,Divider} from "react-native-paper";

function Details(props) {
    const style=StyleSheet.create({
        screen:{
            flex:1,
            backgroundColor:'#131515',
            padding:10
        },
        text:{
            fontSize:20
        },
        frame:{
            height:124,
            width:124,
            borderWidth:1
        },
        image:{
            height:'100%',
            width:'100%'
        },
        smallFrame:{
            height:36,
            width:36,
            borderWidth:1,
            borderRadius:50
        },
        status:{
            flexDirection:'row',
            alignItems:'center',
            marginLeft:12,
            marginBottom:'auto'
        },
        statusText:{
            fontSize: 16,
            fontWeight:'bold',
            color:'lightgrey',
            marginLeft:10
        },
        topIntroduction:{
            flexDirection: 'row',

        },
        skillFrame:{
            height:100,
            width:100,
            borderWidth:1
        },
        skill:{
            marginTop:20,
            flexDirection:'row',
            alignItems: 'center'
        },
        tips:{
            borderWidth:1,
            borderColor:'white',
            marginBottom: 20,
            marginTop: 10,
            padding:10
        },
        tipsTitle:{
            textAlign:'center',
            fontSize:17,
            fontWeight: 'bold',
            color:'white'
        },
        tipsText:{
            fontSize:15,
            color:'white'
        }
    })

    return (
        <ScrollView style={style.screen}>
            <View style={style.topIntroduction}>
                <View style={style.frame}>
                    <Image source={{uri:"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/sven_vert.jpg?v=6406837"}} style={style.image}/>
                </View>
                <View>
                    <View style={style.status}>
                        <View style={style.smallFrame}>
                            <Image source={{uri:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heropedia/overviewicon_int.png'}} style={style.image}/>
                        </View>
                        <View>
                            <Text style={style.statusText}>
                                16 + 1.30
                            </Text>
                        </View>
                    </View>
                    <View style={style.status}>
                        <View style={style.smallFrame}>
                            <Image source={{uri:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heropedia/overviewicon_agi.png'}} style={style.image}/>
                        </View>
                        <View>
                            <Text style={style.statusText}>
                                21 + 2.00
                            </Text>
                        </View>
                    </View>
                    <View style={style.status}>
                        <View style={style.smallFrame}>
                            <Image source={{uri:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heropedia/overviewicon_str.png'}} style={style.image}/>
                        </View>
                        <View>
                            <Text style={style.statusText}>
                                22 + 3.20
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{marginLeft:10}}>
                    <View style={style.status}>
                        <View style={{height:36, width:36}}>
                            <Image source={{uri:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heropedia/overviewicon_attack.png'}} style={style.image}/>
                        </View>
                        <View>
                            <Text style={style.statusText}>
                                41 - 43
                            </Text>
                        </View>
                    </View>
                    <View style={style.status}>
                        <View style={{height:36, width:36}}>
                            <Image source={{uri:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heropedia/overviewicon_defense.png'}} style={style.image}/>
                        </View>
                        <View>
                            <Text style={style.statusText}>
                                325
                            </Text>
                        </View>
                    </View>
                    <View style={style.status}>
                        <View style={{height:36, width:36}}>
                            <Image source={{uri:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heropedia/overviewicon_speed.png'}} style={style.image}/>
                        </View>
                        <View>
                            <Text style={style.statusText}>
                                3.94
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <Text style={{textAlign:'center',fontSize:17,color:'white',fontWeight:'bold'}}>
                Sven
            </Text>
            <Divider style={{backgroundColor:'white'}}/>
            <View style={style.skill}>
                <View style={style.skillFrame}>
                    <Image source={{uri:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/sven_storm_bolt_hp1.png?v=6406837'}} style={style.image}/>
                </View>
                <View style={{width:280,marginLeft:16}}>
                    <Text style={{fontSize:17,color:'lightgrey',fontWeight:'bold'}}>
                        Storm Hammer
                    </Text>
                    <Text style={{color:'lightgrey'}}>
                        Sven unleashes his magical gauntlet that deals damage and stuns enemy units in a small area around the target.
                    </Text>
                </View>
            </View>
            <View style={style.skill}>
                <View style={style.skillFrame}>
                    <Image source={{uri:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/sven_great_cleave_hp1.png?v=6406837'}} style={style.image}/>
                </View>
                <View style={{width:280,marginLeft:16}}>
                    <Text style={{fontSize:17,color:'lightgrey',fontWeight:'bold'}}>
                        Great Cleave
                    </Text>
                    <Text style={{color:'lightgrey'}}>
                        Sven strikes with great force, cleaving all nearby enemy units with his attack.
                    </Text>
                </View>
            </View>
            <View style={style.skill}>
                <View style={style.skillFrame}>
                    <Image source={{uri:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/sven_warcry_hp1.png?v=6406837'}} style={style.image}/>
                </View>
                <View style={{width:280,marginLeft:16}}>
                    <Text style={{fontSize:17,color:'lightgrey',fontWeight:'bold'}}>
                        Warcry
                    </Text>
                    <Text style={{color:'lightgrey'}}>
                        Sven's Warcry heartens his allied heroes for battle, increasing their armor and movement speed. Lasts %duration% seconds.
                    </Text>
                </View>
            </View>
            <View style={style.skill}>
                <View style={style.skillFrame}>
                    <Image source={{uri:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/sven_gods_strength_hp1.png?v=6406837'}} style={style.image}/>
                </View>
                <View style={{width:280,marginLeft:16}}>
                    <Text style={{fontSize:17,color:'lightgrey',fontWeight:'bold'}}>
                        God's Strength
                    </Text>
                    <Text style={{color:'lightgrey'}}>
                        Sven channels his rogue strength, granting bonus damage for %abilityduration% seconds.
                    </Text>
                </View>
            </View>
            <View style={style.tips}>
                <Text style={style.tipsTitle}>
                    Tips
                </Text>
                <View style={{justifyContent:'center',flex:1}}>
                    <Text style={style.tipsText}>
                        Sven's hammer can be cancelled. Facing heroes like Jugg, Sand king and Mirana, it's very easy to trick them to use their escape skills.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default Details;