import styled from 'styled-components';

export const DiscCoverStyle = styled.div`
  width: ${props => props.width + "px"};
  .album-image {
    position: relative;
    width: ${props => props.width + "px"};
    height: ${props => props.size + 10 + "px"};
    overflow: hidden;
    margin-top: 5px;
    cursor: pointer;
    .img-box {
      width: ${props => props.size + "px"};
      height: ${props => props.size + "px"};
      box-shadow: 3px 5px 5px rgba(0,0,0,.5);
    }
    img {
      width: 100%;
      height: 100%;
    }
    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${props => props.bgp +'px'};
      text-indent: -9999px;
    }
    .play {
      position: absolute;
      top: ${props => props.size - 32 + "px"};
      left: ${props => props.size - 32 + "px"};
      width: 27px;
      height: 27px;
      background-position: -41px -21px;
      display: none;
    }
  }
  .album-image:hover {
    .play {
      display: block;
    }
  }
  .album-info {
    font-size: 12px;
    width: ${props => props.size};
    .name {
      display: block;
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .artist {
      display: block;
      color: #666;
    }
  }
`