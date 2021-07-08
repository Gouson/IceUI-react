import React from "react";
import Layout from "./layout";
import Header from './header';
import Content from "./content";
import Footer from "./footer";
import Aside from './aside';
import './_test.scss'
const LayoutExample: React.FunctionComponent = () => {
    return (
        <div>
            <div>
                <h1>第一个例子</h1>
                <Layout style={{ width: '500px' }}>
                    <Header className={'center blue1'}>header</Header>
                    <Content className={'center blue2'}>content</Content>
                    <Footer className={'center blue3'}>footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第二个例子</h1>
                <Layout style={{ width: '500px' }}>
                    <Header className={'center blue1'}>header</Header>
                    <Layout>
                        <Aside className={'center blue2'}>Aside</Aside>
                        <Content className={'center blue3'}>content</Content>
                    </Layout>
                    <Footer className={'center blue4'}>footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第三个例子</h1>
                <Layout style={{ width: '500px' }}>
                    <Header className={'center blue1'}>header</Header>
                    <Layout>
                        <Content className={'center blue3'}>content</Content>
                        <Aside className={'center blue2'}>Aside</Aside>
                    </Layout>
                    <Footer className={'center blue4'}>footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第四个例子</h1>
                <Layout style={{ width: '500px' }}>
                    <Aside className={'center blue2'}>Aside</Aside>
                    <Layout>
                        <Header className={'center blue1'}>header</Header>
                        <Content className={'center blue3'}>content</Content>
                        <Footer className={'center blue4'}>footer</Footer>
                    </Layout>
                </Layout>
            </div>
        </div >
    )
}

export default LayoutExample