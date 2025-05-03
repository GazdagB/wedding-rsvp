import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import AreYouSureModal from '../components/Modals/AreYouSureModal';
import { MdDeleteForever } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import axios from 'axios';
import EditModal from '../components/Modals/EditModal';


import { AnimatePresence } from "framer-motion";

const Guests = () => {
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const [selectedGuest, setSelectedGuest] = useState(null);
  const [rows, setRows] = useState([]);

   const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const response = await axios.get(`${API_URL}/rsvp/all`);
        setRows(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGuests();
  }, [deleteModalIsOpen,editModalIsOpen,]);

  const openModal = (guest, type) => {
    setSelectedGuest(guest);
    if (type === 'delete') {
      setDeleteModalIsOpen(true);
    } else if (type === 'edit') {
      setEditModalIsOpen(true);
    }
  };

  const closeModal = (type) => {
    if (type === 'delete') {
      setDeleteModalIsOpen(false);
    } else if (type === 'edit') {
      setEditModalIsOpen(false);
    }
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    { field: 'familyName', headerName: 'Család', width: 200 },
    {
      field: 'accept',
      headerName: 'Státusz',
      width: 150,
      renderCell: (params) => params.value ? '✅ Elfogadta' : '❌ Visszautasította',
    },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'adults', headerName: 'Felnőttek', width: 120 },
    { field: 'children5to10', headerName: 'Gyerekek (5-10)', width: 150 },
    { field: 'childrenUnder5', headerName: 'Gyerekek (5 alatt)', width: 180 },
    {
      field: 'delete',
      headerName: 'Törlés',
      width: 100,
      filterable: false,
      sortable: false,
      renderCell: (params) => (
        <IconButton onClick={() => openModal(params.row, "delete")}>
          <MdDeleteForever className='text-red-400' />
        </IconButton>
      ),
    },
    {
      field: 'edit',
      headerName: 'Szerkesztés',
      width: 100,
      filterable: false,
      sortable: false,
      renderCell: (params) => (
        <IconButton onClick={() => openModal(params.row, "edit")}>
          <RiEdit2Fill className='text-amber-500' />
        </IconButton>
      ),
    },
  ];

  return (
    <div className='flex items-center justify-center w-full'>
      <div className='w-[100%] md:w-[70%] max-w-[300px] sm:max-w-[500px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1250px] mt-10 md:mt-30'>
        <DataGrid
          rows={rows}
          columns={columns}
          disableSelectionOnClick
          hideFooterPagination
          getRowId={(row) => row._id}
        />
      </div>

      <AnimatePresence>
        {editModalIsOpen && 
          <EditModal setEditModalIsOpen={setEditModalIsOpen} guest={selectedGuest} />
        }
      </AnimatePresence>

      {deleteModalIsOpen && (
        <AreYouSureModal setDeleteModalIsOpen={setDeleteModalIsOpen} guest={selectedGuest} />
      )}
    </div>
  );
};

export default Guests;
