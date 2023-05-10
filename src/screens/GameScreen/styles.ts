import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        textAlign: "center",
        paddingTop: 50,
        backgroundColor: colors.primary,
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 20,
        width: "100%"
    },

    textTitle: {
        color: colors.white,
        fontFamily: "Prompt-Regular",
        fontSize: 15,
    },

    numberSelected: {
        fontSize: 30,
        fontFamily: "Prompt-Regular",
        color: colors.white,
    },

    subtitle: {
        color: colors.black,
        fontFamily: "Prompt-Regular",
        textAlign: "center",
        fontSize: 16,
    },

    buttonHigh: {
        width: 100,
        height: 35,
        justifyContent: "center",
        backgroundColor: colors.disableColor,
        alignItems: "center",
        borderRadius: 20,
    },

    buttonLower: {
        width: 100,
        height: 35,
        justifyContent: "center",
        backgroundColor: colors.actionColor,
        alignItems: "center",
        borderRadius: 20,
    }
});

export default styles;