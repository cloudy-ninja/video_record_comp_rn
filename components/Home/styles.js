import { StyleSheet } from 'react-native'
import constants from '../../constants';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
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
	msgInput: {
		width: '85%',
		height: 40,
		paddingHorizontal: 15,
		paddingVertical: 5,
		alignItems: 'flex-start',
		borderColor: constants.Colors.black,
		borderWidth: 0.5,
		borderRadius: 20,
	},
	recordingStatus: {
		width: 20,
		height: 20,
		borderRadius: 10,
		backgroundColor: constants.Colors.pink,
		marginRight: 9,
	},
	cancelContainer: {
		height: '100%',
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	timeContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	normalRecordOuterContainer: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: constants.Colors.purple,
		justifyContent: 'center',
		alignItems: 'center',
	},
	normalRecordInnerContainer: {
		width: 30,
		height: 30,
		borderRadius: 15,
		borderStyle: 'dotted',
		borderWidth: 1,
		borderColor: constants.Colors.white,
		backgroundColor: constants.Colors.purple,
		justifyContent: 'center',
		alignItems: 'center',
	},
	recordingOuterContainer: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: constants.Colors.purple,
		justifyContent: 'center',
		alignItems: 'center',
	},
	recordingInnerContainer: {
		width: 45,
		height: 45,
		borderRadius: 22.5,
		borderStyle: 'dotted',
		borderWidth: 1,
		borderColor: constants.Colors.white,
		backgroundColor: constants.Colors.purple,
		justifyContent: 'center',
		alignItems: 'center',
	},
	previewContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	preview: {
		width: 150,
		height: 150,
		borderRadius: 75,
		backgroundColor: constants.Colors.black,
	}
})

export default styles