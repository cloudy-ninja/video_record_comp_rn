import { StyleSheet } from 'react-native'
import constants from '../../constants';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: constants.Colors.white,
	},
	row: {
		padding: 10,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
})

export default styles