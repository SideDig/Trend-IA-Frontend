import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import Swal from 'sweetalert2';

const RutaSuscripciones = () => {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && user && user.suscripcion === 'FREE') {
            navigate('/inicio');
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
                }
            });
        }
    }, [loading, user, navigate]);

    if (loading) {
        return <h1>Cargando...</h1>;
    }

    return null;
};

export default RutaSuscripciones;
