import Display from '../Display'
import Dialpad from './../Dialpad/index';
import CallBtn from './../CallBtn/index';
import CancelNewCall from '../CancelNewCall';

const Phone = ({ isVisible }) => {

    return (
        <div className={`${isVisible ? 'flex' : 'hidden'} flex-col items-center justify-center w-full h-full`}>
            <div className='flex flex-col items-center justify-around w-5/6 h-5/6'>
                <CancelNewCall />
                <Display />
                <Dialpad />
                <CallBtn />
            </div>
        </div>
    )
}

export default Phone