import { TextGradientYellowPurple, TextMainGradient } from "@/utils/ReueseClass";

export default function GoSpacePage() {
    return (
        <>
            <div className="h-screen w-screen flex flex-col gap-3 items-center justify-center">
               
                <h1 className="text-3xl font-medium flex flex-col justify-center items-center gap-4">
                    <span className={`${TextGradientYellowPurple} text-5xl`}>
                        Go Space {" "}
                    </span>
                    <span className={`${TextMainGradient}`}>
                    by {" "}
                        Ganesha Consulting
                    </span>
                </h1>

                <p className={`${TextMainGradient} !text-yellow-500 text-4xl px-4 py-2 rounded-2xl`}>
                    <span className={`shimmer-text`}>
                        Coming Soon!
                    </span>
                </p>
            </div>
        </>
    )
}