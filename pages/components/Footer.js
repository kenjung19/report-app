// components/Footer.js
import Icon from './Icon'

const Footer = () => {
  return (
    <div className="footer row" style={{ border: '1px solid #cccccc', padding: 10, color: '#cccccc' }}>
      <div className="col">
        <Icon fontSize={20} icon={'jam:write'} /> <br />
        Write
      </div>
      <div className="col">
        <Icon fontSize={20} icon={'cil:check-circle'} /> <br />
        Approval
      </div>
      <div className="col">
        <Icon fontSize={20} icon={'la:telegram-plane'} /> <br />
        Report
      </div>
      <div className="col" style={{ color: 'blue' }}>
        <Icon fontSize={20} icon={'icon-park-solid:pie-three'} /> <br />
        Statistic
      </div>
      <div className="col">
        <Icon fontSize={20} icon={'icon-park-solid:setting'} /> <br />
        Setting
      </div>
    </div>
  );
}

export default Footer;
