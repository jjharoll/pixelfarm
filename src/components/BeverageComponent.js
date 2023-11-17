// BeverageComponent.js
import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.div`
  margin-top: 20px;
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const BeverageComponent = () => {
  const tableData = [
    { Lvl: 0, Berry: 'Popberry Wine', Tiempo: '0:01', Experiencia: 110, 'Costo $': 197.2, 'Venta $': 190.0, 'Energia gastada': 0.0, 'Ganancia neta': -7.2, 'Energ Consumible': 77.0, 'RECETA': 'Popberry (24)\nCooking Mix (10)\nHoney (3)', '% de ganancia': -3.65, 'Coste de Exp en $B': 1.79, 'Eficiencia Energ/$B': 0.41 },
    { Lvl: 5, Berry: 'Grainshine', Tiempo: '0:03', Experiencia: 176, 'Costo $': 359.8, 'Venta $': 310.0, 'Energia gastada': 0.0, 'Ganancia neta': -49.8, 'Energ Consumible': 116.07, 'RECETA': 'Grainbow (24)\nCooking Mix (10)\nSeltsam Egg (3)', '% de ganancia': -13.84, 'Coste de Exp en $B': 2.04, 'Eficiencia Energ/$B': 0.37 },
    { Lvl: 8, Berry: 'Grumpkin Wine', Tiempo: '0:05', Experiencia: 320, 'Costo $': 697.5, 'Venta $': 640.0, 'Energia gastada': 0.0, 'Ganancia neta': -57.5, 'Energ Consumible': 216.0, 'RECETA': 'Grumpkin (24)\nSilk Slug Slime (1)\nHoney (6)\nCooking Mix (20)', '% de ganancia': -8.24, 'Coste de Exp en $B': 2.18, 'Eficiencia Energ/$B': 0.34 },
    { Lvl: 8, Berry: 'Butterbrew', Tiempo: '0:08', Experiencia: 850, 'Costo $': 1405.6, 'Venta $': 1400.0, 'Energia gastada': 0.0, 'Ganancia neta': -5.6, 'Energ Consumible': 558.0, 'RECETA': 'Butterberry (24)\nCooking Mix (10)\nPopberry Wine (6)', '% de ganancia': -0.40, 'Coste de Exp en $B': 1.65, 'Eficiencia Energ/$B': 0.40 },
    { Lvl: 11, Berry: 'Watermint Whisky', Tiempo: '0:04', Experiencia: 350, 'Costo $': 677.2, 'Venta $': 660.0, 'Energia gastada': 0.0, 'Ganancia neta': -17.2, 'Energ Consumible': 221.19, 'RECETA': 'Watermint (24)\nCooking Mix (10)\nHoney (3)', '% de ganancia': -2.54, 'Coste de Exp en $B': 1.93, 'Eficiencia Energ/$B': 0.34 },
    { Lvl: 12, Berry: 'Astracactus Tequila', Tiempo: '0:10', Experiencia: 480, 'Costo $': 989.2, 'Venta $': 918.0, 'Energia gastada': 0.0, 'Ganancia neta': -71.2, 'Energ Consumible': 299.30, 'RECETA': 'Astracactus (24)\nCooking Mix (10)\nHoney (3)', '% de ganancia': -7.20, 'Coste de Exp en $B': 2.06, 'Eficiencia Energ/$B': 0.33 },
    { Lvl: 15, Berry: 'Scarrot Wine', Tiempo: '0:08', Experiencia: 400, 'Costo $': 929.9, 'Venta $': 875.0, 'Energia gastada': 0.0, 'Ganancia neta': -54.9, 'Energ Consumible': 257.81, 'RECETA': 'Scarrot (24)\nSilk Slug Slime (1)\nHoney (6)\nCooking Mix (25)', '% de ganancia': -5.90, 'Coste de Exp en $B': 2.32, 'Eficiencia Energ/$B': 0.29 },
    { Lvl: 18, Berry: 'Muckchuck Mead', Tiempo: '0:35', Experiencia: 460, 'Costo $': 1280.56, 'Venta $': 1200.0, 'Energia gastada': 4.0, 'Ganancia neta': -80.56, 'Energ Consumible': 326.25, 'RECETA': 'Muckchuck (24)\nCooking Mix (10)\nHoney (3)', '% de ganancia': -6.29, 'Coste de Exp en $B': 2.78, 'Eficiencia Energ/$B': 0.27 },
    // Agrega más datos según sea necesario
  ];

  return (
    <div>
      <h2>Tabla de Beverage</h2>
      <TableWrapper>
        <StyledTable>
          <thead>
            <tr>
              <th>Lvl</th>
              <th>Berry</th>
              <th>Tiempo</th>
              <th>Experiencia</th>
              <th>Costo $</th>
              <th>Venta $</th>
              <th>Energia gastada</th>
              <th>Ganancia neta</th>
              <th>Energ Consumible</th>
              <th>RECETA</th>
              <th>% de ganancia</th>
              <th>Coste de Exp en $B</th>
              <th>Eficiencia Energ/$B</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.Lvl}</td>
                <td>{row.Berry}</td>
                <td>{row.Tiempo}</td>
                <td>{row.Experiencia}</td>
                <td>{row['Costo $']}</td>
                <td>{row['Venta $']}</td>
                <td>{row['Energia gastada']}</td>
                <td>{row['Ganancia neta']}</td>
                <td>{row['Energ Consumible']}</td>
                <td>{row.RECETA}</td>
                <td>{row['% de ganancia']}</td>
                <td>{row['Coste de Exp en $B']}</td>
                <td>{row['Eficiencia Energ/$B']}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableWrapper>
    </div>
  );
};

export default BeverageComponent;
