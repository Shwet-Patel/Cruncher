const InputType1 = ({label , options ,defaultval , callback})=> {
    return(
        <div className=" py-2">
        <h1 className="opacity-80 text-sm tracking-wide font-medium">{label}</h1>
        <div className=" inline-flex mt-2 bg-darkcream rounded-md">
            {
                options.map((option)=>{
                    return(
                        <button className={`${option.id === defaultval ? " bg-lessdimblue rounded-md" : "hover:bg-dimblue hover:rounded-md duration-200 "}  lg:min-w-40 lg:min-h-8 md:min-w-28 sm:min-w-24 sm:min-h-4 min-w-16 min-h-2`} onClick={()=> { callback(option.id)}}>
                            <h1 className="py-2 sm:text-sm text-[0.5rem]  tracking-wide font-medium whitespace-pre-line">{option.text}</h1>
                        </button>
                    );
                })
            }
        </div>
        </div>
    );
}

export default InputType1;