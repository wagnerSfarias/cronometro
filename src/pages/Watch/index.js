import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import { format } from 'date-fns';
import {ptBR} from 'date-fns/locale';

let ss=0;
let mm=0;
let hh=0;

export default function Watch() {
  
   const[time, setTime] = useState('');
   const days =['Domingo','Segunda','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
   const day = format(new Date(),'dd')
   const month = format(new Date(),'MMMM',{locale:ptBR})
   const year = format(new Date(),'yyyy')
   const week = days[new Date().getDay()]
  
   const date = `${week}, ${day} de ${month} de ${year}`; 
 
   ss= new Date().getSeconds();
   mm = new Date().getMinutes();
   hh = new Date().getHours();



   useEffect(()=>{
    
       setTime('')

    setInterval(()=>{
            ss++;
            
            if(ss == 60){
                ss=0;
                mm++;
            }
            if(mm == 60){
                mm=0;
                hh++;
            }
            if(hh==24){
                ss=0;
                mm=0;
                hh=0;
            }
            let format= (hh < 10 ? '0' + hh : hh)+ ':'
            + ( mm < 10 ? '0' + mm : mm) + ':'
            +( ss < 10 ? '0' + ss : ss);
       
       setTime(format);      
      
     }, 1000);

   
  },[])



 return (
   <View style={styles.container}>
      
       <View style={styles.viewWatch}>
           <Text style={styles.watch}>{time}</Text> 
        </View>        
        
        <Text style={styles.date}>{date}</Text>
     
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
  viewWatch:{
     marginTop:'10%',
     padding: 20,
     width: '80%',
     alignItems:'center',
     borderWidth:2,
     borderColor:'#FFF',
     borderRadius:10  
  },
  watch:{
    fontSize:45,
    color: '#FFF',
    fontWeight:'bold',
  },
  date:{
    marginTop:'15%',
    fontSize:30,
    color: '#000',
    fontWeight:'bold',
    textAlign:'center'
  }

});