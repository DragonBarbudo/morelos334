import { Building2, MapPin, DoorOpen, Car, Coffee } from 'lucide-react';

const PropertyDetails = () => {
  const details = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Ubicación Estratégica",
      description: (
        <>
          Eje 3 Sur (Avenida Morelos) 334<br />
          Colonia Magdalena Mixhuca<br />
          Cerca de Mercado y Metro Jamaica
        </>
      ),
      color: "blue"
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Espacio",
      description: "200 m² en planta baja a pie de avenida",
      color: "indigo"
    },
    {
      icon: <Car className="w-5 h-5" />,
      title: "Estacionamiento",
      description: "Disponible",
      color: "orange"
    },
    {
      icon: <Coffee className="w-5 h-5" />,
      title: "Instalaciones",
      description: "Baños y área de servicio",
      color: "green"
    }
  ];

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-[2rem] shadow-soft p-8 border border-white/20">
      <h2 className="text-3xl font-extrabold tracking-tight mb-8 text-gray-900">
        Detalles del <span className="text-primary">Inmueble</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {details.map((detail, index) => (
          <div key={index} className="group flex items-start gap-5 p-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-sm">
            <div className={`
              p-3 rounded-2xl transition-transform duration-300 group-hover:scale-110
              ${detail.color === 'blue' ? 'bg-blue-50 text-blue-600' : ''}
              ${detail.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' : ''}
              ${detail.color === 'orange' ? 'bg-orange-50 text-orange-600' : ''}
              ${detail.color === 'green' ? 'bg-green-50 text-green-600' : ''}
            `}>
              {detail.icon}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">{detail.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {detail.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default PropertyDetails;