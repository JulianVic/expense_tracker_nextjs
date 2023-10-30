import NuevoPresupuesto from '@/components/NuevoPresupuesto'
import ControlPresupuesto from '@/components/ControlPresupuesto'
const Header = ({bills, setBills, budget, setBudget, isValidBudget, setIsValidBudget}) => {
  return (
    <div>
      <header>
        <h1>Planificador de gastos</h1>
        {
          isValidBudget ? (
            <ControlPresupuesto 
              bills={bills}
              setBills={setBills}
              budget={budget}
              setBudget={setBudget}
              setIsValidBudget={setIsValidBudget}
            />
          ): (
            <NuevoPresupuesto
            budget={budget}
            setBudget={setBudget}
            setIsValidBudget={setIsValidBudget}
        />
          )
        }

        

      </header>
    </div>
  )
}

export default Header