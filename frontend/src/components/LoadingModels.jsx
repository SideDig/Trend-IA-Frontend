const LoadingModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
      <div className="align-bottom bg-white rounded-lg text-center sm:my-8 sm:align-middle pointer-events-auto">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start justify-center">
            <div className="mt-3 text-center sm:mt-0 sm:text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Cargando predicciones
              </h3>
              <div className="mt-2">
                <svg className="animate-spin h-12 w-12 mt-4 text-blue-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;