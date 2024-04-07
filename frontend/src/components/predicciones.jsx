/* eslint-disable react/prop-types */
import  { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function Predicciones({ idP }) {
  const [predicciones, setPredicciones] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (idP) {
      setIsLoading(true);
      fetch(`http://127.0.0.1:5000/productos/${idP}/predict`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Error generico');
          }
          return response.json();
        })
        .then(data => {
          setPredicciones(data.predicciones);
          setIsLoading(false);
          
          const fechas = Object.keys(data.predicciones);
          const precios = Object.values(data.predicciones);
          setChartData({
            labels: fechas,
            datasets: [
              {
                label: 'Precio',
                data: precios,
                fill: false,
                backgroundColor: '#00000',
                borderColor: '#00000',
              },
            ],
          });
        })
        .catch(error => {
          console.error("Error fetching data: ", error);
          setError(error.message);
          setIsLoading(false);
        });
    }
  }, [idP]);

  if (isLoading) return <p>Cargando predicciones...</p>;
  if (error) return <p>Error al cargar las predicciones: {error}</p>;

  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <div style={{ width: '55%' }}>
        <Line data={chartData} options={{ responsive: true, scales: { y: { beginAtZero: false } } }} />
      </div>
      <div>
        <table className="w-full divide-y divide-black" style={{ minWidth: '300px' }}>
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider border border-black">
                Fecha
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider border border-black">
                Precio
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-black">
            {Object.entries(predicciones).map(([fecha, precio], index) => (
              <tr key={index} className="border-b border-black">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
                  {fecha}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                  ${precio}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Predicciones;
