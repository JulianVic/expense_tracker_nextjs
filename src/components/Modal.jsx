import { useState, useEffect } from 'react'
import Mensaje from '@/components/Mensaje'
import Image from 'next/image';
import CerrarBtn from '../../public/img/cerrar.svg'

const Modal = ({setModal, animateModal, setAnimateModal, saveBill, editBill, setEditBill }) => {

    const [mensaje, setMensaje] = useState('');
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [fecha, setFecha] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        if(Object.keys(editBill).length > 0) {
            setNombre(editBill.nombre)
            setCantidad(editBill.cantidad)
            setCategoria(editBill.categoria)
            setFecha(editBill.fecha)
            setId(editBill.id)
        }
    }, [editBill])
    

    const ocultarModal = () => {
        setAnimateModal(false)
        setEditBill({})
        setTimeout(() => {
            setModal(false)
        }
        , 500)
    }

    const handleSumbit = (e) => {
        e.preventDefault()
        if ([nombre, cantidad, categoria].includes('') || cantidad <= 0) {
            setMensaje('Todos los campos son obligatorios')
            setTimeout(() => {
                setMensaje('')
            }, 2000)

            return;
        }
        saveBill({
            nombre,
            cantidad,
            categoria,
            fecha,
            id
        })
    }

  return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <Image
                src={CerrarBtn} 
                alt="cerrar modal"
                onClick={ocultarModal}
            />
        </div>
        <form 
            onSubmit={handleSumbit}
            className={`formulario ${ animateModal ? "animar" : "cerrar" }`}
            
        >
            <legend>{editBill.nombre ? "Editar gasto" : "Nuevo gasto"}</legend>
            {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}

            <div className='campo'>
                <label htmlFor="nombre">Nombre del gasto</label>
                <input
                    id='nombre'
                    type="text"
                    placeholder='Ej. Entretenimiento'
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>

            <div className='campo'>
                <label htmlFor="cantidad">Cantidad</label>
                <input
                    id='cantidad'
                    type="number"
                    placeholder='Ej. 300'
                    value={cantidad}
                    onChange={(e) => setCantidad(Number(e.target.value))}
                />
            </div>

            <div className='campo'>
                <label htmlFor="categoria">Categoria</label>
                <select 
                    id="categoria"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>
            <input 
                type="submit" 
                value={editBill.nombre ? "Editar gasto" : "Añadir gasto"}
            />

            
            
        </form>
       
    </div>
  )
}

export default Modal