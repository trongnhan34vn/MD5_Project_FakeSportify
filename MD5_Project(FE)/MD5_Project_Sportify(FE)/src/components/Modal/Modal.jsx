import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storage } from '../../firebase/config';
import { playlistSelector } from '../../redux/selector';
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import * as actions from '../../redux/actions';
import { useCookies } from 'react-cookie';

const Modal = (props) => {
    const [cookies] = useCookies(["userId"])
    const latestPlaylist = useSelector(playlistSelector).latestPlaylist;
    const [inputValue, setInputValue] = useState({
        id: '',
        name: '',
        image: null,
        status: true,
        userId: cookies["userId"]
    })
    const dispatch = useDispatch()

    // Upload Firebase
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
    const imagesListRef = ref(storage, "images/");
    const [selectedImage, setSelectedImage] = useState(null);


    // Viết hàm upload
    const uploadImgFile = (e) => {
        setImageUpload(pre => pre = e)
        let image = e
        const imageRef = ref(storage, `images/${image.name}`);
        uploadBytes(imageRef, image)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then((url) => {
                        dispatch(actions.updatePlaylist({
                            id: inputValue.id,
                            name: inputValue.name,
                            image: url,
                            status: true,
                            userId: cookies["userId"]
                        }))
                    })
            });
    };

    useEffect(() => {
        setImageUrls([])
    }, []);

    useEffect(() => {
        latestPlaylist ?
            setInputValue({
                id: latestPlaylist.id,
                image: latestPlaylist.image,
                name: latestPlaylist.name,
                status: true,
                userId: cookies["userId"]
            }) :
            setInputValue({ ...inputValue, name: "" })
    }, [latestPlaylist])

    const handleCloseModal = () => {
        props.setIsOpenModal(false);

    }

    useEffect(() => {
        
    },[])

    const handleChange = (e) => {
        let key = e.target.name;
        let value = e.target.value;
        setInputValue({ ...inputValue, [key]: value })
    }
    return (
        <div className='fixed z-50 top-20 left-1/2 -translate-x-1/2'>
            <div className='bg-[#282828] w-[524px] rounded-[8px] min-h-[384px]'>
                <div className='header flex justify-between p-[24px]'>
                    <p className='text-[#fff] text-[24px] font-CircularMedium'>Edit Details</p>
                    <div>
                        <button onClick={handleCloseModal} className='text-[#fff]'><i className="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
                <div className='body px-[24px] mb-1 items-center justify-center flex gap-6'>
                    <div className='img w-[180px] relative flex flex-col justify-center items-center bg-[#282828] drop-shadow-3xl h-[180px]'>
                        <input
                            className='opacity-0 w-full h-full text-[#fff] font-CircularLight text-sm hover:underline cursor-pointer truncate'
                            id='upload-photo'
                            type="file"
                            onChange={(event) => {
                                setSelectedImage(event.target.files[0]);
                            }} />
                        <svg
                            role="img"
                            height="48"
                            width="48"
                            aria-hidden="true"
                            data-testid="playlist"
                            viewBox="0 0 24 24"
                            data-encore-id="icon"
                            className="Svg-sc-ytk21e-0 haNxPq fill-[#b3b3b3] absolute z-[-1]">
                            <path d="M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z">
                            </path>
                        </svg>
                        {selectedImage && (<img className='w-48 h-full object-cover shadow-[0 4px 60px rgb(0 0 0 / 50%)]' src={URL.createObjectURL(selectedImage)} alt="" />)}
                    </div>
                    <div className='info flex flex-col gap-2'>
                        <div>
                            <input onChange={handleChange} value={inputValue.id} type="hidden" />
                            <label className='text-white peer-focus:text-[0.6875rem] mb-1 block peer-focus:opacity-1 font-bold text-[12px]' htmlFor="name">Name</label>
                            <input onChange={handleChange} name='name' value={inputValue.name} className='bg-[hsla(0,0%,100%,.1)] px-3 text-[14px] peer focus:bg-[#333] focus:border-[#535353] rounded-[4px] w-full font-CircularBook h-[40px] border-[1px] border-[transparent] outline-none text-[#fff]' id={'name'} type="text" />
                        </div>
                        <div>
                            <label className='text-white focus:text-[0.6875rem] mb-1 block focus:opacity-1 font-bold text-[12px]' htmlFor="description">Description</label>
                            <textarea className='px-[8px] pt-[8px] pb-[28px] resize-none bg-[hsla(0,0%,100%,.1)] text-[14px] focus:bg-[#333] focus:border-[#535353] rounded-[4px] w-full font-CircularBook h-[124px] border-[1px] border-[transparent] outline-none text-[#fff]' name="" id="description" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                </div>
                <div className='px-10 flex justify-end mb-2'>
                    <button onClick={() => uploadImgFile(selectedImage)} className='rounded-[500px] hover:scale-110 transition-all duration-200 font-CircularMedium h-12 px-8 bg-[#fff]'>Save</button>
                </div>
                <div className='px-6 pb-6'>
                    <p className=' font-CircularMedium text-[12px] text-[#fff]'>By proceeding, you agree to give Spotify access to the image you choose to upload. Please make sure you have the right to upload the image.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Modal;
