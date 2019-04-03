
import React, { Component } from 'react';
import {Image, ScrollView,StatusBar,View,Text,StyleSheet} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Container,Thumbnail, Footer, FooterTab, Button, Spinner, Icon ,Fab} from 'native-base';
import { DrawerNavigator,StackNavigator,TabNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2


import ProfileScreen from './Components/Component1/ProfileScreen';
import ListScreen from './Components/Component1/ListScreen';
import SideBar from './Components/Component1/SideBar';
import MomentsScreen from './Components/Component1/MomentsScreen';
import HighlightsScreen from './Components/Component1/HighlightsScreen';


import NotificationScreen from  "./Components/Component1/NotificationScreen.js";
import MessageScreen from  './Components/Component1/MessageScreen';
import SearchBarActivity from  './Components/Component1/SearchBarActivity';



import ForCard from './Components/Component1/ForCard';

 class HomeScreen extends React.Component{

   static navigationOptions = {
     drawerLabel: ()=> null,
       tabBarIcon:({tintColor}) => (
         <Image
        source={require('./images/ios7-home.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />

    ),
  };

  constructor(props){
    super(props);
    this.state ={
      isLoading: true,
      conectedUser: [],
      userList:[]
    }
  }

  render() {
    let content = this.loadCard();

    return (
      <Container>
      <Fab
      direction="up"
      containerStyle={{ bottom:60}}
      style={{ backgroundColor: '#4286f4' }}
      position="bottomRight"
      >
        <Icon name="logo-twitter" />
      </Fab>
       <ScrollView>
       {
         content
       }
       </ScrollView>
       <Footer >
           <FooterTab style={{backgroundColor:'#fff'}}>
             <Button light >
               <Text>ALL</Text>
             </Button>
             <Button light>
               <Text>MENTIONS</Text>
             </Button>
             <Button light>
               <Icon name="settings" />
             </Button>
           </FooterTab>
         </Footer>
      </Container>
              );
  }

  componentWillMount(){
    this.loadUsers()
  }

  loadUsers(){

    fetch('https://randomuser.me/api/?results=50')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        userList: responseJson.results,
        isLoading:false,
      });
    })
    .catch((error) => {
      console.error(error);
    });

    fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        conectedUser: responseJson.results[0],
      });
    })
    .catch((error) => {
      console.error(error);
    });

  }

  loadCard(){

    if (this.state.isLoading) {
      return <Spinner color="gray"/>
    }

    return this.state.userList.map(function(user){
        return (<ForCard avatar={user.picture.thumbnail} name={user.name.first +' '+ user.name.last}></ForCard>)
    })
  }


}


      const styles = StyleSheet.create({
      icon: {
        width: 26,
        height: 26,
      },
});

//TabNavigator section.
const MainScreenNavigator = TabNavigator(
  {
    Home: { screen: HomeScreen },
    Search: { screen: SearchBarActivity,
              navigationOptions: {
                 headerTitle: <SearchBar round lightTheme
                                   placeholder='Search Twitter'
                                   containerStyle={{width: '100%', backgroundColor:'#fff'}}/>,


                 tabBarIcon:({tintColor}) => (
                   <Image
                  source={require('./images/ios7-search.png')}
                  style={[styles.icon, {tintColor: tintColor}]}
                />

              ),
            },
     },
    NotificationScreen: { screen: NotificationScreen,
      navigationOptions : {
          headerTitle: 'Notifications',
          tabBarIcon:({tintColor}) => (
            <Image
           source={require('./images/ios7-bell.png')}
           style={[styles.icon, {tintColor: tintColor}]}
         />

       ),
     },
     },
    Messages:{screen:MessageScreen,
      navigationOptions : {
          headerTitle: 'Messages',
          tabBarIcon:({tintColor}) => (
            <Image
           source={require('./images/android-mail.png')}
           style={[styles.icon, {tintColor: tintColor}]}
         />

       ),
     },
    }
  },
  {
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#428ff4',
      inactiveTintColor:'tintColor',
      activeBackgroundColor:'#fff',
      inactiveBackgroundColor: '#fff',
      showIcon: true,
      showLabel:false,
      style: {
      backgroundColor: '#fff',
      },
    },
  }
);

const Stack = StackNavigator({
                Home: {
                  screen:MainScreenNavigator,
                  navigationOptions:({navigation}) =>({
                    title:'Home',
                    headerLeft: <DrawerButton navigation={navigation} />,
                    headerStyle: {
                      backgroundColor: '#fff',
                      elevation:0,
                    },
                  }),
                },
              });


const DrawerButton=({navigation})=>(
  <Button transparent
   onPress={() => navigation.navigate("DrawerOpen")}
  >
  <Thumbnail small source={{uri: 'https://randomuser.me/api/portraits/thumb/men/65.jpg'}} />
  </Button>
);



const RootDrawer = DrawerNavigator(
      {
        Home:{
          screen:Stack,
        },
              Profile: {
                screen: ProfileScreen,
              },
              List: {
                screen: ListScreen,
              },
              Moments: {
                screen: MomentsScreen,
              },
              HighLights: {
                screen: HighlightsScreen,
              },
      },
          {
            drawerOpenRoute: 'DrawerOpen',
            drawerCloseRoute: 'DrawerClose',
            drawerToggleRoute: 'DrawerToggle',
            contentComponent: props => <SideBar {...props} />
          }

          );


            export default RootDrawer;
