import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export function ListCompanies( { navigation } ){

    const companies = useSelector((state) => state.companies.companies);

    return (
        <View style={{height:'100%', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{backgroundColor: '#AAFF00'}}>
                {companies.map((company) => {
                    return <Text key={company.id} style={styles.text}>{company.name}</Text>
                })}
            </View>
            <TouchableOpacity  style={{backgroundColor: 'green', padding: 20, marginTop: 30}} onPress={() => navigation.navigate('Companies')}>
                <Text>Companies</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        padding: 5,
    }
})