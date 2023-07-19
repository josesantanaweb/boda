import styled from "styled-components";

export const Home = styled.main``;

export const Roses = styled.img`
  width: 300px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Names = styled.h3`
  margin: 0;
  font-size: 1.8rem;
  font-family: "Great Vibes", cursive;
  color: #000000;
  text-align: center;
  margin: 4rem 0 4rem;
  font-weight: 400;
`;

export const Invitation = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-family: "Neuton", serif;
  color: #eabe3f;
  text-transform: uppercase;
  text-align: center;
  margin: 2rem 0 3rem;
  line-height: 1.5;
  font-weight: 400;
`;


export const Cancion = styled.audio`
  display: flex;
  margin: auto;
`;

export const Message = styled.p`
  margin: 0;
  font-size: 0.875rem;
  font-family: "Neuton", serif;
  color: #E9BABC;
  text-align: center;
  font-style: italic;
  font-family: "Nunito", sans-serif;
  margin: 2rem 4rem 4rem;
  line-height: 1.5;
`;

export const Floral = styled.img`
  width: 175px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Reservation = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-family: "Neuton", serif;
  color: #EABE3F;
  text-transform: uppercase;
  text-align: center;
  margin: 4rem 0 2rem;
  font-weight: 400;
`;

export const Date = styled.p`
  margin: 0;
  font-size: 1rem;
  font-family: "Nunito", sans-serif;
  color: #000000;
  text-align: center;
  margin: 3rem 4rem;
  font-weight: 400;
  display: block;
`;

export const DaysLeftTitle = styled.h4`
  margin: 0;
  font-size: 1.2rem;
  font-family: "Nunito", sans-serif;
  color: #000000;
  text-align: center;
  margin: 3rem 4rem;
  font-weight: 400;
  display: block;
`;

export const DaysLeft = styled.div`
  margin: 0;
  background-color: rgba(252, 117, 133, 0.1);
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
  font-size: 1rem;
  font-family: "Nunito", sans-serif;
  color: #000000;
  text-align: center;
`;

export const Photos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  overflow: hidden;
`;

export const Photo = styled.img`
  height: 196px;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  position: relative;
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
  color: #000000;
  text-transform: uppercase;
  text-align: center;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

export const InformationHour = styled.h4`
  margin: 0;
  font-size: 0.875rem;
  font-family: "Nunito", sans-serif;
  color: #000000;
  text-align: center;
  font-weight: 400;
`;

export const InformationSalon = styled.h6`
  margin: 0;
  font-size: 1rem;
  font-family: "Nunito", sans-serif;
  color: #000000;
  text-align: center;
  font-weight: 400;
  margin-bottom: 1rem;
`;

export const InformationSite = styled.p`
  margin: 0;
  font-size: 0.875rem;
  font-family: "Nunito", sans-serif;
  color: #000000;
  text-align: center;
  font-weight: 400;
  width: 200px;
  line-height: 1.5;
  font-style: italic;
  margin-bottom: 2rem;
`;

export const InformationButton = styled.a`
  margin: 0;
  font-size: 0.875rem;
  font-family: "Nunito", sans-serif;
  color: #E9BABC;
  border: 1px solid #E9BABC;
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
  background-color: rgba(252, 117, 133, 0.1);
  padding: 2rem;
`;

export const TimelineLine = styled.span`
  height: 2px;
  width: 100%;
  background-color: #ffffff;
  display: block;
  margin-bottom: 1.5rem;
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
  width: 60px;
`;

export const TimelineTitle = styled.h4`
  margin: 0;
  font-size: 0.875rem;
  font-family: "Nunito", sans-serif;
  color: #eabe3f;
  text-align: center;
  font-weight: 400;
  margin-bottom: 1rem;
`;

export const TimelineHour = styled.p`
  margin: 0;
  font-size: 0.75rem;
  font-family: "Nunito", sans-serif;
  color: #000000;
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
  top: 45%;
  left: 50%;
  width: 300px;
  z-index: 100;
  transform: translate(-50%);
`;

export const AfterTitle = styled.h5`
  margin: 0;
  font-size: 1.2rem;
  font-family: "Nunito", sans-serif;
  color: #FFFFFF;
  text-align: center;
  font-weight: 400;
  margin-bottom: 1rem;
`;

export const AfterDate = styled.p`
  margin: 0;
  font-size: 1rem;
  font-family: "Nunito", sans-serif;
  color: #FFFFFF;
  text-align: center;
`;

export const Gift = styled.div`
  padding: 3rem 0;
  position: relative;
  overflow: hidden;
`;

export const GiftMessage = styled.p`
  margin: 0 auto;
  font-size: 0.875rem;
  font-family: "Nunito", sans-serif;
  color: #000000;
  text-align: center;
  width: 250px;
  line-height: 1.5;
  font-style: italic;
`;

export const GiftInfo = styled.div`
  border: 1px solid #E9BABC;
  text-align: center;
  max-width: 240px;
  margin: 2rem auto 0;
  padding: 2rem;
`;

export const GiftTitle = styled.h4`
  margin: 0;
  font-size: 1rem;
  font-family: "Neuton", serif;
  color: #E9BABC;
  text-transform: uppercase;
  text-align: center;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.3rem;
  margin-bottom: 1rem;
`;

export const GiftSite = styled.p`
  margin: 0;
  font-size: 0.875rem;
  font-family: "Nunito", sans-serif;
  color: #E9BABC;
  text-align: center;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

export const GiftButton = styled.a`
  margin: 0px auto;
  font-size: 0.875rem;
  font-family: "Nunito", sans-serif;
  color: #E9BABC;
  border: 1px solid #E9BABC;
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

export const GiftRoses = styled.img`
  position: absolute;
  right: -172px;
  top: 170px;
  transform: rotate(91deg);
`;

export const Outfit = styled.div`
  text-align: center;
  background-color: rgba(252, 117, 133, 0.1);
  width: 100%;
  padding: 1rem 0;
  margin-bottom: 1rem;
`;

export const OutfitImg = styled.img`
  width: 60px;
  margin-bottom: 1rem;
`;

export const OutfitTitle = styled.h4`
  margin: 0 auto 1rem;
  font-size: 1rem;
  font-family: "Neuton", serif;
  color: #000000;
  text-transform: uppercase;
  text-align: center;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.3rem;
  width: 200px;
`;

export const OutfitText = styled.p`
  margin: 0 auto;
  font-size: 0.875rem;
  font-family: "Nunito", sans-serif;
  color: #000000;
  text-align: center;
  width: 250px;
  line-height: 1.5;
  font-style: italic;
`;

export const Form = styled.div`
  padding: 3rem 2rem 6rem;
  position: relative;
`;

export const FormTitle = styled.h4`
  margin: 0 auto 2.5rem;
  font-size: 1.2rem;
  font-family: "Neuton", serif;
  color: #eabe3f;
  text-transform: uppercase;
  text-align: center;
  font-weight: 400;
  line-height: 1.5;
`;

export const FormInput = styled.input`
  background-color: rgba(252, 117, 133, 0.1);
  height: 40px;
  border-radius: 4px;
  border: none;
  outline: none;
  font-family: "Nunito", sans-serif;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0 1rem;
  box-sizing: border-box;
  ::placeholder {
    color: #000000;
    opacity: 1;
  }
`;

export const FormTextarea = styled.textarea`
  background-color: rgba(252, 117, 133, 0.1);
  height: 90px;
  border-radius: 4px;
  border: none;
  outline: none;
  font-family: "Nunito", sans-serif;
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 1rem;
  box-sizing: border-box;
  ::placeholder {
    color: #000000;
    opacity: 1;
  }
`;

export const FormSelect = styled.select`
  background-color: rgba(252, 117, 133, 0.1);
  height: 40px;
  border-radius: 4px;
  border: none;
  outline: none;
  font-family: "Nunito", sans-serif;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0 1rem;
  box-sizing: border-box;
  ::placeholder {
    color: #000000;
    opacity: 1;
  }
`;

export const FormButton = styled.a`
  background-color: #E9BABC;
  color: #ffffff;
  height: 40px;
  font-size: 0.875rem;
  border-radius: 4px;
  border: none;
  outline: none;
  font-family: "Nunito", sans-serif;
  width: 100%;
  margin-bottom: 1rem;
  text-transform: uppercase;
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

export const FormRoses = styled.img`
  position: absolute;
  bottom: -80px;
  left: -20px;
  width: 220px;
  z-index: -1;
`;
