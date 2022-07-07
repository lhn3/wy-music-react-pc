import styled from "styled-components";

export const PlayerBarStyle = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;

  .main {
    width: 100%;
    height: 53px;
    background-position: 0 0;
    background-repeat: repeat;

    //中间播放控件
    .content {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
      width: 980px;
      height: 47px;
      display: flex;
      justify-content: space-around;

      //左边按钮
      .control {
        display: flex;
        align-items: center;

        .prev, .next {
          width: 28px;
          height: 28px;
          cursor: pointer;
        }

        .prev {
          background-position: 0 -130px;
        }

        .play {
          width: 36px;
          height: 36px;
          margin: 0 8px;
          cursor: pointer;
          background-position: 0 ${props => props.isPlay ? "-165px" : "-204px"};
        }

        .next {
          background-position: -80px -130px;
        }
      }

      //中间进度条
      .play-info {
        display: flex;
        width: 642px;
        align-items: center;

        .image {
          width: 34px;
          height: 34px;
          border-radius: 5px;
        }

        .info {
          flex: 1;
          color: #a1a1a1;
          margin-left: 10px;

          .song {
            color: #e1e1e1;
            position: relative;
            top: 8px;
            left: 8px;

            .singer-name {
              color: #a1a1a1;
              margin-left: 10px;
            }
          }

          .progress {
            display: flex;
            align-items: center;

            .ant-slider {
              width: 493px;
              margin-right: 10px;

              .ant-slider-rail {
                height: 9px;
                background: url(${require("@/assets/img/progress_bar.png")}) right 0;
              }

              .ant-slider-track {
                height: 9px;
                background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
              }

              .ant-slider-handle {
                width: 22px;
                height: 24px;
                border: none;
                margin-top: -7px;
                background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;
              }
            }

            .time {
              .now-time {
                color: #e1e1e1;
              }

              .divider {
                margin: 0 3px;
              }
            }
          }
        }
      }

      //右边播放模式
      .operator {
        display: flex;
        position: relative;
        top: 12px;

        .btn {
          width: 25px;
          height: 25px;
          cursor: pointer;
        }

        .favor {
          background-position: -88px -163px;
        }

        .share {
          background-position: -114px -163px;
        }

        .right {
          width: 126px;
          padding-left: 13px;
          background-position: -147px -248px;
          display: flex;

          .volume {
            background-position: -2px -248px;
          }

          .loop {
            background-position: ${props => {
              switch (props.sequence) {
                case 1:
                  return "-66px -248px"
                case 2:
                  return "-66px -344px"
                default:
                  return "-3px -344px"
              }
            }};
          }

          .playlist {
            width: 59px;
            background-position: -42px -68px;

            .playlist-length {
              color: #ffffff;
              line-height: 25px;
              text-align: right;
              padding-right: 20px;
            }
          }
        }
      }
    }
  }

  //组件显示隐藏锁
  .lock {
    position: absolute;
    top: -14px;
    right: 15px;
    width: 52px;
    height: 22px;
    background-position: 0 -380px;

    .lock-icon {
      width: 18px;
      height: 18px;
      margin: 5px auto;
      cursor: pointer;
      background-position: ${props => props.isLock ? "-100px" : "-80px"} -380px;
    }
  }

  //歌词
  .lyric {
    position: absolute;
    height: 60px;
    width: 800px;
    bottom: 60px;
    left: 50%;
    transform: translate(-50%);
    background-color: rgba(0, 0, 0, .5);
    border-radius: 5px;
    text-align: center;
    line-height: 60px;
    font-size: 24px;
    font-weight: bold;
    padding: 0 20px;
    color: #7bcba6;
  }
`