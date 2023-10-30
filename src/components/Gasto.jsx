import Image from 'next/image';
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from "react-swipeable-list";
  import "react-swipeable-list/dist/styles.css";
  import { formatearFecha } from "../app/helpers/index";
  
  import IconoAhorro from "../../public/img/icono_ahorro.svg"
  import IconoCasa from "../../public/img/icono_casa.svg";
  import IconoComida from "../../public/img/icono_comida.svg";
  import IconoGastos from "../../public/img/icono_gastos.svg";
  import IconoOcio from "../../public/img/icono_ocio.svg";
  import IconoSalud from "../../public/img/icono_salud.svg"; 
  import IconoSuscripciones from "../../public/img/icono_suscripciones.svg";
  
  const diccionarioIconos = {
    ahorro: IconoAhorro,
    casa: IconoCasa,
    comida: IconoComida,
    gastos: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSuscripciones,
  };
  
  const Gasto = ({ bill, setEditBill, deleteBill }) => {
    const { nombre, cantidad, categoria, id, fecha } = bill;
  
    const leadingActions = () => (
      <LeadingActions>
          <SwipeAction onClick={() => setEditBill(bill)}>
              Editar
          </SwipeAction>
      </LeadingActions>
      );
      const trailingActions = () => (
          <TrailingActions>
              <SwipeAction destructive={true} onClick={() => deleteBill(id)}>
                  Eliminar
              </SwipeAction>
          </TrailingActions>
      );
  
    return (
      <SwipeableList>
        <SwipeableListItem
          leadingActions={leadingActions()}
          trailingActions={trailingActions()}
        >
          <div className="gasto sombra">
            <div className="contenido-gasto">
              <Image src={diccionarioIconos[categoria]} alt="icono categoria" />
              <div className="descripcion-gasto">
                <p className="categoria">{categoria}</p>
                <p className="nombre-gasto">{nombre}</p>
                <p className="fecha-gasto">
                  {
                    console.log(fecha)
                  }
                  Agregado el: <span>{formatearFecha(fecha)}</span>
                </p>
              </div>
            </div>
            <p className="cantidad-gasto">${cantidad}</p>
          </div>
        </SwipeableListItem>
      </SwipeableList>
    );
  };
  
  export default Gasto;