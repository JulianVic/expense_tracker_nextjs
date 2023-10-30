import { useState, useEffect} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const ControlPresupuesto = ({ bills, setBills, budget, setBudget, setIsValidBudget }) => {

    const [porcentaje, setPorcentaje] = useState(0)
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        const totalGastado = bills.reduce( (total, gasto) => gasto.cantidad + total, 0);
        const totalDisponible = budget - totalGastado;
        const nuevoPorcentaje = (((budget-totalDisponible)/budget ) * 100).toFixed(2);

        setGastado(totalGastado);
        setDisponible(totalDisponible);
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje);
        }
        , 1000);
    }, [bills])

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2})
    }

    const handleResetApp = () => {
        const resultado = confirm('¿Estás seguro que deseas resetear la aplicación?');
        if(resultado){
            setBills([]);
            setBudget(0);
            setIsValidBudget(false);
        }
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar
                styles={buildStyles({
                    pathColor: porcentaje >=100 ? "#dc2626" : '#3b82f6',
                    textColor: porcentaje >=100 ? "#dc2626" : '#3b82f6',
                    trailColor: '#F5F5F5',
                    
                })}
                strokeWidth={10
                    
                }
                value={porcentaje}
                text={`${porcentaje}% Gastado`}
            />
        </div>
        <div className='contenido-presupuesto'>
            <button
                className='reset-app'
                type='button'
                onClick={handleResetApp}
            >
                Resetear Aplicación
            </button>
            <p>
                <span>Presupuesto: </span>{formatearCantidad(budget)}
            </p>

            <p className={`${disponible < 1 ? "negativo" : ""}`}>
                <span>Disponible: </span>{formatearCantidad(disponible)}
            </p>

            <p>
                <span>Gastado: </span>{formatearCantidad(gastado)}
            </p>
        </div>

    </div>
  )
}

export default ControlPresupuesto