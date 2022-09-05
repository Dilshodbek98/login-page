import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 600px;
  background-color: #fff;
  align-items: center;
  position: relative;
  .iks{
    position: absolute;
    top: 14px;
    right: 15px;
    cursor: pointer;
    transition: all .2s;
    :hover{
      transform: scale(1.2);
    }
  }
  .heading {
    display: flex;
    margin-top: 50px;
    margin-bottom: 53px;
    .line-vertical{
      width: 1px;
      height: 16px;
      background-color: #3D3D3D;
      margin: 0 10px;
    }
  }
  .label{
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 14px;
  }
  input{
    width: 300px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #EAEAEA;
    font-size: 14px;
    padding: 12px 14px;
    line-height: 16px;
    color: #3D3D3D;
    margin-bottom: 17px;
    :focus{
      outline: 1px solid #46A358;
    }
    ::placeholder{
      color: #A5A5A5;
    }
  };

  .password{
    color: #3D3D3D;
    margin-bottom: 57px;
  }
  .hide{
    position: absolute;
    right: 115px;
    top: 220px;
    cursor: pointer;
  }
  .forgot {
    font-size: 14px;
    line-height: 16px;
    color: #46A358;
    position: absolute;
    right: 96px;
    top: 260px;
    cursor: pointer;
  }
  .loginBtn {
    width: 300px;
    height: 45px;
    background-color: #46A358;
    font-size: 16px;
    line-height: 16px;
    border: 1px solid #46A358;
    border-radius: 5px;
    color: #fff;
    font-weight: 700;
    margin-bottom: 46px;
    cursor: pointer;
    transition: all 0.2;
    :active{
      transform: scale(0.95);
    }
  }
  .or{
    display: flex;
    width: 300px;
    justify-content: center;
    align-items: center;
    margin-bottom: 27px;
    .line-horizontal{
      height: 1px;
      background-color: #EAEAEA;
      width: 100px;
    }
    p{
        font-size: 13px;
      line-height: 16px;
      color: #3D3D3D;
      }
  }
  .google{
    display: flex;
    width: 300px;
    height: 40px;
    border: 1px solid #EAEAEA;
    border-radius: 5px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    gap: 10px;
    padding-left: 80px;
    cursor: pointer;
    transition: all 0.2s;
    .text{
      font-size: 13px;
      line-height: 16px;
      color: #727272;
    }
    :active{
      transform: scale(0.95);
    }
  }
  .facebook {
    margin-bottom: 58px;
  }
  .footer {
    height: 10px;
    width: 500px;
    background-color: #46A358;
  }
`
export const Title = styled.p`
  color: ${(props) => props.color};
  font-size: 20px;
  line-height: 16px;
  cursor: pointer;
`