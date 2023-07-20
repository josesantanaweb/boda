import React, { useState, useEffect } from "react";
import * as S from "./styles";
import floral from "../../assets/images/floral.png"
import photo from "../../assets/images/photo.png"
import users from "../../assets/images/users.png"
import love from "../../assets/images/love.png"
import after from "../../assets/images/after.png"
import traje from "../../assets/images/traje.png"
import bebe from "../../assets/images/bebe.png"
import whatsapp from "../../assets/images/whatsapp.png";
import copas from "../../assets/images/copas.png";
import fiesta from "../../assets/images/fiesta.png";
import card from "../../assets/images/card.png";
import regalo from "../../assets/images/regalo.png";
import close from "../../assets/images/close.svg";
import cancion from "../../assets/Caminar de Tu Mano.mp3";

const HomePage = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [name, setName] = useState('Desconocido');
  const [confirmation, setConfirmation] = useState('si');
  const [openModal, setOpenModal] = useState(false);

  const deadline = "September, 02, 2023";

  const getTime = (deadline: any) => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  const handleWhatsappRobert = () => {
    if (typeof window !== "undefined") {
      window.open(
        `https://api.whatsapp.com/send/?phone=584243804740&text=Hola%20soy%20${name}%20y%20${confirmation}%20asistire%20a%20la%20boda!&type=phone_number&app_absent=0`,
        "_blank"
      );
    }
  };

  const handleWhatsappVanessa = () => {
    if (typeof window !== "undefined") {
      window.open(
        `https://api.whatsapp.com/send/?phone=584243286365&text=Hola%20soy%20${name}%20y%20${confirmation}%20asistire%20a%20la%20boda!&type=phone_number&app_absent=0`,
        "_blank"
      );
    }
  };

  return (
    <S.Home>
      <S.Invitation>
        Están cordialmente invitados a la celebración de nuestra boda
      </S.Invitation>
      <S.Names>Vanessa y Robert</S.Names>
      <S.Cancion controls>
        <source src={cancion} type="audio/mpeg" />
        Your browser does not support the audio element.
      </S.Cancion>
      <S.Message>
        Ha sido un largo camino, durante el que hemos crecido y aprendido
        juntos; hemos compartido alegrías y tristezas, abundancia y escasez.. De
        eso se trata nuestro amor, una magia que el tiempo y la distancia no
        pudieron borrar.
      </S.Message>
      <S.Names style={{ marginBottom: "2rem", fontSize: '3.5rem' }}>Ya Falta Poco</S.Names>
      <S.Floral src={floral} alt="floral" />
      <S.Date>2 de Septiembre del 2023 Valencia - San Diego</S.Date>
      <S.DaysLeftTitle>Falta:</S.DaysLeftTitle>
      <S.DaysLeft>
        <S.DaysLeftRow style={{ marginBottom: "1.5rem" }}>
          <S.DaysNumber>{days}</S.DaysNumber>
          <S.DaysNumber>:</S.DaysNumber>
          <S.DaysNumber>{hours}</S.DaysNumber>
          <S.DaysNumber>:</S.DaysNumber>
          <S.DaysNumber>{minutes}</S.DaysNumber>
          <S.DaysNumber>:</S.DaysNumber>
          <S.DaysNumber>{seconds}</S.DaysNumber>
        </S.DaysLeftRow>
        <S.DaysLeftRow>
          <S.DaysNumber>Dias</S.DaysNumber>
          <S.DaysNumber></S.DaysNumber>
          <S.DaysNumber>Hr</S.DaysNumber>
          <S.DaysNumber></S.DaysNumber>
          <S.DaysNumber>Min</S.DaysNumber>
          <S.DaysNumber></S.DaysNumber>
          <S.DaysNumber>Seg</S.DaysNumber>
        </S.DaysLeftRow>
      </S.DaysLeft>
      <S.Photos>
        <S.Photo src={photo} alt="photo" />
        <S.Photo src={photo} alt="photo" />
        <S.Photo src={photo} alt="photo" />
      </S.Photos>
      <S.Information>
        <S.InformationSalon>Salon Salsa & Cebada</S.InformationSalon>
        <S.InformationSite>
          Las Morochas 1 calle los jazmines # 20 -10 C, San Diego
        </S.InformationSite>
        <S.InformationButton
          target="_blank"
          href="https://www.google.com/maps/place/10%C2%B015'08.2%22N+67%C2%B056'34.5%22W/@10.2522764,-67.9450979,17z/data=!3m1!4b1!4m4!3m3!8m2!3d10.2522764!4d-67.9429092?hl=es&entry=ttu"
        >
          Ver Mapa
        </S.InformationButton>
      </S.Information>
      <S.Timeline>
        <S.TimelineIcons>
          <S.TimelineCircle>
            <S.TimelineIcon src={users} alt="users" />
          </S.TimelineCircle>
          <S.TimelineCircle>
            <S.TimelineIcon src={love} alt="love" />
          </S.TimelineCircle>
          <S.TimelineCircle>
            <S.TimelineIcon src={copas} alt="copas" />
          </S.TimelineCircle>
          <S.TimelineCircle>
            <S.TimelineIcon src={fiesta} alt="fiesta" />
          </S.TimelineCircle>
        </S.TimelineIcons>
        <S.TimelineLine />
        <S.TimelineItems>
          <S.TimelineItem>
            <S.TimelineTitle>Civil.</S.TimelineTitle>
            <S.TimelineHour>5:00pm</S.TimelineHour>
          </S.TimelineItem>
          <S.TimelineItem>
            <S.TimelineTitle>Eclesiástica</S.TimelineTitle>
            <S.TimelineHour>7:00pm</S.TimelineHour>
          </S.TimelineItem>
          <S.TimelineItem>
            <S.TimelineTitle>Recepción</S.TimelineTitle>
            <S.TimelineHour>9:00pm</S.TimelineHour>
          </S.TimelineItem>
          <S.TimelineItem>
            <S.TimelineTitle>Pool P.</S.TimelineTitle>
            <S.TimelineHour>3/09/23</S.TimelineHour>
          </S.TimelineItem>
        </S.TimelineItems>
      </S.Timeline>
      <S.After>
        <S.AfterImg src={after} alt="after" />
        <S.AfterInfo>
          <S.AfterDate>
            Domingo 3 De septiembre Pool Party. Lugar Salsa y Cebada
          </S.AfterDate>
        </S.AfterInfo>
      </S.After>
      <S.Guests>
        <S.GuestsIcon src={card} alt="card" />
        <S.GuestsTitle>PASES</S.GuestsTitle>
        <S.GuestsTitle>HEMOS RESERVADO</S.GuestsTitle>
        <S.GuestsItems>
          <S.GuestsRow>
            <span style={{ backgroundColor: "#e9babc" }}></span>
            <span></span>
            <span></span>
            <span></span>
          </S.GuestsRow>
          <S.GuestsRow>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
          </S.GuestsRow>
        </S.GuestsItems>
        <S.GuestsTitle>LUGAR EN SU HONOR</S.GuestsTitle>
      </S.Guests>
      <S.Gift>
        <S.GiftInfo>
          <S.GiftMessage>
            Su presencia es nuestro mejor regalo, pero si desean hacernos un
            obsequio ponemos a su disposición nuestras sugerencias.
          </S.GiftMessage>
          <S.GiftTitle>Mesa de Regalos</S.GiftTitle>
          <S.GiftSite>Salon Salsa & Cebada</S.GiftSite>
          <S.GiftButton onClick={() => setOpenModal(true)}>
            Ver Sugerencias
          </S.GiftButton>
        </S.GiftInfo>
        {openModal && (
          <S.Modal>
            <S.ModalCard>
              <S.ModalImg src={regalo} alt="regalo" />
              <S.ModalClose src={close} alt="close" onClick={() => setOpenModal(false)}/>
            </S.ModalCard>
          </S.Modal>
        )}
      </S.Gift>
      <S.Outfit>
        <S.OutfitImg src={traje} alt="traje" />
        <S.OutfitTitle>Sugerencia de Vestimenta</S.OutfitTitle>
        <S.OutfitText>TRAJE FORMAL. (Se reserva el color Rosa)</S.OutfitText>
      </S.Outfit>
      <S.Outfit>
        <S.OutfitImg src={bebe} alt="bebe" />
        <S.OutfitText>
          Es una noche mágica para compartir entre adultos. Agradecemos tu
          comprensión y esperamos celebrar juntos (Niños dulces sueños)
        </S.OutfitText>
      </S.Outfit>
      <S.Form>
        <S.FormTitle>Confirma tu Asistencia</S.FormTitle>
        <S.FormInput
          placeholder="Nombre"
          onChange={(e) => setName(e.target.value)}
        />
        <S.FormSelect
          placeholder="Confirmacion"
          onChange={(e) => setConfirmation(e.target.value)}
        >
          <option value="" disabled selected>
            Confirmacion
          </option>
          <option value="si">Si</option>
          <option value="no">No</option>
        </S.FormSelect>
        <S.FormButton onClick={handleWhatsappRobert}>
          <S.FormIconWS src={whatsapp} alt="whatsapp" />
          CONTACTO ROBERT
        </S.FormButton>
        <S.FormButton onClick={handleWhatsappVanessa}>
          <S.FormIconWS src={whatsapp} alt="whatsapp" />
          CONTACTO VANESSA
        </S.FormButton>
      </S.Form>
    </S.Home>
  );
}

export default HomePage;
