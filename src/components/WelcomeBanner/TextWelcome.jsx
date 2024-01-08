import { forum } from "@/app/ui/fonts";
import { Image } from "@nextui-org/react";


const TextWelcome = () => {
    return (
        <div className="flex ml-60 my-30 justify-between">
            <div>
                <Image
                    width={600}
                    alt="NextUI hero Image"
                    src="https://i.pinimg.com/564x/a4/6a/c1/a46ac1214e0673809c4ea17943ae0de5.jpg"
                />
            </div>

            <div className="pr-40">
                <h1 className="text-8xl flex flex-col gap-6 mr-20 mt-56 text-size">
                    <span className= {`${forum.className} antialiased`}>Feel</span>
                    <span className= {`${forum.className} antialiased`}> renewed</span>
                    <span className= {`${forum.className} antialiased`}> beautiful</span>
                    <span className= {`${forum.className} antialiased`}>with GabyMoss.</span>
                </h1>
            </div>
        </div>
    )
}

export default TextWelcome