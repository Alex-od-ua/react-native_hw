import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 16,
        flex: 1, 
    },   
    contentImg: {
        width: '100%',
        height: '30%',
        backgroundColor: '#F6F6F6',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E8E8E8",  
        marginBottom: 8,
        position: "relative",
    },  
    image: {
        top: 4,
        left: 3,
        position: "absolute",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E8E8E8",
    },
    cameraWrap: {
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
    },  
    underText: {
      marginTop: 10,
      fontSize: 16,
      color: "#BDBDBD",
      alignSelf: "flex-start",
    },
    addPostForm: {
        flex: 3,
    },
    input: {
        height: 50,
        borderRadius: 8,
        padding: 16,
        fontSize: 16,
        lineHeight: 19,
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 2,
    },
    addBtn: {
        borderWidth: 1,
        borderColor: "transparent",
        backgroundColor: '#E8E8E8',
        height: 50,
        width: 343, 
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
    },
    addBtnActive:{
        backgroundColor: '#FF6C00',
        height: 50,
        width: 343, 
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        marginTop: 44,
      },
    addText: {
        color: '#BDBDBD',
        fontSize: 16, 
    },
     deleteBtn: {
        marginTop: 12,
        width: 70,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#F6F6F6",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 132,
    },
  });

  export const {deleteBtn, addText, addBtnActive, addBtn, input, image, addPostForm, cameraWrap, underText, contentImg, container} = styles;