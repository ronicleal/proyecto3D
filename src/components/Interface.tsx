import { Button } from "@/components/ui/button"; 
export function Interface() {
    return (
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6 sm:p-12">
            {/* SECCIÓN SUPERIOR */}
            <header className="pointer-events-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
                        <span className="text-xl font-bold">A</span>
                    </div>
                    <div>
                        <h1 className="text-2xl font-black uppercase tracking-tighter text-slate-900 leading-none">
                            IES Albarregas
                        </h1>
                        <p className="text-[10px] font-medium tracking-widest text-blue-600 uppercase">
                            Mérida • Extremadura
                        </p>
                    </div>
                </div>

                <nav className="hidden md:flex gap-6 font-medium text-sm text-slate-600">
                    <a href="#" className="hover:text-blue-600 transition-colors">Oferta Educativa</a>
                    <a href="#" className="hover:text-blue-600 transition-colors">Instalaciones</a>
                    <a href="#" className="hover:text-blue-600 transition-colors">Secretaría</a>
                </nav>
            </header>

            {/* SECCIÓN CENTRAL*/}
            <div className="max-w-xl">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-white bg-blue-500 rounded-full uppercase">
                    Admisiones Abiertas
                </span>
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] mb-6">
                    CONSTRUYE <br /> <span className="text-blue-600">TU FUTURO</span>
                </h2>

                <div className="pointer-events-auto flex gap-4">
                    <Button size="lg" className="rounded-full px-8 shadow-xl bg-blue-600 hover:bg-blue-700">
                        Inscribirse ahora
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full px-8 bg-white/50 backdrop-blur-sm">
                        Explorar Campus
                    </Button>
                </div>
            </div>

            {/* FOOTER */}
            <footer className="mt-auto pb-6 text-center pointer-events-auto">
                <p className="text-sm italic text-slate-500 font-medium">
                    "La educación es el pasaporte hacia el futuro."
                </p>
            </footer>

        </div>
    );
}