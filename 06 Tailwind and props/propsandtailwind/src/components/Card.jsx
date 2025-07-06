

function Card({image,title,_id,price} ) {

        // const {image,title,_id,price}  =props

        return (
                <div className="w-72 flex flex-col rounded-xl glass  min-h-72 mt-3 border-3 border-black ">
                        <div>
                                        <img
                                                src={image}
                                                alt="test"
                                                width="300"
                                                height="300"
                                                className="rounded-t-xl w-full"
                                        />
                        </div>
                        <div className="flex flex-col py-3 px-3 pb-7 -mt-4 bg-black rounded-b-xl ">
                                        <div className="flex justify-between">
                                                <h1 className="font-RubikBold ">{title}</h1>
                                                <h1 className="font-bold font-RubikBold">Price</h1>
                                        </div>
                                        <div className="flex  justify-between font-mono">
                                                <p>#{_id}</p>
                                                <p>{price}</p>
                                        </div>
                        </div>
                </div>
        )
}

export default Card