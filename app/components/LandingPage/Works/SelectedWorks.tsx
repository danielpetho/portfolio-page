import selectedWorks from '@/src/data/selectedWorks.json'
import { SelectedWorkType } from '@/typings'
import SelectedWork from './SelectedWork'

const SelectedWorks = () => {
    return (
        <section className="overflow-x-hidden h-full min-h-screen mb-[10vmax]">
            <h1 className="text-[8vw] font-bold mx-[5vw] overflow-x-hidden">Selected Works [6]</h1>

            <div className="flex flex-col pt-[0vh] sm:pt-[0vh]">
                {selectedWorks.works.map((work: SelectedWorkType, idx: number) => (
                    <div key={idx} className="flex">
                        <SelectedWork id={idx} work={work} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SelectedWorks