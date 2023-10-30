import { useState, useEffect } from 'react'

const Filtros = ({filter, setFilter}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form>
            <div className='campo'>
                <label>Filtrar gastos</label>
                <select value={filter} onChange={e => setFilter(e.target.value)}>
                    <option value="">Todos</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>

            </div>
        </form>
    </div>
  )
}
export default Filtros