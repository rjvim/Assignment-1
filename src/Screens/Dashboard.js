import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, Dimensions,
  FlatList, TextInput, Platform, ImageBackground
} from 'react-native'

import ToolbarFooter from '../Style/ToolbarFooter';
import ToolbarMain from '../Style/ToolbarMain';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, useSafeArea } from 'react-native-gesture-handler';
import Images from "../Constant/Images";
import global_style from '../Style/GlobalStyle';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import Pie from 'react-native-pie'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { Chart, VerticalAxis, HorizontalAxis, Line } from 'react-native-responsive-linechart'

const data1 = [
  { x: -2, y: 6 },
  { x: -1, y: 6 },
  { x: 1, y: 7 },
  { x: 1, y: 7 },
  { x: 8, y: 12 },
  { x: 10, y: 14 },
]

const data2 = [
  { x: -2, y: 3 },
  { x: -1, y: 4 },
  { x: 1, y: 5 },
  { x: 1, y: 5 },
  { x: 8, y: 9 },
  { x: 10, y: 12 },

]

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCellIndex: 4,
      upcomingSipArray: [
        {
          month: 'Apr',
          date: '3',
          price: '₹ 2,500',
          title: 'Invesco India Gold Growth Direct...'
        },
        {
          month: 'Apr',
          date: '9',
          price: '₹ 3,000',
          title: 'Invesco India Gold Growth Direct...'
        }
      ],

      monthArray: [
        {
          month: '1m',
        },
        {
          month: '3m',
        },
        {
          month: '6m',
        },
        {
          month: '1y',
        },
        {
          month: '5y',
        },
      ]

    };
  }

  changeBackgroundColor = (item, index) => {
    this.setState({ selectedCellIndex: index })
  }

  render() {

    return (
      <SafeAreaView style={[global_style.Container]}>

        <View style={[global_style.Container]}>

          {/* toolbar */}

          <ToolbarMain global_navigation={this.props.navigation} param_title={"Dashboard"} />

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width: '100%', backgroundColor: '#fcfcfc', flex: 1 }}>

            <View style={{ width: '100%', backgroundColor: '#fcfcfc', }}>

              <View style={{
                width: '100%', flexDirection: 'row', backgroundColor: '#fcfcfc',
              }}>

                <View style={{ width: '50%', marginRight: 4, borderRadius: 5, backgroundColor: '#fff' }}>

                  <Text
                    style={{
                      fontFamily: "roboto-medium", fontSize: 14, color: '#63748D',
                      marginLeft: 10, textAlign: 'center', marginTop: 10
                    }}>
                    {'NIFTY'}
                  </Text>

                  <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>

                    <Text
                      style={{
                        fontFamily: "roboto-medium", fontSize: 14, color: '#393D54',
                      }}>
                      {'10417.30'}
                    </Text>

                    <Text
                      style={{
                        fontFamily: "roboto-medium", fontSize: 14, color: '#86E286', marginLeft: 10,
                        marginBottom: 10,
                      }}>
                      {"115.2 (+1.12%)"}
                    </Text>

                  </View>

                </View>


                <View style={{ width: '50%', marginRight: 4, borderRadius: 5, backgroundColor: '#fff' }}>

                  <Text
                    style={{
                      fontFamily: "roboto-medium", fontSize: 14, color: '#63748D',
                      marginLeft: 10, textAlign: 'center', marginTop: 10
                    }}>
                    {'SENSEX'}
                  </Text>

                  <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>

                    <Text
                      style={{
                        fontFamily: "roboto-medium", fontSize: 14, color: '#393D54',
                      }}>
                      {'35352.02'}
                    </Text>

                    <Text
                      style={{
                        fontFamily: "roboto-medium", fontSize: 14, color: '#86E286', marginLeft: 10,
                        marginBottom: 10,
                      }}>
                      {"436.22 (+1.25%)"}
                    </Text>

                  </View>

                </View>

              </View>


              <View style={{ width: '100%', borderRadius: 5, backgroundColor: '#fff', marginTop: 20 }}>

                <Text
                  style={{
                    fontFamily: "roboto-medium", fontSize: 14, color: '#98A2B0',
                    marginLeft: 10, textAlign: 'center', marginTop: 20
                  }}>
                  {'Value as of Today'}
                </Text>

                <Text
                  style={{
                    fontFamily: "roboto-medium", fontSize: 24, color: '#393D54',
                    marginLeft: 10, textAlign: 'center', marginTop: 5
                  }}>
                  {'₹ 2,56,846.23'}
                </Text>

                <View style={{ width: '100%', alignSelf: 'center', marginTop: 20 }}>

                  <View style={{ alignSelf: 'center', flexDirection: 'row' }}>

                    <View style={{ alignSelf: 'center', marginTop: 10, marginBottom: 15, marginHorizontal: 20 }}>

                      <Text
                        style={{
                          fontFamily: "roboto-regular", fontSize: 14, color: '#98A2B0', textAlign: 'center'
                        }}>
                        {'Invested'}
                      </Text>

                      <Text
                        style={{
                          fontFamily: "roboto-medium", fontSize: 14, color: '#393D54', marginTop: 5, textAlign: 'center'
                        }}>
                        {"₹ 2,50,000.00"}
                      </Text>

                    </View>

                    <View style={{ alignSelf: 'center', marginTop: 10, marginBottom: 15, marginHorizontal: 20 }}>

                      <Text
                        style={{
                          fontFamily: "roboto-regular", fontSize: 14, color: '#98A2B0', textAlign: 'center'
                        }}>
                        {'Unrealised Gain'}
                      </Text>

                      <Text
                        style={{
                          fontFamily: "roboto-medium", fontSize: 14, color: '#393D54', marginTop: 5, textAlign: 'center'
                        }}>
                        {"₹ 6,000.65"}
                      </Text>

                    </View>

                    <View style={{ alignSelf: 'center', marginTop: 10, marginBottom: 15, marginHorizontal: 20 }}>

                      <Text
                        style={{
                          fontFamily: "roboto-regular", fontSize: 14, color: '#98A2B0', textAlign: 'center'
                        }}>
                        {'Annual Returns'}
                      </Text>

                      <Text
                        style={{
                          fontFamily: "roboto-medium", fontSize: 14, color: '#393D54', marginTop: 5, textAlign: 'center'
                        }}>
                        {"3.52%"}
                      </Text>

                    </View>

                  </View>

                  <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 30, marginBottom: 20 }}>

                    <Text
                      style={{
                        fontFamily: "roboto-regular", fontSize: 14, color: '#3041A7', alignSelf: 'center',
                        textTransform: 'uppercase'
                      }}>
                      {"Portfolio Insights"}
                    </Text>

                    <Ionicons
                      name='chevron-forward-outline'
                      color='#3041A7'
                      size={22}
                      style={{ alignSelf: 'center', marginLeft: 5 }} />

                  </View>

                </View>

              </View>


              <View style={{
                width: '100%', borderRadius: 5, marginTop: 20,
                marginBottom: 10, backgroundColor: '#fff'
              }}>

                <Text
                  style={{
                    fontFamily: "roboto-medium", fontSize: 18, color: '#161F56',
                    marginTop: 15, marginLeft: 20,
                  }}>
                  {'Title'}
                </Text>

                <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 20, }}>

                  <View style={{ marginTop: 10, flexDirection: 'row' }}>

                    <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#54C8A9', marginLeft: 2 }}>

                    </View>

                    <Text
                      style={{
                        fontFamily: "roboto-medium", fontSize: 14, color: '#63748D', marginTop: -5, marginLeft: 15
                      }}>
                      {"Invested Amount"}
                    </Text>

                  </View>

                  <View style={{ marginTop: 10, flexDirection: 'row', marginLeft: 40, marginBottom: 20 }}>

                    <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#3041A7', marginLeft: 2 }}>

                    </View>

                    <Text
                      style={{
                        fontFamily: "roboto-medium", fontSize: 14, color: '#63748D', marginTop: -5, marginLeft: 15
                      }}>
                      {"Current Value"}
                    </Text>

                  </View>

                </View>

                <Chart
                  style={{ height: 200, width: '100%', backgroundColor: '#fff' }}
                  xDomain={{ min: 0, max: 10 }}
                  yDomain={{ min: 0, max: 20 }}
                  padding={{ left: 30, top: 10, bottom: 10, right: 30 }} >
                  <Line data={data1} smoothing="cubic-spline" theme={{ stroke: { color: '#3041A7', width: 3.5 } }} />
                  <Line data={data2} smoothing="cubic-spline" theme={{ stroke: { color: '#35D5AA', width: 3.5 } }} />

                </Chart>

                <FlatList
                  data={this.state.monthArray}
                  style={{ marginHorizontal: 15 }}
                  marginBottom={15}
                  horizontal
                  keyExtractor={(item, index) => index.toString()}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) =>

                    <TouchableOpacity
                      activeOpacity={global.activeOpacity}
                      onPress={() => this.changeBackgroundColor(item, index)}>

                      <View style={{ alignSelf: 'center', marginTop: 15, }}>

                        <View style={{
                          margin: 10, borderWidth: 1, paddingHorizontal: 20, paddingVertical: 5,
                          borderColor: this.state.selectedCellIndex == index ? '#fff' : '#ACACAC', borderRadius: 6,
                          backgroundColor: this.state.selectedCellIndex == index ? '#35D5AA' : '#fff'
                        }}>

                          <Text style={{
                            fontFamily: "roboto-medium", fontSize: 14,
                            color: this.state.selectedCellIndex == index ? '#fff' : '#ACACAC'
                          }}>
                            {item.month}
                          </Text>

                        </View>

                      </View>

                    </TouchableOpacity>
                  } />

              </View>

              <View style={{ backgroundColor: '#fff', marginTop: 10, }}>

                <Text
                  style={{
                    fontFamily: "roboto-medium", fontSize: 18, color: '#393D54', marginTop: 20, marginLeft: 20
                  }}>
                  {"Investment Allocation"}
                </Text>

                <View style={{
                  paddingVertical: 15, flexDirection: 'row', width: '100%',
                  justifyContent: 'space-between', marginHorizontal: 15
                }}>

                  <Pie
                    radius={60}
                    style={{ width: '40%' }}
                    innerRadius={45}
                    sections={[
                      {
                        percentage: 25,
                        color: '#F08526',
                      },
                      {
                        percentage: 15,
                        color: '#63748D',
                      },
                      {
                        percentage: 10,
                        color: '#86E286',
                      },
                      {
                        percentage: 50,
                        color: '#FFE47D',
                      },
                    ]}
                    strokeCap={'butt'} />

                  <View style={{ alignSelf: 'center', width: '60%' }}>

                    <View style={{ flexDirection: 'row', }}>

                      <View style={{ width: '50%', flexDirection: 'row' }}>
                        <Text
                          style={{
                            fontFamily: "roboto-medium", fontSize: 16, color: '#FFD016',
                          }}>
                          {"50%"}
                        </Text>

                        <Text
                          style={{
                            fontFamily: "roboto-medium", fontSize: 14, color: '#393D54',
                            marginLeft: 10
                          }}>
                          {'Equity'}
                        </Text>

                      </View>

                      <View style={{ width: '50%', flexDirection: 'row' }}>

                        <Text
                          style={{
                            fontFamily: "roboto-medium", fontSize: 14, color: '#86E286',
                          }}>
                          {"10%"}
                        </Text>

                        <Text
                          style={{
                            fontFamily: "roboto-medium", fontSize: 14, color: '#393D54', marginLeft: 10,
                          }}>
                          {'Liquid'}
                        </Text>

                      </View>

                    </View>


                    <View style={{ flexDirection: 'row', }}>

                      <View style={{ width: '50%', flexDirection: 'row' }}>
                        <Text
                          style={{
                            fontFamily: "roboto-medium", fontSize: 16, color: '#FFD016',
                          }}>
                          {"25%"}
                        </Text>

                        <Text
                          style={{
                            fontFamily: "roboto-medium", fontSize: 14, color: '#393D54',
                            marginLeft: 10
                          }}>
                          {'Debt'}
                        </Text>

                      </View>

                      <View style={{ width: '50%', flexDirection: 'row' }}>

                        <Text
                          style={{
                            fontFamily: "roboto-medium", fontSize: 14, color: '#63748D',
                          }}>
                          {"15%"}
                        </Text>

                        <Text
                          style={{
                            fontFamily: "roboto-medium", fontSize: 14, color: '#393D54', marginLeft: 10,
                          }}>
                          {'Others'}
                        </Text>

                      </View>

                    </View>

                  </View>

                </View>
              </View>


              <View style={{ backgroundColor: '#fff', marginTop: 20, }}>

                <View style={{
                  flexDirection: 'row', justifyContent: 'space-between', margin: 10,
                }}>

                  <Text
                    style={{
                      color: "#161F56", fontFamily: "roboto-medium", fontSize: 16, marginHorizontal: 15
                    }}>
                    {'Upcoming SIPs'}
                  </Text>

                  <View style={{ flexDirection: 'row', }}>

                    <Text
                      style={{
                        fontFamily: "roboto-regular", fontSize: 14, color: '#3041A7', alignSelf: 'center',
                        textTransform: 'uppercase'
                      }}>
                      {"SEE ALL"}
                    </Text>

                    <Ionicons
                      name='chevron-forward-outline'
                      color='#3041A7'
                      size={19}
                      style={{ alignSelf: 'center', marginLeft: 5 }} />

                  </View>

                </View>

                <FlatList
                  data={this.state.upcomingSipArray}
                  style={{ marginHorizontal: 15 }}
                  marginBottom={15}
                  keyExtractor={(item, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item, index }) =>

                    <View style={{ width: '95%', alignSelf: 'center', marginTop: 15, }}>

                      <View style={{ flexDirection: 'row' }}>

                        <View style={{ flex: 0.7, justifyContent: "flex-start" }}>

                          <View style={{ width: '75%', height: 75, backgroundColor: '#E5F9E7', borderBottomRightRadius: 25 }}>

                            <View style={{
                              alignSelf: 'center', flex: 1, flexDirection: 'column',
                              justifyContent: 'center', alignItems: 'center',
                            }}>

                              <Text style={{ fontFamily: "roboto-bold", fontSize: 16, fontWeight: 'bold', color: "#31AB3F" }}>
                                {item.month}
                              </Text>

                              <Text style={{ fontFamily: "roboto-medium", fontSize: 16, marginTop: 5, color: '#31AB3F' }}>
                                {item.date}
                              </Text>

                            </View>

                          </View>

                        </View>

                        <View style={{ flex: 2, flexDirection: 'column', alignSelf: 'center' }}>

                          <Text style={{ fontFamily: "roboto-regular", fontSize: 14, color: '#393D54' }}>
                            {item.price}
                          </Text>

                          <Text style={{ fontFamily: "roboto-regular", fontSize: 14, color: '#818181' }}>
                            {item.title}
                          </Text>
                        </View>

                      </View>

                    </View>
                  } />

              </View>

              <View style={{ marginTop: 0, marginHorizontal: 25 }}>

                <ImageBackground
                  source={Images.bg}
                  style={{ marginTop: 25 }}>

                  <View style={{ flexDirection: 'row', padding: 15 }}>

                    <Image
                      source={Images.file} />

                    <Text style={{
                      fontFamily: "roboto-regular", fontSize: 14, color: '#818181',
                      marginLeft: 20, alignSelf: 'center'
                    }}>
                      {"Reports"}
                    </Text>

                  </View>

                </ImageBackground>


                <View
                  style={{
                    marginTop: 20, backgroundColor: 'white', elevation: 4, shadowOffset: 2,
                    shadowColor: '818181', marginBottom: 100
                  }}>

                  <View style={{ flexDirection: 'row', padding: 15 }}>

                    <Image
                      source={Images.support} />

                    <Text style={{
                      fontFamily: "roboto-regular", fontSize: 14, color: '#818181',
                      marginLeft: 20, alignSelf: 'center'
                    }}>
                      {"Need Support?"}
                    </Text>

                  </View>

                </View>

              </View>

            </View>

          </ScrollView>

          <ToolbarFooter global_navigation={this.props.navigation} activePage="Dashboard" />


        </View>


      </SafeAreaView>
    );
  }
}

const styles = {

}