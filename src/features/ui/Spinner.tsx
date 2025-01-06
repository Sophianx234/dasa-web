import {HashLoader} from 'react-spinners'
function Spinner() {
    return (
        <div className='flex justify-center items-center h-dvh'>
            <HashLoader
            loading={true}
            color='#ffd8a8'
            size={150}/>
        </div>
    )
}

export default Spinner
