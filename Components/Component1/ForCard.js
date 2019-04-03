import React, { Component } from 'react';
import {Image} from 'react-native';
import { Container,Card,CardItem,  Thumbnail, ListItem,List ,Button, Content, Left, Right, Body, Icon, Text,Badge } from 'native-base';
export default class ForCard extends React.Component{

	render()
	{
		return(

		<Content>
		<Body>
		<Card style={{ flex:1, margin:'20%' }}>


			 <List >
			       	<ListItem avatar >
			              <Left>
			                <Thumbnail source={{ uri: this.props.avatar }} />
			             </Left>
			                     <Body>
			                      <Text style={{fontWeight: 'bold'}}>
			                        {this.props.name}
            									<Icon name="ios-checkmark-circle" style={{ fontSize: 15, color: "blue", lineHeight: 20 }}/>
			                        <Text note> @innovative </Text>
			                        <Text note>3:43 pm <Icon name="ios-arrow-down" style={{ fontSize: 15, color: "#000", lineHeight: 20 }}/>
															</Text>
			                      </Text>
			                      <Text >One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin</Text>
			              </Body>


			            </ListItem>
			        </List>
			         <Body>
			       	<CardItem cardBody>
			        </CardItem>
			            <CardItem>
			              <Body>
			                <Button transparent>
			                  <Icon active name="chatbubbles" />
			                  <Text>16</Text>
			                </Button>
			              </Body>
			              <Body>
			                <Button transparent>
			                  <Icon active name="git-compare" />
			                  <Text>4</Text>
			                </Button>
			              </Body>

			               <Body>
				                <Button transparent>
				                  <Icon active name="heart" />

				                  <Text> 40 </Text>
				                </Button>
				          </Body>

			              <Body>

				            <Button transparent>
				              	<Icon active name="mail" />
				           	</Button>

			              </Body>
			            </CardItem>

        			</Body>

        			</Card>
        			</Body>

        		</Content>



			);
	}

}
