// components/PlaceData.js
import img from '../img/img.png'
import Image from 'next/image'

const PlaceData = ({ id }) => {
  return (
    <div className="row" style={{ marginBottom: 30 }}>
      <div className="col" style={{ maxWidth: 220 }}>
        <Image src={img} width={200} height={200} alt='' />
      </div>
      <div className="col" style={{ textAlign: 'left' }}>
        <div style={{ marginBottom: 10 }}>Name : {obj.name}</div>
        <div style={{ marginBottom: 10 }}>Address : {obj.address}</div>
        <div className="row">
          <div className="col" style={{ maxWidth: 100 }}>Location : </div>
          <div className="col">
            lat : {obj.location.lat} <br />
            lng : {obj.location.lng}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceData;
