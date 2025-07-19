import HoverImageText from './HoverImageText';
import img1 from '../../assets/Studio/image01.png';
import img2 from '../../assets/Studio/image02.png';
import img3 from '../../assets/Studio/image03.png';

const StudioServices = () => {
  return (
    <>
    <div className='container-fluid event-card-bg py-5'>
      <div className="container py-5">
        <h1 className='crdheading text-white'>Studio Services</h1>
        <p className='text-white fs-5'>
          Embark on a sonic adventure at our inaugural multi-genre Music Festival featuring <br />electrifying performances across our iconic destination.
        </p>
      </div>
      <div className="row justify-content-between py-5">
        <HoverImageText text="Vip Service" imageUrl={img1} bodyText="
                Something old, something new, something you’ve never experienced before: End your single days.           " />
        <HoverImageText text="Studio Time" imageUrl={img2} bodyText="
                Something old, something new, something you’ve never experienced before: End your single days.            " />
        <HoverImageText text="Mixing Engineers" imageUrl={img3} bodyText="
                Something old, something new, something you’ve never experienced before: End your single days.            " />
      </div>
















      </div>
    </>
  )
}

export default StudioServices
