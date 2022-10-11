const Loader =() =>{
    let circleCommomClasses = 'h-2.5 w-2.5 bg-current rounded-full'

    return(
        <div className='flex'>
            <div className={`${circleCommomClasses}mr-1 animate-bounce`}></div>
            <div className={`${circleCommomClasses}mr-1 animate-bounce200`}></div>
            <div className={`${circleCommomClasses} animate-bounce400`}></div>
        </div>
    )
}

export default Loader;