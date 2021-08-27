import { Utils } from "expo-ui-kit";

const theme = {
    COLORS: {
        //ใส่สีตรงนี้
        primary: "red",
    }
}

export default Utils.mergeTheme(Utils.theme, theme);