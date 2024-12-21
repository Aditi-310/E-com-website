import { Link } from 'react-router-dom';
import logo from '../../Assests/image/logo.png'
import Button from '@mui/material/Button';
import CountryDropdown from '../CountryDropdown';
import { FiUser } from 'react-icons/fi';
import { IoBagOutline } from "react-icons/io5"
import SearchBox from './SearchBox';

const Header = () => {
    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-purple">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">Year End Sale Now <b>Live</b> Flat 25% Discount</p>
                    </div>
                </div>

                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}><img src={logo} alt='logo' /></Link>
                            </div>
                            <div className='col-sm-10 d-flex align-items-center part2'>

                                <CountryDropdown />

                                {/* Header Search start here */}
                                <SearchBox />

                                {/* User logo start here */}
                                <div className='part3 d-flex align-items-center m1-auto'>
                                    <Button className='circle mr-3'><FiUser /></Button>
                                    <div className='m1-auto cartTab d-flex align-items-center'>
                                        <span className='price'>Rs.230</span>
                                        <div className='position-relative m1-2'>
                                            <Button className='circle'><IoBagOutline /></Button>
                                            <span className='count d-flex align-items-center justify-content-center'>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header;