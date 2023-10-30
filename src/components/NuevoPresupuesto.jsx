import { useState } from 'react'
import Mensaje from '@/components/Mensaje'
const NuevoPresupuesto = ({budget, setBudget, setIsValidBudget}) => {

    const [mensaje, setMensaje] = useState("")

    const handlePresupuesto = (e) => {
        e.preventDefault()

        if(!budget || budget < 0) {
            setMensaje("No es un presupuesto valido")
            //imprime budget
            console.log(budget)
            return;
        }
        setMensaje("")
        setIsValidBudget(true)
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form className="formulario" onSubmit={handlePresupuesto}>
            <div className="campo">
                <label>Definir presupuesto</label>

                <input
                    type="number"
                    className="nuevo-presupuesto"
                    placeholder="Coloca tu presupuesto"  
                    value={budget}
                    onChange={e => setBudget(Number(e.target.value))}
                />
            </div>

            <input
                type="submit"
                value="Definir presupuesto"
            /> 

            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            
        </form>
    </div>
  )
}

export default NuevoPresupuesto