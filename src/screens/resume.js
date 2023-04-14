import { useNavigate} from 'react-router-dom';



function Resume(){
    const navigate = useNavigate();
    function handleHome() {
        navigate('/homescreen/experience');
    }
    return(
        <>    
         <div className='close'>
            <div className="icon" onClick={handleHome}></div>
            <div className="icon white"></div>
            <div className="icon icon-left"></div>
        </div>

      
      <iframe name="I1" id="resumee" width="100%" 
      src="https://drive.google.com/file/d/1syfb_7lEpWx3OLRSRGRnQIYdsRkInrI3/preview"></iframe>
        </>
    )
}

export default Resume;