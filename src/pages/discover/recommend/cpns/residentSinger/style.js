import styled from "styled-components";

export const ResidentSingerStyle = styled.div`
  width: 250px;
  height: 455px;
  margin-top: 15px;
  padding: 0 20px;

  .header {
    height: 24px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #999;
    margin-bottom: 15px;

    .tip {
      font-weight: bold;
      color: #333;
    }

    .all {
      color: #666;
    }
  }

  .singer {
    width: 210px;
    display: flex;
    margin-bottom: 15px;
    cursor: pointer;
    img {
      width: 62px;
      height: 62px;
    }
    .info {
      border: 1px solid #e9e9e9;
      width: 148px;
      height: 62px;
      display: flex;
      flex-direction: column;
      line-height: 31px;
      padding-left: 15px;
      background-color: #f4f4f4;
      .name {
        font-weight: bold;
        font-size: 14px;
      }
      .desc {
        color: #666;
      }
    }
  }
  .bottom {
    width: 210px;
    height: 31px;
    color: #333;
    font-weight: bold;
    cursor: pointer;
    border: 0.5px solid #e9e9e9;
    border-radius: 5px;
    background-position: right -60px;
  }
`