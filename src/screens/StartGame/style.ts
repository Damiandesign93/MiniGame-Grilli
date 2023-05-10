import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        paddingTop: 50,
        backgroundColor: colors.primary,
    },

    containerConfirm: {
        margin: 10,
        alignItems: "center",
        justifyContent: 'center'

    },

    subtitle: {
        color: colors.black,
        fontFamily: "Prompt-Regular"
    },

    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 20,
    },

    buttonContainerConfirm: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 15,
        marginTop: 10,
    },

    cleanButton: {
        width: 100,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.disableColor,
        borderRadius: 10
    },

    confirmButton: {
        width: 100,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.actionColor,
        borderRadius: 10,
    },

    startGameButton: {
        width: 100,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.actionColor,
        borderRadius: 10,
    },

    selectedCard: {
        marginTop: 40,
        width: "70%",
    },
    buttonText: {
        color: colors.white,
        fontSize: 15,
        fontFamily: "Prompt-Regular"
    },

    textSelectedNumber: {
        fontSize: 50,
        fontFamily: "Prompt-Regular"
    },
});

export default styles;