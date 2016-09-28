/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,// 引入Image组件
  TouchableOpacity// 引入响应时间组件
} from 'react-native';

// 导入外部数据
var Wine = require('./Wine.json');

var Dimensions = require('Dimensions');
// 获取屏幕宽度
var {width} = Dimensions.get('window')

// 创建ListView
var ListViewDemo = React.createClass({

    // 初始化数据源
    getInitialState() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // 返回数据源
        return {
            dataSource: ds.cloneWithRows(Wine)
        };
    },


  render() {

      // 返回ListView
    return (
        <ListView
            // 设置数据源
            dataSource={this.state.dataSource}
            // 绘制cell
            renderRow={this.renderRow}
            // 设置Listview的样式
            contentContainerStyle={styles.listViewStyle}
        />
    )
  },

    // 绘制Cell
    renderRow(rowData) {

        return (
            // 增加响应事件
            <TouchableOpacity activeOpacity={0.4} onPress={()=>(alert("哈哈"))}>
            <View style={styles.cellViewStyle}>
                <Image source={{uri: rowData.image}} style={styles.imageStyle} />
                <View style={styles.interViewStyle}>
                    <Text style={{marginTop: 5, fontSize: 20, width: 300}}>{rowData.name}</Text>
                    <Text style={{marginTop: 5, fontSize: 20, color: 'red'}}>{'$' + rowData.money}</Text>
                </View>
            </View>
            </TouchableOpacity>
        )
    }
})

// 设置样式
const styles = StyleSheet.create({

    // 设置ListView的样式
    listViewStyle: {
        marginTop: 20// ListView 距离顶部距离
    },
    // 设置cell的样式
    cellViewStyle: {
        flexDirection: 'row',// 设置主轴方向为水平方向
        backgroundColor: 'white',// 设置背景颜色为白色
        alignItems: 'center',// 设置侧轴对齐方式为剧中
        padding: 10,// 设置内边距
        borderBottomWidth: 1,// 设置底部border
        borderBottomColor: '#e8e8e8'// 设置底部border颜色
    },
    // 设置图片的样式
    imageStyle: {

        width: 80,// 设置图片宽度
        height: 80// 设置图片高度
    },
    // 设置cell中右边视图的样式
    interViewStyle: {
        marginLeft: 10,// 设置左边间距
        justifyContent: 'center'// 设置主轴对齐方式
    }
})

AppRegistry.registerComponent('ListViewDemo', () => ListViewDemo);
