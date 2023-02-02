import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../redux/actions/companiesAction';

export function Companies() {

    const companies = useSelector((state) => state.companies.companies);
    const dispatch = useDispatch();

    return (
        <View style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            {companies.map(company => {
                return <Text key={company}>{company}</Text>
            })}
            <View style={{marginTop: 30}} />
            <TouchableOpacity style={{backgroundColor: 'green', padding: 20}} onPress={() => dispatch(add('Company 4'))}>
                <Text style={{color: '#fff'}}>Add company</Text>
            </TouchableOpacity>
        </View>
    )
}