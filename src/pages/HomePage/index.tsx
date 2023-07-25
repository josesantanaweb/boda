import React, { useState, useEffect } from "react";
import * as S from "./styles";
import "../../assets/css/slick.css";
import "../../assets/css/slick-theme.css";
import Slider from "react-slick";
import photo1 from "../../assets/images/01.jpg"
import photo2 from "../../assets/images/02.jpg";
import photo3 from "../../assets/images/03.jpg";
import photo4 from "../../assets/images/04.jpg";
import users from "../../assets/images/users.png"
import love from "../../assets/images/love.png"
import after from "../../assets/images/after.png"
import traje from "../../assets/images/traje.png"
import bebe from "../../assets/images/bebe.png"
import whatsapp from "../../assets/images/whatsapp.png";
import cajita from "../../assets/images/cajita.png";
import copas from "../../assets/images/copas.png";
import fiesta from "../../assets/images/fiesta.png";
import card from "../../assets/images/card.png";
import regalo from "../../assets/images/regalo.jpeg";
import roses from "../../assets/images/roses.png";
import roses2 from "../../assets/images/roses-2.png";
import roses3 from "../../assets/images/roses-3.png";
import instagram from "../../assets/images/instagram.png";
import nota from "../../assets/images/nota.png";
import cancion from "../../assets/Caminar de Tu Mano.mp3";

const HomePage = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [name, setName] = useState('Desconocido');
  const [confirmation, setConfirmation] = useState('si');
  const [openModal, setOpenModal] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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

  const handleWhatsappVanessa2 = () => {
    if (typeof window !== "undefined") {
      window.open(
        `https://api.whatsapp.com/send/?phone=584243286365&type=phone_number&app_absent=0`,
        "_blank"
      );
    }
  };

  const handleDownload = () => {
    const URL = "/invitation.png";
    var link = document.createElement("a");
    link.download = "invitation.png";
    link.href = URL;
    link.click();
  };

  return (
    <S.Home>
      <S.Plant src={roses} alt="roses" />
      <S.Invitation>
        Están cordialmente invitados a la celebración de nuestra boda
        <S.Plant2 src={roses} alt="roses" />
      </S.Invitation>
      <S.Names>
        Vanessa & Robert
        <S.Plant6 src={roses} alt="roses" />
      </S.Names>
      <S.Cancion controls>
        <source src={cancion} type="audio/mpeg" />
        Your browser does not support the audio element.
      </S.Cancion>
      <S.Message>
        Ha sido un largo camino, durante el cual hemos crecido y aprendido
        juntos; hemos compartido alegrías y tristezas, abundancia y escasez.. De
        eso se trata nuestro amor, una magia que el tiempo y la distancia no
        pudo borrar.
        <S.Plant3 src={roses} alt="roses" />
        <S.Plant4 src={roses} alt="roses" />
      </S.Message>
      <S.Names
        style={{
          marginBottom: "2rem",
          fontSize: "3.5rem",
          width: 290,
        }}
      >
        Ya Falta Poco
      </S.Names>
      <S.Floral src={roses3} alt="roses" />
      <S.Date>02 de Septiembre del 2023 Valencia - San Diego</S.Date>
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
      <Slider {...settings}>
        <S.Photo src={photo1} alt="photo" />
        <S.Photo src={photo2} alt="photo" />
        <S.Photo src={photo3} alt="photo" />
        <S.Photo src={photo4} alt="photo" />
      </Slider>
      <S.Information>
        <S.Plant5 src={roses} alt="roses" />
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
            <S.TimelineTitle>Piscina</S.TimelineTitle>
            <S.TimelineHour>03/09/23</S.TimelineHour>
          </S.TimelineItem>
        </S.TimelineItems>
      </S.Timeline>
      <S.After>
        <S.AfterImg src={after} alt="after" />
        <S.AfterInfo>
          <S.AfterDate>
            Domingo 03 De septiembre Pool Party. Lugar Salsa y Cebada
          </S.AfterDate>
        </S.AfterInfo>
      </S.After>
      <S.Guests>
        <S.Plant8 src={roses} alt="roses" />
        <S.Plant7 src={roses} alt="roses" />
        <S.GuestsIcon src={card} alt="card" />
        <S.GuestsTitle>Pases</S.GuestsTitle>
        <S.GuestsTitle>Hemos Reservado</S.GuestsTitle>
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
        <S.GuestsTitle>Lugar en su Honor</S.GuestsTitle>
      </S.Guests>
      <S.Gift>
        <S.Plant9 src={roses} alt="roses" />
        <S.GiftInfo>
          <S.OutfitImg src={cajita} alt="cajita" />
          <S.GiftTitle>Mesa de Regalos</S.GiftTitle>
          <S.GiftMessage>
            Su presencia es nuestro mejor regalo, pero si desean hacernos un
            obsequio ponemos a su disposición nuestras sugerencias.
          </S.GiftMessage>
          <S.GiftButton onClick={() => setOpenModal(true)}>
            Ver Sugerencias
          </S.GiftButton>
        </S.GiftInfo>
        {openModal && (
          <S.Modal onClick={() => setOpenModal(false)}>
            <S.ModalCard>
              <S.ModalImg src={regalo} alt="regalo" />
            </S.ModalCard>
          </S.Modal>
        )}
      </S.Gift>
      <S.Outfit>
        <S.Plant12 src={roses} alt="roses" />
        <S.Plant13 src={roses} alt="roses" />
        <S.OutfitImg src={traje} alt="traje" />
        <S.OutfitTitle>Sugerencia de Vestimenta</S.OutfitTitle>
        <S.OutfitText>Traje Formal. (Se reserva el color Rosa)</S.OutfitText>
      </S.Outfit>
      <S.Outfit2>
        <S.Plant15 src={roses} alt="roses" />
        <S.Plant16 src={roses} alt="roses" />
        <S.OutfitImg src={bebe} alt="bebe" />
        <S.OutfitText>
          Es una noche mágica para compartir entre adultos. Agradecemos tu
          comprensión y esperamos celebrar juntos (Niños dulces sueños)
        </S.OutfitText>
      </S.Outfit2>
      <S.Social>
        <S.Plant14 src={roses} alt="roses" />
        <S.Plant17 src={roses} alt="roses" />
        <S.SocialIcon src={instagram} alt="instagram" />
        <S.OutfitText>
          Ahora puedes entrar a Instagram con nuestro hashtag y dejarnos una
          foto que recuerde momentos que hemos pasado junto a ti comparte tu
          fotos con nosotros!
        </S.OutfitText>
        <S.GiftButton
          href="https://www.instagram.com/explore/tags/bodavaneyrobert/?igshid=MmU2YjMzNjRlOQ%3D%3D"
          style={{ marginTop: "1.5rem" }}
        >
          #BodaVaneyRobert
        </S.GiftButton>
      </S.Social>
      <S.Music>
        <S.Plant14 src={roses} alt="roses" />
        <S.MusicIcon src={nota} alt="nota" />
        <S.OutfitText style={{ marginBottom: "2rem" }}>
          Queremos divertirnos contigo por eso queremos que nos sugieras
          canciones que no puedan faltar en nuestra boda. Esperamos tus
          canciones favoritas!
        </S.OutfitText>
        <S.GiftButton onClick={handleWhatsappVanessa2}>
          Sugerir Canciones
        </S.GiftButton>
      </S.Music>
      <S.Form>
        <S.Plant10 src={roses} alt="roses" />
        <S.FormRose src={roses2} alt="roses2" />
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
          Contacto Robert
        </S.FormButton>
        <S.FormButton onClick={handleWhatsappVanessa}>
          <S.FormIconWS src={whatsapp} alt="whatsapp" />
          Contacto Vanessa
        </S.FormButton>
        <S.OutfitText style={{ fontSize: 30, marginTop: 20 }}>
          ¡Te esperamos !
        </S.OutfitText>
        <S.InformationButton
          style={{ margin: '2rem auto' }}
          onClick={handleDownload}
        >
          Descargar Invitación
        </S.InformationButton>
      </S.Form>
    </S.Home>
  );
}

export default HomePage;
