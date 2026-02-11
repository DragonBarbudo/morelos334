import Banner from "@/components/Banner";
import PropertyDetails from "@/components/PropertyDetails";
import Gallery from "@/components/Gallery";
import Map from "@/components/Map";
import { MapPin } from "lucide-react";

const Index = () => {
    const images = [
        "/banner/g0.avif",
        "/banner/g1.avif",
        "/banner/g2.avif",
        "/banner/g3.avif",
    ];
    const bannerImages = [
        "/banner/p1.avif",
        "/banner/p2.avif",
        "/banner/p3.avif"

    ]

    const location: [number, number] = [-99.12029738844261, 19.40941275395374];

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            {/* Navigation / Header */}
            <nav className="sticky top-0 z-50 glass border-b border-gray-200/50 px-6 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">M</div>
                        <span className="font-black text-xl tracking-tighter text-gray-900">MORELOS 334</span>
                    </div>
                    <a
                        href="https://wa.me/5215585328922?text=Me%20interesa%20el%20inmueble%20en%20Morelos%20336"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:variant-primary transition-all shadow-md hover:shadow-primary/20 hover:-translate-y-0.5"
                    >
                        Contactar
                    </a>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-12 space-y-20">
                {/* Hero Section */}
                <section className="space-y-12">
                    <div className="max-w-3xl space-y-4">
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Disponible Ahora
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
                            Tu próximo <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">espacio comercial</span> en el corazón de la ciudad.
                        </h1>
                        <p className="text-xl text-gray-500 font-medium leading-relaxed">
                            Eje 3 Sur (Avenida Morelos) 334, Magdalena Mixhuca. 200 m² diseñados para potenciar tu negocio.
                        </p>
                    </div>
                    <Banner images={bannerImages} />
                </section>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-8 space-y-20">
                        <section id="detalles">
                            <PropertyDetails />
                        </section>

                        <section id="galeria" className="space-y-8">
                            <div className="flex items-end justify-between">
                                <div className="space-y-2">
                                    <h2 className="text-4xl font-black text-gray-900">Gallería</h2>
                                    <p className="text-gray-500 font-medium">Visualiza cada detalle del local</p>
                                </div>
                            </div>
                            <Gallery images={images} />
                        </section>
                    </div>

                    <aside className="lg:col-span-4 sticky top-32 space-y-8">
                        <div className="bg-white rounded-[2.5rem] shadow-soft border border-gray-100 p-8 space-y-8">
                            <div className="space-y-2">
                                <p className="text-gray-500 font-bold text-sm tracking-widest uppercase">Inversión Mensual</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-black text-gray-900">$50,000</span>
                                    <span className="text-gray-400 font-bold">MXN</span>
                                </div>
                                <p className="text-gray-500 font-medium">$250 por m²</p>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-gray-50">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500 font-medium">Superficie Total</span>
                                    <span className="text-gray-900 font-bold">200 m²</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500 font-medium">Precio por m²</span>
                                    <span className="text-gray-900 font-bold">$250</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500 font-medium">Ubicación</span>
                                    <span className="text-gray-900 font-bold text-right ml-4">Eje 3 Sur</span>
                                </div>
                            </div>

                            <a
                                href="https://wa.me/5215585328922?text=Me%20interesa%20el%20inmueble%20en%20Morelos%20336"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-full bg-primary text-white font-black py-4 rounded-2xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all"
                            >
                                Más información
                            </a>
                        </div>

                        <div className="space-y-4">
                            <div className="h-[300px] w-full">
                                <Map location={location} />
                            </div>
                            <a
                                href="https://maps.app.goo.gl/65cUJvixLHVeaV769"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-full bg-white text-gray-900 border border-gray-200 font-bold py-3 rounded-2xl shadow-sm hover:bg-gray-50 transition-all gap-2"
                            >
                                <MapPin className="w-4 h-4" />
                                Ver en Google Maps
                            </a>
                        </div>
                    </aside>
                </div>
            </main>

            {/* Mobile Float CTA */}
            <div className="fixed bottom-6 left-6 right-6 md:hidden z-50">
                <a
                    href="https://wa.me/5215585328922?text=Me%20interesa%20el%20inmueble%20en%20Morelos%20336"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-primary text-white font-black py-4 rounded-2xl shadow-xl shadow-primary/30"
                >
                    Contactar ahora • $50,000
                </a>
            </div>
        </div>
    );
};

export default Index;
