// components/TopBar.js
import img from '../img/img.png'
import Image from 'next/image'
import SearchBox from './SearchBox';
import Icon from './Icon'

const TopBar = ({ searchApi, setPlace }) => {
  return (
    <div className="topbar row" style={{ border: '1px solid #cccccc', padding: 10, backgroundColor: 'blue' }}>
      <div className="col" style={{ textAlign: 'left' }}>
        {/* <Image src={img} width={100} height={100} alt='' /> */}
        <Icon fontSize={20} icon={'ion:home'} style={{ color: '#ffffff' }} />
      </div>
      <div className="col" style={{ fontWeight: 'bold', textAlign: 'center', color: '#ffffff' }}>
        All Report
        <Icon fontSize={20} icon={'icon-park-outline:down'} style={{ color: '#ffffff', marginLeft: 10 }} />
      </div>
      <div className="col" style={{ textAlign: 'right' }}>
        <Icon fontSize={20} icon={'tdesign:adjustment'} style={{ color: '#ffffff' }} />
      </div>
    </div>
  );
}

export default TopBar;
