import React from 'react';
import Mediaitem from './Media_item.js';

class CScroller extends React.Component { 
    render() {      
      return (
                <div className="row media-group">  
                    <div className="xslide-wrapper scroller">
                        {
                            this.props.medias.map((media,index) => (                       
                                                        
                                    <Mediaitem key={index} cover_photo_url = {media.coverPhotoUrl} download_url =  {media.downloadUrl}
                                        tracking_link = {media.trackingLink} media_type = {media.mediaType}  />
                            
                            ))
                        }  
                    </div>
            </div>
      )
    }
  }
  export default CScroller;