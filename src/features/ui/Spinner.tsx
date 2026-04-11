import {HashLoader} from 'react-spinners'
function Spinner() {
    return (
        <div className='flex justify-center items-center h-dvh'>
            <HashLoader
            loading={true}
            color='#18181B'
            size={80}/>
        </div>
    )
}

export default Spinner
