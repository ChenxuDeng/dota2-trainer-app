import React from 'react';
import {Appbar} from "react-native-paper";

function AppBar({navigation,previous}) {
    return (
        <Appbar.Header style={{backgroundColor:'#0b0d0d',elevation:0}}>
            {previous?<Appbar.BackAction onPress={navigation.goBack}/>:null}
            {!previous?<Appbar.Content title={'Heroes'}/>:<Appbar.Content title={'Details'}/>}
        </Appbar.Header>
    );
}

export default AppBar;