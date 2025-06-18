interface NotificationsProps {
    prioritys: string[]
    titles: string[]
    texts: string[]
    dates: string[]
    images: string[]
    alts: string[]
}

export default function Notifications(props: NotificationsProps) {
    const styles =  props.prioritys.map((_, number) => props.prioritys[number] === 'High' ? 'border-l-red-500' : props.prioritys[number] === 'Medium' ? 'border-l-yellow-500' : props.prioritys[number] === 'Low' ? 'border-l-blue-500' : '')

    

    props.images.map((_, number) => props.prioritys[number] === 'High' ? props.images[number] = 'bellRed.svg' : props.prioritys[number] === 'Medium' ? props.images[number] ='bellYellow.svg' : props.prioritys[number] === 'Low' ? props.images[number] ='bellBlue.svg' : '')
    

    return (
        <section className="flex flex-col w-full my-20 gap-10 items-center">
            {props.titles.map((title, number) => (
                <div className={`flex border-1 border-l-6 ${styles[number]} items-start w-6/9 border-gray-300  gap-8 `}>
                    <div className="flex w-1/5 justify-center py-2 min-md:w-1/7">
                        <img className=" w-1/3 rounded-1xl min-md:w-1/5" src={props.images[number]} alt={props.alts[number]} />
                    </div>
                    <div className="flex flex-col items-start gap-2 w-3/4">
                        <h1 className=" text-1xl font-semibold cursor-default"> {title} </h1>
                        <p> {props.texts[number]} </p>
                        <p className=""> {props.dates[number]} </p>

                    </div>

                </div>
            ))}
        </section>
    )
}