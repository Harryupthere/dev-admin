import React from "react";

const CategoriesTable = () => {
    return (
        <>
        <div className="categories-table">
            <div className="table-header">
                <div className="main-header">
                    <div className="title"><span>Category Name</span></div>
                    <div className="right-content">
                        <div className="id"><span>Category ID</span></div>
                        <div className="prod"><span>Products</span></div>
                        <div className="action">
                            <span>Action</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default CategoriesTable;