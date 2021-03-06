/**
 * Created by guoshuyu on 2017/11/10.
 */

import React, {Component} from 'react';
import {
    View, Text, StatusBar
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from "../style"
import I18n from '../style/i18n'
import * as Constant from '../style/constant'
import loginActions from '../store/actions/login'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import CommonRowItem from './common/CommonRowItem'
import VersionNumber from "react-native-version-number";

/**
 * 设置
 */
class SettingPage extends Component {
    componentDidMount() {
    }

    componentWillUnmount() {

    }


    render() {
        let {loginActions} = this.props;
        return (
            <View style={styles.mainBox}>
                <StatusBar hidden={false} backgroundColor={'transparent'} translucent barStyle={'light-content'}/>
                <CommonRowItem
                    showIconNext={true}
                    topLine={false}
                    bottomLine={false}
                    itemIcon={"person"}
                    textStyle={[styles.centered, styles.normalText, {
                        textAlignVertical: 'center',
                        marginHorizontal: Constant.normalMarginEdge
                    }]}
                    iconSize={20}
                    viewStyle={[{
                        borderRadius: 4, marginTop: Constant.normalMarginEdge,
                        paddingLeft: Constant.normalMarginEdge
                    }, styles.shadowCard]}
                    itemText={I18n('person')}
                    onClickFun={() => {
                        Actions.PersonInfoPage();
                    }}/>
                <CommonRowItem
                    showIconNext={true}
                    topLine={false}
                    bottomLine={false}
                    textStyle={[styles.centered, styles.normalText, {
                        textAlignVertical: 'center',
                        marginHorizontal: Constant.normalMarginEdge
                    }]}
                    itemIcon={"clock"}
                    viewStyle={[{
                        borderRadius: 4, marginTop: Constant.normalMarginEdge,
                        paddingLeft: Constant.normalMarginEdge
                    }, styles.shadowCard]}
                    iconSize={20}
                    itemText={I18n('history')}
                    onClickFun={() => {
                        Actions.ListPage({
                            dataType: 'history', showType: 'repository',
                            title: I18n('history')
                        })
                    }}/>
                <CommonRowItem
                    showIconNext={true}
                    topLine={false}
                    bottomLine={false}
                    itemIcon={"octoface"}
                    textStyle={[styles.centered, styles.normalText, {
                        textAlignVertical: 'center',
                        marginHorizontal: Constant.normalMarginEdge
                    }]}
                    iconSize={20}
                    viewStyle={[{
                        borderRadius: 4, marginTop: Constant.normalMarginEdge,
                        paddingLeft: Constant.normalMarginEdge
                    }, styles.shadowCard]}
                    itemText={I18n('about')}
                    onClickFun={() => {
                        Actions.AboutPage();
                    }}/>
                <CommonRowItem
                    showIconNext={false}
                    topLine={false}
                    bottomLine={false}
                    textStyle={[styles.centered, styles.normalTextWhite, {textAlign: 'center'}]}
                    viewStyle={[styles.shadowCard, {
                        backgroundColor: "#cd2130",
                        borderRadius: 4,
                        marginTop: 2 * Constant.normalMarginEdge
                    }]}
                    itemText={I18n('LoginOut')}
                    onClickFun={() => {
                        Actions.reset("LoginPage");
                        loginActions.loginOut();
                    }}/>
            </View>
        )
    }
}


export default connect(state => ({state}), dispatch => ({
        loginActions: bindActionCreators(loginActions, dispatch)
    })
)(SettingPage)