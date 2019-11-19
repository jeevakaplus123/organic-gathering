import style from "./Link.stylesheet"

const Link = ({ onPress, ...props }) => 
<TouchableOpacity activeOpacity={0.6} onPress={onPress}>
    <Text style={style.a} {...props} />
</TouchableOpacity>

export default Link