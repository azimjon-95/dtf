import React from "react";
import { Card, Avatar, Button, Space } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import Layout from '../../components/layout/Layout'

const data = [
    {
        id: 1,
        name: "Azimjon Mamutaliyev",
        date: "6 дек",
        content: "fg",
        avatar: "https://via.placeholder.com/40", // Avatar uchun link
    },
    {
        id: 2,
        name: "Azimjon Mamutaliyev",
        date: "5 дек",
        content: "dfdf",
        avatar: "https://via.placeholder.com/40",
    },
    {
        id: 3,
        name: "Azimjon Mamutaliyev",
        date: "5 дек",
        content: "ggf",
        avatar: "https://via.placeholder.com/40",
    },
];

const DraftList = () => {
    return (
        <Layout>
            <div style={{ maxWidth: 600, margin: "20px auto" }}>
                {data.map((item) => (
                    <Card
                        key={item.id}
                        style={{
                            marginBottom: 16,
                            borderRadius: 8,
                            backgroundColor: "#1e1e1e",
                            color: "#ffffff",
                        }}
                        bodyStyle={{ display: "flex", alignItems: "center", padding: 12 }}
                    >
                        <Avatar src={item.avatar} size={48} style={{ marginRight: 16 }} />
                        <div style={{ flex: 1 }}>
                            <div style={{ fontSize: 16, fontWeight: 600 }}>{item.name}</div>
                            <div style={{ fontSize: 14, color: "#aaa" }}>{item.date}</div>
                            <div style={{ marginTop: 8 }}>{item.content}</div>
                        </div>
                        <Space>
                            <Button size="small" type="default">
                                Черновик
                            </Button>
                            <Button
                                shape="circle"
                                icon={<EllipsisOutlined />}
                                style={{ color: "#aaa", border: "none" }}
                            />
                        </Space>
                    </Card>
                ))}
            </div>
        </Layout>
    );
};

export default DraftList;
