import { useState } from 'react'
import { images } from '../../utils/customFn';

const useAccountSettingUtils = () => {
    const [image, setImage] = useState(images['avatar.png']);
    const [showEdit, setShowEdit] = useState(false)
    const [openEmailModal,setOpenEmailModal] = useState(false)
    const[openChangePhone,setOpenChangePhone] = useState(false)

    //open email modal
    const handleOpenEmailModal = () =>{
        setOpenEmailModal(true)
    }

    const handleCloseEmailModal = () =>{
        setOpenEmailModal(false)
    }

    //open Phone Modal
    const handleOpenChangePhoneModal = () =>{
        setOpenChangePhone(true)
    }

    const handleCloseChangePhoneModal = () =>{
        setOpenChangePhone(false)
    }

    //show edit option funtion
    const handleOpenEdit = () => {
        setShowEdit(true)
    }
    const handleHideEdit = () => {
        setShowEdit(false)
    }
    
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    // const [showPass, setShowPass] = useState(false)
    // const toggleShowPass = () => {
    //     setShowPass(!showPass)
    // }
    return {
        handleImageUpload,
        image,
        showEdit,
        handleOpenEdit,
        handleHideEdit,
        handleCloseEmailModal,
        handleOpenEmailModal,
        openEmailModal,
        handleOpenChangePhoneModal,
        handleCloseChangePhoneModal,
        openChangePhone
    }
}

export default useAccountSettingUtils
