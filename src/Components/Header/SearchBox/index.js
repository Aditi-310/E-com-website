import Button from '@mui/material/Button';
import { IoSearch } from 'react-icons/io5';
const SearchBox = () => {
    return (

        <div className='headerSearch m1-3'>
            <input type='text' placeholder='Search Products...' />
            <Button><IoSearch /></Button>
        </div>
    )

}
export default SearchBox;