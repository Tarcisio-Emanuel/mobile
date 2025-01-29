import React, {useContext} from "react";
import { Text, View, Button } from "react-native";

import { AuthContext } from "../../context/AuthContext";


export default function Dashboard(){

    const {signOut} = useContext(AuthContext)

    return(
        <View>
            <Text>Dashboard</Text>
            <Button
            title="Sair do app"
            onPress={signOut}
            />
        </View>
    )
}