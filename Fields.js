import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const Fields = ({name,email}) => {
  return (
   <div className='data_val'>
    <h4>{name}</h4>
    <h4>{email}</h4>
    <Button variant="outlined" startIcon={<DeleteIcon />}>
  Delete
</Button>
  </div>
  )
}

export default Fields