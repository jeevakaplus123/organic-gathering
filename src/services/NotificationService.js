import Snackbar from "react-native-snackbar"

export const notifyError = (errorMsg = false) => Snackbar.show({
    action: {
        color: "white",
        title: "✕"
    },
    backgroundColor: "red",
    duration: 5000,
    title: errorMsg ? errorMsg : "server failed"
})

export const notifySuccess = (info, delay = 0) => setTimeout(() => Snackbar.show({
    action: {
        color: "white",
        title: "✕"
    },
    backgroundColor: "#009900",
    duration: 5000,
    title: info
}), delay)