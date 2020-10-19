import React from 'react';
import { View, Switch } from 'react-native'

const switch_logic = (props) => {
    return (
        <View>
            <Switch onValueChange={props.turn_dial} value={props.switch_counter} />
        </View>

    )

}

export default switch_logic;
