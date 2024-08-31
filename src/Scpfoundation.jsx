import React from 'react';
import { scpdata } from './Scp.js';

function Scpfoundation(props){
    const{id}= props;
    const scp = scpdata.find(t=>t.Id === parseInt(id));
    

    return(
        <div className="row shadow-lg p-3 mb-5 rounded">
                <div className="col-md-6 col-sm-12">
                <h3><b>{scp.Item}</b></h3>
                <p>Class : {scp.Class}</p>
                <p>{scp.Heading}</p>
                <p>{scp.Subject}</p>
                </div>
                <div className="col-md-6" id="img">
                <img src={`/src/image/${scp.Img}`} alt={scp.Img} className="img w-75 h-75"/>
                </div>
                <div className="col-md-12">
                <p>{scp.Description}</p>
                </div>
                <div className="col-md-12">
                <p>{scp.Reference}</p>
                <p>{scp.ChronologicalHistory}</p>
                <p>{scp.Additional_Notes}</p>
                <p>{scp.Appendix}</p>
                </div>
            </div>
    );
}
export default Scpfoundation;