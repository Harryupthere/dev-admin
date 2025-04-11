import { useState } from 'react'

const useProductlistUtils = () => {
const[openEditPriceModal,setOpenEditPriceModal] = useState(false)
const[openEditCostModal,setOpenEditCostModal] = useState(false)
const[openEditStockModal,setOpenStockCostModal] = useState(false)
const[signleDeleteModal,setSignleDeleteModal] = useState(false)
const[multiDeleteModal,setMultiDeleteModal] = useState(false)
const[singleInactiveModal,setSingleInactiveModal] = useState(false)
const[multiInactiveModal,setMultiInactiveModal] = useState(false)


///price modal
const handleOpenEditPriceModal = () =>{
  setOpenEditPriceModal(true)
}
const handleCloseEditPriceModal = () =>{
  setOpenEditPriceModal(false)
}

/// edit cost modal
const handleOpenEditCostModal = () =>{
  setOpenEditCostModal(true)
}
const handleCloseEditCostModal = () =>{
  setOpenEditCostModal(false)
}

//edit stock modal
const handleOpenEditStockModal = () =>{
  setOpenStockCostModal(true)
}
const handleCloseEditStockModal = () =>{
  setOpenStockCostModal(false)
}

// sigle delete modal
const handleOpenSignleDelete = () =>{
  setSignleDeleteModal(true)
}
const handleCloseSignleDelete = () =>{
  setSignleDeleteModal(false)
}

// multi delete modal
const handleOpenMulteDelete = () =>{
  setMultiDeleteModal(true)
}
const handleCloseMultiDelete = () =>{
  setMultiDeleteModal(false)
}

//single Inactive
const handleOpenSingleInactive = () =>{
  setSingleInactiveModal(true)
}
const handleCloseSingleInactive = () =>{
  setSingleInactiveModal(false)
}

// Multi inactive
const handleOpenMultiInactive = () =>{
  setMultiInactiveModal(true)
}
const handleCloseMultiInactive = () =>{
  setMultiInactiveModal(false)
}
  return {
    handleOpenEditPriceModal,handleCloseEditPriceModal,openEditPriceModal,  //price modal
    handleOpenEditCostModal,handleCloseEditCostModal,openEditCostModal,     //cost modal
     handleOpenEditStockModal,handleCloseEditStockModal,openEditStockModal,  //stock modal
    handleOpenSignleDelete,handleCloseSignleDelete,signleDeleteModal,       //single delete modal
    handleOpenMulteDelete,handleCloseMultiDelete,multiDeleteModal,           //multi delete modal
    handleOpenSingleInactive,handleCloseSingleInactive,singleInactiveModal,  //single inactive modal
    handleOpenMultiInactive,handleCloseMultiInactive,multiInactiveModal
  }
}

export default useProductlistUtils
