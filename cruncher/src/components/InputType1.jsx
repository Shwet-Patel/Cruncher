const InputType1 = ({label , options ,defaultval , callback})=> {
    return(
        <div className=" py-2">
        <h1 className="opacity-80 text-sm tracking-wide font-medium">{label}</h1>
        <div className=" inline-flex mt-2 bg-darkcream rounded-md">
            {
                options.map((option)=>{
                    return(
                        <button className={`${option.id === defaultval ? " bg-lessdimblue rounded-md" : "hover:bg-dimblue hover:rounded-md duration-200 "}  lg:min-w-40 lg:min-h-8 md:min-w-28 min-w-24 min-h-4`} onClick={()=> { callback(option.id)}}>
                            <h1 className="py-2 text-sm tracking-wide font-medium whitespace-pre-line">{option.text}</h1>
                        </button>
                    );
                })
            }
        </div>
        </div>
    );
}

export default InputType1;