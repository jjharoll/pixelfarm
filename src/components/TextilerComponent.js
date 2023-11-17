// TextilerComponent.js
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

const TextilerComponent = () => {
  // Estructura de datos para la tabla
  const tableData = [
    { Lvl: 0, Berry: 'Silk Rope', Tiempo: '0:01:00', Experiencia: 32, 'Costo $': 80.62, 'Venta $': 34.00, 'Energia gastada': 1.00, 'Ganancia neta': -46.62, 'Energ Consumible': 6.27, RECETA: 'Silk Fiber (6)\nSilk Slug Slime (4)', '% de ganancia': -137.12, 'Coste de Exp en $B': 2.52, 'Coste de exp en energia': 32.0 },
    { Lvl: 2, Berry: 'Silk Cloth', Tiempo: '0:02:00', Experiencia: 48, 'Costo $': 133.13, 'Venta $': 50.00, 'Energia gastada': 3.00, 'Ganancia neta': -83.13, 'Energ Consumible': 0.99, RECETA: 'Silk Fiber (9)\nSilk Slug Slime (4)\nWax (4)', '% de ganancia': -166.26, 'Coste de Exp en $B': 2.77, 'Coste de exp en energia': 16.0 },
    { Lvl: 3, Berry: 'Construction Cone', Tiempo: '0:01:00', Experiencia: 1120, 'Costo $': 2008.8, 'Venta $': 1.00, 'Energia gastada': 5.00, 'Ganancia neta': -2007.80, 'Energ Consumible': 5.53, RECETA: 'Clearshell (4)\nScarrot (12)\nCrafting Mix (3)', '% de ganancia': -200780.00, 'Coste de Exp en $B': 1.79, 'Coste de exp en energia': 224.0 },
    { Lvl: 5, Berry: 'Plaster', Tiempo: '0:03:00', Experiencia: 200, 'Costo $': 563.51, 'Venta $': 212.00, 'Energia gastada': 9.00, 'Ganancia neta': -351.51, 'Energ Consumible': 14.80, RECETA: 'Construction Powder (1)\nSilk Fiber (3)\nGlue (1)', '% de ganancia': -165.81, 'Coste de Exp en $B': 2.82, 'Coste de exp en energia': 22.2 },
    { Lvl: 5, Berry: 'Small Purple Rug', Tiempo: '0:03:00', Experiencia: 720, 'Costo $': 1421.5, 'Venta $': null, 'Energia gastada': 8.00, 'Ganancia neta': -1421.50, 'Energ Consumible': 15.40, RECETA: 'Silk Cloth (8)\nSilk Slug Slime (4)\nCrafting Mix (3)\nGrumpkin (12)', '% de ganancia': null, 'Coste de Exp en $B': 1.97, 'Coste de exp en energia': 90.0 },
    { Lvl: 12, Berry: 'Turquoise Couch', Tiempo: '0:15:00', Experiencia: 2750, 'Costo $': 4405.8, 'Venta $': null, 'Energia gastada': 12.00, 'Ganancia neta': -4405.80, 'Energ Consumible': 24.32, RECETA: 'Silk Cloth (24)\nPopberry (24)\nPlank (12)\nGlue (1)\nSilk Rope (8)\nCrafting Mix (10)', '% de ganancia': null, 'Coste de Exp en $B': 1.60, 'Coste de exp en energia': 229.2 },
    { Lvl: 15, Berry: 'Green Tent', Tiempo: '0:15:00', Experiencia: 1450, 'Costo $': 2124, 'Venta $': null, 'Energia gastada': 20.00, 'Ganancia neta': -2124.00, 'Energ Consumible': 18.72, RECETA: 'Silk Cloth (12)\nSilk Rope (8)\nCrafting Mix (5)\n', '% de ganancia': null, 'Coste de Exp en $B': 1.46, 'Coste de exp en energia': 72.5 },
    { Lvl: 20, Berry: 'Astra Chair', Tiempo: '1:20:00', Experiencia: 1950, 'Costo $': 3791.2, 'Venta $': null, 'Energia gastada': 50.00, 'Ganancia neta': -3791.20, 'Energ Consumible': 27.93, RECETA: 'Seltsam Egg (2)\nSalt Block (12)\nCrafting Mix (15)\nSilk Cloth (12)\nGlue (2)', '% de ganancia': null, 'Coste de Exp en $B': 1.94, 'Coste de exp en energia': 39.0 },
    { Lvl: 20, Berry: 'Bone Hut 2', Tiempo: '1:00:00', Experiencia: 5300, 'Costo $': 7989.00, 'Venta $': 40.00, 'Energia gastada': null, 'Ganancia neta': -7989.00, 'Energ Consumible': 0.00, RECETA: 'Silk Cloth (36)\nSilk Rope (36)\nGlue (3)\nCrafting Mix (15)\nVoidtonium (2)', '% de ganancia': 1.51, 'Coste de Exp en $B': 132.5, 'Coste de exp en energia': null },
  ];

  return (
    <div>
      <h2>Tabla de Textiler</h2>
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

export default TextilerComponent;
