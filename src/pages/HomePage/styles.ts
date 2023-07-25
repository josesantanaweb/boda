import styled from "styled-components";
import fondo from "../../assets/images/fondo.jpg";

export const Home = styled.main`
  background-image: url(${fondo});
  position: relative;
  overflow: hidden;
`;

export const Plant = styled.img`
  margin: auto;
  position: absolute;
  top: -40px;
  right: -50px;
  width: 50%;
  transform: rotate(62deg);
`;


export const Roses = styled.img`
  width: 300px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Names = styled.h3`
  margin: 0;
  font-size: 4.2rem;
  font-family: "Major Mono Display";
  color: #000000;
  text-align: center;
  text-transform: capitalize;
  margin: 2rem auto 4rem;
  width: 180px;
  font-weight: 400;
  position: relative;
`;

export const Plant6 = styled.img`
  margin: auto;
  position: absolute;
  top: 100px;
  right: -180px;
  width: 70%;
  transform: rotate(62deg);
`;

export const Invitation = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  font-family: "Custom", sans-serif;
  color: #797777;
  font-style: italic;
  text-align: center;
  margin: 2.5rem auto 3rem;
  line-height: 1.5;
  font-weight: 400;
  width: 250px;
  padding-top: 40px;
  position: relative;
`;

export const Plant2 = styled.img`
  margin: auto;
  position: absolute;
  top: 80px;
  left: -130px;
  width: 50%;
  transform: rotate(212deg);
`;

export const Cancion = styled.audio`
  display: flex;
  margin: auto;
`;

export const Message = styled.p`
  margin: 0;
  font-size: 1.2rem;
  color: #797777;
  text-align: center;
  font-style: italic;
  font-family: "Custom";
  line-height: 1.5;
  border: 1px solid #797777;
  text-align: center;
  max-width: 240px;
  margin: 2rem auto 0;
  padding: 2rem;
  background-color: #ffffff;
  position: relative;
`;


export const Plant3 = styled.img`
  margin: auto;
  position: absolute;
  top: -60px;
  right: -110px;
  width: 50%;
  transform: rotate(90deg);
`;

export const Plant4 = styled.img`
  margin: auto;
  position: absolute;
  top: 170px;
  left: -160px;
  width: 50%;
  transform: rotate(194deg);
`;

export const Floral = styled.img`
  width: 40%;
  margin: auto;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  transform: rotate(6deg);
`;

export const Reservation = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-family: "Neuton", serif;
  color: #b39a96;
  text-transform: uppercase;
  text-align: center;
  margin: 4rem 0 2rem;
  font-weight: 400;
`;

export const Date = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-family: "Custom";
  color: #797777;
  text-align: center;
  margin: 3rem 4rem;
  font-weight: 400;
  display: block;
`;

export const DaysLeftTitle = styled.h4`
  margin: 0;
  font-size: 1.4rem;
  font-family: "Custom";
  color: #797777;
  text-align: center;
  margin: 3rem 4rem;
  font-weight: 400;
  display: block;
`;

export const DaysLeft = styled.div`
  margin: 0;
  background-color: rgba(252, 117, 133, 0.3);
  margin: 3rem 4rem;
  border-radius: 10px;
  padding: 1rem;
`;

export const DaysLeftRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DaysNumber = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-family: "Custom";
  color: #797777;
  text-align: center;
`;

export const Photos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 120px);
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  overflow: hidden;
`;

export const Photo = styled.img`
  height: 600px;
  width: 100%;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  position: relative;
`;

export const Plant5 = styled.img`
  margin: auto;
  position: absolute;
  top: 20px;
  left: -150px;
  width: 50%;
  transform: rotate(161deg);
`;

export const InformationRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 4rem;
`;

export const InformationItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
`;

export const InformationLogo = styled.img`
  width: 50px;
  height: 40px;
  margin-bottom: 1rem;
`;

export const InformationTitle = styled.h4`
  margin: 0;
  font-size: 0.875rem;
  font-family: "Neuton", serif;
  color: #797777;
  text-transform: uppercase;
  text-align: center;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

export const InformationHour = styled.h4`
  margin: 0;
  font-size: 0.875rem;
  font-family: "Custom";
  color: #797777;
  text-align: center;
  font-weight: 400;
`;

export const InformationSalon = styled.h6`
  margin: 0;
  font-size: 1.4rem;
  font-family: "Custom";
  color: #797777;
  text-align: center;
  font-weight: 400;
  margin-bottom: 1rem;
`;

export const InformationSite = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-family: "Custom";
  color: #797777;
  text-align: center;
  font-weight: 400;
  width: 200px;
  line-height: 1.5;
  font-style: italic;
  margin-bottom: 2rem;
  padding-top: 10px;
`;

export const InformationButton = styled.a`
  margin: 0;
  font-size: 1rem;
  font-family: "Custom";
  color: #797777;
  border: 1px solid #797777;
  border-radius: 35px;
  text-align: center;
  font-weight: 400;
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
`;

export const InformationRoses = styled.img`
  position: absolute;
  left: -130px;
  top: 170px;
  transform: rotate(269deg);
`;

export const Timeline = styled.div`
  background-color: rgba(251, 182, 190, 0.6);
  padding: 2rem;
`;

export const TimelineLine = styled.span`
  height: 2px;
  width: 100%;
  background-color: #ffffff;
  display: block;
  margin-bottom: 0.8rem;
`;

export const TimelineIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const TimelineCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: -30px;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: #ffffff;
  }
`;

export const TimelineIcon = styled.img`
  width: 30px;
`;

export const TimelineItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TimelineItem = styled.div`
`;

export const TimelineTitle = styled.h4`
  margin: 0;
  font-size: 1.2rem;
  font-family: "Custom";
  text-transform: capitalize;
  color: #797777;
  text-align: center;
  font-weight: 400;
  margin-bottom: 1rem;
`;

export const TimelineHour = styled.p`
  margin: 0;
  font-size: 1rem;
  font-family: "Custom";
  color: #797777;
  text-align: center;
  font-weight: 400;
`;

export const After = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 173px;
  position: relative;
`;

export const AfterImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const AfterInfo = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  width: 300px;
  z-index: 100;
  transform: translate(-50%);
`;

export const AfterTitle = styled.h5`
  margin: 0;
  font-size: 1.4rem;
  font-family: "Custom";
  color: #FFFFFF;
  text-align: center;
  font-weight: 400;
  margin-bottom: 1rem;
`;

export const AfterDate = styled.p`
  margin: 0;
  font-size: 1.4rem;
  font-family: "Custom";
  color: #FFFFFF;
  line-height: 1.5;
  text-align: center;
`;

export const Gift = styled.div`
  padding: 3rem 0;
  position: relative;
  overflow: hidden;
`;


export const Plant9 = styled.img`
  margin: auto;
  position: absolute;
  top: 90px;
  left: -180px;
  width: 70%;
  transform: rotate(291deg);
`;


export const GiftMessage = styled.p`
  margin: 0 auto;
  font-size: 1.3rem;
  font-family: "Custom";
  color: #797777;
  text-align: center;
  margin-bottom: 1rem;
  width: 250px;
  line-height: 1.5;
  font-style: italic;
`;

export const GiftInfo = styled.div`
  border: 1px solid #797777;
  text-align: center;
  max-width: 240px;
  margin: 2rem auto 0;
  padding: 2rem;
  background-color: #ffffff;
`;

export const GiftTitle = styled.h4`
  margin: 0;
  font-size: 1.5rem;
  font-family: "Custom";
  color: #797777;
  text-align: center;
  font-weight: 400;
  margin-bottom: 1rem;
`;

export const GiftSite = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-family: "Custom";
  color: #797777;
  text-align: center;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

export const GiftButton = styled.a`
  margin: 0px auto;
  font-size: 0.875rem;
  background-color: #ffffff;
  font-family: "Custom";
  color: #797777;
  border: 1px solid #797777;
  border-radius: 35px;
  text-align: center;
  font-weight: 400;
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
`;

export const Guests = styled.div`
  text-align: center;
  width: 100%;
  padding: 1rem 0;
  margin-bottom: 1rem;
  position: relative;
`;

export const Plant7 = styled.img`
  margin: auto;
  position: absolute;
  bottom: -110px;
  right: -70px;
  width: 50%;
  transform: rotate(116deg);
`;

export const Plant8 = styled.img`
  margin: auto;
  position: absolute;
  top: -20px;
  left: -70px;
  width: 50%;
  transform: rotate(289deg);
`;

export const GuestsIcon = styled.img`
  text-align: center;
  margin: 0 auto 1rem;
`;

export const GuestsTitle = styled.h5`
  font-size: 1.4rem;
  font-family: "Custom";
  color: #797777;
  text-align: center;
  font-weight: 500;
  margin: 0 auto 1rem;
`;

export const GuestsItems = styled.div`

`;

export const GuestsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 220px;
  margin: 0 auto 1rem;
  span {
    width: 35px;
    height: 35px;
    border-radius: 35px;
    border: 2px solid #e9babc;
    background-color: #ffffff;
  }
  p {
    margin: 0 auto;
    font-size: 1.4rem;
    font-family: "Custom";
    color: #797777;
    text-align: center;
  }
`;

export const Outfit = styled.div`
  text-align: center;
  width: 100%;
  padding: 1rem 0;
  margin-bottom: 1rem;
  border: 1px solid #797777;
  text-align: center;
  max-width: 240px;
  margin: 2rem auto 0;
  padding: 2rem;
  background-color: #ffffff;
  position: relative;
`;

export const Outfit2 = styled.div`
  text-align: center;
  width: 100%;
  padding: 1rem 0;
  margin-bottom: 1rem;
  border: 1px solid #797777;
  text-align: center;
  max-width: 240px;
  margin: 2rem auto 0;
  padding: 2rem;
  background-color: #ffffff;
  position: relative;
`;

export const Plant15 = styled.img`
  margin: auto;
  position: absolute;
  top: -30px;
  left: -140px;
  width: 50%;
  transform: rotate(212deg);
`;

export const Plant16 = styled.img`
  margin: auto;
  position: absolute;
  top: 220px;
  right: -140px;
  width: 50%;
  transform: rotate(96deg);
`;

export const Plant12 = styled.img`
  margin: auto;
  position: absolute;
  top: -30px;
  left: -90px;
  width: 50%;
  transform: rotate(283deg);
  z-index: 1;
`;

export const Plant13 = styled.img`
  margin: auto;
  position: absolute;
  top: 180px;
  right: -150px;
  width: 50%;
  transform: rotate(90deg);
`;

export const OutfitImg = styled.img`
  width: 60px;
  margin-bottom: 1rem;
`;

export const OutfitTitle = styled.h4`
  margin: 0 auto 1rem;
  font-size: 1.5rem;
  font-family: "Custom";
  color: #797777;
  text-align: center;
  font-weight: 400;
  width: 200px;
`;

export const OutfitText = styled.p`
  margin: 0 auto;
  font-size: 1.2rem;
  font-family: "Custom";
  color: #797777;
  text-align: center;
  width: 250px;
  line-height: 1.5;
  font-style: italic;
`;

export const Form = styled.div`
  padding: 3rem 2rem 6rem;
  position: relative;
`;

export const Plant10 = styled.img`
  margin: auto;
  position: absolute;
  top: -30px;
  right: -110px;
  width: 50%;
  transform: rotate(90deg);
`;

export const FormRose = styled.img`
  position: absolute;
  left: 0px;
  width: 50%;
  bottom: -60px;
  transform: rotate(91deg);
`;

export const FormTitle = styled.h4`
  margin: 0 auto 2.5rem;
  font-size: 2rem;
  font-family: "Custom";
  color: #797777;
  text-align: center;
  font-weight: 400;
  line-height: 1.5;
`;

export const FormInput = styled.input`
  background-color: rgba(252, 117, 133, 0.3);
  height: 40px;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 1.2rem;
  font-family: "Custom";
  width: 100%;
  margin-bottom: 1rem;
  padding: 0 1rem;
  box-sizing: border-box;
  ::placeholder {
    color: #797777;
    opacity: 1;
  }
`;

export const FormTextarea = styled.textarea`
  background-color: rgba(252, 117, 133, 0.3);
  height: 90px;
  border-radius: 4px;
  border: none;
  font-size: 1.2rem;
  outline: none;
  font-family: "Custom";
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 1rem;
  box-sizing: border-box;
  ::placeholder {
    color: #797777;
    opacity: 1;
  }
`;

export const FormSelect = styled.select`
  background-color: rgba(252, 117, 133, 0.3);
  height: 40px;
  border-radius: 4px;
  border: none;
  color: #797777;
  font-size: 1.2rem;
  outline: none;
  font-family: "Custom";
  width: 100%;
  margin-bottom: 1rem;
  padding: 0 1rem;
  box-sizing: border-box;
  ::placeholder {
    color: #797777;
    opacity: 1;
  }
`;

export const FormButton = styled.a`
  background-color: #f7a49e;
  color: #797777;
  height: 40px;
  font-size: 1.2rem;
  border-radius: 4px;
  border: none;
  outline: none;
  font-family: "Custom";
  width: 100%;
  margin-bottom: 1rem;
  font-weight: 400;
  padding: 0 1rem;
  height: 40px;
  border-radius: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const FormIconWS = styled.img`
  margin-right: 0.5rem;
  margin-bottom: 0.2rem;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ModalCard = styled.div`
  background-color: #ffffff;
  width: 90%;
  height: 250px;
  position: relative;
`;

export const ModalImg = styled.img`
  width: 100%;
`;

export const Social = styled.div`
  width: 100%;
  border: 1px solid rgb(121, 119, 119);
  text-align: center;
  max-width: 240px;
  margin: 2rem auto 0px;
  padding: 2rem;
  background-color: rgb(255, 255, 255);
  position: relative;
`;

export const Plant14 = styled.img`
  margin: auto;
  position: absolute;
  top: 20px;
  left: -150px;
  width: 50%;
  transform: rotate(212deg);
`;

export const SocialIcon = styled.img`
  width: 60px;
  margin: 0 auto 1rem;
`;

export const SocialHashtag = styled.a`
  background-color: rgb(255, 255, 255);
  display: block;
  text-align: center;
  font-size: 1.2rem;
  font-family: "Custom";
  border: 1px solid #949292;
  padding: 10px;
  margin: 0 auto 1rem;
  cursor: pointer;
`;

export const Music = styled.div`
  text-align: center;
  width: 100%;
  padding: 1rem 0;
  margin-bottom: 1rem;
  border: 1px solid #797777;
  text-align: center;
  max-width: 240px;
  margin: 2rem auto 0;
  padding: 2rem;
  background-color: #ffffff;
  position: relative;
`;

export const Plant17 = styled.img`
  margin: auto;
  position: absolute;
  bottom: -80px;
  right: -150px;
  width: 50%;
  transform: rotate(82deg);
`;


export const MusicIcon = styled.img`
  width: 30px;
  margin: 0 auto 1rem;
`;

