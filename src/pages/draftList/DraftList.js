import React, { useState } from "react";
import { Card, Avatar, Button, Space, Dropdown, Menu, Input, message, Modal } from "antd";
import { EllipsisOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Layout from '../../components/layout/Layout';
import './style.css';

const DraftList = () => {
    const [data, setData] = useState([
        {
            id: 1,
            name: "Azimjon Mamutaliyev",
            date: "6 дек",
            content: "fg",
            avatar: "https://via.placeholder.com/40",
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
    ]);

    const [editingItem, setEditingItem] = useState(null);
    const [newContent, setNewContent] = useState("");
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [deleteItemId, setDeleteItemId] = useState(null);

    const handleEdit = (item) => {
        setEditingItem(item.id);
        setNewContent(item.content);
    };

    const saveEdit = (id) => {
        setData(data.map(item => item.id === id ? { ...item, content: newContent } : item));
        setEditingItem(null);
        setNewContent("");
        message.success("Контент успешно отредактирован");
    };

    const showDeleteModal = (id) => {
        setDeleteItemId(id);
        setIsDeleteModalVisible(true);
    };

    const confirmDelete = () => {
        setData(data.filter(item => item.id !== deleteItemId));
        setIsDeleteModalVisible(false);
        message.success("Элемент успешно удалён");
    };

    const cancelDelete = () => {
        setIsDeleteModalVisible(false);
    };

    const menu = (item) => (
        <Menu>
            <Menu.Item
                key="edit"
                icon={<EditOutlined />}
                onClick={() => handleEdit(item)}
            >
                Редактировать
            </Menu.Item>
            <Menu.Item
                key="delete"
                icon={<DeleteOutlined />}
                danger
                onClick={() => showDeleteModal(item.id)}
            >
                Удалить
            </Menu.Item>
        </Menu>
    );

    return (
        <Layout>
            <div className="draftList-continer">
                <div className="draftList-header">
                    <h2>Черновики</h2>
                </div>
                <div className="draftList_setting-inner_box">
                    {data.map((item) => (
                        <Card
                            key={item.id}
                        >
                            <div className="draftList_cards">
                                <Avatar src={item.avatar} size={48} style={{ marginRight: 16 }} />
                                <div style={{ flex: 1 }}>
                                    <p className="draftList_cards_name">{item.name}</p>
                                    <p className="draftList_cards_date">{item.date}</p>
                                </div>
                                <Space>
                                    <p className="dr_btns">Черновик</p>
                                    <Dropdown overlay={menu(item)} trigger={["click"]}>
                                        <button className="dr_btns_menu">
                                            <EllipsisOutlined />
                                        </button>
                                    </Dropdown>
                                </Space>
                            </div>
                            {editingItem === item.id ? (
                                <div style={{ marginTop: 8 }}>
                                    <Input.TextArea
                                        value={newContent}
                                        onChange={(e) => setNewContent(e.target.value)}
                                        rows={3}
                                    />
                                    <Button
                                        type="primary"
                                        style={{ marginTop: 8 }}
                                        onClick={() => saveEdit(item.id)}
                                    >
                                        Сохранить
                                    </Button>
                                </div>
                            ) : (
                                <p className="draftList_cards_title">{item.content}</p>
                            )}
                        </Card>
                    ))}
                </div>
                {/* <Modal
                    title="Удалить"
                    visible={isDeleteModalVisible}
                    onOk={confirmDelete}
                    onCancel={cancelDelete}
                    okText="Удалить"
                    cancelText="Отмена"
                    okButtonProps={{ danger: true }}

                >
                    <p>Вы уверены?</p>
                </Modal> */}
                <Modal
                    title="Удалить"
                    visible={isDeleteModalVisible}
                    footer={null}
                    onCancel={cancelDelete}
                    okButtonProps={{ danger: true }}
                >
                    <p>Вы уверены?</p>
                    <div className="ant-modal-footer">
                        <button className="custom-cancel-button" onClick={cancelDelete}>
                            Отменить
                        </button>
                        <button className="custom-ok-button" onClick={confirmDelete}>
                            Подтвердить
                        </button>
                    </div>
                </Modal>
            </div>
        </Layout>
    );
};

export default DraftList;













// import React from "react";
// import { Card, Avatar, Button, Space } from "antd";
// import { EllipsisOutlined } from "@ant-design/icons";
// import Layout from '../../components/layout/Layout'
// import './style.css'

// const DraftList = () => {
//     const data = [
//         {
//             id: 1,
//             name: "Azimjon Mamutaliyev",
//             date: "6 дек",
//             content: "fg",
//             avatar: "https://via.placeholder.com/40", // Avatar uchun link
//         },
//         {
//             id: 2,
//             name: "Azimjon Mamutaliyev",
//             date: "5 дек",
//             content: "dfdf",
//             avatar: "https://via.placeholder.com/40",
//         },
//         {
//             id: 3,
//             name: "Azimjon Mamutaliyev",
//             date: "5 дек",
//             content: "ggf",
//             avatar: "https://via.placeholder.com/40",
//         },
//     ];
//     return (
//         <Layout>
//             <div className="draftList-continer">
//                 <div className="draftList-header">
//                     <h2>Черновики</h2>
//                 </div>
//                 <div className="draftList_setting-inner_box">
//                     {data.map((item) => (
//                         <Card
//                             key={item.id}
//                         >
//                             <div className="draftList_cards">
//                                 <Avatar src={item.avatar} size={48} style={{ marginRight: 16 }} />
//                                 <div style={{ flex: 1 }}>
//                                     <p className="draftList_cards_name">{item.name}</p>
//                                     <p className="draftList_cards_date">{item.date}</p>
//                                     {/* <p className="draftList_cards_title">{item.content}</p> */}
//                                 </div>
//                                 <Space>
//                                     <p className="dr_btns">  Черновик  </p>
//                                     <button className="dr_btns_menu">
//                                         <EllipsisOutlined />
//                                     </button>
//                                 </Space>
//                             </div>
//                             <p className="draftList_cards_title">{item.content}</p>
//                         </Card>
//                     ))}
//                 </div>
//             </div>
//         </Layout>
//     );
// };

// export default DraftList;


