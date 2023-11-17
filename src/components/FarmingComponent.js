// FarmingComponent.js
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

const FarmingComponent = () => {
    const tableData = [
        { Lvl: 0, Berry: 'Popberry', Tiempo: '0:01', Experiencia: 3.5, 'Costo $': 1, 'Venta $': 3.5, 'Energia gastada': 2, 'Ganancia neta': 200.0, '% de ganancia': 0.57, 'Eficiencia $B/Energy': 1.0, 'Eficiencia EXP/Energy': 1.0 },
        { Lvl: 2, Berry: 'Butterberry', Tiempo: '0:20', Experiencia: 4, 'Costo $': 1, 'Venta $': 3.5, 'Energia gastada': 4, 'Ganancia neta': 400.0, '% de ganancia': 1.14, 'Eficiencia $B/Energy': 1.14, 'Eficiencia EXP/Energy': 1.14 },
        { Lvl: 3, Berry: 'Clover', Tiempo: '0:45', Experiencia: 3.5, 'Costo $': 3, 'Venta $': 6, 'Energia gastada': 3, 'Ganancia neta': 100.0, '% de ganancia': 0.6, 'Eficiencia $B/Energy': 0.7, 'Eficiencia EXP/Energy': 0.7 },
        { Lvl: 5, Berry: 'Grainbow', Tiempo: '1:00', Experiencia: 5.4, 'Costo $': 3, 'Venta $': 8, 'Energia gastada': 4, 'Ganancia neta': 166.67, '% de ganancia': 1.25, 'Eficiencia $B/Energy': 1.35, 'Eficiencia EXP/Energy': 1.35 },
        { Lvl: 8, Berry: 'Grumpkin', Tiempo: '3:00', Experiencia: 11.6, 'Costo $': 9, 'Venta $': 19, 'Energia gastada': 7.5, 'Ganancia neta': 111.11, '% de ganancia': 1.33, 'Eficiencia $B/Energy': 1.55, 'Eficiencia EXP/Energy': 1.55 },
        { Lvl: 11, Berry: 'Watermint', Tiempo: '4:00', Experiencia: 14.6, 'Costo $': 12, 'Venta $': 24, 'Energia gastada': 8, 'Ganancia neta': 100.0, '% de ganancia': 1.5, 'Eficiencia $B/Energy': 1.83, 'Eficiencia EXP/Energy': 1.83 },
        { Lvl: 15, Berry: 'Scarrot', Tiempo: '6:00', Experiencia: 14.6, 'Costo $': 15, 'Venta $': 26, 'Energia gastada': 8, 'Ganancia neta': 73.33, '% de ganancia': 1.38, 'Eficiencia $B/Energy': 1.83, 'Eficiencia EXP/Energy': 1.83 },
        { Lvl: 21, Berry: 'Astracactus', Tiempo: '5:00', Experiencia: 20, 'Costo $': 18, 'Venta $': 28, 'Energia gastada': 11.5, 'Ganancia neta': 55.56, '% de ganancia': 0.87, 'Eficiencia $B/Energy': 1.74, 'Eficiencia EXP/Energy': 1.74 },
        { Lvl: 31, Berry: 'Muckchuck', Tiempo: '1:00', Experiencia: 4, 'Costo $': 36, 'Venta $': 49, 'Energia gastada': 8.5, 'Ganancia neta': 36.11, '% de ganancia': 1.53, 'Eficiencia $B/Energy': 0.47, 'Eficiencia EXP/Energy': 0.47 },
        // Agrega más datos según sea necesario
      ];

      
  return (
    <div>
      <h2>Tabla de Farming</h2>
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
              <th>% de ganancia</th>
              <th>Eficiencia $B/Energy</th>
              <th>Eficiencia EXP/Energy</th>
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
                <td>{row['% de ganancia']}</td>
                <td>{row['Eficiencia $B/Energy']}</td>
                <td>{row['Eficiencia EXP/Energy']}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableWrapper>
    </div>
  );
};

export default FarmingComponent;
