import LiquidEther from "./LiquidEther"

function BackgroundLayer() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <LiquidEther className="w-full h-full" />
        </div>
    )
}

export default BackgroundLayer