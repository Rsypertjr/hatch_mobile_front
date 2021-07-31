import React from 'react';
class PlayButton extends React.Component {
    render() {
        return <button className="ui button play-button" data-toggle="toggle"
                title="Will not Play video stored in Firebase" data-placement="bottom"><div className="arrow-right"></div></button>; 
    }
}

class Empty extends React.Component {
    render() { 
        const spanStyle = {
            display:'none'
        }
        return <span style={spanStyle}></span>;
    }
}


class Mediaitem extends React.Component { 

    constructor(props){
        super(props);
        this.downloadMedia = this.downloadMedia.bind(this);   
        this.clipBoard = React.createRef();        
        this.clipBoardButton = React.createRef();

        this.state = {
            isVideo: false,
            linkUrl:'',
            tvalue:'',
            trackingLink: this.props.tracking_link,
            downloadUrl: this.props.download_url
        };

    }

    componentDidMount(){
        this.clipBoardButton.current.focus();
        this.clipBoard.current.focus();
        var cutTextareaBtn = this.clipBoardButton.current;
        var this2 = this;
        cutTextareaBtn.addEventListener('click', function(event) {
        var cutTextarea = this2.clipBoard.current;

        let value = cutTextarea.value;
        cutTextarea.select();

        try {
            var successful = document.execCommand('cut');
                var msg = successful ? 'successful' : 'unsuccessful';
                alert('Cutting text command was ' + msg + " and '" + value + "' was copied to clipboard");
            } catch(err) {
                console.log('Oops, unable to cut');
            }
        });
    }

    downloadMedia(){
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = this.state.downloadUrl;

        fetch(proxyurl + url, {
            method: 'GET',
            headers: {
                'Content-Type': this.props.media_type,
                'Access-Control-Allow-Origin':'*'
            },
        })
        .then((response) => response.blob())
        .then((blob) => {
            const link = document.getElementById('forDownload');
            link.setAttribute(
            'download',
            this.state.downloadUrl,
            );

            // Start download
            link.click();

        });
    }

   
    render() {      
        
        let button;
        if(this.props.media_type.toString() === "video"){
            this.setState.isVideo = true;
            button = <PlayButton />        }
        else {
            this.setState.isVideo = false;
            button = <Empty />
        }

        const invisibility = {
            opacity:0,
            height:0,
            width:0            
        }

       
      return (
          <div className="item">    

                <img src={this.props.cover_photo_url} className="img-responsive item-image" alt="..." width="70" height="120"></img>
                <div className="media-buttons ui icon buttons">
                    <button className="ui button no-play"  ref={this.clipBoardButton} disable><i className="fas fa-link" aria-hidden="true"></i></button>
                    <button className="ui button no-play" onClick={this.downloadMedia.bind(this.props.download_url, this.props.media_type)}
                        data-toggle="tooltip" data-placement="top" title="Click will only download the Firebase Url"                
                        ><i className="fas fa-download" aria-hidden="true"></i>
                    </button>                   
                    { button }
                </div>
                <a href={this.state.linkUrl} id="forDownload" style={invisibility}>Check</a> 
                <textarea ref={this.clipBoard} style={invisibility}>{this.state.trackingLink}</textarea>
          </div>
        
     
        )
    }
  }
  export default Mediaitem;