import styled from "styled-components";

export const PlayerInfoPageStyle = styled.div`
  .content {
    background: url(${require("@/assets/img/wrap-bg.png")}) repeat-y;
    background-color: #fff;
    display: flex;
    .player-left {
      width: 710px;
    }
    .player-right{
      width: 270px;
      padding: 20px 40px 40px 30px;
    }
  }
`