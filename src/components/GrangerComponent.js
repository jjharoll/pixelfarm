// GrangerComponent.js
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

const GrangerComponent = () => {
  const tableData = [
    { Lvl: 0, Berry: 'MooMunch', Tiempo: '0:10', Experiencia: 150, 'Costo $': 296, 'Venta $': 0.0, 'Energia gastada': 10.0, 'Ganancia neta': -296.0, 'Energ Consumible': 77.0, 'RECETA': 'Grainbow (12)\nCooking Mix (20)', '% de ganancia': 1.97, 'Coste de Exp en $B': 15.0, 'Coste de exp en energia': 15.0 },
    { Lvl: 0, Berry: 'Flour', Tiempo: '0:01', Experiencia: 12, 'Costo $': 16, 'Venta $': 16.0, 'Energia gastada': 2.0, 'Ganancia neta': 0.0, 'Energ Consumible': 116.07, 'RECETA': 'Grainbow (2)', '% de ganancia': 0.00, 'Coste de Exp en $B': 1.33, 'Coste de exp en energia': 6.0 },
    { Lvl: 2, Berry: 'Shrapnel', Tiempo: '0:05', Experiencia: 31, 'Costo $': 29.31, 'Venta $': 30.0, 'Energia gastada': 4.0, 'Ganancia neta': 0.69, 'Energ Consumible': 216.0, 'RECETA': 'Ironite Bar (3)', '% de ganancia': 2.35, 'Coste de Exp en $B': 0.95, 'Coste de exp en energia': 7.8 },
    { Lvl: 2, Berry: 'Java Pod', Tiempo: '0:03', Experiencia: 28, 'Costo $': 11.4, 'Venta $': 0.0, 'Energia gastada': 5.0, 'Ganancia neta': -11.40, 'Energ Consumible': 558.0, 'RECETA': 'Java Bean (6)', '% de ganancia': 0.41, 'Coste de Exp en $B': 5.6, 'Coste de exp en energia': 5.6 },
    { Lvl: 5, Berry: 'Construction Powder', Tiempo: '0:06', Experiencia: 120, 'Costo $': 232, 'Venta $': 126.0, 'Energia gastada': 5.0, 'Ganancia neta': -106.0, 'Energ Consumible': 221.19, 'RECETA': 'Salt Block (4)\nBrick (2)', '% de ganancia': -100.00, 'Coste de Exp en $B': 1.93, 'Coste de exp en energia': 24.0 },
    { Lvl: 10, Berry: 'Paving Stones', Tiempo: '0:05', Experiencia: 370, 'Costo $': 1128, 'Venta $': 0.0, 'Energia gastada': 8.0, 'Ganancia neta': -1.128, 'Energ Consumible': 299.30, 'RECETA': 'Salt Block (36)\nCrafting Mix (3)', '% de ganancia': 3.05, 'Coste de Exp en $B': 46.3, 'Coste de exp en energia': 46.3 },
    { Lvl: 15, Berry: '4-Leaf Cloveregano', Tiempo: '0:30', Experiencia: 290, 'Costo $': 324.9, 'Venta $': 0.0, 'Energia gastada': 12.0, 'Ganancia neta': -324.90, 'Energ Consumible': 257.81, 'RECETA': '4 Leaf Clover (1)\nSilk Slug Slime (1)', '% de ganancia': 1.12, 'Coste de Exp en $B': 24.2, 'Coste de exp en energia': 24.2 },
    // Agrega más datos según sea necesario
  ];

  return (
    <div>
      <h2>Tabla de Granger</h2>
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
              <th>Coste de exp en energia</th>
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
                <td>{row['Coste de exp en energia']}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableWrapper>
    </div>
  );
};

export default GrangerComponent;
