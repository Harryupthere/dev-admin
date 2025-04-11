import React from 'react'
import DashboardHeader from '../dasboardheader'
import { CategoriesTable, CategoryFilter, RecursiveAccordion } from '../../components';

const Categories = () => {
    const breadcrumbdata = [
        {
            name: 'Products',
            links: '/products'
        },
        {
            name: 'Categories',
            links: '/products/categories'
        }
    ]
    const data = [
        {
            title: "Bags and Travel",
            children: [
                {
                    title: "Kids Bags",
                    content: [" Accessories", "Backpacks","Bags"],
                },
                {
                    title: "Men Bags", content: ['Business Bags','Crossbody Bags','Messenger Bags','Messenger Bags'],
                    children: [
                        { title: " Backpacks", content: ['Fashion backpacks'] },
                    ],
                   
                },

            ],
        },

        {
            title: "Bedding & Bath",
            content: ["Bedsheets", "Pillow Covers", "Towels"],
          },
          {
            title: "Cameras",
            content: ["DSLR Cameras", "Mirrorless Cameras", "Camera Accessories"],
          },
          {
            title: "Charity and Donation",
            content: ["Health Charity", "Education Donation", "Environmental Causes"],
          },
          {
            title: "Computers & Laptops",
            content: ["Laptops", "Desktops", "Computer Accessories"],
          },
          {
            title: "Digital Goods",
            content: ["E-books", "Software Licenses", "Online Courses"],
          },
          {
            title: "Fashion",
            content: ["Men's Wear", "Women's Wear", "Kids' Wear"],
          },
          {
            title: "Furniture & Decor",
            content: ["Sofas", "Tables", "Wall Art"],
          },
          {
            title: "Groceries",
            content: ["Vegetables", "Fruits", "Dairy Products"],
          },
          {
            title: "Health & Beauty",
            content: ["Skincare", "Vitamins", "Makeup"],
          },
          {
            title: "Home Appliances",
            content: ["Refrigerators", "Washing Machines", "Microwaves"],
          },
          {
            title: "Kitchen & Dining",
            content: ["Cookware", "Dinner Sets", "Cutlery"],
          },
          {
            title: "Laundry & Cleaning",
            content: ["Detergents", "Fabric Softeners", "Cleaning Supplies"],
          },
    ];


    return (
        <div className='customer'>
            <DashboardHeader heading="Manage Categories" breadcrumbdata={breadcrumbdata} />
            <div className='main'>
                <CategoryFilter/>
                <CategoriesTable/>
                <RecursiveAccordion items={data} />
            </div>
        </div>
    )
}

export default Categories
