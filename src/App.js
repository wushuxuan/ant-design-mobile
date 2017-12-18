import React, { Component } from 'react';
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';

class App extends Component {
    componentDidMount() {
        // this.autoFocusInst.focus();
    }
    handleClick = () => {
        this.customFocusInst.focus();
    }
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div>
                <List renderHeader={() => 'Custom title（text / image / empty)'}>
                    <InputItem
                        {...getFieldProps('input3')}
                        placeholder="no label"
                    />
                    <InputItem
                        {...getFieldProps('inputtitle2')}
                        placeholder="title can be icon，image or text"
                    >
                        <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                </List>

                <WhiteSpace />

                <List renderHeader={() => 'Customize the extra content in the right'}>
                    <InputItem
                        {...getFieldProps('preice')}
                        placeholder="0.00"
                        extra="¥"
                    >价格</InputItem>
                </List>

                <WhiteSpace />
                <List renderHeader={() => 'Format'}>
                    <InputItem
                        {...getFieldProps('bankCard', {
                            initialValue: '8888 8888 8888 8888',
                        })}
                        type="bankCard"
                    >银行卡</InputItem>
                    <InputItem
                        {...getFieldProps('phone')}
                        type="phone"
                        placeholder="186 1234 1234"
                    >手机号码</InputItem>
                    <InputItem
                        {...getFieldProps('password')}
                        type="password"
                        placeholder="****"
                    >密码</InputItem>
                    <InputItem
                        {...getFieldProps('number')}
                        type="number"
                        placeholder="click to show number keyboard"
                    >数字键盘</InputItem>
                </List>

                <WhiteSpace />
            </div>
        );
    }
}

const shenzhou = createForm()(App);
export default shenzhou;
