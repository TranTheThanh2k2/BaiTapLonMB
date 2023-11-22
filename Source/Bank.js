import { useState } from "react";
import { View ,TextInput, Pressable,Text} from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Bank = ({navigation}) => {
    const [nganHang , setNganHang] = useState('');
    const [soTK,setSoTK] = useState('');
    const [tenTK,setTenTK] = useState('');
    const [soTien,setSoTien] = useState('');
    const [noiDung,setNoiDung] = useState('');
    return (
        <View style={{flex:1}}>
            <View style={{flex:1,height:'150px',flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#2C48DD'}}>
                    <Pressable style={{marginLeft:'20px'}}><AntDesign name="left" size={30} color="white" /></Pressable>
                    <Text style={{fontSize:'20px', color:'white'}}>Chuyển tiền</Text>
                    <Pressable style={{marginRight:'20px'}}><AntDesign name="home" size={30} color="white" /></Pressable>
            </View>
            <View style={{flex:5}}>
                <View> 
                    <Text>Số Tài Khoản</Text>
                    <TextInput
                    style={{width:'350px',border:'1px solid black', height:'50px', borderRadius:'10px',marginLeft:'15px'}}
                    onChangeText={(tk)=>setSoTK(tk)}
                    value= {soTK}
                    placeholder="Nhập số tài khoản"
                    />
                </View>
                <View> 
                    <Text>Ngân hàng</Text>
                    <TextInput
                    style={{width:'350px',border:'1px solid black', height:'50px', borderRadius:'10px',marginLeft:'15px'}}
                    onChangeText={(nganhang)=>setNganHang(nganhang)}
                    value= {nganHang}
                    placeholder="Nhập ngân hàng"
                    />
                </View>
                <View> 
                    <Text>Tên tài khoảng</Text>
                    <TextInput
                    style={{width:'350px',border:'1px solid black', height:'50px', borderRadius:'10px',marginLeft:'15px'}}
                    onChangeText={(ten)=>setTenTK(ten)}
                    value= {tenTK}
                    placeholder="Nhập tên tài khoản"
                    />
                </View>
                <View> 
                    <Text>Số tiền</Text>
                    <TextInput
                    style={{width:'350px',border:'1px solid black', height:'50px', borderRadius:'10px',marginLeft:'15px'}}
                    onChangeText={(tien)=>setSoTien(tien)}
                    value= {soTien}
                    placeholder="Nhập số tiền"
                    />
                </View>
                <View> 
                    <Text>Nội dung chuyển tiền</Text>
                    <TextInput
                    style={{width:'350px',border:'1px solid black', height:'50px', borderRadius:'10px',marginLeft:'15px'}}
                    onChangeText={(noidung)=>setNoiDung(noidung)}
                    value= {noiDung}
                    placeholder="Nhập số tiền"
                    />
                </View>
            </View>
            <Pressable 
            onPress={()=>navigation.navigate('BankSucces',{soTK,tenTK,nganHang,soTien,noiDung})}
            style={{backgroundColor:'blue',width:'350px',marginLeft:'20px',borderRadius:'10px',justifyContent:'center',height:'50px',alignItems:'center',bottom:'20px'}}>
                <Text style={{color:'white',fontSize:'25px'}}>Tiếp tục</Text>
            </Pressable>
        </View>
    )
}
export default Bank;