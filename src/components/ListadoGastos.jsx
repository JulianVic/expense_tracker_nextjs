import Gasto from "@/components/Gasto";

const ListadoGastos = ({
  bills,
  setEditBill,
  deleteBill,
  filter,
  filteredBills,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filter ? (
        <>
          <h2>{filteredBills.length ? "Gastos" : "No hay gastos de este tipo"}</h2>
          {filteredBills.map((bill) => (
            <Gasto
              key={bill.id}
              bill={bill}
              setEditBill={setEditBill}
              deleteBill={deleteBill}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{bills.length ? "Gastos" : "No hay gastos aún"}</h2>
          {bills.map((bill) => (
            <Gasto
              key={bill.id}
              bill={bill}
              setEditBill={setEditBill}
              deleteBill={deleteBill}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ListadoGastos;