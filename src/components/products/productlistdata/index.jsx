import React from 'react'
import ProductsFilter from '../productfilter'
import { Icons, images } from '../../../utils/customFn'
import { IconEditInput, SaleIcons, TranshIcon } from '../../../icons/icons'
import './productlistdata.scss'
import CustomPagination from '../../layout/paginations'
import useCustomePagination from '../../layout/paginations/paginationUtils';
import EditPriceModal from '../editpriceModal'
import useProductlistUtils from './productlistUtils'
import EditCostModal from '../editcostModal'
import EditStockModal from '../editstockModal'
import DeleteSingleModal from '../deletesingleModal'
import MultiDeleteModal from '../deletemultipleModal'
import InactiveSingle from '../inactiveSingleModal'
import MultiInactiveModal from '../inactiveMultileModal'

const ProductListData = () => {
    const tabledata = [
        {
            id: 'ID: 100000003',
            name: 'Samsung Galaxy S24 Ultra',
            img: 'samsung.png',
            price: 'Rs. 400,000 - Rs.  550,000',
            stock: '525',
            productvariant: [
                {
                    img: 'samsung.png',
                    productcolor: 'Titanium Black • 256GB/ 12GB RAM',
                    productproccessor: 'Samsung - Galaxy S24 Ultra - 256GB/ 12GB RAM',
                    price: 'Rs. 400,000',
                    stocks: '100',
                    cost: 'Rs. 350,000'
                },
                {
                    img: 'samsung.png',
                    productcolor: 'Titanium Black • 256GB/ 12GB RAM',
                    productproccessor: 'Samsung - Galaxy S24 Ultra - 256GB/ 12GB RAM',
                    price: 'Rs. 400,000',
                    stocks: '100',
                    cost: 'Rs. 350,000'
                },           
                 {
                    img: 'samsung2.png',
                    productcolor: 'Titanium Black • 256GB/ 12GB RAM',
                    productproccessor: 'Samsung - Galaxy S24 Ultra - 256GB/ 12GB RAM',
                    price: 'Rs. 400,000',
                    stocks: '100',
                    cost: 'Rs. 350,000'
                },        
                  {
                    img: 'samsung3.png',
                    productcolor: 'Titanium Black • 256GB/ 12GB RAM',
                    productproccessor: 'Samsung - Galaxy S24 Ultra - 256GB/ 12GB RAM',
                    price: 'Rs. 400,000',
                    stocks: '100',
                    cost: 'Rs. 350,000'
                },
            ]
        },
        {
            id: 'ID: 100000003',
            name: 'HDMI Cable',
            img: 'hdmi.png',
            price: 'Rs. 400,000 - Rs.  550,000',
            stock: '525',
            productvariant: [
                {
                    img: 'hdmi.png',
                    productcolor: 'HDMI Cable',
                    productproccessor: 'HDMI Cable - Red & Black - 1.5M',
                    price: 'Rs. 400,000',
                    stocks: '100',
                    cost: 'Rs. 350,000'
                },
                {
                    img: 'hdmi.png',
                    productcolor: 'HDMI Cable',
                    productproccessor: 'HDMI Cable - Red & Black - 1.5M',
                    price: 'Rs. 400,000',
                    stocks: '100',
                    cost: 'Rs. 350,000'
                },           
                 {
                    img: 'hdmi.png',
                    productcolor: 'HDMI Cable',
                    productproccessor: 'HDMI Cable - Red & Black - 1.5M',
                    price: 'Rs. 400,000',
                    stocks: '100',
                    cost: 'Rs. 350,000'
                },        
                  {
                    img: 'hdmi.png',
                    productcolor: 'HDMI Cable',
                    productproccessor: 'HDMI Cable - Red & Black - 1.5M',
                    price: 'Rs. 400,000',
                    stocks: '100',
                    cost: 'Rs. 350,000'
                },
            ]
        }
    ]
    const {
        paginatedData,
        page,
        rowsPerPage,
        rowsPerPageOptions,
        handlePageChange,
        handleRowsPerPageChange,
        totalItems,
      } = useCustomePagination(tabledata);

      const { handleOpenEditPriceModal,handleCloseEditPriceModal,openEditPriceModal,  //edit price
            handleOpenEditCostModal,handleCloseEditCostModal,openEditCostModal,      //edit cost
            openEditStockModal,handleOpenEditStockModal,handleCloseEditStockModal,    //edit stock
            handleOpenSignleDelete,handleCloseSignleDelete,signleDeleteModal ,        // single delete product
            handleOpenMulteDelete,handleCloseMultiDelete,multiDeleteModal,              //multiple product delete modal 
            handleOpenSingleInactive,handleCloseSingleInactive,singleInactiveModal,    //single inactive modal
            handleOpenMultiInactive,handleCloseMultiInactive,multiInactiveModal        //multi inactive modal
      } = useProductlistUtils()
      
    return (
        <div className='productlist_data'>
            <ProductsFilter />
            <div className='action-card'>
                <h3 className='selected'>0 Selected</h3>
                <button type='button' className='orange_button' onClick={handleOpenMultiInactive}>Inactivate</button>
                <button type='button' className='orange_border_btn' onClick={handleOpenMulteDelete}>Delete</button>
            </div>
            <div className='data-table-wrapped'>
                <div className='data-table-container'>
                    <table>
                        <thead>
                            <tr>
                                <th><div className='checkcontainer'><input type='checkbox' /></div></th>
                                <th style={{ width: '40%' }}>Product Details</th>
                                <th>Price</th>
                                <th>Stocks</th>
                                <th>Product Cost</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData?.map((mainitem, index) => (
                                <>
                                    <tr key={index} className='border_top'>
                                        <td><div className='checkcontainer'><input type='checkbox' /></div></td>
                                        <td>
                                            <div className='product-details'>
                                                <div className='item-img main-item-img'><img src={images[`${mainitem.img}`]} alt='product'/></div>
                                                <div className='item-details'>
                                                    <h3>{mainitem.name}</h3>
                                                    <span>{mainitem.id}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='flex_box'>
                                                <img src={Icons['discountpercent.svg']} alt='icon' />
                                                {mainitem.price}
                                                <button type='button' className='bg-transparent'  onClick={handleOpenEditPriceModal}><IconEditInput /></button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='flex_box'>
                                                {mainitem.stock}<button type='button' className='bg-transparent' onClick={handleOpenEditStockModal}><IconEditInput /></button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='flex_box'>
                                                <button type='button' className='bg-transparent'><SaleIcons /></button>
                                                <button type='button' className='bg-transparent' onClick={handleOpenEditCostModal}><IconEditInput /></button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='switch'>
                                                <input type='checkbox' onChange={handleOpenSingleInactive}/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='action-section'>
                                                <img src={Icons['link.svg']} alt='link' className='link-icon' />
                                                <button className='blue_button'>Edit <IconEditInput /></button>
                                                <button className='bg-transparent' onClick={handleOpenSignleDelete }> <TranshIcon /></button>
                                            </div>
                                            <div className='flex_box profile-created-by'>
                                                <div className='profile-img'>
                                                    <img src={images['profile-boy.svg']} alt='profile' />
                                                </div>
                                                <div className='details'>
                                                    <h3>Created By</h3>
                                                    <h2>Afrar</h2>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    {mainitem?.productvariant?.map((variants, index) => (
                                        <tr key={index}>
                                            <td></td>
                                            <td>
                                                <div className='product-details'>
                                                    <div className='item-img'><img src={images[`${variants.img}`]} /></div>
                                                    <div className='item-details'>
                                                        <h3>{variants.productcolor}</h3>
                                                        <span className='black-text'>{variants.productproccessor}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='flex_box'>
                                                    <img src={Icons['discountpercent.svg']} alt='icon' />
                                                    {variants.price}
                                                    <button type='button' className='bg-transparent' onClick={handleOpenEditPriceModal}><IconEditInput /></button>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='flex_box'>
                                                    {variants.stocks}<button type='button' className='bg-transparent' onClick={handleOpenEditStockModal}><IconEditInput /></button>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='flex_box'>
                                                    <button type='button' className='bg-transparent'><SaleIcons /></button>
                                                    {variants.cost}
                                                    <button type='button' className='bg-transparent' onClick={handleOpenEditCostModal}><IconEditInput /></button>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='switch'>
                                                    <input type='checkbox' />
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                    ))}
                                </>
                            ))}
                        </tbody>
                    </table>
                           <CustomPagination
                                 totalItems={totalItems}
                                 page={page}
                                 rowsPerPage={rowsPerPage}
                                 rowsPerPageOptions={rowsPerPageOptions}
                                 onPageChange={handlePageChange}
                                 onRowsPerPageChange={handleRowsPerPageChange}
                              />
                </div>
            </div>
            {/* =================open Edit price modal==================== */}
            <EditPriceModal openModal={openEditPriceModal} closeModal={handleCloseEditPriceModal}/>

            {/* =================open Edit cost modal==================== */}
            <EditCostModal openModal={openEditCostModal} closeModal={handleCloseEditCostModal}/>
            
            {/* =================open Edit cost modal==================== */}
            <EditStockModal openModal={openEditStockModal} closeModal={handleCloseEditStockModal}/>

            {/* ====================signle product delete modal============== */}
            <DeleteSingleModal openModal={signleDeleteModal} closeModal={handleCloseSignleDelete}/>

            {/* ====================Multi product delete modal============== */}
            <MultiDeleteModal openModal={multiDeleteModal} closeModal={handleCloseMultiDelete}/>

            {/* ====================Single Inactive Modal========================== */}
            <InactiveSingle openModal={singleInactiveModal} closeModal={handleCloseSingleInactive}/>

            {/* ====================Multi Inactive Modal========================== */}
            <MultiInactiveModal openModal={multiInactiveModal} closeModal={handleCloseMultiInactive}/>
        </div>
    )
}

export default ProductListData
