import { Pressable, SafeAreaView, View,Text ,Image, TextInput} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
const ViewBank = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:'1'}}>
                <View style={{flex:1,height:'150px',flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#2C48DD'}}>
                    <Pressable onPress={()=>navigation.navigate('TrangChu')} style={{marginLeft:'20px'}}><AntDesign name="left" size={30} color="white" /></Pressable>
                    <Text style={{fontSize:'20px', color:'white'}}>Chuyển tiền</Text>
                    <Pressable onPress={()=>navigation.navigate('TrangChu')} style={{marginRight:'20px'}}><AntDesign name="home" size={30} color="white" /></Pressable>
                </View>
                <View style={{flex:3,height:'700px',backgroundColor:'#F5F5F5'}}>
                    <View style={{flexDirection:'row', justifyContent:'space-evenly',marginTop:'10px'}}>
                        <Pressable style={{width:'150px',alignItems:'center',flexDirection:'row', height:'70px', backgroundColor:'white',borderRadius:'10px'}}>
                            <MaterialCommunityIcons style={{marginLeft:'10px',marginRight:'20px'}} name="qrcode-scan" size={30} color="black" />
                            <Text style={{fontSize:'20px'}}>Quét QR</Text>
                        </Pressable>
                        <Pressable style={{width:'150px',alignItems:'center',flexDirection:'row', height:'70px', backgroundColor:'white',borderRadius:'10px'}}>
                            <Image 
                            style={{width:'30px',height:'30px',marginLeft:'10px',marginRight:'20px'}}
                            source={require('/assets/gd.png')}/>
                            <Text style={{fontSize:'20px'}}>Giao dịch tách lệnh</Text>
                        </Pressable>
                    </View>
                    <View style={{marginLeft:'30px',top:'20px'}}>
                        <Pressable 
                        onPress={()=>{navigation.navigate('Bank')}}
                        style={{width:'330px',alignItems:'center',flexDirection:'row', height:'70px', backgroundColor:'white',borderRadius:'10px'}}>
                             <Entypo style={{marginLeft:'10px', marginRight:'20px'}} name="add-user" size={30} color="black" />
                            <Text>Người thụ hưởng mới</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={{flex:1, marginLeft:'30px',flexDirection:'row',justifyContent:'space-around'}}>
                    <Pressable style={{width:'80px',alignItems:'center',height:'40px',justifyContent:'center',backgroundColor:'white',borderRadius:'15px'}}>
                        <Text style={{fontSize:'16px'}}>STK đã lưu</Text>
                    </Pressable>
                    <Pressable style={{width:'80px',alignItems:'center',justifyContent:'center',height:'40px',backgroundColor:'white',borderRadius:'15px'}}>
                        <Text style={{fontSize:'16px'}}>Gần đây</Text>
                    </Pressable>
                    <Pressable style={{width:'120px',alignItems:'center',justifyContent:'center',height:'40px',backgroundColor:'white',borderRadius:'15px'}}>
                        <Text style={{fontSize:'16px'}}>Mãu giao dịch</Text>
                    </Pressable>
                </View>
                <View style={{flex:2}}>
                    <Pressable style={{flexDirection:'row',borderRadius:'5px',alignItems:'center',backgroundColor:'gray',justifyContent:'space-evenly',width:'350px',marginLeft:'30px',height:'50px'}}>
                        <AntDesign name="search1" size={30} color="black" />
                        <TextInput style={{fontSize:'17px',marginLeft:'20px',height:'50px',width:'100%',borderColor:'none'}}
                         placeholder="Tìm tên/STK người thụ hưởng"
                         keyboardType="numeric"
                        />
                    </Pressable>
                </View>
                <View style={{flex:'3'}}>

                </View>
        </SafeAreaView>
    )
}
export default ViewBank;