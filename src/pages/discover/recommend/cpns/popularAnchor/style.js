import styled from "styled-components";

export const PopularAnchorStyle = styled.div`
  width: 250px;
  margin-top: 30px;
  padding: 0 20px;
  .header {
    height: 24px;
    border-bottom: 1px solid #999;
    margin-bottom: 15px;
    .tip {
      font-weight: bold;
      color: #333;
    }
  }
  .anchor {
    width: 210px;
    display: flex;
    margin-bottom: 15px;
    cursor: pointer;
    .avatar {
      width: 40px;
      height: 40px;
    }
    .info {
      width: 148px;
      height: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 15px;
      .name {
        color: #000;
      }
      .icon {
        width: 13px;
        height: 13px;
      }
    }
  }
`