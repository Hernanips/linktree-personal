import LinkButton from "./components/LinkButton"
import { LINKS } from "./data/links"
import GlassSurface from "./components/layout/GlassSurface"
import BackgroundLayer from "./components/background/BackgroundLayer"

function App() {
    return (
        <div className="relative min-h-screen flex items-center justify-center text-neutral-100">
            <BackgroundLayer />
            <div className="w-full max-w-md px-6 py-10">
                <GlassSurface width="100%" height={560}>
                    <div className="flex flex-col items-center h-full justify-center">
                        <header className="mb-8 text-center">
                            <div className="h-24 w-24 mx-auto mb-4 bg-neutral-800 rounded-full">

                            </div>
                            <h1 className="text-2xl font-semibold">
                                Victor
                            </h1>
                            <p className="text-sm text-neutral-400">
                                DAM · Unity · Apps/Web · Diseño digital
                            </p>
                        </header>
                        <main>
                            <div className="space-y-4">
                                {LINKS.map((link) => (
                                    <LinkButton 
                                        key={link.label}
                                        label={link.label} 
                                        href={link.href}  
                                    />
                                ))}
                            </div>
                        </main>
                    </div>
                </GlassSurface>
            </div>
        </div>
    )
}

export default App
