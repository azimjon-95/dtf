import React, { useState } from 'react';
import { Dropdown, Menu, Button } from 'antd';
import Layout from '../../components/layout/Layout';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import './style.css';


const BookmarkComponent = () => {
    const [selectedCategory, setSelectedCategory] = useState('Посты');
    const [selectedOpen, setSelectedOpen] = useState(false);

    const [bookmarks, setBookmarks] = useState({
        Посты: [],
        Комментарии: [],
        Реакции: [],
    });

    const handleMenuClick = ({ key }) => {
        setSelectedCategory(key);
    };

    const handleDropdownVisibleChange = (visible) => {
        setSelectedOpen(visible);
    };

    const menu = (
        <Menu
            onClick={handleMenuClick}
            items={[
                { key: 'Посты', label: 'Посты' },
                { key: 'Комментарии', label: 'Комментарии' },
                { key: 'Реакции', label: 'Реакции' },
            ]}
        />
    );

    return (
        <Layout>
            <div className='BookmarkComponent'>
                <div style={{ marginBottom: '5px' }}>
                    <Dropdown
                        overlay={menu}
                        trigger={['click']}
                        onOpenChange={handleDropdownVisibleChange}
                    >
                        <button className="Bookmark_select" >
                            {selectedCategory} {selectedOpen ? < BsChevronUp /> : <BsChevronDown />}
                        </button>
                    </Dropdown>
                </div>
                <div className="bookmark_box"   >
                    {bookmarks[selectedCategory].length === 0 ? (
                        <div className="bookmark_nodata">
                            <p>Вы ничего не добавляли в закладки</p>
                        </div>
                    ) : (
                        bookmarks[selectedCategory].map((item, index) => (
                            <div key={index} style={{ marginBottom: '10px' }}>
                                {item}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default BookmarkComponent;
