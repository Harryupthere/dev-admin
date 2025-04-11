import React, { useState } from 'react';
import './cascader.scss'
const categories = [
    {
        name: 'Bags and Travel',
        code: 'BT',
        subcategories: [
            {
                name: 'Kids Bags',
                items: [
                    { iname: 'School Backpacks', code: 'KB-SB' },
                    { iname: 'Lunch Bags', code: 'KB-LB' }
                ]
            },
            {
                name: 'Men Bags',
                items: [
                    { iname: 'Backpacks', code: 'MB-BP' },
                    { iname: 'Business Bags', code: 'MB-BB' },
                    { iname: 'Crossbody Bags', code: 'MB-CB' },
                    { iname: 'Messenger Bags', code: 'MB-MB' }
                ]
            },
            {
                name: 'Travel',
                items: [
                    { iname: 'Trolley Bags', code: 'TR-TB' },
                    { iname: 'Duffel Bags', code: 'TR-DB' }
                ]
            },
            {
                name: 'Unisex Bags',
                items: [
                    { iname: 'Travel Backpacks', code: 'UB-TB' },
                    { iname: 'Daypacks', code: 'UB-DP' }
                ]
            },
            {
                name: 'Women Bags',
                items: [
                    { iname: 'Handbags', code: 'WB-HB' },
                    { iname: 'Shoulder Bags', code: 'WB-SB' },
                    { iname: 'Clutch Bags', code: 'WB-CB' }
                ]
            },
            {
                name: 'Wallets & Accessories',
                items: [
                    {
                        iname: 'Leather Wallets',
                        code: 'WA-LW',
                        subitems: [
                            { subname: 'Genuine Leather', code: 'LW-GL' },
                            { subname: 'Synthetic Leather', code: 'LW-SL' },
                            { subname: 'Vegan Leather', code: 'LW-VL' }
                        ]
                    },
                    { iname: 'Card Holders', code: 'WA-CH' }
                ]
            },
            {
                name: 'Luggage',
                items: [
                    { iname: 'Hard Shell Luggage', code: 'LU-HSL' },
                    { iname: 'Soft Shell Luggage', code: 'LU-SSL' }
                ]
            }
        ]
    },
    {
        name: 'Fashion',
        code: 'F',
        subcategories: [
            {
                name: 'Fashion Backpacks',
                items: [
                    { iname: 'Canvas Backpacks', code: 'FB-CB' },
                    { iname: 'Printed Backpacks', code: 'FB-PB' }
                ]
            },
            {
                name: 'Accessories',
                items: [
                    { iname: 'Sunglasses', code: 'FA-SG' },
                    { iname: 'Watches', code: 'FA-WT' }
                ]
            }
        ]
    },
    {
        name: 'Digital Goods',
        code: 'DG',
        subcategories: [
            {
                name: 'Mobile Accessories',
                items: [
                    { iname: 'Phone Cases', code: 'DG-MA-PC' },
                    { iname: 'Power Banks', code: 'DG-MA-PB' }
                ]
            }
        ]
    }
];

function Cascader({ onCategorySelect,closeCascader }) {
    const [parentSearch, setParentSearch] = useState('');
    const [subcategorySearch, setSubcategorySearch] = useState({});
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);
    const [itemSearch, setItemSearch] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSelectedSubcategory(null);
        setSelectedItem(null);
      };
    
      const handleSubcategoryClick = (subcategory) => {
        setSelectedSubcategory(subcategory);
        setSelectedItem(null);
      };
    
      const handleItemClick = (item) => {
        setSelectedItem(item); // Set selected item
        if (onCategorySelect) {
          onCategorySelect(
            selectedCategory?.name || '',
            selectedSubcategory?.name || '',
            item.iname
          );
        }
      };
    
    return (
        <div className="custom-cascader">
            <div className='all-search'>
                <div className='search-filed'>
                    <input type='text' placeholder='Search by Category ID' />
                </div>
                <div className='search-filed'>
                    <input type='text' placeholder='Search by Category Name' />
                </div>
            </div>
            <div className="cascader-body">
                <div className='item'>
                    {/* Category Selection */}
                    <div className='search-filed'>
                        <input
                            type="text"
                            placeholder="Filter"
                            value={parentSearch}
                            onChange={(e) => setParentSearch(e.target.value)}
                        />
                    </div>
                    {categories
                        .filter((category) => category.name.toLowerCase().includes(parentSearch.toLowerCase()))
                        .map((category) => (
                            <div key={category.code}
                            className={`category-code ${selectedCategory === category ? 'selected' : ''}`}
                            onClick={() => handleCategoryClick(category)}>
                                <div
                                    onClick={() => handleCategoryClick(category)}
                                    className='category-item'
                                >
                                    {category.name}
                                </div>
                            </div>
                        ))}
                </div>
                {/* Subcategory Section */}
                {selectedCategory && (
                    <div className='item'>
                        <div className='search-filed'>
                            <input
                                type="text"
                                // placeholder={`Search Subcategories in ${selectedCategory.name}...`}
                                placeholder="Filter"
                                value={subcategorySearch[selectedCategory.name] || ''}
                                onChange={(e) => setSubcategorySearch({ [selectedCategory.name]: e.target.value })}
                            />
                        </div>
                        {selectedCategory.subcategories
                            .filter((sub) =>
                                sub.name.toLowerCase().includes((subcategorySearch[selectedCategory.name] || '').toLowerCase())
                            )
                            .map((subcategory) => (
                                <div key={subcategory.name} 
                                className={`category-code ${selectedSubcategory === subcategory ? 'selected' : ''}`}
                                onClick={() => handleSubcategoryClick(subcategory)}>
                                    <div
                                        onClick={() => handleSubcategoryClick(subcategory)}
                                        className='category-item'
                                    >
                                        {subcategory.name}
                                    </div>
                                </div>
                            ))}
                    </div>
                )}

                {/* Item Section */}
                {selectedSubcategory && (
                    <div className='item'>
                        <div className='search-filed'>
                            <input
                                type="text"
                                // placeholder={`Search Items in ${selectedSubcategory.name}...`}
                                placeholder="Filter"
                                value={itemSearch}
                                onChange={(e) => setItemSearch(e.target.value)}
                            />
                        </div>
                        {selectedSubcategory.items
                            .filter((item) =>
                                item.iname.toLowerCase().includes(itemSearch.toLowerCase())
                            )
                            .map((item) => (
                                <div key={item.code}  className={`category-code ${selectedItem === item ? 'selected' : ''}`}
                                onClick={() => handleItemClick(item)}>
                                    <div onClick={() => handleItemClick(item)} className='category-item'>
                                        {item.iname}
                                    </div>
                                </div>
                            ))}
                    </div>
                )}

            </div>
            <div className='action-card'>
                <button type='button' className='orange_border_btn ms-auto' onClick={closeCascader}>Cancel</button>
                <button type='button' className='orange_button'>Confirm</button>
            </div>
        </div>
    );
}

export default Cascader;
