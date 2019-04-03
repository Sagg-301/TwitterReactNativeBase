import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem,Thumbnail,Icon, Card,CardItem,Body,Footer,FooterTab,Button,Left,Right} from "native-base";


const datas = [
  {
    name:"Profile",
    route:"Profile",
    icon:"ios-person"
  },
  {
    name:"List",
    route:"List",
    icon:"ios-list-box"
  },
  {
    name:"Moments",
    route:"Moments",
    icon:"ios-flash"
  },
  {
    name:"HighLights",
    route:"HighLights",
    icon:"ios-paper"
  },
  

];


export default class SideBar extends React.Component {

  render() {
    return (
      <Container>
        <Content>
        <Card >
            <CardItem>
              <Body style={{ alignItems:'center', justifyContent:'center' }}>
                <Thumbnail source={{uri: 'https://randomuser.me/api/portraits/med/men/65.jpg'}} />
              </Body>
              <Body>  
                <Text style={{fontWeight: 'bold'}}>Sergio Garcia</Text>
                <Text note>@Sergio_agg301</Text>
                <Text style={{fontWeight: 'bold'}}>
                690
                <Text note > Following </Text>
                <Text>1.2k</Text>
                <Text note> Follwers</Text>
                </Text>
              </Body>
            </CardItem>
            
            </Card>

            <List
            dataArray={datas}
            renderRow={data =>

                  <ListItem
                      button
                      onPress={() => this.props.navigation.navigate(data.route)}>

                    <Left>
                      <Icon
                        active
                        name={data.icon}
                        style={{ color: "#000", fontSize: 26, width: 30 }}
                      />
                      <Text >
                        {data.name}
                      </Text>

                    </Left>
                    </ListItem>
                  }
            />
            <List>
                <ListItem>
                    <Text>Settings and Privacy</Text>
                </ListItem>
                <ListItem>
                    <Text>Help Centre</Text>
                </ListItem>
            </List>
      </Content>
    </Container>
      );
    }
  }
