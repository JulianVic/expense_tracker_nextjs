"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Modal from "@/components/Modal"; 
import Filtros from "@/components/Filtros";
import ListadoGastos from "@/components/ListadoGastos";
import { generarId } from './helpers/index'
import IconoNuevoGasto from '../../public/img/nuevo-gasto.svg'

export default function Home() {
  const [bills, setBills] = useState(
    localStorage.getItem("bills") ? JSON.parse(localStorage.getItem("bills")) : []
  );
  const [budget, setBudget] = useState(Number(localStorage.getItem("budget") ?? 0));
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [editBill, setEditBill] = useState(null)
  const [filter, setFilter] = useState('') 
  const [filteredBills, setFilteredBills] = useState([])

  useEffect(() => {
    if (editBill && Object.keys(editBill).length > 0) {
      setModal(true);
      setTimeout(() => {
        setAnimateModal(true);
      }, 1000);
    }
  }, [editBill])

  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0);
  }, [budget])

  useEffect(() => {
    localStorage.setItem('bills', JSON.stringify(bills) ?? []);
  }, [bills])

  useEffect(() => {
    // LS = Local Storage
    const budgetLS = Number(localStorage.getItem('budget') ?? 0);

    if(budgetLS > 0){
      setIsValidBudget(true);
    }
  }, [])

  useEffect(() => {
    if(filter){
      const filtered = bills.filter(bill => bill.categoria === filter);
      setFilteredBills(filtered);
    }
  }, [filter])

  const handleNewBill = () => {
    setModal(true);
    setEditBill({});

    setTimeout(() => {
      setAnimateModal(true);
    }, 100
    )
  }

  const saveBill = (bill) => {
    if(bill.id){
      const currentBills = bills.map(billState => billState.id === bill.id ? bill : billState);
      setBills(currentBills);
      setEditBill({});
    }else{
      bill.id = generarId();
      bill.fecha = Date.now();
      setBills([...bills, bill]);
    }

    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500)
  }

  const deleteBill = (id) => {
    const currentBills = bills.filter(bill => bill.id !== id);
    setBills(currentBills);
  }

  return (
    <div className={modal ? "fijar" : ""}>
    <Header
      bills={bills}
      setBills={setBills}
      budget={budget}
      setBudget={setBudget}
      isValidBudget={isValidBudget}
      setIsValidBudget={setIsValidBudget}
    />
    {isValidBudget && (
      <>
        <main>
          <Filtros 
            filter={filter}
            setFilter={setFilter}
          />
          <ListadoGastos 
            bills={bills}
            setEditBill={setEditBill}
            deleteBill={deleteBill}
            filter={filter}
            filteredBills={filteredBills}
          />
        </main>
        <div className="nuevo-gasto">
          <Image 
            src={IconoNuevoGasto}
            alt="icono nuevo gasto"
            onClick={handleNewBill}
          />
        </div>
      </>
    )}
    {modal && <Modal
                setModal={setModal}
                animateModal={animateModal}
                setAnimateModal={setAnimateModal}
                saveBill={saveBill}
                editBill={editBill}
                setEditBill={setEditBill}
              />
    }
  </div>

  )
}
