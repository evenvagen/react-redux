import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../redux/actions/companiesAction';

export function Companies( { navigation } ) {

    const companies = useSelector((state) => state.companies.companies);
    const dispatch = useDispatch();

    return (
        <View style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            {companies.map(company => {
                return <Text key={company.id}>{company.name}</Text>
            })}
            <View style={{marginTop: 30}} />
            <TouchableOpacity style={{backgroundColor: 'green', padding: 20}} onPress={() => dispatch(add({id: 4, name: 'Company 4'}))}>
                <Text style={{color: '#fff'}}>Add company</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor: 'green', padding: 20, marginTop: 30}} onPress={() => navigation.navigate('ListCompanies')}>
                <Text>Companies</Text>
            </TouchableOpacity>
        </View>
    )
}