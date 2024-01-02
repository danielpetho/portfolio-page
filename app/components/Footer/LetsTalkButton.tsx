import CalendlyDynamic from "../Calendly/CalendlyDynamic"
import StarIcon from "../Text/StarIcon"

const LetsTalkButton = () => {
    return (
        <span className="flex flex-row hover:bg-pale-white hover:text-black transform duration-200 ease-in cursor-pointer text-xl sm:text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl font-medium rounded-full border-2 border-white  px-5 py-2.5 sm:px-10 sm:py-5 ">
            <StarIcon delay={0.6} text="✦" once={false} tailwindClasses=" z-0 pr-5" />
            <CalendlyDynamic />
            <StarIcon delay={0.6} text="✦" once={false} tailwindClasses=" z-0 pl-5" />

        </span>
    )
}

export default LetsTalkButton