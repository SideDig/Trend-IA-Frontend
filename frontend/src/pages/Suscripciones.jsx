/* eslint-disable react/prop-types */
import { useState } from 'react';
import BarraNavegacion from "../components/BarraNavegacion";
import { useDataContext } from "../context/dataContext";
import { useAuth } from "../context/authContext";
import Swal from 'sweetalert2';

function Suscripciones() {
    const { editUsuarioSuscripcion } = useDataContext();
    const { user } = useAuth();
    const [isPremiumActive, setIsPremiumActive] = useState(false);

    const handleSubscriptionChange = async (newPlan) => {
        if (user && user.suscripcion !== newPlan) {
            try {
                await editUsuarioSuscripcion(user.id, newPlan);
                setIsPremiumActive(newPlan === 'PREMIUM');
                if (newPlan === 'PREMIUM') {
                    // Configurar un temporizador para cambiar de vuelta a FREE después de 10 segundos
                    setTimeout(() => {
                        editUsuarioSuscripcion(user.id, 'FREE');
                        setIsPremiumActive(false);
                    }, 10000);
                }
                Swal.fire({
                    title: '¡Suscripción actualizada!',
                    text: `Ahora eres un suscriptor ${newPlan}.`,
                    icon: 'success',
                    confirmButtonText: 'Entendido'
                }).then(() => {
                    window.location.reload();
                });
            } catch (error) {
                Swal.fire({
                    title: 'Error',
                    text: 'No se pudo actualizar la suscripción. Intente de nuevo.',
                    icon: 'error',
                    confirmButtonText: 'Cerrar'
                });
            }
        }
    };

    return (
        <>
            <BarraNavegacion />
            <div className="mx-auto px-4 py-8">
                <h1 className="text-center text-4xl font-bold mb-10">Planes de Suscripciones</h1>
                <div className="flex justify-center gap-10 items-stretch space-x-4">
                    <SubscriptionCard
                        title="Prueba Gratis"
                        price="Gratis"
                        features={[
                            { text: "3 productos sugeridos", isAvailable: true },
                            { text: "5 preguntas cada 8 horas", isAvailable: true },
                            { text: "Estadísticas en gráficos", isAvailable: false },
                            { text: "Información detallada del producto", isAvailable: false },
                            { text: "Historial de presupuestos", isAvailable: false }
                        ]}
                        plan="FREE"
                        handleSubscriptionChange={handleSubscriptionChange}
                        isSubscribed={user && user.suscripcion === 'FREE'}
                    />
                    <SubscriptionCard
                        title="Premium"
                        price="$300/mes"
                        features={[
                            { text: "6 productos sugeridos", isAvailable: true },
                            { text: "Preguntas ilimitadas", isAvailable: true },
                            { text: "Estadísticas en gráficos", isAvailable: true },
                            { text: "Información detallada del producto", isAvailable: true },
                            { text: "Historial de presupuestos", isAvailable: true }
                        ]}
                        plan="PREMIUM"
                        handleSubscriptionChange={handleSubscriptionChange}
                        isSubscribed={user && user.suscripcion === 'PREMIUM'}
                        isPremiumActive={isPremiumActive}
                    />
                </div>
            </div>
        </>
    );
}

const SubscriptionCard = ({ title, price, features, plan, handleSubscriptionChange, isSubscribed, isPremiumActive }) => (
    <div className={`bg-white text-black border-2 border-black rounded-lg p-8 transition duration-500 hover:scale-105 ${isPremiumActive ? 'border-blue-500' : ''}`}>
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-xl font-bold mb-4">{price}</p>
        {features.map((feature, index) =>
            <Feature key={index} text={feature.text} isAvailable={feature.isAvailable ?? true} />
        )}
        <button
            className={`mt-4 bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800 ${isSubscribed ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => handleSubscriptionChange(plan)}
            disabled={isSubscribed}
        >
            {isSubscribed ? 'Ya suscrito' : `Adquirir ${title}`}
        </button>
    </div>
);

const Feature = ({ text, isAvailable }) => (
    <p className={`flex items-center text-lg mb-2 ${isAvailable ? 'text-black' : 'text-black line-through'}`}>
        <svg className={`w-6 h-6 mr-2 ${isAvailable ? 'text-green-500' : 'text-red-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isAvailable ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>}
        </svg>
        {text}
    </p>
);

export default Suscripciones;
