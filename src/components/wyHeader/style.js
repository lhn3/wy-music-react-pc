import styled from "styled-components";

export const HeaderStyle = styled.div`
  height: 75px;
  background-color: #242424;
  color: white;
  .content{
    height: 70px;
    background-color: #242424;
    display: flex;
    justify-content: space-between;
    //左边路由
    .left{
      display: flex;
      justify-content: space-around;
      .logo{
        cursor: pointer;
        height: 70px;
        width: 180px;
      }
      .select-list {
        display: flex;
        line-height: 70px;
        .select-item {
          position: relative;
          a {
            display: block;
            padding: 0 20px;
            color: #ccc;
            font-size: 14px;
          }
          :last-of-type a {
            position: relative;
            ::after {
              position: absolute;
              content: "";
              width: 28px;
              height: 19px;
              background-image: url(${require("@/assets/img/sprite_01.png")});
              background-position: -190px 0;
              top: 20px;
              right: -15px;
            }
          }
          &:hover a, a.active {
            color: #fff;
            background: #000;
            text-decoration: none;
          }
          .active .icon {
            position: absolute;
            display: inline-block;
            width: 12px;
            height: 7px;
            bottom: -1px;
            left: 50%;
            transform: translate(-50%, 0);
            background-position: -226px 0;
          }
        }
      }
    }
    
    //右边搜索
    .right{
      display: flex;
      align-items: center;
      color: #ccc;
      font-size: 12px;
      .search {
        width: 158px;
        height: 32px;
        border-radius: 16px;
        border: none;
        input {
          &::placeholder {
            font-size: 12px;
          }
        }
      }
      .center {
        width: 90px;
        height: 32px;
        line-height: 30px;
        text-align: center;
        color: #ccc;
        border: 1px solid #666;
        cursor: pointer;
        border-radius: 16px;
        margin: 0 16px;
        background-color: transparent;
      }
      .center:hover {
        color: #fff;
        border-color: #fff;
      }
      .login{
        color: #787878;
      }
      .login:hover{
        color: #fff;
        cursor: pointer;
      }
    }
  }
  .divider{
    height: 5px;
    background-color: #C20C0C;
  }
`