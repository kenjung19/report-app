// components/Body.js
import img from '../img/img.png'
import Image from 'next/image'
import MockData from './MockData'
import Icon from './Icon'

const Body = ({ place, resdata }) => {
  return (
    <>
      <div className="body row" style={{ borderLeft: '1px solid #cccccc', borderRight: '1px solid #cccccc', borderBottom: '1px solid #cccccc', padding: 10, color: '#cccccc' }}>
        <div className="col" style={{ textAlign: 'center', fontWeight: 'bold' }}>
          Submission
        </div>
        <div className="col" style={{ textAlign: 'center', fontWeight: 'bold', color: 'blue' }}>
          Engagement
        </div>
      </div>
      <div className="body row" style={{ borderLeft: '1px solid #cccccc', borderRight: '1px solid #cccccc', padding: 10, color: '#cccccc' }}>
        <div className="col-3" style={{ textAlign: 'center', fontWeight: 'bold' }}>
          <div style={{ color: '#000000', borderBottom: '2px solid blue' }}>Daily</div>
        </div>
        <div className="col-3" style={{ textAlign: 'center', fontWeight: 'bold' }}>
          Weekly
        </div>
        <div className="col-3" style={{ textAlign: 'center', fontWeight: 'bold' }}>
          Monthly
        </div>
        <div className="col" style={{ textAlign: 'center', fontWeight: 'bold', color: 'blue' }}>
          <Icon fontSize={20} icon={'foundation:graph-bar'} />
        </div>
        <div className="col" style={{ textAlign: 'center', fontWeight: 'bold' }}>
          <Icon fontSize={20} icon={'fa-solid:list'} />
        </div>
      </div>
      <div className="body row" style={{ borderLeft: '1px solid #cccccc', borderRight: '1px solid #cccccc', padding: 10, color: '#cccccc', fontSize: 13 }}>
        <div className="col" style={{ textAlign: 'center', fontWeight: 'bold' }}>
          <br />
          <Icon fontSize={20} icon={'mingcute:left-line'} />
        </div>
        <div className="col" style={{ textAlign: 'center', fontWeight: 'bold' }}>
          <div>M</div>
          <div>17</div>
        </div>
        <div className="col" style={{ textAlign: 'center', fontWeight: 'bold' }}>
          <div>T</div>
          <div style={{ borderRadius: 9999, backgroundColor: 'blue', color: '#ffffff' }}>18</div>
        </div>
        <div className="col" style={{ textAlign: 'center', fontWeight: 'bold' }}>
          <div>W</div>
          <div>19</div>
        </div>
        <div className="col" style={{ textAlign: 'center', fontWeight: 'bold' }}>
          <div>TH</div>
          <div>20</div>
        </div>
        <div className="col" style={{ textAlign: 'center', fontWeight: 'bold' }}>
          <div>F</div>
          <div>21</div>
        </div>
        <div className="col" style={{ textAlign: 'center', fontWeight: 'bold' }}>
          <div>S</div>
          <div>22</div>
        </div>
        <div className="col" style={{ textAlign: 'center', fontWeight: 'bold' }}>
          <div>S</div>
          <div>23</div>
        </div>
        <div className="col" style={{ textAlign: 'center', fontWeight: 'bold' }}>
          <br />
          <Icon fontSize={20} icon={'mingcute:right-line'} />
        </div>
        <div className="col" style={{ textAlign: 'center', fontWeight: 'bold', color: 'blue' }}>
          <br />
          <Icon fontSize={20} icon={'mdi:arrow-down'} />
        </div>
        <div className="col" style={{ textAlign: 'center', fontWeight: 'bold', color: 'blue' }}>
          <br />
          Today
        </div>
      </div>

      <div className="body row" style={{ borderLeft: '1px solid #cccccc', borderRight: '1px solid #cccccc', padding: 10, color: '#cccccc' }}>
        <div className="col" style={{ textAlign: 'left', fontWeight: 'bold', fontSize: 13, color: '#000000' }}>
          18 December 2019
        </div>
        <div className="col" style={{ textAlign: 'right', fontWeight: 'bold', color: 'blue' }}>
          <Icon fontSize={20} icon={'mingcute:upload-line'} />
        </div>
      </div>

      <div className="body row" style={{ borderLeft: '1px solid #cccccc', borderRight: '1px solid #cccccc', color: '#cccccc', padding: 10 }}>

        <div className="col-6 col-xs-6 col-sm-6 col-md-3" style={{ textAlign: 'center', fontWeight: 'bold', paddingLeft: 5, paddingRight: 5, paddingTop: 10 }}>
          <div style={{ border: '1px solid #cccccc' }}>
            <div style={{ marginTop: 20, fontSize: 20, color: 'blue' }}>
              <Icon fontSize={20} icon={'iconamoon:like'} />
              &nbsp;Like
            </div>
            <div style={{ marginTop: 30, fontSize: 40, color: '#000000' }}>34</div>
            <div style={{ marginBottom: 50, fontSize: 13 }}>Likes</div>
          </div>
        </div>

        <div className="col-6 col-xs-6 col-sm-6 col-md-3" style={{ textAlign: 'center', fontWeight: 'bold', paddingLeft: 5, paddingRight: 5, paddingTop: 10 }}>
          <div style={{ border: '1px solid #cccccc' }}>
            <div style={{ marginTop: 20, fontSize: 20, color: 'blue' }}>
              <Icon fontSize={20} icon={'iconamoon:comment'} />
              &nbsp;Comment
            </div>
            <div style={{ marginTop: 30, fontSize: 40, color: '#000000' }}>56</div>
            <div style={{ marginBottom: 50, fontSize: 13 }}>Comments</div>
          </div>
        </div>


        <div className="col-6 col-xs-6 col-sm-6 col-md-3" style={{ textAlign: 'center', fontWeight: 'bold', paddingLeft: 5, paddingRight: 5, paddingTop: 10 }}>
          <div style={{ border: '1px solid #cccccc' }}>
            <div style={{ marginTop: 20, fontSize: 20, color: 'blue' }}>
              <Icon fontSize={20} icon={'iconamoon:gift'} />
              &nbsp;Point
            </div>
            <div style={{ marginTop: 30, fontSize: 40, color: '#000000' }}>450</div>
            <div style={{ marginBottom: 50, fontSize: 13 }}>Point</div>
          </div>
        </div>

        <div className="col-6 col-xs-6 col-sm-6 col-md-3" style={{ textAlign: 'center', fontWeight: 'bold', paddingLeft: 5, paddingRight: 5, paddingTop: 10 }}>
          <div style={{ border: '1px solid #cccccc' }}>
            <div style={{ marginTop: 20, fontSize: 20, color: 'blue' }}>
              <Icon fontSize={20} icon={'ion:diamond'} />
              &nbsp;Diamond
            </div>
            <div style={{ marginTop: 30, fontSize: 40, color: '#000000' }}>40</div>
            <div style={{ marginBottom: 50, fontSize: 13 }}>Diamond</div>
          </div>
        </div>



      </div>
    </>

  );
}

export default Body;
