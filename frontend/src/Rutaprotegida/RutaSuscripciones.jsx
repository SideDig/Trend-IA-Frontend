import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import Swal from 'sweetalert2';

const RutaSuscripciones = () => {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && user && user.suscripcion === 'FREE') {
            Swal.fire({
                icon: 'error',
                title: 'Acceso denegado',
                text: 'Necesitas ser suscriptor Premium para acceder a este contenido.',
                showCancelButton: true,
                confirmButtonText: 'Ver suscripciones',
                cancelButtonText: 'Aceptar',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/suscripciones');
                } else {
                    navigate('/inicio');
                }
            });
        }
    }, [loading, user, navigate]);

    if (loading) {
        return <h1>Cargando...</h1>;
    }

    if (!user || user.suscripcion === 'FREE') {
        // Si el usuario no es válido o no tiene suscripción premium, no renderizamos nada aquí,
        // la lógica de redirección ya está manejada en useEffect.
        return null;
    }

    // Renderizar Outlet para permitir rutas anidadas
    return <Outlet />;
};

export default RutaSuscripciones;