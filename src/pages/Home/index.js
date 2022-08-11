
import React, {useState} from 'react';
import * as Animatable from 'react-native-animatable';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

let timer=null;
let ss=0;
let mm=0;
let hh=0;


export default function Home() {
   const [numero,setNumero]= useState(0);
   const [botao,setBotao]= useState('INICIAR'); 
   const [ultimo,setUltimo]= useState(null); 
   const [color, setColor] = useState('rgba(25,94,43,0.6)');
   const [animation, setAnimation] = useState('shake');

   const AnimatableTouch = Animatable.createAnimatableComponent(TouchableOpacity );
  
  function iniciar(){
    
      if(timer!==null){

        clearInterval(timer);
         timer=null;   
         setBotao('RETORNAR');

       }else{
         timer= setInterval(()=>{
          ss++;
        
          if(ss == 60){
            ss=0;
            mm++;
          }
          if(mm == 60){
            mm=0;
            hh++;
          }
           let format= (hh < 10 ? '0' + hh : hh)+ ':'
           + ( mm < 10 ? '0' + mm : mm) + ':'
           +( ss < 10 ? '0' + ss : ss);
           
           setNumero(format);
           
       
         }, 1000);
        
         setBotao('PARAR');
         setColor('rgba(217,18,18,1)');
         setAnimation('pulse')
       }
    
      }
      function limpar(){
      
        if(timer!== null){
        clearInterval(timer);
        timer = null;
      }
         setUltimo(numero);
         setNumero(0);
         ss = 0;
         mm = 0;
         hh = 0;
         setBotao('INICIAR');
         setColor('rgba(25,94,43,0.6)');
         setAnimation('shake');
      
      }
   

 return (
   <View style={styles.container}>
    
       <Text style={styles.cronometro}>{numero ? numero : '00:00:00'}</Text>
       
       <View style={styles.areaBtn}>
       <AnimatableTouch style={[styles.button,{backgroundColor:color}]}  
       animation={animation} iterationDelay={1000} iterationCount='infinite' 
       onPress={iniciar}>

           <Text style={styles.buttonText}>{botao}</Text>

       </AnimatableTouch>
       
       <TouchableOpacity style={[styles.button,{backgroundColor:'#040303'}]} onPress={limpar}>
           <Text style={styles.buttonText} >LIMPAR</Text>
       </TouchableOpacity>
      
       </View>
       <View style={styles.areaTimers}>
       <Text style={styles.ultimoTime}>{ultimo? 'Último tempo : ' + ultimo : ''}</Text>
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#4b5945',
    alignItems:'center',
    padding: 15
  },
  cronometro:{
    fontSize:45,
    color: '#FFF',
    fontWeight:'bold',
    marginTop:'15%'
  },
  areaBtn:{
    flexDirection:'row',
    justifyContent:"space-between",
    marginTop:'15%',
    width: '100%',
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    height: 110,
    width: 110,
    borderRadius:55,  
  },
  buttonText:{
    fontSize:20,
    color:'#FFF'
  },
  areaTimers:{
    marginTop:'15%'
  },
  ultimoTime:{
    fontSize:20,
    color:'#FFF'
  }

});
