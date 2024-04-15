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

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex top-3/4 items-center justify-center pointer-events-none" >
        <div className="align-bottom rounded-lg text-center sm:my-8 sm:align-middle pointer-events-auto">
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start justify-center">
              <div className="mt-3 text-center sm:mt-0 sm:text-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Cargando predicciones
                </h3>
                <div className="mt-2">
                  <svg className="animate-spin h-12 w-12 mt-4 text-black mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
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
